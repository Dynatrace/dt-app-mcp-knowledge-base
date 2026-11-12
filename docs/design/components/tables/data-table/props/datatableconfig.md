## DataTableConfig

Current configuration option that can be shared via intents.

**`DataTableConfig`**

| Prop               | Type                                                       | Default     | Description                                                                   |
| ------------------ | ---------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| `pagination`       | `{ defaultPageIndex?: number; defaultPageSize?: number; }` |             | Pagination props to initialize pagination.                                    |
| `columnVisibility` | `DataTableColumnVisibilityProps['columnVisibility']`       |             | For specifying which columns should be visible or hidden.                     |
| `fullWidth`        | `DataTableBaseProps<TData>['fullWidth']`                   | `false`     | For controlling whether to take up the full parent container width.           |
| `fullHeight`       | `DataTableBaseProps<TData>['fullHeight']`                  | `false`     | For controlling whether to take up the full parent container height.          |
| `lineWrap`         | `DataTableLineWrapProps['lineWrap']`                       | `false`     | For controlling whether the content of a cell should be line wrapped.         |
| `fontStyle`        | `DataTableColumnFontStyleProps['fontStyle']`               | `'text'`    | For customizing the font style across the table or within individual columns. |
| `resizable`        | `DataTableColumnSizingProps['resizable']`                  | `false`     | For controlling whether the columns are resizable.                            |
| `selectableRows`   | `DataTableRowSelectionProps<TData>['selectableRows']`      | `undefined` | For controlling whether individual rows can be selected.                      |
| `rowThresholds`    | `DataTableThresholdProps<TData>['rowThresholds']`          | `[]`        | For configuring the highlighting of individual rows.                          |
| `sortable`         | `DataTableSortingProps['sortable']`                        | `false`     | For controlling whether the columns are sortable.                             |
| `variant`          | `DataTableVisualVariantProps['variant']`                   |             | For customizing the appearance of the table.                                  |
