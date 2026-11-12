### Event

Configuration of an event.

| Name             | Type                                      | Description                                                                                                                                                                   |
| ---------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| correlationId    | string                                    | The correlation ID of the event.<br /><br />**Example:** `933613657e1c8fcf`                                                                                                   |
| endTime          | number                                    | The timestamp when the event was closed, in UTC milliseconds. Has the value of `null` if the event is still active. <br /><br />**Example:** `1564039524182`                  |
| entityId         | [EntityStub](#entitystub)                 | A short representation of a monitored entity.                                                                                                                                 |
| entityTags       | Array\<[METag](#metag)>                   | A list of tags of the related entity.                                                                                                                                         |
| eventId          | string                                    | The ID of the event.<br /><br />**Example:** `4293884258445543163_1564039524182`                                                                                              |
| eventType        | string                                    | The type of the event.<br /><br />**Example:** `LOW_DISK_SPACE`                                                                                                               |
| frequentEvent    | boolean                                   | If `true`, the event happens [frequently](https://dt-url.net/4da3kdg). A frequent event doesn't raise a problem.                                                              |
| managementZones  | Array\<[ManagementZone](#managementzone)> | A list of all management zones that the event belongs to.                                                                                                                     |
| properties       | Array\<[EventProperty](#eventproperty)>   | A list of event properties.                                                                                                                                                   |
| startTime        | number                                    | The timestamp when the event was raised, in UTC milliseconds.<br /><br />**Example:** `1564039524182`                                                                         |
| status           | "CLOSED" \| "OPEN"                        | The status of the event.<br /><br />**Example:** `OPEN`                                                                                                                       |
| suppressAlert    | boolean                                   | The alerting status during a [maintenance](https://dt-url.net/b2123rg0): * `false`
  : Alerting works as usual.
* `true`
  : Alerting is disabled.                            |
| suppressProblem  | boolean                                   | The problem detection status during a [maintenance](https://dt-url.net/b2123rg0): * `false`
  : Problem detection works as usual.
* `true`
  : Problem detection is disabled. |
| title            | string                                    | The title of the event.<br /><br />**Example:** `High CPU load on host X`                                                                                                     |
| underMaintenance | boolean                                   | If `true`, the event happened while the monitored system was under maintenance.                                                                                               |
