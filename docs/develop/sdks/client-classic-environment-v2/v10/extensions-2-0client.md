## extensions_2_0Client

```js
import { extensions_2_0Client } from '@dynatrace-sdk/client-classic-environment-v2';
```

### ~~activateExtensionEnvironmentConfiguration~~

> ⚠️ **Deprecated**

**extensions_2_0Client.activateExtensionEnvironmentConfiguration(config): Promise\<[ExtensionEnvironmentConfigurationVersion](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionenvironmentconfigurationversion)>**

Activates the environment configuration from the specified version of the extension 2.0

**Required scope:** environment-api:extensions:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type                                                                                                                                                                         | Description                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| config.body (required)          | [ExtensionEnvironmentConfigurationVersion](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionenvironmentconfigurationversion) |                                          |
| config.extensionName (required) | string                                                                                                                                                                       | The name of the requested extension 2.0. |

#### Returns

| Return type                                                                                                                                                                  | Status code | Description                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ExtensionEnvironmentConfigurationVersion](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionenvironmentconfigurationversion) | 200         | Success. Environment configuration created. If the requested version was already active, this is an idempotent no-op (no backend state changes). |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.activateExtensionEnvironmentConfiguration(
    { extensionName: "...", body: { version: "1.2.3" } },
  );
```

### createMonitoringConfiguration

**extensions_2_0Client.createMonitoringConfiguration(config): Promise\<Array\<[MonitoringConfigurationResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#monitoringconfigurationresponse)>>**

Creates new monitoring configuration for the specified extension 2.0

**Required scope:** environment-api:extension-configurations:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:configurations:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type                                                                                                                                                     | Description                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| config.body (required)          | Array\<[MonitoringConfigurationDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#monitoringconfigurationdto)> |                                          |
| config.extensionName (required) | string                                                                                                                                                   | The name of the requested extension 2.0. |

#### Returns

| Return type                                                                                                                                                | Status code | Description                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------- |
| [MonitoringConfigurationResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#monitoringconfigurationresponse) | 200         | Success                                                       |
| [ErrorEnvelope](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#errorenvelope)                                     | 207         | Multi-Status, if not all requests resulted in the same status |

#### Throws

| Error Type              | Error Message                                                                  |
| ----------------------- | ------------------------------------------------------------------------------ |
| ErrorEnvelopeArrayError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. |
| ErrorEnvelopeError      | Client side error. \| Server side error.                                       |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.createMonitoringConfiguration({
    extensionName: "...",
    body: [{ scope: "HOST-D3A3C5A146830A79" }],
  });
```

