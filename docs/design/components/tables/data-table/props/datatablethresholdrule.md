## DataTableThresholdRule

Threshold configuration that can be applied to highlight something matching the id.

**`DataTableThresholdRule`**

```ts
export declare type DataTableThresholdRule<TData extends DataTableRowData> = {
    comparator: 'greater-than' | 'less-than' | 'greater-than-or-equal-to' | 'less-than-or-equal-to' | 'equal-to' | 'not-equal-to';
    value: number;
    /** Accessor string or function to pick the value from the rowData that should be compared against. */
    accessor?: string | ((row: TData) => number);
} | {
    /** The operator being used to compare the object value with the threshold value. */
    comparator: 'equal-to' | 'not-equal-to';
    /** The threshold value to compare the object value to. */
    value: string;
    /** Accessor string or function to pick the value from the rowData that should be compared against. */
    accessor?: string | ((row: TData) => string);
} | {
    /** Custom comparator function that is called with the row data. */
    comparator: (rowData: TData) => boolean;
};
```
