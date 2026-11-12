## accessTokensAgentTokensClient

```js
import { accessTokensAgentTokensClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getAgentConnectionToken

**accessTokensAgentTokensClient.getAgentConnectionToken(config): Promise\<[AgentConnectionToken](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#agentconnectiontoken)>**

Gets the agent connection token | maturity=EARLY_ADOPTER

**One of the following scopes is required:**

- environment-api:agent-connection-tokens:read
- fleet-management:oneagent.tokens:read

**One of the following permissions is required:**

- environment:roles:agent-install
- fleet-management:oneagent.tokens:read

Returns the agent connection token.

#### Returns

| Return type                                                                                                                         | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AgentConnectionToken](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#agentconnectiontoken) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensAgentTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensAgentTokensClient.getAgentConnectionToken();
```
