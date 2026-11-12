## Action logic

The App Toolkit generates a default action logic in the `/actions` directory. This default code handles the `connectionId` and the `name` payload sent by the widget interface. You can find the file at `/actions/greeter.actions.ts`. This file is an [app function](https://developer.dynatrace.com/develop/guides/app-functions.md) explicitly for the **greeter** action.

It's essential to understand the following things:

- The input from the widget interface is available as the `payload` property.
- The app function's return value becomes the output of the action.

### Get app settings

If you look at the code in the file, you'll find that you can get the app settings using `getAppSettingsObjectByObjectId` from `@dynatrace-sdk/client-app-settings-v2` as follows:

```ts skip-testing
const connectionObject = await appSettingsObjectsClient.getAppSettingsObjectByObjectId({
  objectId: payload.connectionId,
});
```

It'll give you access to the URL and the token required to access the external system through `connectionObject.value.url` and `connectionObject.value.token`, respectively. You can use them to access the external system in your app function.

The `generate action` command automatically includes the `app-settings:objects:read` scope in your app config, which is essential for operating the `getAppSettingsObjectByObjectId` function. There's no need for manual scope addition, as the command ensures your app has correct permissions for accessing settings objects.

:::caution Access connections as the user
An action must use the workflow actor's own permissions to reach its connection. Don't use admin access to see a connection it wouldn't normally have access to.

A workflow runs on behalf of the actor, so that person's identity must be able to reach the connection when the workflow runs. The person picking the connection also needs access to it. Admin access lets you read objects that other users own, and it exists for cleanup tasks, not for giving an action access it doesn't have. Use it that way, and the workflow looks like it works while you're building it, but breaks once it actually runs.

Admin access won't even work as a workaround. When you read a settings object with admin access, the system hides the values of any field of type `secret`. So the action ends up with a connection that has no token and it still can't authenticate with the external system.
:::

It's essential to understand that there are different types of fields in settings. Especially for any credentials like `token`, the [`"type": "secret"` should be used](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md#use-secrets).

### Log messages

You can log messages for the end user using the `userLogger` function exported by `@dynatrace-sdk/automation-action-utils` as follows:

```ts skip-testing
userLogger.info(`Hello ${payload.name}! Have a great day!`);
```

These logs appear in the task's logs in the Workflow for every execution.

An action has two logging channels with different audiences, so use them deliberately:

- **`userLogger`** is visible to the user in the execution monitor. Because the user decides whether to share it, it may carry data that helps them debug, such as sanitized URLs, response bodies with sensitive fields redacted, or partial identifiers. On failure, write a single structured block here - the request method and URL (without headers), the response status, and the error message - so the user can copy it, redact anything sensitive, and hand it to support in one step instead of round-tripping for details.
- **`console.*`** feeds Dynatrace platform self-monitoring. Follow general logging best practices, especially never log anything containing secrets or personal data.

Regardless of the channel, never log sensitive data, such as `Authorization` header values or tokens.

> **Note**
>
> The log size is limited to 1 MB.
