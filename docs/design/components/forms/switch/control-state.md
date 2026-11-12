## Control state

The `Switch` can also be controlled, meaning that you can handle the state. To do so, you need to use the `onChange` prop to provide a handler that is called when the internal state of the `Switch` changes. You also need to assign the value from the state to the `Switch` by setting the `on` prop.

**Controlled**

```tsx
import { useState } from 'react';

import { Switch } from '@dynatrace/strato-components/forms';

const Controlled = () => {
  const [on, setOn] = useState(true);

  return (
    <Switch
      // highlight-start
      value={on}
      onChange={setOn}
      // highlight-end
    >
      Notify me of updates
    </Switch>
  );
};
```
