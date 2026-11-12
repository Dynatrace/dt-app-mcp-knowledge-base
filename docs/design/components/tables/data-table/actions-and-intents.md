## Actions and intents

### Configure column actions

The column actions are represented by a button in a column header that opens a drop-down menu. Within the menu, you can include various functionalities allowing end users to perform actions related to the columns.

The drop-down menu also appears on right-click, providing additional access to defined cell or column actions. This feature adds a layer of functionality, allowing users to access more options directly from the table.

To configure column actions you need to define the `DataTable.ColumnActions` slot component.

The `DataTable.ColumnActions` slot accepts its content in two forms. You can pass a `TableActionsMenu` directly as children when the actions are the same regardless of the column. Alternatively, you can pass a function that receives the current column's details and returns a `TableActionsMenu`; use the function form when the actions depend on the column, for example to derive column-specific labels or handlers. In either case, the `TableActionsMenu` defines the user actions for the column and should include the `TableActionsMenu.Item` slot component to represent a single action item.

This is similar to the `TableActionsMenu.Link` component, which renders a defined link element as a menu action item. You can assign an `onSelect` event as a property of this component. This will execute the specified action upon user interaction.

Additionally, you can use the `TableActionsMenu.Prefix` slot to place an icon on the left side of the action item, while the `TableActionsMenu.Suffix` slot lets you place an icon on the right.

