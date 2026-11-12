## DataTable.ExpandableRow

Use `DataTable.ExpandableRow` to define an expandable row template which provides additional information for each table row.

**`DataTableExpandableRowBaseProps`**

| Prop                   | Type                                              | Default | Description                                                                                                           |
| ---------------------- | ------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| `children` (required)  | `(params: { row: TData; }) => ReactNode`          |         | Define a render function as the child of this slot selection to control what is rendered in the expanded row section. |
| `onExpandedRowsChange` | `(expandedRows: Record<string, boolean>) => void` |         | Callback triggered when the state of the expanded row is changed.                                                     |
| `disableExpand`        | `(row: TData) => boolean`                         |         | Allows you to disable individual rows from expanding by returning true from the passed function.                      |

**`DataTableExpandableRowControlledProps`**

| Prop                  | Type                              | Default | Description                                                |
| --------------------- | --------------------------------- | ------- | ---------------------------------------------------------- |
| `expandedRows`        | `true \| Record<string, boolean>` |         | Controlled state for the expanded rows of the DataTable.   |
| `defaultExpandedRows` | `never`                           |         | Uncontrolled state for the expanded rows of the DataTable. |

**`DataTableExpandableRowUncontrolledProps`**

| Prop                  | Type                              | Default | Description                                                |
| --------------------- | --------------------------------- | ------- | ---------------------------------------------------------- |
| `expandedRows`        | `never`                           |         | Controlled state for the expanded rows of the DataTable.   |
| `defaultExpandedRows` | `true \| Record<string, boolean>` |         | Uncontrolled state for the expanded rows of the DataTable. |
