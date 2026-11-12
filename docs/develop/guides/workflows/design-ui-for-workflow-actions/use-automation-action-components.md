## Use automation action components

Automation action components provide Workflows-specific functionality compared to the standard Strato form field components. Automation action components offer autocompletion, chips, an expression editor, and an expression preview, which are essential to users defining dynamic task inputs using expressions.

### AutomationConnectionPicker

Whenever your users need to set up a third-party connection before using a Workflow action, **use the** [**AutomationConnectionPicker**](https://developer.dynatrace.com/develop/reference/react-components/automation-action/AutomationConnectionPicker.mdx/). This component handles the user flow of the provided actions for editing and creating a connection out-of-the-box. To understand the user journey and see where the buttons and links provided by this component will lead, refer to the visualization below for the flow. Note that you can't configure this flow yourself:

**Placement:** Always place the AutomationConnectionPicker at the top of the form — before any other fields. If your action only interacts with the Dynatrace platform, skip it entirely.

**Resilience:** If you use the connection to power lookups in other fields (for example, fetching a list of tables from the target system), those lookups must degrade gracefully. A connection might be selected dynamically by expression at runtime, or the third-party system might be temporarily unavailable. Your UI must never rely on a valid connection to provide values or perform validation — catch errors silently and show a hint such as "Can't retrieve list of tables currently" instead of a form error. The user must always be able to edit the field manually.

- [Editing a selected connection](#edit-a-selected-connection), and

- [Creating a new connection](#create-a-new-connection)

### Edit a selected connection

When the user selects "Edit connection”, a modal intent with the connection details pops up. With the right permissions, the user can edit the connection.

![workflow action connection edit flow](https://developer.dynatrace.com/assets/images/workflow_action_connection_edit_flow-ed4c48235945df3bd04b8f873481bf04.png)

### Create a new connection

When the user selects "Create new connection," a modal intent for adding a new connection for this third-party integration pops up. With the right permissions, the user can create the new connection.

![workflow action connection create flow](https://developer.dynatrace.com/assets/images/workflow_action_connection_create_flow-a9963c130f8f31340a6459c9f680c2e7.png)

### AutomationTextInput

If your users need to fill in a single line string or expression, **use the** [**AutomationTextInput**](https://developer.dynatrace.com/develop/reference/react-components/automation-action/AutomationTextInput.mdx/) component.

### AutomationNumberInput

If your users need to fill in a single line number or expression, **use the** [**AutomationNumberInput**](https://developer.dynatrace.com/develop/reference/react-components/automation-action/AutomationNumberInput.mdx/) component.

### AutomationSelect (= drop-down select)

The Workflow Engine provides the [AutomationSelect](https://developer.dynatrace.com/develop/reference/react-components/automation-action/AutomationSelect.mdx/) component that combines extra functionality within a drop-down select component. **Use this component if**:

- You have a list to choose from.

- Your users can enter an expression instead of selecting from a list of items.

![workflow action automation select](https://developer.dynatrace.com/assets/images/workflow_action_automation_select-03982d71595278e3f16d732fb7784c6e.png)

You need to use AutomationSelect when creating automation widgets because of its specific characteristics for writing expressions. Even if radio buttons are the correct control, you shouldn't use them because they don't allow the user to provide an expression to dynamically define the value.

There's currently no checkbox or switch component in automation action components. Instead, use an `AutomationSelect` component with two options: users can either pick a static value from the dropdown or switch to expression mode to define the value dynamically.

### AutomationCodeEditor

If you expect your input to be an expression longer than one line, **use the** [**AutomationCodeEditor**](https://developer.dynatrace.com/develop/reference/react-components/automation-action/AutomationCodeEditor.mdx/). It has autocompletion, which allows users to enter code faster. If the expected input is only text rather than code, use the Strato [TextInput](https://developer.dynatrace.com/design/components/forms/TextInput/index.mdx/) or [TextArea](https://developer.dynatrace.com/design/components/forms/TextArea/index.mdx/) instead.
