### SyntheticMonitorPerformanceThresholdsDto

Performance thresholds configuration.

| Name               | Type                                                                                                | Description                                                      |
| ------------------ | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| enabled (required) | boolean                                                                                             | Performance threshold is enabled (`true`) or disabled (`false`). |
| thresholds         | Array\<null \| [SyntheticMonitorPerformanceThresholdDto](#syntheticmonitorperformancethresholddto)> | The list of performance threshold rules.                         |
