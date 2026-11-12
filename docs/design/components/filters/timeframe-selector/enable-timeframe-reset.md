## Enable timeframe reset

This component provides a button to 'Reset timeframe', giving users the option to clear a selected timeframe. To display this button, the `clearable` prop must be set to true.

**ClearSelection**

```tsx
import { useState } from 'react';

import type { Timeframe } from '@dynatrace/strato-components/core';
import { TimeframeSelector } from '@dynatrace/strato-components/filters';

const ClearSelection = () => {
  const [value, setValue] = useState<Timeframe | null>(null);

  return (
    <TimeframeSelector
      value={value}
      onChange={setValue}
      // highlight-start
      /* oxlint-disable-next-line typescript/no-deprecated */
      clearable
      // highlight-end
    />
  );
};
```
