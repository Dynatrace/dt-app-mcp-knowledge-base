## Show custom placeholder

Use the `TimeframeSelector.Trigger` and the `placeholder` prop to show a placeholder for the trigger button. If no option is selected, the `placeholder` value is shown by default. Notice that the `clearable` prop is used here to enable empty selection.

**Placeholder**

```tsx
import { useState } from 'react';

import type { Timeframe } from '@dynatrace/strato-components/core';
import { TimeframeSelector } from '@dynatrace/strato-components/filters';

const Placeholder = () => {
  const [value, setValue] = useState<Timeframe | null>(null);

  return (
    <TimeframeSelector
      aria-label="Timeframe selector"
      /* oxlint-disable-next-line typescript/no-deprecated */
      clearable
      value={value}
      onChange={setValue}
    >
      <TimeframeSelector.Trigger
        // highlight-next-line
        placeholder="Select a timeframe"
        aria-label="Open timeframe selector overlay"
      />
    </TimeframeSelector>
  );
};
```
