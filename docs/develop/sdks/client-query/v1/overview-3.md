## &#x20;Overview

Verifies the supplied query string and other query parameters for lack of any errors, but without actually
submitting the query for execution.

#### Parameters

| Name                   | Type                            | Description                                                                                                                                                                                                                     |
| ---------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [VerifyRequest](#verifyrequest) |                                                                                                                                                                                                                                 |
| config.dtClientContext | string                          | The dt-client-context header is an optional string parameter used for monitoring purposes. When included in a request, it helps retrieve information about the execution of the query. It shouldn't hold sensitive information. |

#### Returns

| Return type                                                                                                                             | Description                                  |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[VerifyResponse](#verifyresponse)> | Supplied query and parameters were verified. |

#### Throws

| Error Type             | Error Message                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest             | The supplied request is wrong. Either the query itself or other parameters are wrong.                                          |
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

const data = await queryAssistanceClient.queryVerify({
  body: {
    query:
      'fetch events | filter event.type == "davis" AND davis.status != "CLOSED" | fields timestamp, davis.title, davis.underMaintenance, davis.status | sort timestamp | limit 10',
  },
});
```
