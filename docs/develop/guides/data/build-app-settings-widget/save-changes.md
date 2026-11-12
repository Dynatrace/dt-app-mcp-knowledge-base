## Save changes

There's no single save call. If the schema has no object yet, create one with `useCreateSettingsV2`. If an object exists, update it by `objectId` with `useUpdateSettingsV2`.

Updates require the object's current `version` as `optimisticLockingVersion`. If someone else saved the same object in the meantime, the call fails instead of overwriting their change. After each save, call `refetch` to get the new version before the next save.

```tsx title="ui/app/SettingsForm.tsx"
import React, { useEffect, useState } from 'react';
// highlight-next-line
import { useCreateSettingsV2, useSettingsObjectsV2, useUpdateSettingsV2 } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { ProgressCircle } from '@dynatrace/strato-components/content';
import { FormField, Label, TextInput } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const SCHEMA_ID = 'my-example';

export const SettingsForm = () => {
  // highlight-next-line
  const { data, isLoading, error, refetch } = useSettingsObjectsV2({ schemaId: SCHEMA_ID, addFields: 'value' });
  // highlight-start
  const { execute: createSettings } = useCreateSettingsV2();
  const { execute: updateSettings } = useUpdateSettingsV2();
  // highlight-end
  const settingsObject = data?.items[0];
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl((settingsObject?.value?.url as string) ?? '');
  }, [settingsObject]);

  // highlight-start
  const handleSave = async () => {
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
  };
  // highlight-end

  if (isLoading) {
    return <ProgressCircle />;
  }

  if (error) {
    return <p>Error! {error.message}</p>;
  }

  return (
    <Flex flexDirection="column" gap={16}>
      <FormField>
        <Label>Service URL</Label>
        <TextInput value={url} onChange={setUrl} placeholder="https://example.com" />
      </FormField>
      // highlight-next-line
      <Button variant="accent" onClick={() => void handleSave()}>
        Save
      </Button>
    </Flex>
  );
};
```

This operation requires the following scopes:

- `app-settings:objects:read`
- `app-settings:objects:write`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

> **Note**
>
> `useSettingsObjectsV2` returns only stored objects, which is what a form needs. To read a value elsewhere in the app, or get the schema defaults before anything is stored, use `useSettingsV2`.
> For more information, see how to [Get effective settings value](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md#get-effective-settings-value).
