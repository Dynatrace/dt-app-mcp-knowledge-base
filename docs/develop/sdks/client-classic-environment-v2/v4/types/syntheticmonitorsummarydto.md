### SyntheticMonitorSummaryDto

Basic monitor data.

| Name                | Type                                                       | Description                                        |
| ------------------- | ---------------------------------------------------------- | -------------------------------------------------- |
| enabled             | boolean                                                    | If true, the monitor is enabled. *default:* `true` |
| entityId (required) | string                                                     | The entity id of the monitor.                      |
| name (required)     | string                                                     | The name of the monitor.                           |
| type (required)     | "BROWSER" \| "HTTP" \| "THIRD_PARTY" \| "MULTI_PROTOCOL" |                                                    |
