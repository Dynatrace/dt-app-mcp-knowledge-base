### PlainKeystrokesInputDto

Credential-based input for keystrokes step.

| Name                 | Type                | Description                                                                                                                                                                  |
| -------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| masked               | boolean             | Boolean value set to true if key strokes should be masked. If not defined in request, the default value will be set to false.                                                |
| textValue (required) | string              | String value containing the text.                                                                                                                                            |
| type (required)      | "PLAIN" \| "SECURE" | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureKeystrokesInputDto
* `PLAIN`
   -> PlainKeystrokesInputDto |
