### MaintenanceWindowEvidence

The  maintenance window evidence of the problem.

The maintenance window during which the problem occurred.

| Name                                 | Type                                                                                        | Description                                                                                                                                                                                                                                                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| displayName (required)               | string                                                                                      | The display name of the evidence.                                                                                                                                                                                                                                                                                  |
| endTime (required)                   | number                                                                                      | The end time of the evidence, in UTC milliseconds.                                                                                                                                                                                                                                                                 |
| entity (required)                    | [EntityStub](#entitystub)                                                                   | A short representation of a monitored entity.                                                                                                                                                                                                                                                                      |
| evidenceType (required)              | "AVAILABILITY_EVIDENCE" \| "EVENT" \| "MAINTENANCE_WINDOW" \| "METRIC" \| "TRANSACTIONAL" | Defines the actual set of fields depending on the value. See one of the following objects: * `EVENT`
   -> EventEvidence
* `METRIC`
   -> MetricEvidence
* `TRANSACTIONAL`
   -> TransactionalEvidence
* `MAINTENANCE_WINDOW`
   -> MaintenanceWindowEvidence
* `AVAILABILITY_EVIDENCE`
   -> AvailabilityEvidence |
| groupingEntity                       | [EntityStub](#entitystub)                                                                   | A short representation of a monitored entity.                                                                                                                                                                                                                                                                      |
| maintenanceWindowConfigId (required) | string                                                                                      | The ID of the related maintenance window.                                                                                                                                                                                                                                                                          |
| rootCauseRelevant (required)         | boolean                                                                                     | The evidence is (`true`) or is not (`false`) a part of the root cause.                                                                                                                                                                                                                                             |
| startTime (required)                 | number                                                                                      | The start time of the evidence, in UTC milliseconds.                                                                                                                                                                                                                                                               |
