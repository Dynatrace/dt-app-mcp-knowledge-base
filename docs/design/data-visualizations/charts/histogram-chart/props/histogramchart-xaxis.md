## HistogramChart.XAxis

To configure the x-axis, add `HistogramChart.XAxis` to the histogram chart.

**`HistogramChartXAxisProps`**

| Prop        | Type                                                | Default  | Description                                        |
| ----------- | --------------------------------------------------- | -------- | -------------------------------------------------- |
| `max`       | `MaxScaleBoundary`                                  | `'auto'` | The max value configuration to display in the axis |
| `min`       | `MinScaleBoundary`                                  | `'auto'` | The min value configuration to display in the axis |
| `label`     | `string`                                            |          | The title used for the axis                        |
| `scale`     | `AxisScaleType`                                     |          | The scale to be used                               |
| `formatter` | `Formatter \| FormatOptions<Unit, ConvertibleUnit>` |          | Formatter to be applied for each tick of the axis  |
| `unit`      | `ChartUnit`                                         |          | The unit for the axis                              |
