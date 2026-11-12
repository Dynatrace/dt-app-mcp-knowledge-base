The `PieChart` visualizes data proportions in a circular chart. It divides a circle into slices, with each slice representing a specific category or value.

**`PieChartProps`**

```ts
export declare type PieChartProps = PieChartAccessorDataProps | PieChartLegacyDataProps;
```

**`LabelsConfig`**

| Prop        | Type               | Default                                 | Description                                          |
| ----------- | ------------------ | --------------------------------------- | ---------------------------------------------------- |
| `hidden`    | `boolean`          | `false (all the labels are displayed).` | Hides the slice labels.                              |
| `valueType` | `LabelTypeOptions` | `'relative'`                            | Display the label with a relative or absolute value. |

**`ThresholdConfig`**

| Prop               | Type            | Default       | Description                                                                                                                                            |
| ------------------ | --------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type` (required)  | `ThresholdType` | `'relative'.` | Type of the grouping threshold. Can be "relative", "absolute" or "number-of-slices".                                                                   |
| `value` (required) | `number`        |               | Value of the group threshold. Default is dynamically calculated depending on the chart size for relative and absolute. 10 in case of number-of-slices. |

**`GroupConfig`**

| Prop                   | Type              | Default    | Description                  |
| ---------------------- | ----------------- | ---------- | ---------------------------- |
| `name`                 | `string`          | `'Other'.` | Name of the group.           |
| `threshold` (required) | `ThresholdConfig` |            | The threshold for the group. |
