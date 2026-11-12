## Control filtering of options

You can also control the filtering of the options by adding the `value` and the `onFilterChange` props on the `Select.Filter` component.

**ControlledFilter**

```tsx
import { useState } from 'react';

import { FormField, Label, Select } from '@dynatrace/strato-components/forms';

const ControlledFilter = () => {
  const [filterValue, setFilterValue] = useState('italy');

  return (
    <FormField>
      <Label>Select a country</Label>
      <Select>
        <Select.Content>
          <Select.Filter
            // highlight-start
            value={filterValue}
            onChange={setFilterValue}
            // highlight-end
          />
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
