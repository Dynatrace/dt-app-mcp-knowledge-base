## Types

### AcquireLock

Input to acquire the lock.

| Name                       | Type   | Description                                                        |
| -------------------------- | ------ | ------------------------------------------------------------------ |
| documentVersion (required) | number | The latest version of the document.                                |
| lockDurationInSeconds      | number | Duration specified in seconds to acquire the lock on the document. |

### AcquireLockResult

| Name                       | Type   | Description                                  |
| -------------------------- | ------ | -------------------------------------------- |
| documentVersion (required) | number | The latest version of the document.          |
| lockedUntil (required)     | Date   | Timestamp until the document remains locked. |

### AddDirectShareRecipients

Input required to add recipients to a direct-share.

| Name                  | Type                            | Description                                                                                                                                           |
| --------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| recipients (required) | Array\<[SsoEntity](#ssoentity)> | An array of SSO entities (users and/or groups) to add to this share. They immediately get access to the document. Already added entities are ignored. |

### BulkDeleteRequest

| Name           | Type           | Description                                                        |
| -------------- | -------------- | ------------------------------------------------------------------ |
| ids (required) | Array\<string> | The ids of the documents that shall be deleted. Must not be empty. |

### BulkDeleteResponse

Result of the bulk operation for the individual objects.

| Name      | Type                                                                        |
| --------- | --------------------------------------------------------------------------- |
| documents | Array\<[BulkDeleteResponseDocumentsItem](#bulkdeleteresponsedocumentsitem)> |

### BulkDeleteResponseDocumentsItem

| Name            | Type            | Description                                                                               |
| --------------- | --------------- | ----------------------------------------------------------------------------------------- |
| code (required) | number          | HTTP code the single delete endpoint would return for a request with this Document ID     |
| error           | [Error](#error) | An error response as defined [here](https://dt-url.net/platform-services-error-handling). |
| id (required)   | string          | ID of the document.                                                                       |

### CreateDirectShare

Input required to create a direct-share.

| Name                  | Type                            | Description                                                                                                                                                                                                                              |
| --------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access (required)     | string                          | Specifies which permissions shall be granted via the share: - `read` - grants permission to read the document, but not to update or delete it. - `read-write` - grants permission to read and update the document, but not to delete it. |
| documentId (required) | string                          | Document id.                                                                                                                                                                                                                             |
| recipients (required) | Array\<[SsoEntity](#ssoentity)> | An array of sso-users (sso-ids). These users will immediately get access to the document. Can be empty.                                                                                                                                  |

### CreateDocumentBody

| Name                         | Type                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| content (required)           | Binary \| Buffer \| Blob \| File | The binary content of this document. Its exact type is taken from the `Content-Type` header, which is thus mandatory.                                                                                                                                                                                                                                                                                                                                                                                                             |
| description                  | string                           | Optional description of this document. Maximum length is 256 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ~~externalId~~**DEPRECATED** | string                           | **Deprecated**. Use the `id` property instead. An optional user-provided id, in addition to the system-provided id. The following constraints apply: * It must be unique in this environment
* Allowed characters:&#x20;
  `A-Z`
  &#x20;
  `a-z`
  &#x20;
  `0-9`
  &#x20;
  `-`
  .
* It must not be a UUID, however it can contain a UUID, so e.g.&#x20;
  `my-e015739d-da78-4fe4-bef1-e95c2420bc25`
   is allowed, while&#x20;
  `e015739d-da78-4fe4-bef1-e95c2420bc25`
   isn't allowed.
* Maximum length is 100 characters. |
| id                           | string                           | Optional. If provided, this will be the id of the document. If not provided, a system-generated id is used. The following constraints apply: * It must be unique in this environment
* Allowed characters:&#x20;
  `A-Z`
  &#x20;
  `a-z`
  &#x20;
  `0-9`
  &#x20;
  `-`
  .
* It must not be a UUID, however it can contain a UUID, so e.g.&#x20;
  `my-e015739d-da78-4fe4-bef1-e95c2420bc25`
   is allowed, while&#x20;
  `e015739d-da78-4fe4-bef1-e95c2420bc25`
   isn't allowed.
* Maximum length is 100 characters.         |
| isPrivate                    | boolean                          | Controls whether this document is public. Public documents can be read by every user of the environment. Optional - if not provided, the document is private.                                                                                                                                                                                                                                                                                                                                                                     |
| name (required)              | string                           | The name of this document. This name doesn't need to be unique and is *not* used as identifier. Maximum length is 128 characters.                                                                                                                                                                                                                                                                                                                                                                                                 |
| type (required)              | string                           | The type of this document. This type is *not* the Content-Type of the document, but instead adds a user-defined semantic. Maximum length is 128 characters.                                                                                                                                                                                                                                                                                                                                                                       |

### CreateEnvShare

Input required to create a environment-share.

| Name                  | Type   | Description                                                                                                                                                                                                                                  |
| --------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access (required)     | string | Specifies which permissions shall be granted via the share: * `read`
   \- grants permission to read the document, but not to update or delete it. - read-write\` - grants permission to read and update the document, but not to delete it. |
| documentId (required) | string | Document id.                                                                                                                                                                                                                                 |

### CreatedSnapshot

| Name                       | Type   | Description                        |
| -------------------------- | ------ | ---------------------------------- |
| snapshotVersion (required) | number | System-generated snapshot version. |

### CreationInfo

Info related to creation of the entity.

| Name                   | Type   | Description                                                      |
| ---------------------- | ------ | ---------------------------------------------------------------- |
| createdBy (required)   | string | User who created this entity.                                    |
| createdTime (required) | Date   | Creation time (in notation as defined by RFC 3339, section 5.6). |

### DeletionInfo

Info related to the deletion of the entity.

| Name                   | Type   | Description                                                         |
| ---------------------- | ------ | ------------------------------------------------------------------- |
| deletedBy (required)   | string | User who deleted this entity.                                       |
| deletedTime (required) | Date   | Time of deletion (in notation as defined by RFC 3339, section 5.6). |

### DirectShare

| Name                  | Type           | Description                                                                                                                                                                                                                        |
| --------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access (required)     | Array\<string> | The access granted by this share.                                                                                                                                                                                                  |
| documentId (required) | string         | The shared document's id.                                                                                                                                                                                                          |
| groupCount (required) | number         | Number of groups which have been assigned to this share.                                                                                                                                                                           |
| id (required)         | string         | System-generated id.                                                                                                                                                                                                               |
| userCount (required)  | number         | Number of users who have been directly assigned to this share and therefore can access the document and collaborate on it. Not that potentially assigned groups and their users (see groupCount) are not reflected in this number. |

### DirectShareList

A list of direct-shares.

| Name                     | Type                                |
| ------------------------ | ----------------------------------- |
| direct-shares (required) | Array\<[DirectShare](#directshare)> |
| nextPageKey              | string                              |
| totalCount (required)    | number                              |

### DirectShareRecipientList

Envelope object for a list of recipients.

| Name                  | Type                            | Description                                           |
| --------------------- | ------------------------------- | ----------------------------------------------------- |
| nextPageKey           | string                          | Use this as page-key query param to get the next page |
| recipients (required) | Array\<[SsoEntity](#ssoentity)> |                                                       |
| totalCount (required) | number                          | Total number of recipients of the share.              |

### DocumentList

Envelope object for a list of metadata

| Name                  | Type                                          | Description                                                                                                                                                |
| --------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| documents (required)  | Array\<[DocumentMetaData](#documentmetadata)> |                                                                                                                                                            |
| nextPageKey           | string                                        | Use this as `page-key` query param to get the next page. If the list was paginated, and there are more results available, this parameter will be returned. |
| totalCount (required) | number                                        | The total amount of matching results for this query, as if no pagination would have been applied.                                                          |

### DocumentLockDetails

The locking details of the document.

| Name                             | Type    | Description                                |
| -------------------------------- | ------- | ------------------------------------------ |
| documentVersion (required)       | number  | Latest version of the document.            |
| isLocked                         | boolean | Document is locked or not.                 |
| isLockedByAnotherUser (required) | boolean | Document is locked by another user or not. |
| lockedBy                         | string  | The user that currently owns the lock.     |

### DocumentMetaData

| Name                         | Type                                  | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access (required)            | Array\<string>                        | Indicates which operations you may apply to this document. For example, if you own the document, this array contains the values ['read', 'write', 'delete']. * `read`
   \- you may read, but not update or delete it.
* `write`
   \- you may update, but not read or delete it.
* `delete`
   \- you may delete, but not read or update it. |
| description                  | string                                | Description, provided by the user.                                                                                                                                                                                                                                                                                                             |
| ~~externalId~~**DEPRECATED** | string                                | User-given id. Deprecated in favor of id.                                                                                                                                                                                                                                                                                                      |
| id (required)                | string                                | System-generated or user-given id of a document.                                                                                                                                                                                                                                                                                               |
| isPrivate (required)         | boolean                               | Indicates whether this document is public. Public documents can be read by every user of the environment.                                                                                                                                                                                                                                      |
| isReshareable                | boolean                               | Indicates whether users who have write access via shares may re-share the document with other users. Otherwise, only the owner may share the document with other users.                                                                                                                                                                        |
| labels                       | Array\<string>                        | A set of user-defined labels.                                                                                                                                                                                                                                                                                                                  |
| modificationInfo (required)  | [ModificationInfo](#modificationinfo) | Info related to creation and modification of the entity.                                                                                                                                                                                                                                                                                       |
| name (required)              | string                                | Name, provided by the user. The system is entirely agnostic of this value and there are no semantics attached to it.                                                                                                                                                                                                                           |
| originAppId                  | string                                | The id of the application that shipped that document. Null, if the document isn't ready-made by an app.                                                                                                                                                                                                                                        |
| originExtensionId            | string                                | The id of the extension that shipped that document. Null, if the document isn't shipped by an extension.                                                                                                                                                                                                                                       |
| owner (required)             | string                                | Unique user id derived from Authorization header.                                                                                                                                                                                                                                                                                              |
| shareInfo                    | [ShareInfo](#shareinfo)               | Share-specific information related to this document.                                                                                                                                                                                                                                                                                           |
| type (required)              | string                                | Type, provided by the user. The system is entirely agnostic of this value and there are no semantics attached to it.                                                                                                                                                                                                                           |
| userContext                  | [UserContext](#usercontext)           | User-specific information related to this document.                                                                                                                                                                                                                                                                                            |
| version (required)           | string                                | Initial value is 1. Every manipulation (of metadata or content) leads to an increment. This value is used for optimistic locking during modification operations.                                                                                                                                                                               |

### EnvironmentShare

| Name                  | Type           | Description                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access (required)     | Array\<string> | Indicates which operations you may apply to this document. For example, if you own the document, this array contains the values ['read', 'write', 'delete']. * `read`
   \- you may read, but not update or delete it.
* `write`
   \- you may update, but not read or delete it.
* `delete`
   \- you may delete, but not read or update it. |
| claimCount (required) | number         | Number of users who have claimed this share and therefore can access the document and collaborate on it.                                                                                                                                                                                                                                       |
| documentId (required) | string         | The shared document's id.                                                                                                                                                                                                                                                                                                                      |
| id (required)         | string         | System-generated id of a share resource.                                                                                                                                                                                                                                                                                                       |

### EnvironmentShareClaimResult

Confirmation of claiming an environment-share.

| Name                    | Type           | Description                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access (required)       | Array\<string> | Indicates which operations you may apply to this document. For example, if you own the document, this array contains the values ['read', 'write', 'delete']. * `read`
   \- you may read, but not update or delete it.
* `write`
   \- you may update, but not read or delete it.
* `delete`
   \- you may delete, but not read or update it. |
| documentId (required)   | string         | The shared document's id.                                                                                                                                                                                                                                                                                                                      |
| documentType (required) | string         | The shared document's type.                                                                                                                                                                                                                                                                                                                    |

### EnvironmentShareClaimerList

Envelope object for a list of claimers.

| Name                  | Type           | Description                                           |
| --------------------- | -------------- | ----------------------------------------------------- |
| claimers (required)   | Array\<string> |                                                       |
| nextPageKey           | string         | Use this as page-key query param to get the next page |
| totalCount (required) | number         | The total amount of results for this query            |

### EnvironmentShareList

A list of environment-shares.

| Name                          | Type                                          | Description                                                                                                                                                |
| ----------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| environment-shares (required) | Array\<[EnvironmentShare](#environmentshare)> |                                                                                                                                                            |
| nextPageKey                   | string                                        | Use this as `page-key` query param to get the next page. If the list was paginated, and there are more results available, this parameter will be returned. |
| totalCount (required)         | number                                        | The total amount of matching results for this query, as if no pagination would have been applied.                                                          |

### Error

An error response as defined [here](https://dt-url.net/platform-services-error-handling).

| Name               | Type                          |
| ------------------ | ----------------------------- |
| code (required)    | number                        |
| details            | [ErrorDetails](#errordetails) |
| message (required) | string                        |

### ErrorDetails

| Name     | Type   |
| -------- | ------ |
| errorRef | string |

### ErrorEnvelope

| Name             | Type            | Description                                                                               |
| ---------------- | --------------- | ----------------------------------------------------------------------------------------- |
| error (required) | [Error](#error) | An error response as defined [here](https://dt-url.net/platform-services-error-handling). |

### GetDocumentResponse

| Name                | Type                                  | Description                          |
| ------------------- | ------------------------------------- | ------------------------------------ |
| content (required)  | Binary                                | The binary content of this document. |
| metadata (required) | [DocumentMetaData](#documentmetadata) |                                      |

### LabelsList

Envelope object for a paginated list of labels

| Name              | Type           | Description                                                                                                                                                |
| ----------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| labels (required) | Array\<string> | List of labels accessible to you.                                                                                                                          |
| nextPageKey       | string         | Use this as `page-key` query param to get the next page. If the list was paginated, and there are more results available, this parameter will be returned. |

### ModificationInfo

Info related to creation and modification of the entity.

| Name                        | Type   | Description                                                                                                                                                                        |
| --------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| createdBy (required)        | string | User who created this entity.                                                                                                                                                      |
| createdTime (required)      | Date   | Creation time (in notation as defined by RFC 3339, section 5.6).                                                                                                                   |
| lastModifiedBy (required)   | string | User who last modified this entity (metadata or content).                                                                                                                          |
| lastModifiedTime (required) | Date   | Time of last modification (in notation as defined by RFC 3339, section 5.6).                                                                                                       |
| lastModifyingAppId          | string | Dynatrace app which last modified this entity's content. Null, if the last modification wasn't done by an app or if this property was not specifically requested via `add-fields`. |

### RemoveDirectShareRecipients

Input required to remove recipients from a direct-share.

| Name           | Type           |
| -------------- | -------------- |
| ids (required) | Array\<string> |

### RestoreDocumentResult

| Name                        | Type                                  |
| --------------------------- | ------------------------------------- |
| createdSnapshot             | [CreatedSnapshot](#createdsnapshot)   |
| documentMetadata (required) | [DocumentMetaData](#documentmetadata) |

### ShareInfo

Share-specific information related to this document.

| Name                    | Type    | Description                                                                                                                                                                                                                                                                                                          |
| ----------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isShared                | boolean | Indicates whether the document is shared with at least one user. This means it's true if one of the following applies: * The document is public
* There is at least one direct share with at least one user or group
* There is at least one environment share, regardless of how many users have claimed that share |
| isSharedWithCurrentUser | boolean | Indicates whether the document is shared with the user that has requested it.                                                                                                                                                                                                                                        |

### SnapshotList

Envelope object for a list of snapshots of a document.

| Name                  | Type                                          | Description                                                                                                                                                |
| --------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nextPageKey           | string                                        | Use this as `page-key` query param to get the next page. If the list was paginated, and there are more results available, this parameter will be returned. |
| snapshots (required)  | Array\<[SnapshotMetadata](#snapshotmetadata)> |                                                                                                                                                            |
| totalCount (required) | number                                        | The total amount of matching results for this query, as if no pagination would have been applied.                                                          |

### SnapshotMetadata

Metadata of a snapshot of a document.

| Name                        | Type                          | Description                                                                                                                           |
| --------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| description                 | string                        | An optional description of the snapshot's content or the changes it introduces to the previous snapshot. Provided by the user or app. |
| documentVersion (required)  | number                        | The document version associated with this snapshot. The document had this version when the snapshot was created.                      |
| modificationInfo (required) | [CreationInfo](#creationinfo) | Info related to creation of the entity.                                                                                               |
| snapshotVersion (required)  | number                        | System-maintained auto-incremented snapshot version, starting at 1. This isn't the document version.                                  |

### SsoEntity

A SSO user or SSO group.

| Name            | Type   | Description                                        |
| --------------- | ------ | -------------------------------------------------- |
| id (required)   | string | SSO id of a user or group.                         |
| type (required) | string | Type of the SSO entity - either `user` or `group`. |

### TransferOwner

Input required to transfer document ownership.

| Name                  | Type   | Description              |
| --------------------- | ------ | ------------------------ |
| newOwnerId (required) | string | SSO id of the new owner. |

### TrashDocument

A document which has been moved to the trash.

| Name                        | Type                                  | Description                                              |
| --------------------------- | ------------------------------------- | -------------------------------------------------------- |
| deletionInfo (required)     | [DeletionInfo](#deletioninfo)         | Info related to the deletion of the entity.              |
| id (required)               | string                                | Id of the deleted document.                              |
| modificationInfo (required) | [ModificationInfo](#modificationinfo) | Info related to creation and modification of the entity. |
| name (required)             | string                                | Name of the deleted document.                            |
| owner (required)            | string                                | Owner of the deleted document.                           |
| type (required)             | string                                | Type of the deleted document.                            |
| version (required)          | number                                | Version of the deleted document.                         |

### TrashDocumentList

Envelope object for a list of documents in trash.

| Name                  | Type                                                      | Description                                                                                                                                                |
| --------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| documents (required)  | Array\<[TrashDocumentListEntry](#trashdocumentlistentry)> |                                                                                                                                                            |
| nextPageKey           | string                                                    | Use this as `page-key` query param to get the next page. If the list was paginated, and there are more results available, this parameter will be returned. |
| totalCount (required) | number                                                    | The total amount of matching results for this query, as if no pagination would have been applied.                                                          |

### TrashDocumentListEntry

A document which has been deleted and now lives in the trash.

| Name                    | Type                          | Description                                 |
| ----------------------- | ----------------------------- | ------------------------------------------- |
| deletionInfo (required) | [DeletionInfo](#deletioninfo) | Info related to the deletion of the entity. |
| id (required)           | string                        | Id of the deleted document.                 |
| name (required)         | string                        | Name of the deleted document.               |
| type (required)         | string                        | Type of the deleted document.               |

### UpdateDocumentBody

| Name                        | Type                             | Description                                                                                                                                                                                                                                                                                                                 |
| --------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| content                     | Binary \| Buffer \| Blob \| File | The binary content of this document. Its exact type is taken from the `Content-Type` header, which is thus mandatory. Optional - if not provided, no change happens.                                                                                                                                                        |
| description                 | string                           | Description of this document. Maximum length is 256 characters. Optional - if not provided, no change happens.                                                                                                                                                                                                              |
| ~~isPrivate~~**DEPRECATED** | boolean                          | Deprecated - use the makePublic and makePrivate operations instead to change a document's public visibility. Controls whether this document should be public. Public documents can be read by every user of the environment. This can only be changed by the document owner. Optional - if not provided, no change happens. |
| isReshareable               | boolean                          | Controls whether users who receive write access via shares may re-share the document with other users. This can only be changed by the document owner. Optional - if not provided, no change happens.                                                                                                                       |
| labels                      | Array\<string>                   | An optional set of user-defined labels. The maximum length of each label is 80 characters and the maximum number of labels is 25. Allowed characters: `A-Z` `a-z` `0-9` `:` `.` `;` `_` `#` `-` `!` `?` `/` `\` `\|` `@` `&amp;` `<` `>` `` (space) Optional - if not provided, no change happens.                          |
| name                        | string                           | The name of this document. This name doesn't need to be unique and is *not* used as identifier. Maximum length is 128 characters. Optional - if not provided, no change happens.                                                                                                                                            |
| snapshotDescription         | string                           | An optional user-provided description of the snapshot's content or the changes it introduced. This description gets ignored if the query-param `create-snapshot` isn't set to true. Maximum length is 128 characters.                                                                                                       |
| type                        | string                           | The type of this document. This type is *not* the Content-Type of the document, but instead adds a user-defined semantic. Maximum length is 128 characters. Optional - if not provided, no change happens.                                                                                                                  |

### UpdateDocumentContentBody

| Name               | Type                             |
| ------------------ | -------------------------------- |
| content (required) | Binary \| Buffer \| Blob \| File |

### UpdateDocumentMetadata

| Name                        | Type                                  |
| --------------------------- | ------------------------------------- |
| createdSnapshot             | [CreatedSnapshot](#createdsnapshot)   |
| documentMetadata (required) | [DocumentMetaData](#documentmetadata) |

### UpdateDocumentMetadataBody

| Name | Type   | Description    |
| ---- | ------ | -------------- |
| name | string | Document name. |
| type | string | Document type. |

### UserContext

User-specific information related to this document.

| Name             | Type    | Description                                                                                                                           |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| isFavorite       | boolean | Whether the calling user has marked this document as a favorite. Only present when requested via `add-fields=userContext.isFavorite`. |
| lastAccessedTime | Date    | Time when the current user last opened or modified this document (in notation as defined by RFC 3339, section 5.6).                   |
