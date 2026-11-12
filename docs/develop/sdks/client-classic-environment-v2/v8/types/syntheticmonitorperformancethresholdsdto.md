### SyntheticMonitorPerformanceThresholdsDto

Performance thresholds configuration.

| Name               | Type                                                                                        | Description                                                      |
| ------------------ | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| enabled (required) | boolean                                                                                     | Performance threshold is enabled (`true`) or disabled (`false`). |
| thresholds         | Array\<[SyntheticMonitorPerformanceThresholdDto](#syntheticmonitorperformancethresholddto)> | The list of performance threshold rules.                         |
