### SyntheticOnDemandBatchStatus

Contains information about on-demand executions triggered within the batch.

| Name                            | Type                                                                                            | Description                                                                                                |
| ------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| batchId (required)              | string                                                                                          | The identifier of the batch.                                                                               |
| batchStatus (required)          | "SUCCESS" \| "FAILED" \| "NOT_TRIGGERED" \| "FAILED_TO_EXECUTE" \| "RUNNING"                 | The status of the batch.                                                                                   |
| executedCount (required)        | number                                                                                          | The number of triggered executions with the result SUCCESS or FAILED.                                      |
| failedCount (required)          | number                                                                                          | The number of triggered executions with the result FAILED.                                                 |
| failedExecutions                | Array\<[SyntheticOnDemandFailedExecutionStatus](#syntheticondemandfailedexecutionstatus)>       |                                                                                                            |
| failedToExecute                 | Array\<[SyntheticOnDemandFailedExecutionStatus](#syntheticondemandfailedexecutionstatus)>       |                                                                                                            |
| failedToExecuteCount (required) | number                                                                                          | The number of executions that were triggered and timed out because of a problem with the Synthetic engine. |
| metadata                        | [SyntheticOnDemandBatchStatusMetadata](#syntheticondemandbatchstatusmetadata)                   | String to string map of metadata properties for batch                                                      |
| triggeredCount (required)       | number                                                                                          | The number of triggered executions within the batch.                                                       |
| triggeringProblems              | Array\<[SyntheticOnDemandTriggeringProblemDetails](#syntheticondemandtriggeringproblemdetails)> |                                                                                                            |
| triggeringProblemsCount         | number                                                                                          | The number of executions that were not triggered due to some problems.                                     |
| userId (required)               | string                                                                                          | The name of the user who triggered execution of the batch.                                                 |
