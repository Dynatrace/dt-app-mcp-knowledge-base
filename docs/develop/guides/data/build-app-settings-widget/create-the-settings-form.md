## Create the settings form

The following component is a text field with a **Save** button, built with [Strato components](https://developer.dynatrace.com/design/components.md). The form has no connection to settings yet; the next steps add reading and writing.

```tsx title="ui/app/SettingsForm.tsx"
import React, { useState } from 'react';
import { Button } from '@dynatrace/strato-components/buttons';
import { FormField, Label, TextInput } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

export const SettingsForm = () => {
  const [url, setUrl] = useState('');

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

To preview the form during development, render it on a page. For example, replace the contents of `ui/app/pages/Home.tsx`, which in a fresh app holds the generated welcome page:

```tsx title="ui/app/pages/Home.tsx" untestable
import React from 'react';
import { SettingsForm } from '../SettingsForm';

export const Home = () => {
  return <SettingsForm />;
};
```

To see the form, run:

```text
npx dt-app dev
```
