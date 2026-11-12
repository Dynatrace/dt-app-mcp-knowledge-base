## settingsClient

```js
import { settingsClient } from '@dynatrace-sdk/client-automation';
```

### ~~getServiceUsers~~

> ⚠️ **Deprecated**

**settingsClient.getServiceUsers(config): Promise\<[GetServiceUsersResponse](#getserviceusersresponse)>**

**Required scope:** automation:workflows:read

Get service users who could be used as workflow actor (deprecated).

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { settingsClient } from "@dynatrace-sdk/client-automation";

const data = await settingsClient.getServiceUsers();
```

### ~~getSettings~~

> ⚠️ **Deprecated**

**settingsClient.getSettings(config): Promise\<[GetSettingsResponse](#getsettingsresponse)>**

**Required scope:** automation:workflows:read

Get system settings

#### Returns

| Return type                                 | Status code | Description |
| ------------------------------------------- | ----------- | ----------- |
| [GetSettingsResponse](#getsettingsresponse) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { settingsClient } from "@dynatrace-sdk/client-automation";

const data = await settingsClient.getSettings();
```

### ~~getUserPermissions~~

> ⚠️ **Deprecated**

**settingsClient.getUserPermissions(config): Promise\<Array\<string>>**

**Required scope:** automation:workflows:read

Get current user effective permissions.

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { settingsClient } from "@dynatrace-sdk/client-automation";

const data = await settingsClient.getUserPermissions();
```

### ~~getUserSettings~~

> ⚠️ **Deprecated**

**settingsClient.getUserSettings(config): Promise\<[UserSettings](#usersettings)>**

**Required scope:** automation:workflows:read

Get user-specific settings

#### Returns

| Return type                   | Status code | Description |
| ----------------------------- | ----------- | ----------- |
| [UserSettings](#usersettings) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { settingsClient } from "@dynatrace-sdk/client-automation";

const data = await settingsClient.getUserSettings();
```

### ~~updateAuthorizations~~

> ⚠️ **Deprecated**

**settingsClient.updateAuthorizations(config): Promise\<void>**

**Required scope:** automation:workflows:read

#### Returns

| Return type | Status code | Description      |
| ----------- | ----------- | ---------------- |
| void        | 202         | No response body |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { settingsClient } from "@dynatrace-sdk/client-automation";

const data = await settingsClient.updateAuthorizations();
```
