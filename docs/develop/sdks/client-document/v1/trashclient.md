## trashClient

```js
import { trashClient } from '@dynatrace-sdk/client-document';
```

### deleteTrashedDocument

**trashClient.deleteTrashedDocument(config): Promise\<void>**

Irreversibly destroy the document.

**Required scope:** document:trash.documents:delete

This operation irreversibly destroys the document.
Only the document owner is permitted to do this.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. For system-owned documents (ready-made and extension-shipped) this is limited to hiding them and creating/maintaining their direct `read`-shares (see System-owned Documents); other owner operations remain unsupported for those documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Returns

| Return type | Status code | Description                                |
| ----------- | ----------- | ------------------------------------------ |
| void        | 204         | The document has been permanently deleted. |

#### Throws

| Error Type              | Error Message                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized            | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden               | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| TrashedDocumentNotFound | Trashed document not found.                                                                                                                                              |
| InternalServerError     | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable      | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError            | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { trashClient } from "@dynatrace-sdk/client-document";

const data = await trashClient.deleteTrashedDocument({
  id: "...",
});
```

### inspectTrashedDocument

**trashClient.inspectTrashedDocument(config): Promise\<[TrashDocument](#trashdocument)>**

Inspect the deleted document.

**Required scope:** document:trash.documents:read

Inspect the deleted document's metadata.
Only the document owner is permitted to do this.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. For system-owned documents (ready-made and extension-shipped) this is limited to hiding them and creating/maintaining their direct `read`-shares (see System-owned Documents); other owner operations remain unsupported for those documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Throws

| Error Type              | Error Message                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized            | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden               | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| TrashedDocumentNotFound | Trashed document not found.                                                                                                                                              |
| InternalServerError     | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable      | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError            | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { trashClient } from "@dynatrace-sdk/client-document";

const data = await trashClient.inspectTrashedDocument({
  id: "...",
});
```

### listTrashedDocuments

**trashClient.listTrashedDocuments(config): Promise\<[TrashDocumentList](#trashdocumentlist)>**

List your deleted documents.

**Required scope:** document:trash.documents:read

Lists all documents, owned by you, which currently reside in the trash.

Note that documents in the trash are irreversibly deleted after 30 days.

*Note that at the moment we offer a naive pagination, and therefore interim document mutations and/or an
insufficient sort clause, if provided, can lead to result inconsistencies (such as duplicates, missing entries).*

#### Parameters

| Name               | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. For system-owned documents (ready-made and extension-shipped) this is limited to hiding them and creating/maintaining their direct `read`-shares (see System-owned Documents); other owner operations remain unsupported for those documents. <br /><br />**Default:** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| config.filter      | string  | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). If this parameter is omitted, no filtering is applied and all your deleted documents will be returned. Filtering by string type parameters when using one of the operators `contains`, `starts-with` and `ends-with` is **case insensitive**. Filtering by `id` using the operators `contains`, `starts-with` and `ends-with` is only supported in case of user-given document ids. When using the equals operator or the not-equals operator, filtering is **case sensitive**. The following fields are legal filtering parameters - any other field names will result in a HTTP 400 response: `id`, `name`, `type`, `deletionInfo.deletedTime`, `deletionInfo.deletedBy` The following constraints apply: * &#x20;
  Parameter names are **case-sensitive**.
  &#x20;
* &#x20;
  Maximum nesting depth (via brackets) is 3.
  &#x20;
* &#x20;
  Maximum length is 1024 characters.
  &#x20; |
| config.page        | number  | The page parameter is used to directly access a specific page. The value of the page parameter, if specified, has to be a value greater than zero. If the value of the page parameter exceeds the highest available page on the backend, an empty page is returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| config.pageKey     | string  | The page key is used to query results from the next page. You get a `nextPageKey` parameter in the return value of this method to use here. If this parameter is omitted, the first page will be returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| config.pageSize    | number  | The page size which defines the requested number of result entries. You can request a maximum of 1000 result entries. If this parameter is omitted, the default value of 20 will be used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { trashClient } from "@dynatrace-sdk/client-document";

const data = await trashClient.listTrashedDocuments();
```

### restoreTrashedDocument

**trashClient.restoreTrashedDocument(config): Promise\<void>**

Restore the deleted document.

**Required scope:** document:trash.documents:restore

This operation restores the document from the trash.
All users who had access before the deletion regain their access to the document.
Only the document owner is permitted to do this.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. For system-owned documents (ready-made and extension-shipped) this is limited to hiding them and creating/maintaining their direct `read`-shares (see System-owned Documents); other owner operations remain unsupported for those documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | System-generated or user-given id of a document.                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Returns

| Return type | Status code | Description                     |
| ----------- | ----------- | ------------------------------- |
| void        | 204         | The document has been restored. |

#### Throws

| Error Type              | Error Message                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized            | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden               | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| TrashedDocumentNotFound | Trashed document not found.                                                                                                                                              |
| InternalServerError     | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable      | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError            | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { trashClient } from "@dynatrace-sdk/client-document";

const data = await trashClient.restoreTrashedDocument({
  id: "...",
});
```
