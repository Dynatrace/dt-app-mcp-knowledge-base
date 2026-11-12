## Delete a state by key

You can delete app states and user app states that aren't needed anymore with the `useDeleteAppState` and `useDeleteUserAppState` hooks. In addition, this will free up the equivalent of the deleted value's size in the state storage quota currently available to the app:

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useDeleteAppState } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { PageLayout } from '@dynatrace/strato-components/layouts';

export const App = () => {
  const { execute } = useDeleteAppState();

  const handleClick = () => {
    execute({
      key: 'weather',
    });
  };

  return (
    <PageLayout>
      <PageLayout.Content>
        <Button onClick={handleClick}>Delete app state</Button>
      </PageLayout.Content>
    </PageLayout>
  );
};
```

This operation requires the following scopes:

- `state:app-states:delete`
- `state:user-app-states:delete`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
