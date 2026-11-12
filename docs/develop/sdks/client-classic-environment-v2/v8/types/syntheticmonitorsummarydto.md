### SyntheticMonitorSummaryDto

Basic monitor data.

| Name                | Type                                     | Description                      |
| ------------------- | ---------------------------------------- | -------------------------------- |
| enabled             | boolean                                  | If true, the monitor is enabled. |
| entityId (required) | string                                   | The entity id of the monitor.    |
| name                | string                                   | The name of the monitor.         |
| type (required)     | "BROWSER" \| "HTTP" \| "MULTI_PROTOCOL" | The type of the monitor.         |