For cross-app navigation, the `TableActionsMenu.Intent` slot component can be used to define an intent item. See the section [Configure intents](#configure-intents) to learn more.

Use the predefined `TableActionsMenu.CopyItem` slot component to let users copy column values to the clipboard. To group items semantically within the menu, use `TableActionsMenu.Group` and `TableActionsMenu.Label`. See the [documentation](https://developer.dynatrace.com/design/components/navigation/Menu.md) for more information about grouping items in menus.

The user action menu supports multi-level menus, allowing you to configure sub-menus using the slots `TableActionsMenu.SubMenu`, `TableActionsMenu.SubContent`, and `TableActionsMenu.SubTrigger`.

To configure actions for a particular column, its ID must be provided to the `column` property. Omit the `DataTable.ColumnActions` column ID to make default actions apply to any columns without explicitly configured column actions.

**ColumnActions**

```tsx
import { useMemo } from 'react';

import {
  DataTable,
  TableActionsMenu,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { ActionIcon } from '@dynatrace/strato-icons';

const ColumnActions = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Content',
        accessor: 'content',
        id: 'content',
        width: 400,
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
        width: 'content',
      },
      {
        header: 'Memory Total',
        accessor: 'memoryTotal',
        id: 'memoryTotal',
        width: 'content',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 'content',
      },
    ],
    [],
  );
  const data = useMemo(
    () => [
      {
        content:
          'Created environment configuration for extension: com.dynatrace.extension.disk-devices',
        traffic: 213.4,
        memoryTotal: 5830000000,
        timestamp: '2022-09-26T12:45:07Z',
      },
      {
        content:
          'Successfully stored assets in version 1.0.1 for extension com.dynatrace.extension.disk-devices',
        traffic: 374,
        memoryTotal: 3520000000,
        timestamp: '2022-09-27T14:53:02Z',
      },
      {
        content: 'Failed to assign monitoring configuration to ActiveGate',
        traffic: 625,
        memoryTotal: 4670000000,
        timestamp: '2022-09-27T13:10:24Z',
      },
      {
        content: 'FSUtil.ProcessUtil - process started successfully',
        traffic: 98.7,
        memoryTotal: 5040000000,
        timestamp: '2022-09-28T11:29:10Z',
      },
      {
        content: 'FSUtil.ProcessUtil - process started successfully',
        traffic: 258.4,
        memoryTotal: 6000000000,
        timestamp: '2022-09-25T12:45:09Z',
      },
      {
        content:
          'Monitoring configuration requires ActiveGate version 1.230.0 or later that supports data source prometheus.',
        traffic: 303,
        memoryTotal: 3280000000,
        timestamp: '2022-09-26T13:07:17Z',
      },
    ],
    [],
  );

  return (
    <DataTable columns={columns} data={data} sortable fullWidth columnOrdering>
      {/* highlight-start */}
      <DataTable.ColumnActions>
        {(column) => (
          <TableActionsMenu>
            <TableActionsMenu.Group>
              <TableActionsMenu.CopyItem
                onSelect={() => {
                  console.log('Copied value to clipboard.');
                }}
                value={column.id}
              />
            </TableActionsMenu.Group>
            <TableActionsMenu.Item
              onSelect={() => {
                /* trigger custom action */
              }}
            >
              <TableActionsMenu.Prefix>
                <ActionIcon />
              </TableActionsMenu.Prefix>
              Custom Action
            </TableActionsMenu.Item>
            <TableActionsMenu.Group>
              <TableActionsMenu.Label aria-label="sub-actions">
                Sub-Actions
              </TableActionsMenu.Label>
              <TableActionsMenu.Item
                onSelect={() => {
                  console.log('sub-action 1');
                }}
              >
                Action 1
                <TableActionsMenu.Suffix>
                  <ActionIcon />
                </TableActionsMenu.Suffix>
              </TableActionsMenu.Item>
              <TableActionsMenu.Item
                onSelect={() => {
                  console.log('sub-action 2');
                }}
              >
                Action 2
              </TableActionsMenu.Item>
            </TableActionsMenu.Group>
            <TableActionsMenu.ColumnOrder
              onSelect={() => console.log('Column ordering selected.')}
            />
            <TableActionsMenu.LineWrap
              onSelect={() => console.log('Toggled line-wrap')}
            />
            <TableActionsMenu.HideColumn
              onSelect={() => console.log('Column hiding selected.')}
            />
          </TableActionsMenu>
        )}
      </DataTable.ColumnActions>
      {/* highlight-end */}
    </DataTable>
  );
};
```

### Configure row actions

Configuring row actions in a `DataTable` involves adding an action column to the far right of the table. This column should contain buttons, menus, or links that allow users to perform actions specific to each row.

To set up row actions in the table you need to locate `DataTable.RowActions` slot component as a `DataTable` child. This component takes a function that receives the current row’s data as well as some meta information about the tables layout as its parameters. This allows you to access and manipulate the data for that specific row. The function needs to return a `ReactNode` that defines the user actions for the row. Most likely you want to add some primary actions as buttons and secondary actions into a menu.

**RowActionsBasic**

```tsx
import { useMemo } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Menu } from '@dynatrace/strato-components/navigation';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { EditIcon } from '@dynatrace/strato-icons';

const RowActionsBasic = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      { accessor: 'cpu', id: 'cpu', header: 'CPU' },
      { accessor: 'gpu', id: 'gpu', header: 'GPU' },
    ],
    [],
  );
  const data = useMemo(
    () => [
      { cpu: 'Intel Core i5-12600K', gpu: 'GeForce RTX 4090' },
      { cpu: 'AMD Ryzen 5 7600', gpu: 'Radeon RX 7900 XTX' },
      { cpu: 'AMD Ryzen 5 5500', gpu: 'GeForce RTX 4070 Ti' },
      { cpu: 'Intel Core i9-13900K', gpu: 'Radeon RX 7900 XT' },
      { cpu: 'AMD Ryzen 7 5700X', gpu: 'GeForce RTX 4070' },
      { cpu: 'Intel Core i7-13700K', gpu: 'Radeon RX 6800 XT' },
      { cpu: 'AMD Ryzen 9 7900', gpu: 'Intel Arc A750' },
      { cpu: 'Intel Core i5-10400', gpu: 'Radeon RX 6600' },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      variant={{ verticalDividers: true }}
      fullWidth
    >
      {/* highlight-start */}
      <DataTable.RowActions>
        {(row, { rowDensity }) => (
          <>
            <Button
              size={rowDensity !== 'comfortable' ? rowDensity : 'default'}
              color="primary"
            >
              Primary action
            </Button>

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
          </>
        )}
      </DataTable.RowActions>
      {/* highlight-end */}
    </DataTable>
  );
};
```

### Configure selected row actions

The `DataTable.SelectedRowsActions` component provides an additional slot where you can perform actions simultaneously on one or more selected rows. Actions passed to this slot are placed right above the table header and are shown only when at least one row is selected. If table actions exist, they are hidden when the selected rows actions menu is active.

**SelectedRowsActions**

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
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { DeleteIcon } from '@dynatrace/strato-icons';

seed('1234');

const sampleData = new Array(5).fill(0).map((el, index) => ({
  index,
  name: randUserName(),
  domainName: randDomainName(),
  email: randEmail(),
  timestamp: randPastDate(),
}));

const SelectedRowsActions = () => {
  const [data, setData] = useState(sampleData);
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});

  const handleDeleteRow = (
    rows: {
      rowId: string;
      originalRow: (typeof data)[number];
    }[],
  ) => {
    const newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      for (let j = 0; j < rows.length; j++) {
        if (newData[i].name === rows[j].originalRow.name) {
          newData.splice(i, 1);
        }
      }
    }
    setData(newData);

    setSelectedRows({});
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
      selectableRows
      selectedRows={selectedRows}
      onRowSelectionChange={setSelectedRows}
    >
      {/* highlight-start */}
      <DataTable.SelectedRowsActions>
        {(
          rows: {
            rowId: string;
            originalRow: (typeof data)[number];
          }[],
        ) => {
          return (
            <>
              <DataTable.SelectionChip />
              <Button onClick={() => handleDeleteRow(rows)}>
                <Button.Prefix>
                  <DeleteIcon />
                </Button.Prefix>
                Delete Row{rows.length > 1 ? 's' : ''}
              </Button>
            </>
          );
        }}
      </DataTable.SelectedRowsActions>
      {/* highlight-end */}
      <DataTable.Toolbar>
        <DataTable.VisibilitySettings />
      </DataTable.Toolbar>
      <DataTable.Pagination />
    </DataTable>
  );
};
```

### Configure cell actions

The cell actions are represented by a button in a table cell that opens a drop-down menu. Within the menu, you can include various functionalities allowing end users to perform actions related to the cells.

The cells within the `DataTable` allow custom interactive elements, allowing you to include links or other actionable elements within cells with cell actions defined.

To configure cell actions you must define the `DataTable.CellActions` slot component. There's a function within the `DataTable.CellActions` tag that returns a `TableActionsMenu` object that defines the user actions for the cell. It should also include the `TableActionsMenu.Item` slot component to represent a single action item, similar to the `TableActionsMenu.Link` component, which renders a defined link element as a menu action item.

You can assign an `onSelect` event as a property of this component to execute the specified action upon user interaction. Additionally, the `TableActionsMenu.Prefix` and `TableActionsMenu.Suffix` properties can be applied to the item to add an icon on the left or right side of the action trigger element.

For cross-app navigation, the `TableActionsMenu.Intent` slot component can be used to define an intent item. See the section [Configure intents](#configure-intents) to learn more.

To enable users to copy cell values to the clipboard, use the predefined `TableActionsMenu.CopyItem` slot component.

To group items semantically within the menu, use `TableActionsMenu.Group` and `TableActionsMenu.Label`. For more information about menu groups and labels, refer to the [documentation](https://developer.dynatrace.com/design/components/navigation/Menu.md). The user action menu supports multi-level menus, allowing you to configure sub-menus using the slots `TableActionsMenu.SubMenu`, `TableActionsMenu.SubContent`, and `TableActionsMenu.SubTrigger`.

To assign actions to cells in a specific column, you must specify the unique identifier (ID) of the column. This ID is used as the value for the `column` property within the `DataTable.CellActions` configuration. It tells the `DataTable` which column to associate the actions with. Omit the column ID to have default actions apply to any columns without explicitly configured actions.

**CellActions**

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
  TableActionsMenu,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { ActionIcon, LinkIcon } from '@dynatrace/strato-icons';

const data = new Array(5).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300, precision: 2 }),
  memoryTotal: randNumber({ min: 2_000_000, max: 50_000_000 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
}));

const CellActions = () => {
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
      },
      {
        header: 'Memory Total',
        accessor: 'memoryTotal',
        id: 'memoryTotal',
        columnType: 'bit',
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
    <DataTable columns={columns} data={data}>
      {/* highlight-start */}
      <DataTable.CellActions>
        {({ cellValue }) => (
          <TableActionsMenu>
            <TableActionsMenu.CopyItem
              onSelect={() => {
                console.log('Copied value to clipboard.');
              }}
              value={(cellValue as string) ?? 'Value not available.'}
            />
          </TableActionsMenu>
        )}
      </DataTable.CellActions>
      {/* highlight-end */}
      <DataTable.CellActions column={(id) => id !== 'host'}>
        <TableActionsMenu>
          <TableActionsMenu.Item
            onSelect={() => {
              /* trigger custom action */
              console.log('Selected global cell action');
            }}
          >
            <TableActionsMenu.Prefix>
              <ActionIcon />
            </TableActionsMenu.Prefix>
            Custom Action
          </TableActionsMenu.Item>
          <TableActionsMenu.Group>
            <TableActionsMenu.Label aria-label="sub-actions">
              Sub-Actions
            </TableActionsMenu.Label>
            <TableActionsMenu.Item
              onSelect={() => {
                console.log('sub-action 1');
              }}
            >
              Action 1
            </TableActionsMenu.Item>
            <TableActionsMenu.Item
              onSelect={() => {
                console.log('sub-action 2');
              }}
            >
              Action 2
              <TableActionsMenu.Suffix>
                <ActionIcon />
              </TableActionsMenu.Suffix>
            </TableActionsMenu.Item>
          </TableActionsMenu.Group>
        </TableActionsMenu>
      </DataTable.CellActions>
      <DataTable.CellActions column="host">
        {({ rowId }) => (
          <TableActionsMenu>
            <TableActionsMenu.Item
              onSelect={() => {
                /* trigger custom action */
                console.log(
                  `Selected cell action for host column in row ${rowId}`,
                );
              }}
            >
              <TableActionsMenu.Prefix>
                <LinkIcon />
              </TableActionsMenu.Prefix>
              Navigate to host
            </TableActionsMenu.Item>
          </TableActionsMenu>
        )}
      </DataTable.CellActions>
    </DataTable>
  );
};
```

