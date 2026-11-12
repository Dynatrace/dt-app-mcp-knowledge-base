## Set initial values

When you create the state for controlling `TimeframeSelector`, you can pass a `Timeframe` to pre-fill the `from` and `to` inputs. To make a pre-filled value the default or preset selection, initialize the state with an expression matching the preset.

**InitialValue**

```tsx
import { useState } from 'react';

import {
  TimeframeSelector,
  type TimeframeSelectorProps,
} from '@dynatrace/strato-components/filters';

const InitialValue = () => {
  // highlight-start
  const [value, setValue] = useState<TimeframeSelectorProps['value']>({
    from: 'now-2h',
    to: 'now',
  });
  // highlight-end

  return <TimeframeSelector value={value} onChange={setValue} />;
};
```
