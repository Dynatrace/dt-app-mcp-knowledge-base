### ActiveGateToken

Metadata of an ActiveGate token.

| Name                      | Type                       | Description                                                                                                                                                             |
| ------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| activeGateType (required) | "CLUSTER" \| "ENVIRONMENT" | The type of the ActiveGate for which the token is valid.                                                                                                                |
| creationDate (required)   | string                     | The token creation date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).<br /><br />**Example:** `2020-11-22T08:15:30.144Z`                                         |
| expirationDate            | string                     | The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`). If not set, the token never expires. <br /><br />**Example:** `2020-11-24T08:15:30.144Z` |
| id (required)             | string                     | The ActiveGate token identifier, consisting of [prefix and public part](https://dt-url.net/rn00tjg) of the token.<br /><br />**Example:** `dt0g02.4KWZO5EF`             |
| lastUsedDate              | string                     | The token last used date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).<br /><br />**Example:** `2020-11-23T08:15:30.144Z`                                        |
| name (required)           | string                     | The name of the token.<br /><br />**Example:** `myToken`                                                                                                                |
| owner (required)          | string                     | The owner of the token.<br /><br />**Example:** `john.smith`                                                                                                            |
| seedToken                 | boolean                    | The token is a seed token (`true`) or an individual token (`false`).<br /><br />**Example:** `false`                                                                    |
