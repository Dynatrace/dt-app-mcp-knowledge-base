## Create a settings object

To create a new settings object, use `settingsObjectsClient.upsertSettingsObject`. You must provide the `schemaId`, `scope`, and `value`.

```ts
import { settingsObjectsClient } from '@dynatrace-sdk/client-settings';

const response = await settingsObjectsClient.upsertSettingsObject({
  body: {
    schemaId: 'builtin:maintenance-windows',
    scope: 'environment',
    value: {
      name: 'Weekend maintenance',
      enabled: true,
      schedule: {
        trigger: {
          type: 'time',
          recurring: { time: '02:00:00' },
        },
        duration: 60,
      },
      filter: 'entity.type == "HOST"',
      autoDelete: false,
    },
  },
});
```

The response contains the `objectId` and `version` of the newly created object. You need the `objectId` to update or delete the object, and the `version` for optimistic locking.

This operation requires the scope `settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
