### ExecutionSimpleResults

Contains basic results of the monitor's on-demand execution.

| Name                                        | Type    | Description                                                                                     |
| ------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------- |
| chromeError                                 | boolean | Informs whether is Chrome error.                                                                |
| engineId                                    | number  | Synthetic engine id on which monitor was executed.                                              |
| errorCode                                   | string  | Error code.                                                                                     |
| executedSteps                               | number  | Number of the executed steps by Synthetic engine                                                |
| failureMessage                              | string  | Failure message.                                                                                |
| hostNameResolutionTime                      | number  | A hostname resolution time measured in milliseconds.                                            |
| httperror                                   | boolean | Informs whether is HTTP error.                                                                  |
| ~~peerCertificateExpiryDate~~**DEPRECATED** | number  | An expiry date of the first SSL certificate from the certificate chain.                         |
| publicLocation                              | boolean | Flag informs whether request was executed on public location.                                   |
| redirectionTime                             | number  | Total number of milliseconds spent on handling all redirect requests, measured in milliseconds. |
| redirectsCount                              | number  | Number of redirects.                                                                            |
| responseBodySizeLimitExceeded               | boolean | A flag indicating that the response payload size limit of 10MB has been exceeded.               |
| responseSize                                | number  | Request's response size in bytes.                                                               |
| responseStatusCode                          | number  | Response status code.                                                                           |
| startTimestamp                              | number  | Start timestamp.                                                                                |
| status                                      | string  | Execution status.                                                                               |
| tcpConnectTime                              | number  | A TCP connect time measured in milliseconds.                                                    |
| timeToFirstByte                             | number  | A time to first byte measured in milliseconds.                                                  |
| tlsHandshakeTime                            | number  | A TLS handshake time measured in milliseconds.                                                  |
| totalTime                                   | number  | A total time measured in milliseconds.                                                          |
