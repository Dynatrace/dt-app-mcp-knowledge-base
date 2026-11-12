### ActiveGateTokenInfoDto

Information about ActiveGate token.

| Name          | Type                                                                         | Description                                                                                                                                                 |
| ------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| environmentId | string                                                                       | The environment ID to which the token belongs. Only available if more than one environment is supported.                                                    |
| id            | string                                                                       | The ActiveGate token identifier, consisting of [prefix and public part](https://dt-url.net/rn00tjg) of the token.<br /><br />**Example:** `dt0g02.4KWZO5EF` |
| state         | "UNKNOWN" \| "ABSENT" \| "EXPIRING" \| "INVALID" \| "UNSUPPORTED" \| "VALID" | State of the ActiveGate token.                                                                                                                              |
