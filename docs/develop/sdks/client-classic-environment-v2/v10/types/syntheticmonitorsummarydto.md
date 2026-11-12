### SyntheticMonitorSummaryDto

Basic monitor data.

| Name                | Type                                     | Description                                                                                                                                |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| enabled             | null \| boolean                          | If true, the monitor is enabled.                                                                                                           |
| entityId (required) | string                                   | The entity id of the monitor.                                                                                                              |
| externalId          | null \| string                           | Stable identifier used by configuration-as-code tools (such as Monaco) to manage this monitor across environments. Unique per environment. |
| name                | null \| string                           | The name of the monitor.                                                                                                                   |
| type (required)     | "BROWSER" \| "HTTP" \| "MULTI_PROTOCOL" | The type of the monitor.                                                                                                                   |
