### SyntheticOnDemandExecutionRequestMonitor

Contains monitors to be executed on demand from the locations specified.

| Name                 | Type                                                     | Description                                                                                                                                |
| -------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| customizedScript     | SyntheticOnDemandExecutionRequestMonitorCustomizedScript | Customized script properties for this on-demand batch execution.                                                                           |
| executionCount       | number                                                   | The number of times the monitor is to be executed per location; if not set, the monitor will be executed once.<br /><br />**Default:** `1` |
| locations            | Array\<string>                                           | The locations from where the monitor is to be executed.                                                                                    |
| monitorId (required) | string                                                   | The monitor identifier.                                                                                                                    |
| repeatMode           | "SEQUENTIAL" \| "PARALLEL"                               | Execution repeat mode. If not set, the mode is SEQUENTIAL.<br /><br />**Default:** `SEQUENTIAL`                                            |
