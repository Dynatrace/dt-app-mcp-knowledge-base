## favoritesClient

```js
import { favoritesClient } from '@dynatrace-sdk/client-document';
```

### favoriteDocument

**favoritesClient.favoriteDocument(config): Promise\<void>**

Mark the document as a favorite.

**Required scope:** document:documents:read

Mark the document as a personal favorite for the calling user.

The document must be accessible to you — you must either own it or have received access through sharing.

Calling this operation on a document that is already a favorite is a no-op.

#### Parameters

| Name                 | Type   | Description                                      |
| -------------------- | ------ | ------------------------------------------------ |
| config.id (required) | string | System-generated or user-given id of a document. |

#### Returns

| Return type | Status code | Description                                 |
| ----------- | ----------- | ------------------------------------------- |
| void        | 204         | The document has been marked as a favorite. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound    | Document not found.                                                                                                                                                      |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { favoritesClient } from "@dynatrace-sdk/client-document";

const data = await favoritesClient.favoriteDocument({
  id: "...",
});
```

### unfavoriteDocument

**favoritesClient.unfavoriteDocument(config): Promise\<void>**

Remove the document from favorites.

**Required scope:** document:documents:read

Remove the document from the calling user's personal favorites.

Read access to the document is not required — this allows users to clean up stale favorites
for documents to which their access has since been revoked.

Calling this operation on a document that is not a favorite is a no-op.

#### Parameters

| Name                 | Type   | Description                                      |
| -------------------- | ------ | ------------------------------------------------ |
| config.id (required) | string | System-generated or user-given id of a document. |

#### Returns

| Return type | Status code | Description                                   |
| ----------- | ----------- | --------------------------------------------- |
| void        | 204         | The document has been removed from favorites. |

#### Throws

| Error Type          | Error Message                                |
| ------------------- | -------------------------------------------- |
| Unauthorized        | API token or tenant missing or corrupt.      |
| DocumentNotFound    | Document not found.                          |
| InternalServerError | There is a problem in the backend.           |
| ServiceUnavailable  | There is a temporary problem in the backend. |
| GeneralError        | Unexpected error.                            |

**Code example**

```ts
import { favoritesClient } from "@dynatrace-sdk/client-document";

const data = await favoritesClient.unfavoriteDocument({
  id: "...",
});
```
