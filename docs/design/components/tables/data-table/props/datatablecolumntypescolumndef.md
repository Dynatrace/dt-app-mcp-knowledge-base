## DataTableColumnTypesColumnDef

Combined ruleset of column types and their matching configurations.

**`DataTableColumnTypesColumnDef`**

```ts
export declare type DataTableColumnTypesColumnDef = {
    columnType: Extract<DataTableColumnType, 'meterbar'>;
    config?: DataTableMeterbarColumnConfig;
} | {
    columnType: Extract<DataTableColumnType, 'sparkline'>;
    config?: DataTableSparklineColumnConfig;
} | {
    columnType: Extract<DataTableColumnType, 'datetime'>;
    formatter?: FormatDateOptions | DataTableDatetimeDisplayMode;
    config?: never;
} | {
    columnType: Extract<DataTableColumnType, 'date'>;
    formatter?: FormatDateOptions;
    config?: never;
} | {
    columnType: Extract<DataTableColumnType, 'currency'>;
    formatter?: DataTableCellFormatterCurrencyOptions;
    config?: never;
} | {
    columnType?: Extract<DataTableColumnType, 'number' | 'bit'>;
    formatter?: FormatOptions<Unit, ConvertibleUnit>;
    config?: never;
} | {
    columnType: Extract<DataTableColumnType, 'long'>;
    formatter?: Pick<FormatOptions<Unit, ConvertibleUnit>, 'locale' | 'maximumFractionDigits' | 'maximumSignificantDigits' | 'minimumFractionDigits' | 'minimumSignificantDigits' | 'useGrouping'>;
    config?: never;
} | {
    columnType: Extract<DataTableColumnType, 'gantt'>;
    config?: DataTableGanttColumnConfig;
} | {
    columnType?: Extract<DataTableColumnType, 'markdown'>;
    formatter?: never;
    config?: DataTableMarkdownColumnConfig;
} | {
    columnType: Extract<DataTableColumnType, 'log-content'>;
    formatter?: never;
    config?: DataTableLogContentColumnConfig;
} | {
    columnType: Extract<DataTableColumnType, 'text'>;
    formatter?: FormatOptions<Unit, ConvertibleUnit>;
    config?: DataTableTextColumnConfig;
};
```
