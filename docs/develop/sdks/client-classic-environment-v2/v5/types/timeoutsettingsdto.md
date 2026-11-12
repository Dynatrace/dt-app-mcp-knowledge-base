### TimeoutSettingsDto

Timeout settings of a Browser Monitor.

| Name                        | Type   | Description                                                                                                                                                                 |
| --------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| temporaryActionLimit        | number | Cascading setTimeout calls number limit. If not defined in request, it will be set to 1 by default.                                                                         |
| temporaryActionTotalTimeout | number | No additional timeout actions will be created once this time limit is reached. Value must be higher than 0 ms. If not defined in request, it will be set to 100 by default. |
