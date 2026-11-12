## DataTable.RowActions

Use `DataTable.RowActions` to specify user actions for the table rows.

**`DataTableRowActionsProps`**

| Prop                  | Type                                                                                                                                                                             | Default | Description |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------- |
| `children` (required) | `(row: TData, { rowDensity, rowIndex, rowId, }: { rowDensity: 'default' \| 'condensed' \| 'comfortable'; rowIndex: number; rowId: string; }) => ReactElement<PropsWithChildren>` |         |             |
