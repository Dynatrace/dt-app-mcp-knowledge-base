## adaptiveTrafficManagementClient

```js
import { adaptiveTrafficManagementClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getRootSpansPerMinute

**adaptiveTrafficManagementClient.getRootSpansPerMinute(config): Promise\<[AdaptiveTrafficManagementDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#adaptivetrafficmanagementdto)>**

Gets sampling configuration.

**Required scope:** adaptive-traffic-management:sampling-configuration:read

#### Returns

| Return type                                                                                                                                      | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [AdaptiveTrafficManagementDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#adaptivetrafficmanagementdto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { adaptiveTrafficManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await adaptiveTrafficManagementClient.getRootSpansPerMinute();
```
