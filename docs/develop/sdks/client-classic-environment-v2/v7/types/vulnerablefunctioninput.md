### VulnerableFunctionInput

Describes what got passed into the code level vulnerability.

| Name          | Type                                                                      | Description               |
| ------------- | ------------------------------------------------------------------------- | ------------------------- |
| inputSegments | Array\<[VulnerableFunctionInputSegment](#vulnerablefunctioninputsegment)> | A list of input segments. |
| type          | "COMMAND" \| "HTTP_CLIENT" \| "JNDI" \| "SQL_STATEMENT"                 | The type of the input.    |
