### AvailabilityEvidence

The availability evidence of the problem.

Indicates an entity that has been unavailable during the problem lifespan and that might be related to the root cause.

| Name                         | Type                                                                                        | Description                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| displayName (required)       | string                                                                                      | The display name of the evidence.                                                                                                                                                                                                                                                                                  |
| endTime                      | number                                                                                      | The end time of the evidence, in UTC milliseconds.                                                                                                                                                                                                                                                                 |
| entity (required)            | [EntityStub](#entitystub)                                                                   | A short representation of a monitored entity.                                                                                                                                                                                                                                                                      |
| evidenceType (required)      | "AVAILABILITY_EVIDENCE" \| "EVENT" \| "MAINTENANCE_WINDOW" \| "METRIC" \| "TRANSACTIONAL" | Defines the actual set of fields depending on the value. See one of the following objects: * `EVENT`
   -> EventEvidence
* `METRIC`
   -> MetricEvidence
* `TRANSACTIONAL`
   -> TransactionalEvidence
* `MAINTENANCE_WINDOW`
   -> MaintenanceWindowEvidence
* `AVAILABILITY_EVIDENCE`
   -> AvailabilityEvidence |
| groupingEntity               | [EntityStub](#entitystub)                                                                   | A short representation of a monitored entity.                                                                                                                                                                                                                                                                      |
| rootCauseRelevant (required) | boolean                                                                                     | The evidence is (`true`) or is not (`false`) a part of the root cause.                                                                                                                                                                                                                                             |
| startTime (required)         | number                                                                                      | The start time of the evidence, in UTC milliseconds.                                                                                                                                                                                                                                                               |
