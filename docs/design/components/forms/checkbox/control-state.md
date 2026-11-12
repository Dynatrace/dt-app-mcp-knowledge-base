## Control state

The checkbox can also be controlled, meaning that you can handle the state. To do so, you need to use the `onChange` prop to provide a handler that is called when the internal state of the checkbox changes. You also need to assign the value from the state to the checkbox by setting the `checked` prop.

**Controlled**

```tsx
import { useState } from 'react';

import { Checkbox } from '@dynatrace/strato-components/forms';

const Controlled = () => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <Checkbox
      name="controlled"
      // highlight-start
      value={checked}
      onChange={setChecked}
      // highlight-end
    >
      Enable setting
    </Checkbox>
  );
};
```
