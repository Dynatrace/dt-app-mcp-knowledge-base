## Columns

> **Note: Table size limit**
>
> Due to CSS grid layout constraints, `DataTable` supports a maximum of 10,000 visible columns. This count includes the visible columns from your definition and any columns the table adds automatically based on enabled features. This aligns with [W3C CSS Grid Layout Module](https://www.w3.org/TR/css-grid-1/#overlarge-grids) recommendations. Exceeding this limit may cause rendering issues in some browsers.

> **Note: Data and column memoization**
>
> Make sure to memoize the `data` and `columns` props passed to the `DataTable` and use the `useMemo` hook so the props don't change on each render cycle.

### Column definition anatomy

You define columns as an array of objects passed to the `columns` prop. A column is one of two kinds:

- **Display columns** render cell data and require an `accessor` that maps the column to your data.
- **Group columns** do not render data themselves. They group child display columns under a shared header.

Both kinds share a common base. The tables below list every public field with its type and default. The "Required by API" column marks fields the component's type requires, meaning a type error if you omit them; all other fields are optional.

**Base fields (both display and group columns)**

| Field            | Type                                                                           | Required by API | Default  | Notes                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------ | --------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | `string`                                                                       | Yes             | —        | Uniquely identifies the column. The API always requires it, and it is never inferred from `accessor`.                                                          |
| `header`         | `string` or `() => ReactElement`                                               | No              | —        | A string renders a text header and is also used as the column's label. A function renders a custom header.                                                     |
| `label`          | `string`                                                                       | No              | —        | User-friendly name for column settings and `aria-label`. Only valid with a function `header`; not allowed when `header` is a string (the string is the label). |
| `cell`           | `string` or custom cell renderer                                               | No              | —        | Custom cell renderer for the column. See [Customize cell rendering](#customize-cell-rendering).                                                                |
| `alignment`      | `'left' \| 'center' \| 'right'`                                                | No              | —        | Text alignment inside the column's cells.                                                                                                                      |
| `disableSorting` | `boolean`                                                                      | No              | `false`  | Disables sorting for this column even when sorting is enabled globally. See [Enable sorting](#enable-sorting).                                                 |
| `sortType`       | `'text' \| 'number' \| 'textCaseSensitive' \| 'datetime'` or a custom function | No              | `'text'` | How two rows are compared when sorting.                                                                                                                        |
| `sortDescFirst`  | `boolean`                                                                      | No              | `false`  | Makes the first sort direction descending.                                                                                                                     |
| `sortInverted`   | `boolean`                                                                      | No              | `false`  | Inverts the underlying sort direction without changing the UI.                                                                                                 |
| `sortAccessor`   | `string` or `(row) => value`                                                   | No              | —        | Value used for sorting when it differs from the accessor value. See [Define sortAccessor](#define-sortaccessor).                                               |

**Display column fields (in addition to the base)**

| Field                 | Type                                                                                                        | Required by API | Default | Notes                                                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | --------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessor`            | `string`, `keyof TData`, or `(row) => value`                                                                | Yes             | —       | Maps the column to an entry in your data.                                                                                                      |
| `columnType`          | one of the predefined types                                                                                 | No              | —       | Renders and sorts the value by type. Pair with `config` or `formatter` depending on the type. See [Define column types](#define-column-types). |
| `config`              | per-type config object                                                                                      | No              | —       | Configuration for the chosen `columnType`.                                                                                                     |
| `formatter`           | per-type formatter options                                                                                  | No              | —       | Formatting options for the chosen `columnType`.                                                                                                |
| `thresholds`          | `DataTableColumnThreshold[]`                                                                                | No              | —       | Thresholds used for cell highlighting. See [Highlight cells](#highlight-cells).                                                                |
| `disableColumnHiding` | `boolean`                                                                                                   | No              | `false` | Prevents the column from being hidden via column actions or the toolbar. See [Add column visibility UI](#add-column-visibility-ui).            |
| `width`               | `number`, `` `${number}fr` ``, `'auto'`, `'content'`, or `{ type: 'auto' \| 'content'; maxWidth?: number }` | No              | —       | Preferred column width. See [Column sizing](#column-sizing).                                                                                   |
| `minWidth`            | `number`                                                                                                    | No              | —       | Absolute minimum width.                                                                                                                        |
| `maxWidth`            | `number`                                                                                                    | No              | —       | Absolute maximum width.                                                                                                                        |

**Group column fields (in addition to the base)**

| Field     | Type                            | Required by API | Default | Notes                                              |
| --------- | ------------------------------- | --------------- | ------- | -------------------------------------------------- |
| `width`   | `number` or `` `${number}fr` `` | No              | —       | Preferred or initial width of the group column.    |
| `columns` | array of display columns        | No              | —       | The child display columns contained in this group. |

Group columns inherit all base fields, including `header`/`label`, `cell`, `alignment`, and the sorting fields.

### Define column types

Prefer a `columnType` over a custom `cell` renderer. Assigning a `columnType` gives you correct rendering, formatting, sorting, and alignment for common data without writing any custom code. Reach for a custom `cell` only when no built-in type fits your data. See [Customize cell rendering](#customize-cell-rendering).

You can assign a predefined type to every column. Column values render and sort according to their type. Depending on the type, you refine the output through either a `config` object or a `formatter` option, never both for the same type (the exception is `text`, which accepts both). The table below lists each type, the value it expects in the cell, and how to configure it.

| `columnType`  | Expected cell value                                                       | Configure with                                                            | Notes                                                                                                                                                                                               |
| ------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`        | string                                                                    | `config` (`{ detectLinks }`) and `formatter` (number/unit format options) | Default rendering. URLs are detected and rendered as links unless `detectLinks` is `false`. Set `detectLinks: false` when cell values come from untrusted or user-controlled data.                  |
| `datetime`    | ISO 8601 string, epoch milliseconds (number or numeric string), or `Date` | `formatter` (`FormatDateOptions` or a display mode)                       | See [Format datetime values](#format-datetime-values) for coercion rules.                                                                                                                           |
| `number`      | number or numeric string                                                  | `formatter` (number/unit format options)                                  | Locale-aware numeric formatting.                                                                                                                                                                    |
| `long`        | number, bigint, or numeric string                                         | `formatter` (subset: locale, fraction and significant digits, grouping)   | For large integer values.                                                                                                                                                                           |
| `bit`         | number or numeric string                                                  | `formatter` (number/unit format options)                                  | Formats the value as an information size (bits and bytes).                                                                                                                                          |
| `currency`    | number or numeric string                                                  | `formatter` (`FormatterCurrencyOptions`)                                  | Renders without a currency symbol unless one is provided in the formatter.                                                                                                                          |
| `markdown`    | markdown string                                                           | `config` (`{ customComponentMappings }`)                                  | Override tag rendering with `customComponentMappings`.                                                                                                                                              |
| `log-content` | string                                                                    | `config` (`{ truncationLimit }`)                                          | Highlights and truncates at 1,000 characters by default. This limit can be changed with the `truncationLimit` property in the column config. Any trailing whitespaces are removed after truncation. |
| `sparkline`   | `Timeseries[]`                                                            | `config` (`DataTableSparklineColumnConfig`)                               | See [Sparkline chart](#sparkline-chart).                                                                                                                                                            |
| `meterbar`    | number, or multi-segment meter data                                       | `config` (`DataTableMeterbarColumnConfig`)                                | See [MeterBarChart](#meterbarchart).                                                                                                                                                                |
| `gantt`       | Gantt row data                                                            | `config` (`DataTableGanttColumnConfig`)                                   | See [Gantt chart](#gantt-chart).                                                                                                                                                                    |

Any config or formatter option you omit falls back to its documented default, so you only set the options you want to change.

**ColumnTypesFormatting**

```tsx
import { seed, randDomainName, randFloat, randPastDate } from '@ngneat/falso';
import { type PropsWithChildren, useMemo } from 'react';

import { type Components } from '@dynatrace/strato-components/core';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const ColumnTypesFormatting = () => {
  const getMarkdownByIndex = (index: number) => {
    switch (index) {
      case 0:
        return `**Ordered List**
1. Element 1
1. Element 2
1. Element 3`;
      case 1:
        return `**Unordered List**
* Element 1
* Element 2
* Element 3`;
      case 2:
        return `**Code Block**
\`\`\`
code block
\`\`\``;
      case 3:
        return "![placeholder image 150x150 px](https://dt-cdn.net/images/placeholder-150-150-79230043aa.png 'Placeholder Image')";
      case 4:
        return '## Custom markdown rendering';
      default:
        return '';
    }
  };

  const data = useMemo(
    () =>
      new Array(5).fill(0).map((el, index) => ({
        index,
        host: `host-${randDomainName()}`,
        traffic: randFloat({ min: 100, max: 1000000 }),
        price: randFloat({ min: 50, max: 950 }),
        memoryTotal: randFloat({ min: 1000, max: 1000000 }),
        timestamp: randPastDate(),
        markdown: getMarkdownByIndex(index),
        log: '2024-05-25 15:55:04.127 ERROR [QueryExecutionMonitor] [73c4146f-2285-41d4-8bf2-c0bbb645e824] {"notificationType":8,"notificationText":"Query: Unexpected error."}',
      })),
    [],
  );

  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    const customMappings: Components = {
      h2: ({ children }: PropsWithChildren) => (
        <i>
          <h2>{children}</h2>
        </i>
      ),
    };

    return [
      {
        header: 'Host',
        accessor: 'host',
        id: 'host',
        // highlight-next-line
        columnType: 'text',
        width: 'content',
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
        // highlight-next-line
        columnType: 'number',
        width: 'content',
      },
      {
        header: 'Price',
        accessor: 'price',
        id: 'price',
        // highlight-start
        columnType: 'currency',
        formatter: { currency: 'USD' },
        // highlight-end
        width: 'content',
      },
      {
        header: 'Memory Total',
        accessor: 'memoryTotal',
        id: 'memoryTotal',
        // highlight-next-line
        columnType: 'bit',
        width: 'content',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        // highlight-next-line
        columnType: 'datetime',
        width: 'content',
      },
      {
        header: 'Markdown',
        accessor: 'markdown',
        id: 'markdown',
        // highlight-next-line
        columnType: 'markdown',
        width: 220,
        config: { customComponentMappings: customMappings },
      },
      {
        header: 'Log',
        accessor: 'log',
        id: 'log',
        // highlight-next-line
        columnType: 'log-content',
        width: 350,
        config: { truncationLimit: 100 },
      },
    ];
  }, []);

  return (
    <DataTable
      columns={columns}
      data={data}
      variant={{ verticalDividers: true }}
    />
  );
};
```

#### Format datetime values

A `datetime` column coerces the cell value with `new Date(...)`, so you do not need to convert it yourself. It accepts:

- An ISO 8601 string, for example `'2024-01-15T09:30:00Z'`.
- Epoch milliseconds as a number, for example `1705311000000`.
- Epoch milliseconds as a numeric string, for example `'1705311000000'`.
- A `Date` instance.

> **Caution**
>
> A numeric string is always interpreted as epoch milliseconds, not as a calendar year. For example, `'2024'` renders as 2 seconds after the Unix epoch (1 January 1970), not the year 2024. Pass a full ISO 8601 string when you mean a calendar date.

To control how the value is displayed, pass a `formatter` (either `FormatDateOptions` or a display mode). The `datetime` type does not take a `config` object.

> **Note**
>
> Nanosecond precision is only supported when the input includes sub-second time information, such as `hh:mm:ss.sssssssss`. This typically includes the ISO 8601 strings with fractional seconds. In all other cases, the precision is limited to milliseconds due to the constraints of the JavaScript `Date` type.

> **Caution**
>
> The `date` column type is deprecated. Use `datetime` with `formatter: 'date'` instead.

### Column sizing

To set default column widths, use `defaultColumnSizing` as a `DataTable` prop. This property requires an object that maps column IDs to their respective widths in pixels.

**ColumnSizingUncontrolled**

```tsx
import {
  seed,
  randDomainName,
  randFloat,
  randBetweenDate,
  randNumber,
} from '@ngneat/falso';
import { useMemo } from 'react';

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
  memoryTotal: randNumber({ min: 20000000, max: 5000000000 }),
}));

