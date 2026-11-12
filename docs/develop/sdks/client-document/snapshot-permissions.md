## Snapshot Permissions

All users with write access to a document may list, read, create, or restore its snapshots.

For built-in (App-Shipped or Extension) documents, listing snapshots returns an empty list rather than a 403, since these documents don't support snapshots.

Only the document owner (or an admin) may delete a snapshot.
