### AccessorPermissions

An accessor identity and it's associated permissions.

| Name        | Type                  | Description                                                                                    |
| ----------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| accessor    | [Identity](#identity) | An Identity describing either a user, a group, or the all-users group (applying to all users). |
| permissions | Array\<"r" \| "w">    | The permissions associated with the accessor.                                                  |
