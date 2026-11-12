## Persist sorting of filtered data

When using the `useFilteredData` hook to filter table data, the table must re-render each time the `filteredData` changes, which also resets the sorting. To keep the sorting, use the `sortBy` and `onSortChange` props along with `enableDefaultSort`.

**TableFilterSorting**

```tsx
import { useState } from 'react';

import { FilterBar } from '@dynatrace/strato-components/filters';
import { SearchInput } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  useFilteredData,
} from '@dynatrace/strato-components/tables';

const columns = [
  {
    header: 'Name',
    accessor: 'name',
    id: 'name',
  },
  {
    header: 'Owner',
    accessor: 'owner',
    id: 'owner',
  },
  {
    header: 'Last run',
    accessor: 'lastRun',
    id: 'lastRun',
  },
  {
    header: 'Type',
    accessor: 'type',
    id: 'type',
  },
];
type Data = {
  name: string;
  owner: string;
  lastRun: Date;
  type: string;
};
const data: Data[] = [
  {
    name: 'OutageMonitor',
    owner: 'Brandy Barrett',
    lastRun: new Date('2025-08-13T10:15:00Z'),
    type: 'Event',
  },
  {
    name: 'HeartbeatCheck',
    owner: 'Cleveland Allison',
    lastRun: new Date('2025-08-12T14:30:00Z'),
    type: 'Schedule',
  },
  {
    name: 'DailySweep',
    owner: 'Dora Braun',
    lastRun: new Date('2025-08-11T09:45:00Z'),
    type: 'Schedule',
  },
  {
    name: 'AlertResponder',
    owner: 'Lacy Houston',
    lastRun: new Date('2025-08-10T16:00:00Z'),
    type: 'Event',
  },
  {
    name: 'SmartRestart',
    owner: 'Patrick Gamble',
    lastRun: new Date('2025-08-09T11:20:00Z'),
    type: 'Manual',
  },
  {
    name: 'RecoveryFlow',
    owner: 'Brandy Barrett',
    lastRun: new Date('2025-08-08T08:10:00Z'),
    type: 'Event',
  },
  {
    name: 'MetricWatch',
    owner: 'Cleveland Allison',
    lastRun: new Date('2025-08-07T13:50:00Z'),
    type: 'Schedule',
  },
  {
    name: 'AnomalyCatcher',
    owner: 'Dora Braun',
    lastRun: new Date('2025-08-06T17:25:00Z'),
    type: 'Event',
  },
  {
    name: 'IncidentRadar',
    owner: 'Lacy Houston',
    lastRun: new Date('2025-08-05T12:40:00Z'),
    type: 'Event',
  },
  {
    name: 'ForecastBot',
    owner: 'Patrick Gamble',
    lastRun: new Date('2025-08-04T15:05:00Z'),
    type: 'Schedule',
  },
  {
    name: 'EventTrigger',
    owner: 'Brandy Barrett',
    lastRun: new Date('2025-08-03T07:55:00Z'),
    type: 'Event',
  },
];

const TableFilterSorting = () => {
  const [sort, setSort] = useState([{ id: 'name', desc: true }]);
  // highlight-next-line
  const { onChange, filteredData } = useFilteredData<Data>(data);

  return (
    <Flex gap={8} flexDirection="column" height={400}>
      <DataTable
        columns={columns}
        data={filteredData}
        sortable
        // highlight-start
        sortBy={sort}
        onSortByChange={setSort}
        // highlight-end
      >
        <DataTable.TableActions>
          <FilterBar onFilterChange={onChange}>
            <FilterBar.Item name="owner" label="Filter by owner">
              <SearchInput />
            </FilterBar.Item>
          </FilterBar>
        </DataTable.TableActions>
      </DataTable>
    </Flex>
  );
};
```
