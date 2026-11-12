### ActiveGateGroupInfoDto

Metadata for each ActiveGate group.

| Name                            | Type                                            | Description                                             |
| ------------------------------- | ----------------------------------------------- | ------------------------------------------------------- |
| activeGates (required)          | Array\<[ActiveGateInfoDto](#activegateinfodto)> | ActiveGates in group.                                   |
| availableActiveGates (required) | number                                          | Number of ActiveGates in group available for extension. |
| groupName (required)            | string                                          | ActiveGate group name.                                  |
