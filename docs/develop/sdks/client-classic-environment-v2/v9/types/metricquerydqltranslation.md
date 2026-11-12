### MetricQueryDQLTranslation

Metric query translation to DQL.

| Name    | Type                         | Description                                                            |
| ------- | ---------------------------- | ---------------------------------------------------------------------- |
| message | string                       | Error message - only present if the status is `not supported`          |
| query   | string                       | The DQL query corresponding to the metric query                        |
| status  | "not supported" \| "success" | The status of the DQL translation, either `success` or `not supported` |
