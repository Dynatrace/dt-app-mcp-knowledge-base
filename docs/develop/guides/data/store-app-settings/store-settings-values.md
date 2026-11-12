## Store settings values

To store new values for a settings schema, use the `useCreateSettingsV2` hook.

The `useCreateSettingsV2` hook returns the `objectId` and `version` of the created settings object. You can use them to subsequently [update](#update-settings-values) or [delete](#delete-settings-values) settings.

In the following example, you store a value accessible to the fictional messaging service integration from the `my-example` schema. The service can now use the specific URL and basic access token:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-next-line
import { useCreateSettingsV2 } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';

export const App = () => {
  // highlight-next-line
  const { execute } = useCreateSettingsV2();

  const handleOnClick = () => {
    // highlight-start
    execute({
      body: {
        schemaId: 'my-example',
        value: {
          url: 'https://foo.bar/messaging',
          token: 'a-secret-basic-token',
          tokenType: 'basic',
          channels: ['admin-notifications', 'user-notifications'],
          isEnabled: true,
        },
      },
    });
    // highlight-end
  };

  return <Button onClick={handleOnClick}>Create settings</Button>;
};
```

This operation requires the scope `app-settings:objects:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
