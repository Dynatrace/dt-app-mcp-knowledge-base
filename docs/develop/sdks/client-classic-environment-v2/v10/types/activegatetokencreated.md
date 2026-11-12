### ActiveGateTokenCreated

The newly created ActiveGate token.

| Name             | Type   | Description                                                                                                                                                 |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expirationDate   | string | The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).<br /><br />**Example:** `2020-11-24T08:15:30.144Z`                           |
| id (required)    | string | The ActiveGate token identifier, consisting of [prefix and public part](https://dt-url.net/rn00tjg) of the token.<br /><br />**Example:** `dt0g02.4KWZO5EF` |
| token (required) | string | The secret of the token.<br /><br />**Example:** `dt0g02.4KWZO5EF.XT47R5DRADJIZUFOX4UDNOKTSUSABGLN7XSMJG7UXHRXKNY4WLORH4OF4T75MG7E`                         |
