## Navigation

### Enable pagination

To enable pagination add the `DataTable.Pagination` component to your table.

**PaginationUncontrolled**

```tsx
import {
  randNumber,
  randDomainName,
  randFloat,
  randBetweenDate,
} from '@ngneat/falso';
import { useMemo } from 'react';

import { units } from '@dynatrace-sdk/units';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const PaginationUncontrolled = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        id: 'Host',
        header: 'Host',
        accessor: 'host',
      },
      {
        id: 'Traffic',
        header: 'Traffic',
        accessor: 'traffic',
        columnType: 'number',
      },
      {
        id: 'Memory Total',
        header: 'Memory Total',
        accessor: 'memoryTotal',
        columnType: 'number',
        formatter: { input: units.data.bit },
      },
      {
        id: 'Timestamp',
        header: 'Timestamp',
        accessor: 'timestamp',
        columnType: 'datetime',
      },
    ];
  }, []);

  const data = useMemo(
    () =>
      new Array(300).fill(0).map(() => ({
        host: `et-demo-${randDomainName()}`,
        traffic: randFloat({ min: 100, max: 300, precision: 2 }),
        memoryTotal: randNumber({ min: 3520000000, max: 6150000000 }),
        timestamp: randBetweenDate({
          from: '2022-09-26T12:45:07Z',
          to: '2022-09-28T10:22:56Z',
        }),
      })),
    [],
  );

  return (
    <div style={{ height: 500 }}>
      <DataTable
        columns={columns}
        data={data}
        fullHeight
        fullWidth
        sortable
        resizable
        columnOrdering
      >
        <DataTable.Toolbar>
          <DataTable.DownloadData />
          <DataTable.LineWrap />
          <DataTable.ColumnOrderSettings />
        </DataTable.Toolbar>
        <DataTable.Pagination
          // highlight-start
          defaultPageIndex={1}
          defaultPageSize={20}
          // highlight-end
        />
      </DataTable>
    </div>
  );
};
```

### Change page size

The default page size options are 10, 20, 50, 100, 250, 500 and 1000. To customize these options, use the `pageSizeOptions` prop, which allows you to pass the desired page sizes as an array. Please ensure that the passed (default) page size aligns with the defined options. The table will not sanitize page sizes that do not exist in the options.

**PageSizeOptions**

```tsx
import {
  seed,
  randNumber,
  randDomainName,
  randFloat,
  randBetweenDate,
} from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(300).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
  price: randNumber({ min: 20, max: 150 }),
}));

const PageSizeOptions = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        id: 'Host',
        header: 'Host',
        accessor: 'host',
      },
      {
        id: 'Traffic',
        header: 'Traffic',
        accessor: 'traffic',
      },
      {
        id: 'Memory Total',
        header: 'Memory Total',
        accessor: 'memoryTotal',
      },
      {
        id: 'Timestamp',
        header: 'Timestamp',
        accessor: 'timestamp',
      },
    ];
  }, []);

  return (
    <DataTable columns={columns} data={data}>
      <DataTable.Pagination
        // highlight-next-line
        pageSizeOptions={[5, 10, 15, 20, 25]}
      />
    </DataTable>
  );
};
```

### Set the initial page

