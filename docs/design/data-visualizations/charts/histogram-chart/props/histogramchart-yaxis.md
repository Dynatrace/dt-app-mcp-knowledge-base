## HistogramChart.YAxis

To configure the y-axis, add `HistogramChart.YAxis` to the histogram chart.

**`HistogramChartYAxisProps`**

| Prop        | Type                                                | Default  | Description                                                |
| ----------- | --------------------------------------------------- | -------- | ---------------------------------------------------------- |
| `max`       | `MaxScaleBoundary`                                  | `'auto'` | The max value configuration to display in the axis         |
| `min`       | `MinScaleBoundary`                                  | `'auto'` | The min value configuration to display in the axis         |
| `label`     | `string`                                            |          | The title used for the axis                                |
| `scale`     | `AxisScaleType`                                     |          | The scale to be used                                       |
| `formatter` | `Formatter \| FormatOptions<Unit, ConvertibleUnit>` |          | Formatter to be applied for each tick of the axis          |
| `position`  | `'left' \| 'right'`                                 | `'left'` | The position of the y axis relative to the histogram chart |
