## Snapshots

Document snapshots allow to reset a document's content back to an earlier state.

Snapshots must be explicitly created when updating the document. Multiple snapshots can be created per document.

Restoring a snapshot means that the document's content gets changed to the state it had when the snapshot was originally created. It doesn't change access-related data like the document's shares or ownership.

Snapshot creation is rate-limited to 5 snapshots per 60 seconds per document.

The maximum amount of snapshots per document is 50. Additional snapshots result in the deletion of the oldest existing snapshot.

All snapshots get automatically deleted after 30 days.
