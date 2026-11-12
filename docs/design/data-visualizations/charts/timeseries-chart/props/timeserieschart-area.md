## TimeseriesChart.Area

`TimeseriesChart.Area` provides a slot for defining a `Area`.

**`TimeseriesChartAreaProps`**

| Prop              | Type            | Default | Description                                                                               |
| ----------------- | --------------- | ------- | ----------------------------------------------------------------------------------------- |
| `data` (required) | `Timeseries`    |         | The series data passed to the area                                                        |
| `gapPolicy`       | `TimeGapPolicy` |         | Defines how gaps are handled (connect vs. gap).                                           |
| `pointsDisplay`   | `PointsDisplay` |         | Whether to show data points always, never, or depending on a width-based threshold amount |
