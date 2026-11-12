## Control state

The `Radio` can also be controlled, meaning that you can handle the state. To do so, you need to use the `onChange` prop to provide a handler that is called when the internal state of the `Radio` changes. You also need to assign the value from the state to the `Radio` by setting the `value` prop.

**Controlled**

```tsx
import { useState } from 'react';

import { Radio, RadioGroup } from '@dynatrace/strato-components/forms';

const Controlled = () => {
  const [value, setValue] = useState('');

  return (
    <RadioGroup
      // highlight-start
      value={value}
      onChange={setValue}
      // highlight-end
      name="controlled-radio"
    >
      <Radio aria-label="hosts" value="hosts">
        Hosts
      </Radio>
      <Radio aria-label="services" value="services">
        Services
      </Radio>
      <Radio aria-label="processGroups" value="processGroups">
        Process Groups
      </Radio>
    </RadioGroup>
  );
};
```
