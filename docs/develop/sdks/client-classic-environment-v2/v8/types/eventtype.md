### EventType

Configuration of an event type.

| Name          | Type                                                                                                                           | Description                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| description   | string                                                                                                                         | A short description of the event type.                                                   |
| displayName   | string                                                                                                                         | The display name of the event type.<br /><br />**Example:** `High CPU`                   |
| severityLevel | "CUSTOM_ALERT" \| "AVAILABILITY" \| "ERROR" \| "INFO" \| "MONITORING_UNAVAILABLE" \| "PERFORMANCE" \| "RESOURCE_CONTENTION" | The severity level associated with the event type.<br /><br />**Example:** `PERFORMANCE` |
| type          | string                                                                                                                         | The event type.<br /><br />**Example:** `OSI_HIGH_CPU`                                   |
