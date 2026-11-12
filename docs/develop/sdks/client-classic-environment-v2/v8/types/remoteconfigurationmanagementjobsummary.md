### RemoteConfigurationManagementJobSummary

Remote configuration management job with basic data.

| Name       | Type                           | Description                                                                                                                                                                                                         |
| ---------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| endTime    | string                         | Date (in ISO 8601 format: yyyy-MM-dd'T'HH:mm:ss.SSS'Z') when the remote configuration management job was finished. This field is present only for finished jobs.<br /><br />**Example:** `2020-11-05T08:15:30.144Z` |
| entityType | "ACTIVE_GATE" \| "ONE_AGENT" | Type of entities modified by remote configuration management.<br /><br />**Example:** `ACTIVE_GATE or ONE_AGENT`                                                                                                    |
| id         | string                         | The ID of the remote configuration management job.<br /><br />**Example:** `7974003406714390819`                                                                                                                    |
| startTime  | string                         | Date (in ISO 8601 format: yyyy-MM-dd'T'HH:mm:ss.SSS'Z') when the remote configuration management job was started.<br /><br />**Example:** `2020-11-05T08:15:30.144Z`                                                |