### Configure table actions

The `DataTable.TableActions` component provides an additional slot where you can place custom actions that affect the entire table. Actions passed to this slot are placed right above the table header.

**TableActions**

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

const TableActions = () => {
  const [zebraStripes, setZebraStripes] = useState(false);
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
      variant={{
        rowSeparation: zebraStripes ? 'zebraStripes' : 'horizontalDividers',
      }}
    >
      {/* highlight-start */}
      <DataTable.TableActions>
        <Button
          onClick={() => setZebraStripes(!zebraStripes)}
          variant="emphasized"
        >
          {zebraStripes ? 'Disable' : 'Enable'} Zebra Stripes
        </Button>
      </DataTable.TableActions>
      {/* highlight-end */}
    </DataTable>
  );
};
```

### Download data

The `DataTable.Toolbar` has an item `DownloadData` which enables the downloading of the table data. Depending on your table configuration, you can choose between downloading all data, downloading the current page and only downloading the selected rows. Only visible columns are included when downloading data. To exclude specific columns, provide an array of column IDs to the `excludeColumns` prop in the `DownloadData` slot of the toolbar.

> **Note**
>
> Columns with `sparkline` column type are always excluded from the downloaded data, as sparkline visualizations cannot be meaningfully represented in CSV format.

> **Note**
>
> CSV data is generated in the browser. For very large tables (with many rows or large cell content), exporting all rows may slow down the browser or even cause it to crash. In such cases, prefer exporting only individual pages or selected rows.

If the table has [sub-rows](#provide-sub-rows), an additional column `index` is added to the downloaded table data, indicating the row's indentation level. For example, the first row has index `1`, its first sub-row has index `1.1` and so on. Sub-rows are included in the downloaded table data regardless of whether they are currently open or closed. When downloading the current page, all sub-rows of the rows on that page are included, even if some sub-rows are actually rendered on following pages.

When downloading, double quotes are escaped and if the text has commas, new lines, double quotes, tabs or carriage returns, the entire line is enclosed in double quotes. In addition, values starting with `=`, `+`, `-`, `@`, `\t` and `\r` are escaped with a single quote to mitigate CSV injection. Also note that if you have custom cells you can provide a `toString` function on the data object for customized download output.

The `DataTable.DownloadData` slot also provides the `onDownloadData` callback that fires once data has been downloaded. The callback's `subset` parameter indicates whether all data, the current page, or the selected rows were downloaded. The `excludedColumns` parameter indicates which specified columns were excluded from the download.

Use the `fileName` prop on `DataTable.DownloadData` to control the name of the downloaded file. Pass a static string for a fixed name, or a callback that receives the downloaded subset (`'all'`, `'page'`, or `'selected'`) and returns the name which is useful for embedding the subset or a live timestamp in the file name. If `fileName` is omitted, the file falls back to `table-data.csv`. A missing `.csv` extension is appended automatically, and invalid characters (anything other than letters, digits, `-`, and `_`) are stripped.

> **Note**
>
> Firefox may ignore the file name and fall back to `table-data.csv`. The download still succeeds in all cases.

**DownloadData**

```tsx
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const sampleDataLong = [
  {
    host: 'et-demo-2-win4',
    traffic: 213.4,
    memoryTotal: 5830000000,
    timestamp: '2022-09-26T12:45:07Z',
    datacenter: 'DT-1',
  },
  {
    host: 'et-demo-2-win3',
    traffic: 374,
    memoryTotal: 3520000000,
    timestamp: '2022-09-27T14:10:12Z',
    datacenter: 'DT-2',
  },
  {
    host: 'et-demo-2-win1',
    traffic: 625,
    memoryTotal: 4670000000,
    timestamp: '2022-09-27T13:10:36Z',
    datacenter: 'DT-1',
  },
  {
    host: 'et-demo-2-win8',
    traffic: 98.7,
    memoryTotal: 5820000000,
    timestamp: '2022-09-28T11:29:04Z',
    datacenter: 'DT-3',
  },
  {
    host: 'dev-demo-5-macOS',
    traffic: 164.6,
    memoryTotal: 3460000000,
    timestamp: '2022-09-28T10:22:56Z',
    datacenter: 'DT-2',
  },
  {
    host: 'docker-host2',
    traffic: 286,
    memoryTotal: 4290000000,
    timestamp: '2022-09-29T16:09:21Z',
    datacenter: 'DT-3',
  },
  {
    host: 'et-demo-1-win1',
    traffic: 105.6,
    memoryTotal: 6150000000,
    timestamp: '2022-09-29T15:48:38Z',
    datacenter: 'DT-1',
  },
  {
    host: 'et-demo-2-win5',
    traffic: 179,
    memoryTotal: 3230000000,
    timestamp: '2022-09-25T10:24:17Z',
    datacenter: 'DT-2',
  },
  {
    host: 'dev-demo-3-macOS',
    traffic: 245.7,
    memoryTotal: 5760000000,
    timestamp: '2022-09-25T12:44:29Z',
    datacenter: 'DT-1',
  },
  {
    host: 'dev-demo-1-macOS',
    traffic: 305,
    memoryTotal: 3550000000,
    timestamp: '2022-09-26T13:42:16Z',
    datacenter: 'DT-3',
  },
  {
    host: 'et-demo-3-win5',
    traffic: 229,
    memoryTotal: 4450000000,
    timestamp: '2022-09-27T11:48:18Z',
    datacenter: 'DT-2',
  },
  {
    host: 'dev-demo-3-macOS',
    traffic: 135.2,
    memoryTotal: 56360000000,
    timestamp: '2022-09-22T14:34:21Z',
    datacenter: 'DT-1',
  },
  {
    host: 'dev-demo-2-macOS',
    traffic: 367,
    memoryTotal: 3820000000,
    timestamp: '2022-09-26T16:37:11Z',
    datacenter: 'DT-3',
  },
  {
    host: 'docker-host-4',
    traffic: 249,
    memoryTotal: 4260000000,
    timestamp: '2022-09-28T17:19:21Z',
    datacenter: 'DT-2',
  },
  {
    host: 'docker-host-3',
    traffic: 132.4,
    memoryTotal: 5680000000,
    timestamp: '2022-09-25T15:28:28Z',
    datacenter: 'DT-1',
  },
];

