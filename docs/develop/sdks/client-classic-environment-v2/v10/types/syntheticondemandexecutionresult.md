### SyntheticOnDemandExecutionResult

The result of on-demand synthetic monitor execution.

| Name                               | Type                                                                                                            | Description                                                    |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| batchId (required)                 | string                                                                                                          | The batch identifier of the triggered executions.              |
| triggered                          | null \| Array\<null \| [SyntheticOnDemandTriggeredMonitor](#syntheticondemandtriggeredmonitor)>                 | Monitors for which on-demand executions were triggered.        |
| triggeredCount (required)          | number                                                                                                          | The total number of the triggered executions within the batch. |
| triggeringProblemsCount (required) | number                                                                                                          | The total number of problems within the batch.                 |
| triggeringProblemsDetails          | null \| Array\<null \| [SyntheticOnDemandTriggeringProblemDetails](#syntheticondemandtriggeringproblemdetails)> | List with the entities for which triggering problems occurred. |
