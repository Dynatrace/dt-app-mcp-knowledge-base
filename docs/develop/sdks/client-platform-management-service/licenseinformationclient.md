## licenseInformationClient

```js
import { licenseInformationClient } from '@dynatrace-sdk/client-platform-management-service';
```

### getLicense

**licenseInformationClient.getLicense(config): Promise\<[License](#license)>**

Get basic license information

**One of the following scopes is required:**

- app-engine:apps:run
- app-engine:functions:run
- platform-management:environments:read

Get basic license information about the current environment.

#### Returns

| Return type         | Status code | Description                                    |
| ------------------- | ----------- | ---------------------------------------------- |
| [License](#license) | 200         | The license info of the requested environment. |

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
import { licenseInformationClient } from "@dynatrace-sdk/client-platform-management-service";

const data = await licenseInformationClient.getLicense();
```

### getLicenseSettings

**licenseInformationClient.getLicenseSettings(config): Promise\<[LicenseSettingsResponse](#licensesettingsresponse)>**

Get basic license settings information

**One of the following scopes is required:**

- app-engine:apps:run
- app-engine:functions:run
- platform-management:environments:read

Get basic license settings information about the current environment

#### Parameters

| Name        | Type           | Description                                                         |
| ----------- | -------------- | ------------------------------------------------------------------- |
| config.keys | Array\<string> | optional array of key(s) for filtering<br /><br />**Example:** `[]` |

#### Returns

| Return type                                         | Status code | Description                                             |
| --------------------------------------------------- | ----------- | ------------------------------------------------------- |
| [LicenseSettingsResponse](#licensesettingsresponse) | 200         | The license settings info of the requested environment. |

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
import { licenseInformationClient } from "@dynatrace-sdk/client-platform-management-service";

const data =
  await licenseInformationClient.getLicenseSettings();
```