const DownloadData = () => {
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
      {
        header: 'Datacenter',
        accessor: 'datacenter',
        id: 'datacenter',
      },
    ],
    [],
  );
  const data = useMemo(() => sampleDataLong, []);

  return (
    <DataTable columns={columns} data={data} selectableRows fullWidth>
      <DataTable.Toolbar>
        {/* highlight-start */}
        <DataTable.DownloadData
          fileName={(subset) => `hosts-${subset}.csv`}
          excludeColumns={['datacenter']}
          onDownloadData={(subset, excludedColumns) =>
            console.log(
              `Downloaded ${subset} data. Excluded columns: ${JSON.stringify(
                excludedColumns,
              )}`,
            )
          }
        />
        {/* highlight-end */}
      </DataTable.Toolbar>

      <DataTable.Pagination />
    </DataTable>
  );
};
```

The preferred way is to use the toolbar item as above, but if you have some good reason not to use the toolbar you can create your own download trigger which programmatically calls `DataTableRef.downloadData()` with one of the parameters `'all'`, `'page'`, or `'selected'`. You can exclude specific columns by providing an array of column IDs to the `excludeColumns` parameter, and set the file name via the fourth argument which is always a plain string, resolved independently of any `fileName` set on the `DataTable.DownloadData` slot.

**DownloadDataProgrammatically**

```tsx
import { useMemo, useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
  type DataTableRef,
} from '@dynatrace/strato-components/tables';
import { DownloadIcon } from '@dynatrace/strato-icons';

