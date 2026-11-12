### SecurityProblemBulkMutingSummary

Summary of (un-)muting a security problem.

| Name                                | Type                                   | Description                                                                               |
| ----------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------- |
| muteStateChangeTriggered (required) | boolean                                | Whether a mute state change for the given security problem was triggered by this request. |
| reason                              | "ALREADY_MUTED" \| "ALREADY_UNMUTED" | Contains a reason, in case the requested operation was not executed.                      |
| securityProblemId (required)        | string                                 | The id of the security problem that was (un-)muted.                                       |
