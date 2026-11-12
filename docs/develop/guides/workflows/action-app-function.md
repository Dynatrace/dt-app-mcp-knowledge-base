### Action app function

App functions implement the actual logic of an action. When implementing your desired business logic, be aware of the following app function [limitations](https://developer.dynatrace.com/develop/guides/app-functions.md#runtime-limitations).

The AutomationEngine invokes the action app function while processing tasks and their actions. Any expression used in a task input is resolved at runtime of the workflow. Looking at a task in the execution monitor of Workflows shows all resolved inputs as provided to the function invocation by the AutomationEngine.

If your Custom Action requires a connection (app setting) the related schema must have the following properties:

- MultiObject property must be set to true
- Name property must be apply unique constraint
- Ordered property must be set to false

Use the generated sample as a template for customizations.

- [Automate app function runs](https://developer.dynatrace.com/develop/guides/workflows/automate-app-function-runs.md): Run app functions automatically through the Workflows app.
- [Create a custom workflow action](https://developer.dynatrace.com/develop/guides/workflows/create-custom-action.md): Create custom workflow actions to integrate third-party systems into your workflows.
- [Design a UI for workflow actions](https://developer.dynatrace.com/develop/guides/workflows/design-ui-for-workflow-actions.md): A step-by-step guide on how to design a custom workflow action
- [Test custom actions](https://developer.dynatrace.com/develop/guides/workflows/test-custom-actions.md): Test your custom workflow actions within Dynatrace Apps.
- [Use intents for Workflows](https://developer.dynatrace.com/develop/guides/workflows/use-intents.md): Use intents provided by the Workflows app.
