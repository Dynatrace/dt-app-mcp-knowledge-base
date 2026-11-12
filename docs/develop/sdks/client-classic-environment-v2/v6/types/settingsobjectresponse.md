### SettingsObjectResponse

The response to a creation- or update-request.

| Name            | Type            | Description                                                                                                                        |
| --------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| code (required) | number          | The HTTP status code for the object.                                                                                               |
| error           | [Error](#error) |                                                                                                                                    |
| invalidValue    | AnyValue        | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema. |
| objectId        | string          | For a successful request, the ID of the created or modified settings object.                                                       |
