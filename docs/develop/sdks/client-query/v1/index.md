Exposes an API to fetch records stored in Grail.

**Permission types**

Each operation lists the permissions it checks. The permission types are:

- **Bucket permission**: `storage:buckets:read`, optionally restricted with the condition `storage:bucket-name`. Required by `query:execute` and `query:autocomplete`.
- **Table permission**: for example `storage:logs:read`, `storage:spans:read`, `storage:metrics:read`. Required for each table the query reads. Row-level conditions on the table permission are taken into account.
- **Row-level restriction** (optional): a `WHERE` condition on a table permission, for example `storage:dt.security_context`. The query only returns records that match the condition.
- **Fieldset permission** (optional): `storage:fieldsets:read` with `storage:fieldset-name`. Without it, you have no access to sensitive fields.

Example: to be able to access logs in the bucket `default_logs`, grant `storage:buckets:read` either unrestricted or restricted with `storage:bucket-name = "default_logs"`, and `storage:logs:read`.

Authoritative overview per endpoint: [Grail service permissions](https://developer.dynatrace.com/develop/platform-services/services/grail-service/).

```bash
npm install @dynatrace-sdk/client-query
```
