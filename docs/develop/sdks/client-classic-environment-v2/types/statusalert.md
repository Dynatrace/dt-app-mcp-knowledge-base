### StatusAlert

Parameters of a status alert.

| Name                      | Type                     | Description                                                                                                                                               |
| ------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alertName (required)      | string                   | Name of the alert.                                                                                                                                        |
| alertThreshold (required) | number                   | Threshold of the alert. Status alerts trigger if they fall below this value, burn rate alerts trigger if they exceed the value.                           |
| alertType (required)      | "BURN_RATE" \| "STATUS" | Defines the actual set of fields depending on the value. See one of the following objects: * `BURN_RATE`
   -> BurnRateAlert
* `STATUS`
   -> StatusAlert |
