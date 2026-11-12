## activeGatesActiveGateTokensEnforcementClient

```js
import { activeGatesActiveGateTokensEnforcementClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getTokenEnforcement

**activeGatesActiveGateTokensEnforcementClient.getTokenEnforcement(config): Promise\<[ActiveGateTokenEnforcement](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#activegatetokenenforcement)>**

Gets the status of ActiveGate tokens enforcement

**Required scope:** fleet-management:activegates:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegates:read

#### Returns

| Return type                                                                                                                                     | Status code | Description                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------- |
| [ActiveGateTokenEnforcement](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#activegatetokenenforcement) | 200         | Success. The response contains the status of ActiveGate tokens enforcement |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesActiveGateTokensEnforcementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesActiveGateTokensEnforcementClient.getTokenEnforcement();
```