**extensions_2_0Client.createMonitoringConfiguration(config): Promise\<Array\<[ErrorEnvelope](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#errorenvelope) | [MonitoringConfigurationResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#monitoringconfigurationresponse)>>**

#### Parameters

| Name                            | Type                                                                                                                                                     | Description                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| config.body (required)          | Array\<[MonitoringConfigurationDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#monitoringconfigurationdto)> |                                          |
| config.extensionName (required) | string                                                                                                                                                   | The name of the requested extension 2.0. |

#### Returns

| Return type                                                                                                                                                | Status code | Description                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------- |
| [MonitoringConfigurationResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#monitoringconfigurationresponse) | 200         | Success                                                       |
| [ErrorEnvelope](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#errorenvelope)                                     | 207         | Multi-Status, if not all requests resulted in the same status |

### ~~deleteEnvironmentConfiguration~~

> ⚠️ **Deprecated**

**extensions_2_0Client.deleteEnvironmentConfiguration(config): Promise\<[ExtensionEnvironmentConfigurationVersion](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionenvironmentconfigurationversion)>**

Deactivates the environment configuration of the specified extension 2.0

**Required scope:** environment-api:extensions:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type   | Description                              |
| ------------------------------- | ------ | ---------------------------------------- |
| config.extensionName (required) | string | The name of the requested extension 2.0. |

#### Returns

| Return type                                                                                                                                                                  | Status code | Description                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------- |
| [ExtensionEnvironmentConfigurationVersion](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionenvironmentconfigurationversion) | 200         | Success. Environment configuration deactivated. |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.deleteEnvironmentConfiguration(
    { extensionName: "..." },
  );
```

### ~~executeExtensionMonitoringConfigurationActions~~

> ⚠️ **Deprecated**

**extensions_2_0Client.executeExtensionMonitoringConfigurationActions(config): Promise\<[ExecuteActionsResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#executeactionsresponse)>**

Executes Data Source action of Active Gate or Host

**Required scope:** environment-api:extension-configuration-actions:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:configuration.actions:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                              | Type                                                                                                                           | Description                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| config.body (required)            | [ExecuteActionsDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#executeactionsdto) |                                                   |
| config.configurationId (required) | string                                                                                                                         | The ID of the requested monitoring configuration. |
| config.extensionName (required)   | string                                                                                                                         | The name of the requested extension 2.0.          |

#### Returns

| Return type                                                                                                                              | Status code | Description                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------- |
| [ExecuteActionsResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#executeactionsresponse) | 202         | Accepted. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Authentication failed \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.executeExtensionMonitoringConfigurationActions(
    {
      extensionName: "...",
      configurationId: "...",
      body: {},
    },
  );
```

### ~~extensionConfigurationSchema~~

> ⚠️ **Deprecated**

**extensions_2_0Client.extensionConfigurationSchema(config): Promise\<[SchemaDefinitionRestDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#schemadefinitionrestdto)>**

Gets the configuration schema of the specified version of the extension 2.0

**One of the following scopes is required:**

- environment-api:extensions:read
- environment-api:extension-configurations:read

**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                               | Type   | Description                                                                                                   |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| config.extensionName (required)    | string | The name of the requested extension 2.0.                                                                      |
| config.extensionVersion (required) | string | The version of the requested extension 2.0<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

#### Returns

| Return type                                                                                                                                | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [SchemaDefinitionRestDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#schemadefinitionrestdto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.extensionConfigurationSchema({
    extensionName: "...",
    extensionVersion: "...",
  });
```

### extensionDetails

**extensions_2_0Client.extensionDetails(config): Promise\<[Extension](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extension)>**

Gets details of the specified version of the extension 2.0

**Required scope:** environment-api:extensions:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                               | Type                              | Description                                                                                                   |
| ---------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| config.acceptType (required)       | "application/json; charset=utf-8" |                                                                                                               |
| config.extensionName (required)    | string                            | The name of the requested extension 2.0.                                                                      |
| config.extensionVersion (required) | string                            | The version of the requested extension 2.0<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.extensionDetails({
  acceptType: "application/json; charset=utf-8",
  extensionName: "...",
  extensionVersion: "...",
});
```

**extensions_2_0Client.extensionDetails(config): Promise\<Binary>**

#### Parameters

| Name                               | Type                                             | Description                                                                                                   |
| ---------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| config.acceptType (required)       | "application/octet-stream" \| "application/yaml" |                                                                                                               |
| config.extensionName (required)    | string                                           | The name of the requested extension 2.0.                                                                      |
| config.extensionVersion (required) | string                                           | The version of the requested extension 2.0<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

### ~~extensionMonitoringConfigurations~~

> ⚠️ **Deprecated**

**extensions_2_0Client.extensionMonitoringConfigurations(config): Promise\<[ExtensionMonitoringConfigurationsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionmonitoringconfigurationslist)>**

Lists all the monitoring configurations of the specified extension 2.0

**Required scope:** environment-api:extension-configurations:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:configurations:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type    | Description                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.active                   | boolean | Filters the resulting set of configurations by the active state.                                                                                                                                                                                                                                                  |
| config.extensionName (required) | string  | The name of the requested extension 2.0.                                                                                                                                                                                                                                                                          |
| config.nextPageKey              | string  | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize                 | number  | The amount of extensions in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                                              |
| config.version                  | string  | Filters the resulting set of configurations by extension 2.0 version.                                                                                                                                                                                                                                             |

#### Returns

| Return type                                                                                                                                                            | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ExtensionMonitoringConfigurationsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionmonitoringconfigurationslist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.extensionMonitoringConfigurations(
    { extensionName: "..." },
  );
```

### ~~getActiveEnvironmentConfiguration~~

> ⚠️ **Deprecated**

**extensions_2_0Client.getActiveEnvironmentConfiguration(config): Promise\<[ExtensionEnvironmentConfigurationVersion](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionenvironmentconfigurationversion)>**

Gets the active environment configuration version of the specified extension 2.0

**Required scope:** environment-api:extensions:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type   | Description                              |
| ------------------------------- | ------ | ---------------------------------------- |
| config.extensionName (required) | string | The name of the requested extension 2.0. |

#### Returns

| Return type                                                                                                                                                                  | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ExtensionEnvironmentConfigurationVersion](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionenvironmentconfigurationversion) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.getActiveEnvironmentConfiguration(
    { extensionName: "..." },
  );
```

### ~~getActiveGateGroupsInfo~~

> ⚠️ **Deprecated**

**extensions_2_0Client.getActiveGateGroupsInfo(config): Promise\<[ActiveGateGroupsInfoDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#activegategroupsinfodto)>**

List all activeGate groups available for extension

**Required scope:** environment-api:extension-configurations:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:configurations:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                               | Type   | Description                                                                                                   |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| config.extensionName (required)    | string | The name of the requested extension 2.0.                                                                      |
| config.extensionVersion (required) | string | The version of the requested extension 2.0<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

#### Returns

| Return type                                                                                                                                | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [ActiveGateGroupsInfoDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#activegategroupsinfodto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.getActiveGateGroupsInfo({
    extensionName: "...",
    extensionVersion: "...",
  });
```

### ~~getAlertTemplate~~

> ⚠️ **Deprecated**

**extensions_2_0Client.getAlertTemplate(config): Promise\<[AlertTemplateDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#alerttemplatedto)>**

Gets an alert template asset for given ID

**Required scope:** environment-api:extensions:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type   | Description                              |
| ------------------------------- | ------ | ---------------------------------------- |
| config.assetId (required)       | string | ID of the requested asset.               |
| config.extensionName (required) | string | The name of the requested extension 2.0. |

#### Returns

| Return type                                                                                                                  | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AlertTemplateDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#alerttemplatedto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.getAlertTemplate({
  extensionName: "...",
  assetId: "...",
});
```

### ~~getEnvironmentConfigurationAssetsInfo~~

> ⚠️ **Deprecated**

**extensions_2_0Client.getEnvironmentConfigurationAssetsInfo(config): Promise\<[ExtensionAssetsDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionassetsdto)>**

Gets the information about assets in an active extension 2.0

**Required scope:** environment-api:extensions:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type   | Description                              |
| ------------------------------- | ------ | ---------------------------------------- |
| config.extensionName (required) | string | The name of the requested extension 2.0. |

#### Returns

| Return type                                                                                                                      | Status code | Description |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ExtensionAssetsDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionassetsdto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.getEnvironmentConfigurationAssetsInfo(
    { extensionName: "..." },
  );
```

### ~~getExtensionMonitoringConfigurationStatus~~

> ⚠️ **Deprecated**

**extensions_2_0Client.getExtensionMonitoringConfigurationStatus(config): Promise\<[ExtensionStatusDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionstatusdto)>**

Gets the most recent status of the execution of given monitoring configuration

**Required scope:** environment-api:extension-configurations:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:configurations:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                              | Type   | Description                                       |
| --------------------------------- | ------ | ------------------------------------------------- |
| config.configurationId (required) | string | The ID of the requested monitoring configuration. |
| config.extensionName (required)   | string | The name of the requested extension 2.0.          |

#### Returns

| Return type                                                                                                                      | Status code | Description |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ExtensionStatusDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionstatusdto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.getExtensionMonitoringConfigurationStatus(
    { extensionName: "...", configurationId: "..." },
  );
```

### ~~getExtensionStatus~~

> ⚠️ **Deprecated**

**extensions_2_0Client.getExtensionStatus(config): Promise\<Array\<[ExtensionStatusWithIdDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionstatuswithiddto)>>**

Gets the most recent status of the execution of monitoring configurations of given extension

**Required scope:** environment-api:extension-configurations:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:configurations:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type   | Description                              |
| ------------------------------- | ------ | ---------------------------------------- |
| config.extensionName (required) | string | The name of the requested extension 2.0. |

#### Returns

| Return type                                                                                                                                  | Status code | Description |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ExtensionStatusWithIdDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionstatuswithiddto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.getExtensionStatus({
  extensionName: "...",
});
```

### ~~getJmxProcess~~

> ⚠️ **Deprecated**

**extensions_2_0Client.getJmxProcess(config): Promise\<JavaProcessDetails>**

Retrieves details of a specified Java process discovered in the environment for JMX metric collection. | maturity=EARLY_ADOPTER

**Required scope:** extensions:discovery.jmx:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                        | Type   | Description                                                                                                                                      |
| --------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.hostId               | string | Filters the resulting set of Java processes by the ID of the host they run on, in the form 'HOST-XXXXXXXXXXXXXXXX'. The exact match is required. |
| config.processId (required) | string | Id of the Java process discovered in the environment.                                                                                            |

#### Returns

| Return type                               | Status code | Description |
| ----------------------------------------- | ----------- | ----------- |
| [JavaProcessDetails](#javaprocessdetails) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. Agent data isn't yet available. Try again in a few seconds. \| Failed. Agent communication timeout. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.getJmxProcess({
  processId: "...",
});
```

### ~~getPmiProcess~~

> ⚠️ **Deprecated**

**extensions_2_0Client.getPmiProcess(config): Promise\<PmiProcessDetails>**

Retrieves details of a specified Java process discovered in the environment for PMI metric collection. | maturity=EARLY_ADOPTER

**Required scope:** extensions:discovery.pmi:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                        | Type   | Description                                                                                                                                      |
| --------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.hostId               | string | Filters the resulting set of Java processes by the ID of the host they run on, in the form 'HOST-XXXXXXXXXXXXXXXX'. The exact match is required. |
| config.processId (required) | string | Id of the Java process discovered in the environment.                                                                                            |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [PmiProcessDetails](#pmiprocessdetails) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. Agent data isn't yet available. Try again in a few seconds. \| Failed. Agent communication timeout. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.getPmiProcess({
  processId: "...",
});
```

### ~~getSchemaFile~~

> ⚠️ **Deprecated**

**extensions_2_0Client.getSchemaFile(config): Promise\<JsonNode>**

Gets the extension 2.0 schema file in the specified version

**Required scope:** environment-api:extensions:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type   | Description                                                                                   |
| ------------------------------- | ------ | --------------------------------------------------------------------------------------------- |
| config.fileName (required)      | string | The name of the schema file.                                                                  |
| config.schemaVersion (required) | string | The version of the schema.<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [JsonNode](#jsonnode) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.getSchemaFile({
  schemaVersion: "...",
  fileName: "...",
});
```

### ~~installExtension~~

> ⚠️ **Deprecated**

**extensions_2_0Client.installExtension(config): Promise\<[RegisteredExtensionResultDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#registeredextensionresultdto)>**

Installs Extension from HUB

**Required scope:** environment-api:extensions:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type   | Description                                                           |
| ------------------------------- | ------ | --------------------------------------------------------------------- |
| config.extensionName (required) | string | The name of the requested extension 2.0.                              |
| config.version                  | string | Filters the resulting set of configurations by extension 2.0 version. |

#### Returns

| Return type                                                                                                                                          | Status code | Description                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [RegisteredExtensionResultDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#registeredextensionresultdto) | 200         | Success. The extension version is installed and active. If the requested version was already the active environment configuration, this is an idempotent no-op (no backend state changes). |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.installExtension({
  extensionName: "...",
});
```

### ~~listExtensionInfos~~

> ⚠️ **Deprecated**

**extensions_2_0Client.listExtensionInfos(config): Promise\<[ExtensionInfoList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensioninfolist)>**

Lists all the extensions 2.0 available in your environment with additional metadata

**Required scope:** environment-api:extensions:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.name        | string | Filters the resulting set of extensions 2.0 by name. You can specify a partial name. In that case, the CONTAINS operator is used.                                                                                                                                                                                 |
| config.nextPageKey | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize    | number | The amount of extensions in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                                              |

#### Returns

| Return type                                                                                                                    | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [ExtensionInfoList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensioninfolist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.listExtensionInfos();
```

### ~~listExtensionVersions~~

> ⚠️ **Deprecated**

**extensions_2_0Client.listExtensionVersions(config): Promise\<[ExtensionList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionlist)>**

Lists all versions of the extension 2.0

**Required scope:** environment-api:extensions:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type   | Description                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.extensionName (required) | string | The name of the requested extension 2.0.                                                                                                                                                                                                                                                                          |
| config.nextPageKey              | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize                 | number | The amount of extensions in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                                              |

#### Returns

| Return type                                                                                                            | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ExtensionList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionlist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.listExtensionVersions({
    extensionName: "...",
  });
```

### ~~listExtensions~~

> ⚠️ **Deprecated**

**extensions_2_0Client.listExtensions(config): Promise\<[ExtensionList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionlist)>**

Lists all the extensions 2.0 available in your environment

**Required scope:** environment-api:extensions:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.name        | string | Filters the resulting set of extensions 2.0 by name. You can specify a partial name. In that case, the CONTAINS operator is used.                                                                                                                                                                                 |
| config.nextPageKey | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize    | number | The amount of extensions in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                                              |

#### Returns

| Return type                                                                                                            | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ExtensionList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionlist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.listExtensions();
```

### ~~listJmxProcesses~~

> ⚠️ **Deprecated**

**extensions_2_0Client.listJmxProcesses(config): Promise\<Array\<[JavaProcessContainerList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#javaprocesscontainerlist)>>**

Lists all Java processes discovered in the environment that are available for JMX metric collection. | maturity=EARLY_ADOPTER

**Required scope:** extensions:discovery.jmx:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name          | Type   | Description                                                                                                                                      |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.hostId | string | Filters the resulting set of Java processes by the ID of the host they run on, in the form 'HOST-XXXXXXXXXXXXXXXX'. The exact match is required. |

#### Returns

| Return type                                                                                                                                  | Status code | Description |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [JavaProcessContainerList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#javaprocesscontainerlist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.listJmxProcesses();
```

### ~~listPmiProcesses~~

> ⚠️ **Deprecated**

**extensions_2_0Client.listPmiProcesses(config): Promise\<Array\<[JavaProcessContainerList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#javaprocesscontainerlist)>>**

Lists all Java processes discovered in the environment that are available for PMI metric collection. | maturity=EARLY_ADOPTER

**Required scope:** extensions:discovery.pmi:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name          | Type   | Description                                                                                                                                      |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.hostId | string | Filters the resulting set of Java processes by the ID of the host they run on, in the form 'HOST-XXXXXXXXXXXXXXXX'. The exact match is required. |

#### Returns

| Return type                                                                                                                                  | Status code | Description |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [JavaProcessContainerList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#javaprocesscontainerlist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.listPmiProcesses();
```

### listSchemaFiles

**extensions_2_0Client.listSchemaFiles(config): Promise\<[SchemaFiles](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#schemafiles)>**

Lists all the files available for the specified extension 2.0 schema version

**Required scope:** environment-api:extensions:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type                              | Description                                                                                   |
| ------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| config.acceptType (required)    | "application/json; charset=utf-8" |                                                                                               |
| config.schemaVersion (required) | string                            | The version of the schema.<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.listSchemaFiles({
  acceptType: "application/json; charset=utf-8",
  schemaVersion: "...",
});
```

**extensions_2_0Client.listSchemaFiles(config): Promise\<Binary>**

#### Parameters

| Name                            | Type                       | Description                                                                                   |
| ------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------- |
| config.acceptType (required)    | "application/octet-stream" |                                                                                               |
| config.schemaVersion (required) | string                     | The version of the schema.<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

### ~~listSchemas~~

> ⚠️ **Deprecated**

**extensions_2_0Client.listSchemas(config): Promise\<[SchemasList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#schemaslist)>**

Lists all the extension 2.0 schemas versions available in your environment

**Required scope:** environment-api:extensions:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Returns

| Return type                                                                                                        | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [SchemasList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#schemaslist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.listSchemas();
```

### ~~monitoringConfigurationAudit~~

> ⚠️ **Deprecated**

**extensions_2_0Client.monitoringConfigurationAudit(config): Promise\<[AuditLog](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#auditlog)>**

Gets the audit logs of monitoring configuration of given extension

**Required scope:** environment-api:extension-configurations:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:configurations:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                              | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.configurationId (required) | string | The ID of the requested monitoring configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.extensionName (required)   | string | The name of the requested extension 2.0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| config.from                       | string | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of two weeks is used (`now-2w`). |
| config.nextPageKey                | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.pageSize                   | number | The amount of extensions in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.sort                       | string | The sorting of audit log entries: * `timestamp`
  : Oldest first.
* `-timestamp`
  : Newest first. If not set, the newest first sorting is applied. <br /><br />**Default:** `-timestamp`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| config.to                         | string | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                            |

#### Returns

| Return type                                                                                                  | Status code | Description |
| ------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [AuditLog](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#auditlog) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.monitoringConfigurationAudit({
    extensionName: "...",
    configurationId: "...",
  });
```

### ~~monitoringConfigurationDetails~~

> ⚠️ **Deprecated**

**extensions_2_0Client.monitoringConfigurationDetails(config): Promise\<[ExtensionMonitoringConfiguration](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionmonitoringconfiguration)>**

Gets the details of the specified monitoring configuration

**Required scope:** environment-api:extension-configurations:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:configurations:read

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                              | Type   | Description                                       |
| --------------------------------- | ------ | ------------------------------------------------- |
| config.configurationId (required) | string | The ID of the requested monitoring configuration. |
| config.extensionName (required)   | string | The name of the requested extension 2.0.          |

#### Returns

| Return type                                                                                                                                                  | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [ExtensionMonitoringConfiguration](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionmonitoringconfiguration) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.monitoringConfigurationDetails(
    { extensionName: "...", configurationId: "..." },
  );
```

### ~~removeExtension~~

> ⚠️ **Deprecated**

**extensions_2_0Client.removeExtension(config): Promise\<[Extension](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extension)>**

Deletes the specified version of the extension 2.0

**Required scope:** environment-api:extensions:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                               | Type   | Description                                                                                                   |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| config.extensionName (required)    | string | The name of the requested extension 2.0.                                                                      |
| config.extensionVersion (required) | string | The version of the requested extension 2.0<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

#### Returns

| Return type                                                                                                    | Status code | Description                                          |
| -------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------- |
| [Extension](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extension) | 200         | Success. The extension 2.0 version has been deleted. |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.removeExtension({
  extensionName: "...",
  extensionVersion: "...",
});
```

### ~~removeMonitoringConfiguration~~

> ⚠️ **Deprecated**

**extensions_2_0Client.removeMonitoringConfiguration(config): Promise\<void>**

Deletes the specified monitoring configuration

**Required scope:** environment-api:extension-configurations:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:configurations:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                              | Type   | Description                                       |
| --------------------------------- | ------ | ------------------------------------------------- |
| config.configurationId (required) | string | The ID of the requested monitoring configuration. |
| config.extensionName (required)   | string | The name of the requested extension 2.0.          |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.removeMonitoringConfiguration({
    extensionName: "...",
    configurationId: "...",
  });
```

### ~~updateExtensionEnvironmentConfiguration~~

> ⚠️ **Deprecated**

**extensions_2_0Client.updateExtensionEnvironmentConfiguration(config): Promise\<[ExtensionEnvironmentConfigurationVersion](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionenvironmentconfigurationversion)>**

Updates the active environment configuration version of the extension 2.0

**Required scope:** environment-api:extensions:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                            | Type                                                                                                                                                                         | Description                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| config.body (required)          | [ExtensionEnvironmentConfigurationVersion](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionenvironmentconfigurationversion) |                                          |
| config.extensionName (required) | string                                                                                                                                                                       | The name of the requested extension 2.0. |

#### Returns

| Return type                                                                                                                                                                  | Status code | Description                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------- |
| [ExtensionEnvironmentConfigurationVersion](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionenvironmentconfigurationversion) | 200         | Success. Environment configuration updated. |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.updateExtensionEnvironmentConfiguration(
    { extensionName: "...", body: { version: "1.2.3" } },
  );
```

### ~~updateMonitoringConfiguration~~

> ⚠️ **Deprecated**

**extensions_2_0Client.updateMonitoringConfiguration(config): Promise\<[MonitoringConfigurationResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#monitoringconfigurationresponse)>**

Updates the specified monitoring configuration

**Required scope:** environment-api:extension-configurations:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:configurations:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                              | Type                                                                                                                                                         | Description                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| config.body (required)            | [MonitoringConfigurationUpdateDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#monitoringconfigurationupdatedto) |                                                   |
| config.configurationId (required) | string                                                                                                                                                       | The ID of the requested monitoring configuration. |
| config.extensionName (required)   | string                                                                                                                                                       | The name of the requested extension 2.0.          |

#### Returns

| Return type                                                                                                                                                | Status code | Description |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [MonitoringConfigurationResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#monitoringconfigurationresponse) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await extensions_2_0Client.updateMonitoringConfiguration({
    extensionName: "...",
    configurationId: "...",
    body: {},
  });
```

### ~~uploadExtension~~

> ⚠️ **Deprecated**

**extensions_2_0Client.uploadExtension(config): Promise\<[ExtensionUploadResponseDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionuploadresponsedto)>**

Uploads or verifies a new extension 2.0

**Required scope:** environment-api:extensions:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- extensions:definitions:write

Deprecated since version 1.342. Use the successor API `/platform/extensions/v2` instead.

#### Parameters

| Name                   | Type    | Description                                                                                                             |
| ---------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | Blob    |                                                                                                                         |
| config.validateOnly    | boolean | Only run validation but do not persist the extension even if validation was successful.<br /><br />**Default:** `false` |

#### Returns

| Return type                                                                                                                                      | Status code | Description                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | --------------------------------------------- |
| [ExtensionUploadResponseDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionuploadresponsedto) | 200         | The extension is valid                        |
| [ExtensionUploadResponseDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#extensionuploadresponsedto) | 201         | Success. The extension 2.0 has been uploaded. |

#### Throws

| Error Type         | Error Message                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input file is invalid. \| Upload not possible yet, please try again in a few seconds. \| Client side error. \| Server side error. |

**Code example**

```ts
import { extensions_2_0Client } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await extensions_2_0Client.uploadExtension({
  body: new Blob(),
});
```
