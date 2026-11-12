## Cells

> **Note: Keep default styling in custom renderers**
>
> Prefer a `columnType` when one fits your data, so you rarely need custom rendering. When you do write a custom `cell` or custom header renderer, wrap the returned element in `DataTable.DefaultCell` to preserve the default styling and layout. `DataTable.DefaultCell` also accepts `className` and `style` for further customization. See [Customize cell rendering](#customize-cell-rendering) and [Customize column header](#customize-column-header).

### Format cell data

You can format the cell data via the column definition, by specifying the column property `formatter`. For configuration, use the corresponding options from '@dynatrace-sdk/units', i.e. `FormatOptions` for numbers, `FormatDateOptions` for dates, and `DataTableCellFormatterCurrencyOptions` for currencies.

Datetime columns also accept the shorthands `date`, `time`, or `datetime` as a `formatter` value to conveniently show only the date portion, only the time portion, or both.

**FormatColumnCell**

```tsx
import {
  randDomainName,
  randFloat,
  randNumber,
  randPastDate,
} from '@ngneat/falso';
import { useMemo } from 'react';

import { units } from '@dynatrace-sdk/units';
import {
  DataTable,
  TableActionsMenu,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const data = new Array(5).fill(0).map((el, index) => ({
  index,
  host: `host-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 1000000 }),
  memoryTotal: randNumber({ min: 2000000, max: 50000000 }),
  timestamp: randPastDate(),
  price: randNumber({ min: 1_000, max: 10_000 }),
}));

const FormatColumnCell = () => {
  const columns = useMemo<DataTableColumnDef<unknown>[]>(
    () => [
      {
        id: 'host',
        header: 'Host',
        accessor: 'host',
        columnType: 'text',
      },
      {
        id: 'traffic',
        header: 'Traffic',
        accessor: 'traffic',
        columnType: 'number',
        // highlight-next-line
        formatter: { input: units.datarate.MBps },
      },
      {
        id: 'memoryTotal',
        header: 'Memory Total',
        accessor: 'memoryTotal',
        columnType: 'number',
        // highlight-next-line
        formatter: { input: units.data.bit },
      },
      {
        id: 'date',
        header: 'Date',
        accessor: 'timestamp',
        columnType: 'datetime',
        // highlight-next-line
        formatter: 'date',
      },
      {
        id: 'time',
        header: 'Time',
        accessor: 'timestamp',
        columnType: 'datetime',
        // highlight-next-line
        formatter: 'time',
      },
      {
        id: 'price',
        header: 'Price',
        accessor: 'price',
        columnType: 'currency',
        // highlight-start
        formatter: {
          currency: 'EUR',
          abbreviate: true,
          maximumFractionDigits: 1,
        },
        // highlight-end
      },
    ],
    [],
  );

  return (
    <DataTable columns={columns} data={data} fullWidth>
      <DataTable.CellActions>
        {({ cellValue }) => (
          <TableActionsMenu>
            <TableActionsMenu.CopyItem value={(cellValue as string) ?? ''} />
          </TableActionsMenu>
        )}
      </DataTable.CellActions>
    </DataTable>
  );
};
```

### Customize cell rendering

To customize the cell rendering, pass the corresponding function to the `cell` prop in the column definition. If you want to maintain default cell styling, you need to wrap each return statement with `DataTable.DefaultCell` element. Also, `DataTable.DefaultCell` supports `className` and `style` props, allowing further customization of the cell appearance.

Within the function passed to the cell property, you can access the cell's `value`, `rowIndex`, `rowData` and `rowId`. Additionally, the `isLineWrapped` prop provides the current line wrap state of the column in which the cell is rendered.

Moreover, a `format`, a `formatLogContent` and a `detectLinks` function are available:

- `format` - Allows you to apply the `formatter` options that have been configured for that cell (either via the column definition or via the columnType).
- `formatLogContent` - Formats the given text as a log output.
- `detectLinks` - Automatically detects links in the given text and renders them as such using the `ExternalLink` component.

**CustomCellRendering**

```tsx
import {
  seed,
  randNumber,
  randDomainName,
  randBetweenDate,
} from '@ngneat/falso';
import { useMemo } from 'react';

