### SyntheticMonitorOutageHandlingSettingsDto

Outage handling configuration.

| Name                                  | Type                                            | Description                                                                                                            |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| globalConsecutiveOutageCountThreshold | number                                          | Number of consecutive failures for all locations.                                                                      |
| globalOutages (required)              | boolean                                         | Generate a problem and send an alert when the monitor is unavailable at all configured locations.                      |
| localConsecutiveOutageCountThreshold  | number                                          | Number of consecutive failures.                                                                                        |
| localLocationOutageCountThreshold     | number                                          | Number of failing locations.                                                                                           |
| localOutages (required)               | boolean                                         | Generate a problem and send an alert when the monitor is unavailable for one or more consecutive runs at any location. |
| origin                                | "UNKNOWN" \| "DEFAULT" \| "MONITOR" \| "TENANT" | Indicates the origin of these settings.                                                                                |
