## Get stored settings objects

To fetch only explicitly stored objects (without schema default fallback), use `settingsObjectsClient.listSettingsObjects`. Use this together with [update](#update-a-settings-object) or [delete](#delete-a-settings-object) operations to **manage** settings.

By default, only `objectId` and `version` are returned. Specify additional fields in `addFields`, and use `filter` and `sort` to narrow the results.

You can filter and sort by:

- `modificationInfo.createdBy`
- `modificationInfo.createdTime`
- `modificationInfo.lastModifiedBy`
- `modificationInfo.lastModifiedTime`
- `value` with properties and sub-properties separated by a dot (for example, `value.enabled = true`)
- `externalId`
- `owner.type`
- `owner.id`

Note that only fields included via `addFields` can be used for filtering and sorting.

```ts
import { settingsObjectsClient } from '@dynatrace-sdk/client-settings';

const objects = await settingsObjectsClient.listSettingsObjects({
  schemaId: 'builtin:maintenance-windows',
  scope: 'environment',
  addFields: 'value,summary,modificationInfo',
  filter: 'value.enabled = true',
  sort: '-modificationInfo.lastModifiedTime',
});
```

To fetch a single object by its ID:

```ts
import { settingsObjectsClient } from '@dynatrace-sdk/client-settings';

const object = await settingsObjectsClient.getSettingsObject({
  objectId: '<objectId>',
  addFields: 'value,summary',
});
```

Properties of type `secret` are always returned as masked values.

This operation requires the scope `settings:objects:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
