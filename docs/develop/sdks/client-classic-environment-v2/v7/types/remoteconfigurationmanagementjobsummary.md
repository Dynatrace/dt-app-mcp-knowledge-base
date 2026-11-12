### RemoteConfigurationManagementJobSummary

Remote configuration management job with basic data.

| Name       | Type                           | Description                                                                                                                                                      |
| ---------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| endTime    | string                         | Date (in ISO 8601 format: yyyy-MM-dd'T'HH:mm:ss.SSS'Z') when the remote configuration management job was finished. This field is present only for finished jobs. |
| entityType | "ACTIVE_GATE" \| "ONE_AGENT" | Type of entities modified by remote configuration management.                                                                                                    |
| id         | string                         | The ID of the remote configuration management job.                                                                                                               |
| startTime  | string                         | Date (in ISO 8601 format: yyyy-MM-dd'T'HH:mm:ss.SSS'Z') when the remote configuration management job was started.                                                |
