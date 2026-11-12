## queryExecutionClient

```js
import { queryExecutionClient } from '@dynatrace-sdk/client-query';
```

### queryCancel

**queryExecutionClient.queryCancel(config): Promise\<void | [QueryPollResponse](#querypollresponse)>**

Cancels the query and returns the result if the query was already finished, otherwise discards it.

For information about the required permissions see the [Bucket and table permissions in Grail documentation](https://docs.dynatrace.com/docs/shortlink/assign-bucket-table-permissions).

### &#x20;Overview:

Cancels a running Grail query and returns a list of records if the query already finished.

### &#x20;The response format:

If the query was already finished, a response body including the result will be returned. Otherwise the response will contain no body.

The result has three main sections:

- the 'records' section contains the individual records, where each record consists of a set of fields and their corresponding values.
- the 'types' section describes the corresponding data types that a record field has.
- the 'metadata' section contains information about the query like 'analysisTimeframe', 'timezone' or 'locale'.

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

| Name                           | Type   | Description                                                                                                                                                                                                                     |
| ------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.dtClientContext         | string | The dt-client-context header is an optional string parameter used for monitoring purposes. When included in a request, it helps retrieve information about the execution of the query. It shouldn't hold sensitive information. |
| config.enrich                  | string | If set additional data will be available in the metadata section.<br /><br />**Example:** `metric-metadata`                                                                                                                     |
| config.requestToken (required) | string | The request-token of the query.                                                                                                                                                                                                 |

#### Returns

| Return type                                                                                                                                           | Description                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[QueryPollResponse](#querypollresponse) \| void> | The query already finished. |

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

const data = await queryExecutionClient.queryCancel({
  requestToken: "...",
});
```

### queryExecute

**queryExecutionClient.queryExecute(config): Promise\<[QueryStartResponse](#querystartresponse)>**

Starts a Grail query.

For information about the required permissions see the [Bucket and table permissions in Grail documentation](https://docs.dynatrace.com/docs/shortlink/assign-bucket-table-permissions).

### &#x20;Overview:

Executes a query and returns a list of records.

For details about the query language see the [Dynatrace Query Language documentation](https://dt-url.net/bv03yk8).

### &#x20;The response format:

The json response will contain the state of the started query. If the query succeeded, the result will be included. Otherwise the response will contain a request token to reference the query in future polling requests.

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

| Name                   | Type                              | Description                                                                                                                                                                                                                     |
| ---------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [ExecuteRequest](#executerequest) |                                                                                                                                                                                                                                 |
| config.dtClientContext | string                            | The dt-client-context header is an optional string parameter used for monitoring purposes. When included in a request, it helps retrieve information about the execution of the query. It shouldn't hold sensitive information. |
| config.enrich          | string                            | If set additional data will be available in the metadata section.<br /><br />**Example:** `metric-metadata`                                                                                                                     |

#### Returns

| Return type                                                                                                                                     | Description                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[QueryStartResponse](#querystartresponse)> | The final status and results of the supplied query if it finished within a supplied requestTimeoutMilliseconds. \| The status of the query to start. |

#### Throws

| Error Type             | Error Message                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest             | The supplied request is wrong. Either the query itself or other parameters are wrong.                                          |
| Unauthorized           | Unauthorized. The request lacks valid authentication credentials. Happens when the authentication token is missing or invalid. |
| InsufficientPermission | Insufficient permissions.                                                                                                      |
| TenantNotFound         | Not Found - Returned when the tenant is not active (e.g. it is being deleted or deactivated) or not found.                     |
| MethodNotAllowed       | Method not allowed. The HTTP method is not supported for this endpoint.                                                        |
| Conflict               | Conflict - The supplied queryId already exists and is currently running.                                                       |
| PayloadTooLarge        | Payload Too Large - The request body exceeds the maximum allowed size.                                                         |
| UnsupportedMediaType   | Unsupported media type. The request content type is not supported.                                                             |
| TooManyRequests        | Too Many Requests - There were too many queries in the queue.                                                                  |
| InternalServerError    | An internal server error has occurred.                                                                                         |
| ServiceUnavailable     | Service Unavailable - The grail instance is either shutting down or busy.                                                      |
| GatewayTimeout         | Gateway timeout. The service did not respond in time.                                                                          |
| GeneralError           | An unexpected error occurred.                                                                                                  |

**Code example**

```ts
import { queryExecutionClient } from "@dynatrace-sdk/client-query";

const data = await queryExecutionClient.queryExecute({
  body: {
    query:
      'fetch events | filter event.type == "davis" AND davis.status != "CLOSED" | fields timestamp, davis.title, davis.underMaintenance, davis.status | sort timestamp | limit 10',
  },
});
```

### queryPoll

**queryExecutionClient.queryPoll(config): Promise\<[QueryPollResponse](#querypollresponse)>**

Retrieves query status and final result from Grail.

For information about the required permissions see the [Bucket and table permissions in Grail documentation](https://docs.dynatrace.com/docs/shortlink/assign-bucket-table-permissions).

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
