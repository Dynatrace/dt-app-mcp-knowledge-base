## DataTable.ColumnActions

Use `DataTable.ColumnActions` to specify user actions for the table columns.

**`DataTableColumnActionsProps`**

| Prop                  | Type                                   | Default | Description                                                                                                                               |
| --------------------- | -------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `children` (required) | `DataTableColumnActionsContent<TData>` |         | Content for the column actions. Should be a \`TableActionsMenu\` directly or a function returning one.                                    |
| `column`              | `string`                               |         | Column id that the given column actions apply to. If left empty, the given column actions apply to all columns that allow column actions. |
