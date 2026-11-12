### RequestFilterDto

Request filter for Browser Monitor.

| Name                       | Type                                                                | Description                                       |
| -------------------------- | ------------------------------------------------------------------- | ------------------------------------------------- |
| matchingPattern (required) | string                                                              | Regex for request that filter will be applied to. |
| type (required)            | "REGEX" \| "STARTS_WITH" \| "ENDS_WITH" \| "CONTAINS" \| "EQUALS" | Filter type.                                      |
