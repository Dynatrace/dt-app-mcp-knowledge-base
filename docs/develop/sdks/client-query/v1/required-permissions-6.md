## &#x20;Required permissions

- **Table permission**: the table permissions of the calling user are evaluated to decide on 403 responses, as for `query:execute`. No bucket permission is checked.

Only the user who started the query can poll it. This is documented in the [Grail service permissions](https://developer.dynatrace.com/develop/platform-services/services/grail-service/) overview. Use the `requestToken` returned by `query:execute`.

### &#x20;Overview:

Polls the status of a Grail query. Returns the status of the query, including the result if the query finished.

### &#x20;The response format:

The json response will contain the state of the query. If the query succeeded, the result will be included.

The result has two main sections:

- The 'records' section contains the individual records, where each record consists of a set of fields and their corresponding values.
- The 'types' section describes the corresponding data types that a record field has.

Every record has an implicit 'index' according to the position in the 'records' JSON array.
The types section has a list of 1..N possible type 'buckets'. Each such bucket has an 'indexRange' which indicates which
records will find their field types in which bucket. The index range has two values start & end and can be thought of as [startIndex, endIndex).

A field part of a record with index 'i' will find its corresponding field type by first locating the bucket that satisfies:

```text
startIndex <= i <= endIndex
```

Once the bucket is found the 'mappings' object has an entry for all the fields that are part of that record with index 'i'.

Since enforcement of a particular schema is absent at ingestion time, it is possible to have records that share the same
field name but their values are of a different type. This phenomenon will hence forth be named as a **"collision"**.
When a collision does occur, we will create a new type 'bucket' that will have a different index range where
the new record field types will be placed.
It is guaranteed that every field of every record will have a corresponding type.
**Clients should always take the included types into account when consuming records!**

#### Parameters

| Name                              | Type   | Description                                                                                                                                                                                                                     |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.dtClientContext            | string | The dt-client-context header is an optional string parameter used for monitoring purposes. When included in a request, it helps retrieve information about the execution of the query. It shouldn't hold sensitive information. |
| config.enrich                     | string | If set additional data will be available in the metadata section.<br /><br />**Example:** `metric-metadata`                                                                                                                     |
| config.requestTimeoutMilliseconds | number | Time the response is allowed to be delayed for either a preview or the final result to become available. No default value (immediate response).<br /><br />**Example:** `60`<br />**Minimum:** `0`                              |
| config.requestToken (required)    | string | The request-token of the query.                                                                                                                                                                                                 |

#### Returns

| Return type                                                                                                                                   | Description                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[QueryPollResponse](#querypollresponse)> | The current status and results of the supplied query. |

#### Throws

| Error Type             | Error Message                                                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| BadRequest             | The supplied request is wrong. Either the query itself or other parameters are wrong.                                                          |
| Unauthorized           | Unauthorized. The request lacks valid authentication credentials. Happens when the authentication token is missing or invalid.                 |
| InsufficientPermission | Insufficient permissions.                                                                                                                      |
| QueryNotFound          | Not Found - The query with the given ID does not exist for this tenant, or the tenant is not active (e.g. it is being deleted or deactivated). |
| MethodNotAllowed       | Method not allowed. The HTTP method is not supported for this endpoint.                                                                        |
| QueryGone              | The query for the given request-token is not available anymore.                                                                                |
| UnsupportedMediaType   | Unsupported media type. The request content type is not supported.                                                                             |
| TooManyRequests        | Too Many Requests - There were too many queries in the queue.                                                                                  |
| InternalServerError    | An internal server error has occurred.                                                                                                         |
| ServiceUnavailable     | Service Unavailable - The grail instance is either shutting down or busy.                                                                      |
| GatewayTimeout         | Gateway timeout. The service did not respond in time.                                                                                          |
| GeneralError           | An unexpected error occurred.                                                                                                                  |

**Code example**

```ts
import { queryExecutionClient } from "@dynatrace-sdk/client-query";

const data = await queryExecutionClient.queryPoll({
  requestToken: "...",
});
```
