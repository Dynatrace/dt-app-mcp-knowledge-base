## Control state

The `ToggleButtonGroup` supports controlled behavior, enabling direct management of its state. This is achieved by passing a handler to the `onChange` prop, which is invoked whenever the internal state changes. The updated state can then be passed to the `value` prop to apply the new selection.

**Controlled**

```tsx
import { useState } from 'react';

import { ToggleButtonGroup } from '@dynatrace/strato-components/forms';

const Controlled = () => {
  const [value, setValue] = useState('left');

  return (
    <ToggleButtonGroup
      // highlight-start
      value={value}
      onChange={setValue}
      // highlight-end
      name="controlled"
    >
      <ToggleButtonGroup.Item value="left">align left</ToggleButtonGroup.Item>
      <ToggleButtonGroup.Item value="center">
        align center
      </ToggleButtonGroup.Item>
      <ToggleButtonGroup.Item value="right">align right</ToggleButtonGroup.Item>
    </ToggleButtonGroup>
  );
};
```
