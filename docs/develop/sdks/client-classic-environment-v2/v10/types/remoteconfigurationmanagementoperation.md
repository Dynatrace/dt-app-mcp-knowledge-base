### RemoteConfigurationManagementOperation

Definition of a single remote configuration management operation.

| Name                 | Type                                                                   | Description                                                                                             |
| -------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| attribute (required) | "group" \| "hostGroup" \| "hostProperty" \| "hostTag" \| "networkZone" | The attribute which is affected by the operation.<br /><br />**Example:** `networkZone`                 |
| operation (required) | "clear" \| "set"                                                       | The operation performed on given attribute.<br /><br />**Example:** `set`                               |
| value                | string                                                                 | The value which should be assigned to given attribute.<br /><br />**Example:** `exampleNetworkZoneName` |
