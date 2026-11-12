## activeGatesAutoUpdateConfigurationClient

```js
import { activeGatesAutoUpdateConfigurationClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getAutoUpdateConfigById

**activeGatesAutoUpdateConfigurationClient.getAutoUpdateConfigById(config): Promise\<[ActiveGateAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegateautoupdateconfig)>**

Gets the configuration of auto-update for the specified ActiveGate

**Required scope:** environment-api:activegates:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type   | Description                        |
| ---------------------- | ------ | ---------------------------------- |
| config.agId (required) | string | The ID of the required ActiveGate. |

#### Returns

| Return type                                                                                                                                     | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ActiveGateAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegateautoupdateconfig) | 200         | Success     |

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

### getGlobalAutoUpdateConfigForTenant

**activeGatesAutoUpdateConfigurationClient.getGlobalAutoUpdateConfigForTenant(config): Promise\<[ActiveGateGlobalAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegateglobalautoupdateconfig)>**

Gets the global auto-update configuration of environment ActiveGates.

**Required scope:** environment-api:activegates:read
**Required permission:** environment:roles:manage-settings

#### Returns

| Return type                                                                                                                                                 | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ActiveGateGlobalAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegateglobalautoupdateconfig) | 200         | Success     |

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

### putAutoUpdateConfigById

**activeGatesAutoUpdateConfigurationClient.putAutoUpdateConfigById(config): Promise\<void>**

Updates the configuration of auto-update for the specified ActiveGate

**Required scope:** environment-api:activegates:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                                                            | Description                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| config.agId (required) | string                                                                                                                                          | The ID of the required ActiveGate. |
| config.body (required) | [ActiveGateAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegateautoupdateconfig) |                                    |

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
    { agId: "...", body: { setting: "INHERITED" } },
  );
```

### putGlobalAutoUpdateConfigForTenant

**activeGatesAutoUpdateConfigurationClient.putGlobalAutoUpdateConfigForTenant(config): Promise\<void>**

Puts the global auto-update configuration of environment ActiveGates.

**Required scope:** environment-api:activegates:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [ActiveGateGlobalAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegateglobalautoupdateconfig) |

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
    { body: { globalSetting: "ENABLED" } },
  );
```

### validateAutoUpdateConfigById

**activeGatesAutoUpdateConfigurationClient.validateAutoUpdateConfigById(config): Promise\<void>**

Validates the payload for the `POST /activeGates/{agId}/autoUpdate` request.

**Required scope:** environment-api:activegates:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                                                            | Description                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| config.agId (required) | string                                                                                                                                          | The ID of the required ActiveGate. |
| config.body (required) | [ActiveGateAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegateautoupdateconfig) |                                    |

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
    { agId: "...", body: { setting: "INHERITED" } },
  );
```

### validateGlobalAutoUpdateConfigForTenant

**activeGatesAutoUpdateConfigurationClient.validateGlobalAutoUpdateConfigForTenant(config): Promise\<void>**

Validates the payload for the `POST /activeGates/autoUpdate` request.

**Required scope:** environment-api:activegates:write
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type                                                                                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [ActiveGateGlobalAutoUpdateConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegateglobalautoupdateconfig) |

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
    { body: { globalSetting: "ENABLED" } },
  );
```
