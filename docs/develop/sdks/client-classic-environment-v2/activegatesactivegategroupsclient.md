## activeGatesActiveGateGroupsClient

```js
import { activeGatesActiveGateGroupsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### ~~getActiveGateGroups~~

> ⚠️ **Deprecated**

**activeGatesActiveGateGroupsClient.getActiveGateGroups(config): Promise\<[ActiveGateGroups](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#activegategroups)>**

Lists ActiveGate groups

**One of the following scopes is required:**

- environment-api:activegates:read
- fleet-management:activegates:read

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegates:read

Deprecated since version 1.343. Use DQL Smartscape nodes to query ActiveGate data instead. See [https://dt-url.net/mf03894](https://dt-url.net/mf03894)

#### Returns

| Return type                                                                                                              | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [ActiveGateGroups](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#activegategroups) | 200         | Success     |

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
