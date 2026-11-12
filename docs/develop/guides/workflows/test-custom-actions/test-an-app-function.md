## Test an app function

Refer to the [Dynatrace Apps testing guide](https://developer.dynatrace.com/develop/test-and-troubleshoot/test/create-unit-tests-jest.md#test-your-app-functions) on how to write tests for app functions.

### Write unit and integration tests

The app function testing guide emphasizes testing the business logic of functions. We recommend focusing on testing individual function invocations and simulating dependencies and requests. This approach allows isolated testing of core functionality to ensure proper behavior. By simplifying the testing environment and abstracting away external dependencies, you can effectively evaluate if your app functions work as expected.

### Write E2E tests

> **Note**
>
> Your test workflow will use the actions currently installed in the target environment. During the setup, deploy and ensure that the action version you expect to test is correct.
> If your custom action uses the settings schema for connection details, also ensure that:
>
> - You've created settings schemas.
> - Connections objects exist.

The E2E testing guide emphasizes testing the interaction between your application and third-party systems. Verifying seamless integration with these systems is essential to avoid regressions.

We recommend creating your test scenarios as workflows using a Workflows API. Run these workflows and inspect the results of their execution. The testing process shouldn't involve any user interface interactions.

By utilizing the Workflows API, you can simulate various scenarios and test the interactions and behavior of your app function with Dynatrace or third party systems. Analyzing the workflow execution results will help you identify any issues or regressions of your app functions.

What you should test:

- Single invocations with different parameters for test scenarios.
- Several app functions tested together; those are scenarios where the input of the subsequent app function invocations depends on the results of the previous one.
- E2E tests are the only place where you should use [Jinja expressions](https://docs.dynatrace.com/docs/shortlink/automation-workflow-expression-reference). All other tests should avoid the syntax. AutomationEngine resolves them to static values, which your actions later use as inputs.

> **Note**
>
> In some test cases, you may expect an app function that implements an action to fail intentionally, such as receiving an HTTP 403 response from a request. In such situations, we recommend creating an intermediate placeholder task with a custom start condition to validate if the previous task failed as expected.
>
> This approach allows you to verify the desired behavior explicitly and ensures that the initial tasks, based on their expected outcome, trigger subsequent tasks. By incorporating these intermediate checks, you can effectively test and validate how your app handles failure scenarios.

#### Example

The example below shows a TypeScript script that leverages the [Automation SDK](https://developer.dynatrace.com/contents/docs/develop/sdks/client-automation/index.md/) to create and run a workflow. The script also checks for the final state of the workflow execution.

The workflow consists of three tasks in a sequence:

- Make a Jira issue.
- Comment on the Jira issue.
- Transfer the issue to a different state.

> **Note**
>
> Using the Workflow API, you can use any programming language and tools for such tests. To access its visual documentation, navigate to `https://<Your-Environment-Url>/platform/swagger-ui/index.html?urls.primaryName=Automation`
>
> Remember to replace `<Your-Environmental-Url>` with your environmental URL address in the link above.

```ts title="action-e2e.spec.ts" skip-testing
import { workflowsClient, ExecutionState, executionsClient } from '@dynatrace-sdk/client-automation';

const workflow = await workflowsClient.createWorkflow({
  body: {
    title: '[e2e] Test Jira actions',
    tasks: {
      create_issue: {
        name: 'create_issue',
        input: {
          project: {
            id: '18890',
          },
          issueType: {
            id: '2',
          },
          description: 'New issue',
          connectionId:
            'vu9U3hXa3q0AAAABAB1hcHA6ZHluYXRyYWNlLmppcmE6Y29ubmVjdGlvbgAGdGVuYW50AAZ0ZW5hbnQAJGI4MjU2NDI1LTM5YWEtM2ZlMi05NzgzLTlkOGE1ZmQ0MWFkY77vVN4V2t6t',
        },
        action: 'dynatrace.jira:jira-create-issue',
        position: {
          x: 0,
          y: 1,
        },
      },
      comment_on_issue: {
        name: 'comment_on_issue',
        input: {
          comment: 'Updating with relevant details',
          issueID: '{{ result("create_issue").id }}',
          connectionId:
            'vu9U3hXa3q0AAAABAB1hcHA6ZHluYXRyYWNlLmppcmE6Y29ubmVjdGlvbgAGdGVuYW50AAZ0ZW5hbnQAJGI4MjU2NDI1LTM5YWEtM2ZlMi05NzgzLTlkOGE1ZmQ0MWFkY77vVN4V2t6t',
        },
        action: 'dynatrace.jira:jira-add-comment',
        position: {
          x: 0,
          y: 2,
        },
        conditions: {
          states: {
            create_issue: 'OK',
          },
        },
        description: 'Comment on a Jira issue',
        predecessors: ['create_issue'],
      },
      transition_issue: {
        name: 'transition_issue',
        input: {
          project: '18890',
          issue: '{{ result("create_issue") }}',
          issueType: '2',
          connectionId:
            'vu9U3hXa3q0AAAABAB1hcHA6ZHluYXRyYWNlLmppcmE6Y29ubmVjdGlvbgAGdGVuYW50AAZ0ZW5hbnQAJGI4MjU2NDI1LTM5YWEtM2ZlMi05NzgzLTlkOGE1ZmQ0MWFkY77vVN4V2t6t',
          targetStatus: '11415',
        },
        action: 'dynatrace.jira:jira-transition-issue',
        position: {
          x: 0,
          y: 3,
        },
        conditions: {
          states: {
            comment_on_issue: 'OK',
          },
        },
        predecessors: ['comment_on_issue'],
      },
    },
  },
});

// Utility function to block the script execution for `ms` milliseconds.
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const POLL_INTERVAL = 5 * 1000; // 5 seconds

let execution = await workflowsClient.runWorkflow({ id: workflow.id as string, body: {} });
// Poll the execution state until it's finished.
while (execution.state === ExecutionState.Idle || execution.state === ExecutionState.Running) {
  execution = await executionsClient.getExecution({ id: execution.id as string });
  await sleep(POLL_INTERVAL);
}

if (execution.state !== ExecutionState.Success) {
  console.error('E2E tests failed');
  process.exit(1);
}
```
