### Evidence

An evidence of a root cause.

The actual set of fields depends on the type of the evidence. Find the list of actual objects in the description of the **evidenceType** field or see [Problems API v2 - JSON models](https://dt-url.net/we03sp2).

| Name                         | Type                                                                                        | Description                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| displayName (required)       | string                                                                                      | The display name of the evidence.                                                                                                                                                                                                                                                                                  |
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
