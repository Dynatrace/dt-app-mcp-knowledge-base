## activeGatesAutoUpdateConfigurationClient

```js
import { activeGatesAutoUpdateConfigurationClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### ~~getAutoUpdateConfigById~~

> ⚠️ **Deprecated**

**activeGatesAutoUpdateConfigurationClient.getAutoUpdateConfigById(config): Promise\<null | [ActiveGateAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#activegateautoupdateconfig)>**

Gets the configuration of auto-update for the specified ActiveGate

**One of the following scopes is required:**

- environment-api:activegates:read
- fleet-management:activegates:read

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegates:read

Gets the configuration of auto-update for the specified ActiveGate

**Deprecation notice:** This endpoint is deprecated. Use the Settings API endpoint `GET /api/v2/settings/objects` with schemaId `builtin:deployment.activegate.updates` and `scopes=ENVIRONMENT_ACTIVE_GATE-{ActiveGate ID}` to retrieve the auto-update setting of a specific ActiveGate.

#### Parameters

| Name                   | Type   | Description                        |
| ---------------------- | ------ | ---------------------------------- |
| config.agId (required) | string | The ID of the required ActiveGate. |

#### Returns

| Return type                                                                                                                                      | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [ActiveGateAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#activegateautoupdateconfig) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                         |
| ------------------ | ------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Not found. See response body for details. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateConfigurationClient.getAutoUpdateConfigById(
    { agId: "..." },
  );
```

### ~~getGlobalAutoUpdateConfigForTenant~~

> ⚠️ **Deprecated**