const ColumnSizingUncontrolled = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        header: 'Host',
        accessor: 'host',
        id: 'host',
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
      },
      {
        header: 'Memory Total',
        accessor: 'memoryTotal',
        id: 'memoryTotal',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
      },
    ];
  }, []);

  return (
    <DataTable
      columns={columns}
      data={data}
      resizable
      // highlight-next-line
      defaultColumnSizing={{ host: 350, traffic: 350 }}
      variant={{ verticalDividers: true }}
    />
  );
};
```

### Control column sizing

To enable column resizing, set the `resizable` prop on the table.

Use `onColumnSizingChange` and `columnSizing` to track column widths. The callback receives the current widths of all columns. The example below resets the email column to 300px on resize.

> **Note**
>
> As soon as a resizing event starts, all columns with a fraction width or no defined width will be locked to their current width.

**ColumnResizing**

```tsx
import {
  seed,
  randDomainName,
  randFloat,
  randBetweenDate,
  randNumber,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { CodeSnippet } from '@dynatrace/strato-components/content';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { Paragraph } from '@dynatrace/strato-components/typography';

seed('1234');

const data = new Array(5).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
  memoryTotal: randNumber({ min: 20000000, max: 5000000000 }),
}));

const ColumnResizing = () => {
  const [resizedColumns, setResizedColumns] = useState({});
  const handleResize = (newColumnSizes: { [columnId: string]: number }) => {
    setResizedColumns({ ...newColumnSizes, email: 300 });
  };
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        header: 'Host',
        accessor: 'host',
        id: 'host',
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
      },
      {
        header: 'Memory Total',
        accessor: 'memoryTotal',
        id: 'memoryTotal',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
      },
    ];
  }, []);

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        // highlight-start
        resizable
        columnSizing={resizedColumns}
        onColumnSizingChange={handleResize}
        // highlight-end
        variant={{ verticalDividers: true }}
      />
      <div style={{ marginTop: 20 }}>
        <Paragraph>New column widths:</Paragraph>
        <CodeSnippet language="json">
          <CodeSnippet.ActionsMenu>
            <CodeSnippet.Copy />
          </CodeSnippet.ActionsMenu>
          {JSON.stringify(resizedColumns, null, 2)}
        </CodeSnippet>
      </div>
    </>
  );
};
```

### Control column width behavior

The `DataTable` lets you control column width behavior in different ways:

- Fixed width in pixels: You can set a fixed width for the column by specifying the exact number of pixels. For example, `width: 100` would set the column to 100 pixels wide.

- Minimum and maximum width constraints: You can specify `minWidth` and `maxWidth` in the exact number of pixels to set width boundaries for a column. `maxWidth` will not work on fraction widths, to avoid circular width calculations.

- Flexible width in fractions: You can set a flexible width for the column using a fractional unit. This is done by specifying the width as a fraction, like `width: '1fr'`. This approach allows the column to take up a proportion of the available space, adjusting dynamically based on the total space available and the fractional values assigned to other columns. For instance, if you have two columns and set their widths to `width: '1fr'` and `width: '2fr'`, the second column will be twice as wide as the first one.

- Fit to content: To make a column's width automatically adjust to fit the content of its cells, set the column's `width` property to `content`.

- Shared leftover space: If you want certain columns to share the leftover space among themselves set the option to a fraction value for those columns. See the example in [allow certain columns to occupy the remaining space](#allow-specific-columns-to-occupy-remaining-space).

- `auto` will hand over control about the column size to the browsers grid layout and follows the layout engine and specification of the browser. Reference [MDN grid documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns#auto) for details.

- You can also set a maximum width for the column when using either of the previous two options by configuring it like this: `{type: 'auto' | 'content', maxWidth: 100}`. Here, `maxWidth` specifies the maximum width in pixels.

**ColumnWidthsSizing**

```tsx
import {
  seed,
  randDomainName,
  randFloat,
  randBetweenDate,
  randNumber,
} from '@ngneat/falso';
import { useMemo } from 'react';

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
  memoryTotal: randNumber({ min: 200000000, max: 5000000000 }),
  price: randNumber({ min: 20, max: 150 }),
}));

