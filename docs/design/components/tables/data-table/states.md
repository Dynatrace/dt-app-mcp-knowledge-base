## States

### Loading state

Use the `loading` prop to display a loading indicator. This can be used for the initial load where columns and data are not yet available, when waiting for data to be fetched or when performing actions such as moving to the next page. The loading indicator will adjust accordingly depending on whether columns and data are already loaded.

#### Initial table load

**LoadingStateInitial**

```tsx
import {
  seed,
  randNumber,
  randDomainName,
  randFloat,
  randBetweenDate,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
  price: randNumber({ min: 20, max: 150 }),
}));

const LoadingStateInitial = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        header: 'Host',
        id: 'host',
        accessor: 'host',
      },
      {
        header: 'Traffic',
        id: 'traffic',
        accessor: 'traffic',
      },
      {
        header: 'Timestamp',
        id: 'timestamp',
        accessor: 'timestamp',
      },
      {
        header: 'Price',
        id: 'price',
        accessor: 'price',
      },
    ];
  }, []);

  const [initialLoad, setInitialLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tableColumns, setTableColumns] = useState(columns);
  const [tableData, setTableData] = useState(data);

  return (
    <Flex flexDirection="column">
      <Button
        data-testid="load-table"
        onClick={() => {
          setInitialLoad(true);
          setTableColumns([]);
          setTableData([]);
          setLoading(true);

          setTimeout(() => {
            setTableColumns(columns);
            setTableData(data);
            setLoading(false);
          }, 2000);
        }}
        variant="emphasized"
      >
        Load Table
      </Button>

      {/* highlight-next-line */}
      {initialLoad && (
        <DataTable
          // highlight-next-line
          loading={loading}
          columns={tableColumns}
          data={tableData}
        />
      )}
    </Flex>
  ); //#endregion
};
```

#### Load data

**LoadingStateData**

```tsx
import {
  seed,
  randNumber,
  randDomainName,
  randFloat,
  randBetweenDate,
} from '@ngneat/falso';
import { useCallback, useMemo, useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

type Data = {
  host: string;
  traffic: number;
  timestamp: Date;
  price: number;
};

seed('1234');

const data = new Array(15).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
  price: randNumber({ min: 20, max: 150 }),
}));

const LoadingStateData = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        header: 'Host',
        id: 'host',
        accessor: 'host',
      },
      {
        header: 'Traffic',
        id: 'traffic',
        accessor: 'traffic',
      },
      {
        header: 'Timestamp',
        id: 'timestamp',
        accessor: 'timestamp',
      },
      {
        header: 'Price',
        id: 'price',
        accessor: 'price',
      },
    ];
  }, []);

  const [loadingData, setLoadingData] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageData, setPageData] = useState<Data[]>([]);
  const [enablePrevPage, setEnablePrevPage] = useState(true);
  const [enableNextPage, setEnableNextPage] = useState(true);
  const fetchIdRef = useRef(0);
  const fetchAPIData = useCallback((pageSize: number, pageIndex: number) => {
    const startRow = pageSize * pageIndex;
    const endRow = startRow + pageSize;
    setLoadingData(true);
    setTimeout(() => {
      setLoadingData(false);
      setPageData(data.slice(startRow, endRow));
      setEnablePrevPage(pageIndex > 0);
      setEnableNextPage(pageIndex + 1 < Math.ceil(data.length / pageSize));
    }, 2000);
  }, []);
  const fetchData = useCallback(
    (pageSize: number, pageIndex: number) => {
      console.log('fetch', pageIndex);

      // This will get called when the table needs new data
      // Give this fetch an ID
      const fetchId = ++fetchIdRef.current;
      if (fetchId === fetchIdRef.current) {
        console.log('fetch');
        fetchAPIData(pageSize, pageIndex);
      }
    },
    [fetchAPIData],
  );

  return (
    <Flex flexDirection="column">
      <Button
        variant="emphasized"
        disabled={pageData.length !== 0}
        onClick={() => fetchData(pageSize, pageIndex)}
      >
        Load Data
      </Button>
      <DataTable
        // highlight-next-line
        loading={loadingData}
        columns={columns}
        data={pageData}
      >
        <DataTable.Pagination
          pageSize={pageSize}
          onPageSizeChange={(pageSize) => {
            setPageSize(pageSize);
            fetchData(pageSize, pageIndex);
          }}
          pageIndex={pageIndex}
          onPageIndexChange={(pageIndex) => {
            setPageIndex(pageIndex);
            fetchData(pageSize, pageIndex);
          }}
          enablePreviousPage={enablePrevPage}
          enableNextPage={enableNextPage}
        />
      </DataTable>
    </Flex>
  );
};
```

### Customize empty state

The `DataTable.EmptyState` component allows you to configure a custom empty state that will be displayed if no data or no columns are available.

**EmptyState**

```tsx
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const EmptyState = () => {
  const columns = useMemo<DataTableColumnDef<unknown>[]>(
    () => [
      { header: 'First Name', accessor: 'firstName', id: 'firstName' },
      { header: 'Last Name', accessor: 'lastName', id: 'lastName' },
      { header: 'Email', accessor: 'email', id: 'email' },
    ],
    [],
  );

  return (
    <DataTable columns={columns} data={[]}>
      {/* highlight-next-line */}
      <DataTable.EmptyState>There is no data to be shown.</DataTable.EmptyState>
    </DataTable>
  );
};
```
