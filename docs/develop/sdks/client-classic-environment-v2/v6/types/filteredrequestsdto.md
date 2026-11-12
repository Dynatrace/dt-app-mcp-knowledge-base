### FilteredRequestsDto

Filtered requests of a Browser Monitor.

| Name                | Type                                          | Description                        |
| ------------------- | --------------------------------------------- | ---------------------------------- |
| mode (required)     | "BLOCK" \| "ALLOW"                            | Filter mode for filtered requests. |
| requests (required) | Array\<[RequestFilterDto](#requestfilterdto)> | Requests to be filtered.           |
