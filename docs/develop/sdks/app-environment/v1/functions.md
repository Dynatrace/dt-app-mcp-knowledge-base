## Functions

### getAppId

**getAppId(): string**

Retrieves the app id.

#### Returns

| Return type | Description                                                                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| string      | app id defined in app config. *Note:* If the Dynatrace JavaScript runtime isn't available, 'dt.missing.app.id' will be returned and a warning will be logged to the console. |

**Code example**

```ts
import { getAppId } from '@dynatrace-sdk/app-environment';

// Get the current app's ID
const appId = getAppId();
```

### getAppName

**getAppName(): string**

Retrieves the app name.

#### Returns

| Return type | Description                                                                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| string      | app name defined in app config. *Note:* If the Dynatrace JavaScript runtime isn't available, 'dt.missing.app.name' will be returned and a warning will be logged to the console. |

**Code example**

```ts
import { getAppName } from '@dynatrace-sdk/platform/app-environment';

// Get the current app's name
const appName = getAppName();
```

### getAppVersion

**getAppVersion(): string**

Retrieves the app version.

#### Returns

| Return type | Description                                                                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| string      | app version defined in app manifest. *Note:* If the Dynatrace JavaScript runtime isn't available, 'dt.missing.app.version' will be returned and a warning will be logged to the console. |

**Code example**

```ts
import { getAppVersion } from '@dynatrace-sdk/platform/app-environment';

// Get the current app's version
const appVersion = getAppVersion();
```

### getCurrentUserDetails

**getCurrentUserDetails(): [UserDetails](#userdetails)**

Retrieves the information about currently logged user

#### Returns

| Return type                 | Description                                                                                                                                                                                                                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [UserDetails](#userdetails) | id, name and email of currently logged user. *Note:* If the Dynatrace JavaScript runtime isn't available, a default UserDetails placeholder object with values ('dt.missing.user.id', 'dt.missing.user.name', 'dt.missing.user.email') will be returned and a warning will be logged to the console. |

**Code example**

```ts
import { getCurrentUserDetails } from '@dynatrace-sdk/platform/app-environment';

// Get the details of the currently logged-in user
const userDetails = getCurrentUserDetails();

// Use destructuring to extract specific properties
const { id, name, email } = getCurrentUserDetails();
```

### getEnvironmentId

**getEnvironmentId(): string**

Retrieves the environment id.

#### Returns

| Return type | Description                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| string      | environment id on which app is run. *Note:* If the Dynatrace JavaScript runtime isn't available, 'dt.missing.environment.id' will be returned and a warning will be logged to the console. |

**Code example**

```ts
import { getEnvironmentId } from '@dynatrace-sdk/platform/app-environment';

// Get the current environment ID
const environmentId = getEnvironmentId();
```

### getEnvironmentUrl

**getEnvironmentUrl(): string**

Retrieves the environment url.

#### Returns

| Return type | Description                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| string      | environment url on which app is run. *Note:* If the Dynatrace JavaScript runtime isn't available, '[https://dynatrace.com/](https://dynatrace.com/)' will be returned and a warning will be logged to the console. |

**Code example**

```ts
import { getEnvironmentUrl } from '@dynatrace-sdk/platform/app-environment';

// Get the current environment URL
const environmentUrl = getEnvironmentUrl();
```
