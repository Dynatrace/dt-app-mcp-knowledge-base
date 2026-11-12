## Active Locking

In addition to the mandatory Optimistic Locking, there is **optional Active Locking**.

Active locking can be optionally utilized to prevent conflicts caused by multiple users concurrently updating the same document.

A user can lock a document to prevent other users from updating the document for some time.

Once the user is done updating the document, they can release the lock and therefore enable updates by other users.
