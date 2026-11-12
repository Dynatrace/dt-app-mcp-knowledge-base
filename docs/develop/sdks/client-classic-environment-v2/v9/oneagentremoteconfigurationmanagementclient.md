## oneAgentRemoteConfigurationManagementClient

```js
import { oneAgentRemoteConfigurationManagementClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createRemoteIdentityOperationPreview_1

**oneAgentRemoteConfigurationManagementClient.createRemoteIdentityOperationPreview_1(config): Promise\<[RemoteConfigurationManagementPreviewList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remoteconfigurationmanagementpreviewlist)>**

Creates a preview for remote configuration management job - applicable only to network zone and host group

**Required scope:** fleet-management:oneagents:write
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:oneagents:write

#### Parameters

| Name                   | Type                                                                                                                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [RemoteConfigurationManagementOperationOneAgentRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remoteconfigurationmanagementoperationoneagentrequest) |

#### Returns

| Return type                                                                                                                                                                 | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [RemoteConfigurationManagementPreviewList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remoteconfigurationmanagementpreviewlist) | 200         | Success     |

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

**oneAgentRemoteConfigurationManagementClient.getCurrentRemoteIdentityOperationJob_1(config): Promise\<void | [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remoteconfigurationmanagementjob)>**

Gets remote configuration management job that is currently running

**Required scope:** fleet-management:oneagents:read
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:oneagents:read

The currently running remote configuration management job may be related to ActiveGates or OneAgents. There is a limit of one concurrent remote configuration management job, regardless of the entity type.

#### Returns

| Return type                                                                                                                                                 | Status code | Description                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remoteconfigurationmanagementjob) | 200         | Success                                                     |
| void                                                                                                                                                        | 204         | No remote configuration management job is currently running |

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

**oneAgentRemoteConfigurationManagementClient.getRemoteIdentityOperationJob_1(config): Promise\<[RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remoteconfigurationmanagementjob)>**

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

| Return type                                                                                                                                                 | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [RemoteConfigurationManagementJob](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remoteconfigurationmanagementjob) | 200         | Success     |

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

### validateRemoteIdentityOperation_1

**oneAgentRemoteConfigurationManagementClient.validateRemoteIdentityOperation_1(config): Promise\<void>**

Validates the payload for the `POST /oneagents/remoteConfigurationManagement` request.

**Required scope:** fleet-management:oneagents:write
**One of the following permissions is required:**

- environment:roles:viewer
- fleet-management:oneagents:write

#### Parameters

| Name                   | Type                                                                                                                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [RemoteConfigurationManagementOperationOneAgentRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v9/types.md#remoteconfigurationmanagementoperationoneagentrequest) |

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
