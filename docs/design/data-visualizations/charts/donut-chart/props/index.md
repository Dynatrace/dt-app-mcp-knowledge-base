The `DonutChart` is a variation of a pie chart with a circular shape and a hole in the center. It divides the total amount into proportional slices, each representing a category or value. The key difference is the presence of the central hole, which allows placing additional information in the available space.

**`DonutChartProps`**

```ts
export declare type DonutChartProps = DonutChartAccessorDataProps | DonutChartLegacyDataProps;
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
