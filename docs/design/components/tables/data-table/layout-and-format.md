## Layout and format

### Customize visual representation

The `variant` prop allows you to customize the appearance of the `DataTable` by setting the configuration options available in `DataTableProps['variant']`.

#### Row density

The `rowDensity` option adds spacing around the content within a row. By default, `rowDensity` is set to `default`, which represents a medium spacing. If the option is set to `condensed`, the spacing becomes minimal while `comfortable` represents the maximum spacing.

**VisualConfigurationRowDensity**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { ToggleButtonGroup } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const VisualConfigurationRowDensity = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        id: 'host',
        header: 'Host',
        accessor: 'host',
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

  const [rowDensity, setRowDensity] = useState('default');

  const rowDensityValue = useMemo(
    () => rowDensity as 'default' | 'condensed' | 'comfortable',
    [rowDensity],
  );

  return (
    <Flex gap={8} flexDirection="column">
      <Flex justifyContent="start">
        <ToggleButtonGroup value={rowDensity} onChange={setRowDensity}>
          <ToggleButtonGroup.Item value="default">
            Default
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="condensed">
            Condensed
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="comfortable">
            Comfortable
          </ToggleButtonGroup.Item>
        </ToggleButtonGroup>
      </Flex>
      <DataTable
        columns={columns}
        data={data}
        variant={{
          // highlight-next-line
          rowDensity: rowDensityValue,
          rowSeparation: 'zebraStripes',
          verticalDividers: true,
          contained: true,
        }}
      />
    </Flex>
  );
};
```

#### Row separation

The `rowSeparation` option determines how rows should be separated visually. By default, `rowSeparation` is set to `horizontalDividers` which adds lines between the rows. `zebraStripes` additionally provides alternate row coloring. By setting `rowSeparation` to `none`, the rows are not separated visually.

**VisualConfigurationRowSeparation**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { ToggleButtonGroup } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const VisualConfigurationRowSeparation = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        id: 'host',
        header: 'Host',
        accessor: 'host',
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

  const [rowSeparation, setRowSeparation] = useState('horizontalDividers');

  const rowSeparationValue = useMemo(
    () => rowSeparation as 'none' | 'horizontalDividers' | 'zebraStripes',
    [rowSeparation],
  );

  return (
    <Flex gap={8} flexDirection="column">
      <Flex justifyContent="start">
        <ToggleButtonGroup value={rowSeparation} onChange={setRowSeparation}>
          <ToggleButtonGroup.Item value="horizontalDividers">
            Horizontal Dividers
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="zebraStripes">
            Zebra Stripes
          </ToggleButtonGroup.Item>
          <ToggleButtonGroup.Item value="none">None</ToggleButtonGroup.Item>
        </ToggleButtonGroup>
      </Flex>
      <DataTable
        columns={columns}
        data={data}
        variant={{
          rowDensity: 'default',
          // highlight-next-line
          rowSeparation: rowSeparationValue,
          verticalDividers: true,
          contained: true,
        }}
      />
    </Flex>
  );
};
```

#### Vertical dividers

The `verticalDividers` option determines whether columns should be separated visually. By default, `false` is set which does not separate the columns within a `DataTable`. If `verticalDividers` is set to `true`, lines are added between the columns.

**VisualConfigurationVerticalDividers**

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

