### SecureAuthenticationDto

Secure authentication dto for Browser Monitor step.

| Name                    | Type                                              | Description                                                                                                                                                                |
| ----------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authServerAllowlist     | null \| string                                    | String containing the allowed servers of KERBEROS authentication. Can be defined only for `KERBEROS` authentication type.                                                  |
| credentialId (required) | string                                            | Id of the username and password credential which will be used for authentication.                                                                                          |
| domain                  | null \| string                                    | String containing the KERBEROS authentication domain. Can be defined only for `KERBEROS` authentication type.                                                              |
| inputType (required)    | "PLAIN" \| "SECURE"                               | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureAuthenticationDto
* `PLAIN`
   -> PlainAuthenticationDto |
| type (required)         | "HTTP_AUTHENTICATION" \| "KERBEROS" \| "WEBFORM" | Type of authentication.                                                                                                                                                    |
