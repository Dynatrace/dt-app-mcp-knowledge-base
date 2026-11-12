### MetricSeriesCollection

Data points of a metric.

| Name                           | Type                                                    | Description                                                                                                                  |
| ------------------------------ | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| appliedOptionalFilters         | Array\<[AppliedFilter](#appliedfilter)>                 | A list of filtered metric keys along with filters that have been applied to these keys, from the `optionalFilter` parameter. |
| data (required)                | Array\<[MetricSeries](#metricseries)>                   | Data points of the metric.                                                                                                   |
| dataPointCountRatio (required) | number                                                  | The ratio of queried data points divided by the maximum number of data points per metric that are allowed in a single query. |
| dimensionCountRatio (required) | number                                                  | The ratio of queried dimension tuples divided by the maximum number of dimension tuples allowed in a single query.           |
| dql                            | [MetricQueryDQLTranslation](#metricquerydqltranslation) | Metric query translation to DQL.                                                                                             |
| metricId (required)            | string                                                  | The key of the metric. If any transformation is applied, it is included here.                                                |
| warnings                       | Array\<string>                                          | A list of potential warnings that affect this ID. For example deprecated feature usage etc.                                  |
