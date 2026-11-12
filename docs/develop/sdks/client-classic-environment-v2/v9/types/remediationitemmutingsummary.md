### RemediationItemMutingSummary

Summary of (un-)muting a remediation item.

| Name                                | Type                                                                                                       | Description                                                                               |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| muteStateChangeTriggered (required) | boolean                                                                                                    | Whether a mute state change for the given remediation item was triggered by this request. |
| reason                              | "ALREADY_MUTED" \| "ALREADY_UNMUTED" \| "REMEDIATION_ITEM_NOT_AFFECTED_BY_GIVEN_SECURITY_PROBLEM" | Contains a reason, in case the requested operation was not executed.                      |
| remediationItemId (required)        | string                                                                                                     | The id of the remediation item that will be (un-)muted.                                   |
