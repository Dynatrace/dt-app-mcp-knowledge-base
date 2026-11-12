## Owner-based access control

If a schema has the `ownerBasedAccessControl` property set to `true`, users can more finely control which users can access specific settings.
For these types of schemas, the user that first stores a settings object is the `owner` of that object.
By default, only the `owner` can access these objects, but the following sections explain how to share control over these objects. These APIs only work on a single-settings object per request.
For the examples listed below, assume the `my-example` schema has the `ownerBasedAccessControl` property set to `true`.

The following sections mention accessors. An accessor can be a specific `user`, a `group`, or the `all-users` type, which applies to all users. When using the `all-users` type, you don't need to specify any ID.

### Transfer ownership

An owner has read and write access to their object. A settings object can have only one owner, but the owner can be any kind of accessor.

To transfer this ownership of a settings object to a different accessor, use the `useTransferOwnershipV2` hook.

After the request is sent, the previous owner loses access, so owners might want to use the permission mechanism described in the next section to add permissions they want to retain before transferring ownership.

In the following example, you transfer the ownership of a settings object to a fictional user on the first object of the `my-example` schema, assuming you have ownership over that object:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-start
import { useSettingsObjectsV2, useTransferOwnershipV2 } from '@dynatrace-sdk/react-hooks';
// highlight-end
import { Button } from '@dynatrace/strato-components/buttons';

export const App = () => {
  // highlight-start
  const { data } = useSettingsObjectsV2({
    schemaId: 'my-example',
  });
  const { execute } = useTransferOwnershipV2();
  // highlight-end

  const handleOnClick = () => {
    if (data) {
      // highlight-start
      execute({
        objectId: data.items[0].objectId,
        body: {
          newOwner: {
            type: 'user',
            id: '550e8400-e29b-41d4-a716-446655440000',
          },
        },
      });
      // highlight-end
    }
  };

  return <Button onClick={handleOnClick}>Transfer ownership</Button>;
};
```

This operation requires the scope `app-settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Add permissions for an accessor to an object

To grant permissions for an accessor to an existing settings object, use the `useCreatePermissionsV2` hook.

You can grant the accessor either read-only or read-and-write access. You can only use an accessor without permission on the object. For the others, you should use the update function, which is documented further below.\
Only users with read and write access on the object can add permissions for a new accessor.

In the following example, you grant read and write access to a fictional group on the first object of the `my-example` schema. This means that all users belonging to this group receive read and write access:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-start
import { useSettingsObjectsV2, useCreatePermissionsV2 } from '@dynatrace-sdk/react-hooks';
// highlight-end
import { Button } from '@dynatrace/strato-components/buttons';

export const App = () => {
  // highlight-start
  const { data } = useSettingsObjectsV2({
    schemaId: 'my-example',
  });
  const { execute } = useCreatePermissionsV2();
  // highlight-end

  const handleOnClick = () => {
    if (data) {
      // highlight-start
      execute({
        objectId: data.items[0].objectId,
        body: {
          accessor: {
            type: 'group',
            id: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
          },
          permissions: ['r', 'w'],
        },
      });
      // highlight-end
    }
  };

  return <Button onClick={handleOnClick}>Add permissions</Button>;
};
```

This operation requires the scope `app-settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Get permissions of all accessors of an object

Use the `usePermissionsV2` hook to get an overview of all permissions for each accessor of a specific settings object.

Only users with read access to the object can get the permissions overview.

In the following example, you get a permission overview for the object with a specific `objectId`:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-next-line
import { usePermissionsV2 } from '@dynatrace-sdk/react-hooks';
import { ExternalLink, Paragraph, List, Text } from '@dynatrace/strato-components/typography';
import { Flex } from '@dynatrace/strato-components/layouts';

export const App = () => {
  // highlight-start
  const { data, isLoading } = usePermissionsV2({
    objectId: '<some objectId>',
  });
  // highlight-end

  return (
    <Flex>
      {!isLoading && data && (
        <List>
          {data.accessors.map((item) => (
            <Text key={item.accessor.id}>
              {item.accessor.type} {item.accessor.id}
            </Text>
          ))}
        </List>
      )}
    </Flex>
  );
};
```

This operation requires the scope `app-settings:objects:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Get permissions of a single accessor on an object

To read the permissions of one specific accessor, use either the `useAccessorPermissionsV2` or the `useAllUsersPermissionsV2` hook.

The first hook is for accessors of type `user` and `group`, the second for the `all-users` type. Unlike `usePermissionsV2`, which returns the full list of accessors, these hooks return the permissions of a single accessor, which is useful for rendering the state of one user, group, or the `all-users` sharing toggle.

Only users with read access to the object can get the permissions of an accessor. Both hooks fail if no object exists for the given `objectId`, or if the accessor has no permissions on that object.

In the following example, you get the permissions of a fictional group on the object with a specific `objectId`:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-next-line
import { useAccessorPermissionsV2 } from '@dynatrace-sdk/react-hooks';
import { Text } from '@dynatrace/strato-components/typography';
import { Flex } from '@dynatrace/strato-components/layouts';

