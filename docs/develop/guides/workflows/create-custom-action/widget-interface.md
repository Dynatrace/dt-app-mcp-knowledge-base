## Widget interface

The App Toolkit generates a default widget interface for you after you execute the `npx dt-app action create` command. For the **greeter** action, you'll find this default widget UI in `/actions/greeter.widget.tsx`. It has two UI elements:

- **Connection**: It's an [`AutomationConnectionPicker`](https://developer.dynatrace.com/develop/reference/react-components/automation-action/AutomationConnectionPicker.md) component that lets you pick an app setting. The user defines this app setting, which contains information to connect to an external system. It's then sent to the **action logic** as the `connectionId` property.
- **Name**: It's an input element where the user can insert their name. It's also sent to the action logic as a `name` property.

:::caution Automation action components
Build the widget's input elements with components from [`@dynatrace/automation-action-components`](https://developer.dynatrace.com/develop/reference/react-components/automation-action.md). These components support expression mode, along with autocompletion, expression chips, and the expression editor, which the standard Strato form fields don't provide. Only use standard Strato components for UI interaction where you are absolutely sure no parameterization via expressions is required. This should be the case very seldom.
:::

:::caution Backwards compatibility
The input produced by the widget is the payload for the action app function, and the app function's return value is the action's result. Both form a contract with every workflow that already uses the action, so changes to them must stay backwards-compatible. See [Safely evolve your action](#safely-evolve-your-action).
:::

This code will result in the following widget UI:

![Widget UI](./assets/widget.png)

> **Note**
>
> While developing locally, you can mock the connection picker value (`My Connection`). Go to [local development](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md#local-development) section for app settings to learn more.
