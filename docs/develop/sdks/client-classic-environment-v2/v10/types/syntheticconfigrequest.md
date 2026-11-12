### SyntheticConfigRequest

The synthetic configuration to apply to the whole tenant.

| Name                                       | Type            | Description                                                                                                         |
| ------------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------- |
| bmMonitorTimeout                           | null \| number  | bmMonitorTimeout - browser monitor execution timeout (ms)<br /><br />**Minimum:** `60000`                           |
| bmStepTimeout                              | null \| number  | bmStepTimeout - browser monitor single step execution timeout (ms)<br /><br />**Minimum:** `10000`                  |
| maintenanceWindowsExcludedFromAvailability | null \| boolean | maintenanceWindowsExcludedFromAvailability - exclude periods with maintenance windows from availability calculation |
