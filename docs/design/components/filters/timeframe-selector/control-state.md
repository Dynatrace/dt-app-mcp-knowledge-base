## Control state

`TimeframeSelector` can be controlled, meaning that you can handle the selection state. To do so, use the `onChange` prop to provide a handler to be called when the internal state changes. You must assign the value from the state to the `TimeframeSelector` by setting the `value` prop.

**Controlled**

```tsx
import { useState } from 'react';

import type { Timeframe } from '@dynatrace/strato-components/core';
import { TimeframeSelector } from '@dynatrace/strato-components/filters';

const Controlled = () => {
  const [value, setValue] = useState<Timeframe | null>(null);

  return (
    <TimeframeSelector
      // highlight-start
      value={value}
      onChange={setValue}
      // highlight-end
    />
  );
};
```
