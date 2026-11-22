## Create custom values

When users enter text that doesn't match an existing option, the `Combobox` shows an option to create a new value. Use the `onCreateOption` prop to react to the new value. The handler receives the trimmed text that the user entered.

In a controlled `Combobox`, `onChange` isn't called for the created value. Add the new option to your list and set `value` in `onCreateOption` to apply it.

**CustomValueCreation**

```tsx
import { useState } from 'react';

import { Combobox, FormField, Label } from '@dynatrace/strato-components/forms';

const CustomValueCreation = () => {
  const [value, setValue] = useState<string | null>(null);
  const [options, setOptions] = useState([
    'TypeScript',
    'JavaScript',
    'Python',
    'Rust',
    'Go',
  ]);

  return (
    <FormField>
      <Label>Programming language</Label>
      <Combobox
        value={value}
        onChange={setValue}
        // highlight-start
        onCreateOption={(newValue) => {
          setOptions((prev) => [...prev, newValue]);
          setValue(newValue);
        }}
        // highlight-end
        placeholder="Select or enter language"
      >
        <Combobox.Content>
          {options.map((lang) => (
            <Combobox.Option key={lang} value={lang}>
              {lang}
            </Combobox.Option>
          ))}
        </Combobox.Content>
      </Combobox>
    </FormField>
  );
};
```