const ColumnWidthsSizing = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        header: 'Host',
        id: 'host',
        accessor: 'host',
        // highlight-next-line
        width: 350,
      },
      {
        header: 'Traffic',
        id: 'traffic',
        accessor: 'traffic',
        // highlight-next-line
        width: 'content',
      },
      {
        id: 'memoryTotal',
        header: 'Memory Total',
        accessor: 'memoryTotal',
        columnType: 'bit',
        // highlight-next-line
        width: { type: 'auto', maxWidth: 100 },
      },
      {
        header: 'Timestamp',
        id: 'Timestamp',
        accessor: 'timestamp',
        columnType: 'datetime',
        // highlight-next-line
        width: 'auto',
      },
      {
        header: 'Price',
        id: 'price',
        accessor: 'price',
        // highlight-next-line
        width: '1fr',
      },
    ];
  }, []);

  return (
    <DataTable
      columns={columns}
      data={data}
      variant={{ verticalDividers: true }}
      fullWidth
    />
  );
};
```

#### Allow specific columns to occupy remaining space

Your `DataTable` may have columns that are more important than others. Between these columns, you can spread the remaining space within the table by providing a fraction width like `1fr` for the columns. In the example below the columns `Memory Total` and `Timestamp` occupy each one fraction of the remaining space, and the `Price` column takes up two fractions.

**ColumnWidthsSizingOccupyRemainingSpace**

```tsx
import {
  seed,
  randDomainName,
  randFloat,
  randBetweenDate,
  randNumber,
} from '@ngneat/falso';
import { useMemo } from 'react';

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
  memoryTotal: randNumber({ min: 200000000, max: 5000000000 }),
  price: randNumber({ min: 20, max: 150 }),
}));

