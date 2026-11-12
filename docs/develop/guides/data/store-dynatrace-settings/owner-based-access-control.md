## Owner-based access control

If a schema has `ownerBasedAccessControl` enabled, the user who first creates an object is its owner. Only the owner can read or write that object by default.

The following sections mention accessors. An accessor can be a specific `user`, a `group`, or the `all-users` type, which applies to all users.

### Transfer ownership

An owner has read and write access to their object. A settings object can have only one owner.

To transfer ownership, use `settingsPermissionsClient.transferSettingsObjectOwnership`. After the transfer, the previous owner loses access unless they were granted explicit permissions beforehand.

```ts
import { settingsPermissionsClient } from '@dynatrace-sdk/client-settings';

await settingsPermissionsClient.transferSettingsObjectOwnership({
  objectId: '<objectId>',
  body: {
    newOwner: {
      type: 'user',
      id: '550e8400-e29b-41d4-a716-446655440000',
    },
  },
});
```

This operation requires the scope `settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Add permissions for an accessor

To grant permissions to a user or group for a settings object, use `settingsPermissionsClient.addSettingsObjectAccessorPermissions`. Only users with read and write access on the object can add permissions for new accessors.

```ts
import { settingsPermissionsClient } from '@dynatrace-sdk/client-settings';

await settingsPermissionsClient.addSettingsObjectAccessorPermissions({
  objectId: '<objectId>',
  body: {
    accessor: {
      type: 'group',
      id: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
    },
    permissions: ['r', 'w'],
  },
});
```

This operation requires the scope `settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Get permissions for all accessors

Use `settingsPermissionsClient.getSettingsObjectPermissions` to get all permissions for a specific settings object:

```ts
import { settingsPermissionsClient } from '@dynatrace-sdk/client-settings';

const permissions = await settingsPermissionsClient.getSettingsObjectPermissions({
  objectId: '<objectId>',
});
```

This operation requires the scope `settings:objects:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Update permissions for an accessor

To update permissions for an existing accessor, use `settingsPermissionsClient.updateSettingsObjectAccessorPermissions` for `user` and `group` accessors, or `settingsPermissionsClient.updateSettingsObjectAllUsersPermissions` for the `all-users` type:

```ts
import { settingsPermissionsClient } from '@dynatrace-sdk/client-settings';

await settingsPermissionsClient.updateSettingsObjectAccessorPermissions({
  objectId: '<objectId>',
  accessorType: 'group',
  accessorId: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
  body: {
    permissions: ['r'],
  },
});
```

This operation requires the scope `settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Remove permissions for an accessor

To remove all permissions for an accessor, use `settingsPermissionsClient.deleteSettingsObjectAccessorPermissions` (for `user` and `group`) or `settingsPermissionsClient.deleteSettingsObjectAllUsersPermissions` (for `all-users`):

```ts
import { settingsPermissionsClient } from '@dynatrace-sdk/client-settings';

await settingsPermissionsClient.deleteSettingsObjectAllUsersPermissions({
  objectId: '<objectId>',
});
```

This operation requires the scope `settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Administrator access

To bypass access checks for administrator tasks, pass `adminAccess: true` to any read or write operation. This requires the `settings:objects:admin` scope.

```ts
import { settingsObjectsClient } from '@dynatrace-sdk/client-settings';

const objects = await settingsObjectsClient.listSettingsObjects({
  schemaId: 'builtin:maintenance-windows',
  scope: 'environment',
  adminAccess: true,
});
```

This operation requires the following scopes:

- `settings:objects:write`
- `settings:objects:admin`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
