## activeGatesActiveGateGroupsClient

```js
import { activeGatesActiveGateGroupsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getActiveGateGroups

**activeGatesActiveGateGroupsClient.getActiveGateGroups(config): Promise\<[ActiveGateGroups](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegategroups)>**

Lists ActiveGate groups

**Required scope:** environment-api:activegates:read
**Required permission:** environment:roles:manage-settings

#### Returns

| Return type                                                                                                                 | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ActiveGateGroups](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegategroups) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesActiveGateGroupsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesActiveGateGroupsClient.getActiveGateGroups();
```
