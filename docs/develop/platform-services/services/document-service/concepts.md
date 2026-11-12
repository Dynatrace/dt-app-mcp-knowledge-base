## Concepts

You need to know the following concepts to work with the document service.

### Document

Every document consists of metadata and content. The metadata contains information such as the document name and timestamps, which you can use to [filter and sort](https://developer.dynatrace.com/develop/platform-services/core-concepts/filtering-sorting.md) your documents.

Following are some essential things to remember about documents:

- The document service generates a unique ID for each document and doesn't rely on the document's name for identification. Therefore, document names don't have to be unique.
- The content of documents isn't indexed. Therefore, you can't search the contents of a document.
- You must ensure that the content for each document doesn't exceed the maximum size.

> **Note**
>
> The document service is entirely agnostic of the content and the content type.

### Ownership

The user who creates a document becomes the owner of that document. The owner has permission to share and delete the document. Only the owner can access the document unless the owner shares it with others.

### Admin access

Users with elevated privileges may request admin access and act with the same permissions as a document's owner. An admin has permission to access and modify documents created by any user of the same environment.

### Sharing documents

By default, only the document owner can share a document. However, the owner can allow everyone with the **Can edit** permission to also share the document through the **Allow editors to share** toggle.
The document owner can grant either **read-only** or **read-write** access to the document for other users. Document service also prevents accidental overwriting due to collaboration using [optimistic locking](https://developer.dynatrace.com/develop/platform-services/core-concepts/locking-strategies.md)

There are three ways to share documents:

- **Access for all (view-only)**: A document's owner can grant read-only access to the document to all users of the same environment.
- **Access per user or group**: A document's owner can grant access to the document to all users of the same environment. Each user must opt in individually.
- **Access via shared link**: A document's owner can grant specific users or groups access to a document.

> **Note**
>
> All apps can access a document, even when the owner is restricting access to the document.

### Restore deleted documents

Deleting a document moves it into the trash and makes it inaccessible. The document service will automatically delete documents in the trash after some time. Alternatively, users can manually delete a document from the trash if they don't want to wait for the automatic deletion.
Users can restore a document from the trash, making it accessible and sparing it from permanent deletion.

### Restore previous document states

Users can create snapshots of documents. Subsequent updates to the document don't affect these snapshots.
Users can also restore a snapshot later if needed. This action resets the document to its state when the user made the snapshot.

> **Note**
>
> Restoring a snapshot affects only the document's content. It doesn't change access-related data like the document's shares or ownership.

Creating snapshots is rate-limited per user and document. The document service will delete snapshots automatically after some time. Each document allows for a maximum number of snapshots.

### Data consistency

The document service guarantees eventual consistency.
