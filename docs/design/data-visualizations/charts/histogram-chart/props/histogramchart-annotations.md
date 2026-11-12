## HistogramChart.Annotations

`HistogramChart.Annotations` provides a slot for configuring annotations in the histogram.

**`HistogramAnnotationsProps`**

| Prop                 | Type                  | Default    | Description                                                                                                     |
| -------------------- | --------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| `visibleTracksLimit` | `number`              | `3`        | How many tracks to show by default, if there are more tracks than the specified here a scrollbar will be added. |
| `textOverflow`       | `TextOverflowOptions` | `'expand'` | Controls whether annotation text may expand beyond its track boundary or is truncated.                          |
