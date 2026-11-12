## Delete settings values

To delete a value for a settings schema, use the `useDeleteSettingsV2` hook. You need to provide the `optimisticLockingVersion` of the value you want to delete, as shown in the following example:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-start
import { useSettingsObjectsV2, useDeleteSettingsV2 } from '@dynatrace-sdk/react-hooks';
// highlight-end
import { Button } from '@dynatrace/strato-components/buttons';

export const App = () => {
  // highlight-start
  const { data } = useSettingsObjectsV2({
    schemaId: 'my-example',
  });
  const { execute } = useDeleteSettingsV2();
  // highlight-end

  const handleOnClick = () => {
    if (data) {
      // highlight-start
      execute({
        objectId: data.items[0].objectId,
        optimisticLockingVersion: data.items[0].version,
      });
      // highlight-end
    }
  };

  return <Button onClick={handleOnClick}>Delete settings</Button>;
};
```

This operation requires the scope `app-settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
