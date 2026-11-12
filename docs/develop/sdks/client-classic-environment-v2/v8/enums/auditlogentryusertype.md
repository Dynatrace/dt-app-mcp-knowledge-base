### ~~AuditLogEntryUserType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the authentication of the **user**.

- `USER_NAME` -> User was logged in the UI
- `TOKEN_HASH` ->  URL Token or DevOps Token, the hash of the token is logged
- `SERVICE_NAME` -> No authenticated user at all, this action was performed by a system service automatically
- `PUBLIC_TOKEN_IDENTIFIER` -> API Token, the public token id is logged

#### Enum keys

`PublicTokenIdentifier` | `ServiceName` | `TokenHash` | `UserName`
