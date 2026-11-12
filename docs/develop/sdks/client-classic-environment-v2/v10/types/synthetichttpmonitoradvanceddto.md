### SyntheticHttpMonitorAdvancedDto

Http monitor's settings.

| Name                            | Type           | Description                                                           |
| ------------------------------- | -------------- | --------------------------------------------------------------------- |
| connectTimeout                  | null \| number | Connect timeout per request in ms.                                    |
| dnsQueryTimeout                 | null \| number | DNS query timeout in ms.                                              |
| maxCustomScriptSize             | null \| number | Maximum size of each pre- or post- execution script size in bytes.    |
| maxHeaderSize                   | null \| number | Maximum size of each request header in bytes.                         |
| maxRequestBodySize              | null \| number | Maximum request body size in bytes.                                   |
| maxResponseBodyReadByScriptSize | null \| number | Maximum size of response body read by post-execution script in bytes. |
| maxResponseBodySize             | null \| number | Maximum response body size in bytes.                                  |
| monitorExecutionTimeout         | null \| number | Monitor execution timeout in ms.                                      |
| requestTimeout                  | null \| number | Request timeout in ms.                                                |
| scriptExecutionTimeout          | null \| number | Pre- or post- execution script timeout in ms.                         |
