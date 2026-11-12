### RequestHeaderOptionsDto

Header Options of a Browser Monitor.

| Name                        | Type                                                  | Description                                 |
| --------------------------- | ----------------------------------------------------- | ------------------------------------------- |
| matchingPatterns (required) | Array\<string>                                        | Apply headers to requests matching pattern. |
| requestHeaders (required)   | Array\<[MonitorRequestHeader](#monitorrequestheader)> | Request headers list.                       |
