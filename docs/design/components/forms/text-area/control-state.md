## Control state

The `TextArea` can also be controlled, meaning that you can handle the state. To do so, you need to use the `onChange` prop to provide a handler that is called when the internal state of the `TextArea` changes. You also need to assign the value from the state to the `TextArea` by setting the `value` prop.

**Controlled**

```tsx
import { useState } from 'react';

import { FormField, Label, TextArea } from '@dynatrace/strato-components/forms';

const Controlled = () => {
  const [value, setValue] = useState('');

  return (
    <FormField>
      <Label>Enter some feedback</Label>
      <TextArea
        // highlight-start
        value={value}
        onChange={setValue}
        // highlight-end
      />
    </FormField>
  );
};
```
