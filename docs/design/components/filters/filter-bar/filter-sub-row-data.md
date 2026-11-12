## Filter sub-row data

The `useFilteredData` hook can also handle filtering of table data with sub-rows.

By default, on the matching paths, the sibling rows are also displayed for easy comparison. In other words, when a child matches, other children at the same level are also included (on all levels of the matching path). Control this behavior using the `subrowMatchingBehavior` parameter, to include or exclude those sibling rows.

For nodes which match, all of their sub-rows are included irrespective of `subrowMatchingBehavior`.

The return value `expandedRowIds` provides all the IDs of ancestors of matching nodes. Feed those values to `openSubRows` of the `DataTable` to ensure matching nodes are visible.

**TableFilterSubRows**

```tsx
import {
  randFullName,
  randPastDate,
  randVehicleModel,
  seed,
} from '@ngneat/falso';
import { useEffect, useState } from 'react';

import {
  FilterBar,
  type FilterItemValues,
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
    columnType: 'datetime',
    formatter: { dateStyle: 'short' },
  },
  {
    header: 'Type',
    accessor: 'type',
    id: 'type',
  },
];
type Data = {
  id: string;
  name: string;
  owner: string;
  lastRun: Date;
  type: string;
  subRows?: Data[];
};

const types = ['Event', 'Schedule', 'Manual'];

seed('1234');

const generateData = (depth = 0, maxDepth = 6): Data[] => {
  const itemCount = depth === 0 ? 6 : 2;
  return Array.from({ length: itemCount }, (_, i) => {
    const name = randVehicleModel();
    const data: Data = {
      id: `${name.toLowerCase()}-${depth}-${i}`,
      name,
      owner: randFullName(),
      lastRun: randPastDate({ years: 0.1 }),
      type: types[Math.floor(Math.random() * types.length)],
    };

    if (depth < maxDepth) {
      data.subRows = generateData(depth + 1, maxDepth);
    }

    return data;
  });
};

const data: Data[] = generateData();

const TableFilterSubRows = () => {
  const [ready, setReady] = useState<boolean>(false); // keep all rows collapsed initially
  // highlight-next-line
  const { filteredData, onChange, expandedRowIds } = useFilteredData(data);
  const [openSubRows, setOpenSubRows] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (ready && expandedRowIds) {
      const toExpand: Record<string, boolean> = Object.fromEntries(
        expandedRowIds.map((id: string): [string, boolean] => [id, true]),
      );
      setOpenSubRows(toExpand);
    }
  }, [ready, expandedRowIds]);

  const handleOnFilterChange = (value: FilterItemValues) => {
    setReady(true);
    onChange(value);
  };

  return (
    <Flex gap={8} flexDirection="column" height={400}>
      <DataTable
        columns={columns}
        data={filteredData}
        subRows
        // highlight-start
        openSubRows={openSubRows}
        onOpenSubRowsChange={setOpenSubRows}
        // highlight-end
        rowId={(row) => row.id}
      >
        <DataTable.TableActions>
          <FilterBar onFilterChange={handleOnFilterChange}>
            <FilterBar.Item name="name" label="Filter by name">
              <SearchInput />
            </FilterBar.Item>
          </FilterBar>
        </DataTable.TableActions>
      </DataTable>
    </Flex>
  );
};
```
