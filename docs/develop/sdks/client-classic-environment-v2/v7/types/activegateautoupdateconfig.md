### ActiveGateAutoUpdateConfig

Auto-update configuration for an individual environment ActiveGate.

| Name               | Type                                        | Description                                                                                                                                                                                                                              |
| ------------------ | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| effectiveSetting   | "ENABLED" \| "DISABLED"                     | The actual state of the ActiveGate auto-update. Applicable only if the **setting** parameter is set to `INHERITED`. In that case, the value is taken from the parent setting. Otherwise, it's just a duplicate of the **setting** value. |
| setting (required) | "ENABLED" \| "DISABLED" \| "INHERITED"      | The state of the environment ActiveGate auto-update: enabled, disabled, or inherited. If set to `INHERITED`, the setting is inherited from the global environment ActiveGate auto-update configuration.                                  |
| targetVersion      | string                                      | The target version of the ActiveGate. Specify the version in the `<major>.<minor>` format (for example `1.342`) or `latest`, `previous`, or `older`.                                                                                     |
| updateWindows      | [UpdateWindowsConfig](#updatewindowsconfig) | Basic information about all configured update windows                                                                                                                                                                                    |
