## Create a new workflow from a template by ID

An exported workflow is an exact copy of a workflow. To import it into another environment, you'll need to adjust details such as the owner, actor, connections, and more. Using a workflow template makes it easier to transport a workflow from one environment to another.

Workflow templates are environment-agnostic representations of workflows, enriched with information about required apps and connections. Dependencies for specific versions of required apps are evaluated, and links to the Dynatrace Hub make installation simple. Connections for action types are listed and can be configured for the workflow. All steps are optional, allowing users to skip them if needed.

If you want users to have interactive guidance when configuring a workflow, use intents based on workflow templates instead of workflows.

This specific intent references a workflow template by its document ID and optionally allows further input values to tweak the selected workflow template.

### Define the intent

Below is an example of an intent referencing a workflow template document:

```json
{
  "workflowTemplateId": "dynatrace.slack.davis-problem-notification"
}
```

### Intent payload details

- `workflowTemplateId`: The document ID as a string. This is typically your app name concatenated with a period (`.`) and the document name, as provided in the app manifest that ships the template. (Required)
- `inputs`: A list of input objects. Each object contains:
  - `targets` A list of target properties specified as JSON Path strings in dot notation (e.g., `path.to.prop.foo`, `path.to.prop.bar`, etc.).
  - `value`: The value to set for the specified targets.

Note: Values for task properties that hold connection IDs will always be set to the connection selected by the user in the "Create workflow from template" wizard in the Workflows app, no matter the inputs configuration.
