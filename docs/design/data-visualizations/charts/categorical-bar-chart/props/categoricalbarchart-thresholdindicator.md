## CategoricalBarChart.ThresholdIndicator

`CategoricalBarChart.ThresholdIndicator` provides a slot for defining annotations in the chart.

**`CategoricalBarChartThresholdIndicatorProps`**

| Prop               | Type            | Default       | Description                                              |
| ------------------ | --------------- | ------------- | -------------------------------------------------------- |
| `data` (required)  | `ThresholdData` |               | The threshold data to be graphed by the component        |
| `color` (required) | `string`        |               | The unique color picked in HEX, RGB, Color Token or HSL. |
| `strokeOnly`       | `boolean`       |               | Whereas to show the ranges filled or only the strokes    |
| `label`            | `string`        | `"Threshold"` | Label to be shown in the threshold tooltip.              |
