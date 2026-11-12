## Rows

### Enable interactive rows

To activate interactive rows in `DataTable`, you must configure the `interactiveRows` prop on the table. This will make the entire row highlightable and selectable by the user. A row can be activated either by clicking on it or focusing it.

To activate a row initially without controlling activation yourself, use the `defaultActiveRow` prop instead. It takes the `rowId` of the row to activate, and the table manages activation from there. As with every feature, `defaultActiveRow` is mutually exclusive with the controlled `activeRow` prop. See [Controlled and uncontrolled state](#controlled-and-uncontrolled-state).

**InteractiveRowsUncontrolled**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { Paragraph } from '@dynatrace/strato-components/typography';

const InteractiveRowsUncontrolled = () => {
  const data = useMemo(
    () =>
      new Array(5).fill(0).map(() => ({
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

  const [selectedHost, setSelectedHost] = useState<string | undefined>(
    data[0]?.host,
  );

  return (
    <Flex gap={8} flexDirection="column">
      <DataTable
        data={data}
        columns={columns}
        // highlight-start
        interactiveRows
        defaultActiveRow="0"
        onActiveRowChange={(activeRow) => {
          setSelectedHost(
            activeRow !== null ? data[Number(activeRow)]?.host : undefined,
          );
        }}
        // highlight-end
      />
      <Paragraph>{selectedHost && `Selected host: ${selectedHost}`}</Paragraph>
    </Flex>
  );
};
```

#### Disable auto-activation for interactive rows

By default, interactive rows are automatically activated when they are focused using the keyboard. However, if you want to disable automatic activation, you can do so by setting `interactiveRows={{ autoActivate: false }}`. This allows you to activate a specific row by pressing the `Enter` key.

**InteractiveRowsAutoActivation**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const InteractiveRowsAutoActivation = () => {
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
      new Array(5).fill(0).map(() => ({
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

  const [
    enableInteractiveRowsAutoActivate,
    setEnableInteractiveRowsAutoActivate,
  ] = useState<boolean>(true);

  return (
    <Flex gap={8} flexDirection="column">
      <Button
        onClick={() => setEnableInteractiveRowsAutoActivate((prev) => !prev)}
        variant="emphasized"
      >
        {enableInteractiveRowsAutoActivate
          ? 'Disable auto-activation'
          : 'Enable auto-activation'}
      </Button>
      <DataTable
        data={data}
        columns={columns}
        // highlight-next-line
        interactiveRows={{ autoActivate: enableInteractiveRowsAutoActivate }}
      />
    </Flex>
  );
};
```

#### Disable interactivity for individual rows

To exclude individual rows from interactivity, pass a `disableRowInteractivity` function in the `interactiveRows` configuration object. It receives the row data and returns `true` for every row that must not be interactive.

A disabled row looks like a row in a table without `interactiveRows`: it has no hover, active or focus effects and cannot be activated with the pointer or keyboard. Keyboard navigation skips it and `onActiveRowChange` is not called for it. Row actions, cell actions, and other interactive elements inside the row remain interactive.

**InteractiveRowsDisabledRows**

```tsx
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const InteractiveRowsDisabledRows = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        id: 'Name',
        header: 'Name',
        accessor: 'name',
      },
      {
        id: 'Type',
        header: 'Type',
        accessor: 'type',
      },
      {
        id: 'Trusted',
        header: 'Trusted',
        accessor: 'trusted',
        cell: ({ value }) => (
          <DataTable.DefaultCell>{value ? 'Yes' : 'No'}</DataTable.DefaultCell>
        ),
      },
    ];
  }, []);

  const data = useMemo(
    () => [
      { name: 'environment', type: 'Text', trusted: true },
      { name: 'cluster', type: 'Query', trusted: true },
      { name: 'custom-filter', type: 'Code', trusted: false },
      { name: 'time-range', type: 'Text', trusted: true },
      { name: 'custom-formatter', type: 'Code', trusted: false },
    ],
    [],
  );

  const interactiveRows = useMemo(
    () => ({
      // highlight-next-line
      disableRowInteractivity: (row: (typeof data)[number]) => !row.trusted,
    }),
    [],
  );

  return (
    <DataTable
      data={data}
      columns={columns}
      fullWidth
      // highlight-next-line
      interactiveRows={interactiveRows}
    />
  );
};
```

### Control interactive rows

When you want to control which row is currently activated, you use the `activeRow` prop. This prop allows you to specify which row should be marked as active at any given time. To make this dynamic, you can also provide a handler function for the `onActiveRowChange` callback. The rows themselves are identified by the `rowId`, which can be customized as well. For details on how to do this, reference the [control row IDs](#control-row-ids) section.

> **Note**
>
> In addition to the `interactiveRows` prop, it is advised to debounce the row activation when auto-activation is enabled. This allows you to specify by how many milliseconds the activation of a row should be delayed for better performance. By default, the row is immediately activated.

**InteractiveRowsControlled**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { debounce } from 'lodash-es';
import { useMemo, useState } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
  type DataTableProps,
} from '@dynatrace/strato-components/tables';

const InteractiveRowsControlled = () => {
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
      new Array(5).fill(0).map(() => ({
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

  const [activeRow, setActiveRow] = useState<DataTableProps['activeRow']>('3');

  const ACTIVE_ROW_DEBOUNCE_MS = 10;
  const debouncedOnActiveRowChangeHandler = useMemo(
    () =>
      debounce((activeRow) => {
        setActiveRow(activeRow);
      }, ACTIVE_ROW_DEBOUNCE_MS),
    [],
  );

  return (
    <DataTable
      data={data}
      columns={columns}
      // highlight-start
      interactiveRows
      activeRow={activeRow}
      onActiveRowChange={(activeRow) => {
        debouncedOnActiveRowChangeHandler(activeRow);
      }}
      // highlight-end
    />
  );
};
```

### Provide sub-rows

The `DataTable` component offers the capability to include sub-rows.

1. Enable sub-rows - To activate this functionality, the `subRows` prop must be defined. This prop accepts either a boolean value, which activates the default sub-row view, or an object configuration.

2. Provide sub-rows data - Simply define the respective sub-row data by adding the `subRows` property to the parent row's data definition. The specified sub-rows must have the same data structure as the parent rows and can be nested over multiple levels.

Use the `defaultOpenSubRows` prop to specify sub-rows that are already open upon initial rendering. The `onOpenSubRowsChange` handler allows you to react to changes in the currently open sub-rows.

The `defaultOpenSubRows`/`openSubRows` expects the id of the row (unless otherwise specified, this is the array index of the data) along with a boolean whether or not it's opened. Nested sub-rows are separated with a dot by default, so '0.0' would be the first row's first sub-row. For details on how to customize row IDs, reference the [control row IDs section](#control-row-ids).

> **Note**
>
> The column containing the sub-row indicator should always be left aligned.

**SubRowsUncontrolled**

```tsx
import {
  randEmail,
  randFirstName,
  randLastName,
  randNumber,
  randTextRange,
  seed,
} from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
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
    wrapping: randTextRange({ min: 255, max: 500 }),
  };
}

function createNestedRow(
  row: ReturnType<typeof createRow> | undefined,
  level: number,
  limit: number,
): ReturnType<typeof createRow> & { subRows: ReturnType<typeof createRow>[] } {
  const currentRow = row ?? createRow();

  const subRows = new Array(1).fill(0).map(createRow);

  if (level < limit) {
    for (let i = 0; i < subRows.length; i += 1) {
      subRows[i] = createNestedRow(subRows[i], level + 1, limit);
    }
  }

  return {
    ...currentRow,
    subRows,
  };
}

const data = new Array(2)
  .fill(0)
  .map(createRow)
  .map((row) => createNestedRow(row, 0, 10));

seed('1234');

const SubRowsUncontrolled = () => {
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

  return (
    <DataTable
      columns={columns}
      data={data}
      fullWidth
      // highlight-next-line
      subRows
    />
  );
};
```

### Configure sub-rows

To further configure sub-rows, you can pass a configuration object to the `subRows` prop, using the following options:

1. `accessor`—Provides a custom `accessor` that retrieves the corresponding sub-rows for each row from the data.

2. `subRowColumnId`—Specifies the ID of the column in which to inject the sub-row indicator. By default, this is the first visible column.

3. `disableSubRow`—Accepts a function that evaluates whether or not to disable the sub-row trigger for a given row.

**SubRowsConfigured**

```tsx
import {
  randEmail,
  randFirstName,
  randLastName,
  randNumber,
  seed,
} from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
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

const data = [
  {
    ...createRow(),
    myCustomSubRows: [
      {
        ...createRow(),
        myCustomSubRows: [{ ...createRow() }, { ...createRow() }],
      },
      { ...createRow() },
    ],
  },
  {
    ...createRow(),
    myCustomSubRows: [
      {
        ...createRow(),
        myCustomSubRows: [{ ...createRow() }, { ...createRow() }],
      },
    ],
  },
];

const SubRowsConfigured = () => {
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

  return (
    <DataTable
      columns={columns}
      data={data}
      fullWidth
      selectableRows
      // highlight-start
      subRows={{
        accessor: 'myCustomSubRows',
        subRowColumnId: 'lastname',
        disableSubRow: (row) => row.lastname === 'Sani',
      }}
      // highlight-end
      defaultOpenSubRows={{
        '0': true,
        '1': true,
      }}
    />
  );
};
```

### Control sub-rows

To control the state of the open sub-rows, provide the desired rows using the `openSubRows` prop along with a handler for the `onOpenSubRowsChange` callback.

**SubRowsControlled**

```tsx
import {
  randEmail,
  randFirstName,
  randLastName,
  randNumber,
  randTextRange,
  seed,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
  type DataTableProps,
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
    wrapping: randTextRange({ min: 255, max: 500 }),
  };
}

function createNestedRow(
  row: ReturnType<typeof createRow> | undefined,
  level: number,
  limit: number,
): ReturnType<typeof createRow> & { subRows: ReturnType<typeof createRow>[] } {
  const currentRow = row ?? createRow();

  const subRows = new Array(1).fill(0).map(createRow);

  if (level < limit) {
    for (let i = 0; i < subRows.length; i += 1) {
      subRows[i] = createNestedRow(subRows[i], level + 1, limit);
    }
  }

  return {
    ...currentRow,
    subRows,
  };
}

const data = new Array(2)
  .fill(0)
  .map(createRow)
  .map((row) => createNestedRow(row, 0, 10));

seed('1234');

const SubRowsControlled = () => {
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

  const [openSubRows, setOpenSubRows] = useState<DataTableProps['openSubRows']>(
    {
      '0': true,
      '0.0': true,
    },
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      // highlight-start
      subRows
      openSubRows={openSubRows}
      onOpenSubRowsChange={setOpenSubRows}
      // highlight-end
      fullWidth
    />
  );
};
```

### Enable expandable rows

Expandable rows allow you to add additional data to a row. This information is only visible when the row is expanded.

Wrap the expandable row content with `DataTable.ExpandableRowWrapper`. It automatically syncs padding with the table's row density setting and provides the required `role="cell"` for correct ARIA grid semantics.

The default state of each row can be controlled using the `defaultExpandedRows` prop on the `DataTable.ExpandableRow` slot child. To control each row over the lifetime of the table use the `expandedRows` property and the `onExpandedRowsChange` callback.

In this example, every second row is disabled for demo purposes.

**RowDetails**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
  seed,
} from '@ngneat/falso';
import { useMemo } from 'react';

import { format, formatDate, units } from '@dynatrace-sdk/units';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { Paragraph } from '@dynatrace/strato-components/typography';

seed('1234');

const RowDetails = () => {
  const data = useMemo(
    () =>
      new Array(5).fill(0).map((_, index) => ({
        index,
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
    ];
  }, []);

  return (
    <DataTable fullWidth columns={columns} data={data}>
      {/* highlight-start */}
      <DataTable.ExpandableRow
        defaultExpandedRows={{ '3': true }}
        disableExpand={(row: (typeof data)[number]) => row.index % 2 === 0}
      >
        {({ row }: { row: (typeof data)[number] }) => (
          <DataTable.ExpandableRowWrapper>
            <Paragraph>
              Memory consumption:{' '}
              {format(row.memoryTotal, { input: units.data.byte })}
            </Paragraph>
            <Paragraph>Timestamp: {formatDate(row.timestamp)}</Paragraph>
          </DataTable.ExpandableRowWrapper>
        )}
      </DataTable.ExpandableRow>
      {/* highlight-end */}
    </DataTable>
  );
};
```

### Enable row selection

To activate row selection in `DataTable`, you must configure the `selectableRows` prop on the table. Assigning a boolean value to this prop will add a checkbox in the first column across all rows, enabling selection functionality. Alternatively, `selectableRows` can be defined as an object, allowing for further customization through the following options:

1. `disableRowSelection` - Accepts a function that takes the row's data as input and returns a boolean value. If it returns `true`, the row will be non-selectable; if `false`, the row will be selectable.

2. `selectAllBehavior` - A string value that specifies whether the **Select all** action applies to only the currently visible rows on the page or to all rows within the table.

3. `limit` - A positive integer that sets the maximum number of selectable rows.

> **Note**
>
> If a `limit` is specified, rows will still be **de-selectable** even when `disableRowSelection` is enabled. This prevents inconsistent states where the selection `limit` is reached but all selected rows are disabled, making it impossible to adjust the selection.

To set up rows that should be selected as soon as your table loads, you need to use a prop `defaultSelectedRows`. This option should be assigned an object that specifies which rows are selected. Each row is identified by its id, and the selection state is indicated by a boolean value (`true` for selected, `false` for not selected). To ensure correct selection behavior when updating table data dynamically (e.g., adding or removing rows), make sure to provide [unique row IDs](#control-row-ids).

It is possible to select or deselect multiple rows at once by first clicking on a start row, then holding the `Shift` key while clicking on an end row.

**SelectableRowsUncontrolled**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const SelectableRowsUncontrolled = () => {
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
      new Array(5).fill(0).map(() => ({
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
    <DataTable
      data={data}
      columns={columns}
      // highlight-next-line
      selectableRows
    />
  );
};
```

### Control row selection

To control row selection, pass a `selectedRows` object (row IDs as keys, booleans as values) and an `onRowSelectionChange` callback.

**SelectableRowsControlled**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const SelectableRowsControlled = () => {
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
      new Array(5).fill(0).map(() => ({
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

  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({
    '0': true,
    '3': true,
  });

  return (
    <DataTable
      data={data}
      columns={columns}
      // highlight-start
      selectableRows
      selectedRows={selectedRows}
      onRowSelectionChange={setSelectedRows}
      // highlight-end
    />
  );
};
```

### Control row IDs

Provide a stable, unique, not personally identifiable information (PII) `rowId` for any table that keeps per-row state: row selection, sub-rows, row expansion, row ordering, scroll-to-row, or interactive rows. The `rowId` function receives a row's data and returns its identifier, for example `rowId={(row) => row.id}`.

By default, rows are identified by their index in the `data` array. Because the index tracks a row's position rather than its identity, the default breaks row-keyed state whenever the data is reordered or filtered: selection, expansion, and open sub-rows attach to the wrong rows or are lost, since the row at a given index changes. Provide an explicit `rowId` to keep that state attached to the correct row.

> **Caution**
>
> Derive `rowId` from a stable, non-PII key such as a database ID. Do not key on personal data (for example `email`) or on any value that can change while the table is mounted. A mutable key resets the row's state when the value changes, and a PII key leaks personal data into row identifiers. The `rowId` values are rendered as `data-rowid` attributes in the DOM and are therefore visible to any page-level script, browser devtools, and analytics or session-recording tooling.

When providing a custom row id function, for sub-row identification, the row IDs will be separated by `↳` character.

**RowIdentification**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const RowIdentification = () => {
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
      new Array(5).fill(0).map(() => ({
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

  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({
    [data[0].host]: true,
    [data[3].host]: true,
  });

  return (
    <DataTable
      data={data}
      columns={columns}
      selectableRows
      selectedRows={selectedRows}
      // highlight-next-line
      rowId={(row) => row.host}
      onRowSelectionChange={setSelectedRows}
    />
  );
};
```

### Configure row order

To enable row ordering, set the `rowOrdering` prop to `true`. Note that if you are providing your own row IDs you need to specify the `rowId` prop.

For uncontrolled, you can optionally use `defaultRowOrder` to define the initial row order, by providing an array of all row IDs in the desired order. If you don't specify any order, the initial order is inferred from the order in `data`.

To enable drag and drop row ordering, you can pass a configuration object to the `rowOrdering` prop with the option `enableDragAndDrop` set to `true`. Additionally, the option `disableRowDragAndDrop` accepts a function that takes the row's data as input and returns a boolean value. If `true` is returned, drag and drop will be disabled for the row, otherwise it is enabled.

Additionally, the `lockDisabledRows` option ensures that rows with disabled drag and drop remain fixed in place when sorted to the start or end of the table. Consequently, other rows cannot be dropped above or below these locked rows. If set to `true`, the rows are locked when sorted to the start or end of the table. Optionally, `lockDisabledRows` can be set to `'start'` or `'end'` if rows should be locked solely at the start or at the end.

To explain why a drag handle is disabled, provide the `disabledRowDragAndDropTooltip` option. Pass a string to show the same tooltip on every handle disabled via `disableRowDragAndDrop`, or a function that receives the row data and returns a per-row message (return `undefined` to show no tooltip for that row). When the table is sorted, drag and drop is disabled for all rows and a built-in default tooltip is shown instead, taking precedence over this value.

When drag and drop is enabled, a drag handle for every row will be rendered in the first column. To move a row to another position hold down the mouse on the drag handle and then release it when you have moved it to its destination. This is also possible using touch (press, hold and release).

Alternatively, using the keyboard use `Tab` to focus the drag handle and then press `Space` once. Use `ArrowUp` and `ArrowDown` to move the row to its destination and then press `Space` again to release it. To cancel, press `Escape`.

If you are using row ordering with pagination and modifying the `data`, you should set `autoResetPageIndex` to `false` to prevent the pagination jumping back to the first page. If you are only modifying the `rowOrder` then there is no need.

**RowOrderUncontrolled**

```tsx
import {
  randDomainName,
  randEmail,
  randPastDate,
  randUserName,
  seed,
} from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  id: `${index}`,
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const RowOrderUncontrolled = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      // highlight-next-line
      rowOrdering={{ enableDragAndDrop: true }}
      rowId={(row) => row.id}
    />
  );
};
```

### Control row ordering

For controlled, the `rowOrder` prop holds the order of the rows. This is an ordered set of string IDs of the rows. It's up to you to use the `onRowOrderChange` event to update row order and optionally update the original data as you see fit.

**RowOrderControlled**

```tsx
import {
  randDomainName,
  randEmail,
  randPastDate,
  randUserName,
  seed,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  id: `${index + 1}`,
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const RowOrderControlled = () => {
  const [rowOrder, setRowOrder] = useState(() => ['2', '1', '4', '3', '5']);

  const handleRowOrderChange = (rowOrder: string[]): void => {
    setRowOrder(rowOrder);
  };

  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      // highlight-start
      rowOrdering={{ enableDragAndDrop: true }}
      rowOrder={rowOrder}
      onRowOrderChange={handleRowOrderChange}
      // highlight-end
      rowId={(row) => row.id}
    />
  );
};
```

#### Order rows with disabled drag and drop

To facilitate disabling of drag and drop functionality for certain rows, we provide the `useLockedRowOrder` hook. This hook disables drag and drop functionality for the specified rows and locks them at the start or the end of the table. It takes an object with the following options:

- `initialRowOrder` - An ordered set of row IDs representing the initial row order.
- `lockedRows` - A set of row IDs for which drag and drop is disabled and should be sorted.
- `position` - The position where the rows with disabled drag and drop should be grouped. Use `'start'` to position the rows at the start of the table and `'end'` to group them at the end. By default, the rows are positioned at the start.
- `disabledRowDragAndDropTooltip` - An optional tooltip shown on the disabled drag handles of the locked rows. Pass a string to reuse the same tooltip for every locked row, or a function that receives the row data and returns a per-row message.

**RowOrderLockedRows**

```tsx
import {
  randDomainName,
  randEmail,
  randPastDate,
  randUserName,
  seed,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { ToggleButtonGroup } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  useLockedRowOrder,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  id: `${index}`,
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const initialRowOrder = data.map((row) => row.id);
const lockedRows = ['1', '3'];

const lockedRowTooltip = (row: (typeof data)[number]) =>
  `Row "${row.id}" is locked and can't be reordered`;

const RowOrderLockedRows = () => {
  const [position, setPosition] = useState<'start' | 'end'>('start');
  // highlight-start
  const { rowOrdering, rowOrder, setRowOrder } = useLockedRowOrder<
    (typeof data)[number]
  >({
    initialRowOrder,
    lockedRows,
    position,
    disabledRowDragAndDropTooltip: lockedRowTooltip,
  });
  // highlight-end

  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
      },
    ],
    [],
  );

  return (
    <Flex gap={8} flexDirection="column">
      <Flex justifyContent="start">
        <ToggleButtonGroup
          value={position}
          onChange={(value) => setPosition(value as 'start' | 'end')}
        >
          <ToggleButtonGroup.Item value="start">start</ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="end">end</ToggleButtonGroup.Item>
        </ToggleButtonGroup>
      </Flex>
      <DataTable
        columns={columns}
        data={data}
        rowOrdering={rowOrdering}
        rowOrder={rowOrder}
        onRowOrderChange={setRowOrder}
        rowId={(row) => row.id}
        fullWidth
      />
    </Flex>
  );
};
```

### Highlight rows

You have the option to highlight an entire row. The thresholds for row highlighting can be configured at the table level using the `rowThresholds` prop. This prop accepts the same options as the cell threshold with the addition of a `type`. However, it also allows you to specify which cell value should be used for the row threshold by defining an accessor or id.

You can add either a single rule or multiple rules to the threshold definition. If you choose to use multiple rules, you can define different thresholds for different cell values within a row. However, regardless of which threshold is met, the same color will be applied to the entire row.

The `type` determines how the highlighted row will be visually marked. The `pill` type accepts a `color` and shows a marker on the start of the row. The `highlight` type accepts `color` and `backgroundColor` and changes the textcolor and background color of all cells in a row.

**RowThresholds**

```tsx
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import Colors from '@dynatrace/strato-design-tokens/colors';

/**
 * Showcasing row thresholds via table definitions.
 */
const RowThresholds = () => {
  const columns = useMemo<DataTableColumnDef<unknown>[]>(
    () => [
      {
        id: 'host',
        header: 'Host',
        accessor: 'host.name',
      },
      {
        id: 'traffic',
        header: 'Traffic',
        accessor: 'traffic',
      },
      {
        id: 'memoryTotal',
        header: 'Memory Total',
        accessor: 'memoryTotal',
      },
      {
        id: 'timestamp',
        header: 'Timestamp',
        accessor: 'timestamp',
      },
    ],
    [],
  );

  const data = [
    {
      host: { prefix: 'et-demo-win', name: 'win4' },
      traffic: 213.4,
      memoryTotal: 5830000000,
      timestamp: '2022-09-26T12:45:07Z',
      price: 290,
    },
    {
      host: { prefix: 'et-demo-win', name: 'Host3' },
      traffic: 374,
      memoryTotal: 3520000000,
      timestamp: '2022-09-27T14:10:02Z',
      price: 324,
    },
    {
      host: { prefix: 'et-demo-win', name: 'Host1' },
      traffic: 625,
      memoryTotal: 4670000000,
      timestamp: '2022-09-27T13:10:02Z',
      price: 343,
    },
    {
      host: { prefix: 'et-demo-win', name: 'Host8' },
      traffic: 98.7,
      memoryTotal: 5820000000,
      timestamp: '2022-09-28T11:29:10Z',
      price: 289,
    },
    {
      host: { prefix: 'et-demo-mac', name: 'Host-01' },
      traffic: 164.6,
      memoryTotal: 3460000000,
      timestamp: '2022-09-28T10:22:56Z',
      price: 193,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      fullWidth
      // highlight-start
      rowThresholds={[
        {
          // multiple threshold rules
          rules: [
            {
              accessor: 'memoryTotal',
              value: 3500000000,
              comparator: 'greater-than',
            },
            {
              accessor: 'memoryTotal',
              value: 4000000000,
              comparator: 'less-than',
            },
          ],
          color: Colors.Text.Neutral.Default,
          backgroundColor: Colors.Background.Container.Critical.Emphasized, // background color for the row
          type: 'highlight',
        },
        {
          // single threshold rule
          accessor: 'host.prefix',
          value: 'et-demo-mac',
          comparator: 'equal-to',
          color: Colors.Background.Container.Warning.Accent,
          type: 'pill',
        },
      ]}
      // highlight-end
    />
  );
};
```

### Define custom comparator

You can define a custom `comparator` function to evaluate the `threshold` using your own logic. This function should return a `boolean`. If it returns `true`, the `threshold` is applied; if `false`, it's not. The function receives the row data as input. Please note that this custom `comparator` function will not be serialized for sharing via [intents](https://developer.dynatrace.com/develop/guides/navigation/intents.md).

**CustomComparator**

```tsx
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import Colors from '@dynatrace/strato-design-tokens/colors';

// simple function to check if the row is a windows host
function isWindows(hostname: string): boolean {
  return hostname.includes('et-demo-win');
}

// simple function to check if the row is a mac host
function isMac(hostname: string): boolean {
  return hostname.includes('et-demo-mac');
}

/**
 * Showcasing custom comparator.
 */
const CustomComparator = () => {
  const data = [
    {
      host: 'et-demo-win-win4',
      traffic: 213.4,
      memoryTotal: 5830000000,
      timestamp: '2022-09-26T12:45:07Z',
      price: 290,
    },
    {
      host: 'et-demo-win-Host3',
      traffic: 374,
      memoryTotal: 3520000000,
      timestamp: '2022-09-27T14:10:02Z',
      price: 324,
    },
    {
      host: 'et-demo-win-Host1',
      traffic: 625,
      memoryTotal: 4670000000,
      timestamp: '2022-09-27T13:10:02Z',
      price: 343,
    },
    {
      host: 'et-demo-win-Host8',
      traffic: 98.7,
      memoryTotal: 5820000000,
      timestamp: '2022-09-28T11:29:10Z',
      price: 289,
    },
    {
      host: 'et-demo-mac-Host-01',
      traffic: 164.6,
      memoryTotal: 3460000000,
      timestamp: '2022-09-28T10:22:56Z',
      price: 193,
    },
  ];

  const thresholdColumns = useMemo<
    DataTableColumnDef<(typeof data)[number]>[]
  >(() => {
    return [
      {
        id: 'host',
        header: 'Host',
        accessor: 'host',
        // highlight-start
        thresholds: [
          {
            accessor: 'host',
            comparator: (row) => isWindows(row.host),
            backgroundColor: Colors.Background.Container.Neutral.Default,
          },
        ],
        // highlight-end
      },
      {
        id: 'traffic',
        header: 'Traffic',
        accessor: 'traffic',
      },
      {
        id: 'memoryTotal',
        header: 'Memory Total',
        accessor: 'memoryTotal',
      },
      {
        id: 'timestamp',
        header: 'Timestamp',
        accessor: 'timestamp',
      },
    ];
  }, []);

  return (
    <DataTable
      columns={thresholdColumns}
      data={data}
      // highlight-start
      rowThresholds={[
        {
          comparator: (row) => isMac(row.host),
          backgroundColor: Colors.Background.Container.Warning.Accent,
          type: 'highlight',
        },
      ]}
      // highlight-end
      fullWidth
    />
  );
};
```
