## DataTableSingleRowThreshold

Threshold configuration that can be applied to highlight something matching the id.

**`DataTableSingleRowThreshold`**

```ts
export declare type DataTableSingleRowThreshold<TData extends DataTableRowData> = DataTableThresholdRule<TData> & {
    rules?: never;
} & ({
    type: 'pill';
    color: string;
} | {
    type: 'highlight';
    backgroundColor?: string;
    color?: string;
});
```
