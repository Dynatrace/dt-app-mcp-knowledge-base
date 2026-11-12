### RemediationItemMuteStateChange

An updated configuration of the remediation item's mute state.

| Name               | Type                                                                                                                                             | Description                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| comment (required) | string                                                                                                                                           | A comment about the mute state change reason.   |
| muted (required)   | boolean                                                                                                                                          | The desired mute state of the remediation item. |
| reason (required)  | "OTHER" \| "AFFECTED" \| "CONFIGURATION_NOT_AFFECTED" \| "FALSE_POSITIVE" \| "IGNORE" \| "INITIAL_STATE" \| "VULNERABLE_CODE_NOT_IN_USE" | The reason for the mute state change.           |
