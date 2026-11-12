### SyntheticHttpAuthenticationDto

The Http step's authentication.

| Name                   | Type                                            | Description                                    |
| ---------------------- | ----------------------------------------------- | ---------------------------------------------- |
| credentials (required) | string                                          | Credential vault identifier.                   |
| kdcIp                  | null \| string                                  | KDC IP in case KERBEROS auth type is selected. |
| realmName              | null \| string                                  | Realm name in case KERBEROS type is selected.  |
| type (required)        | "KERBEROS" \| "BASIC_AUTHENTICATION" \| "NTLM" | Authentication type.                           |
