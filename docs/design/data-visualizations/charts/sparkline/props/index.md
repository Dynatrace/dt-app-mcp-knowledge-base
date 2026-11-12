The `Sparkline` is a compact and simple data visualization that displays a trend or pattern of data in a small, condensed format. It typically consists of a single line or area graph, without axes or labels, that represents the variation of data points over time.

**`SparklineProps`**

| Prop                | Type                         | Default    | Description                                                                                                           |
| ------------------- | ---------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- |
| `data` (required)   | `Timeseries \| Timeseries[]` |            | Data to show                                                                                                          |
| `color`             | `string`                     |            | Sparkline color                                                                                                       |
| `variant`           | `SparklineVariant`           |            | Sparkline variant (line, area)                                                                                        |
| `showTicks`         | `boolean`                    |            | Whether Sparkline shows X Axis ticks or not                                                                           |
| `loading`           | `boolean`                    |            | When true: Sets an overlay with default loader                                                                        |
| `gapPolicy`         | `SparklineGapPolicy`         |            | Gap policy                                                                                                            |
| `curve`             | `SeriesCurve`                | `'linear'` | Curve shape of the series                                                                                             |
| `showContextValues` | `boolean`                    |            | Whether Sparkline shows min/max values or not                                                                         |
| `labelsAlignment`   | `SparklinLabelsAlignment`    |            | Whether Sparkline aligns labels to left or right Curve shape of the series                                            |
| `labelsFixedWidth`  | `number`                     |            | When Sparkline labels have a fixed width                                                                              |
| `width`             | `string \| number`           |            | Width of the sparkline component Accepts string values (e.g., '100%', '200px') or numeric values (rendered as pixels) |
| `height`            | `string \| number`           |            | Height of the sparkline component Accepts string values (e.g., '50px', '100%') or numeric values (rendered as pixels) |

**`SparklineYAxisProps`**

| Prop        | Type                                                | Default      | Description                                                         |
| ----------- | --------------------------------------------------- | ------------ | ------------------------------------------------------------------- |
| `max`       | `number \| 'data-max'`                              | `'data-max'` | Maximal value on the y-axis.                                        |
| `min`       | `number \| 'data-min'`                              | `'data-min'` | Minimal value on the y-axis.                                        |
| `scale`     | `AxisScaleType`                                     | `'linear'`   | The scale of the Y axis values. Is only applied to the bar variant. |
| `formatter` | `Formatter \| FormatOptions<Unit, ConvertibleUnit>` |              | Sparkline Y tick formatter                                          |

**`SparklineThresholdProps`**

| Prop               | Type                | Default | Description                                                                                 |
| ------------------ | ------------------- | ------- | ------------------------------------------------------------------------------------------- |
| `data` (required)  | `DateThresholdData` |         | The threshold data to be graphed by the component                                           |
| `color` (required) | `string`            |         | The unique color picked for this timeseries representation in HEX, RGB, Color Token or HSL. |
| `strokeOnly`       | `boolean`           |         | Whereas to show the threshold ranges filled or only the strokes                             |