const VisualConfigurationVerticalDividers = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        id: 'host',
        header: 'Host',
        accessor: 'host',
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

  const [verticalDividers, setVerticalDividers] = useState<boolean>(true);

  return (
    <Flex gap={8} flexDirection="column">
      <Button
        onClick={() => setVerticalDividers((prev) => !prev)}
        variant="emphasized"
      >
        Vertical dividers toggle
      </Button>
      <DataTable
        columns={columns}
        data={data}
        variant={{
          rowDensity: 'default',
          rowSeparation: 'zebraStripes',
          // highlight-next-line
          verticalDividers,
          contained: true,
        }}
      />
    </Flex>
  );
};
```

#### Borders

The `contained` option provides a border for the `DataTable`. By default, `contained` is set to `true` to display the border. If `false` is set, no border is added.

**VisualConfigurationContained**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
  seed,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const VisualConfigurationContained = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        id: 'host',
        header: 'Host',
        accessor: 'host',
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

  const [contained, setContained] = useState<boolean>(true);

  return (
    <Flex gap={8} flexDirection="column">
      <Button
        onClick={() => setContained((prev) => !prev)}
        variant="emphasized"
      >
        Contained toggle
      </Button>
      <DataTable
        columns={columns}
        data={data}
        variant={{
          rowDensity: 'default',
          rowSeparation: 'zebraStripes',
          verticalDividers: true,
          // highlight-next-line
          contained,
        }}
      />
    </Flex>
  );
};
```

#### Hide header

You can customize the `DataTable`'s appearance to hide the entire header, by setting `headers: 'hidden'`.

If you choose to hide the header, please note that the ability to sort columns by header, as well as any actions that could be triggered with column headers, won't be available.

**HiddenHeader**

```tsx
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const sampleData = [
  {
    host: 'et-demo-2-win4',
    traffic: 213.4,
    memoryTotal: 5830000000,
    timestamp: '2022-09-26T12:45:07Z',
  },
  {
    host: 'et-demo-2-win3',
    traffic: 374,
    memoryTotal: 3520000000,
    timestamp: '2022-09-27T14:10:02Z',
  },
  {
    host: 'et-demo-2-win1',
    traffic: 625,
    memoryTotal: 4670000000,
    timestamp: '2022-09-27T13:10:02Z',
  },
  {
    host: 'et-demo-2-win8',
    traffic: 98.7,
    memoryTotal: 5820000000,
    timestamp: '2022-09-28T11:29:10Z',
  },
  {
    host: 'dev-demo-5-macOS',
    traffic: 164.6,
    memoryTotal: 3460000000,
    timestamp: '2022-09-28T10:22:56Z',
  },
];

const HiddenHeader = () => {
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
      },
      {
        id: 'memoryTotal',
        header: 'Memory Total',
        accessor: 'memoryTotal',
        columnType: 'number',
      },
      {
        id: 'timestamp',
        header: 'Timestamp',
        accessor: 'timestamp',
        columnType: 'datetime',
      },
    ],
    [],
  );
  const data = useMemo(() => sampleData, []);

  return (
    <DataTable
      columns={columns}
      data={data}
      // highlight-next-line
      variant={{ headers: 'hidden' }}
      fullWidth
    />
  );
};
```

#### Vertical alignment

Use the `verticalAlignment` option to configure the vertical alignment of the cell content. The alignment options are `top`, `center`, and `bottom`. It is also possible to configure the vertical alignment for header and body cells separately. By default, all cell content is top-aligned.

**VerticalAlignment**

