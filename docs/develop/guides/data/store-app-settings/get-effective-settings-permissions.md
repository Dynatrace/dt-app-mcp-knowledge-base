## Get effective settings permissions

To get the effective settings permissions for the calling user in the environment, use the `useEffectivePermissionsV2` hook.
In the following example, you're checking whether the user has `app-settings:objects:read` and `app-settings:objects:write` permissions for `my-example-1` and `my-example-2` schemas:

```tsx title="ui/app/App.tsx"
import React from 'react';
import { Container, Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';
import { BlockIcon } from '@dynatrace/strato-icons';
// highlight-next-line
import { useEffectivePermissionsV2 } from '@dynatrace-sdk/react-hooks';

export const App = () => {
  // highlight-start
  const { data } = useEffectivePermissionsV2({
    body: {
      permissions: [
        {
          permission: 'app-settings:objects:read',
          context: { schemaId: 'my-example-1' },
        },
        {
          permission: 'app-settings:objects:write',
          context: { schemaId: 'my-example-2' },
        },
      ],
    },
  });
  // highlight-end

  return (
    <Container>
      {data && data[0].granted === 'false' && (
        <Flex>
          <BlockIcon />
          <Text>Permission denied. Contact your account admin.</Text>
        </Flex>
      )}
    </Container>
  );
};
```

The function returns an array containing information about requested permissions in the following format:

```json
[
  {
    "permission": "app-settings:objects:read",
    "granted": "true",
    "context": { "schemaId": "my-example-1" }
  },
  {
    "permission": "app-settings:objects:write",
    "granted": "false",
    "context": { "schemaId": "my-example-2" }
  }
]
```

This operation requires one of the following scopes:

- `app-settings:objects:read`
- `app-settings:objects:write`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

> **Tip**
>
> You can also [query user permissions](https://developer.dynatrace.com/develop/guides/security/query-user-permissions.md).
