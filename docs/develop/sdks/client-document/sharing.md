## Sharing

By default, documents are only accessible to their owner. There are 3 ways of sharing documents.

Documents can be made **public** (via the updateDocument operation) by the owner. This immediately grants read access to all users in the environment.

**Environment-Shares** grant read or read-write access to users of the same environment, but **users need to actively claim** the share.
The owner effectively loses control over who exactly gains access, as any user can claim the share and therefore receive access.

**Direct-Shares** immediately grant read or read-write access to **specific users and groups**. The **owner is in total control of who exactly receives access**, and can also revoke access retrospectively.

By default, every user with write-access to a document is allowed to re-share it via direct-shares and environment-shares. The owner can disable this by setting the `isReshareable` property to `false` (via the updateDocument operation).

The sharing mechanisms are not mutually exclusive - a document can be shared via multiple sharing mechanisms at the same time.
