## Control pinned state

To control the pinned state of filter items, pass the pinned state configuration to the `pinnedState` prop. To handle changes in the 'Add filter' dropdown, provide a callback to the `onPinnedStateChange` prop. The callback triggers whenever different items are selected, receiving the suggested pinned state and a list of item names.

**ControlledPinnedState**

```tsx
import { useState } from 'react';

import {
  FilterBar,
  PinnedState,
  TimeframeSelector,
} from '@dynatrace/strato-components/filters';
import { Select, TextInput } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Code, Text } from '@dynatrace/strato-components/typography';

const ControlledPinnedState = () => {
  const [changedItems, setChangedItems] = useState<string[]>([]);
  const [pinnedState, setPinnedState] = useState<PinnedState>({
    lastRun: 'optional',
    keyword: 'pinned',
    owner: 'pinned-optional',
  });

  const owners = [
    'Brandy Barrett',
    'Cleveland Allison',
    'Dora Braun',
    'Lacy Houston',
    'Patrick Gamble',
  ];

  const handleFilterChange = () => {
    console.log('Filter changed');
  };

  return (
    <Flex flexDirection="column">
      <FilterBar
        onFilterChange={handleFilterChange}
        // highlight-start
        pinnedState={pinnedState}
        onPinnedStateChange={(newPinnedState, changes) => {
          setPinnedState(newPinnedState);
          setChangedItems(changes);
        }}
        // highlight-end
      >
        <FilterBar.Item name="keyword" label="Keyword">
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
          <TimeframeSelector />
        </FilterBar.Item>
      </FilterBar>
      <Text>
        Changed items: <Code>{JSON.stringify(changedItems)}</Code>
      </Text>
    </Flex>
  );
};
```
