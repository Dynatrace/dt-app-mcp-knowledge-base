## Review settings history

To retrieve the revision history of settings objects, use `settingsHistoryClient.listSettingsHistory`. You must provide `schemaIds` and `scope`, and optionally filter by modification time or user.

By default, only revisions from the last two weeks are returned. Use the `filter` parameter to specify a wider or narrower time range.

```ts
import { settingsHistoryClient } from '@dynatrace-sdk/client-settings';

const history = await settingsHistoryClient.listSettingsHistory({
  schemaIds: 'builtin:maintenance-windows',
  scope: 'environment',
  addFields: 'revision,modificationInfo,jsonBefore,jsonAfter',
  sort: '-modificationInfo.lastModifiedTime',
});
```

Supported `addFields` for history: `revision`, `jsonPatch`, `jsonBefore`, `jsonAfter`, `objectId`, `type`, `schemaVersion`, `modificationInfo`, `schemaId`, `schemaDisplayName`, `summary`, `appId`, `source`, `ownerBefore`, `ownerAfter`.

You can filter history by:

- `revision`
- `objectId`
- `schemaVersion`
- `modificationInfo.lastModifiedTime`
- `modificationInfo.lastModifiedBy`

This operation requires the scope `settings:objects:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
