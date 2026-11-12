## environmentInformationClient

```js
import { environmentInformationClient } from '@dynatrace-sdk/client-platform-management-service';
```

### getEnvironmentInformation

**environmentInformationClient.getEnvironmentInformation(config): Promise\<[EnvironmentInfo](#environmentinfo)>**

Get basic environment information

**One of the following scopes is required:**

- app-engine:apps:run
- app-engine:functions:run
- platform-management:environments:read

Get basic information about the current environment.

#### Returns

| Return type                         | Status code | Description                           |
| ----------------------------------- | ----------- | ------------------------------------- |
| [EnvironmentInfo](#environmentinfo) | 200         | Info about the requested environment. |

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
import { environmentInformationClient } from "@dynatrace-sdk/client-platform-management-service";

const data =
  await environmentInformationClient.getEnvironmentInformation();
```
