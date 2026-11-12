### RemoteConfigurationManagementOperationValidationError

Validation error of remote configuration management operation definition.

| Name      | Type                                                                   | Description                                            |
| --------- | ---------------------------------------------------------------------- | ------------------------------------------------------ |
| attribute | "group" \| "hostGroup" \| "hostProperty" \| "hostTag" \| "networkZone" | The attribute which is affected by the operation.      |
| operation | "clear" \| "set"                                                       | The operation performed on given attribute.            |
| reason    | string                                                                 | The reason of validation failure.                      |
| value     | string                                                                 | The value which should be assigned to given attribute. |
