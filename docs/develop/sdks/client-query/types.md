## Types

### AutocompleteRequest

| Name                         | Type                          | Description                                                                                                                                                                                                                                                                                                                 |
| ---------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cursorPosition               | number                        | No upper limit but must be lower than length of query. No default value.<br /><br />**Minimum:** `0`                                                                                                                                                                                                                        |
| enforceQueryConsumptionLimit | boolean                       | Boolean to indicate if the query consumption limit should be enforced                                                                                                                                                                                                                                                       |
| locale                       | string                        | The query locale. If none specified, then a language/country neutral locale is chosen. The input values take the ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore. For instance, both values are valid 'en' or 'en_US'.<br /><br />**Example:** `en_US`                      |
| maxDataSuggestions           | number                        | Limit the number of data suggestions, such as field names. No upper limit. No default value.<br /><br />**Minimum:** `0`                                                                                                                                                                                                    |
| query (required)             | string                        | The full query string.<br /><br />**Example:** `fetch events`<br />`\| filter event.type == "davis" AND davis.status != "CLOSED"`<br />`\| fields timestamp, davis.title, davis.underMaintenance, davis.status`<br />`\| sort timestamp`<br />`\| limit 10`                                                                 |
| queryOptions                 | [QueryOptions](#queryoptions) | Query options enhance query functionality for Dynatrace internal services.                                                                                                                                                                                                                                                  |
| timezone                     | string                        | The query timezone. If none is specified, UTC is used as fallback. The list of valid input values matches that of the IANA Time Zone Database (TZDB). It accepts values in their canonical names like 'Europe/Paris', the abbreviated version like CET or the UTC offset format like '+01:00'<br /><br />**Example:** `UTC` |

### AutocompleteResponse

The response of the autocomplete call.

| Name                   | Type                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| optional (required)    | boolean                                                   | True if the suggestions are optional.                                                                                                                                                                                                                                                                                                                                                      |
| suggestedTtlSeconds    | number                                                    | Suggested duration in seconds, for how long the response may be cached and reused by the client. It is derived from the volatility of the suggestions on the server (if the suggestions are static, how long the server will cache the volatile suggestions, ...). If not provided, then the result may be cached for long time. Value below 1 means that the result should not be cached. |
| suggestions (required) | Array\<[AutocompleteSuggestion](#autocompletesuggestion)> | The list of suggestions.                                                                                                                                                                                                                                                                                                                                                                   |

### AutocompleteSuggestion

Single suggestion for completion of the query.

| Name                              | Type                                                              | Description                                                           |
| --------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| alreadyTypedCharacters (required) | number                                                            | Number of characters that the user already typed for this suggestion. |
| parts (required)                  | Array\<[AutocompleteSuggestionPart](#autocompletesuggestionpart)> | List of suggestion parts.                                             |
| suggestion (required)             | string                                                            | The suggested continuation of the query.                              |

### AutocompleteSuggestionPart

Part of the suggestion.

| Name                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| category              | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | The field category of the suggestion part.                     |
| currentParameterKey   | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | The current parameter key context for the suggestion part.     |
| dataType              | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | The data type associated with the suggestion part.             |
| fieldReference        | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | A reference to the field associated with the suggestion part.  |
| info                  | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | The type of the suggestion.                                    |
| priority              | null \| number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | The priority of the suggestion part; higher values rank first. |
| reference             | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | A generic reference string for the suggestion part.            |
| referenceType         | "SPACE" \| "LINEBREAK" \| "INDENT" \| "PIPE" \| "DOT" \| "COLON" \| "COMMA" \| "ASSIGNMENT" \| "BRACE_OPEN" \| "BRACE_CLOSE" \| "BRACKET_OPEN" \| "BRACKET_CLOSE" \| "PARENTHESIS_OPEN" \| "PARENTHESIS_CLOSE" \| "QUOTE" \| "SINGLE_QUOTE" \| "SLASH" \| "BOOLEAN_TRUE" \| "BOOLEAN_FALSE" \| "NULL" \| "COMMAND_NAME" \| "PARAMETER_KEY" \| "PARAMETER_VALUE_SCOPE" \| "FUNCTION_NAME" \| "TIMESERIES_AGGREGATION" \| "TIMESERIES_AGGREGATION_EXPRESSION" \| "OPERATOR" \| "SEARCH_OPERATOR" \| "TRAVERSAL_OPERATOR" \| "TRAVERSAL_RELATION_NAME" \| "TRAVERSAL_HOP_COUNT" \| "SIMPLE_IDENTIFIER" \| "DATA_OBJECT" \| "NUMBER" \| "STRING" \| "TIME_UNIT" \| "TIMESTAMP_VALUE" \| "METRIC_KEY" \| "VARIABLE" \| "END_COMMENT" \| "UID_VALUE" \| "PARSE_PATTERN" \| "FIELD_PATTERN" \| "SEARCH_PATTERN" \| "ENTITY_SELECTOR_PART" \| "SAVED_TABLE_NAME" \| "TABULAR_FILE_NAME" \| "PARAMETER_MODIFIER" \| "FIELD_MODIFIER" \| "ENTITY_TYPE" \| "ENTITY_ATTRIBUTE" \| "SMARTSCAPE_ID_VALUE" \| "ENUM_STRING" \| "FIELD_PREFIX" \| "BUCKET" \| "SMARTSCAPE_NODE_PATTERN" \| "SMARTSCAPE_EDGE_PATTERN" \| "SMARTSCAPE_NODE_TYPE" \| "SMARTSCAPE_EDGE_TYPE" \| "JSON_PATH" \| "URL" \| "SEMICOLON" \| "FIELD_VALUE" \| "UNKNOWN" \| "FIELD_NAME" \| "SYNOPSIS_INFO" | The token type of the reference.                               |
| suggestion (required) | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | The suggested continuation of the query.                       |
| synopsis              | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | The synopsis of the suggestion.                                |
| type (required)       | "SPACE" \| "LINEBREAK" \| "INDENT" \| "PIPE" \| "DOT" \| "COLON" \| "COMMA" \| "ASSIGNMENT" \| "BRACE_OPEN" \| "BRACE_CLOSE" \| "BRACKET_OPEN" \| "BRACKET_CLOSE" \| "PARENTHESIS_OPEN" \| "PARENTHESIS_CLOSE" \| "QUOTE" \| "SINGLE_QUOTE" \| "SLASH" \| "BOOLEAN_TRUE" \| "BOOLEAN_FALSE" \| "NULL" \| "COMMAND_NAME" \| "PARAMETER_KEY" \| "PARAMETER_VALUE_SCOPE" \| "FUNCTION_NAME" \| "TIMESERIES_AGGREGATION" \| "TIMESERIES_AGGREGATION_EXPRESSION" \| "OPERATOR" \| "SEARCH_OPERATOR" \| "TRAVERSAL_OPERATOR" \| "TRAVERSAL_RELATION_NAME" \| "TRAVERSAL_HOP_COUNT" \| "SIMPLE_IDENTIFIER" \| "DATA_OBJECT" \| "NUMBER" \| "STRING" \| "TIME_UNIT" \| "TIMESTAMP_VALUE" \| "METRIC_KEY" \| "VARIABLE" \| "END_COMMENT" \| "UID_VALUE" \| "PARSE_PATTERN" \| "FIELD_PATTERN" \| "SEARCH_PATTERN" \| "ENTITY_SELECTOR_PART" \| "SAVED_TABLE_NAME" \| "TABULAR_FILE_NAME" \| "PARAMETER_MODIFIER" \| "FIELD_MODIFIER" \| "ENTITY_TYPE" \| "ENTITY_ATTRIBUTE" \| "SMARTSCAPE_ID_VALUE" \| "ENUM_STRING" \| "FIELD_PREFIX" \| "BUCKET" \| "SMARTSCAPE_NODE_PATTERN" \| "SMARTSCAPE_EDGE_PATTERN" \| "SMARTSCAPE_NODE_TYPE" \| "SMARTSCAPE_EDGE_TYPE" \| "JSON_PATH" \| "URL" \| "SEMICOLON" \| "FIELD_VALUE" \| "UNKNOWN" \| "FIELD_NAME" \| "SYNOPSIS_INFO" | The type of the autocomplete token.                            |

### BucketContribution

| Name                | Type   | Description      |
| ------------------- | ------ | ---------------- |
| matchedRecordsRatio | number | **Minimum:** `0` |
| name                | string |                  |
| scannedBytes        | number | **Minimum:** `0` |
| table               | string |                  |

### Contributions

| Name    | Type                                              |
| ------- | ------------------------------------------------- |
| buckets | Array\<[BucketContribution](#bucketcontribution)> |

### DQLAlternativeNode

The DQL node that has alternatives.

| Name                    | Type                                       | Description                                                                                                                    |
| ----------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| alternatives (required) | object                                     | The different alternatives.                                                                                                    |
| isOptional (required)   | boolean                                    | True if the node is optional.                                                                                                  |
| nodeType (required)     | "TERMINAL" \| "CONTAINER" \| "ALTERNATIVE" | The type of the node.                                                                                                          |
| tokenPosition           | [TokenPosition](#tokenposition)            | The position of a token in a query string used for errors and notification to map the message to a specific part of the query. |

### DQLContainerNode

The DQL node that contains other nodes.

| Name                  | Type                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| children (required)   | Array\<[DQLNode](#dqlnode)>                                                                                                                                                                                                                                                                                                                                                 | The list of children nodes.                                                                                                    |
| isOptional (required) | boolean                                                                                                                                                                                                                                                                                                                                                                     | True if the node is optional.                                                                                                  |
| nodeType (required)   | "TERMINAL" \| "CONTAINER" \| "ALTERNATIVE"                                                                                                                                                                                                                                                                                                                                  | The type of the node.                                                                                                          |
| tokenPosition         | [TokenPosition](#tokenposition)                                                                                                                                                                                                                                                                                                                                             | The position of a token in a query string used for errors and notification to map the message to a specific part of the query. |
| type (required)       | "QUERY" \| "EXECUTION_BLOCK" \| "COMMAND" \| "COMMAND_SEPARATOR" \| "PARAMETER_WITH_KEY" \| "GROUP" \| "PARAMETERS" \| "PARAMETER_NAMING" \| "PARAMETER_ASSIGNMENT" \| "PARAMETER_SEPARATOR" \| "FUNCTION" \| "FUNCTION_PART" \| "EXPRESSION" \| "IDENTIFIER" \| "SOURCE_ID" \| "DURATION" \| "TIMESTAMP" \| "TIMEFRAME" \| "TRAVERSAL_PATH" \| "TRAVERSAL_STEP" | The type of the node.                                                                                                          |

### DQLNode

General Node in the DQL query.

| Name                  | Type                                       | Description                                                                                                                    |
| --------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| isOptional (required) | boolean                                    | True if the node is optional.                                                                                                  |
| nodeType (required)   | "TERMINAL" \| "CONTAINER" \| "ALTERNATIVE" | The type of the node.                                                                                                          |
| tokenPosition         | [TokenPosition](#tokenposition)            | The position of a token in a query string used for errors and notification to map the message to a specific part of the query. |

### DQLTerminalNode

Node that represents single token.

| Name                              | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                      |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| canonicalString (required)        | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Canonical form.                                                                                                                  |
| isMandatoryOnUserOrder (required) | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | For optional items only: whether this node becomes mandatory when user order is used. True only for some optional 'ghost braces' |
| isOptional (required)             | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | True if the node is optional.                                                                                                    |
| nodeType (required)               | "TERMINAL" \| "CONTAINER" \| "ALTERNATIVE"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | The type of the node.                                                                                                            |
| tokenPosition                     | [TokenPosition](#tokenposition)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | The position of a token in a query string used for errors and notification to map the message to a specific part of the query.   |
| type (required)                   | "SPACE" \| "LINEBREAK" \| "INDENT" \| "PIPE" \| "DOT" \| "COLON" \| "COMMA" \| "ASSIGNMENT" \| "BRACE_OPEN" \| "BRACE_CLOSE" \| "BRACKET_OPEN" \| "BRACKET_CLOSE" \| "PARENTHESIS_OPEN" \| "PARENTHESIS_CLOSE" \| "QUOTE" \| "SINGLE_QUOTE" \| "SLASH" \| "BOOLEAN_TRUE" \| "BOOLEAN_FALSE" \| "NULL" \| "COMMAND_NAME" \| "PARAMETER_KEY" \| "PARAMETER_VALUE_SCOPE" \| "FUNCTION_NAME" \| "TIMESERIES_AGGREGATION" \| "TIMESERIES_AGGREGATION_EXPRESSION" \| "OPERATOR" \| "SEARCH_OPERATOR" \| "TRAVERSAL_OPERATOR" \| "TRAVERSAL_RELATION_NAME" \| "TRAVERSAL_HOP_COUNT" \| "SIMPLE_IDENTIFIER" \| "DATA_OBJECT" \| "NUMBER" \| "STRING" \| "TIME_UNIT" \| "TIMESTAMP_VALUE" \| "METRIC_KEY" \| "VARIABLE" \| "END_COMMENT" \| "UID_VALUE" \| "PARSE_PATTERN" \| "FIELD_PATTERN" \| "SEARCH_PATTERN" \| "ENTITY_SELECTOR_PART" \| "SAVED_TABLE_NAME" \| "TABULAR_FILE_NAME" \| "PARAMETER_MODIFIER" \| "FIELD_MODIFIER" \| "ENTITY_TYPE" \| "ENTITY_ATTRIBUTE" \| "SMARTSCAPE_ID_VALUE" \| "ENUM_STRING" \| "FIELD_PREFIX" \| "BUCKET" \| "SMARTSCAPE_NODE_PATTERN" \| "SMARTSCAPE_EDGE_PATTERN" \| "SMARTSCAPE_NODE_TYPE" \| "SMARTSCAPE_EDGE_TYPE" \| "JSON_PATH" \| "URL" \| "SEMICOLON" \| "FIELD_VALUE" \| "UNKNOWN" \| "FIELD_NAME" \| "SYNOPSIS_INFO" | The type of the autocomplete token.                                                                                              |

### ErrorEnvelope

An 'envelope' error object that has the mandatory error object.

| Name             | Type                            | Description                  |
| ---------------- | ------------------------------- | ---------------------------- |
| error (required) | [ErrorResponse](#errorresponse) | The response for error state |

### ErrorResponse

The response for error state

| Name               | Type                                          | Description                                             |
| ------------------ | --------------------------------------------- | ------------------------------------------------------- |
| code (required)    | number                                        | Error code, which normally matches the HTTP error code. |
| details            | [ErrorResponseDetails](#errorresponsedetails) | Detailed information about the error.                   |
| message (required) | string                                        | A short, clear error message without details            |
| retryAfterSeconds  | number                                        | The number of seconds to wait until the next retry.     |

### ErrorResponseDetails

Detailed information about the error.

| Name                             | Type                                                                                                  | Description                                                                                                                    |
| -------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| arguments                        | Array\<string>                                                                                        | The arguments for the message format.                                                                                          |
| constraintViolations             | Array\<[ErrorResponseDetailsConstraintViolationsItem](#errorresponsedetailsconstraintviolationsitem)> | Information about an input parameter that violated some validation rule of the service API.                                    |
| errorMessage                     | string                                                                                                | Complete error message.                                                                                                        |
| errorMessageFormat               | string                                                                                                | The message format of the error message, string.format based.                                                                  |
| errorMessageFormatSpecifierTypes | Array\<string>                                                                                        | The corresponding DQL format specifier types for each format specifier used in the error message format.                       |
| errorType                        | string                                                                                                | The error type, e.g. COMMAND_NAME_MISSING                                                                                    |
| exceptionType                    | string                                                                                                | The exception type.                                                                                                            |
| missingPermissions               | Array\<string>                                                                                        | List of missing IAM permissions necessary to successfully execute the request.                                                 |
| missingScopes                    | Array\<string>                                                                                        | List of missing IAM scopes necessary to successfully execute the request.                                                      |
| queryId                          | string                                                                                                |                                                                                                                                |
| queryString                      | string                                                                                                | Submitted query string.                                                                                                        |
| syntaxErrorPosition              | [TokenPosition](#tokenposition)                                                                       | The position of a token in a query string used for errors and notification to map the message to a specific part of the query. |

### ErrorResponseDetailsConstraintViolationsItem

| Name                | Type   | Description                                                |
| ------------------- | ------ | ---------------------------------------------------------- |
| message (required)  | string | Message describing the error.                              |
| parameterDescriptor | string | Describes the violating parameter.                         |
| parameterLocation   | string | Describes the general location of the violating parameter. |

### ExecuteRequest

| Name                         | Type                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultSamplingRatio         | number                            | Default sampling ratio. By default no sampling is applied. No upper limit but will be normalized to a power of 10 less than or equal to 100000.<br /><br />**Example:** `1`<br />**Minimum:** `1`                                                                                                                                                                                                                                                                                                                                                   |
| defaultScanLimitGbytes       | number                            | Default scan limit in gigabytes. Can be overridden in DQL. Default value is configured on application level (see documentation of FETCH command). Use -1 for no limit. Although this parameter has no explicit upper bound, other constraints such as timeouts, maxResultRecords, or maxResultBytes may still apply, as this API is not intended for large-scale data export.<br /><br />**Example:** `100`<br />**Minimum:** `-1`                                                                                                                  |
| defaultTimeframeEnd          | string                            | The query timeframe 'end' timestamp in ISO-8601 or RFC3339 format. If the timeframe 'start' parameter is missing, the whole timeframe is ignored. *Note that if a timeframe is specified within the query string (query) then it has precedence over this query request parameter.*<br /><br />**Example:** `2022-04-20T13:10:04.123Z`                                                                                                                                                                                                              |
| defaultTimeframeStart        | string                            | The query timeframe 'start' timestamp in ISO-8601 or RFC3339 format. If the timeframe 'end' parameter is missing, the whole timeframe is ignored. *Note that if a timeframe is specified within the query string (query) then it has precedence over this query request parameter.*<br /><br />**Example:** `2022-04-20T12:10:04.123Z`                                                                                                                                                                                                              |
| enablePreview                | boolean                           | Request preview results. If a preview is available within the requestTimeoutMilliseconds, then it will be returned as part of the response.<br /><br />**Default:** `false`<br />**Example:** `true`                                                                                                                                                                                                                                                                                                                                                |
| enforceQueryConsumptionLimit | boolean                           | Boolean to indicate if the query consumption limit should be enforced                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| fetchTimeoutSeconds          | number                            | The time limit for fetching data. This is a soft limit as further data processing can happen after fetching. While this parameter has no explicit upper bound in the API, application-level default and maximum fetch timeout constraints still apply, and other limits such as maxResultRecords or maxResultBytes may take effect, as this API is not designed for large-scale data export.<br /><br />**Example:** `60`<br />**Minimum:** `0`                                                                                                     |
| filterSegments               | [FilterSegments](#filtersegments) | Represents a collection of filter segments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| includeContributions         | boolean                           | Indicates whether bucket contribution information should be included in the query response metadata. When set to true, the response will contain details about how each bucket contributed to the query result.<br /><br />**Default:** `false`<br />**Example:** `true`                                                                                                                                                                                                                                                                            |
| includeTypes                 | boolean                           | Parameter to exclude the type information from the query result. In case not specified, the type information will be included.<br /><br />**Default:** `true`                                                                                                                                                                                                                                                                                                                                                                                       |
| locale                       | string                            | The query locale. If none specified, then a language/country neutral locale is chosen. The input values take the ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore. For instance, both values are valid 'en' or 'en_US'.<br /><br />**Example:** `en_US`                                                                                                                                                                                                                                              |
| maxResultBytes               | number                            | The maximum number of bytes permitted for the serialized result. This limit applies only to records and is treated as a soft constraint - meaning that if the final record pushes the result size beyond this limit, that entire record will still be included in the response. While this parameter has no default value or explicit upper bound, other constraints such as timeouts or maxResultRecords may still take effect, as this API is not designed for large-scale data export.<br /><br />**Example:** `1000000`<br />**Minimum:** `0`   |
| maxResultRecords             | number                            | The maximum number of query result records to be returned. If this limit is exceeded, a warning notification will be included in the response. Although this parameter has no explicit upper bound, other constraints such as timeouts or maxResultBytes may still apply, as this API is not intended for large-scale data export.<br /><br />**Default:** `1000`<br />**Example:** `1000`<br />**Minimum:** `0`                                                                                                                                    |
| pollingPromiseSeconds        | number                            | The number of seconds the client promises to send the next polling request after a response for a running query was sent. If the client does not poll within this time window, the query will be cancelled. Handling of the polling promise starts after request processing finished, so that requestTimeoutMilliseconds and pollingPromiseSeconds can be used without contradicting each other. A value of 0 means that the query will be cancelled immediately, without waiting for a poll request. No default value.<br /><br />**Minimum:** `0` |
| query (required)             | string                            | The full query string.<br /><br />**Example:** `fetch events`<br />`\| filter event.type == "davis" AND davis.status != "CLOSED"`<br />`\| fields timestamp, davis.title, davis.underMaintenance, davis.status`<br />`\| sort timestamp`<br />`\| limit 10`                                                                                                                                                                                                                                                                                         |
| queryOptions                 | [QueryOptions](#queryoptions)     | Query options enhance query functionality for Dynatrace internal services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| requestTimeoutMilliseconds   | number                            | The maximum time the response will be delayed to wait for a result. (This excludes the sending time and time spent in any services between the query-frontend and the client.) If the query finishes within the specified timeout, the query result is returned. Otherwise, the requestToken is returned, allowing polling for the result.<br /><br />**Example:** `1000`<br />**Minimum:** `0`                                                                                                                                                     |
| timezone                     | string                            | The query timezone. If none is specified, UTC is used as fallback. The list of valid input values matches that of the IANA Time Zone Database (TZDB). It accepts values in their canonical names like 'Europe/Paris', the abbreviated version like CET or the UTC offset format like '+01:00'<br /><br />**Example:** `UTC`                                                                                                                                                                                                                         |

### FieldType

The possible type of a field in DQL.

| Name            | Type                                                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type (required) | "string" \| "boolean" \| "undefined" \| "binary" \| "double" \| "long" \| "timestamp" \| "timeframe" \| "duration" \| "ip_address" \| "geo_point" \| "array" \| "record" \| "uid" \| "smartscape_id" |
| types           | Array\<[RangedFieldTypes](#rangedfieldtypes)>                                                                                                                                                           |

### FilterSegment

A filter segment is identified by an ID. Each segment includes a list of variable definitions.

| Name          | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| id (required) | string                                                                      |
| variables     | Array\<[FilterSegmentVariableDefinition](#filtersegmentvariabledefinition)> |

### FilterSegmentVariableDefinition

Defines a variable with a name and a list of values.

| Name              | Type           |
| ----------------- | -------------- |
| name (required)   | string         |
| values (required) | Array\<string> |

### FilterSegments

Represents a collection of filter segments.

**type**: Array\<[FilterSegment](#filtersegment)>

### GeoPoint

DQL data type representing a geolocation point.

| Name                 | Type   | Description                                                                                    |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| latitude (required)  | number | The coordinate that specifies the north-south position of a point on the surface of the earth. |
| longitude (required) | number | The coordinate that specifies the  east-west position of a point on the surface of the earth.  |

### GrailMetadata

Collects various bits of metadata information.

| Name                      | Type                                                  | Description                                                                                               |
| ------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| analysisTimeframe         | [Timeframe](#timeframe)                               | DQL data type timeframe.                                                                                  |
| canonicalQuery            | string                                                | The canonical form of the query. It has normalized spaces and canonical constructs.                       |
| contributions             | [Contributions](#contributions)                       |                                                                                                           |
| dqlVersion                | string                                                | The version of DQL that was used to process the query request.                                            |
| executionTimeMilliseconds | number                                                | The time it took to execute the query.                                                                    |
| flags                     | Array\<string>                                        | Flags indicating specific properties of the query execution, such as CLASSIC_ENTITY_MIGRATION_ADVISED. |
| locale                    | string                                                | Effective locale for the query.                                                                           |
| notifications             | Array\<[MetadataNotification](#metadatanotification)> | Collected messages during the execution of the query.                                                     |
| query                     | string                                                | The submitted query.                                                                                      |
| queryId                   | string                                                | The id of the query                                                                                       |
| sampled                   | boolean                                               | True if sampling was used for at least one segment.                                                       |
| scannedBytes              | number                                                | Number of scanned bytes during the query execution.                                                       |
| scannedDataPoints         | number                                                |                                                                                                           |
| scannedRecords            | number                                                | Number of scanned records during the query execution.                                                     |
| timezone                  | string                                                | Effective timezone for the query.                                                                         |

### Metadata

Collects various bits of metadata information.

| Name    | Type                                      | Description                                    |
| ------- | ----------------------------------------- | ---------------------------------------------- |
| grail   | [GrailMetadata](#grailmetadata)           | Collects various bits of metadata information. |
| metrics | Array\<[MetricMetadata](#metricmetadata)> |                                                |

### MetadataNotification

The message that provides additional information about the execution of the query.

| Name                        | Type                            | Description                                                                                                                    |
| --------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| arguments                   | Array\<string>                  | The arguments for the message format.                                                                                          |
| message                     | string                          | The complete message of the notification.                                                                                      |
| messageFormat               | string                          | The message format of the notification, string.format based                                                                    |
| messageFormatSpecifierTypes | Array\<string>                  | The corresponding DQL format specifier types for each format specifier used in the error message format.                       |
| notificationType            | string                          | The notification type, e.g. LIMIT_ADDED.                                                                                      |
| severity                    | string                          | The severity of the notification, currently: INFO, WARN, ERROR.                                                                |
| syntaxPosition              | [TokenPosition](#tokenposition) | The position of a token in a query string used for errors and notification to map the message to a specific part of the query. |

### MetricMetadata

An object that defines additional metric metadata.

| Name        | Type    | Description                                                                                    |
| ----------- | ------- | ---------------------------------------------------------------------------------------------- |
| aggregation | string  | Metadata about the aggregation type.                                                           |
| description | string  | The description of the metadata.                                                               |
| displayName | string  | The display name of the metadata.                                                              |
| fieldName   | string  | The name of the associated field used in the query.                                            |
| metric.key  | string  | The metric key.                                                                                |
| rate        | string  | The specified rate normalization parameter.                                                    |
| rollup      | string  | Metadata about the rollup type.                                                                |
| scalar      | boolean | Indicates whether the scalar parameter was set to true in the timeseries aggregation function. |
| shifted     | boolean | Indicates if the shifted parameter was used.                                                   |
| unit        | string  | The unit used.                                                                                 |

### ParseRequest

| Name             | Type                          | Description                                                                                                                                                                                                                                                                                                                 |
| ---------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| locale           | string                        | The query locale. If none specified, then a language/country neutral locale is chosen. The input values take the ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore. For instance, both values are valid 'en' or 'en_US'.<br /><br />**Example:** `en_US`                      |
| query (required) | string                        | The full query string.<br /><br />**Example:** `fetch events`<br />`\| filter event.type == "davis" AND davis.status != "CLOSED"`<br />`\| fields timestamp, davis.title, davis.underMaintenance, davis.status`<br />`\| sort timestamp`<br />`\| limit 10`                                                                 |
| queryOptions     | [QueryOptions](#queryoptions) | Query options enhance query functionality for Dynatrace internal services.                                                                                                                                                                                                                                                  |
| timezone         | string                        | The query timezone. If none is specified, UTC is used as fallback. The list of valid input values matches that of the IANA Time Zone Database (TZDB). It accepts values in their canonical names like 'Europe/Paris', the abbreviated version like CET or the UTC offset format like '+01:00'<br /><br />**Example:** `UTC` |

### PositionInfo

The exact position in the query string.

| Name              | Type   | Description                             |
| ----------------- | ------ | --------------------------------------- |
| column (required) | number | Query position column zero based index. |
| index (required)  | number | Query position index.                   |
| line (required)   | number | Query position line zero based index.   |

### QueryOptions

Query options enhance query functionality for Dynatrace internal services.

**type**: Record\<string, string>

### QueryPollResponse

The response of GET query:execute call.

| Name             | Type                                                                                    | Description                              |
| ---------------- | --------------------------------------------------------------------------------------- | ---------------------------------------- |
| progress         | number                                                                                  | The progress of the query from 0 to 100. |
| result           | [QueryResult](#queryresult)                                                             | The result of the DQL query.             |
| state (required) | "NOT_STARTED" \| "RUNNING" \| "SUCCEEDED" \| "RESULT_GONE" \| "CANCELLED" \| "FAILED" | Possible state of the query.             |
| ttlSeconds       | number                                                                                  | Time to live in seconds.                 |

### QueryResult

The result of the DQL query.

| Name                | Type                                          | Description                                        |
| ------------------- | --------------------------------------------- | -------------------------------------------------- |
| metadata (required) | [Metadata](#metadata)                         | Collects various bits of metadata information.     |
| records (required)  | Array\<null \| [ResultRecord](#resultrecord)> | List of records containing the result fields data. |
| types (required)    | Array\<[RangedFieldTypes](#rangedfieldtypes)> | The data types for the result records.             |

### QueryStartResponse

The response when starting a query.

| Name             | Type                                                                                    | Description                                        |
| ---------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| progress         | number                                                                                  | The progress of the query from 0 to 100.           |
| requestToken     | string                                                                                  | The token returned by the POST query:execute call. |
| result           | [QueryResult](#queryresult)                                                             | The result of the DQL query.                       |
| state (required) | "NOT_STARTED" \| "RUNNING" \| "SUCCEEDED" \| "RESULT_GONE" \| "CANCELLED" \| "FAILED" | Possible state of the query.                       |
| ttlSeconds       | number                                                                                  | Time to live in seconds.                           |

### RangedFieldTypes

The field type in range.

| Name                | Type                                                  | Description                                                          |
| ------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| indexRange          | Array\<number>                                        | The range of elements at use this type in arrays (null for records). |
| mappings (required) | [RangedFieldTypesMappings](#rangedfieldtypesmappings) | The mapping between the field name and data type.                    |

### RangedFieldTypesMappings

The mapping between the field name and data type.

**type**: Record\<string, FieldType>

### ResultRecord

Single record that contains the result fields.

**type**: Record\<string, ResultRecordValue | null>

### Timeframe

DQL data type timeframe.

| Name  | Type | Description                      |
| ----- | ---- | -------------------------------- |
| end   | Date | The end time of the timeframe.   |
| start | Date | The start time of the timeframe. |

### TokenPosition

The position of a token in a query string used for errors and notification to map the message to a specific part of the query.

| Name             | Type                          | Description                             |
| ---------------- | ----------------------------- | --------------------------------------- |
| end (required)   | [PositionInfo](#positioninfo) | The exact position in the query string. |
| start (required) | [PositionInfo](#positioninfo) | The exact position in the query string. |

### VerifyRequest

| Name                   | Type                          | Description                                                                                                                                                                                                                                                                                                                 |
| ---------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| generateCanonicalQuery | boolean                       | **Default:** `false`                                                                                                                                                                                                                                                                                                        |
| locale                 | string                        | The query locale. If none specified, then a language/country neutral locale is chosen. The input values take the ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore. For instance, both values are valid 'en' or 'en_US'.<br /><br />**Example:** `en_US`                      |
| query (required)       | string                        | The full query string.<br /><br />**Example:** `fetch events`<br />`\| filter event.type == "davis" AND davis.status != "CLOSED"`<br />`\| fields timestamp, davis.title, davis.underMaintenance, davis.status`<br />`\| sort timestamp`<br />`\| limit 10`                                                                 |
| queryOptions           | [QueryOptions](#queryoptions) | Query options enhance query functionality for Dynatrace internal services.                                                                                                                                                                                                                                                  |
| timezone               | string                        | The query timezone. If none is specified, UTC is used as fallback. The list of valid input values matches that of the IANA Time Zone Database (TZDB). It accepts values in their canonical names like 'Europe/Paris', the abbreviated version like CET or the UTC offset format like '+01:00'<br /><br />**Example:** `UTC` |

### VerifyResponse

Verify response.

| Name             | Type                                                  | Description                                                 |
| ---------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| canonicalQuery   | string                                                |                                                             |
| notifications    | Array\<[MetadataNotification](#metadatanotification)> | The notifications related to the supplied DQL query string. |
| valid (required) | boolean                                               | True if the supplied DQL query string is valid.             |

### ResultRecordValue

Single result field of a record.

**type**: boolean | number | string | [Timeframe](#timeframe) | [GeoPoint](#geopoint) | [ResultRecord](#resultrecord) | null | Array\<ResultRecordValue \&#124; null> | null
