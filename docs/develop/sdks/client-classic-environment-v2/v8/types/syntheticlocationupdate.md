### SyntheticLocationUpdate

The synthetic location update. This is a base object, the exact type depends on the value of the `type` field.

| Name            | Type                  | Description                                                                                                                                                                                |
| --------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type (required) | "PUBLIC" \| "PRIVATE" | Defines the actual set of fields depending on the value. See one of the following objects: * `PUBLIC`
   -> SyntheticPublicLocationUpdate
* `PRIVATE`
   -> SyntheticPrivateLocationUpdate |
