## Controlled and uncontrolled state

Many `DataTable` features hold state that a user can change through the UI: column order, column visibility, column pinning, line wrap, row selection, sub-rows, pagination, and more. You pick the mode independently for each feature. All features expose the same three props: a controlled prop, a default-value prop, and a change callback.

**Use uncontrolled mode unless you have a specific reason not to.** It is the recommended default. The toolbar and built-in controls work on their own; you don't manage the state. Set the initial value with the feature's `default`-prefixed prop (for example `defaultColumnOrder`, `defaultLineWrap`, `defaultSelectedRows`), and the table tracks changes from there.

Use **controlled** mode only when you need to read or drive the state from outside the table, such as to persist it or sync it with other UI. Pass the current value with the feature's plain prop (`columnOrder`, `lineWrap`, `selectedRows`), hold it in your own React state, and update it from the change callback (`onColumnOrderChange`, `onRowSelectionChange`).

> **Caution**
>
> The two modes are mutually exclusive within a single feature: for any one feature you cannot pass both its controlled prop and its default-value prop (for example both `columnOrder` and `defaultColumnOrder`, or both `lineWrap` and `defaultLineWrap`). Different features on the same table can independently use different modes.

The following features use this pattern:

| Feature                       | Controlled prop    | Default-value prop        | Change callback            |
| ----------------------------- | ------------------ | ------------------------- | -------------------------- |
| Column order                  | `columnOrder`      | `defaultColumnOrder`      | `onColumnOrderChange`      |
| Column visibility             | `columnVisibility` | `defaultColumnVisibility` | `onColumnVisibilityChange` |
| Column pinning                | `pinnedColumns`    | `defaultPinnedColumns`    | `onPinnedColumnsChange`    |
| Column sizing                 | `columnSizing`     | `defaultColumnSizing`     | `onColumnSizingChange`     |
| Line wrap                     | `lineWrap`         | `defaultLineWrap`         | `onLineWrapChange`         |
| Column font style             | `fontStyle`        | `defaultFontStyle`        | `onFontStyleChange`        |
| Row selection                 | `selectedRows`     | `defaultSelectedRows`     | `onRowSelectionChange`     |
| Row order                     | `rowOrder`         | `defaultRowOrder`         | `onRowOrderChange`         |
| Sub-rows                      | `openSubRows`      | `defaultOpenSubRows`      | `onOpenSubRowsChange`      |
| Expandable rows (row details) | `expandedRows`     | `defaultExpandedRows`     | `onExpandedRowsChange`     |
| Active row (interactive rows) | `activeRow`        | `defaultActiveRow`        | `onActiveRowChange`        |
| Sorting                       | `sortBy`           | `defaultSortBy`           | `onSortByChange`           |
| Pagination (page index)       | `pageIndex`        | `defaultPageIndex`        | `onPageIndexChange`        |
| Pagination (page size)        | `pageSize`         | `defaultPageSize`         | `onPageSizeChange`         |