export const App = () => {
  // highlight-start
  const { data, isLoading } = useAccessorPermissionsV2({
    objectId: '<some objectId>',
    accessorType: 'group',
    accessorId: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
  });
  // highlight-end

  return (
    <Flex>
      {!isLoading && data && (
        <Text>
          {data.accessor.type} {data.accessor.id}: {data.permissions.join(', ')}
        </Text>
      )}
    </Flex>
  );
};
```

Both hooks return the accessor together with its permissions in the following format, where `r` grants read access and `w` grants write access:

```json
{
  "accessor": {
    "type": "group",
    "id": "f81d4fae-7dec-11d0-a765-00a0c91e6bf6"
  },
  "permissions": ["r", "w"]
}
```

For the `all-users` accessor, use `useAllUsersPermissionsV2`, which takes the `objectId` instead of the accessor details.

Both hooks fetch when your component renders, not when a user triggers an action. If you derive the `objectId` from another hook, such as `useSettingsObjectsV2`, the `objectId` is empty on the first render, so pass the `autoFetch` option to delay the request until the `objectId` is available:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-start
import { useSettingsObjectsV2, useAllUsersPermissionsV2 } from '@dynatrace-sdk/react-hooks';
// highlight-end
import { Text } from '@dynatrace/strato-components/typography';
import { Flex } from '@dynatrace/strato-components/layouts';

export const App = () => {
  const { data: settings } = useSettingsObjectsV2({
    schemaId: 'my-example',
  });
  // highlight-start
  const objectId = settings?.items[0]?.objectId ?? '';

  const { data, isLoading } = useAllUsersPermissionsV2(
    { objectId },
    { autoFetch: !!objectId, autoFetchOnUpdate: true },
  );
  // highlight-end

  return <Flex>{!isLoading && data && <Text>All users: {data.permissions.join(', ')}</Text>}</Flex>;
};
```

This operation requires the scope `app-settings:objects:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Update permissions for an accessor on an object

To update the permissions of an accessor for a specific settings object, use either the `useUpdateAccessorPermissionsV2` or the `useUpdateAllUsersPermissionsV2` hook.

The first function is for accessors of type `user` and `group`, the second for the `all-users` type. To update permissions for an accessor, you must first add them via the hook documented above.

Only users that have read and write access on the object can update permissions for an accessor.

In the following example, you update the permission of a fictional group for the first object of the `my-example` schema to read-only:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-start
import { useSettingsObjectsV2, useUpdateAccessorPermissionsV2 } from '@dynatrace-sdk/react-hooks';
// highlight-end
import { Button } from '@dynatrace/strato-components/buttons';

export const App = () => {
  // highlight-start
  const { data } = useSettingsObjectsV2({
    schemaId: 'my-example',
  });
  const { execute } = useUpdateAccessorPermissionsV2();
  // highlight-end

  const handleOnClick = () => {
    if (data) {
      // highlight-start
      execute({
        objectId: data.items[0].objectId,
        accessorType: 'group',
        accessorId: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
        body: {
          permissions: ['r'],
        },
      });
      // highlight-end
    }
  };

  return <Button onClick={handleOnClick}>Update accessor permissions</Button>;
};
```

This operation requires the scope `app-settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Remove permissions for an accessor on an object

To remove all granted permissions for an accessor on an object, use either the `useDeleteAccessorPermissionsV2` or the `useDeleteAllUsersPermissionsV2` hook.

If the accessor doesn't have access via different means, such as a group or via the `owner`, the object will be inaccessible after this call.

Only users with read and write access on the object can remove permissions for an accessor.

In the following example, you remove all permissions of the `all-users` accessor of the first object of the `my-example` schema:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-start
import { useSettingsObjectsV2, useDeleteAllUsersPermissionsV2 } from '@dynatrace-sdk/react-hooks';
// highlight-end
import { Button } from '@dynatrace/strato-components/buttons';

export const App = () => {
  // highlight-start
  const { data } = useSettingsObjectsV2({
    schemaId: 'my-example',
  });
  const { execute } = useDeleteAllUsersPermissionsV2();
  // highlight-end

  const handleOnClick = () => {
    if (data) {
      // highlight-start
      execute({
        objectId: data.items[0].objectId,
      });
      // highlight-end
    }
  };

  return <Button onClick={handleOnClick}>Delete all-users permissions</Button>;
};
```

This operation requires the scope `app-settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Administrator access

You can bypass the access checks for specific administrator users to avoid:

- A user locking themselves out of a settings object.
- The owner of a settings object being unavailable.
- Not having sufficient permissions for a settings object.

All documented hooks besides `useEffectivePermissionsV2` and `useCreateSettingsV2` accept the `adminAccess` parameter.
Passing this parameter with the value `true` allows users to modify any object they want, without having to worry about the permissions granted or owner assigned.

This requires the additional scope of `app-settings:objects:admin`.

In the following example, you transfer the ownership of a settings object to a fictional user on the first object of the `my-example` schema, without needing to be the current owner and without having access to the settings object:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-start
import { useSettingsObjectsV2, useTransferOwnershipV2 } from '@dynatrace-sdk/react-hooks';
// highlight-end
import { Button } from '@dynatrace/strato-components/buttons';

export const App = () => {
  // highlight-start
  const { data } = useSettingsObjectsV2({
    schemaId: 'my-example',
    adminAccess: true,
  });
  const { execute } = useTransferOwnershipV2();
  // highlight-end

  const handleOnClick = () => {
    if (data) {
      // highlight-start
      execute({
        objectId: data.items[0].objectId,
        adminAccess: true,
        body: {
          newOwner: {
            type: 'user',
            id: '550e8400-e29b-41d4-a716-446655440000',
          },
        },
      });
      // highlight-end
    }
  };

  return <Button onClick={handleOnClick}>Transfer ownership</Button>;
};
```

This operation requires the following scopes:

- `app-settings:objects:write`
- `app-settings:objects:admin`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