```tsx
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const data = [
  {
    host: 'et-demo-set',
    timestamp: '2022-09-26T12:45:07Z',
    traffic: 213.4,
    content:
      'Created environment configuration for extension: com.dynatrace.extension.disk-devices',
  },
  {
    host: 'et-demo-fugit.name',
    timestamp: '2022-09-27T14:53:02Z',
    traffic: 374,
    content:
      'Successfully stored assets in version 1.0.1 for extension com.dynatrace.extension.disk-devices',
  },
  {
    host: 'et-demo-tenetur.dev',
    timestamp: '2022-09-27T13:10:24Z',
    traffic: 625,
    content: 'Failed to assign monitoring configuration to ActiveGate',
  },
  {
    host: 'et-demo-numquam.name',
    timestamp: '2022-09-28T11:29:10Z',
    traffic: 98.7,
    content: 'FSUtil.ProcessUtil - process started successfully',
  },
  {
    host: 'et-demo-consequatur.biz',
    timestamp: '2022-09-26T13:07:17Z',
    traffic: 303,
    content:
      'Monitoring configuration requires ActiveGate version 1.230.0 or later that supports data source prometheus.',
  },
];

const VerticalAlignment = () => {
  const columns = useMemo<DataTableColumnDef<unknown>[]>(
    () => [
      {
        header: 'Host information',
        id: 'host information',
        columns: [
          {
            id: 'host',
            header: 'Host',
            accessor: 'host',
          },
          {
            id: 'timestamp',
            header: 'Timestamp',
            accessor: 'timestamp',
            columnType: 'datetime',
          },
        ],
      },
      {
        id: 'traffic',
        header: 'Traffic',
        accessor: 'traffic',
      },
      {
        id: 'content',
        header: 'content',
        accessor: 'content',
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      lineWrap={true}
      // highlight-next-line
      variant={{ verticalAlignment: { header: 'bottom', body: 'center' } }}
      fullWidth
    />
  );
};
```

### Enable full width

By default, `DataTable` expands to its parent's full width, but this breaks inside a flex container. Add the `fullWidth` prop to restore full-width behavior.

When this value is not set, it will grow as needed based on the number of columns and their width.

**FullWidthEnabled**

```tsx
import {
  seed,
  randNumber,
  randDomainName,
  randFloat,
  randBetweenDate,
} from '@ngneat/falso';
import { useMemo } from 'react';

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

const FullWidthEnabled = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Host',
        accessor: 'host',
        id: 'host',
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
        alignment: 'right',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        alignment: 'left',
      },
    ],
    [],
  );

  return (
    <Flex>
      <DataTable
        columns={columns}
        data={data}
        variant={{ verticalDividers: true }}
        // highlight-next-line
        fullWidth
      />
    </Flex>
  );
};
```

### Enable full height

By default, the `DataTable` grows as needed based on the number of rows. When placed inside a container, the table's height can be the same as its parent or smaller depending on how many rows would be visible inside the parent container. If you wish to ensure that the table always occupies the full height of its parent element, you can include the `fullHeight` prop when using the `DataTable` component.

> **Note**
>
> Keep in mind that the `fullHeight` prop should be applied carefully. Setting `fullHeight` on the table that is placed inside a container that takes up the height of the page can lead to serious performance issues. It is therefore advisable to use the prop in combination with a well-defined container height.

**FullHeightEnabled**

```tsx
import {
  seed,
  randNumber,
  randDomainName,
  randFloat,
  randBetweenDate,
} from '@ngneat/falso';
import { useMemo } from 'react';

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

const FullHeightEnabled = () => {
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

  return (
    <Flex minHeight={50} height={300}>
      <DataTable
        columns={columns}
        data={data}
        // highlight-next-line
        fullHeight
      />
    </Flex>
  );
};
```

### Fonts

The `DataTable` allows for the customization of font styles across the entire table or within individual columns. This can be achieved by configuring it in the table variant options or the column definition.

**FontStyle**

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

const data = new Array(5).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
  memoryTotal: randNumber({ min: 2000000, max: 500000000 }),
}));

const FontStyle = () => {
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
        columnType: 'bit',
      },
      {
        id: 'Timestamp',
        header: 'Timestamp',
        accessor: 'timestamp',
      },
    ];
  }, []);

  return (
    <DataTable
      columns={columns}
      data={data}
      // highlight-next-line
      variant={{ fontStyle: 'code' }}
    />
  );
};
```

### Text alignment

If no column type is set, text within the cell is left-aligned by default. To explicitly change the default alignment, use the `alignment` property in the column definition.

**ColumnAlignment**

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

const data = new Array(5).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300, precision: 2 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
  price: randNumber({ min: 20, max: 150 }),
}));

const ColumnAlignment = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Host',
        accessor: 'host',
        id: 'host',
        // highlight-next-line
        alignment: 'left',
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
        // highlight-next-line
        alignment: 'right',
      },
      {
        header: 'Price',
        accessor: 'price',
        id: 'price',
        // highlight-next-line
        alignment: 'center',
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
      variant={{ verticalDividers: true }}
    />
  );
};
```

