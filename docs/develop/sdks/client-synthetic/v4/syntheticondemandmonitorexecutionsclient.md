## syntheticOnDemandMonitorExecutionsClient

```js
import { syntheticOnDemandMonitorExecutionsClient } from '@dynatrace-sdk/client-synthetic';
```

### executeOnDemand

**syntheticOnDemandMonitorExecutionsClient.executeOnDemand(config): Promise\<[SyntheticOnDemandExecutionResponse](#syntheticondemandexecutionresponse)>**

Triggers on-demand executions for synthetic monitors. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:execute

#### Parameters

| Name                   | Type                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| config.body (required) | [SyntheticOnDemandExecutionRequest](#syntheticondemandexecutionrequest) |

#### Returns

| Return type                                                               | Status code | Description |
| ------------------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticOnDemandExecutionResponse](#syntheticondemandexecutionresponse) | 201         | Created     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticOnDemandMonitorExecutionsClient } from "@dynatrace-sdk/client-synthetic";

const data =
  await syntheticOnDemandMonitorExecutionsClient.executeOnDemand(
    { body: {} },
  );
```

### rerunOnDemandExecution

**syntheticOnDemandMonitorExecutionsClient.rerunOnDemandExecution(config): Promise\<[SyntheticOnDemandExecutionResponse](#syntheticondemandexecutionresponse)>**

Reruns the specified on-demand synthetic monitor execution. | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:execute

#### Parameters

| Name                          | Type   | Description                        |
| ----------------------------- | ------ | ---------------------------------- |
| config.executionId (required) | number | The ID of the on-demand execution. |

#### Returns

| Return type                                                               | Status code | Description |
| ------------------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticOnDemandExecutionResponse](#syntheticondemandexecutionresponse) | 200         | Success     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticOnDemandMonitorExecutionsClient } from "@dynatrace-sdk/client-synthetic";

const data =
  await syntheticOnDemandMonitorExecutionsClient.rerunOnDemandExecution(
    { executionId: 10 },
  );
```
