## DataTable.SelectedRowsActions

Use `DataTable.SelectedRowsActions` to define actions that will be applied to the selected rows. These actions will replace the `DataTable.TableActions` when one or multiple rows are selected.

**`DataTableSelectedRowsActionsProps`**

| Prop                  | Type                                                            | Default | Description |
| --------------------- | --------------------------------------------------------------- | ------- | ----------- |
| `children` (required) | `(rows: { rowId: string; originalRow: TData; }[]) => ReactNode` |         |             |
