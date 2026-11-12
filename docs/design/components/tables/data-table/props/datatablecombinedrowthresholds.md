## DataTableCombinedRowThresholds

Threshold configuration that can be applied to highlight something matching the id.

**`DataTableCombinedRowThresholds`**

```ts
export declare type DataTableCombinedRowThresholds<TData extends DataTableRowData> = {
    rules: DataTableThresholdRule<TData>[];
} & ({
    type: 'pill';
    color: string;
} | {
    type: 'highlight';
    backgroundColor?: string;
    color?: string;
});
```