import { units } from '@dynatrace-sdk/units';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { Highlight } from '@dynatrace/strato-components/typography';

seed('1234');

const data = new Array(5).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randNumber({ min: 100, max: 300 }),
  memoryTotal: randNumber({ min: 2000000000, max: 8000000000 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
}));

/**
 * Showcasing how to customize the cell rendering via column definitions.
 */
const CustomCellRendering = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Host',
        accessor: 'host',
        id: 'host',
        // highlight-start
        cell: ({ value, rowIndex }) => (
          <DataTable.DefaultCell>
            {rowIndex}) {value}
          </DataTable.DefaultCell>
        ),
        // highlight-end
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
        // highlight-start
        cell: ({ value, rowData }) => {
          if (rowData.traffic === 228) {
            return (
              <DataTable.DefaultCell>
                <Highlight term={`${value}`}>{value}</Highlight>
              </DataTable.DefaultCell>
            );
          }
          return <DataTable.DefaultCell>{value}</DataTable.DefaultCell>;
        },
        // highlight-end
      },
      {
        header: 'Memory Total',
        accessor: 'memoryTotal',
        id: 'memoryTotal',
        // highlight-start
        cell: ({ value, rowData, format }) => {
          if (rowData.memoryTotal > 5000000000) {
            return (
              <DataTable.DefaultCell style={{ color: 'red' }}>
                {format(value)}
              </DataTable.DefaultCell>
            );
          }
          return (
            <DataTable.DefaultCell style={{ color: 'green' }}>
              {format(value)}
            </DataTable.DefaultCell>
          );
        },
        // highlight-end
        formatter: {
          input: units.data.bit,
          output: units.data.megabyte,
        },
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
      },
    ],
    [],
  );

  return <DataTable columns={columns} data={data}></DataTable>;
};
```

### Highlight cells

Cells can be highlighted in different colors depending on the specified threshold. In the column definition, you can configure the threshold for every column. You can specify `value`, `comparator`, `color`, `backgroundColor`, and `accessor`. The `color` will be applied to the cell text and `backgroundColor` to the cell background. The `accessor` prop can also be used for providing custom accessor for the cell value that can be used for threshold calculations.

If the column cell value passed is a string (text), the threshold comparator can be set with either an `equal-to` or `not-equal-to` operator. On the other hand, if your value is a number, you can use one of the following operators:

- `greater-than`
- `less-than`
- `greater-than-or-equal-to`
- `less-than-or-equal-to`
- `equal-to`
- `not-equal-to`

If the value of the `cell` is an object, the `threshold` `accessor` could return a specific attribute within the object, such as a `number` or `string`. This allows for more complex threshold calculations based on specific attributes of object values.

> **Note**
>
> When multiple thresholds are applicable (evaluate to true) the final valid threshold has priority. Also, if both row and column thresholds apply to a cell, the column threshold takes precedence over the row threshold.

**ColumnThresholds**

```tsx
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import Colors from '@dynatrace/strato-design-tokens/colors';

/**
 * Showcasing cell thresholds via column definitions.
 */
const ColumnThresholds = () => {
  const thresholdColumns = useMemo<DataTableColumnDef<unknown>[]>(
    () => [
      {
        id: 'host',
        header: 'Host',
        accessor: 'host.name',
        // highlight-start
        thresholds: [
          {
            accessor: 'host.prefix',
            value: 'et-demo-win',
            comparator: 'equal-to',
            color: Colors.Text.Critical.Default,
          },
          {
            accessor: 'host.prefix',
            value: 'et-demo-mac',
            comparator: 'equal-to',
            color: Colors.Text.Success.Default,
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
        // highlight-start
        thresholds: [
          {
            rules: [
              {
                accessor: 'memoryTotal',
                value: 4670000000,
                comparator: 'greater-than',
              },
            ],
            color: Colors.Text.Neutral.Default,
            backgroundColor: Colors.Background.Container.Warning.Accent,
          },
          {
            rules: [
              {
                accessor: 'memoryTotal',
                value: 4670000001,
                comparator: 'less-than',
              },
            ],
            color: Colors.Text.Critical.Default,
          },
        ],
        // highlight-end
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
  return <DataTable columns={thresholdColumns} data={data} fullWidth />;
};
```
