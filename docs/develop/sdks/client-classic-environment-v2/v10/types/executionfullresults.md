### ExecutionFullResults

Contains extended monitor's execution details.

| Name                 | Type                                                    | Description                                 |
| -------------------- | ------------------------------------------------------- | ------------------------------------------- |
| errorCode            | null \| string                                          | Error code.                                 |
| executionStepCount   | null \| number                                          | Number executed steps.                      |
| executionSteps       | null \| Array\<null \| [ExecutionStep](#executionstep)> | Details about the monitor's step execution. |
| failedStepName       | null \| string                                          | Failed step name.                           |
| failedStepSequenceId | null \| number                                          | Failed step sequence id.                    |
| failureMessage       | null \| string                                          | Failure message.                            |
| status               | null \| string                                          | Execution status.                           |
