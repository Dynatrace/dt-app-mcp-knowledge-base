### SyntheticMonitorPerformanceThresholdDto

The performance threshold rule.

| Name                 | Type                    | Description                                                                                                                                                                      |
| -------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aggregation          | "AVG" \| "MAX" \| "MIN" | Aggregation type *default:* `"AVG"`                                                                                                                                              |
| dealertingSamples    | number                  | Number of most recent non-violating request executions that closes the problem.                                                                                                  |
| samples              | number                  | Number of request executions in analyzed sliding window (sliding window size).                                                                                                   |
| stepIndex            | number                  | Specify the step's index to which a threshold applies. If threshold is monitor-level, no index is needed.                                                                        |
| threshold (required) | number                  | Notify if monitor request takes longer than *X* time units to execute. For network availability monitors the time unit is milliseconds, for browser and HTTP monitors - seconds. |
| type                 | "MONITOR" \| "STEP"     | Type of performance threshold                                                                                                                                                    |
| violatingSamples     | number                  | Number of violating request executions in analyzed sliding window.                                                                                                               |
