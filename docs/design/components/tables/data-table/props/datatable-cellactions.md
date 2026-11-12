## DataTable.CellActions

Use `DataTable.CellActions` to specify user actions for the table cells.

**`DataTableCellActionsProps`**

| Prop                  | Type                                        | Default | Description                                                                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` (required) | `DataTableCellActionsContent<TData>`        |         | Content for the cell actions. Should be a \`TableActionsMenu\` directly or a function returning one.                                                                                                                                                                  |
| `column`              | `string \| ((columnId: string) => boolean)` |         | Column ID that the given cell actions apply to. When a function is provided, it receives a column ID and must return a boolean whether the action should be applied to that column. If left empty, the actions apply to all cells in columns that allow cell actions. |
