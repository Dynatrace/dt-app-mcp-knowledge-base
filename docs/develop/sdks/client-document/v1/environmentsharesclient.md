## environmentSharesClient

```js
import { environmentSharesClient } from '@dynatrace-sdk/client-document';
```

### claimEnvironmentShare

**environmentSharesClient.claimEnvironmentShare(config): Promise\<[EnvironmentShareClaimResult](#environmentshareclaimresult)>**

Claim another user's environment-share.

**Required scope:** document:environment-shares:claim

Claim this environment-share, therefore gaining access to the share's document. From thereafter, the document will be accessible to you with the specific permissions defined by the share. You can then access the document as usual, via the same endpoints which you would use to access your own documents.

Claiming your own shares isn't possible. You can only claim shares of documents belonging to other users *of the same environment*.

Once you have claimed access to a document, you can not revoke that access again.

The document's owner can revoke your access by deleting the share. This will effectively revoke the access you have been granted by claiming this share.

You can claim multiple shares of the same document, and each share will grant you different permissions.

Claiming the same share multiple times doesn't have any effect.

#### Parameters

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| config.id (required) | string | Share id.   |

#### Returns

| Return type                                                 | Status code | Description                                                                                            |
| ----------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| [EnvironmentShareClaimResult](#environmentshareclaimresult) | 200         | You have successfully claimed this share and can now access the document with the granted permissions. |

#### Throws

| Error Type                   | Error Message                                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ClaimingOwnedShareNotAllowed | A user can't claim one of their own shares.                                                                                                                              |
| Unauthorized                 | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden                    | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| ShareNotFound                | Share not found.                                                                                                                                                         |
| InternalServerError          | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable           | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError                 | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { environmentSharesClient } from "@dynatrace-sdk/client-document";

const data =
  await environmentSharesClient.claimEnvironmentShare({
    id: "...",
  });
```

### createEnvironmentShare

**environmentSharesClient.createEnvironmentShare(config): Promise\<[EnvironmentShare](#environmentshare)>**

Create an environment-share for a document.

**Required scope:** document:environment-shares:write

Create an environment-share, which can be used to give one or multiple other users access to this document. This is only possible for documents you own, as well as for reshareable documents owned by other users to which you have write access.
A share can be created with either `read` or `read-write` access.

A document can have maximally one share per access type, therefore it's impossible to create multiple read-shares or multiple 'read-write'-shares for a single document.

This means, that you can create one read-share for a document, and this single read-share can be used to give read-access to an arbitrary number of users. The same applies to a 'read-write'-share.

Creating a share does *not* automatically allow users to access the document - only those users who explicitly claim the share gain access to the document.

Revoking access from users can be done by deleting the share.

#### Parameters

| Name                   | Type                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                           | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. For system-owned documents (ready-made and extension-shipped) this is limited to hiding them and creating/maintaining their direct `read`-shares (see System-owned Documents); other owner operations remain unsupported for those documents. <br /><br />**Default:** `false` |
| config.body (required) | [CreateEnvShare](#createenvshare) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Returns

| Return type                           | Status code | Description                                                          |
| ------------------------------------- | ----------- | -------------------------------------------------------------------- |
| [EnvironmentShare](#environmentshare) | 201         | A new environment-share for the specified document has been created. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| DocumentNotFound    | Document not found.                                                                                                                                                      |
| ShareAlreadyExists  | Share creation failed - a share with the specified permission already exists for the document.                                                                           |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { environmentSharesClient } from "@dynatrace-sdk/client-document";

const data =
  await environmentSharesClient.createEnvironmentShare({
    body: { documentId: "...", access: "..." },
  });
```

### deleteEnvironmentShare

**environmentSharesClient.deleteEnvironmentShare(config): Promise\<void>**

Delete an environment-share accessible to you.

**Required scope:** document:environment-shares:delete

Delete the share. This will *not* delete the share's document.

The share must be accessible to you. Shares accessible to you include those of your own documents, as well as those of reshareable documents owned by other users to which you have write access.

This operation effectively revokes the access which has been granted to *all users* which have claimed this share. This is the only way to revoke access to your document from other users. It's impossible to revoke access of individual users.

Be aware that deleting a share doesn't necessarily prevent a user from accessing a document, as the user might still have access via another share (of the same document). E.g., if a user has read- and readwrite-access (via one read-share and another readwrite-share), and the read-share gets deleted, access is still granted to the user via the readwrite-share.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. For system-owned documents (ready-made and extension-shipped) this is limited to hiding them and creating/maintaining their direct `read`-shares (see System-owned Documents); other owner operations remain unsupported for those documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | Environment-share id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Returns

| Return type | Status code | Description                 |
| ----------- | ----------- | --------------------------- |
| void        | 204         | The share has been deleted. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| ShareNotFound       | Share not found.                                                                                                                                                         |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { environmentSharesClient } from "@dynatrace-sdk/client-document";

const data =
  await environmentSharesClient.deleteEnvironmentShare({
    id: "...",
  });
```

### getEnvironmentShare

**environmentSharesClient.getEnvironmentShare(config): Promise\<[EnvironmentShare](#environmentshare)>**

Retrieve an environment-share.

**Required scope:** document:environment-shares:read

Retrieve an environment-share via its id.
The share must be accessible to you. Shares accessible to you include those of your own documents, as well as those of reshareable documents owned by other users to which you have write access.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. For system-owned documents (ready-made and extension-shipped) this is limited to hiding them and creating/maintaining their direct `read`-shares (see System-owned Documents); other owner operations remain unsupported for those documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | Environment-share id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| ShareNotFound       | Share not found.                                                                                                                                                         |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { environmentSharesClient } from "@dynatrace-sdk/client-document";

const data =
  await environmentSharesClient.getEnvironmentShare({
    id: "...",
  });
```

### getEnvironmentShareClaimers

**environmentSharesClient.getEnvironmentShareClaimers(config): Promise\<[EnvironmentShareClaimerList](#environmentshareclaimerlist)>**

List the claimers of an environment-share accessible to you.

**Required scope:** document:environment-shares:read

Retrieve a share's claimers.

The share must be accessible to you.
Shares accessible to you include those of your own documents, as well as those of reshareable documents owned by other users to which you have write access.

You can control the result's pagination via the `pageKey`, `page` and `pageSize` parameters.

*Note, that at the moment we offer a naive pagination, and therefore interim document mutations and/or an
insufficient sort clause, if provided, can lead to result inconsistencies (such as duplicates, missing entries).*

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. For system-owned documents (ready-made and extension-shipped) this is limited to hiding them and creating/maintaining their direct `read`-shares (see System-owned Documents); other owner operations remain unsupported for those documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | Environment-share id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.page          | number  | The page parameter is used to directly access a specific page. The value of the page parameter, if specified, has to be a value greater than zero. If the value of the page parameter exceeds the highest available page on the backend, an empty page is returned.                                                                                                                                                                                                                      |
| config.pageKey       | string  | The page key is used to query results from the next page. You get a `nextPageKey` parameter in the return value of this method to use here. If this parameter is omitted, the first page will be returned.                                                                                                                                                                                                                                                                               |
| config.pageSize      | number  | The page size which defines the requested number of result entries. You can request a maximum of 1000 result entries. If this parameter is omitted, the default value of 20 will be used.                                                                                                                                                                                                                                                                                                |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| ShareNotFound       | Share not found.                                                                                                                                                         |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { environmentSharesClient } from "@dynatrace-sdk/client-document";

const data =
  await environmentSharesClient.getEnvironmentShareClaimers(
    { id: "..." },
  );
```

### listEnvironmentShares

**environmentSharesClient.listEnvironmentShares(config): Promise\<[EnvironmentShareList](#environmentsharelist)>**

List environment-shares accessible to you.

**Required scope:** document:environment-shares:read

List all environment-shares accessible to you.
Shares accessible to you include those of your own documents, as well as those of reshareable documents owned by other users to which you have write access.
If you are only concerned with a specific document's environment-shares, or a specific share, you can use the `filter` parameter to narrow down the result set. If you attempt to retrieve environment-shares of a document not accessible by you, the result set will be empty.

Furthermore, you can apply pagination via the `pageKey`, `page` and `pageSize` parameters.

*Note, that at the moment we offer a naive pagination, and therefore interim mutations can lead to result inconsistencies (such as duplicates, missing entries).*

#### Parameters

| Name               | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. For system-owned documents (ready-made and extension-shipped) this is limited to hiding them and creating/maintaining their direct `read`-shares (see System-owned Documents); other owner operations remain unsupported for those documents. <br /><br />**Default:** `false` |
| config.filter      | string  | The filter query, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is only possible on the `documentId` property, and only via the equals operator. Via this you can effectively retrieve the environment-shares of a specific document. If this parameter is omitted, all environment-shares accessible to you will be returned.                                                                                                                          |
| config.page        | number  | The page parameter is used to directly access a specific page. The value of the page parameter, if specified, has to be a value greater than zero. If the value of the page parameter exceeds the highest available page on the backend, an empty page is returned.                                                                                                                                                                                                                      |
| config.pageKey     | string  | The page key is used to query results from the next page. You get a `nextPageKey` parameter in the return value of this method to use here. If this parameter is omitted, the first page will be returned.                                                                                                                                                                                                                                                                               |
| config.pageSize    | number  | The page size which defines the requested number of result entries. You can request a maximum of 1000 result entries. If this parameter is omitted, the default value of 20 will be used.                                                                                                                                                                                                                                                                                                |

#### Returns

| Return type                                                                                                                                                                                                                                                                                                                                 | Status code | Description                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------- |
| [EnvironmentShareList](#environmentsharelist)                                                                                                                                                                                                                                                                                               | 200         | A list of the environment-shares accessible to you. |
| If the list was paginated (see `pageKey`, `page` and `pageSize`), and there are more environment-shares available, you will find a non-empty `nextPageKey` which can be used for a follow-up query. The `totalCount` property will let you know the number of all matching environment-shares, as if no pagination would have been applied. |             |                                                     |

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
import { environmentSharesClient } from "@dynatrace-sdk/client-document";

const data =
  await environmentSharesClient.listEnvironmentShares();
```
