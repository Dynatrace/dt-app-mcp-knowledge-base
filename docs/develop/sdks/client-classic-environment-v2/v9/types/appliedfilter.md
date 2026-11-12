### AppliedFilter

Optional filters that took effect.

| Name                 | Type              | Description                                                                                                                                     |
| -------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| appliedTo (required) | Array\<string>    | The keys of all metrics that this filter has been applied to. Can contain multiple metrics for complex expressions and always at least one key. |
| filter               | [Filter](#filter) | A dimensional or series filter on a metric.                                                                                                     |
