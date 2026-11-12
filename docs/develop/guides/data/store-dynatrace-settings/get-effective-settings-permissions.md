## Get effective settings permissions

To check whether the calling user has specific permissions for given schemas and scopes, use `settingsPermissionsClient.resolveEffectivePermissions`:

```ts
import { settingsPermissionsClient } from '@dynatrace-sdk/client-settings';

const permissions = await settingsPermissionsClient.resolveEffectivePermissions({
  body: {
    permissions: [
      {
        permission: 'settings:objects:read',
        context: { schemaId: 'builtin:maintenance-windows', scope: 'environment' },
      },
      {
        permission: 'settings:objects:write',
        context: { schemaId: 'builtin:maintenance-windows', scope: 'environment' },
      },
    ],
  },
});
```

The function returns an array with the resolution result for each requested permission:

```json
[
  {
    "permission": "settings:objects:read",
    "granted": "true",
    "context": { "schemaId": "builtin:maintenance-windows", "scope": "environment" }
  },
  {
    "permission": "settings:objects:write",
    "granted": "false",
    "context": { "schemaId": "builtin:maintenance-windows", "scope": "environment" }
  }
]
```

This operation requires the scope `settings:schemas:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

> **Tip**
>
> You can also [query user permissions](https://developer.dynatrace.com/develop/guides/security/query-user-permissions.md).
