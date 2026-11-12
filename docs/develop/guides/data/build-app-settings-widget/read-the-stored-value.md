## Read the stored value

The hooks come from `@dynatrace-sdk/react-hooks`, which is already part of the app template, so there's nothing to install. To call the client SDK directly instead, install it by running:

```text
npm i @dynatrace-sdk/client-app-settings-v2
```

The form reads and writes settings, so declare the two app settings scopes in the `app.config.json` file. Keep any scopes the app already has, such as the `storage:*` scopes, from the default template:

```json title="app.config.json"
"scopes": [
  // highlight-start
  { "name": "app-settings:objects:read", "comment": "Read app settings" },
  { "name": "app-settings:objects:write", "comment": "Write app settings" }
  // highlight-end
]
```

Use the `useSettingsObjectsV2` hook from `@dynatrace-sdk/react-hooks` to fetch the stored objects for the schema. Include `value` in `addFields` so the response includes the stored values, and prefill the form once the data loads:

```tsx title="ui/app/SettingsForm.tsx"
import React, { useEffect, useState } from 'react';
// highlight-next-line
import { useSettingsObjectsV2 } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { ProgressCircle } from '@dynatrace/strato-components/content';
import { FormField, Label, TextInput } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const SCHEMA_ID = 'my-example';

export const SettingsForm = () => {
  // highlight-start
  const { data, isLoading, error } = useSettingsObjectsV2({ schemaId: SCHEMA_ID, addFields: 'value' });
  const settingsObject = data?.items[0];
  // highlight-end
  const [url, setUrl] = useState('');

  // highlight-start
  useEffect(() => {
    setUrl((settingsObject?.value?.url as string) ?? '');
  }, [settingsObject]);

  if (isLoading) {
    return <ProgressCircle />;
  }

  if (error) {
    return <p>Error! {error.message}</p>;
  }
  // highlight-end

  return (
    <Flex flexDirection="column" gap={16}>
      <FormField>
        <Label>Service URL</Label>
        <TextInput value={url} onChange={setUrl} placeholder="https://example.com" />
      </FormField>
      <Button variant="accent">Save</Button>
    </Flex>
  );
};
```

This operation requires the scope `app-settings:objects:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
