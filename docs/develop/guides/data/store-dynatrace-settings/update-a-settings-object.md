## Update a settings object

To update an existing object, use `settingsObjectsClient.updateSettingsObject`. You must provide the current `version` from a previous GET response to prevent overwriting concurrent changes.

To update a property of type `secret`, pass the new value in plain text. To keep the current value, send the current masked secret (retrieved via a GET request).

> **Note**
>
> Some schemas don't allow passing of the masked secret. In that case you must send the unmasked secret with every update of the object, regardless of whether the secret itself changed. Check the schema definition to determine whether this applies.

```ts
import { settingsObjectsClient } from '@dynatrace-sdk/client-settings';

const objects = await settingsObjectsClient.listSettingsObjects({
  schemaId: 'builtin:maintenance-windows',
  scope: 'environment',
});

await settingsObjectsClient.updateSettingsObject({
  objectId: objects.items[0].objectId,
  optimisticLockingVersion: objects.items[0].version,
  body: {
    value: {
      name: 'Weekend maintenance',
      enabled: false,
      schedule: {
        trigger: {
          type: 'time',
          recurring: { time: '02:00:00' },
        },
        duration: 120,
      },
      filter: 'entity.type == "HOST"',
      autoDelete: false,
    },
  },
});
```

Remember that `version` changes on every modification. Always use the most recently retrieved `version` for updates.

This operation requires the scope `settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
