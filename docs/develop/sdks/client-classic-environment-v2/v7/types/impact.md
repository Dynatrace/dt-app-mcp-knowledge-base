### Impact

The impact analysis of the problem on other entities/users.

The actual set of fields depends on the type of the impact. Find the list of actual objects in the description of the **impactType** field or see [Problems API v2 - JSON models](https://dt-url.net/we03sp2).

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