const sampleDataLong = [
  {
    host: 'et-demo-2-win4',
    traffic: 213.4,
    memoryTotal: 5830000000,
    timestamp: '2022-09-26T12:45:07Z',
    datacenter: 'DT-1',
  },
  {
    host: 'et-demo-2-win3',
    traffic: 374,
    memoryTotal: 3520000000,
    timestamp: '2022-09-27T14:10:12Z',
    datacenter: 'DT-2',
  },
  {
    host: 'et-demo-2-win1',
    traffic: 625,
    memoryTotal: 4670000000,
    timestamp: '2022-09-27T13:10:36Z',
    datacenter: 'DT-1',
  },
  {
    host: 'et-demo-2-win8',
    traffic: 98.7,
    memoryTotal: 5820000000,
    timestamp: '2022-09-28T11:29:04Z',
    datacenter: 'DT-3',
  },
  {
    host: 'dev-demo-5-macOS',
    traffic: 164.6,
    memoryTotal: 3460000000,
    timestamp: '2022-09-28T10:22:56Z',
    datacenter: 'DT-2',
  },
  {
    host: 'docker-host2',
    traffic: 286,
    memoryTotal: 4290000000,
    timestamp: '2022-09-29T16:09:21Z',
    datacenter: 'DT-3',
  },
  {
    host: 'et-demo-1-win1',
    traffic: 105.6,
    memoryTotal: 6150000000,
    timestamp: '2022-09-29T15:48:38Z',
    datacenter: 'DT-1',
  },
  {
    host: 'et-demo-2-win5',
    traffic: 179,
    memoryTotal: 3230000000,
    timestamp: '2022-09-25T10:24:17Z',
    datacenter: 'DT-2',
  },
  {
    host: 'dev-demo-3-macOS',
    traffic: 245.7,
    memoryTotal: 5760000000,
    timestamp: '2022-09-25T12:44:29Z',
    datacenter: 'DT-1',
  },
  {
    host: 'dev-demo-1-macOS',
    traffic: 305,
    memoryTotal: 3550000000,
    timestamp: '2022-09-26T13:42:16Z',
    datacenter: 'DT-3',
  },
  {
    host: 'et-demo-3-win5',
    traffic: 229,
    memoryTotal: 4450000000,
    timestamp: '2022-09-27T11:48:18Z',
    datacenter: 'DT-2',
  },
  {
    host: 'dev-demo-3-macOS',
    traffic: 135.2,
    memoryTotal: 56360000000,
    timestamp: '2022-09-22T14:34:21Z',
    datacenter: 'DT-1',
  },
  {
    host: 'dev-demo-2-macOS',
    traffic: 367,
    memoryTotal: 3820000000,
    timestamp: '2022-09-26T16:37:11Z',
    datacenter: 'DT-3',
  },
  {
    host: 'docker-host-4',
    traffic: 249,
    memoryTotal: 4260000000,
    timestamp: '2022-09-28T17:19:21Z',
    datacenter: 'DT-2',
  },
  {
    host: 'docker-host-3',
    traffic: 132.4,
    memoryTotal: 5680000000,
    timestamp: '2022-09-25T15:28:28Z',
    datacenter: 'DT-1',
  },
];

const DownloadDataProgrammatically = () => {
  const dataTableRef = useRef<DataTableRef>(null);
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
      {
        header: 'Datacenter',
        accessor: 'datacenter',
        id: 'datacenter',
      },
    ],
    [],
  );
  const data = useMemo(() => sampleDataLong, []);
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});

  return (
    <Flex flexDirection="column">
      <Flex gap={16} flexDirection="row">
        <Button
          variant="emphasized"
          onClick={() => {
            if (dataTableRef.current) {
              // highlight-next-line
              dataTableRef.current.downloadData(
                'all',
                ['datacenter'],
                undefined,
                'hosts-all.csv',
              );
            }
          }}
        >
          <Button.Prefix>
            <DownloadIcon />
          </Button.Prefix>
          Download all as CSV
        </Button>
        <Button
          variant="emphasized"
          onClick={() => {
            if (dataTableRef.current) {
              dataTableRef.current.downloadData(
                'page',
                ['datacenter'],
                undefined,
                'hosts-page.csv',
              );
            }
          }}
        >
          <Button.Prefix>
            <DownloadIcon />
          </Button.Prefix>
          Download page as CSV
        </Button>
        <Button
          disabled={Object.keys(selectedRows).length === 0}
          variant="emphasized"
          onClick={() => {
            if (dataTableRef.current) {
              dataTableRef.current.downloadData(
                'selected',
                ['datacenter'],
                undefined,
                'hosts-selected.csv',
              );
            }
          }}
        >
          <Button.Prefix>
            <DownloadIcon />
          </Button.Prefix>
          Download selected as CSV
        </Button>
      </Flex>
      <Flex>
        <DataTable
          ref={dataTableRef}
          columns={columns}
          data={data}
          selectableRows
          fullWidth
          selectedRows={selectedRows}
          onRowSelectionChange={setSelectedRows}
        >
          <DataTable.Pagination />
        </DataTable>
      </Flex>
    </Flex>
  );
};
```

### Override CSV header names

Use the `formatDownloadHeader` prop on `DataTable.DownloadData`, or pass it as the third argument to `DataTableRef.downloadData()`, to rename column headers in the downloaded CSV. The callback fires once per visible leaf column and receives a context object with three fields:

- `columnId` — the stable column identifier from the column definition.
- `leafHeader` — the leaf column's resolved header string (falls back to the column's `id` when the `header` is a function or undefined).
- `groupHeader` — the parent group column's resolved header string, or `undefined` for top-level columns (falls back to the group column's `id` when the group `header` is a function or undefined).

Return a string to use as the CSV header, or return `undefined` to keep the default header for that column. The default header for a top-level column is its `header` string (or `id` if undefined); for a nested column it is the dot-joined path, e.g. `Group.Column`.

**OverrideDownloadHeaders**

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
    datacenter: 'DT-1',
  },
  {
    host: 'et-demo-2-win3',
    traffic: 374,
    memoryTotal: 3520000000,
    timestamp: '2022-09-27T14:10:12Z',
    datacenter: 'DT-2',
  },
  {
    host: 'et-demo-2-win1',
    traffic: 625,
    memoryTotal: 4670000000,
    timestamp: '2022-09-27T13:10:36Z',
    datacenter: 'DT-1',
  },
  {
    host: 'et-demo-2-win8',
    traffic: 98.7,
    memoryTotal: 5820000000,
    timestamp: '2022-09-28T11:29:04Z',
    datacenter: 'DT-3',
  },
  {
    host: 'dev-demo-5-macOS',
    traffic: 164.6,
    memoryTotal: 3460000000,
    timestamp: '2022-09-28T10:22:56Z',
    datacenter: 'DT-2',
  },
  {
    host: 'docker-host2',
    traffic: 286,
    memoryTotal: 4290000000,
    timestamp: '2022-09-29T16:09:21Z',
    datacenter: 'DT-3',
  },
  {
    host: 'et-demo-1-win1',
    traffic: 105.6,
    memoryTotal: 6150000000,
    timestamp: '2022-09-29T15:48:38Z',
    datacenter: 'DT-1',
  },
  {
    host: 'et-demo-2-win5',
    traffic: 179,
    memoryTotal: 3230000000,
    timestamp: '2022-09-25T10:24:17Z',
    datacenter: 'DT-2',
  },
  {
    host: 'dev-demo-3-macOS',
    traffic: 245.7,
    memoryTotal: 5760000000,
    timestamp: '2022-09-25T12:44:29Z',
    datacenter: 'DT-1',
  },
  {
    host: 'dev-demo-1-macOS',
    traffic: 305,
    memoryTotal: 3550000000,
    timestamp: '2022-09-26T13:42:16Z',
    datacenter: 'DT-3',
  },
];

const OverrideDownloadHeaders = () => {
  const columns = useMemo<DataTableColumnDef<(typeof sampleData)[number]>[]>(
    () => [
      { header: 'Host', accessor: 'host', id: 'host' },
      { header: 'Traffic', accessor: 'traffic', id: 'traffic' },
      { header: 'Memory Total', accessor: 'memoryTotal', id: 'memoryTotal' },
      { header: 'Timestamp', accessor: 'timestamp', id: 'timestamp' },
      { header: 'Datacenter', accessor: 'datacenter', id: 'datacenter' },
    ],
    [],
  );
  const data = useMemo(() => sampleData, []);

  return (
    <DataTable columns={columns} data={data} fullWidth>
      <DataTable.Toolbar>
        {/* highlight-start */}
        <DataTable.DownloadData
          formatDownloadHeader={({ columnId }) => {
            switch (columnId) {
              case 'host':
                return 'Hostname';
              case 'memoryTotal':
                return 'Total Memory (bytes)';
            }
          }}
        />
        {/* highlight-end */}
      </DataTable.Toolbar>
    </DataTable>
  );
};
```

