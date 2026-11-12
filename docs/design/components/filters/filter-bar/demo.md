## Demo

`FilterBar` is designed for filtering with multiple controls. This example shows a `FilterBar` with a `TextInput`, a single `Select`, a multi-select `Select`, and a `TimeframeSelector`. See [Usage](https://developer.dynatrace.com/design/components/filters/FilterBar/usage.md) for best practices.

**MultipleFilters**

```tsx
import { useState } from 'react';

import type { Timeframe } from '@dynatrace/strato-components/core';
import {
  FilterBar,
  TimeframeSelector,
} from '@dynatrace/strato-components/filters';
import { Select, TextInput } from '@dynatrace/strato-components/forms';

const owners = [
  'Brandy Barrett',
  'Cleveland Allison',
  'Dora Braun',
  'Lacy Houston',
  'Patrick Gamble',
];

const MultipleFilters = () => {
  const defaultFilterState = {
    lastRun: {
      value: {
        from: {
          value: 'now()@d',
          type: 'expression',
        },
        to: {
          value: 'now()',
          type: 'expression',
        },
      } as Timeframe,
    },
  };
  const [lastRun, setLastRun] = useState<Timeframe | null>(
    defaultFilterState.lastRun.value,
  );

  return (
    <FilterBar
      onFilterChange={() => {
        /* Insert filtering logic here */
      }}
    >
      <FilterBar.Item name="text" label="Keyword">
        <TextInput />
      </FilterBar.Item>
      <FilterBar.Item name="owner" label="Owner">
        <Select name="owner" id="owner-select" clearable>
          <Select.Content>
            {owners.map((owner) => (
              <Select.Option key={owner} value={owner}>
                {owner}
              </Select.Option>
            ))}
          </Select.Content>
        </Select>
      </FilterBar.Item>
      <FilterBar.Item name="lastRun" label="Last run">
        <TimeframeSelector value={lastRun} onChange={setLastRun} />
      </FilterBar.Item>
    </FilterBar>
  );
};
```
