## List all states

If your app uses dynamicaly created keys instead of a fixed set of known static keys, you can get a list of all app states or user app states with the `useAppStates` and `useUserAppStates` hooks.

By default, `useAppStates` and `useUserAppStates` only return the keys. You can request additional fields by specifying them in a comma-separated string in the `addFields` parameter.

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useAppStates } from '@dynatrace-sdk/react-hooks';
import { Flex } from '@dynatrace/strato-components/layouts';
import { List, Text } from '@dynatrace/strato-components/typography';
import { PageLayout } from '@dynatrace/strato-components/layouts';

export const App = () => {
  const { data } = useAppStates({
    addFields: 'value,modificationInfo.lastModifiedBy,validUntilTime',
  });

  return (
    <PageLayout>
      <PageLayout.Content>
        {data && (
          <List>
            {data.map((state) => (
              <Flex key={state.key}>
                <Text>{state.value}</Text>
                <Text>{state.modificationInfo?.lastModifiedBy}</Text>
                <Text>{state.validUntilTime}</Text>
              </Flex>
            ))}
          </List>
        )}
      </PageLayout.Content>
    </PageLayout>
  );
};
```

This operation requires the following scopes:

- `state:app-states:read`
- `state:user-app-states:read`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

### Filter states

The `useAppStates` and `useUserAppStates` hooks let you filter states via the `filter` parameter for the following fields:

- `key`, supports operators: `=`, `!=`, `contains`, `starts-with`, and `ends-with`
- `modificationInfo.lastModifiedTime`, supports operators: `=`, `!=`, `<`, `<=`, `>`, and `>=`
- `modificationInfo.lastModifiedBy`, supports operators: `=`, `!=`, `contains`, `starts-with`, and `ends-with`
- `validUntilTime`, supports operators: `=`, `!=`, `<`, `<=`, `>`, and `>=`

Operators `contains`, `starts-with`, and `ends-with` are **case-insensitive**. Comparisons via `=`, `!=` are **case-sensitive**.

Conditions can be connected via `and` and `or`. Individual conditions can be negated by `not`.
The filter string can be up to 256 characters long. You can nest conditions (using round brackets) up to 2 levels deep.

Here are some examples of how to use filters:

```ts skip-testing
const appStates = useAppStates({
  filter: "modificationInfo.lastModifiedTime > '2022-07-01T00:10:05.000Z'",
});
const appStatesComplexFilter = useAppStates({
  filter:
    "(key starts-with 'favourite' or key starts-with 'favorite') and not(key contains 'disk' or key contains 'process')",
});
const appStatesOrEmpty = useAppStates({
  filter: "key = 'might-not-exist'",
});
```