const ColumnWidthsSizingOccupyRemainingSpace = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        header: 'Host',
        id: 'host',
        accessor: 'host',
        width: 350,
      },
      {
        header: 'Traffic',
        id: 'traffic',
        accessor: 'traffic',
        width: 'content',
      },
      {
        id: 'memoryTotal',
        header: 'Memory Total',
        accessor: 'memoryTotal',
        columnType: 'bit',
        // highlight-next-line
        width: '1fr',
      },
      {
        header: 'Timestamp',
        id: 'Timestamp',
        accessor: 'timestamp',
        columnType: 'datetime',
        // highlight-next-line
        width: '1fr',
      },
      {
        header: 'Price',
        id: 'price',
        accessor: 'price',
        // highlight-next-line
        width: '2fr',
      },
    ];
  }, []);

  return (
    <DataTable
      columns={columns}
      data={data}
      variant={{ verticalDividers: true }}
      fullWidth
    />
  );
};
```

### Accessors

Accessors specify how to retrieve column data from your data structure. Accessor strings that contain dots allow you to retrieve nested data. If the actual property key contains a dot, you can escape an accessor by enclosing the string in square brackets. It is also possible to specify an accessor function that returns the value you want to extract. See the code below for examples of each.

**Accessors**

```tsx
import { randDomainName, randNumber, randPastDate, seed } from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  index,
  'dt.data.host': `et-demo-${randDomainName()}`,
  'dt.data.memoryTotal': randNumber({ min: 5000000000, max: 10000000000 }),
  other: {
    sub: {
      timestamp: randPastDate(),
    },
  },
}));

const Accessors = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        id: 'host',
        header: 'Host (escaped)',
        // highlight-next-line
        accessor: "['dt.data.host']", // accessor with dots, escaped
      },
      {
        id: 'memory_total',
        header: 'Memory Total (function)',
        // highlight-next-line
        accessor: (value) => value['dt.data.memoryTotal'], // accessor function
        columnType: 'bit',
      },
      {
        id: 'timestamp',
        header: 'Timestamp (standard)',
        // highlight-next-line
        accessor: 'other.sub.timestamp', // standard usage of dots, not escaped, corresponding to data structure
        width: '1fr',
      },
    ],
    [],
  );

  return <DataTable data={data} columns={columns} />;
};
```

### Define header groups

It is possible to define header groups by providing a nested array of columns via the `columns` property in the column definition. Currently, a header group can only contain columns and not another nested header group.

**NestedHeader**

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

const sampleData = new Array(5).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300 }),
  memoryTotal: randNumber({ min: 2000000, max: 500000000 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
  price: randNumber({ min: 20, max: 150 }),
}));

const NestedHeader = () => {
  const columns = useMemo<DataTableColumnDef<(typeof sampleData)[number]>[]>(
    () => [
      {
        header: 'Host Information',
        id: 'hostInfo',
        accessor: 'hostInfo',
        // highlight-next-line
        columns: [
          {
            header: 'Host',
            accessor: 'host',
            id: 'host',
            minWidth: 150,
          },
          {
            header: 'Timestamp',
            accessor: 'timestamp',
            id: 'timestamp',
            minWidth: 200,
          },
        ],
      },
      {
        header: 'Performance Information',
        id: 'performanceInfo',
        accessor: 'performanceInfo',
        // highlight-next-line
        columns: [
          {
            header: 'Traffic',
            accessor: 'traffic',
            id: 'traffic',
          },
          {
            header: 'Memory Total',
            accessor: 'memoryTotal',
            id: 'memoryTotal',
          },
        ],
      },
    ],
    [],
  );

  return <DataTable columns={columns} data={sampleData} />;
};
```

### Customize column header

To customize the column header, simply use the `header` property within the column definition. Assign a function to this property that returns a customized JSX element.

You can also use the optional `label` property for accessibility and for elements such as column settings. If the `label` isn't defined, the column's `id` will be used as a fallback.

As with cells, to maintain the default header styling, you must wrap each return statement with the `DataTable.DefaultCell` element. The `DataTable.DefaultCell` also supports `className` and `style` props, allowing further customization of the header appearance.

> **Caution**
>
> Avoid placing interactive elements within a custom-rendered header if column actions are already configured for the same column. Since a column header with column actions already includes a button element, adding additional interactive elements inside may result in unexpected behavior.

**CustomHeaderRendering**

