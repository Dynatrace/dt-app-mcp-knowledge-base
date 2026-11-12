## syntheticHttpMonitorExecutionsClient

```js
import { syntheticHttpMonitorExecutionsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getExecutionResult

**syntheticHttpMonitorExecutionsClient.getExecutionResult(config): Promise\<[MonitorExecutionResults](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#monitorexecutionresults)>**

Gets detailed information about the last execution of the specified HTTP monitor

**Required scope:** environment-api:synthetic-execution:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                         | Type                  | Description                                                                                            |
| ---------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------ |
| config.locationId            | string                | Filters the results to those executed by specified Synthetic location. Specify the ID of the location. |
| config.monitorId (required)  | string                | Identifier of the HTTP monitor for which last execution result is returned.                            |
| config.resultType (required) | "SUCCESS" \| "FAILED" | Defines the result type of the last HTTP monitor's execution.                                          |

#### Returns

| Return type                                                                                                                            | Status code | Description                                   |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------- |
| [MonitorExecutionResults](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#monitorexecutionresults) | 200         | Success. The response contains detailed data. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticHttpMonitorExecutionsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticHttpMonitorExecutionsClient.getExecutionResult(
    { monitorId: "...", resultType: "SUCCESS" },
  );
```
