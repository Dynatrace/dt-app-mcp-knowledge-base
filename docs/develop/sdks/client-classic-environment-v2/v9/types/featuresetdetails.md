### FeatureSetDetails

Additional information about a Feature Set

| Name                     | Type                            | Description                                                                  |
| ------------------------ | ------------------------------- | ---------------------------------------------------------------------------- |
| description              | string                          | Optional description for the feature set                                     |
| displayName              | string                          | Optional display name of the feature set                                     |
| isRecommended (required) | boolean                         | Marks the feature set as recommended (selected by default during activation) |
| metrics                  | Array\<[MetricDto](#metricdto)> | Feature set metrics                                                          |
