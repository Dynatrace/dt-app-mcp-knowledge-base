### RemediationItemMuteState

The mute state of a remediation item of a security problem.

| Name                 | Type                                                                                                                                             | Description                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| comment              | string                                                                                                                                           | A short comment about the most recent mute state change.               |
| lastUpdatedTimestamp | number                                                                                                                                           | The timestamp (UTC milliseconds) of the last update of the mute state. |
| muted                | boolean                                                                                                                                          | The remediation is (`true`) or is not (`false`) muted.                 |
| reason               | "OTHER" \| "AFFECTED" \| "CONFIGURATION_NOT_AFFECTED" \| "FALSE_POSITIVE" \| "IGNORE" \| "INITIAL_STATE" \| "VULNERABLE_CODE_NOT_IN_USE" | The reason for the most recent mute state change.                      |
| user                 | string                                                                                                                                           | The user who last changed the mute state.                              |