```tsx
import {
  seed,
  randNumber,
  randDomainName,
  randFloat,
  randBetweenDate,
} from '@ngneat/falso';
import { useMemo } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { ClockIcon, HostsIcon } from '@dynatrace/strato-icons';

seed('1234');

const data = new Array(5).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300, precision: 2 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
  price: randNumber({ min: 20, max: 150 }),
}));

const CustomHeaderRendering = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        // highlight-start
        header: () => (
          <DataTable.DefaultCell style={{ alignItems: 'center' }}>
            <HostsIcon size="small" /> &nbsp; Host
          </DataTable.DefaultCell>
        ),
        // highlight-end
        accessor: 'host',
        id: 'host',
        label: 'Host',
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
      },
      {
        // highlight-start
        header: () => (
          <DataTable.DefaultCell>
            <Button size="condensed" variant="accent">
              Calculate Price
            </Button>
          </DataTable.DefaultCell>
        ),
        // highlight-end
        accessor: 'price',
        id: 'price',
        label: 'Calculated Price',
      },
      {
        // highlight-start
        header: () => (
          <DataTable.DefaultCell style={{ alignItems: 'center' }}>
            <ClockIcon size="small" /> &nbsp; Timestamp
          </DataTable.DefaultCell>
        ),
        // highlight-end
        accessor: 'timestamp',
        id: 'timestamp',
        label: 'Timestamp',
      },
    ],
    [],
  );

  return <DataTable columns={columns} data={data} />;
};
```

### Add column visibility UI

The column visibility feature allows you to specify which columns should be visible and which should be hidden. By default, all columns are visible. To allow the user to show and hide columns, configure the corresponding UI elements in the table. Column visibility can be controlled through either the `DataTable.Toolbar` or the `DataTable.ColumnActions`.

Use the `DataTable.VisibilitySettings` component inside the toolbar, to render a trigger for the column settings and enable the visibility settings. To let users hide a column via the column actions, include the `TableActionsMenu.HideColumn` as a menu item.

To prevent a specific column from being hidden, set the `disableColumnHiding` prop to `true` in the column definition. For header groups, the group itself cannot be hidden if at least one of its child columns has `disableColumnHiding` prop set to `true`.

**ColumnVisibilityUI**

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
  TableActionsMenu,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const ColumnVisibilityUI = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
        disableColumnHiding: true,
        width: 200,
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
        width: 200,
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 200,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 200,
      },
    ],
    [],
  );

  return (
    <DataTable columns={columns} data={data} fullWidth>
      <DataTable.Toolbar>
        {/* highlight-next-line */}
        <DataTable.VisibilitySettings />
      </DataTable.Toolbar>
      <DataTable.ColumnActions>
        <TableActionsMenu>
          {/* highlight-next-line */}
          <TableActionsMenu.HideColumn />
        </TableActionsMenu>
      </DataTable.ColumnActions>
    </DataTable>
  );
};
```

### Use uncontrolled column visibility

This is the recommended default. Use `defaultColumnVisibility` to hide specific columns by default without giving users runtime control. Provide an object with column IDs as keys and boolean values indicating visibility (`true` = visible, `false` = hidden).

**ColumnVisibilityUncontrolled**

```tsx
import {
  seed,
  randUserName,
  randDomainName,
  randEmail,
  randPastDate,
} from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const ColumnVisibilityUncontrolled = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
        width: 250,
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
        width: 250,
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
      defaultColumnVisibility={{ domainName: false }}
    />
  );
};
```

### Use controlled column visibility

To control column visibility, use the `columnVisibility` prop to provide the visibility state, along with the `onColumnVisibilityChange` callback.

**ColumnVisibilityControlled**

```tsx
import {
  seed,
  randUserName,
  randDomainName,
  randEmail,
  randPastDate,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  TableActionsMenu,
  type DataTableColumnDef,
  type DataTableProps,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const ColumnVisibilityControlled = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
        width: 200,
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
        width: 200,
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 200,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 200,
      },
    ],
    [],
  );

  const [columnVisibility, setColumnVisibility] = useState<
    DataTableProps['columnVisibility']
  >({ age: false });
  const numberOfHiddenColumns = Object.keys(
    // oxlint-disable-next-line typescript/no-non-null-assertion
    columnVisibility!,
  ).length.toString();

  return (
    <Flex flexDirection="column" gap={4}>
      <Button onClick={() => setColumnVisibility({})} variant="emphasized">
        Show all columns ({numberOfHiddenColumns} hidden)
      </Button>
      <DataTable
        columns={columns}
        data={data}
        // highlight-start
        columnVisibility={columnVisibility}
        onColumnVisibilityChange={setColumnVisibility}
        // highlight-end
        fullWidth
      >
        <DataTable.ColumnActions>
          <TableActionsMenu>
            <TableActionsMenu.HideColumn />
          </TableActionsMenu>
        </DataTable.ColumnActions>
      </DataTable>
    </Flex>
  );
};
```

### Reset column visibility

Column visibility can be reset using the column settings overlay trigger in the toolbar. Use `resetColumnVisibility` on `DataTable.VisibilitySettings` to define a custom reset state. In uncontrolled mode, visibility resets to `defaultColumnVisibility` if present, or the original state. The reset button is disabled when the current state matches the default.

**ColumnVisibilityReset**

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
  type DataTableColumnVisibilityState,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const ColumnVisibilityReset = () => {
  const [columnVisibility, setColumnVisibility] =
    useState<DataTableColumnVisibilityState>({
      name: true,
      domainName: true,
      email: true,
      timestamp: true,
    }); // This is the state that will be used to control the visibility of the columns
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
        disableColumnHiding: true,
        width: 200,
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
        width: 200,
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 200,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 200,
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      columnVisibility={columnVisibility}
      onColumnVisibilityChange={setColumnVisibility}
      fullWidth
    >
      <DataTable.Toolbar>
        <DataTable.VisibilitySettings
          // highlight-start
          resetColumnVisibility={{
            name: true,
            domainName: true,
            timestamp: true,
            email: false,
          }}
          // highlight-end
        />
      </DataTable.Toolbar>
    </DataTable>
  );
};
```

