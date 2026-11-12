## Get effective settings values

Effective values represent the resolved configuration for a given schema and scope. Use this when you want to **read** configuration in your app rather than manage it.

The operation evaluates the full hierarchy of persisted objects and always returns a result for any schema and scope combination, even if the schema is not specifically relevant to the given entity. Resolution works as follows:

- If a settings object is persisted at the requested scope, its value is returned.
- If no object is persisted at the requested scope, the value is inherited from the parent scope (for example, the kubernetes cluster, and then the environment level).
- If no object is persisted anywhere along the hierarchy, the default value as defined in the schema is returned.

```ts
import { settingsObjectsClient } from '@dynatrace-sdk/client-settings';

const result = await settingsObjectsClient.listEffectiveSettingsValues({
  schemaId: 'builtin:maintenance-windows',
  scope: 'environment',
  addFields: 'summary,value',
});
```

The result depends on the `multiObject` property of the schema:

- `false`: a single object is returned, containing either the persisted value or the schema default.
- `true`: the merged list of persisted objects along the hierarchy is returned, or an empty list if nothing is persisted and no default is defined.

This operation requires the scope `settings:objects:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
