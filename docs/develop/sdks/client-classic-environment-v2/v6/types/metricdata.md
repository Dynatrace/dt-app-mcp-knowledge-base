### MetricData

A list of metrics and their data points.

| Name                  | Type                                                      | Description                                                                                                                        |
| --------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| nextPageKey           | string                                                    | Deprecated. This field is returned for compatibility reasons. It always has the value of `null`.                                   |
| resolution (required) | string                                                    | The timeslot resolution in the result.                                                                                             |
| result (required)     | Array\<[MetricSeriesCollection](#metricseriescollection)> | A list of metrics and their data points.                                                                                           |
| totalCount (required) | number                                                    | The total number of primary entities in the result. Has the `0` value if none of the requested metrics is suitable for pagination. |
| warnings (required)   | Array\<string>                                            | A list of warnings                                                                                                                 |
