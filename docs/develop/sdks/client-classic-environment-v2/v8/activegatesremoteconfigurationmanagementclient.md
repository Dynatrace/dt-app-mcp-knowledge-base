## activeGatesRemoteConfigurationManagementClient

```js
import { activeGatesRemoteConfigurationManagementClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createRemoteIdentityOperationJob

**activeGatesRemoteConfigurationManagementClient.createRemoteIdentityOperationJob(config): Promise\<[RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementjob)>**

Creates a new remote configuration management job

**Required scope:** fleet-management:activegates:write
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:activegates:write

#### Parameters

| Name                   | Type                                                                                                                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [RemoteConfigurationManagementOperationActiveGateRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementoperationactivegaterequest) |

#### Returns

| Return type                                                                                                                                                 | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementjob) | 201         | Created     |

#### Throws

| Error Type                                         | Error Message                            |
| -------------------------------------------------- | ---------------------------------------- |
| RemoteConfigurationManagementValidationResultError | Failed. The input is invalid.            |
| ErrorEnvelopeError                                 | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesRemoteConfigurationManagementClient.createRemoteIdentityOperationJob(
    {
      body: {
        entities: ["0x2b7c0b02,0x4928065d"],
        operations: [
          { attribute: "networkZone", operation: "set" },
        ],
      },
    },
  );
```

### createRemoteIdentityOperationPreview

**activeGatesRemoteConfigurationManagementClient.createRemoteIdentityOperationPreview(config): Promise\<[RemoteConfigurationManagementPreviewList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementpreviewlist)>**

Creates a preview for remote configuration management job - applicable only to network zone and ActiveGate group

**Required scope:** fleet-management:activegates:write
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:activegates:write

#### Parameters

| Name                   | Type                                                                                                                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [RemoteConfigurationManagementOperationActiveGateRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementoperationactivegaterequest) |

#### Returns

| Return type                                                                                                                                                                 | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [RemoteConfigurationManagementPreviewList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementpreviewlist) | 200         | Success     |

#### Throws

| Error Type                                         | Error Message                            |
| -------------------------------------------------- | ---------------------------------------- |
| RemoteConfigurationManagementValidationResultError | Failed. The input is invalid.            |
| ErrorEnvelopeError                                 | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesRemoteConfigurationManagementClient.createRemoteIdentityOperationPreview(
    {
      body: {
        entities: ["0x2b7c0b02,0x4928065d"],
        operations: [
          { attribute: "networkZone", operation: "set" },
        ],
      },
    },
  );
```

### getCurrentRemoteIdentityOperationJob

**activeGatesRemoteConfigurationManagementClient.getCurrentRemoteIdentityOperationJob(config): Promise\<void | [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementjob)>**

Gets remote configuration management job that is currently running

**Required scope:** fleet-management:activegates:read
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:activegates:read

The currently running remote configuration management job may be related to ActiveGates or OneAgents. There is a limit of one concurrent remote configuration management job, regardless of the entity type.

#### Returns

| Return type                                                                                                                                                 | Status code | Description                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementjob) | 200         | Success                                                     |
| void                                                                                                                                                        | 204         | No remote configuration management job is currently running |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesRemoteConfigurationManagementClient.getCurrentRemoteIdentityOperationJob();
```

### getRemoteIdentityOperationJob

**activeGatesRemoteConfigurationManagementClient.getRemoteIdentityOperationJob(config): Promise\<[RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementjob)>**

Gets the specified remote configuration management job

**Required scope:** fleet-management:activegates:read
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:activegates:read

#### Parameters

| Name                 | Type   | Description                                                 |
| -------------------- | ------ | ----------------------------------------------------------- |
| config.id (required) | string | The ID of the required remote configuration management job. |

#### Returns

| Return type                                                                                                                                                 | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementjob) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesRemoteConfigurationManagementClient.getRemoteIdentityOperationJob(
    { id: "..." },
  );
```

### getRemoteIdentityOperations

**activeGatesRemoteConfigurationManagementClient.getRemoteIdentityOperations(config): Promise\<[RemoteConfigurationManagementJobList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementjoblist)>**

Lists finished ActiveGate remote configuration management jobs

**Required scope:** fleet-management:activegates:read
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:activegates:read

The response includes finished jobs for the last 7 days.

#### Parameters

| Name        | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.from | string | The start of the requested timeframe for a remote configuration management job. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20;                                          |
| config.to   | string | The end of the requested timeframe for a remote configuration management job. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used. |

#### Returns

| Return type                                                                                                                                                         | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [RemoteConfigurationManagementJobList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementjoblist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesRemoteConfigurationManagementClient.getRemoteIdentityOperations();
```

### validateRemoteIdentityOperation

**activeGatesRemoteConfigurationManagementClient.validateRemoteIdentityOperation(config): Promise\<void>**

Validates the payload for the `POST /activeGates/remoteConfigurationManagement` request.

**Required scope:** fleet-management:activegates:write
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:activegates:write

#### Parameters

| Name                   | Type                                                                                                                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [RemoteConfigurationManagementOperationActiveGateRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#remoteconfigurationmanagementoperationactivegaterequest) |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type                                         | Error Message                            |
| -------------------------------------------------- | ---------------------------------------- |
| RemoteConfigurationManagementValidationResultError | Failed. The input is invalid.            |
| ErrorEnvelopeError                                 | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesRemoteConfigurationManagementClient.validateRemoteIdentityOperation(
    {
      body: {
        entities: ["0x2b7c0b02,0x4928065d"],
        operations: [
          { attribute: "networkZone", operation: "set" },
        ],
      },
    },
  );
```
