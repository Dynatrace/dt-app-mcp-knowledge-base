### ExecutionFullResults

Contains extended monitor's execution details.

| Name                 | Type                                    | Description                                 |
| -------------------- | --------------------------------------- | ------------------------------------------- |
| errorCode            | string                                  | Error code.                                 |
| executionStepCount   | number                                  | Number executed steps.                      |
| executionSteps       | Array\<[ExecutionStep](#executionstep)> | Details about the monitor's step execution. |
| failedStepName       | string                                  | Failed step name.                           |
| failedStepSequenceId | number                                  | Failed step sequence id.                    |
| failureMessage       | string                                  | Failure message.                            |
| status               | string                                  | Execution status.                           |
