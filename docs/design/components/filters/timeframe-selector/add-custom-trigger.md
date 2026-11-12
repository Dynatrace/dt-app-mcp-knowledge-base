## Add custom trigger

`TimeframeSelector` comes with a default trigger for consistent user experience. In exceptional cases, if it's necessary, you may override the default trigger. Make sure to communicate whether a timeframe is selected and, if so, the timeframe itself.

Props are applied automatically to the `TimeframeSelector.CustomTrigger` to ensure correct semantics. Ideally, use a button as the outermost HTML element inside the custom trigger.

**CustomTrigger**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import type { Timeframe } from '@dynatrace/strato-components/core';
import { TimeframeSelector } from '@dynatrace/strato-components/filters';
import { ClockIcon } from '@dynatrace/strato-icons';

const CustomTrigger = () => {
  const [value, setValue] = useState<Timeframe | null>(null);

  return (
    <TimeframeSelector
      aria-label="Timeframe selector (icon only)"
      value={value}
      onChange={setValue}
    >
      {/* highlight-start */}
      <TimeframeSelector.CustomTrigger>
        <Button
          aria-label="Timeframe selector decorative trigger"
          variant="emphasized"
        >
          <Button.Prefix>
            <ClockIcon />
          </Button.Prefix>
        </Button>
      </TimeframeSelector.CustomTrigger>
      {/* highlight-end */}
    </TimeframeSelector>
  );
};
```
