### RemediationItemsBulkUnmute

Information on un-muting several remediation items.

| Name                          | Type           | Description                                      |
| ----------------------------- | -------------- | ------------------------------------------------ |
| comment                       | string         | A comment about the un-muting reason.            |
| reason (required)             | "AFFECTED"     | The reason for un-muting the remediation items.  |
| remediationItemIds (required) | Array\<string> | The ids of the remediation items to be un-muted. |
