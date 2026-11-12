You can extend Workflows via custom actions. In a custom action, you implement your integration with any third-party system that allows the user to communicate with other systems. Users can then add your custom action as a **task** to their workflows. This guide explains how to create a custom action.

In this guide, you'll create a custom action named **greeter** that:

- Accepts a name and a connection as an input.
- Returns a greeting message using the name given as the input and logs the message in Workflows.
- Shows how to retrieve the connection as an app settings object by its ID.
