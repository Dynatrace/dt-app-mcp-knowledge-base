### EventIngestResult

The result of a created event report.

| Name          | Type                                                                            | Description                              |
| ------------- | ------------------------------------------------------------------------------- | ---------------------------------------- |
| correlationId | string                                                                          | The correlation ID of the created event. |
| status        | "INVALID_ENTITY_TYPE" \| "INVALID_METADATA" \| "INVALID_TIMESTAMPS" \| "OK" | The status of the ingestion.             |
