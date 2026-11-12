### SyntheticMultiProtocolMonitorStepDto

The step of a network availability monitor.

| Name                             | Type                                                                                                    | Description                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| constraints (required)           | Array\<[SyntheticMonitorConstraintDto](#syntheticmonitorconstraintdto)>                                 | The list of constraints which apply to all requests in the step. |
| name (required)                  | string                                                                                                  | Step name.                                                       |
| properties (required)            | [SyntheticMultiProtocolMonitorStepDtoProperties](#syntheticmultiprotocolmonitorstepdtoproperties)       | The properties which apply to all requests in the step.          |
| requestConfigurations (required) | Array\<[SyntheticMultiProtocolRequestConfigurationDto](#syntheticmultiprotocolrequestconfigurationdto)> | Request configurations.                                          |
| requestType (required)           | "ICMP" \| "TCP" \| "DNS"                                                                                | Request type.                                                    |
| targetFilter                     | string                                                                                                  | Target filter.                                                   |
| targetList                       | Array\<string>                                                                                          | Target list.                                                     |