### Enable sorting

By using the `sortable` flag, you can enable sorting for the entire table. Additionally, you have the option to disable sorting on a per-column basis by configuring the `disableSorting` property in the column definition. For [meterbar columns](#meterbarchart), sorting is disabled by default and can be enabled explicitly by setting `disableSorting` to `false`. Please note that sorting is not supported for [MultiMeterBarChart](#multimeterbarchart).

By default, the first sorting direction is ascending. If you want to change that, you can configure the `sortDescFirst` flag for the individual column. There is also a possibility to invert the sorting logic. Setting `sortInverted` to `true` means the underlying sorting direction will be inverted, but the UI will not change. This could be useful, for example, when a lower score is better. Values like `null` and `undefined` will be sorted with lower priority and will always appear at the end of the list.

Columns can be sorted by clicking directly on the header, even on header cells with column actions defined. Sorting indicators and column action indicators are shown on hover or on sorted columns, which allow for header cells to be less cluttered, allowing to focus on the header's content.

Multiple columns can be sorted at the same time. To enable this, hold the `Shift` key while clicking on the headers of the columns you want to sort by. The sorting indicators will show the sorting priority, with the primary sorting column showing a `1`, the secondary sorting column showing a `2`, and so on.

Sorting controls are also available in the column actions menu for any column with sorting enabled.

To set an initial sort order without controlling sorting yourself, use the `defaultSortBy` prop instead. It takes the same array of column IDs and sorting directions as `sortBy`, and the table manages sorting from there. As with every feature, `defaultSortBy` is mutually exclusive with the controlled `sortBy` prop. See [Controlled and uncontrolled state](#controlled-and-uncontrolled-state).

**Sorting**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
  seed,
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
  price: randNumber({ min: 20, max: 150 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
}));

const Sorting = () => {
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
        columnType: 'number',
        formatter: {
          maximumFractionDigits: 2,
        },
      },
      {
        header: 'Price',
        accessor: 'price',
        id: 'price',
        columnType: 'number',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        columnType: 'datetime',
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      fullWidth
      // highlight-start
      sortable
      defaultSortBy={[{ id: 'host', desc: false }]}
      // highlight-end
    />
  );
};
```

### Sort programmatically

Control sorting programmatically by setting the `sortBy` prop, passing an array with column IDs and sorting directions. Use the `onSortByChange` callback to monitor and manipulate sorting changes within the `DataTable`. If you want to sort your data before it is passed to the table, you need to disable built-in sorting by setting `sortable={{ manualSort: true }}` for server-side sorting.

**SortingControlled**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
  seed,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
  type DataTableColumnSort,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300 }),
  price: randNumber({ min: 20, max: 150 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
}));

const SortingControlled = () => {
  const [sortBy, setSortBy] = useState([{ id: 'host', desc: true }]);
  const handleSortingChange = (sort: DataTableColumnSort[]) => {
    setSortBy(sort);
  };

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
        columnType: 'number',
        formatter: {
          maximumFractionDigits: 2,
        },
      },
      {
        header: 'Price',
        accessor: 'price',
        id: 'price',
        columnType: 'number',
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
      sortable
      sortBy={sortBy}
      onSortByChange={handleSortingChange}
      // highlight-end
    />
  );
};
```

### Define sortAccessor

Define a custom `sortAccessor` in the column definition to sort by a different value than the one returned by the accessor. For example, if the accessor returns an object, you can set the sortAccessor to return a number or string field within the object.

