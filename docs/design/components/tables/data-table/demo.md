## Demo

This example shows the features that a dense, data-heavy table typically needs: sortable and resizable columns, column ordering, a toolbar, per-column actions, per-cell actions, interactive rows, row actions, and selectable rows with bulk actions. For less data-heavy tables, see [Structured list](#structured-list).

**Demo**

```tsx
import {
  seed,
  randEmail,
  randPastDate,
  randFirstName,
  randLastName,
} from '@ngneat/falso';
import { useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  TableActionsMenu,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { Paragraph } from '@dynatrace/strato-components/typography';
import { DownloadIcon } from '@dynatrace/strato-icons';

seed('1234');

const data = new Array(8).fill(0).map((_, index) => {
  const firstName = randFirstName();
  const lastName = randLastName();

  return {
    index,
    firstName: firstName,
    lastName: lastName,
    email: randEmail({ firstName, lastName }),
    timestamp: randPastDate(),
  };
});

const Demo = () => {
  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'name',
        id: 'name',
        columns: [
          {
            header: 'First Name',
            accessor: 'firstName',
            id: 'firstName',
          },
          {
            header: 'Last Name',
            accessor: 'lastName',
            id: 'lastName',
          },
        ],
      },
      {
        header: 'Email',
        accessor: 'email',
        id: 'email',
        width: 150,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        columnType: 'datetime',
        width: 200,
      },
    ],
    [],
  );

  const [selectedEmail, setSelectedEmail] = useState<string | undefined>(
    undefined,
  );

  return (
    <Flex gap={8} flexDirection="column">
      <DataTable
        columns={columns}
        data={data}
        sortable
        resizable
        columnOrdering
        fullWidth
        interactiveRows
        onActiveRowChange={(activeRow) => {
          setSelectedEmail(
            activeRow !== null ? data[Number(activeRow)]?.email : undefined,
          );
        }}
        selectableRows
      >
        <DataTable.Toolbar>
          <DataTable.DownloadData />
          <DataTable.LineWrap />
          <DataTable.ColumnOrderSettings />
          <DataTable.VisibilitySettings />
        </DataTable.Toolbar>

        <DataTable.ColumnActions>
          {() => (
            <TableActionsMenu>
              <TableActionsMenu.ColumnOrder />
              <TableActionsMenu.LineWrap />
              <TableActionsMenu.HideColumn />
            </TableActionsMenu>
          )}
        </DataTable.ColumnActions>

        <DataTable.CellActions>
          {({ cellValue }) => (
            <TableActionsMenu>
              <TableActionsMenu.CopyItem value={(cellValue as string) ?? ''} />
            </TableActionsMenu>
          )}
        </DataTable.CellActions>

        <DataTable.RowActions>
          {(row) => (
            <Button onClick={() => console.log('Row', row)}>
              <Button.Prefix>
                <DownloadIcon />
              </Button.Prefix>
              Export row
            </Button>
          )}
        </DataTable.RowActions>

        <DataTable.SelectedRowsActions>
          {(
            rows: {
              rowId: string;
              originalRow: (typeof data)[number];
            }[],
          ) => (
            <>
              <DataTable.SelectionChip />
              <Button onClick={() => console.log('Selected rows', rows)}>
                Export selected
              </Button>
            </>
          )}
        </DataTable.SelectedRowsActions>
      </DataTable>
      <Paragraph>
        {selectedEmail
          ? `Selected email: ${selectedEmail}`
          : 'Click a row to see its details.'}
      </Paragraph>
    </Flex>
  );
};
```
