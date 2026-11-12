## documentLockingClient

```js
import { documentLockingClient } from '@dynatrace-sdk/client-document';
```

### acquireLock

**documentLockingClient.acquireLock(config): Promise\<[AcquireLockResult](#acquirelockresult)>**

Acquire the lock on the document.

**Required scope:** document:documents:write

Acquire the lock on the document. A user can lock a maximum of five documents at any given time. Once the lock is acquired by the user, other users cannot make any updates to the document.

The user acquiring the lock can optionally specify the duration for which the lock can be attained. However, the specified duration must not exceed the maximum allowed duration of 15 minutes. If not specified, the lock is acquired for 10 minutes.

If the user who has currently locked the document attempts to acquire the lock for the same document again, the duration of the lock gets extended by the specified duration or by a default duration of 10 minutes, if not specified.

The other users would not be allowed to acquire the lock on an already locked document.

#### Parameters

| Name                   | Type                        | Description                                      |
| ---------------------- | --------------------------- | ------------------------------------------------ |
| config.body (required) | [AcquireLock](#acquirelock) |                                                  |
| config.id (required)   | string                      | System-generated or user-given id of a document. |

#### Returns

| Return type                             | Status code | Description                             |
| --------------------------------------- | ----------- | --------------------------------------- |
| [AcquireLockResult](#acquirelockresult) | 200         | The lock has been acquired by the user. |

#### Throws

| Error Type                  | Error Message                                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest                  | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized                | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden                   | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound            | Document not found.                                                                                                                                                      |
| DocumentAlreadyLocked       | Lock acquisition failed as the document is already locked.                                                                                                               |
| LockedDocumentsLimitReached | Lock acquisition failed as number of locked documents reached or exceeded the allowed limit.                                                                             |
| InternalServerError         | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable          | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError                | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentLockingClient } from "@dynatrace-sdk/client-document";

const data = await documentLockingClient.acquireLock({
  id: "...",
  body: { documentVersion: 10 },
});
```

### inspectLock

**documentLockingClient.inspectLock(config): Promise\<[DocumentLockDetails](#documentlockdetails)>**

Inspect whether the document is locked.

**Required scope:** document:documents:read

Inspect whether the document is locked.

This provides the information about whether the document is locked and the user that currently owns the lock.

#### Parameters

| Name                 | Type   | Description                                      |
| -------------------- | ------ | ------------------------------------------------ |
| config.id (required) | string | System-generated or user-given id of a document. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound    | Document not found.                                                                                                                                                      |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentLockingClient } from "@dynatrace-sdk/client-document";

const data = await documentLockingClient.inspectLock({
  id: "...",
});
```

### releaseLock

**documentLockingClient.releaseLock(config): Promise\<void>**

Release the lock on the document.

**Required scope:** document:documents:write

Release the lock on the document.
The lock on the document can be released only by the user who owns it.

#### Parameters

| Name                 | Type   | Description                                      |
| -------------------- | ------ | ------------------------------------------------ |
| config.id (required) | string | System-generated or user-given id of a document. |

#### Returns

| Return type | Status code | Description                                 |
| ----------- | ----------- | ------------------------------------------- |
| void        | 200         | The lock on the document has been released. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound    | Document not found.                                                                                                                                                      |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentLockingClient } from "@dynatrace-sdk/client-document";

const data = await documentLockingClient.releaseLock({
  id: "...",
});
```