### Enable line wrap

Use `defaultLineWrap` to set the initial line wrap state without managing it yourself. This is the recommended default. Pass `true` to wrap all columns, or pass an object with column IDs as keys to enable or disable wrapping per column.

To enable line wrapping in the UI, add `DataTable.LineWrap` to the toolbar for toggling line wrap across all columns, and `TableActionsMenu.LineWrap` to the column actions menu for toggling line wrap on individual columns.

> **Note**
>
> `DataTable` uses column virtualization to optimize performance. With line wrap enabled, row heights might change while scrolling horizontally as wrapped content becomes visible.

**LineWrapUncontrolled**

```tsx
import { useMemo } from 'react';

import {
  DataTable,
  TableActionsMenu,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const LineWrapUncontrolled = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        id: 'Host',
        header: 'Host',
        accessor: 'host',
        enableLineWrap: false,
      },
      {
        id: 'Traffic',
        header: 'Traffic',
        accessor: 'traffic',
      },
      {
        id: 'Content',
        header: 'Content',
        accessor: 'content',
      },
      {
        id: 'Timestamp',
        header: 'Timestamp',
        accessor: 'timestamp',
      },
    ];
  }, []);

  const data = useMemo(
    () => [
      {
        host: 'et-demo-2-win3',
        traffic: 213.4,
        memoryTotal: 5830000000,
        timestamp: '2022-09-26T12:45:07Z',
        content:
          'Created environment configuration for extension: com.dynatrace.extension.disk-devices',
      },
      {
        host: 'docker-host2',
        traffic: 374,
        memoryTotal: 3520000000,
        timestamp: '2022-09-27T14:10:02Z',
        content:
          'Successfully stored assets in version 1.0.1 for extension com.dynatrace.extension.disk-devices',
      },
      {
        host: 'et-demo-2-win1',
        traffic: 625,
        memoryTotal: 4670000000,
        timestamp: '2022-09-27T13:10:02Z',
        content:
          'Failed to assign monitoring configuration to ActiveGate. Reason: The monitoring configuration requires ActiveGate version 1.230.0 or later that supports data source prometheus and belongs to group "default"',
      },
      {
        host: 'et-demo-2-win8',
        traffic: 98.7,
        memoryTotal: 5820000000,
        timestamp: '2022-09-28T11:29:10Z',
        content:
          'Failed to assign monitoring configuration to ActiveGate. Reason: The monitoring configuration requires ActiveGate version 1.230.0 or later that supports data source prometheus and belongs to group "default"',
      },
      {
        host: 'kyber-host6-id-4444-demo-32009-docker-limit-329292',
        traffic: 164.6,
        memoryTotal: 3460000000,
        timestamp: '2022-09-28T10:22:56Z',
        content:
          '2022-09-28 13:29:08,819 [6] DEBUG FSDiscovery.FSAgentUtil - DODeltaScan started',
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      // highlight-next-line
      defaultLineWrap={true}
    >
      <DataTable.ColumnActions>
        <TableActionsMenu>
          {/* highlight-next-line */}
          <TableActionsMenu.LineWrap />
        </TableActionsMenu>
      </DataTable.ColumnActions>
      <DataTable.Toolbar>
        {/* highlight-next-line */}
        <DataTable.LineWrap />
      </DataTable.Toolbar>
    </DataTable>
  );
};
```

#### Control line wrap

Use `lineWrap` and `onLineWrapChange` when you need to read or drive the line wrap state from outside the table, for example, to persist it or sync it with other UI.

**LineWrapControlled**

