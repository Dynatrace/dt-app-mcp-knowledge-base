## directSharesClient

```js
import { directSharesClient } from '@dynatrace-sdk/client-document';
```

### addDirectShareRecipients

**directSharesClient.addDirectShareRecipients(config): Promise\<void>**

Add recipients to a direct-share.

**Required scope:** document:direct-shares:write

Add one or multiple SSO-users and/or SSO-groups to this share. The affected users immediately gain access to the document.

You can only add recipients to shares which are accessible to you. Shares accessible to you include those of your own documents, as well as those of reshareable documents owned by other users to which you have write access.
The maximum number of recipients is 1000.

The validity of the SSO-users and SSO-groups isn't verified. It's technically possible, albeit pointless, to add non-existing users and groups.

Already added users or groups are ignored.

#### Parameters

| Name                    | Type                                                  | Description                                                                                                                                                                                                                                                                               |
| ----------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess      | boolean                                               | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.body (required)  | [AddDirectShareRecipients](#adddirectsharerecipients) |                                                                                                                                                                                                                                                                                           |
| config.id (required)    | string                                                | System-generated id of a share.                                                                                                                                                                                                                                                           |
| config.sendNotification | boolean                                               | Indicates whether a notification shall be sent to share recipients or new document owners. Notifications are only sent for documents whose type is supported by at least one app installed in the environment. <br /><br />**Default:** `true`                                            |

#### Returns

| Return type | Status code | Description                     |
| ----------- | ----------- | ------------------------------- |
| void        | 204         | The recipients have been added. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| ShareNotFound       | Share not found.                                                                                                                                                         |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { directSharesClient } from "@dynatrace-sdk/client-document";

const data =
  await directSharesClient.addDirectShareRecipients({
    id: "...",
    body: {
      recipients: [
        {
          id: "441664f0-23c9-40ef-b344-18c02c23d789",
          type: "group",
        },
      ],
    },
  });
```

### createDirectShare

**directSharesClient.createDirectShare(config): Promise\<[DirectShare](#directshare)>**

Create a direct-share.

**Required scope:** document:direct-shares:write

Create a direct-share for a document. This is only possible for documents you own, as well as for reshareable documents owned by other users to which you have write access. The share can be used to grant access to a specific set of users and/or groups, via addRecipients.

You can optionally add users and/or groups which will directly be registered as recipients of the share. The users and groups are specified via their sso-ids. The maximum number of recipients is 1000.

The validity of the SSO-users and SSO-groups isn't verified. It's technically possible, albeit pointless, to add non-existing users and groups.

The share can be created with either `read` or `read-write` access.

A document can have maximally one direct-share per access type, therefore it's impossible to create multiple `read`-shares or multiple `read-write`-shares for a single document.

This means, that you can create one `read`-share for a document, and this single `read`-share can be used to give read-access to an arbitrary number of users (and/or groups). The same applies to a `read-write`-share.

#### Parameters

| Name                    | Type                                    | Description                                                                                                                                                                                                                                                                               |
| ----------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess      | boolean                                 | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.body (required)  | [CreateDirectShare](#createdirectshare) |                                                                                                                                                                                                                                                                                           |
| config.sendNotification | boolean                                 | Indicates whether a notification shall be sent to share recipients or new document owners. Notifications are only sent for documents whose type is supported by at least one app installed in the environment. <br /><br />**Default:** `true`                                            |

#### Returns

| Return type                 | Status code | Description                                              |
| --------------------------- | ----------- | -------------------------------------------------------- |
| [DirectShare](#directshare) | 201         | A new share for the specified document has been created. |

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
import { directSharesClient } from "@dynatrace-sdk/client-document";

const data = await directSharesClient.createDirectShare({
  body: {
    documentId: "...",
    access: "...",
    recipients: [
      {
        id: "441664f0-23c9-40ef-b344-18c02c23d789",
        type: "group",
      },
    ],
  },
});
```

### deleteDirectShare

**directSharesClient.deleteDirectShare(config): Promise\<void>**

Delete a direct-share.

**Required scope:** document:direct-shares:delete

Delete the share. This will *not* delete the share's document.

You can only delete shares which are accessible to you. Shares accessible to you include those of your own documents, as well as those of reshareable documents owned by other users to which you have write access.

This operation effectively revokes the access of all the share's recipients.

Be aware that deleting a share doesn't necessarily prevent a user from accessing a document, as the user might still have access via another share (of the same document). E.g., if a user has 'read' and 'read-write' access (via one 'read' and another 'read-write' share), and the 'read' share gets deleted, access is still granted to the user via the other 'read-write' share.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                               |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | System-generated id of a share.                                                                                                                                                                                                                                                           |

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
import { directSharesClient } from "@dynatrace-sdk/client-document";

const data = await directSharesClient.deleteDirectShare({
  id: "...",
});
```

### getDirectShare

**directSharesClient.getDirectShare(config): Promise\<[DirectShare](#directshare)>**

Retrieve a direct-share.

**Required scope:** document:direct-shares:read

Retrieve a direct-share via its id.
The share must be accessible to you. Shares accessible to you include those of your own documents, as well as those of reshareable documents owned by other users to which you have write access.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                               |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | System-generated id of a share.                                                                                                                                                                                                                                                           |

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
import { directSharesClient } from "@dynatrace-sdk/client-document";

const data = await directSharesClient.getDirectShare({
  id: "...",
});
```

### getDirectShareRecipients

**directSharesClient.getDirectShareRecipients(config): Promise\<[DirectShareRecipientList](#directsharerecipientlist)>**

List the recipients of a direct-share.

**Required scope:** document:direct-shares:read

Retrieve a share's recipients. If there are groups among the recipients, the groups always appear before the users.

You can only retrieve the recipients for shares which are accessible to you. Shares accessible to you include those of your own documents, as well as those of reshareable documents owned by other users to which you have write access.

#### Parameters

| Name                 | Type    | Description                                                                                                                                                                                                                                                                               |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess   | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.id (required) | string  | System-generated id of a share.                                                                                                                                                                                                                                                           |
| config.page          | number  | The page parameter is used to directly access a specific page. The value of the page parameter, if specified, has to be a value greater than zero. If the value of the page parameter exceeds the highest available page on the backend, an empty page is returned.                       |
| config.pageKey       | string  | The page key is used to query results from the next page. You get a `nextPageKey` parameter in the return value of this method to use here. If this parameter is omitted, the first page will be returned.                                                                                |
| config.pageSize      | number  | The page size which defines the requested number of result entries. You can request a maximum of 1000 result entries. If this parameter is omitted, the default value of 20 will be used.                                                                                                 |

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
import { directSharesClient } from "@dynatrace-sdk/client-document";

const data =
  await directSharesClient.getDirectShareRecipients({
    id: "...",
  });
```

### listDirectShares

**directSharesClient.listDirectShares(config): Promise\<[DirectShareList](#directsharelist)>**

List all direct-shares accessible to you.

**Required scope:** document:direct-shares:read

List all direct-shares accessible to you.
Shares accessible to you include those of your own documents, as well as those of reshareable documents owned by other users to which you have write access. If you are only concerned with a specific document's shares, or a specific share, you can use the `filter` parameter to narrow down the result set. If you attempt to retrieve shares which are not accessible to you the result set will be empty.

*Note, that at the moment we offer a naive pagination, and therefore interim mutations can lead to result inconsistencies (such as duplicates, missing entries).*

#### Parameters

| Name               | Type    | Description                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.adminAccess | boolean | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false`                                                              |
| config.filter      | string  | The filter query, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is only possible on the `documentId` property, and only with the equals operator. Via this you can effectively retrieve the direct-shares of a specific document. If this parameter is omitted, all direct-shares accessible to you will be returned. |
| config.page        | number  | The page parameter is used to directly access a specific page. The value of the page parameter, if specified, has to be a value greater than zero. If the value of the page parameter exceeds the highest available page on the backend, an empty page is returned.                                                                                    |
| config.pageKey     | string  | The page key is used to query results from the next page. You get a `nextPageKey` parameter in the return value of this method to use here. If this parameter is omitted, the first page will be returned.                                                                                                                                             |
| config.pageSize    | number  | The page size which defines the requested number of result entries. You can request a maximum of 1000 result entries. If this parameter is omitted, the default value of 20 will be used.                                                                                                                                                              |

#### Returns

| Return type                         | Status code | Description                                |
| ----------------------------------- | ----------- | ------------------------------------------ |
| [DirectShareList](#directsharelist) | 200         | A list of direct-shares accessible to you. |

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
import { directSharesClient } from "@dynatrace-sdk/client-document";

const data = await directSharesClient.listDirectShares();
```

### removeDirectShareRecipients

**directSharesClient.removeDirectShareRecipients(config): Promise\<void>**

Remove recipients from a share.

**Required scope:** document:direct-shares:write

Remove one or multiple recipients from the share. The affected users immediately lose access to the document.

You can only remove recipients from shares which are accessible to you. Shares accessible to you include those of your own documents, as well as those of reshareable documents owned by other users to which you have write access.
The maximum number of recipients is 1000.

Non-existing users or groups are ignored.

#### Parameters

| Name                   | Type                                                        | Description                                                                                                                                                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                                                     | Indicates whether the operation should be performed with elevated permissions - additionally requires **document:documents:admin**. If provided, the user effectively operates as owner of all documents. This isn't supported for ready-made documents. <br /><br />**Default:** `false` |
| config.body (required) | [RemoveDirectShareRecipients](#removedirectsharerecipients) |                                                                                                                                                                                                                                                                                           |
| config.id (required)   | string                                                      | System-generated id of a share.                                                                                                                                                                                                                                                           |

#### Returns

| Return type | Status code | Description                       |
| ----------- | ----------- | --------------------------------- |
| void        | 204         | The recipients have been removed. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| ShareNotFound       | Share not found.                                                                                                                                                         |
| InternalServerError | There is a problem in the backend.                                                                                                                                       |
| ServiceUnavailable  | There is a temporary problem in the backend.                                                                                                                             |
| GeneralError        | Unexpected error.                                                                                                                                                        |

**Code example**

```ts
import { directSharesClient } from "@dynatrace-sdk/client-document";

const data =
  await directSharesClient.removeDirectShareRecipients({
    id: "...",
    body: { ids: ["..."] },
  });
```
