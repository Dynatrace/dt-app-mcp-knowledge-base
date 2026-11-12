## Add prefix or suffix

You can add a prefix or a suffix to the `TextInput`, which can render an icon or a `TextInput.Button` with a click handler. When using the `TextInput.Button` that renders an icon or any similar element without any text, use the `tooltipText` prop to provide a text description for the button. The component automatically uses this text as `aria-label` while the tooltip is closed and links to the tooltip element via `aria-labelledby` once the tooltip opens, ensuring a valid accessible name at all times. You can also set `aria-label` directly, but this skips the automatic `aria-labelledby` wiring.

**PrefixSuffix**

```tsx
import { useRef, useState } from 'react';

import {
  FormField,
  FormControlRef,
  TextInput,
  Label,
} from '@dynatrace/strato-components/forms';
import { FilterIcon, SettingIcon, XmarkIcon } from '@dynatrace/strato-icons';

const PrefixSuffix = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<FormControlRef<HTMLDivElement>>(null);

  return (
    <FormField>
      <Label>Enter text</Label>
      <TextInput
        placeholder="Enter something"
        value={value}
        onChange={setValue}
        ref={inputRef}
      >
        {/* highlight-start */}
        <TextInput.Prefix>
          <FilterIcon aria-label="Filter" />
        </TextInput.Prefix>
        <TextInput.Suffix>
          <SettingIcon aria-label="Settings" />
          <TextInput.Button
            tooltipText="Clear input"
            onClick={() => {
              setValue('');
              inputRef.current?.inputRef?.focus();
            }}
          >
            <XmarkIcon />
          </TextInput.Button>
        </TextInput.Suffix>
        {/* highlight-end */}
      </TextInput>
    </FormField>
  );
};
```
