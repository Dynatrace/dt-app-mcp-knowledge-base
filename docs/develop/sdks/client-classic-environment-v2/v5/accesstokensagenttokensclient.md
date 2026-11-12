## accessTokensAgentTokensClient

```js
import { accessTokensAgentTokensClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getAgentConnectionToken

**accessTokensAgentTokensClient.getAgentConnectionToken(config): Promise\<[AgentConnectionToken](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#agentconnectiontoken)>**

Gets the agent connection token | maturity=EARLY_ADOPTER

**Required scope:** environment-api:agent-connection-tokens:read
**Required permission:** environment:roles:agent-install

Returns the agent connection token.

#### Returns

| Return type                                                                                                                         | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AgentConnectionToken](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#agentconnectiontoken) | 200         | Success     |

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
