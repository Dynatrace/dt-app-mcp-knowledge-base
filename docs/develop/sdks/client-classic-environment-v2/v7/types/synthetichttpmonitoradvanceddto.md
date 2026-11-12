### SyntheticHttpMonitorAdvancedDto

Http monitor's settings.

| Name                            | Type   | Description                                                           |
| ------------------------------- | ------ | --------------------------------------------------------------------- |
| connectTimeout                  | number | Connect timeout per request in ms.                                    |
| dnsQueryTimeout                 | number | DNS query timeout in ms.                                              |
| maxCustomScriptSize             | number | Maximum size of each pre- or post- execution script size in bytes.    |
| maxHeaderSize                   | number | Maximum size of each request header in bytes.                         |
| maxRequestBodySize              | number | Maximum request body size in bytes.                                   |
| maxResponseBodyReadByScriptSize | number | Maximum size of response body read by post-execution script in bytes. |
| maxResponseBodySize             | number | Maximum response body size in bytes.                                  |
| monitorExecutionTimeout         | number | Monitor execution timeout in ms.                                      |
| requestTimeout                  | number | Request timeout in ms.                                                |
| scriptExecutionTimeout          | number | Pre- or post- execution script timeout in ms.                         |
