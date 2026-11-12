### EnablementDto

Browser monitor enablement settings.

| Name                         | Type                                            | Description                                                                                                                             |
| ---------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| enableOnGrail (required)     | boolean                                         | Enable 3rd gen JS agent reporting. Relevant only for grail-enabled SaaS environments.                                                   |
| origin                       | "UNKNOWN" \| "DEFAULT" \| "MONITOR" \| "TENANT" | Indicates the origin of these settings.                                                                                                 |
| performanceMetric (required) | "classic.total_duration" \| "duration"         | The name of the performance metric, used for reporting on performance charts and for comparison against defined performance thresholds. |