```tsx
import { useMemo, useState } from 'react';

import {
  DataTable,
  TableActionsMenu,
  type DataTableColumnDef,
  type DataTableLineWrapState,
} from '@dynatrace/strato-components/tables';

const LineWrapControlled = () => {
  // highlight-next-line
  const [lineWrap, setLineWrap] = useState<DataTableLineWrapState>(false);

  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        id: 'Host',
        header: 'Host',
        accessor: 'host',
        enableLineWrap: false,
      },
      {
        id: 'Traffic',
        header: 'Traffic',
        accessor: 'traffic',
      },
      {
        id: 'Content',
        header: 'Content',
        accessor: 'content',
      },
      {
        id: 'Timestamp',
        header: 'Timestamp',
        accessor: 'timestamp',
      },
    ];
  }, []);

  const data = useMemo(
    () => [
      {
        host: 'et-demo-2-win3',
        traffic: 213.4,
        memoryTotal: 5830000000,
        timestamp: '2022-09-26T12:45:07Z',
        content:
          'Created environment configuration for extension: com.dynatrace.extension.disk-devices',
      },
      {
        host: 'docker-host2',
        traffic: 374,
        memoryTotal: 3520000000,
        timestamp: '2022-09-27T14:10:02Z',
        content:
          'Successfully stored assets in version 1.0.1 for extension com.dynatrace.extension.disk-devices',
      },
      {
        host: 'et-demo-2-win1',
        traffic: 625,
        memoryTotal: 4670000000,
        timestamp: '2022-09-27T13:10:02Z',
        content:
          'Failed to assign monitoring configuration to ActiveGate. Reason: The monitoring configuration requires ActiveGate version 1.230.0 or later that supports data source prometheus and belongs to group "default"',
      },
      {
        host: 'et-demo-2-win8',
        traffic: 98.7,
        memoryTotal: 5820000000,
        timestamp: '2022-09-28T11:29:10Z',
        content:
          'Failed to assign monitoring configuration to ActiveGate. Reason: The monitoring configuration requires ActiveGate version 1.230.0 or later that supports data source prometheus and belongs to group "default"',
      },
      {
        host: 'kyber-host6-id-4444-demo-32009-docker-limit-329292',
        traffic: 164.6,
        memoryTotal: 3460000000,
        timestamp: '2022-09-28T10:22:56Z',
        content:
          '2022-09-28 13:29:08,819 [6] DEBUG FSDiscovery.FSAgentUtil - DODeltaScan started',
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      // highlight-start
      lineWrap={lineWrap}
      onLineWrapChange={setLineWrap}
      // highlight-end
    >
      <DataTable.ColumnActions>
        <TableActionsMenu>
          <TableActionsMenu.LineWrap />
        </TableActionsMenu>
      </DataTable.ColumnActions>
      <DataTable.Toolbar>
        <DataTable.LineWrap />
      </DataTable.Toolbar>
    </DataTable>
  );
};
```

### Export configuration

The `DataTable`'s configuration can be exported at any time for various purposes, such as sharing the configuration with other applications [through an intent](https://developer.dynatrace.com/develop/guides/navigation/intents/send-intents.md). The current configuration can be retrieved by creating and assigning a `ref` to the corresponding `ref` property of the `DataTable`, and then calling `ref.getConfig()` function.

> **Note**
>
> When the `getConfig` function is invoked, a snapshot of the serialized configuration is returned. As such, it will not change if the `DataTable`'s configuration is subsequently modified. It is recommended to ensure that you apply all your required configurations to the `DataTable` before calling this function.

**ConfigExport**

