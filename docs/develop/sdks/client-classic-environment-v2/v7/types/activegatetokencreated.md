### ActiveGateTokenCreated

The newly created ActiveGate token.

| Name             | Type   | Description                                                                                                       |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| expirationDate   | string | The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).                                    |
| id (required)    | string | The ActiveGate token identifier, consisting of [prefix and public part](https://dt-url.net/rn00tjg) of the token. |
| token (required) | string | The secret of the token.                                                                                          |
