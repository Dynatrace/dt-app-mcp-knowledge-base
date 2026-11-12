## syntheticOnDemandMonitorExecutionsClient

```js
import { syntheticOnDemandMonitorExecutionsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### execute

**syntheticOnDemandMonitorExecutionsClient.execute(config): Promise\<[SyntheticOnDemandExecutionResult](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecutionresult)>**

Triggers on-demand executions for synthetic monitors

**Required scope:** environment-api:synthetic-execution:write
**Required permission:** environment:roles:viewer

#### Parameters

| Name                   | Type                                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [SyntheticOnDemandExecutionRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecutionrequest) |

#### Returns

| Return type                                                                                                                                                 | Status code | Description                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------- |
| [SyntheticOnDemandExecutionResult](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecutionresult) | 201         | Success. The monitor's execution response details |

#### Throws

| Error Type         | Error Message                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Unavailable \| Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticOnDemandMonitorExecutionsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticOnDemandMonitorExecutionsClient.execute({
    body: {},
  });
```

### getBatch

**syntheticOnDemandMonitorExecutionsClient.getBatch(config): Promise\<[SyntheticOnDemandBatchStatus](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandbatchstatus)>**

Gets summary information and the list of failed executions for the given batch ID

**Required scope:** environment-api:synthetic-execution:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                      | Type   | Description                             |
| ------------------------- | ------ | --------------------------------------- |
| config.batchId (required) | number | The batch identifier of the executions. |

#### Returns

| Return type                                                                                                                                         | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticOnDemandBatchStatus](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandbatchstatus) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Batch with the given ID doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticOnDemandMonitorExecutionsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticOnDemandMonitorExecutionsClient.getBatch({
    batchId: 10,
  });
```

### getExecution

**syntheticOnDemandMonitorExecutionsClient.getExecution(config): Promise\<[SyntheticOnDemandExecution](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecution)>**

Gets basic results of the specified on-demand execution

**Required scope:** environment-api:synthetic-execution:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                          | Type   | Description                                |
| ----------------------------- | ------ | ------------------------------------------ |
| config.executionId (required) | number | The identifier of the on-demand execution. |

#### Returns

| Return type                                                                                                                                     | Status code | Description                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------- |
| [SyntheticOnDemandExecution](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecution) | 200         | Success. The response contains basic information about the on-demand execution. |

#### Throws

| Error Type         | Error Message                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Execution with the given ID doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticOnDemandMonitorExecutionsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticOnDemandMonitorExecutionsClient.getExecution(
    { executionId: 10 },
  );
```

### getExecutionFullReport

**syntheticOnDemandMonitorExecutionsClient.getExecutionFullReport(config): Promise\<[SyntheticOnDemandExecution](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecution)>**

Gets detailed results of the specified on-demand execution

**Required scope:** environment-api:synthetic-execution:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                          | Type   | Description                                |
| ----------------------------- | ------ | ------------------------------------------ |
| config.executionId (required) | number | The identifier of the on-demand execution. |

#### Returns

| Return type                                                                                                                                     | Status code | Description                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| [SyntheticOnDemandExecution](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecution) | 200         | Success. The response contains detailed information about the on-demand execution. |

#### Throws

| Error Type         | Error Message                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Execution with the given ID doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticOnDemandMonitorExecutionsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticOnDemandMonitorExecutionsClient.getExecutionFullReport(
    { executionId: 10 },
  );
```

### getExecutions

**syntheticOnDemandMonitorExecutionsClient.getExecutions(config): Promise\<[SyntheticOnDemandExecutions](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecutions)>**

Gets the list of all on-demand executions of synthetic monitors

**Required scope:** environment-api:synthetic-execution:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                    | Type                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.batchId          | number                                         | Filters the resulting set of the executions by batch. Specify the ID of the batch.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.dataDeliveryFrom | string                                         | The start of the requested timeframe for data delivering timestamps. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the maximum relative timeframe of six hours is used (`now-6h`). |
| config.dataDeliveryTo   | string                                         | The end of the requested timeframe for data delivering timestamps. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the current timestamp is used.                                    |
| config.executionFrom    | string                                         | The start of the requested timeframe for execution timestamps. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the maximum relative timeframe of six hours is used (`now-6h`).       |
| config.executionStage   | "TRIGGERED" \| "EXECUTED" \| "DATA_RETRIEVED" | Filters the resulting set of executions by their stage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| config.executionTo      | string                                         | The end of the requested timeframe for execution timestamps. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the current timestamp is used.                                          |
| config.locationId       | string                                         | Filters the resulting set of the executions by Synthetic location. Specify the ID of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.monitorId        | string                                         | Filters the resulting set of the executions by monitor synthetic monitor. Specify the ID of the monitor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.schedulingFrom   | string                                         | The start of the requested timeframe for scheduling timestamps. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the maximum relative timeframe of six hours is used (`now-6h`).      |
| config.schedulingTo     | string                                         | The end of the requested timeframe for scheduling timestamps. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the current timestamp is used.                                         |
| config.source           | "API" \| "UI"                                  | Filters the resulting set of the executions by the source of the triggering request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| config.userId           | string                                         | Filters the resulting set of executions by scheduled user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

#### Returns

| Return type                                                                                                                                       | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SyntheticOnDemandExecutions](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecutions) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticOnDemandMonitorExecutionsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticOnDemandMonitorExecutionsClient.getExecutions();
```

### rerun

**syntheticOnDemandMonitorExecutionsClient.rerun(config): Promise\<[SyntheticOnDemandExecutionResult](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecutionresult)>**

Reruns specified on-demand execution of synthetic monitors

**Required scope:** environment-api:synthetic-execution:write
**Required permission:** environment:roles:viewer

#### Parameters

| Name                          | Type   | Description                                |
| ----------------------------- | ------ | ------------------------------------------ |
| config.executionId (required) | number | The identifier of the on-demand execution. |

#### Returns

| Return type                                                                                                                                                 | Status code | Description                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------- |
| [SyntheticOnDemandExecutionResult](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#syntheticondemandexecutionresult) | 200         | Success. The monitor's execution response details |

#### Throws

| Error Type         | Error Message                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Unavailable \| Client side error. \| Server side error. |

**Code example**

```ts
import { syntheticOnDemandMonitorExecutionsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await syntheticOnDemandMonitorExecutionsClient.rerun({
    executionId: 10,
  });
```
