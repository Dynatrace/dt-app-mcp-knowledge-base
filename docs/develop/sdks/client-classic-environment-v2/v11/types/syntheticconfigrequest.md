### SyntheticConfigRequest

The synthetic configuration to apply to the whole tenant.

| Name                                       | Type    | Description                                                                                                         |
| ------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------- |
| bmMonitorTimeout                           | number  | bmMonitorTimeout - browser monitor execution timeout (ms)<br /><br />**Minimum:** `60000`                           |
| bmStepTimeout                              | number  | bmStepTimeout - browser monitor single step execution timeout (ms)<br /><br />**Minimum:** `10000`                  |
| maintenanceWindowsExcludedFromAvailability | boolean | maintenanceWindowsExcludedFromAvailability - exclude periods with maintenance windows from availability calculation |
