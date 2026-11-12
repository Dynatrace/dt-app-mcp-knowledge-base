### EntrypointPayload

Describes a payload sent to an entrypoint during an attack.

| Name  | Type                                                                                                                                                                                | Description                         |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| name  | null \| string                                                                                                                                                                      | Name of the payload, if applicable. |
| type  | "UNKNOWN" \| "HTTP_BODY" \| "HTTP_COOKIE" \| "HTTP_HEADER_NAME" \| "HTTP_HEADER_VALUE" \| "HTTP_OTHER" \| "HTTP_PARAMETER_NAME" \| "HTTP_PARAMETER_VALUE" \| "HTTP_URL" | Type of the payload.                |
| value | string                                                                                                                                                                              | Value of the payload.               |
