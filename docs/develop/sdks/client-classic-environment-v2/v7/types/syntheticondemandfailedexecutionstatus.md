### SyntheticOnDemandFailedExecutionStatus

Contains information about on-demand executions that failed or failed to be executed.

| Name                   | Type                                                                                            | Description                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| errorCode (required)   | string                                                                                          | Error code.                                                              |
| executionId (required) | string                                                                                          | The identifier of the execution.                                         |
| executionStage         | "TRIGGERED" \| "EXECUTED" \| "DATA_RETRIEVED" \| "NOT_TRIGGERED" \| "TIMED_OUT" \| "WAITING" | Execution stage.                                                         |
| executionTimestamp     | number                                                                                          | The timestamp when execution was finished, in UTC milliseconds.          |
| failureMessage         | string                                                                                          | Failure message.                                                         |
| locationId (required)  | string                                                                                          | The identifier of the location from where the monitor is to be executed. |
| monitorId (required)   | string                                                                                          | The identifier of the monitor.                                           |
