## About workflow tasks

Below, you can see an overview of the Workflows app. It displays the workflow action in the right-side panel, which we call the detail view. This guide will help you design the detail view. Placing an action in a workflow adds a task comprising the selected action and its values.

![workflow action overview](https://developer.dynatrace.com/assets/images/workflow_action_about_actions-d6c46b24efc1b49590c1fc4fd2d93b1f.svg)

### Detail view building blocks

A workflow task consists of the following building blocks:

- Workflow task header
- Workflow action widget

### Workflow task header

The workflow task header is provided by the Workflows app and is automatically populated when a user selects your action. As an action developer, you define the following in the app config:

![workflow task header](https://developer.dynatrace.com/assets/images/workflow_action_header-467f78ea92a3300e52d7dbb68a58cd58.png)

1. **App icon:** Displayed next to the task title which is compiled based on the action name as defined at the app level. You can find more information about third-party icons in our documentation [App Icons](https://developer.dynatrace.com/design/icons/app-icons/index.mdx/).

2. **Task name:** Pre-populates the task name when the action is selected based on `name` of your action. It sets the user's initial expectation of what the task does.

3. **Task description:** Pre-populates the task description when your action is selected based on `description` of your action. Keep it short and specific.

### Workflow action widget

![workflow action building blocks](https://developer.dynatrace.com/assets/images/workflow_action_building_blocks-477dd706e339576f4d921251272169ee.png)

1. **Connection:** Use the AutomationConnectionPicker component. The link to “Create new connection” opens a **modal** for this Connector. Use the format “Select or create a connection” as the title for this section. Because of this title, the select field doesn't need its own label.

2. **Task inputs:** This section contains a structured block of form fields that users need to complete for this action. Use the format “Provide [content of this action] details” as the title for this section. The title should clearly refer to the goal of the action to add value for the user. For example: "Provide message details," "Provide incident details."

3. **Subgroups of task inputs:** A title that separates form fields into groups of content. One action can have several groups. [Read more about grouping content here](#group-form-fields).

4. **Help:** a help icon button that holds contextual information, such as links to documentation. [Read more about providing contextual help here](#help-button-with-links).
