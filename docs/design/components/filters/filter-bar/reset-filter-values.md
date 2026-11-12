## Reset filter values

This example shows how to reset filter item values in controlled scenarios. The `FilterBar.ResetButton` depends on an `onClick` hander to reset the filter values. Therefore, the reset button can only be used with controlled `FilterBar` components.

**ResetValues**

```tsx
import { useState } from 'react';

import type { Timeframe } from '@dynatrace/strato-components/core';
import {
  FilterBar,
  FilterItemValues,
  TimeframeSelector,
} from '@dynatrace/strato-components/filters';
import { Select, TextInput } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Code, Text } from '@dynatrace/strato-components/typography';

const ResetValues = () => {
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

  const [filterItemValues, setFilterItemValues] =
    useState<FilterItemValues | null>(null);

  const handleFilterChange = (filterItemValues: FilterItemValues) => {
    setFilterItemValues(filterItemValues);
  };
  const [text, setText] = useState<string | undefined>();
  const [owner, setOwner] = useState<string | null>();
  const [lastRun, setLastRun] = useState<Timeframe | null>(
    defaultFilterState.lastRun.value,
  );
  const handleReset = () => {
    setText(undefined);
    setOwner(null);
    setLastRun(defaultFilterState.lastRun.value);
    handleFilterChange(defaultFilterState);
  };
  const owners = [
    'Brandy Barrett',
    'Cleveland Allison',
    'Dora Braun',
    'Lacy Houston',
    'Patrick Gamble',
  ];

  return (
    <Flex flexDirection="column">
      <Flex gap={4} alignItems="flex-end">
        <FilterBar onFilterChange={handleFilterChange}>
          <FilterBar.Item name="text" label="Keyword">
            <TextInput
              value={text}
              onChange={setText}
              data-testid="filter-text"
            />
          </FilterBar.Item>
          <FilterBar.Item name="owner" label="Owner">
            <Select
              name="owner"
              id="owner-select"
              value={owner}
              onChange={setOwner}
              clearable
            >
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
          {/* highlight-next-line */}
          <FilterBar.ResetButton onClick={handleReset} />
        </FilterBar>
      </Flex>
      <Text>
        Filter values on change: <Code>{JSON.stringify(filterItemValues)}</Code>
      </Text>
    </Flex>
  );
};
```
