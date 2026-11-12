### SloBurnRateConfig

Error budget burn rate configuration of a service-level objective (SLO).

| Name                         | Type    | Description                                                                                                                                                                                                                                                     |
| ---------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| burnRateVisualizationEnabled | boolean | The error budget burn rate calculation is enabled (`true`) or disabled (`false`). In case of `false`, no calculated values will be present here. If not defined, the error budget burn rate calculation is disabled by default. <br /><br />**Example:** `true` |
| fastBurnThreshold            | number  | The threshold between a slow and a fast burn rate.<br /><br />**Example:** `1.5`                                                                                                                                                                                |
