## syntheticOnDemandMonitorExecutionsClient

```js
import { syntheticOnDemandMonitorExecutionsClient } from '@dynatrace-sdk/client-synthetic';
```

### executeOnDemand

**syntheticOnDemandMonitorExecutionsClient.executeOnDemand(config): Promise\<[SyntheticOnDemandExecutionResult](#syntheticondemandexecutionresult)>**

Triggers on-demand executions for synthetic monitors | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:execute

#### Parameters

| Name                   | Type                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| config.body (required) | [SyntheticOnDemandExecutionRequest](#syntheticondemandexecutionrequest) |

#### Returns

| Return type                                                           | Status code | Description |
| --------------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticOnDemandExecutionResult](#syntheticondemandexecutionresult) | 201         | Created     |

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

**syntheticOnDemandMonitorExecutionsClient.rerunOnDemandExecution(config): Promise\<[SyntheticOnDemandExecutionResult](#syntheticondemandexecutionresult)>**

Reruns specified on-demand execution of synthetic monitors | maturity=EARLY_ADOPTER

**Required scope:** synthetic:monitors:execute

#### Parameters

| Name                          | Type   | Description                                |
| ----------------------------- | ------ | ------------------------------------------ |
| config.executionId (required) | number | The identifier of the on-demand execution. |

#### Returns

| Return type                                                           | Status code | Description |
| --------------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticOnDemandExecutionResult](#syntheticondemandexecutionresult) | 200         | Success     |

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
