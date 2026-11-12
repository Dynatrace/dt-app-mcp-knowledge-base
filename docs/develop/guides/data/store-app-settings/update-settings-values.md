## Update settings values

To update the value for a settings schema, use the `useUpdateSettingsV2` hook.

The `useUpdateSettingsV2` hook returns the `version` of the updated settings object, which you can use to update the object again.

In the following example, you edit a value accessible to the fictional messaging service integration from the `my-example` schema. The service can now use the personal access token:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-start
import { useSettingsObjectsV2, useUpdateSettingsV2 } from '@dynatrace-sdk/react-hooks';
// highlight-end
import { Button } from '@dynatrace/strato-components/buttons';

export const App = () => {
  // highlight-start
  const { data } = useSettingsObjectsV2({
    schemaId: 'my-example',
  });
  const { execute } = useUpdateSettingsV2();
  // highlight-end

  const handleOnClick = () => {
    if (data) {
      // highlight-start
      execute({
        objectId: data.items[0].objectId,
        optimisticLockingVersion: data.items[0].version,
        body: {
          value: {
            url: 'https://foo.bar/messaging',
            token: 'a-secret-personal-access-token',
            tokenType: 'pat',
            channels: ['admin-notifications', 'user-notifications'],
            isEnabled: true,
          },
        },
      });
      // highlight-end
    }
  };

  return <Button onClick={handleOnClick}>Update settings</Button>;
};
```

Remember that each setting has a `version` that changes each time its value changes. You need to pass the current `version` for any operation that modifies the value.

This operation requires the scope `app-settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