### Limit number of visible columns

Use the `visibleColumnLimits` prop on `DataTable.VisibilitySettings` to warn or block users when too many columns are visible at once. Both thresholds are exclusive — a value of `2` means more than two visible columns triggers the message.

- **Warning threshold** — a non-blocking message appears in the column settings footer.
- **Error threshold** — a blocking error message appears and the "Apply" button is disabled until the user hides enough columns.

A minimum of one visible column is always enforced. Clicking "Apply" with zero columns selected shows an error and keeps the modal open.

**ColumnVisibilityLimits**

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
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const ColumnVisibilityLimits = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
        width: 200,
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
        width: 200,
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 200,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 200,
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      fullWidth
      defaultColumnVisibility={{ timestamp: false }}
    >
      <DataTable.Toolbar>
        <DataTable.VisibilitySettings
          // highlight-next-line
          visibleColumnLimits={{ maxWarning: 2, maxError: 3 }}
        />
      </DataTable.Toolbar>
    </DataTable>
  );
};
```

> **Note**
>
> Values less than 1 for either threshold are ignored. When both thresholds are configured, `maxWarning` must be strictly less than `maxError`; otherwise the warning threshold has no effect.

### Open column settings programmatically

You can open the column settings programmatically using the `openColumnSettings()` function. By default, the settings modal is opened with the same options (column visibility, column order and/or column pinning settings) as specified in the `DataTable.Toolbar`. However, you can override these options via the function's parameters. This is particularly useful if the `DataTable` is used without its built-in toolbar. To define a custom reset state, pass an object instead of `true` for the corresponding feature parameter.

**OpenColumnSettingsProgrammatically**

```tsx
import {
  randDomainName,
  randEmail,
  randPastDate,
  randUserName,
  seed,
} from '@ngneat/falso';
import { useMemo, useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
  type DataTableRef,
} from '@dynatrace/strato-components/tables';
import { OptionsIcon } from '@dynatrace/strato-icons';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const OpenColumnSettingsProgrammatically = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
        disableColumnHiding: true,
        width: 200,
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
        width: 200,
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 200,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 200,
      },
    ],
    [],
  );

  const tableRef = useRef<DataTableRef>(null);

  function openColumnSettingsModal() {
    // highlight-next-line
    tableRef.current?.openColumnSettings({
      columnVisibility: {
        resetColumnVisibility: {
          name: true,
          domainName: true,
          email: false,
          timestamp: true,
        },
      },
      columnOrder: false,
      columnPinning: true,
    });
  }

  return (
    <Flex flexDirection="column">
      <DataTable
        ref={tableRef}
        columns={columns}
        data={data}
        fullWidth
        columnOrdering
        columnPinning
      >
        <DataTable.Toolbar>
          <DataTable.ColumnOrderSettings />
        </DataTable.Toolbar>
      </DataTable>
      <Button
        onClick={openColumnSettingsModal}
        color="primary"
        variant="emphasized"
      >
        <Button.Prefix>
          <OptionsIcon />
        </Button.Prefix>
        Open column settings
      </Button>
    </Flex>
  );
};
```

### Enable column ordering

To enable column ordering, set the `columnOrdering` prop to `true`. When column ordering is enabled, column headers are draggable — hold down the mouse on a column header and release it at the destination to move it. This is also possible using touch (press, hold, scroll the table, and release).

In addition to drag and drop, the column order can be adjusted using corresponding UI elements in the table. Use the `DataTable.ColumnOrderSettings` component within the toolbar to render a trigger for the column settings and enable the column order settings. To allow users to move a column via the column actions, include the `TableActionsMenu.ColumnOrder` as a menu item.

**ColumnOrderUI**

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
  TableActionsMenu,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const ColumnOrderUI = () => {
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

  const [columnOrder, setColumnOrder] = useState([
    'domainName',
    'name',
    'timestamp',
    'email',
  ]);

  return (
    <DataTable
      columns={columns}
      data={data}
      columnOrder={columnOrder}
      onColumnOrderChange={setColumnOrder}
      columnOrdering
    >
      <DataTable.Toolbar>
        {/* highlight-start */}
        <DataTable.ColumnOrderSettings />
        {/* highlight-end */}
      </DataTable.Toolbar>
      <DataTable.ColumnActions>
        <TableActionsMenu>
          {/* highlight-start */}
          <TableActionsMenu.ColumnOrder />
          {/* highlight-end */}
        </TableActionsMenu>
      </DataTable.ColumnActions>
    </DataTable>
  );
};
```

### Use uncontrolled column order

This is the recommended default. Use `defaultColumnOrder` to define the initial column order as an array of all column IDs in the desired order. If you don't specify any order, the initial order is inferred from the column definition.

The defined column order should include all columns and ensure that child columns with the same parent are not separated. To avoid invalid configurations, the passed column order is validated and corrected if necessary. The following issues will be resolved:

- duplicate column IDs
- column IDs that don't exist in the column definition
- missing column IDs
- column IDs within the same group that are not adjacent

**ColumnOrderUncontrolled**

```tsx
import {
  seed,
  randUserName,
  randDomainName,
  randEmail,
  randPastDate,
} from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const ColumnOrderUncontrolled = () => {
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
      defaultColumnOrder={['domainName', 'name', 'timestamp', 'email']}
      columnOrdering
      // highlight-end
      sortable
    />
  );
};
```

### Use controlled column order

To control column order, use the `columnOrder` prop to provide the desired order, along with the `onColumnOrderChange` callback.

**ColumnOrderControlled**

