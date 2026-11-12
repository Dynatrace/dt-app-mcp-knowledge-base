### RemoteConfigurationManagementJobPreview

A preview of remote configuration management job.

| Name                           | Type                                                                   | Description                                                                                                                                     |
| ------------------------------ | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| alreadyConfiguredEntitiesCount | number                                                                 | The number of entities that are currently configured as defined by remote configuration management operation.<br /><br />**Example:** `1`       |
| attribute                      | "group" \| "hostGroup" \| "hostProperty" \| "hostTag" \| "networkZone" | The attribute which is affected by the operation.<br /><br />**Example:** `networkZone`                                                         |
| operation                      | "clear" \| "set"                                                       | The operation performed on given attribute.<br /><br />**Example:** `set`                                                                       |
| targetEntitiesCount            | number                                                                 | The number of entities that will be configured as defined by remote configuration management after it is completed.<br /><br />**Example:** `2` |
| value                          | null \| string                                                         | The value which should be assigned to given attribute.<br /><br />**Example:** `exampleNetworkZoneName`                                         |
