## documentsClient

```js
import { documentsClient } from '@dynatrace-sdk/client-document';
```

### bulkDeleteDocument

**documentsClient.bulkDeleteDocument(config): Promise\<[BulkDeleteResponse](#bulkdeleteresponse)>**

Bulk-delete multiple documents

**Required scope:** document:documents:delete

Move the documents with the given ids into the trash. They are no longer accessible until they're restored from the trash. \<p>The number of provided document ids is limited to 100.\</p>

#### Parameters

| Name                   | Type                                    | Description                                                                                                                                                                                                                                                                               |
| ---------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                                 | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.body (required) | [BulkDeleteRequest](#bulkdeleterequest) |                                                                                                                                                                                                                                                                                           |

#### Throws

| Error Type         | Error Message                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest         | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized       | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden          | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| ServiceUnavailable | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError       | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.bulkDeleteDocument({
  body: { ids: ["..."] },
});
```

### createDocument

**documentsClient.createDocument(config): Promise\<[DocumentMetaData](#documentmetadata)>**

Create a new document.

**Required scope:** document:documents:write

Create a new document. You are the owner of the created document. By default the document isn't accessible to other users; set `isPrivate` to `false` to immediately make it public (readable by every user of the environment).

The document's `name` and `type` must be provided. These two properties can later be used for filtering purposes, when listing accessible documents.

Be aware, that the `type` isn't the same as the Content-Type of the document, but instead adds user-defined semantics of which the document-store is entirely agnostic.

The content size must not exceed **50 MB**.

#### Parameters

| Name                   | Type                                      |
| ---------------------- | ----------------------------------------- |
| config.body (required) | [CreateDocumentBody](#createdocumentbody) |

#### Throws

| Error Type              | Error Message                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest              | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized            | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden               | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| ExternalIdAlreadyExists | Deprecated, replaced by IdAlreadyExists. A document with the given external id already exists in this environment.                                                       |
| DocumentTooLarge        | Maximum content size exceeded.                                                                                                                                           |
| InternalServerError     | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable      | There is a temporary problem in the backend.                                                                                                                             |
| InsufficientStorage     | The storage quota or maximum number of documents has been exceeded.                                                                                                      |
| GeneralError            | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.createDocument({
  body: { name: "...", type: "...", content: "..." },
});
```

### deleteDocument

**documentsClient.deleteDocument(config): Promise\<void>**

Delete the document

**Required scope:** document:documents:delete

Move the document into the trash. It is no longer accessible until it's restored from the trash.

[Optimistic locking](https://dt-url.net/platform-services-locking) is enforced via the `optimistic-locking-version` parameter.

You must own the document to delete it.

#### Parameters

| Name                                       | Type    | Description                                                                                                                                                                                                                                                                               |
| ------------------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess                         | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required)                       | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |
| config.optimisticLockingVersion (required) | string  | To protect users from accidental overrides, the current version of the document must match the optimistic locking version parameter - otherwise, this request will fail and the entity is left unchanged.                                                                                 |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound    | Document not found.                                                                                                                                                      |
| Conflict            | Optimistic locking failed, or the document is actively locked by another user, or some other conflict.                                                                   |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.deleteDocument({
  id: "...",
  optimisticLockingVersion: "...",
});
```

### deleteSnapshot

**documentsClient.deleteSnapshot(config): Promise\<void>**

Delete the snapshot.

**Required scope:** document:documents:write

Irrevocably delete the snapshot. Only the document owner may do this.

This operation doesn't affect the current state of the document.

Instead, it prevents that the document may ever be restored to the state it had when the snapshot was created.

#### Parameters

| Name                              | Type    | Description                                                                                                                                                                                                                                                                               |
| --------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess                | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required)              | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |
| config.snapshotVersion (required) | number  | System-generated snapshot version.                                                                                                                                                                                                                                                        |

#### Returns

| Return type | Status code | Description                    |
| ----------- | ----------- | ------------------------------ |
| void        | 204         | The snapshot has been deleted. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| SnapshotNotFound    | Snapshot not found.                                                                                                                                                      |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.deleteSnapshot({
  id: "...",
  snapshotVersion: 10,
});
```

### downloadDocumentContent

**documentsClient.downloadDocumentContent(config): Promise\<Binary>**

Download document content

**Required scope:** document:documents:read

Download latest document content.

If the `snapshot-version` param is provided, the content of the specified snapshot gets returned instead. This requires write-access to the document.

The document must be accessible to you - therefore, you must either own it or you have received access through sharing.

The response's `Content-Type` header has the same value that has been used during the upload.
For public documents with content-type 'image/\*', the response includes caching headers (`Cache-Control`, `ETag`). Clients can send an `If-None-Match` header with the ETag from a previous response; if the content has not changed, the server returns `304 Not Modified` without a body.

#### Parameters

| Name                   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false`                                                                                                                                                                                                                                       |
| config.filename        | string  | The optional `filename` query parameter can be passed to give the file that's being downloaded a user-provided name and file extension for downloading purposes. This name will be sent back to the client via the Content-Disposition HTTP header. The passed `filename` will be trimmed so that it doesn't contain any space characters around the name. When the `filename` isn't specified, then the name of the document is used as file name and no extension is added, since the service isn't aware of file extensions. |
| config.id (required)   | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| config.ifNoneMatch     | string  | ETag from a previous response. If the current document version matches, the server returns 304 with no body. Only effective for public image documents.                                                                                                                                                                                                                                                                                                                                                                         |
| config.snapshotVersion | number  | Snapshot version, to be used if you want to access a snapshot of the document.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Throws

| Error Type                 | Error Message                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized               | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden                  | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentOrSnapshotNotFound | Document or snapshot not found.                                                                                                                                          |
| InternalServerError        | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable         | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError               | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.downloadDocumentContent({
  id: "...",
});
```

### getDocument

**documentsClient.getDocument(config): Promise\<[GetDocumentResponse](#getdocumentresponse)>**

Retrieve metadata and content.

**Required scope:** document:documents:read

Return metadata and content in one multipart response.

If the `snapshot-version` param is provided, the metadata and content of the specified snapshot gets returned instead. This requires write-access to the document.

The document must be accessible to you - therefore, you must either own it or you have received access through sharing.

#### Parameters

| Name                   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields       | string  | Comma-separated list of field names that are added to the default set of fields. You can include the following additional fields: * `userContext.lastAccessedTime`
* `userContext.isFavorite`
* `modificationInfo.lastModifyingAppId`                                                                                                                                                                                                                                                                                           |
| config.adminAccess     | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false`                                                                                                                                                                                                                                       |
| config.filename        | string  | The optional `filename` query parameter can be passed to give the file that's being downloaded a user-provided name and file extension for downloading purposes. This name will be sent back to the client via the Content-Disposition HTTP header. The passed `filename` will be trimmed so that it doesn't contain any space characters around the name. When the `filename` isn't specified, then the name of the document is used as file name and no extension is added, since the service isn't aware of file extensions. |
| config.id (required)   | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| config.snapshotVersion | number  | Snapshot version, to be used if you want to access a snapshot of the document.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Throws

| Error Type                 | Error Message                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized               | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden                  | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentOrSnapshotNotFound | Document or snapshot not found.                                                                                                                                          |
| InternalServerError        | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable         | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError               | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.getDocument({
  id: "...",
});
```

### getDocumentMetadata

**documentsClient.getDocumentMetadata(config): Promise\<[DocumentMetaData](#documentmetadata)>**

Retrieve document metadata.

**Required scope:** document:documents:read

Retrieve a document's metadata.

The document must be accessible to you - therefore, you must either own it or you have received access through sharing.

If the `snapshot-version` param is provided, the metadata of the specified snapshot gets returned instead. This requires write-access to the document.

#### Parameters

| Name                   | Type    | Description                                                                                                                                                                                                                                                                               |
| ---------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields       | string  | Comma-separated list of field names that are added to the default set of fields. You can include the following additional fields: * `userContext.lastAccessedTime`
* `userContext.isFavorite`
* `modificationInfo.lastModifyingAppId`                                                     |
| config.adminAccess     | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required)   | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |
| config.snapshotVersion | number  | Snapshot version, to be used if you want to access a snapshot of the document.                                                                                                                                                                                                            |

#### Throws

| Error Type                 | Error Message                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized               | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden                  | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentOrSnapshotNotFound | Document or snapshot not found.                                                                                                                                          |
| InternalServerError        | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable         | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError               | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.getDocumentMetadata({
  id: "...",
});
```

### getSnapshotMetadata

**documentsClient.getSnapshotMetadata(config): Promise\<[SnapshotMetadata](#snapshotmetadata)>**

Retrieve snapshot metadata.

**Required scope:** document:documents:read

Retrieve snapshot metadata. Requires write-access to the document.

This doesn't return data of the snapshotted document, instead it returns data about the snapshot itself.

#### Parameters

| Name                              | Type    | Description                                                                                                                                                                                                                                                                               |
| --------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess                | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required)              | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |
| config.snapshotVersion (required) | number  | System-generated snapshot version.                                                                                                                                                                                                                                                        |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| SnapshotNotFound    | Snapshot not found.                                                                                                                                                      |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.getSnapshotMetadata({
  id: "...",
  snapshotVersion: 10,
});
```

### listDocuments

**documentsClient.listDocuments(config): Promise\<[DocumentList](#documentlist)>**

List all documents accessible to you.

**Required scope:** document:documents:read

List the metadata of all documents accessible to you.

This includes your own documents, as well as other users' documents which have been shared with you.

*Note, that at the moment we offer a naive pagination, and therefore interim document mutations and/or an
insufficient sort clause, if provided, can lead to result inconsistencies (such as duplicates, missing entries).*

#### Parameters

| Name               | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields   | string  | Comma-separated list of field names that are added to the default set of fields. You can include the following additional fields: * `description`
* `userContext.lastAccessedTime`
* `userContext.isFavorite`
* `originExtensionId`
* `shareInfo.isShared`
* `shareInfo.isSharedWithCurrentUser`
* `labels`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| config.adminAccess | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| config.filter      | string  | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). If this parameter is omitted, no filtering is applied and all documents available to you will be returned. Filtering by string type parameters (`name`, `type`) when using one of the operators `contains`, `starts-with` and `ends-with` is **case insensitive**. Filtering by `id` using the operators `contains`, `starts-with` and `ends-with` is only supported in case of user-given document ids. When using the equals operator or the not-equals operator, filtering is **case sensitive**. The following fields are legal filtering parameters - any other field names will result in a HTTP 400 response: `id`, `name`, `type`, `version`, `owner`, `modificationInfo.createdTime`, `modificationInfo.createdBy`, `modificationInfo.lastModifiedTime`, `modificationInfo.lastModifiedBy`, `originAppId`, `originExtensionId`, `isPrivate`, `labels`, `userContext.isFavorite` The following constraints apply: * &#x20;
  Parameter names are **case-sensitive**.
  &#x20;
* &#x20;
  Maximum nesting depth (via brackets) is 3.
  &#x20;
* &#x20;
  Maximum length is 1024 characters.
  &#x20;
* &#x20;
  The `labels` field only supports the `contains` operator, which checks whether the document has a specific label assigned. This is an **exact element match** against the labels array. It's not a substring search. For example, `labels contains 'foo'` matches a document with the label `'foo'`, but **not** a document with the label `'foobar'`. To find labels by partial name (substring), use the `listLabels` operation.
  &#x20;
* &#x20;
  The `userContext.isFavorite` field only supports the `=` operator. Use `userContext.isFavorite = true` to list only documents you have marked as favorites. Note: filtering on this field does not require requesting it via `add-fields`.
  &#x20; Examples: * &#x20;
  `name = 'my-document-name'`
  &#x20;
* &#x20;
  `name == 'my-document-name'`
  &#x20;
* &#x20;
  `(name starts-with 'awesome' or type != 'dashboard') and version >= 5`
  &#x20;
* &#x20;
  `modificationInfo.lastModifiedTime >= '2022-07-01T00:10:05.000Z' and not (name contains 'new')`
  &#x20;
* &#x20;
  `originAppId exists`
  &#x20;
* &#x20;
  `originExtensionId exists`
  &#x20;
* &#x20;
  `type in ('dashboard', 'notebook') and name contains 'report'`
  &#x20;
* &#x20;
  `isPrivate = true`
  &#x20;
* &#x20;
  `labels contains 'my-label'`
  &#x20;
* &#x20;
  `labels contains 'my-label' and labels contains 'other-label'`
  &#x20;
* &#x20;
  `userContext.isFavorite = true`
  &#x20; |
| config.page        | number  | The page parameter is used to directly access a specific page. The value of the page parameter, if specified, has to be a value greater than zero. If the value of the page parameter exceeds the highest available page on the backend, an empty page is returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.pageKey     | string  | The page key is used to query results from the next page. You get a `nextPageKey` parameter in the return value of this method to use here. If this parameter is omitted, the first page will be returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.pageSize    | number  | The page size which defines the requested number of result entries. You can request a maximum of 1000 result entries. If this parameter is omitted, the default value of 20 will be used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| config.sort        | string  | The sort parameter, as explained [here](https://dt-url.net/platform-services-filtering) If this parameter is omitted, the documents are sorted by their ids. Sorting by string types (`name`, `type`) is done in a case insensitive manner. The following fields are legal sorting parameters - any other sorting parameters will result in a HTTP 400 response: * `name`
  , &#x20;
  `type`
  , &#x20;
  `version`
  ,&#x20;
  `owner`
  ,&#x20;
  `modificationInfo.createdTime`
  ,&#x20;
  `modificationInfo.createdBy`
  ,&#x20;
  `modificationInfo.lastModifiedTime`
  ,
  `modificationInfo.lastModifiedBy`
  ,
  `originAppId`
  ,&#x20;
  `userContext.lastAccessedTime`
  ,&#x20;
  `userContext.isFavorite` The following constraints apply: * &#x20;
  Maximum number of sorting parameters is 5. Exceeding this limit will result in a HTTP 400 response.
  &#x20;
* &#x20;
  Note that blanks are *not* ignored and will result in a HTTP 400 response.
  &#x20; Examples: * &#x20;
  `name`
  &#x20;
* &#x20;
  `name,-type,modificationInfo.lastModifiedTime`
  &#x20;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.listDocuments();
```

### listLabels

**documentsClient.listLabels(config): Promise\<[LabelsList](#labelslist)>**

Lists labels accessible to you.

**Required scope:** document:documents:read

Lists labels accessible to you. Accepts optional parameters for filtering by label substring (`contains`) and by document type (`documentTypes`); when both are provided they apply together. When `onlyAppSupportedDocTypes` is `true`, the document types supported by installed apps are used for filtering. If `documentTypes` and `onlyAppSupportedDocTypes` are provided both filters get intersected (set intersection) and the result of this intersection is used as the effective type filter. Results are sorted alphabetically.

#### Parameters

| Name                            | Type           | Description                                                                                                                                                                                                                                                                                                                   |
| ------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess              | boolean        | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false`                                     |
| config.contains                 | string         | Search string for filtering labels. If this parameter is provided, the maximum length is 80 characters. Labels that start with the search string are returned before labels that contain the search string. If this parameter is omitted, no filtering is applied and all labels accessible to you will be returned.          |
| config.documentTypes            | Array\<string> | Restricts the returned labels to those used on documents of the provided types (case-sensitive, exact match). If this parameter is omitted, labels from documents of any type accessible to you are returned.                                                                                                                 |
| config.onlyAppSupportedDocTypes | boolean        | If `true`, the document types supported by installed apps (declared in their manifests) are intersected (set intersection) with `documentTypes` and used as the effective document-type filter. If `documentTypes` is also omitted and no app-supported types exist, no labels are returned. <br /><br />**Default:** `false` |
| config.page                     | number         | The page parameter is used to directly access a specific page. The value of the page parameter, if specified, has to be a value greater than zero. If the value of the page parameter exceeds the highest available page on the backend, an empty page is returned.                                                           |
| config.pageKey                  | string         | The page key is used to query results from the next page. You get a `nextPageKey` parameter in the return value of this method to use here. If this parameter is omitted, the first page will be returned.                                                                                                                    |
| config.pageSize                 | number         | The page size which defines the requested number of result entries. You can request a maximum of 1000 result entries. If this parameter is omitted, the default value of 20 will be used.                                                                                                                                     |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.listLabels();
```

### listSnapshots

**documentsClient.listSnapshots(config): Promise\<[SnapshotList](#snapshotlist)>**

List all snapshots of the document

**Required scope:** document:documents:read

Returns metadata of all snapshots of the document, in descending order of the snapshot version. Requires write-access to the document. For built-in documents, this endpoint returns an empty list rather than a 403, since built-in documents don't support snapshots.

You can apply pagination via the `pageKey` and `pageSize` parameters.

*Note, that at the moment we offer a naive pagination, and therefore interim mutations can lead to result inconsistencies (such as duplicates, missing entries).*

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                               |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |
| config.page          | number  | The page parameter is used to directly access a specific page. The value of the page parameter, if specified, has to be a value greater than zero. If the value of the page parameter exceeds the highest available page on the backend, an empty page is returned.                       |
| config.pageKey       | string  | The page key is used to query results from the next page. You get a `nextPageKey` parameter in the return value of this method to use here. If this parameter is omitted, the first page will be returned.                                                                                |
| config.pageSize      | number  | The page size which defines the requested number of result entries. You can request a maximum of 1000 result entries. If this parameter is omitted, the default value of 20 will be used.                                                                                                 |

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
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.listSnapshots({
  id: "...",
});
```

### makePrivate

**documentsClient.makePrivate(config): Promise\<void>**

Make the document private.

**Required scope:** document:documents:write

Make the document private again, revoking the read access that every user of the environment previously had
through the document being public.

This can only be performed by the document owner. Admins may additionally make ready-made documents private.

Calling this operation on a document that is already private is a no-op.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                               |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |

#### Returns

| Return type | Status code | Description                         |
| ----------- | ----------- | ----------------------------------- |
| void        | 204         | The document has been made private. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound    | Document not found.                                                                                                                                                      |
| Conflict            | Optimistic locking failed, or the document is actively locked by another user, or some other conflict.                                                                   |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.makePrivate({
  id: "...",
});
```

### makePublic

**documentsClient.makePublic(config): Promise\<void>**

Make the document public.

**Required scope:** document:documents:write

Make the document public, granting read access to every user of the environment.

This can only be performed by the document owner. Admins may additionally make ready-made documents public.

Calling this operation on a document that is already public is a no-op.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                               |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |

#### Returns

| Return type | Status code | Description                        |
| ----------- | ----------- | ---------------------------------- |
| void        | 204         | The document has been made public. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound    | Document not found.                                                                                                                                                      |
| Conflict            | Optimistic locking failed, or the document is actively locked by another user, or some other conflict.                                                                   |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.makePublic({
  id: "...",
});
```

### restoreSnapshot

**documentsClient.restoreSnapshot(config): Promise\<[RestoreDocumentResult](#restoredocumentresult)>**

Restore the snapshot.

**Required scope:** document:documents:write

Reset the document to the state it had when the snapshot was created. Requires write-access to the document.

If no snapshot of the current document state exists, then a new snapshot is created
before restoring the selected snapshot.
If the document has more than 50 snapshots, its oldest snapshot gets automatically deleted.

This operation doesn't change ownership or access/sharing data.

#### Parameters

| Name                              | Type    | Description                                                                                                                                                                                                                                                                               |
| --------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess                | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required)              | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |
| config.snapshotVersion (required) | number  | System-generated snapshot version.                                                                                                                                                                                                                                                        |

#### Throws

| Error Type                 | Error Message                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized               | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden                  | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentOrSnapshotNotFound | Document or snapshot not found.                                                                                                                                          |
| Conflict                   | Optimistic locking failed, or the document is actively locked by another user, or some other conflict.                                                                   |
| InternalServerError        | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable         | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError               | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.restoreSnapshot({
  id: "...",
  snapshotVersion: 10,
});
```

### transferDocumentOwner

**documentsClient.transferDocumentOwner(config): Promise\<void>**

Transfers ownership of the document to a new owner.

**Required scope:** document:documents:write

Transfers ownership of the document to a new owner. The previous owner loses access to the document. This operation can only be performed by the document owner.

#### Parameters

| Name                    | Type                            | Description                                                                                                                                                                                                                                                                               |
| ----------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess      | boolean                         | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.body (required)  | [TransferOwner](#transferowner) |                                                                                                                                                                                                                                                                                           |
| config.id (required)    | string                          | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |
| config.sendNotification | boolean                         | Indicates whether a notification shall be sent to share recipients or new document owners. Notifications are only sent for documents whose type is supported by at least one app installed in the environment. <br /><br />**Default:** `true`                                            |

#### Returns

| Return type | Status code | Description                                  |
| ----------- | ----------- | -------------------------------------------- |
| void        | 204         | Ownership has been transferred successfully. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound    | Document not found.                                                                                                                                                      |
| Conflict            | Optimistic locking failed, or the document is actively locked by another user, or some other conflict.                                                                   |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.transferDocumentOwner({
  id: "...",
  body: { newOwnerId: "..." },
});
```

### updateDocument

**documentsClient.updateDocument(config): Promise\<[UpdateDocumentMetadata](#updatedocumentmetadata)>**

Update metadata and content. Optionally, create a snapshot.

**Required scope:** document:documents:write

Update metadata and/or the content of the document.

Name, type, and content must be non-empty. Name, type, content, isPrivate and isReshareable are optional, but at least one of them must be provided.

`isPrivate` is deprecated - use the dedicated makePublic and
makePrivate operations instead to change a document's public visibility.

The document must be accessible to you - therefore, you must either own it or you have received access through sharing.

As part of this operation, you can optionally create a snapshot of the document before the update is applied.
In that case, if the document has more than 50 snapshots, its oldest snapshot gets automatically deleted.
A maximum of 5 snapshots can be created per document within a 60-second period.

#### Parameters

| Name                                       | Type                                      | Description                                                                                                                                                                                                                                                                               |
| ------------------------------------------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess                         | boolean                                   | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.body (required)                     | [UpdateDocumentBody](#updatedocumentbody) |                                                                                                                                                                                                                                                                                           |
| config.createSnapshot                      | boolean                                   | Indicates whether a new snapshot of the document should be created before the update is applied.<br /><br />**Default:** `false`                                                                                                                                                          |
| config.id (required)                       | string                                    | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |
| config.optimisticLockingVersion (required) | string                                    | To protect users from accidental overrides, the current version of the document must match the optimistic locking version parameter - otherwise, this request will fail and the entity is left unchanged.                                                                                 |

#### Throws

| Error Type                        | Error Message                                                                                                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest                        | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized                      | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden                         | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound                  | Document not found.                                                                                                                                                      |
| Conflict                          | Optimistic locking failed, or the document is actively locked by another user, or some other conflict.                                                                   |
| DocumentTooLarge                  | Maximum content size exceeded.                                                                                                                                           |
| SnapshotCreationRateLimitExceeded | Too many snapshots have been created for this document in the recent time. Try again later.                                                                              |
| InternalServerError               | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable                | There is a temporary problem in the backend.                                                                                                                             |
| InsufficientStorage               | The storage quota or maximum number of documents has been exceeded.                                                                                                      |
| GeneralError                      | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.updateDocument({
  id: "...",
  optimisticLockingVersion: "...",
  body: {},
});
```

### updateDocumentContent

**documentsClient.updateDocumentContent(config): Promise\<[DocumentMetaData](#documentmetadata)>**

Update document content

**Required scope:** document:documents:write

Update a document's content, by completely replacing it.

The document must be accessible to you - therefore, you must either own it or you have received access through sharing.

[Optimistic locking](https://dt-url.net/platform-services-locking) is enforced via the `optimistic-locking-version` parameter.

The content size must be greater than 0 and must not exceed `50 MB`.

The `Content-Type` header must be set for the multipart part; it will be used as the (new) content type of the document. Illegal (non-mime-type) content types result in a `400 - Bad Request` error.

The `Content-Disposition` header must be set for the multipart part;

#### Parameters

| Name                                       | Type                                                    | Description                                                                                                                                                                                                                                                                               |
| ------------------------------------------ | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess                         | boolean                                                 | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.body (required)                     | [UpdateDocumentContentBody](#updatedocumentcontentbody) |                                                                                                                                                                                                                                                                                           |
| config.id (required)                       | string                                                  | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |
| config.optimisticLockingVersion (required) | string                                                  | To protect users from accidental overrides, the current version of the document must match the optimistic locking version parameter - otherwise, this request will fail and the entity is left unchanged.                                                                                 |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound    | Document not found.                                                                                                                                                      |
| Conflict            | Optimistic locking failed, or the document is actively locked by another user, or some other conflict.                                                                   |
| DocumentTooLarge    | Maximum content size exceeded.                                                                                                                                           |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| InsufficientStorage | The storage quota or maximum number of documents has been exceeded.                                                                                                      |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.updateDocumentContent({
  id: "...",
  optimisticLockingVersion: "...",
  body: { content: "..." },
});
```

### ~~updateDocumentMetadata~~

> ⚠️ **Deprecated**

**documentsClient.updateDocumentMetadata(config): Promise\<[DocumentMetaData](#documentmetadata)>**

Update document metadata

**Required scope:** document:documents:write

Deprecated - the preferred way to update a document is the updateDocument operation.

Partially update a document's user-defined metadata. At least one property must be updated, otherwise the operation fails.

The document's content isn't affected by this operation.

[Optimistic locking](https://dt-url.net/platform-services-locking) is enforced via the `optimistic-locking-version` parameter.

The document must be accessible to you - therefore, you must either own it or you have received access through sharing.

#### Parameters

| Name                                       | Type                                                      | Description                                                                                                                                                                                                                                                                               |
| ------------------------------------------ | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess                         | boolean                                                   | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.body (required)                     | [UpdateDocumentMetadataBody](#updatedocumentmetadatabody) |                                                                                                                                                                                                                                                                                           |
| config.id (required)                       | string                                                    | System-generated or user-given id of a document.                                                                                                                                                                                                                                          |
| config.optimisticLockingVersion (required) | string                                                    | To protect users from accidental overrides, the current version of the document must match the optimistic locking version parameter - otherwise, this request will fail and the entity is left unchanged.                                                                                 |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound    | Document not found.                                                                                                                                                      |
| Conflict            | Optimistic locking failed, or the document is actively locked by another user, or some other conflict.                                                                   |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { documentsClient } from "@dynatrace-sdk/client-document";

const data = await documentsClient.updateDocumentMetadata({
  id: "...",
  optimisticLockingVersion: "...",
  body: {},
});
```
