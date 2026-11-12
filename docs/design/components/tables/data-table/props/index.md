Use `DataTable` to display and manage datasets with rich interactions such as sorting, filtering, pagination, and row selection.

Many features below expose a controlled and an uncontrolled variant of their props (for example `columnOrder` versus `defaultColumnOrder`). For guidance on when to use each and how they interact, see [Controlled and uncontrolled state](https://developer.dynatrace.com/design/components/tables/DataTable.md#controlled-and-uncontrolled-state).

**`DataTableProps`**

```ts
export declare type DataTableProps<TData extends DataTableRowData = DataTableRowData> = DataTableBaseProps<TData> & DataTableLineWrapProps & DataTableColumnFontStyleProps & DataTableVisualVariantProps & DataTableLoadingStateProps & DataTableColumnSizingProps & DataTableSortingProps & DataTableColumnVisibilityProps & DataTableColumnOrderProps & DataTableRowSelectionProps<TData> & DataTableThresholdProps<TData> & DataTableSubRowsProps<TData> & DataTableRowInteractivityProps<TData> & DataTableDownloadProps & DataTableRowIdentification<TData> & DataTableScrollAnchorProps & DataTableRowOrderProps<TData> & DataTableColumnPinningProps & StylingProps & DataTestId & MaskingProps & AriaLabelingProps & BehaviorTrackingProps;
```

**`DataTableBaseProps`**

| Prop                 | Type                          | Default | Description                                                                                                 |
| -------------------- | ----------------------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `data` (required)    | `TData[]`                     |         | Data given to the DataTable. Needs to be memoized in order to ensure performant update cycles.              |
| `columns` (required) | `DataTableColumnDef<TData>[]` |         | Column definition given to the DataTable. Needs to be memoized in order to ensure performant update cycles. |
| `fullWidth`          | `boolean`                     | `false` | Enables DataTable to use the full width of its container.                                                   |
| `fullHeight`         | `boolean`                     | `false` | Enables DataTable to use the full height of its container.                                                  |

**`DataTableLineWrapBaseProps`**

| Prop               | Type                                         | Default | Description                                                                            |
| ------------------ | -------------------------------------------- | ------- | -------------------------------------------------------------------------------------- |
| `onLineWrapChange` | `(lineWrap: DataTableLineWrapState) => void` |         | Callback that is called when the lineWrap state of the table or any column is changed. |

**`DataTableLineWrapUncontrolledProps`**

| Prop              | Type                     | Default | Description                                                                                                                                                                                                     |
| ----------------- | ------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lineWrap`        | `never`                  |         | Lets you control the lineWrap state of the entire table or individual columns. \`boolean\` values will affect the whole table, whereas \`Record\` values will let you assign lineWraps to individual columns.   |
| `defaultLineWrap` | `DataTableLineWrapState` |         | Lets you set lineWrap state initially of the entire table or individual columns. \`boolean\` values will affect the whole table, whereas \`Record\` values will let you assign lineWraps to individual columns. |

**`DataTableLineWrapControlledProps`**

| Prop              | Type                     | Default | Description                                                                                                                                                                                                     |
| ----------------- | ------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lineWrap`        | `DataTableLineWrapState` |         | Lets you control the lineWrap state of the entire table or individual columns. \`boolean\` values will affect the whole table, whereas \`Record\` values will let you assign lineWraps to individual columns.   |
| `defaultLineWrap` | `never`                  |         | Lets you set lineWrap state initially of the entire table or individual columns. \`boolean\` values will affect the whole table, whereas \`Record\` values will let you assign lineWraps to individual columns. |

**`DataTableColumnFontStyleProps`**

```ts
export declare type DataTableColumnFontStyleProps = DataTableColumnFontStyleControlledProps | DataTableColumnFontStyleUncontrolledProps;
```

**`DataTableVisualVariantProps`**

| Prop      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Default | Description |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------- |
| `variant` | `{ /** * rowSeparation can be set to 'horizontalDividers' which will provide lines between rows or * can be set to 'zebraStripes' which will provide alternate row coloring. * @defaultValue 'horizontalDividers' */ rowSeparation?: 'none' \| 'horizontalDividers' \| 'zebraStripes'; /** * If true provides vertical lines between the columns. * @defaultValue false */ verticalDividers?: boolean; /** * If true provides a border for the table. * @defaultValue true */ contained?: boolean; /** * rowDensity adds spacing around the content inside the row * with minimal space for 'condensed', maximum spacing for 'comfortable' and * 'default' being medium spacing. * @defaultValue 'default' */ rowDensity?: 'default' \| 'condensed' \| 'comfortable'; /** * fontStyle, sets the font style for the entire data table. * This does not overwrite any fontStyle set at the lower level, like columns etc. * @defaultValue 'text' */ fontStyle?: 'text' \| 'code'; /** * headers defines if the header rows of the table should be rendered or not. * @defaultValue 'default' */ headers?: 'default' \| 'hidden'; /** * Determines the vertical alignment for all table cells. * If header and body cells should have a different vertical alignment, they can be configured separately. * @defaultValue 'top' */ verticalAlignment?: 'top' \| 'center' \| 'bottom' \| { header: 'top' \| 'center' \| 'bottom'; body: 'top' \| 'center' \| 'bottom'; }; }` |         |             |

**`DataTableLoadingStateProps`**

| Prop      | Type      | Default | Description                                                                          |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------ |
| `loading` | `boolean` | `false` | Displays a loading indicator while the table's columns and/or data are being loaded. |

**`DataTableColumnSizingBaseProps`**

| Prop                   | Type                                             | Default | Description                                                    |
| ---------------------- | ------------------------------------------------ | ------- | -------------------------------------------------------------- |
| `resizable`            | `boolean`                                        | `false` | Enables resizable columns for the table.                       |
| `onColumnSizingChange` | `(newSizes: DataTableColumnSizingState) => void` |         | Callback that triggers when a user finishes resizing a column. |

**`DataTableColumnSizingControlledProps`**

| Prop                  | Type                         | Default | Description                                                                                  |
| --------------------- | ---------------------------- | ------- | -------------------------------------------------------------------------------------------- |
| `columnSizing`        | `DataTableColumnSizingState` |         | ColumnSizing state that lets you set the individual column sizes in a controlled scenario.   |
| `defaultColumnSizing` | `never`                      |         | ColumnSizing state that lets you set the individual column sizes in a uncontrolled scenario. |

**`DataTableColumnSizingUncontrolledProps`**

| Prop                  | Type                         | Default | Description                                                                                  |
| --------------------- | ---------------------------- | ------- | -------------------------------------------------------------------------------------------- |
| `columnSizing`        | `never`                      |         | ColumnSizing state that lets you set the individual column sizes in a controlled scenario.   |
| `defaultColumnSizing` | `DataTableColumnSizingState` |         | ColumnSizing state that lets you set the individual column sizes in a uncontrolled scenario. |

**`DataTableSortingBaseProps`**

| Prop             | Type                                                                                                                                                                                      | Default | Description                                                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `sortable`       | `boolean \| { /** * When set to true, the table will assume that the data provided by the consumer is already sorted, * and will not apply any sorting to it. */ manualSort?: boolean; }` | `false` | Enables sorting for all columns which do not have it explicitly disabled with the \`disableSorting\` prop on the column entry. |
| `onSortByChange` | `(columnSorting: DataTableColumnSort[]) => void`                                                                                                                                          |         | Callback triggered when sorting of the column is changed.                                                                      |

**`DataTableSortingControlledProps`**

| Prop            | Type                    | Default | Description                                                             |
| --------------- | ----------------------- | ------- | ----------------------------------------------------------------------- |
| `sortBy`        | `DataTableColumnSort[]` |         | Controlled property to define the columns the DataTable is sorted by.   |
| `defaultSortBy` | `never`                 |         | Uncontrolled property to define the columns the DataTable is sorted by. |

**`DataTableSortingUncontrolledProps`**

| Prop            | Type                    | Default | Description                                                             |
| --------------- | ----------------------- | ------- | ----------------------------------------------------------------------- |
| `sortBy`        | `never`                 |         | Controlled property to define the columns the DataTable is sorted by.   |
| `defaultSortBy` | `DataTableColumnSort[]` |         | Uncontrolled property to define the columns the DataTable is sorted by. |

**`DataTableColumnVisibilityBaseProps`**

| Prop                       | Type                                                         | Default | Description                                                                       |
| -------------------------- | ------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------- |
| `onColumnVisibilityChange` | `(columnVisibility: DataTableColumnVisibilityState) => void` |         | Callback that is called when the ColumnVisibility state of any column is changed. |

**`DataTableColumnVisibilityControlledProps`**

| Prop                      | Type                             | Default | Description                                                                |
| ------------------------- | -------------------------------- | ------- | -------------------------------------------------------------------------- |
| `columnVisibility`        | `DataTableColumnVisibilityState` |         | Lets you control the ColumnVisibility state of the individual columns.     |
| `defaultColumnVisibility` | `never`                          |         | Lets you set the initial ColumnVisibility state of the individual columns. |

**`DataTableColumnVisibilityUncontrolledProps`**

| Prop                      | Type                             | Default | Description                                                                |
| ------------------------- | -------------------------------- | ------- | -------------------------------------------------------------------------- |
| `columnVisibility`        | `never`                          |         | Lets you control the ColumnVisibility state of the individual columns.     |
| `defaultColumnVisibility` | `DataTableColumnVisibilityState` |         | Lets you set the initial ColumnVisibility state of the individual columns. |

**`DataTableColumnOrderBaseProps`**

| Prop                  | Type                                                             | Default | Description                                                                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `columnOrdering`      | `boolean`                                                        |         | Enables column ordering functionality in the table.                                                                                                                                                                            |
| `onColumnOrderChange` | `(columnOrder: string[], trigger: 'user' \| 'internal') => void` |         | Callback that is called when the column order of any column is changed. It provides the changed column order along with the underlying trigger that indicates if the change was triggered by a user interaction or internally. |

**`DataTableColumnOrderControlledProps`**

| Prop                 | Type       | Default | Description                                                      |
| -------------------- | ---------- | ------- | ---------------------------------------------------------------- |
| `columnOrder`        | `string[]` |         | Lets you control the column order of the individual columns.     |
| `defaultColumnOrder` | `never`    |         | Lets you set the initial column order of the individual columns. |

**`DataTableColumnOrderUncontrolledProps`**

| Prop                 | Type       | Default | Description                                                      |
| -------------------- | ---------- | ------- | ---------------------------------------------------------------- |
| `columnOrder`        | `never`    |         | Lets you control the column order of the individual columns.     |
| `defaultColumnOrder` | `string[]` |         | Lets you set the initial column order of the individual columns. |

**`DataTableRowOrderBaseProps`**

| Prop               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Default | Description                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------- |
| `rowOrdering`      | ``boolean \| { /** * When enabled, a drag handle is be rendered in the first column for every row. */ enableDragAndDrop?: boolean; /** * Allows to disable the dragging of certain rows. */ disableRowDragAndDrop?: (row: TData) => boolean; /** * Tooltip shown when a row's drag handle is disabled via * `disableRowDragAndDrop`. Pass a string to use the same tooltip for * every disabled row, or a function to resolve a per-row tooltip. No * tooltip is shown for enabled handles, or for rows where the function * returns `undefined`. * * When the table is sorted, drag and drop is disabled for all rows and a * built-in default tooltip is shown instead, taking precedence over this * value. * * @remarks * This option has no effect unless `disableRowDragAndDrop` is also * provided — the tooltip is only wired when both are present. The * built-in sorted-state tooltip is always shown while the table is sorted, * regardless of whether this option is configured. * * If passing a function, ensure it is stable across renders (e.g. wrap it * with `useCallback` or define it outside the component) — an unstable * reference triggers unnecessary re-renders. */ disabledRowDragAndDropTooltip?: string \| ((row: TData) => string \| undefined); /** * Locks rows with disabled drag and drop in place if they are sorted to the start or end of the table. */ lockDisabledRows?: boolean \| 'start' \| 'end'; }`` | `false` | Enables row ordering.                         |
| `onRowOrderChange` | `(rowOrder: string[]) => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |         | Callback triggered when row order is changed. |

**`DataTableRowOrderControlledProps`**

| Prop              | Type       | Default | Description             |
| ----------------- | ---------- | ------- | ----------------------- |
| `rowOrder`        | `string[]` |         | Ordered set of row ids. |
| `defaultRowOrder` | `never`    |         |                         |

**`DataTableRowOrderUncontrolledProps`**

| Prop              | Type       | Default | Description             |
| ----------------- | ---------- | ------- | ----------------------- |
| `defaultRowOrder` | `string[]` |         | Ordered set of row ids. |
| `rowOrder`        | `never`    |         |                         |

**`DataTableRowSelectionBaseProps`**

| Prop                   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                       | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `selectableRows`       | `boolean \| { /** * Allows to disable the selection of certain rows. */ disableRowSelection?: (row: TData) => boolean; /** * Allows to configure if the select all will only select * the current page or the entire. * @defaultValue 'page' */ selectAllBehavior?: 'page' \| 'all'; /** * Allows to set a number limit on how many items are allowed * to be selected. Limit number needs to be a positive integer. */ limit?: number; }` | `false` | Enables row selection. Either accepts a boolean to enable the row selection on the entire table or a config object. The config object accepts a function that will get the row data as the parameter and should return true or false if the row should be selectable or not. In the config object, the 'select all' behavior can also be configured and a selection 'limit' can also be set. Note: For the case where this prop is a config object, it needs to be memoized, to avoid updates if it is identical. Same as for all for other props with type object. |
| `onRowSelectionChange` | `(selectedRows: Record<string, boolean>) => void`                                                                                                                                                                                                                                                                                                                                                                                          |         | Callback triggered when selection is changed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

**`DataTableRowSelectionControlledProps`**

| Prop                  | Type                      | Default | Description                                        |
| --------------------- | ------------------------- | ------- | -------------------------------------------------- |
| `selectedRows`        | `Record<string, boolean>` |         | Controlled property to define the selected rows.   |
| `defaultSelectedRows` | `never`                   |         | Uncontrolled property to define the selected rows. |

**`DataTableRowSelectionUncontrolledProps`**

| Prop                  | Type                      | Default | Description                                        |
| --------------------- | ------------------------- | ------- | -------------------------------------------------- |
| `defaultSelectedRows` | `Record<string, boolean>` |         | Controlled property to define the selected rows.   |
| `selectedRows`        | `never`                   |         | Uncontrolled property to define the selected rows. |

**`DataTableThresholdProps`**

| Prop            | Type                             | Default | Description                                               |
| --------------- | -------------------------------- | ------- | --------------------------------------------------------- |
| `rowThresholds` | `DataTableRowThreshold<TData>[]` |         | Configures the thresholds used for the rows highlighting. |

**`DataTableSubRowsBaseProps`**

| Prop                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default | Description                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------- |
| `subRows`             | `boolean \| { accessor?: // With a keyof TData we would have type safety for the objects first level and would be able to suggest and ensure that the key given actually exists in the given TData row data. To support pathed accessors like 'some.nested' we need to fall back to a string. string \| ((row: TData) => TData[] \| undefined); /** * Allows to specify a columnId that the subRow indicator will be injected to. * By default, this will be the first visible column provided by the columns prop. */ subRowColumnId?: string; /** * Allows to specify a function that will evalute if a specific subRows trigger in a row * should be disabled. */ disableSubRow?: (row: TData) => boolean; }` | `false` |                                              |
| `onOpenSubRowsChange` | `(openSubRows: Record<string, boolean>) => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |         | Callback triggered when open subrows change. |

**`DataTableSubRowsControlledProps`**

| Prop                 | Type                              | Default | Description                                          |
| -------------------- | --------------------------------- | ------- | ---------------------------------------------------- |
| `openSubRows`        | `true \| Record<string, boolean>` |         | Currently open sub rows in a controlled scenario.    |
| `defaultOpenSubRows` | `never`                           |         | Initially open sub rows in an uncontrolled scenario. |

**`DataTableSubRowsUncontrolledProps`**

| Prop                 | Type                              | Default | Description                                          |
| -------------------- | --------------------------------- | ------- | ---------------------------------------------------- |
| `openSubRows`        | `never`                           |         | Currently open sub rows in a controlled scenario.    |
| `defaultOpenSubRows` | `true \| Record<string, boolean>` |         | Initially open sub rows in an uncontrolled scenario. |

**`DataTableRowInteractivityBaseProps`**

| Prop                | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Default | Description                                    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------- |
| `interactiveRows`   | ``boolean \| { /** * The `autoActivate` setting controls whether a focused row immediately activates it, * making stepping through interactive rows with a keyboard more accessible. * @defaultValue true */ autoActivate?: boolean; /** * Defines a link for an interactive row, enabling navigation to another view or page. * @deprecated Please use onActiveRowChange instead. */ link?: (row: TData) => string; /** * Allows to disable the interactivity of certain rows. * The callback receives the row data and returns `true` for rows that must not be interactive. */ disableRowInteractivity?: (row: TData) => boolean; }`` | `false` | Enables row interactivity.                     |
| `onActiveRowChange` | `(activeRow: string \| null, event?: DataTableRowActivationEvent) => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         | Callback triggered when active row is changed. |

**`DataTableRowInteractivityControlledProps`**

| Prop               | Type             | Default | Description                      |
| ------------------ | ---------------- | ------- | -------------------------------- |
| `activeRow`        | `string \| null` |         | Lets you control the active row. |
| `defaultActiveRow` | `never`          |         |                                  |

**`DataTableRowInteractivityUncontrolledProps`**

| Prop               | Type             | Default | Description                            |
| ------------------ | ---------------- | ------- | -------------------------------------- |
| `defaultActiveRow` | `string \| null` |         | Lets you set the initially active row. |
| `activeRow`        | `never`          |         |                                        |

**`DataTableDownloadSlotProps`**

| Prop                   | Type                                                                          | Default | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `excludeColumns`       | `string[]`                                                                    |         | Array of column IDs that can optionally be excluded from the download.                                                                                                                                                                                                                                                                                                                            |
| `onDownloadData`       | `(subset: 'all' \| 'page' \| 'selected', excludedColumns?: string[]) => void` |         | Called when table data was downloaded via the toolbar, or programmatically when the slot is configured.                                                                                                                                                                                                                                                                                           |
| `formatDownloadHeader` | `(context: DataTableDownloadHeaderContext) => string \| undefined`            |         | Called once per included leaf column to determine its header name in the downloaded file. Return the string to use as the header name, or \`undefined\` to keep the default name. Only invoked for columns that appear in the download (visible, not excluded, not builtin/sparkline).                                                                                                            |
| `fileName`             | `string \| ((subset: 'all' \| 'page' \| 'selected') => string)`               |         | Name of the downloaded CSV file. Pass a static string or a callback that receives the downloaded subset (\`'all'\`, \`'page'\`, or \`'selected'\`) and returns the file name. The callback is invoked lazily, once per download. Falls back to \`table-data.csv\` when omitted, empty, or when nothing usable remains after sanitization. A missing \`.csv\` extension is appended automatically. |

**`DataTableRowIdentification`**

| Prop    | Type                     | Default | Description                                                             |
| ------- | ------------------------ | ------- | ----------------------------------------------------------------------- |
| `rowId` | `(row: TData) => string` |         | Enables identification of rows independent of their index in the array. |
