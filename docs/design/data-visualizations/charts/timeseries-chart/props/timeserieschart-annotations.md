## TimeseriesChart.Annotations

`TimeseriesChart.Annotations` provides a slot for defining annotations in the chart.

**`TimeseriesChartAnnotationsProps`**

| Prop                 | Type                  | Default      | Description                                                                                                     |
| -------------------- | --------------------- | ------------ | --------------------------------------------------------------------------------------------------------------- |
| `visibleTracksLimit` | `number`              | `3`          | How many tracks to show by default, if there are more tracks than the specified here a scrollbar will be added. |
| `textOverflow`       | `TextOverflowOptions` | `'truncate'` | Controls whether annotation text may expand beyond its track boundary or is truncated.                          |
