### SyntheticOnDemandExecution

Describes the status of an on-demand execution.

| Name                             | Type                                                                                              | Description                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| batchId (required)               | string                                                                                            | The identifier of the batch.                                                         |
| customizedScript                 | null \| ObjectNode                                                                                | Customized script properties for this on-demand batch execution.                     |
| dataDeliveryTimestamp (required) | null \| number                                                                                    | The timestamp when whole data set has been collected on server, in UTC milliseconds. |
| executionId (required)           | string                                                                                            | The identifier of the execution.                                                     |
| executionStage (required)        | "TRIGGERED" \| "EXECUTED" \| "DATA_RETRIEVED" \| "NOT_TRIGGERED" \| "TIMED_OUT" \| "WAITING"   | Execution stage.                                                                     |
| executionTimestamp (required)    | null \| number                                                                                    | The timestamp when execution was finished, in UTC milliseconds.                      |
| fullResults                      | null \| [ExecutionFullResults](#executionfullresults)                                             | Contains extended monitor's execution details.                                       |
| locationId (required)            | string                                                                                            | The identifier of the location from where the monitor is to be executed.             |
| metadata                         | null \| [SyntheticOnDemandExecutionMetadata](#syntheticondemandexecutionmetadata)                 | Metadata map for the execution batch.                                                |
| monitorId (required)             | string                                                                                            | The identifier of the monitor.                                                       |
| nextExecutionId                  | null \| string                                                                                    | Next execution id for sequential mode.                                               |
| processingMode (required)        | "UNKNOWN" \| "NONE" \| "STANDARD" \| "DISABLE_PROBLEM_DETECTION" \| "EXECUTIONS_DETAILS_ONLY" | The processing mode of the execution.                                                |
| schedulingTimestamp (required)   | number                                                                                            | The scheduling timestamp, in UTC milliseconds.                                       |
| simpleResults                    | null \| [ExecutionSimpleResults](#executionsimpleresults)                                         | Contains basic results of the monitor's on-demand execution.                         |
| source (required)                | "API" \| "UI"                                                                                     | The source of the triggering request.                                                |
| userId (required)                | string                                                                                            | The name of the user who triggered the on-demand execution.                          |
