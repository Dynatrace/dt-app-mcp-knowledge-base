## Customize presets

Use `TimeframeSelector.Presets` to customize presets and show any timeframe inside the overlay. Default presets are exported, so you can either add to the list of default items or override them entirely.

If an invalid preset item is added, it won't be rendered and a `console.warn` will be called, with details to help you resolve the issue.

**CustomPresets**

```tsx
import { useState } from 'react';

import type { Timeframe } from '@dynatrace/strato-components/core';
import {
  TimeframeSelector,
  TIMEFRAME_SELECTOR_PRESETS,
} from '@dynatrace/strato-components/filters';
import { Label, FormField } from '@dynatrace/strato-components/forms';

const CustomPresets = () => {
  const presetValues = [
    {
      from: '-10d',
      to: 'now()',
    },
    {
      from: '-15d',
      to: 'now()',
    },
    {
      from: '2024-01-01T16:18:18.229Z',
      to: '2024-01-15T16:18:18.229Z',
    },
    {
      from: '2024-02-15T12:18:18.229Z',
      to: '2024-02-15T16:18:18.229Z',
    },
    {
      from: 'now()+2d',
      to: 'now()', // invalid order, so this preset will be hidden and an error will be shown in dev mode
    },
  ];

  const [value, setValue] = useState<Timeframe | null>(null);

  return (
    <FormField>
      <Label>Select timeframe</Label>
      <TimeframeSelector value={value} onChange={setValue}>
        {/* highlight-start */}
        <TimeframeSelector.Presets>
          {[...TIMEFRAME_SELECTOR_PRESETS, ...presetValues].map((item) => (
            <TimeframeSelector.PresetItem
              key={item.from + item.to}
              value={item}
            />
          ))}
        </TimeframeSelector.Presets>
        {/* highlight-end */}
      </TimeframeSelector>
    </FormField>
  );
};
```
