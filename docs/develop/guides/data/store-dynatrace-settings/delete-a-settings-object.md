## Delete a settings object

To delete an object, use `settingsObjectsClient.deleteSettingsObject` with its `objectId` and current `version`:

```ts
import { settingsObjectsClient } from '@dynatrace-sdk/client-settings';

const objects = await settingsObjectsClient.listSettingsObjects({
  schemaId: 'builtin:maintenance-windows',
  scope: 'environment',
});

await settingsObjectsClient.deleteSettingsObject({
  objectId: objects.items[0].objectId,
  optimisticLockingVersion: objects.items[0].version,
});
```

This operation requires the scope `settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
