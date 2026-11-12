## Control state

The `NumberInput` can also be controlled, meaning that you can handle the state. To do so, you need to use the `onChange` prop to provide a handler that is called when a **valid number can be received**. Which is when the input gets blurred or a step button is clicked - **it does not happen on typing**. You also need to assign the value from the state to the `NumberInput` by setting the `value` prop.

**Controlled**

```tsx
import { useState } from 'react';

import {
  FormField,
  Label,
  NumberInput,
} from '@dynatrace/strato-components/forms';

const Controlled = () => {
  const [value, setValue] = useState<number | null>(0);

  return (
    <FormField>
      <Label>Number input</Label>
      <NumberInput
        // highlight-start
        value={value}
        onChange={setValue}
        // highlight-end
      />
    </FormField>
  );
};
```
