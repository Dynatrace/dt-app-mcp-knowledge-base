### RemoteConfigurationManagementOperation

Definition of a single remote configuration management operation.

| Name                 | Type                                                                   | Description                                            |
| -------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------ |
| attribute (required) | "group" \| "hostGroup" \| "hostProperty" \| "hostTag" \| "networkZone" | The attribute which is affected by the operation.      |
| operation (required) | "clear" \| "set"                                                       | The operation performed on given attribute.            |
| value                | string                                                                 | The value which should be assigned to given attribute. |
