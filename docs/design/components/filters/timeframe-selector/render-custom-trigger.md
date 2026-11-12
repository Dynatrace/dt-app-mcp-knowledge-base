## Render custom trigger

We also provide a render function for the `TimeframeSelector.CustomTrigger`, giving you access to the `displayValue` that the TimeframeSelector would have applied. This enables you to understand the internal logic of the component before you customize it. When using a render function here, make sure to spread the props to the trigger element so the interactions tie back to the `TimeframeSelector`.

**CustomTriggerRenderFunction**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import type { Timeframe } from '@dynatrace/strato-components/core';
import { TimeframeSelector } from '@dynatrace/strato-components/filters';

const CustomTriggerRenderFunction = () => {
  const [value, setValue] = useState<Timeframe | null>(null);

  return (
    <TimeframeSelector
      aria-label="Timeframe selector (icon only)"
      value={value}
      onChange={setValue}
    >
      {/* highlight-start */}
      <TimeframeSelector.CustomTrigger>
        {({ displayValue }, props) => (
          <Button {...props} aria-label="Timeframe selector trigger">
            Custom element with default displayValue:&nbsp;{displayValue}
          </Button>
        )}
      </TimeframeSelector.CustomTrigger>
      {/* highlight-end */}
    </TimeframeSelector>
  );
};
```
