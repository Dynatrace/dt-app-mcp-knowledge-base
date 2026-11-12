## oneAgentRemoteConfigurationManagementClient

```js
import { oneAgentRemoteConfigurationManagementClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createRemoteIdentityOperationJob_1

**oneAgentRemoteConfigurationManagementClient.createRemoteIdentityOperationJob_1(config): Promise\<[RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementjob)>**

Creates a new remote configuration management job

**Required scope:** fleet-management:oneagents:write
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:oneagents:write

#### Parameters

| Name                   | Type                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [RemoteConfigurationManagementOperationOneAgentRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementoperationoneagentrequest) |                                                                                                                                                                                                                                                 |
| config.restart         | boolean                                                                                                                                                                                                | One Agents will be restarted (`true`) or not (`false`) after configuration. By default OneAgents will be restarted when network zone, host group, host tags or host properties are reconfigured - the restart is required to apply the changes. |

#### Returns

| Return type                                                                                                                                                  | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementjob) | 201         | Created     |

#### Throws

| Error Type                                         | Error Message                            |
| -------------------------------------------------- | ---------------------------------------- |
| RemoteConfigurationManagementValidationResultError | Failed. The input is invalid.            |
| ErrorEnvelopeError                                 | Client side error. \| Server side error. |

**Code example**

```ts
import { oneAgentRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await oneAgentRemoteConfigurationManagementClient.createRemoteIdentityOperationJob_1(
    {
      body: {
        entities: [
          "HOST-D454A967666E7970,HOST-811760CFF2A5E872",
        ],
        operations: [
          { attribute: "networkZone", operation: "set" },
        ],
      },
    },
  );
```

### createRemoteIdentityOperationPreview_1

**oneAgentRemoteConfigurationManagementClient.createRemoteIdentityOperationPreview_1(config): Promise\<[RemoteConfigurationManagementPreviewList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementpreviewlist)>**

Creates a preview for remote configuration management job - applicable only to network zone and host group

**Required scope:** fleet-management:oneagents:write
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:oneagents:write

#### Parameters

| Name                   | Type                                                                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.body (required) | [RemoteConfigurationManagementOperationOneAgentRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementoperationoneagentrequest) |

#### Returns

| Return type                                                                                                                                                                  | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [RemoteConfigurationManagementPreviewList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementpreviewlist) | 200         | Success     |

#### Throws

| Error Type                                         | Error Message                            |
| -------------------------------------------------- | ---------------------------------------- |
| RemoteConfigurationManagementValidationResultError | Failed. The input is invalid.            |
| ErrorEnvelopeError                                 | Client side error. \| Server side error. |

**Code example**

```ts
import { oneAgentRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await oneAgentRemoteConfigurationManagementClient.createRemoteIdentityOperationPreview_1(
    {
      body: {
        entities: [
          "HOST-D454A967666E7970,HOST-811760CFF2A5E872",
        ],
        operations: [
          { attribute: "networkZone", operation: "set" },
        ],
      },
    },
  );
```

### getCurrentRemoteIdentityOperationJob_1

**oneAgentRemoteConfigurationManagementClient.getCurrentRemoteIdentityOperationJob_1(config): Promise\<void | [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementjob)>**

Gets remote configuration management job that is currently running

**Required scope:** fleet-management:oneagents:read
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:oneagents:read

The currently running remote configuration management job may be related to ActiveGates or OneAgents. There is a limit of one concurrent remote configuration management job, regardless of the entity type.

#### Returns

| Return type                                                                                                                                                  | Status code | Description                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------------------------------------------------------- |
| [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementjob) | 200         | Success                                                     |
| void                                                                                                                                                         | 204         | No remote configuration management job is currently running |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { oneAgentRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await oneAgentRemoteConfigurationManagementClient.getCurrentRemoteIdentityOperationJob_1();
```

### getRemoteIdentityOperationJob_1

**oneAgentRemoteConfigurationManagementClient.getRemoteIdentityOperationJob_1(config): Promise\<[RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementjob)>**

Gets the specified remote configuration management job

**Required scope:** fleet-management:oneagents:read
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:oneagents:read

#### Parameters

| Name                 | Type   | Description                                                 |
| -------------------- | ------ | ----------------------------------------------------------- |
| config.id (required) | string | The ID of the required remote configuration management job. |

#### Returns

| Return type                                                                                                                                                  | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementjob) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { oneAgentRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await oneAgentRemoteConfigurationManagementClient.getRemoteIdentityOperationJob_1(
    { id: "..." },
  );
```

### getRemoteIdentityOperations_1

**oneAgentRemoteConfigurationManagementClient.getRemoteIdentityOperations_1(config): Promise\<[RemoteConfigurationManagementJobList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementjoblist)>**

Lists finished OneAgent remote configuration management jobs

**Required scope:** fleet-management:oneagents:read
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:oneagents:read

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

| Return type                                                                                                                                                          | Status code | Description |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [RemoteConfigurationManagementJobList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementjoblist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { oneAgentRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await oneAgentRemoteConfigurationManagementClient.getRemoteIdentityOperations_1();
```

### validateRemoteIdentityOperation_1

**oneAgentRemoteConfigurationManagementClient.validateRemoteIdentityOperation_1(config): Promise\<void>**

Validates the payload for the `POST /oneagents/remoteConfigurationManagement` request.

**Required scope:** fleet-management:oneagents:write
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:oneagents:write

#### Parameters

| Name                   | Type                                                                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.body (required) | [RemoteConfigurationManagementOperationOneAgentRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#remoteconfigurationmanagementoperationoneagentrequest) |

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
import { oneAgentRemoteConfigurationManagementClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await oneAgentRemoteConfigurationManagementClient.validateRemoteIdentityOperation_1(
    {
      body: {
        entities: [
          "HOST-D454A967666E7970,HOST-811760CFF2A5E872",
        ],
        operations: [
          { attribute: "networkZone", operation: "set" },
        ],
      },
    },
  );
```
