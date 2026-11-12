### SloBurnRate

Error budget burn rate evaluation of a service-level objective (SLO).

| Name                                    | Type                       | Description                                                                                                                                      |
| --------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| burnRateType                            | "NONE" \| "FAST" \| "SLOW" | The calculated burn rate type. Has a value of 'FAST', 'SLOW' or 'NONE'.                                                                          |
| burnRateValue                           | number                     | The burn rate of the SLO, calculated for the last hour.                                                                                          |
| burnRateVisualizationEnabled (required) | boolean                    | The error budget burn rate calculation is enabled (`true`) or disabled (`false`). In case of `false`, no calculated values will be present here. |
| estimatedTimeToConsumeErrorBudget       | number                     | The estimated time left to consume the error budget in hours.                                                                                    |
| fastBurnThreshold                       | number                     | The threshold between a slow and a fast burn rate.                                                                                               |
| sloValue                                | number                     | The calculated value of the SLO for the timeframe chosen for the burn rate calculation.                                                          |
