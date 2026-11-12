Workflows are a powerful tool that lets you automatically act on monitoring data. Create workflows that generate scheduled reports, notify you about detected issues, or even mitigate them immediately.

This section provides you with guides on how you can leverage Workflows when developing custom apps.

> **Tip**
>
> To learn more about how to use Workflows, visit [Dynatrace Documentation](https://docs.dynatrace.com/docs/shortlink/workflows).

## Custom action

A workflow consists of a directed acyclic graph of tasks that defines their invocation sequence. Each task invokes an action with given inputs and might return a result. Dynatrace provides a set of built-in actions, such as **JavaScript** or **HTTP request**, and the possibility to create custom actions to extend the platform.

An action consists of the following:

- A widget that allows users to define the input as a static value or expression, called widgets. The task input the user configures via the widget is stored in the workflow.
- A Dynatrace app function invoked with the task input by the AutomationEngine at runtime. The AutomationEngine resolves expressions before it invokes the action.
- An action typically connects to a third party system. Information related to this connection (URL, credentials, etc.) is a specific type of input that defines its schema and can be managed separately. The user can pick it up in the widget and resolve it in the action app function so the connection can be established.
