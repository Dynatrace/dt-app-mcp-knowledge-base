### SecurityProblemsBulkMute

Information on muting several security problems.

| Name                          | Type                                                                                                           | Description                                   |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| comment                       | string                                                                                                         | A comment about the muting reason.            |
| reason (required)             | "OTHER" \| "CONFIGURATION_NOT_AFFECTED" \| "FALSE_POSITIVE" \| "IGNORE" \| "VULNERABLE_CODE_NOT_IN_USE" | The reason for muting the security problems.  |
| securityProblemIds (required) | Array\<string>                                                                                                 | The ids of the security problems to be muted. |
