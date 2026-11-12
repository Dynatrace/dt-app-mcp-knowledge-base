## DataTable.ColumnSettingsTrigger

Use `DataTable.ColumnSettingsTrigger` inside the `DataTable.Toolbar` to customize the label of the trigger for the column settings overlay in the toolbar.

**`DataTableColumnSettingsTriggerProps`**

| Prop       | Type                                                                                                 | Default | Description                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------ |
| `children` | `(params: { hiddenColumnCount: number; totalColumnCount: number; defaultLabel: string; }) => string` |         | Custom label to be displayed in the column settings trigger. |
