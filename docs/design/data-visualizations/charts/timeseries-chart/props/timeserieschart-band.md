## TimeseriesChart.Band

`TimeseriesChart.Band` provides a slot for defining a `Band`.

**`TimeseriesChartBandProps`**

| Prop              | Type                                                | Default | Description                                                                                  |
| ----------------- | --------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------- |
| `data` (required) | `TimeseriesBand`                                    |         | The series data passed to the band                                                           |
| `strokeOnly`      | `boolean`                                           |         | Whether only the band chart edges strokes are visible. Default value: false                  |
| `color`           | `string`                                            |         | The unique color picked for this time series representation in HEX, RGB, Color Token or HSL. |
| `seriesAction`    | `(series: TimeseriesBandDataPoint) => ReactElement` |         | Exposed callback to display series action for a series                                       |
| `gapPolicy`       | `TimeGapPolicy`                                     |         | Defines how gaps are handled (connect vs. gap).                                              |
