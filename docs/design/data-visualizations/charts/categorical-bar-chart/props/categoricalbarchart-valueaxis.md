## CategoricalBarChart.ValueAxis

To configure the value axis, add `CategoricalBarChart.ValueAxis` to the categorical bar chart.

**`CategoricalBarChartValueAxisProps`**

| Prop        | Type                                                | Default | Description                                                  |
| ----------- | --------------------------------------------------- | ------- | ------------------------------------------------------------ |
| `label`     | `string`                                            |         |                                                              |
| `min`       | `number`                                            |         |                                                              |
| `max`       | `number`                                            |         |                                                              |
| `formatter` | `Formatter \| FormatOptions<Unit, ConvertibleUnit>` |         | Handler that is called for every tick value to be formatted. |
| `scale`     | `AxisScaleType`                                     |         | The scale of the value axis.                                 |