```tsx
import {
  seed,
  randUserName,
  randDomainName,
  randEmail,
  randPastDate,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  TableActionsMenu,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map((el, index) => ({
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const ColumnOrderControlled = () => {
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

  const [columnOrder, setColumnOrder] = useState([
    'domainName',
    'name',
    'timestamp',
    'email',
  ]);

  return (
    <Flex flexDirection="column" gap={4}>
      <Button
        onClick={() =>
          setColumnOrder(['domainName', 'email', 'name', 'timestamp'])
        }
        variant="emphasized"
      >
        Order columns alphabetically
      </Button>
      <DataTable
        columns={columns}
        data={data}
        // highlight-start
        columnOrder={columnOrder}
        onColumnOrderChange={setColumnOrder}
        columnOrdering
        // highlight-end
      >
        <DataTable.ColumnActions>
          <TableActionsMenu>
            <TableActionsMenu.ColumnOrder />
          </TableActionsMenu>
        </DataTable.ColumnActions>
      </DataTable>
    </Flex>
  );
};
```

### Reset column order

Column order can be reset using the column settings overlay trigger in the toolbar. Use `resetColumnOrder` on `DataTable.ColumnOrderSettings` to define a custom reset state. In uncontrolled mode, order resets to `defaultColumnOrder` if present, or the original order. The reset button is disabled when the current state matches the default.

**ColumnOrderReset**

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
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const ColumnOrderReset = () => {
  const [columnOrder, setColumnOrder] = useState([
    'domainName',
    'name',
    'timestamp',
    'email',
  ]);

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
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      columnOrder={columnOrder}
      onColumnOrderChange={setColumnOrder}
      columnOrdering
    >
      <DataTable.Toolbar>
        <DataTable.ColumnOrderSettings
          // highlight-next-line
          resetColumnOrder={['domainName', 'name', 'email', 'timestamp']}
        />
      </DataTable.Toolbar>
    </DataTable>
  );
};
```

### Enable column pinning

Column pinning enables individual columns to remain pinned to the left or right edge of the table, improving visibility for important data. To enable column pinning, set the `columnPinning` prop to `true`.

> **Note: Default pinned columns**
>
> The built-in columns for [drag and drop row ordering](#configure-row-order), [row selection](#enable-row-selection), [expandable rows](#enable-expandable-rows), and [row actions](#configure-row-actions) are always pinned by default and cannot be unpinned, regardless of whether column pinning is enabled.

> **Note: Limitations**
>
> While [ordering](#enable-column-ordering) is supported for unpinned columns, pinned columns cannot be re-ordered.

To let users pin and unpin columns via the column actions menu, use `DataTable.ColumnActions` and include `TableActionsMenu.ColumnPinning` as a menu item. To render a trigger for the column settings and enable column pinning settings, use `DataTable.ColumnPinningSettings` inside `DataTable.Toolbar`.

**ColumnPinningUI**

```tsx
import {
  randBoolean,
  randCity,
  randDomainName,
  randEmail,
  randJobTitle,
  randPastDate,
  randRecentDate,
  randUserName,
  seed,
} from '@ngneat/falso';
import { useMemo } from 'react';

import { Menu } from '@dynatrace/strato-components/navigation';
import {
  DataTable,
  TableActionsMenu,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { EditIcon } from '@dynatrace/strato-icons';

seed('1234');

const data = new Array(5).fill(0).map((_, index) => ({
  index,
  user: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
  status: randBoolean() ? 'Active' : 'Inactive',
  role: randJobTitle(),
  location: randCity(),
  lastLogin: randRecentDate(),
}));

const ColumnPinningUI = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'User',
        accessor: 'user',
        id: 'user',
        width: 180,
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
        width: 200,
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 250,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 500,
      },
      {
        header: 'Status',
        accessor: 'status',
        id: 'status',
        width: 100,
      },
      {
        header: 'Role',
        accessor: 'role',
        id: 'role',
        width: 200,
      },
      {
        header: 'Location',
        accessor: 'location',
        id: 'location',
        width: 180,
      },
      {
        header: 'Last Login',
        accessor: 'lastLogin',
        id: 'lastLogin',
        width: 500,
      },
    ],
    [],
  );

  const defaultPinned = useMemo(
    () => ({
      left: ['user', 'email'],
      right: ['status'],
    }),
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      fullWidth
      selectableRows
      columnPinning
      defaultPinnedColumns={defaultPinned}
    >
      <DataTable.ColumnActions>
        <TableActionsMenu>
          {/* highlight-next-line */}
          <TableActionsMenu.ColumnPinning />
        </TableActionsMenu>
      </DataTable.ColumnActions>
      <DataTable.Toolbar>
        {/* highlight-next-line */}
        <DataTable.ColumnPinningSettings />
      </DataTable.Toolbar>
      <DataTable.RowActions>
        {(row) => (
          <Menu>
            <Menu.Content>
              <Menu.Item onSelect={() => console.log('Row', row)}>
                <Menu.Prefix>
                  <EditIcon />
                </Menu.Prefix>
                Edit item
              </Menu.Item>
            </Menu.Content>
          </Menu>
        )}
      </DataTable.RowActions>
    </DataTable>
  );
};
```

### Use uncontrolled column pinning

This is the recommended default. Use `defaultPinnedColumns` to define the initial pinned state. The object has two optional properties:

- `left`: An array of child column IDs to pin to the left side.
- `right`: An array of child column IDs to pin to the right side.

**ColumnPinningUncontrolled**

```tsx
import {
  randBoolean,
  randCity,
  randDomainName,
  randEmail,
  randJobTitle,
  randPastDate,
  randRecentDate,
  randUserName,
  seed,
} from '@ngneat/falso';
import { useMemo } from 'react';

import { Menu } from '@dynatrace/strato-components/navigation';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { EditIcon } from '@dynatrace/strato-icons';

seed('1234');

