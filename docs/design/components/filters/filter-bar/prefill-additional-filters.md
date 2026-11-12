## Prefill additional filters

If you know the most likely value for an additional, or secondary, filter, you can help users by setting it as the `defaultValue`.

The user can override the `defaultValue`, but if the filter is removed and reapplied, it will revert to the `defaultValue`.

To make the changed value persist, the `value` property should be used instead. In this way, the changed value is saved, even if the filter is removed. (The `value` is no longer considered for the filtering.)

**PrefillingAdditionalFilters**

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

const PrefillingAdditionalFilters = () => {
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

  const owners = [
    'Brandy Barrett',
    'Cleveland Allison',
    'Dora Braun',
    'Lacy Houston',
    'Patrick Gamble',
  ];

  return (
    <Flex flexDirection="column">
      <FilterBar
        onFilterChange={handleFilterChange}
        // highlight-start
        defaultPinnedState={{
          owner: 'pinned-optional',
          lastRun: 'optional',
        }}
        // highlight-end
      >
        <FilterBar.Item name="keyword" label="Keyword">
          <TextInput defaultValue="Automation" />
        </FilterBar.Item>
        <FilterBar.Item name="owner" label="Owner">
          <Select
            name="owner"
            id="owner-select"
            defaultValue="Dora Braun"
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
          <TimeframeSelector defaultValue={defaultFilterState.lastRun.value} />
        </FilterBar.Item>
      </FilterBar>
      <Text>
        Filter values on change: <Code>{JSON.stringify(filterItemValues)}</Code>
      </Text>
    </Flex>
  );
};
```
