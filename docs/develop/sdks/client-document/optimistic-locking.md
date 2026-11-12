## Optimistic Locking

Operations which modify a document generally use **mandatory** optimistic locking.

When such operations are executed, the user must provide the version upon which they operate.

If the document version in the service doesn't match, because the document has been modified in the meantime, then the operation gets rejected.
