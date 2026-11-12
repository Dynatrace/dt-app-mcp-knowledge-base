### EventEvidence

The event evidence of the problem.

An event that occurred during the problem lifespan that might be related to the root cause.

| Name                         | Type                                                                                        | Description                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| data                         | [Event](#event)                                                                             | Configuration of an event.                                                                                                                                                                                                                                                                                         |
| displayName (required)       | string                                                                                      | The display name of the evidence.                                                                                                                                                                                                                                                                                  |
| endTime                      | number                                                                                      | The end timestamp of the event, in UTC milliseconds. Has `-1` value, if the event is still active.                                                                                                                                                                                                                 |
| entity (required)            | [EntityStub](#entitystub)                                                                   | A short representation of a monitored entity.                                                                                                                                                                                                                                                                      |
| eventId                      | string                                                                                      | The ID of the event.                                                                                                                                                                                                                                                                                               |
| eventType                    | string                                                                                      | The type of the event.                                                                                                                                                                                                                                                                                             |
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
