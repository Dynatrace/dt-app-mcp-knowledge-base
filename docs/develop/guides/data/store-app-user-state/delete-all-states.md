## Delete all states

The `useDeleteAppStates` and `useDeleteUserAppStates` allow you to delete all app states and user app states to completely reset the app's states:

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useDeleteAppStates } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { PageLayout } from '@dynatrace/strato-components/layouts';

export const App = () => {
  const { execute } = useDeleteAppStates();

  const handleClick = () => {
    execute();
  };

  return (
    <PageLayout>
      <PageLayout.Content>
        <Button onClick={handleClick}>Delete app states</Button>
      </PageLayout.Content>
    </PageLayout>
  );
};
```

This operation requires the following scopes:

- `state:app-states:delete`
- `state:user-app-states:delete`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
