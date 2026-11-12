## Render filtered data in a table

Connect `FilterBar` with `DataTable` with the `useFilteredData` hook. To filter the data in the table, pass the unfiltered data as the first argument to the hook. The `useFilteredData` hook returns the `filteredData` that must be passed to the table's `data` prop along with the `onChange` handler which can be plugged into the `onFilterChange` callback.

By default, the filter name must match the column name. If a custom filter logic is required, provide a filter function as the second argument. This example shows a custom filter function that searches for a match in every column of a row.

**TableFilter**

```tsx
import {
  FilterBar,
  FilterItemValues,
} from '@dynatrace/strato-components/filters';
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

const TableFilter = () => {
  // oxlint-disable-next-line typescript/no-explicit-any
  function filterFn(filters: FilterItemValues, entry: any): boolean {
    return Object.keys(filters).every((filterName) =>
      Object.values(entry)
        .join()
        .toLowerCase()
        .includes((filters[filterName].value as string).toLowerCase()),
    );
  }

  // highlight-next-line
  const { onChange, filteredData } = useFilteredData<Data>(data, filterFn);

  return (
    <Flex gap={8} flexDirection="column" height={400}>
      <DataTable
        columns={columns}
        // highlight-next-line
        data={filteredData}
      >
        <DataTable.TableActions>
          {/* highlight-next-line */}
          <FilterBar onFilterChange={onChange}>
            <FilterBar.Item name="filterItem" label="Filter all columns">
              <SearchInput />
            </FilterBar.Item>
          </FilterBar>
        </DataTable.TableActions>
      </DataTable>
    </Flex>
  );
};
```