```tsx
import { useMemo, useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
  type DataTableRef,
} from '@dynatrace/strato-components/tables';
import { Heading } from '@dynatrace/strato-components/typography';

const sampleColumns: DataTableColumnDef<unknown>[] = [
  {
    id: 'host',
    header: 'Host',
    accessor: 'host',
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
const sampleData = [
  {
    host: 'et-demo-2-win4',
    traffic: 213.4,
    memoryTotal: 5830000000,
    timestamp: '2022-09-26T12:45:07Z',
    price: 290,
  },
  {
    host: 'et-demo-2-win3',
    traffic: 374,
    memoryTotal: 3520000000,
    timestamp: '2022-09-27T14:10:02Z',
    price: 324,
  },
  {
    host: 'et-demo-2-win1',
    traffic: 625,
    memoryTotal: 4670000000,
    timestamp: '2022-09-27T13:10:02Z',
    price: 343,
  },
  {
    host: 'et-demo-2-win8',
    traffic: 98.7,
    memoryTotal: 5820000000,
    timestamp: '2022-09-28T11:29:10Z',
    price: 289,
  },
  {
    host: 'dev-demo-5-macOS',
    traffic: 164.6,
    memoryTotal: 3460000000,
    timestamp: '2022-09-28T10:22:56Z',
    price: 193,
  },
];

const ConfigViewer = ({ serializedConfig }: { serializedConfig: string }) => {
  return (
    serializedConfig && (
      <>
        <Heading level={5}>Output config:</Heading>
        <pre>{serializedConfig}</pre>
      </>
    )
  );
};

const ConfigExport = () => {
  const dataTableRef = useRef<DataTableRef>(null);
  const [dataTableConfig, setDataTableConfig] = useState<string>('');
  function handleShowConfig() {
    const config = dataTableRef.current?.getConfig();
    const toString =
      typeof config === 'string' ? config : JSON.stringify(config, null, 2);
    setDataTableConfig(toString);
  }
  function handleHideConfig() {
    setDataTableConfig('');
  }
  const columns = useMemo<DataTableColumnDef<unknown>[]>(
    () => sampleColumns,
    [],
  );
  const data = useMemo(() => sampleData, []);

  return (
    <Flex gap={8} flexDirection="column">
      {dataTableConfig ? (
        <Button onClick={handleHideConfig} variant="emphasized">
          Hide table config
        </Button>
      ) : (
        <Button onClick={handleShowConfig} variant="emphasized">
          Show table config
        </Button>
      )}
      <Flex>
        <DataTable
          // highlight-next-line
          ref={dataTableRef}
          columns={columns}
          data={data}
          variant={{
            rowDensity: 'default',
            contained: true,
            rowSeparation: 'horizontalDividers',
            verticalDividers: false,
          }}
          fullWidth
        />
      </Flex>
      <ConfigViewer serializedConfig={dataTableConfig} />
    </Flex>
  );
};
```

### Import configuration

The configuration provider for the `DataTable` accepts a JSON object and also accepts a `string` as input for importing a serialized configuration. When a string is provided, it is internally parsed and applied as the `DataTable` configuration.

> **Note**
>
> If the configuration provided does not match the properties of the `DataTable` configuration, any unknown properties will be ignored. Additionally, if required properties are not provided, or the given config is invalid, default values will be applied.

> **Note**
>
> We do not support dynamically changing default values, as doing so goes against their intended purpose. Therefore, changing the values of `defaultPageSize` or `defaultPageIndex` in the configuration for pagination will not update the corresponding props in the `DataTable`. If you need to set default values, it is recommended to ensure that you always do that before importing the configuration.

> **Note**
>
> Due to potential version mismatches in `DataTable` packages used in different applications, importing a configuration from another application may produce an unintended outcome and not result in a perfect match.

**ConfigImport**

