## Discover available schemas

To list the schemas you can work with, use `settingsSchemasClient.listSchemaDefinitions`. By default, only `schemaId`, `displayName`, and `latestSchemaVersion` are returned. Use `addFields` to include additional metadata.

```ts
import { settingsSchemasClient } from '@dynatrace-sdk/client-settings';

const schemas = await settingsSchemasClient.listSchemaDefinitions({
  addFields: 'multiObject,ordered,ownerBasedAccessControl',
});
```

To get the full definition of a specific schema, including its properties and constraints:

```ts
import { settingsSchemasClient } from '@dynatrace-sdk/client-settings';

const schema = await settingsSchemasClient.getSchemaDefinition({
  schemaId: 'builtin:maintenance-windows',
});
```

This operation requires the scope `settings:schemas:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
