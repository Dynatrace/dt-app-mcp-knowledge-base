### Identity

An Identity describing either a user, a group, or the all-users group (applying to all users).

| Name            | Type                             | Description                                                                                |
| --------------- | -------------------------------- | ------------------------------------------------------------------------------------------ |
| id              | string                           | The user id or user group id if type is 'user' or 'group', missing if type is 'all-users'. |
| type (required) | "all-users" \| "group" \| "user" | The type of the identity.                                                                  |