**SortAccessor**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
  seed,
} from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = new Array(5).fill(0).map(() => ({
  host: {
    prefix: 'et-demo-',
    name: randDomainName(),
  },
  traffic: randFloat({ min: 100, max: 300 }).toString(),
  price: randNumber({ min: 20, max: 150 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
}));

const SortAccessor = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Host',
        accessor: 'host',
        id: 'host',
        cell: ({ value }) => (
          <DataTable.DefaultCell>
            {value.prefix + value.name}
          </DataTable.DefaultCell>
        ),
        // highlight-next-line
        sortAccessor: 'host.name',
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
        columnType: 'number',
        formatter: {
          maximumFractionDigits: 2,
        },
      },
      {
        header: 'Price',
        accessor: 'price',
        id: 'price',
        columnType: 'number',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
      },
    ],
    [],
  );

  return <DataTable columns={columns} data={data} sortable />;
};
```

### Define custom sortType

You can specify a `sortType` in the column definition to control sorting behavior more precisely. The built-in options are `'text' | 'textCaseSensitive' | 'number' | 'datetime'`. However, for more advanced scenarios, you can pass a function as well. This is particularly useful for compound data, where a column displays multiple or combined data entries. When using a custom `sortType` function, you may also need to define a custom sortAccessor in your column definition. For details, see: [Define a sortAccessor](#define-sortaccessor).

In the example below, a column displays both CPU usage (as a percentage) and memory usage (in GB). The custom sorting function prioritizes higher CPU usage and resolves ties by considering higher memory usage.

**CustomSortType**

```tsx
import { randDomainName, seed } from '@ngneat/falso';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const data = Array.from(
  [
    { cpuUsage: 10, memoryUsage: 42 },
    { cpuUsage: 12, memoryUsage: 32 },
    { cpuUsage: 10, memoryUsage: 12 },
    { cpuUsage: 33, memoryUsage: 11 },
    { cpuUsage: 47, memoryUsage: 11 },
  ],
  (entry) => ({
    ...entry,
    host: {
      prefix: 'et-demo-',
      name: randDomainName(),
    },
  }),
);

type DataEntry = (typeof data)[number];

// Custom sorting for compound data: prioritize higher CPU usage, break ties with higher memory usage
const compoundSort = (rowA: DataEntry, rowB: DataEntry) => {
  if (rowA.cpuUsage !== rowB.cpuUsage) {
    return rowB.cpuUsage - rowA.cpuUsage;
  }

  return rowB.memoryUsage - rowA.memoryUsage;
};

const columns: DataTableColumnDef<DataEntry>[] = [
  {
    header: 'Host',
    id: 'host',
    // highlight-next-line
    sortType: 'text',
    sortAccessor: (row: DataEntry) => row.host.name, // Pass just host.name for builtin text sorting
    accessor: 'host',
    cell: ({ value }: { value: DataEntry['host'] }) => {
      return (
        <DataTable.DefaultCell>
          {value.prefix + value.name}
        </DataTable.DefaultCell>
      );
    },
  },
  {
    header: 'CPU & Memory Usage',
    id: 'compound',
    sortAccessor: (row: DataEntry) => row, // Pass entire row for compound sorting
    // highlight-next-line
    sortType: compoundSort,
    accessor: (row: DataEntry) =>
      `${row.cpuUsage.toFixed(1)}% | ${row.memoryUsage.toFixed(1)} GB`,
  },
];

const CustomSortType = () => {
  return <DataTable columns={columns} data={data} fullWidth sortable />;
};
```

### Configure intents

An intent is a message object that enables users to pass the user flow from one app to another. It is possible to perform actions such as viewing data in another application. You can read more about intents in the [Intents docs](https://developer.dynatrace.com/develop/guides/navigation/intents.md).

The `DataTable` supports intents within the following slot components:

- `DataTable.CellActions` and `DataTable.ColumnActions`: Use the `TableActionsMenu.Intent` slot within the `TableActionsMenu`. For custom icons, use the `TableActionsMenu.Prefix` slot within `TableActionsMenu.Intent`.

- `DataTable.RowActions`: Provide a `Menu` component containing the `Menu.Intent` slot. For custom icons, place the `Menu.Prefix` slot within `Menu.Intent`.

- `DataTable.Toolbar`: Use the `DataTable.Intent` slot to configure intents. Optionally, set a custom icon by passing the desired icon to the `icon` prop.

Intents can be configured using the following options:

- `payload`: An object containing the data to be passed to the target app. The structure depends on the target application's requirements.
- `options`: Configuration options for the intent.
  - `keyProperties`: Array of properties that should be included as keys in the intent.
  - `recommendedAppId`: ID of the application that will be launched to handle the intent.
  - `recommendedIntentId`: ID of the action that is passed to the application.
  - `responseProperties`: Array of properties to be included in the response.
- `onResponse`: Optional callback function that is called when a response is received from the target app.

**Intents**

```tsx
import {
  randBetweenDate,
  randDomainName,
  randFloat,
  randNumber,
} from '@ngneat/falso';
import { useMemo } from 'react';

