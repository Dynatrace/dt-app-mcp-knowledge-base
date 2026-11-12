### AuthenticationDto

Authentication dto for Browser Monitor step.

| Name                 | Type                                              | Description                                                                                                                                                                |
| -------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authServerAllowlist  | string                                            | String containing the allowed servers of KERBEROS authentication. Can be defined only for `KERBEROS` authentication type.                                                  |
| domain               | string                                            | String containing the KERBEROS authentication domain. Can be defined only for `KERBEROS` authentication type.                                                              |
| inputType (required) | "PLAIN" \| "SECURE"                               | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureAuthenticationDto
* `PLAIN`
   -> PlainAuthenticationDto |
| type (required)      | "HTTP_AUTHENTICATION" \| "KERBEROS" \| "WEBFORM" | Type of authentication.                                                                                                                                                    |
