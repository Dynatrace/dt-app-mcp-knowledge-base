## &#x20;Overview

We provide a list of suggestions that may be used after the cursor position. The following queries will all provide the
same results:

- `query: "f"`
- `query: "f", cursorPosition:1`
- `query: "fetch ", cursorPosition:1`

Available fields:

| Field       | Description                                                                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| suggestions | a list of suggestions. Each item is a separate possible suggestion, despite they might have the same outputs.                                                                           |
| optional    | whether the suggestion is optional. If `true`, the query until the cursor position might work. If `false`, the query is definitely incomplete or invalid if cut at the cursor position. |

Fields in the `suggestions`

| Field                  | Description                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| suggestion             | a string representing the whole suggestion. This information could also be derived from the parts.         |
| alreadyTypedCharacters | how many characters of this suggestion have already been typed (and will be overridden by the suggestion). |
| parts                  | a list of semantically enriched information on what are the parts of a suggestion.                         |

Fields in `parts`

| Field      | Description                                               |
| ---------- | --------------------------------------------------------- |
| suggestion | a string representing the current part of the suggestion. |
| type       | current types: SPACE, PIPE, COMMAND (may be extended)     |

The `type` helps to treat specific parts of the suggestion different to others; either by a different visualization,
a link to docs, etc.

#### Parameters

| Name                   | Type                                        | Description                                                                                                                                                                                                                     |
| ---------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [AutocompleteRequest](#autocompleterequest) |                                                                                                                                                                                                                                 |
| config.dtClientContext | string                                      | The dt-client-context header is an optional string parameter used for monitoring purposes. When included in a request, it helps retrieve information about the execution of the query. It shouldn't hold sensitive information. |

#### Returns

| Return type                                                                                                                                         | Description                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[AutocompleteResponse](#autocompleteresponse)> | A list of structured autocomplete suggestions. |

#### Throws

| Error Type             | Error Message                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError     | Bad Request - The caller submitted an invalid request (e.g., mandatory parameters missing).                                    |
| Unauthorized           | Unauthorized. The request lacks valid authentication credentials. Happens when the authentication token is missing or invalid. |
| InsufficientPermission | Insufficient permissions.                                                                                                      |
| TenantNotFound         | Not Found - Returned when the tenant is not active (e.g. it is being deleted or deactivated) or not found.                     |
| MethodNotAllowed       | Method not allowed. The HTTP method is not supported for this endpoint.                                                        |
| PayloadTooLarge        | Payload Too Large - The request body exceeds the maximum allowed size.                                                         |
| UnsupportedMediaType   | Unsupported media type. The request content type is not supported.                                                             |
| InternalServerError    | An internal server error has occurred.                                                                                         |
| ServiceUnavailable     | Service Unavailable - The grail instance is either shutting down or busy.                                                      |
| GatewayTimeout         | Gateway timeout. The service did not respond in time.                                                                          |
| GeneralError           | An unexpected error occurred.                                                                                                  |

**Code example**

```ts
import { queryAssistanceClient } from "@dynatrace-sdk/client-query";

const data = await queryAssistanceClient.queryAutocomplete({
  body: {
    query:
      'fetch events | filter event.type == "davis" AND davis.status != "CLOSED" | fields timestamp, davis.title, davis.underMaintenance, davis.status | sort timestamp | limit 10',
  },
});
```

### queryParse

**queryAssistanceClient.queryParse(config): Promise\<[DQLNode](#dqlnode)>**

Get a structured tree of the canonical form of the query.

For information about the required permissions see the [Bucket and table permissions in Grail documentation](https://docs.dynatrace.com/docs/shortlink/assign-bucket-table-permissions).
