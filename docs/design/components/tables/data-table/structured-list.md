## Structured list

Not every table needs the full data-heavy feature set. For a leaner list of structured items, use search/filter, sortable and resizable columns, and interactive rows for an in-context detail view, and skip the toolbar, column ordering, and cell-level copy.

**StructuredListReference**

```tsx
import { useState } from 'react';

import {
  FilterBar,
  type FilterItemValues,
} from '@dynatrace/strato-components/filters';
import { SearchInput } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  useFilteredData,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { Paragraph } from '@dynatrace/strato-components/typography';

type Data = {
  name: string;
  owner: string;
  lastRun: string;
  type: string;
};

const data: Data[] = [
  {
    name: 'OutageMonitor',
    owner: 'Brandy Barrett',
    lastRun: '2025-08-13T10:15:00Z',
    type: 'Event',
  },
  {
    name: 'HeartbeatCheck',
    owner: 'Cleveland Allison',
    lastRun: '2025-08-12T14:30:00Z',
    type: 'Schedule',
  },
  {
    name: 'DailySweep',
    owner: 'Dora Braun',
    lastRun: '2025-08-11T09:45:00Z',
    type: 'Schedule',
  },
  {
    name: 'AlertResponder',
    owner: 'Lacy Houston',
    lastRun: '2025-08-10T16:00:00Z',
    type: 'Event',
  },
  {
    name: 'SmartRestart',
    owner: 'Patrick Gamble',
    lastRun: '2025-08-09T11:20:00Z',
    type: 'Manual',
  },
];

const columns: DataTableColumnDef<Data>[] = [
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

const StructuredListReference = () => {
  function filterFn(filters: FilterItemValues, entry: Data): boolean {
    return Object.keys(filters).every((filterName) =>
      Object.values(entry)
        .join()
        .toLowerCase()
        .includes((filters[filterName].value as string).toLowerCase()),
    );
  }

  const { onChange, filteredData } = useFilteredData<Data>(data, filterFn);

  const [selectedName, setSelectedName] = useState<string | undefined>(
    undefined,
  );

  return (
    <Flex gap={8} flexDirection="column">
      <DataTable
        columns={columns}
        data={filteredData}
        sortable
        resizable
        interactiveRows
        onActiveRowChange={(activeRow) => {
          setSelectedName(
            activeRow !== null
              ? filteredData[Number(activeRow)]?.name
              : undefined,
          );
        }}
      >
        <DataTable.TableActions>
          <FilterBar onFilterChange={onChange}>
            <FilterBar.Item name="filterItem" label="Filter all columns">
              <SearchInput />
            </FilterBar.Item>
          </FilterBar>
        </DataTable.TableActions>
      </DataTable>
      <Paragraph>
        {selectedName
          ? `Selected item: ${selectedName}`
          : 'Click a row to see its details.'}
      </Paragraph>
    </Flex>
  );
};
```
