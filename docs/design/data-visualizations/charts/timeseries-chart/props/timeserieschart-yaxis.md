## TimeseriesChart.YAxis

To configure the y-axis, add `TimeseriesChart.YAxis` to the time series chart.

**`TimeseriesChartYAxisProps`**

| Prop        | Type                                                | Default  | Description                                            |
| ----------- | --------------------------------------------------- | -------- | ------------------------------------------------------ |
| `max`       | `MaxScaleBoundary`                                  | `'auto'` | Maximal value on the y-axis.                           |
| `min`       | `MinScaleBoundary`                                  | `'auto'` | Minimal value on the y-axis.                           |
| `position`  | `YAxisPosition`                                     |          | The position of the Y-axis relative to the chart area. |
| `label`     | `string`                                            |          | The label to display alongside the axis.               |
| `scale`     | `AxisScaleType`                                     |          | The scale of the Y axis values.                        |
| `formatter` | `Formatter \| FormatOptions<Unit, ConvertibleUnit>` |          | Timeseries tick formatter                              |
