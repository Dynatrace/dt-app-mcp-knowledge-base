### RemoteConfigurationManagementOperationValidationError

Validation error of remote configuration management operation definition.

| Name      | Type                                                                   | Description                                                                                                     |
| --------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| attribute | "group" \| "hostGroup" \| "hostProperty" \| "hostTag" \| "networkZone" | The attribute which is affected by the operation.<br /><br />**Example:** `networkZone`                         |
| operation | "clear" \| "set"                                                       | The operation performed on given attribute.<br /><br />**Example:** `set`                                       |
| reason    | string                                                                 | The reason of validation failure.<br /><br />**Example:** `Value must not start with a period`                  |
| value     | string                                                                 | The value which should be assigned to given attribute.<br /><br />**Example:** `.exampleInvalidNetworkZoneName` |
