### LocationExecutionResults

Results of the execution HTTP monitor's requests at a given location

| Name           | Type                                                                    | Description                                                          |
| -------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------- |
| executionId    | string                                                                  | Execution id.                                                        |
| locationId     | string                                                                  | Location id.                                                         |
| requestResults | Array\<[MonitorRequestExecutionResult](#monitorrequestexecutionresult)> | The list of the monitor's request results executed on this location. |
