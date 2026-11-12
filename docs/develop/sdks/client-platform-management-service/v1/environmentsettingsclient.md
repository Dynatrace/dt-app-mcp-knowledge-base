## environmentSettingsClient

```js
import { environmentSettingsClient } from '@dynatrace-sdk/client-platform-management-service';
```

### getEnvironmentSettings

**environmentSettingsClient.getEnvironmentSettings(config): Promise\<[SettingsResponse](#settingsresponse)>**

Get settings for the environment

**One of the following scopes is required:**

- app-engine:apps:run
- app-engine:functions:run
- platform-management:environments:read

Gets settings for environment.

#### Returns

| Return type                           | Status code | Description                                |
| ------------------------------------- | ----------- | ------------------------------------------ |
| [SettingsResponse](#settingsresponse) | 200         | The settings for the requested environment |

#### Throws

| Error Type           | Error Message                                |
| -------------------- | -------------------------------------------- |
| BadRequest           | Bad request                                  |
| Unauthorized         | Authentication failed                        |
| NotFound             | Resource not found                           |
| ServiceUnavailable   | There is a temporary problem in the backend. |
| DefaultErrorResponse | Unexpected error                             |

**Code example**

```ts
import { environmentSettingsClient } from "@dynatrace-sdk/client-platform-management-service";

const data =
  await environmentSettingsClient.getEnvironmentSettings();
```
