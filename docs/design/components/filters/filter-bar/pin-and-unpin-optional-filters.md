## Pin and unpin optional filters

Important filters should always be visible. However, you can allow users to hide uncommon, optional filters in the 'Add filter' dropdown. Pass the configuration object `defaultPinnedState` to the `FilterBar` to set filter states, as follows:

- `pinned` items are always visible and can't be unpinned or hidden by the user.

- `pinned-optional` items are visible initially, but the user can unpin and hide them in the dropdown.

- `optional` items aren't visible initially, but the user can access them from the dropdown and pin them. When a filter item is pinned, it's automatically focused.

Filter items that aren't configured will default to `pinned`.

Dropdown items use the text content of the label, stripping away all other content. Be sure to add an aria-label or name for each pinned-optional and optional filter, as these are required for the dropdown. If there's no text content, the `aria-label` or the `name` will be used as a fallback.

**AdditionalFilters**

```tsx
import { useState } from 'react';

import {
  FilterBar,
  FilterItemValues,
  TimeframeSelector,
} from '@dynatrace/strato-components/filters';
import { Select, TextInput } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Code, Text } from '@dynatrace/strato-components/typography';

const owners = [
  'Brandy Barrett',
  'Cleveland Allison',
  'Dora Braun',
  'Lacy Houston',
  'Patrick Gamble',
];

const AdditionalFilters = () => {
  const [filterItemValues, setFilterItemValues] =
    useState<FilterItemValues | null>(null);

  const handleFilterChange = (filterItemValues: FilterItemValues) => {
    setFilterItemValues(filterItemValues);
  };

  return (
    <Flex flexDirection="column">
      <FilterBar
        onFilterChange={handleFilterChange}
        // highlight-start
        defaultPinnedState={{
          lastRun: 'optional',
          keyword: 'pinned',
          owner: 'pinned-optional',
        }}
        // highlight-end
      >
        <FilterBar.Item name="keyword" label="Keyword">
          <TextInput />
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
          <TimeframeSelector />
        </FilterBar.Item>
      </FilterBar>
      <Text>
        Filter values on change: <Code>{JSON.stringify(filterItemValues)}</Code>
      </Text>
    </Flex>
  );
};
```
