### MobileImpact

Analysis of problem impact to a mobile application.

| Name                              | Type                                                            | Description                                                                                                                                                                                                                                           |
| --------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| estimatedAffectedUsers (required) | number                                                          | The estimated number of affected users.                                                                                                                                                                                                               |
| impactType (required)             | "APPLICATION" \| "CUSTOM_APPLICATION" \| "MOBILE" \| "SERVICE" | Defines the actual set of fields depending on the value. See one of the following objects: * `SERVICE`
   -> ServiceImpact
* `APPLICATION`
   -> ApplicationImpact
* `MOBILE`
   -> MobileImpact
* `CUSTOM_APPLICATION`
   -> CustomApplicationImpact |
| impactedEntity (required)         | [EntityStub](#entitystub)                                       | A short representation of a monitored entity.                                                                                                                                                                                                         |
