### PlainKeystrokesInputDto

Credential-based input for keystrokes step.

| Name                 | Type                | Description                                                                                                                                                                  |
| -------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| masked               | null \| boolean     | Boolean value set to true only if key strokes input `textValue` field is encoded by recorder and should be decoded by VUP. Set to `false` by default.                        |
| textValue (required) | string              | String value containing the text.                                                                                                                                            |
| type (required)      | "PLAIN" \| "SECURE" | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureKeystrokesInputDto
* `PLAIN`
   -> PlainKeystrokesInputDto |
