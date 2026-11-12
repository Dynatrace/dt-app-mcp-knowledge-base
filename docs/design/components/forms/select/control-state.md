## Control state

The `Select` can also be controlled, meaning that you can handle the selection state. To do so, you need to use the `onChange` prop to provide a handler that is called when the internal state changes. That state can be modified and is applied as soon as it's passed to the `value` prop.

**Controlled**

```tsx
import { useState } from 'react';

import { FormField, Label, Select } from '@dynatrace/strato-components/forms';

const Controlled = () => {
  const [singleValue, setSingleValue] = useState<string | null>(null);

  return (
    <FormField>
      <Label>Select a country</Label>
      <Select
        name="country-select"
        // highlight-start
        value={singleValue}
        onChange={setSingleValue}
        // highlight-end
      >
        <Select.Content>
          <Select.Option value="austria">Austria</Select.Option>
          <Select.Option value="germany">Germany</Select.Option>
          <Select.Option value="italy">Italy</Select.Option>
          <Select.Option value="spain">Spain</Select.Option>
        </Select.Content>
      </Select>
    </FormField>
  );
};
```
