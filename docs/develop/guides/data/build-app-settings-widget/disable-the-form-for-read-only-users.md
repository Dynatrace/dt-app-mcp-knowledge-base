## Disable the form for read-only users

Not every user who can open the app has permission to change its settings. If the form stays active for them, they only find out when they fill it in, select **Save**, and the request fails. Detecting the read-only case upfront avoids that.

The standard pattern is to disable the form fields and the **Save** button, and display a message explaining that the user has read-only permissions.

Cover both cases:

- **When an object exists**, request `resourceContext` alongside the value. Its `operations` array lists what the current user may do with the object. The user is read-only when it doesn't include `write`.
- **When no object exists yet**, there's no `resourceContext` to read, so a check based on it alone would incorrectly disable the form and prevent the user from creating the first object. Fall back to the schema-level write permission through `useEffectivePermissionsV2` instead. For more information, see how to [Get effective settings permissions](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md#get-effective-settings-permissions).

The complete form includes the permission check, the read-only messaging, and error handling on top of the [save changes setup](#save-changes).

```tsx title="ui/app/SettingsForm.tsx"
import React, { useEffect, useState } from 'react';
import {
  useCreateSettingsV2,
  // highlight-next-line
  useEffectivePermissionsV2,
  useSettingsObjectsV2,
  useUpdateSettingsV2,
} from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { ProgressCircle } from '@dynatrace/strato-components/content';
import { FormField, Label, TextInput } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
// highlight-next-line
import { Text } from '@dynatrace/strato-components/typography';

const SCHEMA_ID = 'my-example';

export const SettingsForm = () => {
  const { data, isLoading, error, refetch } = useSettingsObjectsV2({
    schemaId: SCHEMA_ID,
    // highlight-next-line
    addFields: 'value, resourceContext',
  });
  const { execute: createSettings } = useCreateSettingsV2();
  const { execute: updateSettings } = useUpdateSettingsV2();
  const settingsObject = data?.items[0];
  const [url, setUrl] = useState('');
  // highlight-next-line
  const [saveError, setSaveError] = useState<string>();

  useEffect(() => {
    setUrl((settingsObject?.value?.url as string) ?? '');
  }, [settingsObject]);

  // highlight-start
  const { data: permissions } = useEffectivePermissionsV2({
    body: {
      permissions: [{ permission: 'app-settings:objects:write', context: { schemaId: SCHEMA_ID } }],
    },
  });
  const canCreate = permissions?.[0].granted !== 'false';
  const isReadonly = settingsObject ? !settingsObject.resourceContext?.operations.includes('write') : !canCreate;
  // highlight-end

  const handleSave = async () => {
    // highlight-start
    setSaveError(undefined);
    try {
      if (settingsObject) {
        await updateSettings({
          objectId: settingsObject.objectId,
          optimisticLockingVersion: settingsObject.version,
          body: { value: { url } },
        });
      } else {
        await createSettings({ body: { schemaId: SCHEMA_ID, value: { url } } });
      }
      await refetch();
    } catch (e) {
      setSaveError(e instanceof Error ? e.message : 'Could not save the settings.');
    }
    // highlight-end
  };

  if (isLoading) {
    return <ProgressCircle />;
  }

  if (error) {
    return <p>Error! {error.message}</p>;
  }

  return (
    <Flex flexDirection="column" gap={16}>
      // highlight-next-line
      {isReadonly && <Text>You have read-only permissions for these settings.</Text>}
      <FormField>
        <Label>Service URL</Label>
        // highlight-next-line
        <TextInput value={url} onChange={setUrl} placeholder="https://example.com" disabled={isReadonly} />
      </FormField>
      // highlight-start
      {saveError && <Text>{saveError}</Text>}
      <Button variant="accent" onClick={() => void handleSave()} disabled={isReadonly}>
        Save
      </Button>
      // highlight-end
    </Flex>
  );
};
```

> **Note**
>
> Permissions aren't the only reason a save can fail. The schema can declare constraints, such as a required field or a value `pattern`, that the backend validates on write. A save can be rejected even for a user with `write` access. The `try/catch` around `handleSave` catches these rejections and shows the message instead of letting the save fail silently. In a real app, show it through a more prominent notification.
