## activeGatesAutoUpdateJobsClient

```js
import { activeGatesAutoUpdateJobsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createUpdateJobForAg

**activeGatesAutoUpdateJobsClient.createUpdateJobForAg(config): Promise\<[UpdateJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatejob)>**

Creates a new update job for the specified ActiveGate

**Required scope:** environment-api:activegates:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                          | Description                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| config.agId (required) | string                                                                                                        | The ID of the required ActiveGate. |
| config.body (required) | [UpdateJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatejob) |                                    |

#### Returns

| Return type                                                                                                   | Status code | Description                                |
| ------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------ |
| [UpdateJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatejob) | 201         | Success. The update-job have been created. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateJobsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateJobsClient.createUpdateJobForAg(
    {
      agId: "...",
      body: { targetVersion: "1.190.0.20200301-130000" },
    },
  );
```

### deleteUpdateJobByJobIdForAg

**activeGatesAutoUpdateJobsClient.deleteUpdateJobByJobIdForAg(config): Promise\<void>**

Deletes the specified update job

**Required scope:** environment-api:activegates:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                    | Type   | Description                                         |
| ----------------------- | ------ | --------------------------------------------------- |
| config.agId (required)  | string | The ID of the required ActiveGate.                  |
| config.jobId (required) | string | A unique identifier for a update-job of ActiveGate. |

#### Returns

| Return type | Status code | Description                                                              |
| ----------- | ----------- | ------------------------------------------------------------------------ |
| void        | 204         | Success. The update-job have been deleted. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Not found. See response body for details. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateJobsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateJobsClient.deleteUpdateJobByJobIdForAg(
    { agId: "...", jobId: "..." },
  );
```

### getAllUpdateJobList

**activeGatesAutoUpdateJobsClient.getAllUpdateJobList(config): Promise\<[UpdateJobsAll](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatejobsall)>**

List ActiveGates with update jobs

**Required scope:** environment-api:activegates:read
**Required permission:** environment:roles:manage-settings

The response includes ActiveGates that have both completed (successful and failed) jobs and jobs in progress.

#### Parameters

| Name                            | Type                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.from                     | string                                                                  | The start of the requested timeframe for update jobs. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of one day is used (`now-1d`). Maximum timeframe is 31 days. |
| config.lastUpdates              | boolean                                                                 | If `true`, filters the resulting set of update jobs to the most recent update of each type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| config.startVersion             | string                                                                  | Filters the resulting set of update-jobs by the initial version (required format `<major>.<minor>.<revision>`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.startVersionCompareType  | "EQUAL" \| "GREATER" \| "GREATER_EQUAL" \| "LOWER" \| "LOWER_EQUAL"   | Filters the resulting set of update jobs by the specified initial version. Specify the comparison operator here.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.targetVersion            | string                                                                  | Filters the resulting set of update-jobs by the target version (required format `<major>.<minor>.<revision>`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| config.targetVersionCompareType | "EQUAL" \| "GREATER" \| "GREATER_EQUAL" \| "LOWER" \| "LOWER_EQUAL"   | Filters the resulting set of update jobs by the specified target version. Specify the comparison operator here.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.to                       | string                                                                  | The end of the requested timeframe for update jobs. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                                                        |
| config.updateType               | "SYNTHETIC" \| "ACTIVE_GATE" \| "REMOTE_PLUGIN_AGENT" \| "Z_REMOTE" | Filters the resulting set of update-jobs by the update type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Returns

| Return type                                                                                                           | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [UpdateJobsAll](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatejobsall) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateJobsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateJobsClient.getAllUpdateJobList();
```

### getUpdateJobByJobIdForAg

**activeGatesAutoUpdateJobsClient.getUpdateJobByJobIdForAg(config): Promise\<[UpdateJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatejob)>**

Gets the parameters of the specified update job

**Required scope:** environment-api:activegates:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                    | Type   | Description                                         |
| ----------------------- | ------ | --------------------------------------------------- |
| config.agId (required)  | string | The ID of the required ActiveGate.                  |
| config.jobId (required) | string | A unique identifier for a update-job of ActiveGate. |

#### Returns

| Return type                                                                                                   | Status code | Description |
| ------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [UpdateJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatejob) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                         |
| ------------------ | ------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Not found. See response body for details. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateJobsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateJobsClient.getUpdateJobByJobIdForAg(
    { agId: "...", jobId: "..." },
  );
```

### getUpdateJobListByAgId

**activeGatesAutoUpdateJobsClient.getUpdateJobListByAgId(config): Promise\<[UpdateJobList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatejoblist)>**

Lists update jobs for the specified ActiveGate

**Required scope:** environment-api:activegates:read
**Required permission:** environment:roles:manage-settings

The job can update the ActiveGate to the specified version or the latest available one.

#### Parameters

| Name                            | Type                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.agId (required)          | string                                                                  | The ID of the required ActiveGate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| config.from                     | string                                                                  | The start of the requested timeframe for update jobs. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of one week is used (`now-1w`). Maximum timeframe is 31 days. |
| config.lastUpdates              | boolean                                                                 | If `true`, filters the resulting set of update jobs to the most recent update of each type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.startVersion             | string                                                                  | Filters the resulting set of update-jobs by the initial version (required format `<major>.<minor>.<revision>`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| config.startVersionCompareType  | "EQUAL" \| "GREATER" \| "GREATER_EQUAL" \| "LOWER" \| "LOWER_EQUAL"   | Filters the resulting set of update jobs by the specified initial version. Specify the comparison operator here.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.targetVersion            | string                                                                  | Filters the resulting set of update-jobs by the target version (required format `<major>.<minor>.<revision>`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.targetVersionCompareType | "EQUAL" \| "GREATER" \| "GREATER_EQUAL" \| "LOWER" \| "LOWER_EQUAL"   | Filters the resulting set of update jobs by the specified target version. Specify the comparison operator here.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| config.to                       | string                                                                  | The end of the requested timeframe for update jobs. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                                                         |
| config.updateType               | "SYNTHETIC" \| "ACTIVE_GATE" \| "REMOTE_PLUGIN_AGENT" \| "Z_REMOTE" | Filters the resulting set of update-jobs by the update type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Returns

| Return type                                                                                                           | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [UpdateJobList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatejoblist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                         |
| ------------------ | ------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Not found. See response body for details. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateJobsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateJobsClient.getUpdateJobListByAgId(
    { agId: "..." },
  );
```

### validateUpdateJobForAg

**activeGatesAutoUpdateJobsClient.validateUpdateJobForAg(config): Promise\<void>**

Validates the payload for the `POST /activeGates/{agId}/updateJobs` request.

**Required scope:** environment-api:activegates:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                          | Description                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| config.agId (required) | string                                                                                                        | The ID of the required ActiveGate. |
| config.body (required) | [UpdateJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatejob) |                                    |

#### Returns

| Return type | Status code | Description                                                                 |
| ----------- | ----------- | --------------------------------------------------------------------------- |
| void        | 204         | Validated. The submitted update-job is valid. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateJobsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateJobsClient.validateUpdateJobForAg(
    {
      agId: "...",
      body: { targetVersion: "1.190.0.20200301-130000" },
    },
  );
```
