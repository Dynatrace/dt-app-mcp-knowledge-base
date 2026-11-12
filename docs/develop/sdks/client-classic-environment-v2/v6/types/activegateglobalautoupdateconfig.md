### ActiveGateGlobalAutoUpdateConfig

Global configuration of ActiveGates auto-update.

| Name                     | Type                                            | Description                                                                                                                                                                    |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| globalSetting (required) | "ENABLED" \| "DISABLED"                         | The state of auto-updates for all ActiveGates connected to the environment or Managed cluster. This setting is inherited by all ActiveGates that have the `INHERITED` setting. |
| metadata                 | [ConfigurationMetadata](#configurationmetadata) | Metadata useful for debugging                                                                                                                                                  |
