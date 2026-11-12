### SyntheticPublicLocationUpdate

The update of a public Synthetic location.

| Name              | Type                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status (required) | "ENABLED" \| "DISABLED" \| "HIDDEN" | The status of the location: * `ENABLED`
  : The location is displayed as active in the UI. You can assign monitors to the location.
* `DISABLED`
  : The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
* `HIDDEN`
  : The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as&#x20;
  `HIDDEN`
   when no monitor is assigned to it. |
| type (required)   | "PUBLIC" \| "PRIVATE"               | Defines the actual set of fields depending on the value. See one of the following objects: * `PUBLIC`
   -> SyntheticPublicLocationUpdate
* `PRIVATE`
   -> SyntheticPrivateLocationUpdate                                                                                                                                                                                                                                                                                                                                                |
