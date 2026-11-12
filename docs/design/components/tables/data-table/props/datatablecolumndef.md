## DataTableColumnDef

Mapping type for the columns prop that can contain either display columns or group columns.

**`DataTableColumnDef`**

```ts
export declare type DataTableColumnDef<TData extends DataTableRowData, TValue = any> = DataTableDisplayColumnDef<TData, TValue> | DataTableGroupColumnDef<TData, TValue>;
```
