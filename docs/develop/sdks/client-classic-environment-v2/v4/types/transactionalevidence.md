### TransactionalEvidence

The transactional evidence of the problem.

A behavior of a metric in an transaction that indicates the problem and/or is its root cause.

| Name                         | Type                                                                                        | Description                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| displayName (required)       | string                                                                                      | The display name of the evidence.                                                                                                                                                                                                                                                                                  |
| endTime                      | number                                                                                      | The end time of the evidence, in UTC milliseconds                                                                                                                                                                                                                                                                  |
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
| unit                         | string                                                                                      | The unit of the metric.                                                                                                                                                                                                                                                                                            |
| valueAfterChangePoint        | number                                                                                      | The metric's value after the problem start.                                                                                                                                                                                                                                                                        |
| valueBeforeChangePoint       | number                                                                                      | The metric's value before the problem start.                                                                                                                                                                                                                                                                       |
