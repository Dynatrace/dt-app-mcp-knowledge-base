## DataTable.Pagination

Use `DataTable.Pagination` to enable pagination.

**`DataTablePaginationBaseProps`**

| Prop                 | Type                                                         | Default                             | Description                                                                                                                                                                                             |
| -------------------- | ------------------------------------------------------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                 | `string`                                                     |                                     | The element's unique identifier. See [MDN]\(https\://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).                                                                                 |
| `pageSizeOptions`    | `number[]`                                                   | `[10, 20, 50, 100, 250, 500, 1000]` | Page size options to be displayed in the page size select.                                                                                                                                              |
| `autoResetPageIndex` | `boolean`                                                    | `true`                              | Allows opting out of automatic page index reset when new data is being set. Be aware that if you turn off \`autoResetPageIndex\`, you may need to add logic to handle resetting the pageIndex yourself. |
| `onPageIndexChange`  | `(pageIndex: number, trigger: 'user' \| 'internal') => void` |                                     | Called when the page index changes. Provides the changed page index along with the underlying trigger.                                                                                                  |
| `onPageSizeChange`   | `(pageSize: number) => void`                                 |                                     | Handler that is called when the page size changes.                                                                                                                                                      |

**`DataTablePaginationPageIndexUncontrolledProps`**

| Prop               | Type     | Default | Description                                     |
| ------------------ | -------- | ------- | ----------------------------------------------- |
| `defaultPageIndex` | `number` | `0`     | Initial page index in an uncontrolled scenario. |
| `pageIndex`        | `never`  |         | Current page index in a controlled scenario.    |

**`DataTablePaginationPageIndexControlledProps`**

| Prop                   | Type     | Default | Description                                     |
| ---------------------- | -------- | ------- | ----------------------------------------------- |
| `defaultPageIndex`     | `never`  | `0`     | Initial page index in an uncontrolled scenario. |
| `pageIndex` (required) | `number` |         | Current page index in a controlled scenario.    |

**`DataTablePaginationPageSizeUncontrolledProps`**

| Prop              | Type     | Default | Description                                     |
| ----------------- | -------- | ------- | ----------------------------------------------- |
| `defaultPageSize` | `number` | `100`   | Default number of rows per page (uncontrolled). |
| `pageSize`        | `never`  |         | Number of rows per page (controlled)            |

**`DataTablePaginationPageSizeControlledProps`**

| Prop                  | Type     | Default | Description                                     |
| --------------------- | -------- | ------- | ----------------------------------------------- |
| `defaultPageSize`     | `never`  | `100`   | Default number of rows per page (uncontrolled). |
| `pageSize` (required) | `number` |         | Number of rows per page (controlled)            |

**`DataTablePaginationClientSideProps`**

| Prop                 | Type    | Default | Description                                                                                                                                      |
| -------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `enablePreviousPage` | `never` |         | Whether the previous page is available (if not, the go to previous page button should be disabled).                                              |
| `enableNextPage`     | `never` |         | Whether the next page is available (if not, the go to next page button should be disabled).                                                      |
| `totalRowsCount`     | `never` |         | The total number of rows. Will be used to determine the total number of pages to display the indicator "Page X of Y" for server-side pagination. |

**`DataTablePaginationServerSideProps`**

| Prop                            | Type      | Default | Description                                                                                                                                      |
| ------------------------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `enablePreviousPage` (required) | `boolean` |         | Whether the previous page is available (if not, the go to previous page button should be disabled).                                              |
| `enableNextPage` (required)     | `boolean` |         | Whether the next page is available (if not, the go to next page button should be disabled).                                                      |
| `totalRowsCount`                | `number`  |         | The total number of rows. Will be used to determine the total number of pages to display the indicator "Page X of Y" for server-side pagination. |
