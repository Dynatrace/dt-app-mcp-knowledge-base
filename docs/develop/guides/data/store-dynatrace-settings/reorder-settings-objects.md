## Reorder settings objects

For schemas that are both `multiObject` and `ordered`, you can reorder the objects using `settingsObjectsClient.reorderSettingsObjects`. The request requires the current `version` from the list response. If any objects change concurrently, the reorder is rejected to prevent overwriting changes.

```ts
import { settingsObjectsClient } from '@dynatrace-sdk/client-settings';

const objects = await settingsObjectsClient.listSettingsObjects({
  schemaId: 'builtin:maintenance-windows',
  scope: 'environment',
});

await settingsObjectsClient.reorderSettingsObjects({
  optimisticLockingVersion: objects.optimisticLockingVersion,
  body: {
    schemaId: 'builtin:maintenance-windows',
    scope: 'environment',
    sections: [
      {
        firstObjectId: objects.items[0].objectId,
        lastObjectId: objects.items[objects.items.length - 1].objectId,
        order: objects.items.map((item) => ({ objectId: item.objectId })).reverse(),
      },
    ],
  },
});
```

This operation requires the scope `settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
