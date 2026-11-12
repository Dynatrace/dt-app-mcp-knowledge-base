## Create a new workflow from template

For an explanaition about workflow vs workflow template please see the description of the intent [Create a new workflow from template by id](https://developer.dynatrace.com/develop/guides/workflows/use-intents.md#create-a-new-workflow-from-template-by-id) -

We always recommend to use [Create a new workflow from template by id](https://developer.dynatrace.com/develop/guides/workflows/use-intents.md#create-a-new-workflow-from-template-by-id) over this intent, unless you encounter a limitation where you cant ship the template with your app. Please also mind the length restriction of an URL and therefore an intent, which effects the size of the workflow template you can provide.

### Define the intent

Here is an example of an intent for a workflow with two sequential tasks and an interval-based trigger:

```json
{
  "metadata": {
    "dependencies": {
      "apps": [
        {
          "id": "dynatrace.automations",
          "version": "^1.0.0"
        },
        {
          "id": "dynatrace.slack",
          "version": "^1.2.0"
        }
      ]
    },
    "inputs": [
      {
        "type": "connection",
        "schema": "app:dynatrace.slack:connection",
        "targets": ["tasks.send_message.connection"]
      }
    ]
  },
  "workflow": {
    "title": "Workflow from intent",
    "tasks": {
      "send_message": {
        "name": "send_message",
        "description": "Send a message to a Slack workspace",
        "action": "dynatrace.slack:slack-send-message",
        "input": {
          "message": "",
          "reaction": [],
          "connection": "",
          "workflowID": "{{ execution().workflow.id }}",
          "executionID": "{{ execution().id }}",
          "executionDate": "{{ execution().started_at }}",
          "appendToThread": false,
          "selectedRequestType": 0,
          "attachmentToggleValue": "none"
        },
        "position": {
          "x": 0,
          "y": 1
        }
      },
      "run_javascript": {
        "name": "run_javascript",
        "description": "Build a custom task running js Code",
        "action": "dynatrace.automations:run-javascript",
        "input": {
          "script": "export default async function () { \n  console.log('Hello world.')\n}"
        },
        "position": {
          "x": 0,
          "y": 2
        },
        "predecessors": ["send_message"]
      }
    },
    "trigger": {
      "schedule": {
        "trigger": {
          "type": "interval",
          "intervalMinutes": 25
        }
      }
    }
  }
}
```

### Intent payload details

- `metadata` contains app dependencies and connection configuration information (required).
  - `dependencies` contains app dependencies.
    - `apps` is a list of required apps as objects consisting of app `id` and `version`. `version` supports npm style [semver version range syntax](https://github.com/npm/node-semver#ranges).
  - `inputs` declares a set of input definitions for workflow task input configuration the user provides on import. It consists of `type` (the only supported type, for now, is "connection"), type-specific attributes (`schema` as fully qualified settings schema id for connection type), and `targets` as a list of JSON path style (dot notation) qualifiers to specify the task inputs to update with the connection id value from the wizard.
- `workflow` is similar to the workflow definition described in `Create a new workflow` section above but deliberately omits actor and owner information to allow environment-agnostic creation (required).
