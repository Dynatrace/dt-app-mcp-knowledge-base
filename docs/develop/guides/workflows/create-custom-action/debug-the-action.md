## Debug the action

Workflows offer a dev-helper tool that helps you debug action widgets.

![Dev Helper](https://developer.dynatrace.com/assets/images/dev-helper-90b2c53c8ef97f78a74fdd9d7cc9d4f1.png)

You can access the dev helper via the links displayed by the `dt-app` on your terminal after executing the `npx dt-app dev` command. The link points to the Automations dev-helper app and its URL follows this style: `https://<your-environment>/ui/apps/dynatrace.automations/dev-helper?src=<widget-url>`.

> **Note**
>
> The total size of a custom workflow action's result and log data must not exceed 6 MB. A larger response will cause the action to fail.
