### SecurityProblemsBulkUnmute

Information on un-muting several security problems.

| Name                          | Type           | Description                                      |
| ----------------------------- | -------------- | ------------------------------------------------ |
| comment                       | string         | A comment about the un-muting reason.            |
| reason (required)             | "AFFECTED"     | The reason for un-muting the security problems.  |
| securityProblemIds (required) | Array\<string> | The ids of the security problems to be un-muted. |