**activeGatesAutoUpdateConfigurationClient.getGlobalAutoUpdateConfigForTenant(config): Promise\<[ActiveGateGlobalAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#activegateglobalautoupdateconfig)>**

Gets the global auto-update configuration of environment ActiveGates.

**One of the following scopes is required:**

- environment-api:activegates:read
- fleet-management:activegates:read

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegates:read

Gets the global auto-update configuration of environment ActiveGates.

**Deprecation notice:** This endpoint is deprecated. Use the Settings API endpoint `GET /api/v2/settings/objects` with schemaId `builtin:deployment.activegate.updates` and `scopes=tenant` to retrieve the global auto-update setting of environment ActiveGates.

#### Returns

| Return type                                                                                                                                                  | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [ActiveGateGlobalAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#activegateglobalautoupdateconfig) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateConfigurationClient.getGlobalAutoUpdateConfigForTenant();
```

### ~~putAutoUpdateConfigById~~

> ⚠️ **Deprecated**

**activeGatesAutoUpdateConfigurationClient.putAutoUpdateConfigById(config): Promise\<void>**

Updates the configuration of auto-update for the specified ActiveGate

**One of the following scopes is required:**

- environment-api:activegates:write
- fleet-management:activegates:write

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegates:write

Updates the configuration of auto-update for the specified ActiveGate

**Deprecation notice:** This endpoint is deprecated. Use the Settings API endpoint `POST /api/v2/settings/objects` with schemaId `builtin:deployment.activegate.updates` and `scope=ENVIRONMENT_ACTIVE_GATE-{ActiveGate ID}` to change the auto-update setting of a specific ActiveGate.

#### Parameters

| Name                   | Type                                                                                                                                                     | Description                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| config.agId (required) | string                                                                                                                                                   | The ID of the required ActiveGate. |
| config.body (required) | null \| [ActiveGateAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#activegateautoupdateconfig) |                                    |

#### Returns

| Return type | Status code | Description                                                                             |
| ----------- | ----------- | --------------------------------------------------------------------------------------- |
| void        | 204         | Success. The auto-update configuration have been updated. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateConfigurationClient.putAutoUpdateConfigById(
    {
      agId: "...",
      body: {
        setting: "INHERITED",
        updateWindows: {
          windows: [
            {
              id: "vu9U3hXa3q0AAAABADdkeW5hdHJhY2Uuc2V0dGluZ3MuZGVwbG95bWVudC5tYW5h",
            },
          ],
        },
      },
    },
  );
```

### ~~putGlobalAutoUpdateConfigForTenant~~

> ⚠️ **Deprecated**

**activeGatesAutoUpdateConfigurationClient.putGlobalAutoUpdateConfigForTenant(config): Promise\<void>**

Puts the global auto-update configuration of environment ActiveGates.

**One of the following scopes is required:**

- environment-api:activegates:write
- fleet-management:activegates:write

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegates:write

Puts the global auto-update configuration of environment ActiveGates.

**Deprecation notice:** This endpoint is deprecated. Use the Settings API endpoint `POST /api/v2/settings/objects` with schemaId `builtin:deployment.activegate.updates` and `scope=tenant` to change the global auto-update setting of environment ActiveGates.

#### Parameters

| Name                   | Type                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.body (required) | [ActiveGateGlobalAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#activegateglobalautoupdateconfig) |

#### Returns

| Return type | Status code | Description                                                                                    |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------- |
| void        | 204         | Success. The global auto-update configuration have been updated. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateConfigurationClient.putGlobalAutoUpdateConfigForTenant(
    {
      body: {
        globalSetting: "ENABLED",
        updateWindows: {
          windows: [
            {
              id: "vu9U3hXa3q0AAAABADdkeW5hdHJhY2Uuc2V0dGluZ3MuZGVwbG95bWVudC5tYW5h",
            },
          ],
        },
      },
    },
  );
```

### ~~validateAutoUpdateConfigById~~

> ⚠️ **Deprecated**

**activeGatesAutoUpdateConfigurationClient.validateAutoUpdateConfigById(config): Promise\<void>**

Validates the payload for the `POST /activeGates/{agId}/autoUpdate` request.

**One of the following scopes is required:**

- environment-api:activegates:write
- fleet-management:activegates:write

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegates:write

Validates the payload for the `POST /activeGates/{agId}/autoUpdate` request.

**Deprecation notice:** This endpoint is deprecated. Use the Settings API endpoint `POST /api/v2/settings/objects?validateOnly=true` with schemaId `builtin:deployment.activegate.updates` and `scope=ENVIRONMENT_ACTIVE_GATE-{ActiveGate ID}` to validate the auto-update setting of a specific ActiveGate.

#### Parameters

| Name                   | Type                                                                                                                                                     | Description                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| config.agId (required) | string                                                                                                                                                   | The ID of the required ActiveGate. |
| config.body (required) | null \| [ActiveGateAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#activegateautoupdateconfig) |                                    |

#### Returns

| Return type | Status code | Description                                                                                |
| ----------- | ----------- | ------------------------------------------------------------------------------------------ |
| void        | 204         | Validated. The submitted auto-update configuration is valid. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateConfigurationClient.validateAutoUpdateConfigById(
    {
      agId: "...",
      body: {
        setting: "INHERITED",
        updateWindows: {
          windows: [
            {
              id: "vu9U3hXa3q0AAAABADdkeW5hdHJhY2Uuc2V0dGluZ3MuZGVwbG95bWVudC5tYW5h",
            },
          ],
        },
      },
    },
  );
```

### ~~validateGlobalAutoUpdateConfigForTenant~~

> ⚠️ **Deprecated**

**activeGatesAutoUpdateConfigurationClient.validateGlobalAutoUpdateConfigForTenant(config): Promise\<void>**

Validates the payload for the `POST /activeGates/autoUpdate` request.

**One of the following scopes is required:**

- environment-api:activegates:write
- fleet-management:activegates:write

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegates:write

Validates the payload for the `POST /activeGates/autoUpdate` request.

**Deprecation notice:** This endpoint is deprecated. Use the Settings API endpoint `POST /api/v2/settings/objects?validateOnly=true` with schemaId `builtin:deployment.activegate.updates` and `scope=tenant` to validate the global auto-update setting of environment ActiveGates.

#### Parameters

| Name                   | Type                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.body (required) | [ActiveGateGlobalAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#activegateglobalautoupdateconfig) |

#### Returns

| Return type | Status code | Description                                                                    |
| ----------- | ----------- | ------------------------------------------------------------------------------ |
| void        | 204         | Validated. The submitted configuration is valid. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesAutoUpdateConfigurationClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await activeGatesAutoUpdateConfigurationClient.validateGlobalAutoUpdateConfigForTenant(
    {
      body: {
        globalSetting: "ENABLED",
        updateWindows: {
          windows: [
            {
              id: "vu9U3hXa3q0AAAABADdkeW5hdHJhY2Uuc2V0dGluZ3MuZGVwbG95bWVudC5tYW5h",
            },
          ],
        },
      },
    },
  );
```
