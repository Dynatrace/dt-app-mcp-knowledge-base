## Control state

Control the selected value of the `Combobox` with the `value` and `onChange` props. The `onChange` handler receives the value of the selected option, or `null` when the selection is cleared. To let the `Combobox` manage its own state, use the `defaultValue` prop instead.

**Controlled**

```tsx
import { useState } from 'react';

import { Combobox, FormField, Label } from '@dynatrace/strato-components/forms';

const Controlled = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <FormField>
      <Label>Priority</Label>
      <Combobox
        // highlight-start
        value={value}
        onChange={setValue}
        // highlight-end
      >
        <Combobox.Content>
          <Combobox.Option value="low">Low</Combobox.Option>
          <Combobox.Option value="medium">Medium</Combobox.Option>
          <Combobox.Option value="high">High</Combobox.Option>
          <Combobox.Option value="critical">Critical</Combobox.Option>
        </Combobox.Content>
      </Combobox>
    </FormField>
  );
};
```
