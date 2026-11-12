### ActiveGateAutoUpdateConfig

Configuration of the ActiveGate auto-updates.

| Name               | Type                                   | Description                                                                                                                                                                                                                              |
| ------------------ | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| effectiveSetting   | "ENABLED" \| "DISABLED"                | The actual state of the ActiveGate auto-update. Applicable only if the **setting** parameter is set to `INHERITED`. In that case, the value is taken from the parent setting. Otherwise, it's just a duplicate of the **setting** value. |
| setting (required) | "ENABLED" \| "DISABLED" \| "INHERITED" | The state of the ActiveGate auto-update: enabled, disabled, or inherited. If set to `INHERITED`, the setting is inherited from the global configuration set on the environment or Managed cluster level.                                 |
