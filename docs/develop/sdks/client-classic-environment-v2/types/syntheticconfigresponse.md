### SyntheticConfigResponse

The synthetic configuration of the whole tenant.

| Name                                                  | Type    | Description                                                                                                         |
| ----------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| bmMonitorTimeout (required)                           | number  | bmMonitorTimeout - browser monitor execution timeout (ms)<br /><br />**Minimum:** `60000`                           |
| bmStepTimeout (required)                              | number  | bmStepTimeout - browser monitor single step execution timeout (ms)<br /><br />**Minimum:** `10000`                  |
| maintenanceWindowsExcludedFromAvailability (required) | boolean | maintenanceWindowsExcludedFromAvailability - exclude periods with maintenance windows from availability calculation |
