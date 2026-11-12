### SecureKeystrokesInputDto

Credential-based input for keystrokes step.

| Name                       | Type                                | Description                                                                                                                                                                  |
| -------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| credentialField (required) | "TOKEN" \| "USERNAME" \| "PASSWORD" | Enum value of the credential field.                                                                                                                                          |
| credentialId (required)    | string                              | String value containing the credential id.                                                                                                                                   |
| type (required)            | "PLAIN" \| "SECURE"                 | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureKeystrokesInputDto
* `PLAIN`
   -> PlainKeystrokesInputDto |
