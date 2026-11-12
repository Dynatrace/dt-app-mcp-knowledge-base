### RemoteConfigurationManagementJobPreview

A preview of remote configuration management job.

| Name                           | Type                                                                   | Description                                                                                                         |
| ------------------------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| alreadyConfiguredEntitiesCount | number                                                                 | The number of entities that are currently configured as defined by remote configuration management operation.       |
| attribute                      | "group" \| "hostGroup" \| "hostProperty" \| "hostTag" \| "networkZone" | The attribute which is affected by the operation.                                                                   |
| operation                      | "clear" \| "set"                                                       | The operation performed on given attribute.                                                                         |
| targetEntitiesCount            | number                                                                 | The number of entities that will be configured as defined by remote configuration management after it is completed. |
| value                          | string                                                                 | The value which should be assigned to given attribute.                                                              |