const data = new Array(5).fill(0).map((_, index) => ({
  index,
  user: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
  status: randBoolean() ? 'Active' : 'Inactive',
  role: randJobTitle(),
  location: randCity(),
  lastLogin: randRecentDate(),
}));

const ColumnPinningUncontrolled = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'User',
        accessor: 'user',
        id: 'user',
        width: 180,
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
        width: 200,
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 250,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 500,
      },
      {
        header: 'Status',
        accessor: 'status',
        id: 'status',
        width: 100,
      },
      {
        header: 'Role',
        accessor: 'role',
        id: 'role',
        width: 200,
      },
      {
        header: 'Location',
        accessor: 'location',
        id: 'location',
        width: 180,
      },
      {
        header: 'Last Login',
        accessor: 'lastLogin',
        id: 'lastLogin',
        width: 500,
      },
    ],
    [],
  );

  const defaultPinned = useMemo(
    () => ({
      left: ['user', 'email'],
      right: ['status'],
    }),
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      fullWidth
      selectableRows
      // highlight-start
      columnPinning
      defaultPinnedColumns={defaultPinned}
      // highlight-end
    >
      <DataTable.RowActions>
        {(row) => (
          <Menu>
            <Menu.Content>
              <Menu.Item onSelect={() => console.log('Row', row)}>
                <Menu.Prefix>
                  <EditIcon />
                </Menu.Prefix>
                Edit item
              </Menu.Item>
            </Menu.Content>
          </Menu>
        )}
      </DataTable.RowActions>
    </DataTable>
  );
};
```

### Use controlled column pinning

To control column pinning, use the `pinnedColumns` prop to specify which columns should be pinned to the left or right. Provide an `onPinnedColumnsChange` callback to handle updates.

**ColumnPinningControlled**

```tsx
import {
  randBoolean,
  randCity,
  randDomainName,
  randEmail,
  randJobTitle,
  randPastDate,
  randRecentDate,
  randUserName,
  seed,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Menu } from '@dynatrace/strato-components/navigation';
import {
  DataTable,
  TableActionsMenu,
  type DataTableColumnDef,
  type DataTablePinnedColumnState,
} from '@dynatrace/strato-components/tables';
import { EditIcon } from '@dynatrace/strato-icons';

seed('1234');

const data = new Array(5).fill(0).map((_, index) => ({
  index,
  user: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
  status: randBoolean() ? 'Active' : 'Inactive',
  role: randJobTitle(),
  location: randCity(),
  lastLogin: randRecentDate(),
}));

const ColumnPinningControlled = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'User',
        accessor: 'user',
        id: 'user',
        width: 180,
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
        width: 200,
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 250,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 500,
      },
      {
        header: 'Status',
        accessor: 'status',
        id: 'status',
        width: 100,
      },
      {
        header: 'Role',
        accessor: 'role',
        id: 'role',
        width: 200,
      },
      {
        header: 'Location',
        accessor: 'location',
        id: 'location',
        width: 180,
      },
      {
        header: 'Last Login',
        accessor: 'lastLogin',
        id: 'lastLogin',
        width: 500,
      },
    ],
    [],
  );

  const [pinnedColumns, setPinnedColumns] =
    useState<DataTablePinnedColumnState>(() => ({
      left: ['user', 'email'],
      right: ['status'],
    }));

  return (
    <Flex flexDirection="column" gap={4}>
      <Button
        onClick={() =>
          setPinnedColumns({
            left: ['domainName'],
            right: [],
          })
        }
        variant="emphasized"
      >
        Left pin Domain Name
      </Button>
      <DataTable
        columns={columns}
        data={data}
        fullWidth
        selectableRows
        // highlight-start
        columnPinning
        pinnedColumns={pinnedColumns}
        onPinnedColumnsChange={setPinnedColumns}
        // highlight-end
      >
        <DataTable.ColumnActions>
          <TableActionsMenu>
            <TableActionsMenu.ColumnPinning />
          </TableActionsMenu>
        </DataTable.ColumnActions>
        <DataTable.RowActions>
          {(row) => (
            <Menu>
              <Menu.Content>
                <Menu.Item onSelect={() => console.log('Row', row)}>
                  <Menu.Prefix>
                    <EditIcon />
                  </Menu.Prefix>
                  Edit item
                </Menu.Item>
              </Menu.Content>
            </Menu>
          )}
        </DataTable.RowActions>
      </DataTable>
    </Flex>
  );
};
```

### Customize the label of the column settings trigger

Adding the `DataTable.ColumnSettingsTrigger` component inside `DataTable.Toolbar` in combination with `DataTable.VisibilitySettings`, `DataTable.ColumnOrderSettings`, or `DataTable.ColumnPinningSettings` allows you to configure a custom text that will be displayed as the trigger label for the column settings.

**CustomColumnSettingsTrigger**

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
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const CustomColumnSettingsTrigger = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
        disableColumnHiding: true,
        width: 200,
      },
      {
        header: 'Domain Name',
        accessor: 'domainName',
        id: 'domainName',
        width: 200,
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 200,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 200,
      },
    ],
    [],
  );

  return (
    <DataTable columns={columns} data={data} columnOrdering fullWidth>
      <DataTable.Toolbar>
        {/* highlight-start */}
        <DataTable.ColumnSettingsTrigger>
          {({ hiddenColumnCount, totalColumnCount, defaultLabel }) =>
            hiddenColumnCount === 0
              ? 'Open column settings'
              : `${hiddenColumnCount} out of ${totalColumnCount} columns hidden`
          }
        </DataTable.ColumnSettingsTrigger>
        {/* highlight-end */}
        <DataTable.VisibilitySettings />
        <DataTable.ColumnOrderSettings />
      </DataTable.Toolbar>
    </DataTable>
  );
};
```
