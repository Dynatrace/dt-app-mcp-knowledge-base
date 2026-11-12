## XYChart.Annotations

`XYChart.Annotations` provides a slot for defining annotations in the chart.

**`XYChartAnnotationsProps`**

| Prop                 | Type                        | Default    | Description                                                                            |
| -------------------- | --------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| `data` (required)    | `XYChartData[]`             |            | Data object for the xy chart.                                                          |
| `xAxisId` (required) | `string`                    |            | Unique Id required to attach the annotations to its x-axis.                            |
| `showLabels`         | `boolean`                   | `false`    | Flag for showing/hiding track labels                                                   |
| `fixedTracks`        | `number`                    | `3`        | Amount of tracks visible without scrolling.                                            |
| `annotationsActions` | `AnnotationsActionsHandler` |            | Custom annotations actions on entry selection.                                         |
| `textOverflow`       | `TextOverflowOptions`       | `'expand'` | Controls whether annotation text may expand beyond its track boundary or is truncated. |
