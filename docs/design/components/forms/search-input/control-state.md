## Control state

The `SearchInput` can also be controlled, meaning that you can handle the state. To do so, use the `onChange` prop to provide a handler that is called when the internal state of the `SearchInput` changes. You also need to assign the value from the state to the `SearchInput` by setting the `value` prop.

**Controlled**

```tsx
import { useState } from 'react';

import {
  FormField,
  Label,
  SearchInput,
} from '@dynatrace/strato-components/forms';

const Controlled = () => {
  const [value, setValue] = useState('');

  return (
    <FormField>
      <Label>Search</Label>
      <SearchInput
        // highlight-start
        value={value}
        onChange={setValue}
        // highlight-end
      />
    </FormField>
  );
};
```
