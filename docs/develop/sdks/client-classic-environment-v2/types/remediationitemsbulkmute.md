### RemediationItemsBulkMute

Information on muting several remediation items.

| Name                          | Type                                                                                                           | Description                                   |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| comment                       | string                                                                                                         | A comment about the muting reason.            |
| reason (required)             | "OTHER" \| "CONFIGURATION_NOT_AFFECTED" \| "FALSE_POSITIVE" \| "IGNORE" \| "VULNERABLE_CODE_NOT_IN_USE" | The reason for muting the remediation items.  |
| remediationItemIds (required) | Array\<string>                                                                                                 | The ids of the remediation items to be muted. |
