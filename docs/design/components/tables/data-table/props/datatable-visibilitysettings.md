## DataTable.VisibilitySettings

Use `DataTable.VisibilitySettings` inside the `DataTable.Toolbar` to render the trigger for the visibility settings overlay in the toolbar. The overlay allows the user to control the column visibility for all columns.

**`DataTableColumnVisibilitySettingsProps`**

| Prop                    | Type                             | Default | Description                                                                                                        |
| ----------------------- | -------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `resetColumnVisibility` | `DataTableColumnVisibilityState` |         | The default column visibility state to reset to when 'Reset to default' is triggered in the column settings modal. |
| `visibleColumnLimits`   | `DataTableVisibleColumnLimits`   |         | Upper limits for the number of visible columns.                                                                    |
