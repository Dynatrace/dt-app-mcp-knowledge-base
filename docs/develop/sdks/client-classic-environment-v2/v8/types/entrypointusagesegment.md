### EntryPointUsageSegment

Describes one segment that was passed into a usage and the associated source name and type.

| Name               | Type                                                                                                                                                                                | Description                                                                              |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| segmentType        | "MALICIOUS_INPUT" \| "REGULAR_INPUT" \| "TAINTED_INPUT"                                                                                                                          | The type of this input segment.                                                          |
| segmentValue       | string                                                                                                                                                                              | The value of this input segment.                                                         |
| sourceArgumentName | string                                                                                                                                                                              | The name used in the source for this segment.                                            |
| sourceType         | "UNKNOWN" \| "HTTP_BODY" \| "HTTP_COOKIE" \| "HTTP_HEADER_NAME" \| "HTTP_HEADER_VALUE" \| "HTTP_OTHER" \| "HTTP_PARAMETER_NAME" \| "HTTP_PARAMETER_VALUE" \| "HTTP_URL" | The type of the HTTP request part that contains the value that was used in this segment. |
