## Admin control

Administrators - operating with `admin-access=true`, which requires the `document:documents:admin` permission - can override the default visibility for both app-shipped and extension-shipped documents.

They can **hide** ready-made documents from the environment's users by revoking its default public visibility. Additionally, they can **share** it with specific users and groups by creating a direct `read`-share (see the Direct Shares endpoints).

Sharing with `read-write` access remains disallowed, and no other user is able to hide or share these documents.

These admin overrides are persisted and survive the app- and extension-updates.

```bash
npm install @dynatrace-sdk/client-document
```