```tsx
import { useMemo, useState } from 'react';

import { TextArea } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  DataTableConfigProvider,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const sampleColumns: DataTableColumnDef<unknown>[] = [
  {
    id: 'host',
    header: 'Host',
    accessor: 'host',
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

const sampleDataLong = [
  {
    host: 'et-demo-2-win4',
    traffic: 213.4,
    memoryTotal: 5830000000,
    timestamp: '2022-09-26T12:45:07Z',
  },
  {
    host: 'et-demo-2-win3',
    traffic: 374,
    memoryTotal: 3520000000,
    timestamp: '2022-09-27T14:10:12Z',
  },
  {
    host: 'et-demo-2-win1',
    traffic: 625,
    memoryTotal: 4670000000,
    timestamp: '2022-09-27T13:10:36Z',
  },
  {
    host: 'et-demo-2-win8',
    traffic: 98.7,
    memoryTotal: 5820000000,
    timestamp: '2022-09-28T11:29:04Z',
  },
  {
    host: 'dev-demo-5-macOS',
    traffic: 164.6,
    memoryTotal: 3460000000,
    timestamp: '2022-09-28T10:22:56Z',
  },
  {
    host: 'docker-host2',
    traffic: 286,
    memoryTotal: 4290000000,
    timestamp: '2022-09-29T16:09:21Z',
  },
  {
    host: 'et-demo-1-win1',
    traffic: 105.6,
    memoryTotal: 6150000000,
    timestamp: '2022-09-29T15:48:38Z',
  },
  {
    host: 'et-demo-2-win5',
    traffic: 179,
    memoryTotal: 3230000000,
    timestamp: '2022-09-25T10:24:17Z',
  },
  {
    host: 'dev-demo-3-macOS',
    traffic: 245.7,
    memoryTotal: 5760000000,
    timestamp: '2022-09-25T12:44:29Z',
  },
  {
    host: 'dev-demo-1-macOS',
    traffic: 305,
    memoryTotal: 3550000000,
    timestamp: '2022-09-26T13:42:16Z',
  },
  {
    host: 'et-demo-3-win5',
    traffic: 229,
    memoryTotal: 4450000000,
    timestamp: '2022-09-27T11:48:18Z',
  },
  {
    host: 'dev-demo-3-macOS',
    traffic: 135.2,
    memoryTotal: 56360000000,
    timestamp: '2022-09-22T14:34:21Z',
  },
  {
    host: 'dev-demo-2-macOS',
    traffic: 367,
    memoryTotal: 3820000000,
    timestamp: '2022-09-26T16:37:11Z',
  },
  {
    host: 'docker-host-4',
    traffic: 249,
    memoryTotal: 4260000000,
    timestamp: '2022-09-28T17:19:21Z',
  },
  {
    host: 'docker-host-3',
    traffic: 132.4,
    memoryTotal: 5680000000,
    timestamp: '2022-09-25T15:28:28Z',
  },
];

const DATATABLE_IMPORT_CONFIG_STRING = `{
  "pagination": {"defaultPageIndex": 1, "defaultPageSize": 10},
  "columnVisibility": {},
  "fullWidth": false,
  "lineWrap": false,
  "resizable": false,
  "selectableRows": true,
  "sortable": false,
  "variant": {
    "rowDensity": "default",
    "contained": true,
    "rowSeparation": "horizontalDividers",
    "verticalDividers": false
  }
}`;

const ConfigImport = () => {
  const [serializedConfig, setSerializedConfig] = useState<string>(
    DATATABLE_IMPORT_CONFIG_STRING,
  );
  const dataTableConfigChange = (changedConfig: string) => {
    setSerializedConfig(changedConfig);
  };
  const columns = useMemo<DataTableColumnDef<unknown>[]>(
    () => sampleColumns,
    [],
  );
  const data = useMemo(() => sampleDataLong, []);

  return (
    <Flex gap={8} flexDirection="column">
      <TextArea
        cols={20}
        rows={10}
        value={serializedConfig}
        onChange={dataTableConfigChange}
      />
      <Flex>
        {/* highlight-start */}
        <DataTableConfigProvider value={serializedConfig}>
          <DataTable columns={columns} data={data} fullWidth />
        </DataTableConfigProvider>
        {/* highlight-end */}
      </Flex>
    </Flex>
  );
};
```
