### ExecutionStep

Contains detailed information about the monitor's step execution.

| Name                   | Type                | Description                                                                                                                                                        |
| ---------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| monitorType (required) | "BROWSER" \| "HTTP" | Defines the actual set of fields depending on the value. See one of the following objects: * `BROWSER`
   -> BMAction
* `HTTP`
   -> MonitorRequestExecutionResult |
