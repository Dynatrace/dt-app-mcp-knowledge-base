### MetricDefaultAggregation

The default aggregation of a metric.

| Name            | Type                                                                                         | Description                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| parameter       | number                                                                                       | The percentile to be delivered. Valid values are between `0` and `100`. Applicable only to the `percentile` aggregation type. |
| type (required) | "auto" \| "avg" \| "count" \| "max" \| "median" \| "min" \| "percentile" \| "sum" \| "value" | The type of default aggregation.                                                                                              |