import { Menu } from '@dynatrace/strato-components/navigation';
import {
  DataTable,
  TableActionsMenu,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

const data = new Array(5).fill(0).map(() => ({
  host: `et-demo-${randDomainName()}`,
  traffic: randFloat({ min: 100, max: 300, precision: 2 }),
  memoryTotal: randNumber({ min: 2_000_000, max: 50_000_000 }),
  timestamp: randBetweenDate({
    from: '2022-09-26T12:45:07Z',
    to: '2022-09-28T10:22:56Z',
  }),
}));

const Intents = () => {
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
      },
      {
        header: 'Memory Total',
        accessor: 'memoryTotal',
        id: 'memoryTotal',
        columnType: 'bit',
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
    <DataTable columns={columns} data={data} fullWidth>
      <DataTable.CellActions>
        {({ rowId }) => (
          <TableActionsMenu>
            <TableActionsMenu.Group>
              <TableActionsMenu.Item
                onSelect={() => {
                  /* trigger custom action */
                  console.log(`Selected ${rowId}`);
                }}
              >
                Custom Action
              </TableActionsMenu.Item>
            </TableActionsMenu.Group>
            <TableActionsMenu.Group>
              {/* highlight-start */}
              <TableActionsMenu.Intent
                payload={{ 'dt.query': 'fetch logs' }}
                options={{
                  recommendedAppId: 'dynatrace.notebooks',
                  recommendedIntentId: 'view-query',
                }}
              >
                Edit in notebook
              </TableActionsMenu.Intent>
              <TableActionsMenu.Intent
                payload={{ 'dt.query': 'fetch logs' }}
                options={{
                  recommendedAppId: 'dynatrace.dashboards',
                  recommendedIntentId: 'view-query',
                }}
              >
                Pin to dashboard
              </TableActionsMenu.Intent>
              {/* highlight-end */}
            </TableActionsMenu.Group>
            {/* highlight-start */}
            <TableActionsMenu.Intent
              payload={{ 'dt.query': 'fetch logs' }}
              options={{
                keyProperties: [],
              }}
            >
              Open with…
            </TableActionsMenu.Intent>
            {/* highlight-end */}
          </TableActionsMenu>
        )}
      </DataTable.CellActions>

      <DataTable.ColumnActions>
        {(column) => (
          <TableActionsMenu>
            <TableActionsMenu.Group>
              <TableActionsMenu.Item
                onSelect={() => {
                  /* trigger custom action */
                }}
              >
                Custom Action
              </TableActionsMenu.Item>
            </TableActionsMenu.Group>
            <TableActionsMenu.Group>
              {/* highlight-start */}
              <TableActionsMenu.Intent
                payload={{ 'dt.query': 'fetch logs' }}
                options={{
                  recommendedAppId: 'dynatrace.notebooks',
                  recommendedIntentId: 'view-query',
                }}
              >
                Edit in notebook
              </TableActionsMenu.Intent>
              <TableActionsMenu.Intent
                payload={{ 'dt.query': 'fetch logs' }}
                options={{
                  recommendedAppId: 'dynatrace.dashboards',
                  recommendedIntentId: 'view-query',
                }}
              >
                Pin to dashboard
              </TableActionsMenu.Intent>
              {/* highlight-end */}
            </TableActionsMenu.Group>
            {/* highlight-start */}
            <TableActionsMenu.Intent
              payload={{ 'dt.query': 'fetch logs' }}
              options={{
                keyProperties: [],
              }}
            >
              Open with…
            </TableActionsMenu.Intent>
            {/* highlight-end */}
          </TableActionsMenu>
        )}
      </DataTable.ColumnActions>

      <DataTable.RowActions>
        {(row, { rowDensity }) => (
          <Menu>
            <Menu.Content>
              <Menu.Group>
                <Menu.Item onSelect={() => console.log('Row', row)}>
                  Custom row action
                </Menu.Item>
              </Menu.Group>
              <Menu.Group>
                {/* highlight-start */}
                <Menu.Intent
                  payload={{ 'dt.query': 'fetch logs' }}
                  options={{
                    recommendedAppId: 'dynatrace.notebooks',
                    recommendedIntentId: 'view-query',
                  }}
                >
                  Edit in notebook
                </Menu.Intent>
                <Menu.Intent
                  payload={{ 'dt.query': 'fetch logs' }}
                  options={{
                    recommendedAppId: 'dynatrace.dashboards',
                    recommendedIntentId: 'view-query',
                  }}
                >
                  Pin to dashboard
                </Menu.Intent>
                {/* highlight-end */}
              </Menu.Group>
              {/* highlight-start */}
              <Menu.Intent
                payload={{ 'dt.query': 'fetch logs' }}
                options={{
                  keyProperties: [],
                }}
              >
                Open with…
              </Menu.Intent>
              {/* highlight-end */}
            </Menu.Content>
          </Menu>
        )}
      </DataTable.RowActions>

      <DataTable.Toolbar>
        {/* highlight-start */}
        <DataTable.Intent
          payload={{ 'dt.query': 'fetch logs' }}
          options={{
            recommendedAppId: 'dynatrace.notebooks',
            recommendedIntentId: 'view-query',
          }}
        >
          Edit in notebook
        </DataTable.Intent>
        <DataTable.Intent
          payload={{ 'dt.query': 'fetch logs' }}
          options={{
            recommendedAppId: 'dynatrace.dashboards',
            recommendedIntentId: 'view-query',
          }}
        >
          Pin to dashboard
        </DataTable.Intent>
        <DataTable.Intent
          payload={{ 'dt.query': 'fetch logs' }}
          options={{
            keyProperties: [],
          }}
        >
          Open with…
        </DataTable.Intent>
        {/* highlight-end */}
      </DataTable.Toolbar>
    </DataTable>
  );
};
```

### Configure intents in toolbar

The `DataTable.Toolbar` accepts `DataTable.Intent` slot components, offering a menu with the specified intents for cross-app navigation. See the [Configure intents](#configure-intents) section to learn more about the configuration of intents in the `DataTable`.

**ToolbarWithIntents**

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

const ToolbarWithIntents = () => {
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
    <DataTable columns={columns} data={data} fullWidth>
      <DataTable.Toolbar>
        {/* highlight-start */}
        <DataTable.Intent
          payload={{ 'dt.query': 'fetch logs' }}
          options={{
            recommendedAppId: 'dynatrace.notebooks',
            recommendedIntentId: 'view-query',
          }}
        >
          Edit in notebook
        </DataTable.Intent>
        <DataTable.Intent
          payload={{ 'dt.query': 'fetch logs' }}
          options={{
            recommendedAppId: 'dynatrace.dashboards',
            recommendedIntentId: 'view-query',
          }}
        >
          Pin to dashboard
        </DataTable.Intent>
        <DataTable.Intent
          payload={{ 'dt.query': 'fetch logs' }}
          options={{
            keyProperties: [],
          }}
        >
          Open with…
        </DataTable.Intent>
        {/* highlight-end */}
      </DataTable.Toolbar>
    </DataTable>
  );
};
```