To choose the starting page size or page index without controlling pagination yourself, use the `defaultPageSize` and `defaultPageIndex` props. The table manages pagination state from those initial values. As with every feature, these uncontrolled props are mutually exclusive with their controlled counterparts `pageSize` and `pageIndex`. See [Controlled and uncontrolled state](#controlled-and-uncontrolled-state).

### Control pagination

It is also possible to control the page size and the page index using the `pageSize` and the `pageIndex` props together with the `onPageSizeChange` and the `onPageIndexChange` callbacks.

**PaginationControlled**

```tsx
import {
  seed,
  randNumber,
  randDomainName,
  randFloat,
  randBetweenDate,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const PaginationControlled = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        id: 'Host',
        header: 'Host',
        accessor: 'host',
      },
      {
        id: 'Traffic',
        header: 'Traffic',
        accessor: 'traffic',
      },
      {
        id: 'Memory Total',
        header: 'Memory Total',
        accessor: 'memoryTotal',
      },
      {
        id: 'Timestamp',
        header: 'Timestamp',
        accessor: 'timestamp',
      },
    ];
  }, []);

  const data = useMemo(
    () =>
      new Array(300).fill(0).map(() => ({
        host: `et-demo-${randDomainName()}`,
        traffic: randFloat({ min: 100, max: 300, precision: 2 }),
        memoryTotal: randNumber({ min: 3520000000, max: 6150000000 }),
        timestamp: randBetweenDate({
          from: '2022-09-26T12:45:07Z',
          to: '2022-09-28T10:22:56Z',
        }),
      })),
    [],
  );

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  return (
    <DataTable columns={columns} data={data}>
      <DataTable.Pagination
        // highlight-start
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        pageIndex={pageIndex}
        onPageIndexChange={setPageIndex}
        // highlight-end
      />
    </DataTable>
  );
};
```

### Use server-side pagination

In addition to the regular client-side pagination, it is also possible to use server-side pagination. For server-side pagination, pass the data for the respective page to the table and update the `enablePrevPage` and `enableNextPage` flags accordingly. Upon navigating to another page or changing the page size the corresponding callbacks as well as the `onPageChange` callbacks provide the updated values, allowing you to retrieve the corresponding data.

By default, the server-side pagination does not display the indicator for which page out of the total number of pages is currently shown, i.e. "Page 1 of 30", in the bottom right corner. This is because the total number of rows is unknown since only the data for the respective page is passed. However, adding the `totalRowsCount` prop enables this information to be displayed as well.

**PaginationServerSide**

```tsx
import {
  seed,
  randNumber,
  randDomainName,
  randFloat,
  randBetweenDate,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const PaginationServerSide = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        id: 'Host',
        header: 'Host',
        accessor: 'host',
      },
      {
        id: 'Traffic',
        header: 'Traffic',
        accessor: 'traffic',
      },
      {
        id: 'Memory Total',
        header: 'Memory Total',
        accessor: 'memoryTotal',
      },
      {
        id: 'Timestamp',
        header: 'Timestamp',
        accessor: 'timestamp',
      },
    ];
  }, []);

  const data = useMemo(
    () =>
      new Array(300).fill(0).map(() => ({
        host: `et-demo-${randDomainName()}`,
        traffic: randFloat({ min: 100, max: 300, precision: 2 }),
        memoryTotal: randNumber({ min: 3520000000, max: 6150000000 }),
        timestamp: randBetweenDate({
          from: '2022-09-26T12:45:07Z',
          to: '2022-09-28T10:22:56Z',
        }),
      })),
    [],
  );

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const startIndex = Math.max(0, pageIndex * pageSize);
  const endIndex = startIndex + pageSize;
  const enablePrevPage = startIndex >= pageSize;
  const enableNextPage = endIndex < data.length;
  const paginatedData = useMemo(
    () => data.slice(startIndex, endIndex),
    [data, startIndex, endIndex],
  );

  return (
    <DataTable columns={columns} data={paginatedData}>
      <DataTable.Pagination
        pageIndex={pageIndex}
        onPageIndexChange={setPageIndex}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        // highlight-start
        enableNextPage={enableNextPage}
        enablePreviousPage={enablePrevPage}
        totalRowsCount={data.length}
        // highlight-end
      />
    </DataTable>
  );
};
```

### Scroll to a given row

The `DataTableRef` provides the `scrollToRow` method, which enables programmatic scrolling to a specific row in the table, identified by its `rowId`. If pagination is enabled, the table first navigates to that page if necesssary.

You can configure the `scrollToRow` method to align the target row to the `start`, `center`, or `end` of the table's visible area by passing the desired alignment as a second argument. If no alignment is specified, the default alignment is `start`.

If the target row is a sub-row, the parent row must be expanded beforehand. Otherwise, the sub-row will not be accessible for scrolling.

**ScrollToRow**

```tsx
import {
  randEmail,
  randFirstName,
  randLastName,
  randNumber,
  seed,
} from '@ngneat/falso';
import { useMemo, useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  DataTable,
  type DataTableColumnDef,
  type DataTableRef,
} from '@dynatrace/strato-components/tables';

seed('1234');

function createRow() {
  const firstName = randFirstName();
  const lastName = randLastName();

  return {
    firstname: firstName,
    lastname: lastName,
    email: randEmail({ firstName, lastName }),
    age: randNumber({ min: 18, max: 99, fraction: 0 }),
  };
}

const data = Array.from({ length: 100 }, () => ({
  ...createRow(),
  subRows: [
    {
      ...createRow(),
      subRows: [{ ...createRow() }, { ...createRow() }],
    },
    { ...createRow() },
  ],
}));

const scrollToRowButtons = [
  {
    expandSubRowIds: [],
    scrollToId: '15',
  },
  {
    expandSubRowIds: ['30'],
    scrollToId: '30.0',
  },
  {
    expandSubRowIds: ['90', '90.0'],
    scrollToId: '90.0.0',
  },
];

const ScrollToRow = () => {
  const columns: DataTableColumnDef<(typeof data)[number]>[] = useMemo(
    () => [
      {
        header: 'Firstname',
        accessor: 'firstname',
        id: 'firstname',
        width: 'content',
      },
      {
        header: 'Lastname',
        accessor: 'lastname',
        id: 'lastname',
        width: 'content',
      },
      {
        header: 'Age',
        accessor: 'age',
        id: 'age',
        alignment: 'right',
        width: 'content',
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 'content',
      },
    ],
    [],
  );

  const ref = useRef<DataTableRef>(null);
  const [openSubRows, setOpenSubRows] = useState<Record<string, boolean>>({});

  return (
    <div style={{ height: 300 }}>
      <DataTable
        ref={ref}
        columns={columns}
        data={data}
        fullWidth
        subRows
        openSubRows={openSubRows}
        onOpenSubRowsChange={setOpenSubRows}
      >
        <DataTable.TableActions>
          {scrollToRowButtons.map(({ expandSubRowIds, scrollToId }) => (
            <Button
              key={scrollToId}
              onClick={() => {
                // expand the subRows before scrolling
                setOpenSubRows(
                  Object.fromEntries(
                    expandSubRowIds.map((id) => [id, true] as const),
                  ),
                );

                // give some time to expand the rows and recalculate heights
                requestAnimationFrame(() => {
                  // highlight-next-line
                  ref.current?.scrollToRow?.(scrollToId);
                });
              }}
            >
              Scroll to rowId {scrollToId}
            </Button>
          ))}
        </DataTable.TableActions>
      </DataTable>
    </div>
  );
};
```

### Anchor scroll position when rows are prepended

Use `anchorScrollTo` to control which end of the list stays fixed when the data changes.

The default value, `'start'`, keeps the top of the list as the fixed point. Rows added above the viewport push the visible content further down, which is how a standard scroll container behaves.

Set `anchorScrollTo="end"` when new rows arrive above the ones already rendered—for example, in a live log or event feed. The table then compensates for the shift so the user keeps reading the same row instead of being pushed down by each incoming batch. Rows removed above the viewport are handled the same way.

When the user is scrolled to the very top, `'end'` is ignored in favor of `'start'` so newly arrived rows appear immediately. The table switches back to `'end'` as soon as the user scrolls down again.

> **Note**
>
> `anchorScrollTo="end"` requires `rowId` to be set. Without a stable row identity, the virtualizer tracks rows by position and cannot reliably compensate for prepends.

**AnchorScrollTo**

```tsx
import { randFirstName, randLastName, randNumber, seed } from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('anchor-scroll-to');

type Row = { id: string; firstname: string; lastname: string; age: number };

function createRow(id: number): Row {
  return {
    id: `row-${id}`,
    firstname: randFirstName(),
    lastname: randLastName(),
    age: randNumber({ min: 18, max: 99, fraction: 0 }),
  };
}

const INITIAL_ROW_COUNT = 200;

const AnchorScrollTo = () => {
  const columns = useMemo<DataTableColumnDef<Row>[]>(
    () => [
      { header: 'ID', accessor: 'id', id: 'id', width: 110 },
      { header: 'First name', accessor: 'firstname', id: 'firstname' },
      { header: 'Last name', accessor: 'lastname', id: 'lastname' },
      {
        header: 'Age',
        accessor: 'age',
        id: 'age',
        width: 80,
        alignment: 'right',
      },
    ],
    [],
  );

  const [rows, setRows] = useState<Row[]>(() =>
    Array.from({ length: INITIAL_ROW_COUNT }, (_, i) =>
      createRow(INITIAL_ROW_COUNT - i),
    ),
  );

  const [nextId, setNextId] = useState(INITIAL_ROW_COUNT + 1);

  function prependRows() {
    const batch = Array.from({ length: 10 }, (_, i) =>
      createRow(nextId + 10 - 1 - i),
    );
    setRows((current) => [...batch, ...current]);
    setNextId((id) => id + 10);
  }

  return (
    <Flex flexDirection="column" gap={8} height={400}>
      <Flex>
        <Button onClick={prependRows}>Prepend 10 rows</Button>
      </Flex>
      <DataTable
        fullWidth
        columns={columns}
        data={rows}
        rowId={(row) => row.id}
        // highlight-next-line
        anchorScrollTo="end"
      />
    </Flex>
  );
};
```
