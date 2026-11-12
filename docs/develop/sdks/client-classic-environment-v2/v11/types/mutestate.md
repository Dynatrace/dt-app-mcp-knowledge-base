### MuteState

Metadata of the muted state of a security problem in relation to an event.

| Name    | Type                                                                                                                                             | Description                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| comment | string                                                                                                                                           | A user's comment.                              |
| reason  | "OTHER" \| "AFFECTED" \| "CONFIGURATION_NOT_AFFECTED" \| "FALSE_POSITIVE" \| "IGNORE" \| "INITIAL_STATE" \| "VULNERABLE_CODE_NOT_IN_USE" | The reason for the mute state change.          |
| user    | string                                                                                                                                           | The user who has muted or unmuted the problem. |
