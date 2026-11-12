## extensionsClient

```js
import { extensionsClient } from '@dynatrace-sdk/client-extensions-v2';
```

### activateExtensionEnvironmentConfiguration

**extensionsClient.activateExtensionEnvironmentConfiguration(config): Promise\<[ExtensionEnvironmentConfigurationVersion](#extensionenvironmentconfigurationversion)>**

Activates the environment configuration for a specified version of Extension 2.0.

**Required scope:** extensions:definitions:write

#### Parameters

| Name                            | Type                                                                                  | Description                              |
| ------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------- |
| config.body (required)          | [ExtensionEnvironmentConfigurationVersion](#extensionenvironmentconfigurationversion) |                                          |
| config.extensionName (required) | string                                                                                | The name of the requested Extension 2.0. |

#### Returns

| Return type                                                                           | Status code | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ExtensionEnvironmentConfigurationVersion](#extensionenvironmentconfigurationversion) | 200         | Success. Environment configuration created. If the requested version was already active, this is an idempotent no-op (no backend state changes). |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.activateExtensionEnvironmentConfiguration(
    { extensionName: "...", body: { version: "1.2.3" } },
  );
```

### createExtensionMonitoringConfiguration

**extensionsClient.createExtensionMonitoringConfiguration(config): Promise\<[MonitoringConfigurationResponse](#monitoringconfigurationresponse)>**

Creates a new monitoring configuration for Extension 2.0.

**Required scope:** extensions:configurations:write

#### Parameters

| Name                            | Type                                                | Description                              |
| ------------------------------- | --------------------------------------------------- | ---------------------------------------- |
| config.body (required)          | [MonitoringConfiguration](#monitoringconfiguration) |                                          |
| config.extensionName (required) | string                                              | The name of the requested Extension 2.0. |

#### Returns

| Return type                                                         | Status code | Description |
| ------------------------------------------------------------------- | ----------- | ----------- |
| [MonitoringConfigurationResponse](#monitoringconfigurationresponse) | 201         | Created.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.createExtensionMonitoringConfiguration(
    {
      extensionName: "...",
      body: { scope: "HOST-D3A3C5A146830A79" },
    },
  );
```

### deleteExtensionEnvironmentConfiguration

**extensionsClient.deleteExtensionEnvironmentConfiguration(config): Promise\<void>**

Deactivates the environment configuration for Extension 2.0.

**Required scope:** extensions:definitions:write

#### Parameters

| Name                            | Type   | Description                              |
| ------------------------------- | ------ | ---------------------------------------- |
| config.extensionName (required) | string | The name of the requested Extension 2.0. |

#### Returns

| Return type | Status code | Description                                                                   |
| ----------- | ----------- | ----------------------------------------------------------------------------- |
| void        | 204         | Success. Environment configuration deactivated. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.deleteExtensionEnvironmentConfiguration(
    { extensionName: "..." },
  );
```

### deleteExtensionMonitoringConfiguration

**extensionsClient.deleteExtensionMonitoringConfiguration(config): Promise\<void>**

Deletes a specified monitoring configuration for Extension 2.0.

**Required scope:** extensions:configurations:write

#### Parameters

| Name                              | Type   | Description                                       |
| --------------------------------- | ------ | ------------------------------------------------- |
| config.configurationId (required) | string | The ID of the requested monitoring configuration. |
| config.extensionName (required)   | string | The name of the requested Extension 2.0.          |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.deleteExtensionMonitoringConfiguration(
    { extensionName: "...", configurationId: "..." },
  );
```

### deleteExtensionVersion

**extensionsClient.deleteExtensionVersion(config): Promise\<[Extension](#extension)>**

Deletes a specified version of Extension 2.0.

**Required scope:** extensions:definitions:write

#### Parameters

| Name                               | Type   | Description                                |
| ---------------------------------- | ------ | ------------------------------------------ |
| config.extensionName (required)    | string | The name of the requested Extension 2.0.   |
| config.extensionVersion (required) | string | The version of the requested Extension 2.0 |

#### Returns

| Return type             | Status code | Description |
| ----------------------- | ----------- | ----------- |
| [Extension](#extension) | 202         | Accepted.   |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await extensionsClient.deleteExtensionVersion({
  extensionName: "...",
  extensionVersion: "...",
});
```

### executeExtensionMonitoringConfigurationActions

**extensionsClient.executeExtensionMonitoringConfigurationActions(config): Promise\<[ExecuteActionsResponse](#executeactionsresponse)>**

Executes data source actions on ActiveGate or Host for a specified monitoring configuration of Extension 2.0.

**Required scope:** extensions:configuration.actions:write

#### Parameters

| Name                              | Type                              | Description                                       |
| --------------------------------- | --------------------------------- | ------------------------------------------------- |
| config.body (required)            | [ExecuteActions](#executeactions) |                                                   |
| config.configurationId (required) | string                            | The ID of the requested monitoring configuration. |
| config.extensionName (required)   | string                            | The name of the requested Extension 2.0.          |

#### Returns

| Return type                                       | Status code | Description |
| ------------------------------------------------- | ----------- | ----------- |
| [ExecuteActionsResponse](#executeactionsresponse) | 202         | Accepted.   |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.executeExtensionMonitoringConfigurationActions(
    {
      extensionName: "...",
      configurationId: "...",
      body: {},
    },
  );
```

### getActiveExtensionEnvironmentConfiguration

**extensionsClient.getActiveExtensionEnvironmentConfiguration(config): Promise\<[EnvironmentConfiguration](#environmentconfiguration)>**

Retrieves the active environment configuration version for Extension 2.0.

**Required scope:** extensions:definitions:read

#### Parameters

| Name                            | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields                | string | Comma separated list of additional fields to include in the response. Available fields: * `assets`
   \- includes assets of the Extension 2.0 in the environment.
* `status`
   \- includes installation status of assets of the Extension 2.0 in the environment.
* `errors`
   \- includes installation errors of assets of the Extension 2.0 in the environment. <br /><br />**Example:** `assets,status,errors` |
| config.extensionName (required) | string | The name of the requested Extension 2.0.                                                                                                                                                                                                                                                                                                                                                                            |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [EnvironmentConfiguration](#environmentconfiguration) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.getActiveExtensionEnvironmentConfiguration(
    { extensionName: "..." },
  );
```

### getActiveGateGroups

**extensionsClient.getActiveGateGroups(config): Promise\<[ActiveGateGroupInfoList](#activegategroupinfolist)>**

Lists all ActiveGate groups available for Extension 2.0.

**Required scope:** extensions:configurations:read

#### Parameters

| Name                               | Type   | Description                                |
| ---------------------------------- | ------ | ------------------------------------------ |
| config.extensionName (required)    | string | The name of the requested Extension 2.0.   |
| config.extensionVersion (required) | string | The version of the requested Extension 2.0 |

#### Returns

| Return type                                         | Status code | Description |
| --------------------------------------------------- | ----------- | ----------- |
| [ActiveGateGroupInfoList](#activegategroupinfolist) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await extensionsClient.getActiveGateGroups({
  extensionName: "...",
  extensionVersion: "...",
});
```

### getAlertTemplate

**extensionsClient.getAlertTemplate(config): Promise\<[AlertTemplate](#alerttemplate)>**

Retrieves the alert template for a specified asset of the active environment configuration for Extension 2.0.

**Required scope:** extensions:definitions:read

#### Parameters

| Name                              | Type   | Description                              |
| --------------------------------- | ------ | ---------------------------------------- |
| config.alertTemplateId (required) | string | ID of the requested asset.               |
| config.extensionName (required)   | string | The name of the requested Extension 2.0. |

#### Returns

| Return type                     | Status code | Description |
| ------------------------------- | ----------- | ----------- |
| [AlertTemplate](#alerttemplate) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await extensionsClient.getAlertTemplate({
  extensionName: "...",
  alertTemplateId: "...",
});
```

### getExtensionConfigurationSchema

**extensionsClient.getExtensionConfigurationSchema(config): Promise\<[SchemaDefinitionRestDto](#schemadefinitionrestdto)>**

Retrieves the configuration schema for a specified version of Extension 2.0.

**One of the following scopes is required:**

- extensions:definitions:read
- extensions:configurations:read

#### Parameters

| Name                               | Type   | Description                                |
| ---------------------------------- | ------ | ------------------------------------------ |
| config.extensionName (required)    | string | The name of the requested Extension 2.0.   |
| config.extensionVersion (required) | string | The version of the requested Extension 2.0 |

#### Returns

| Return type                                         | Status code | Description |
| --------------------------------------------------- | ----------- | ----------- |
| [SchemaDefinitionRestDto](#schemadefinitionrestdto) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.getExtensionConfigurationSchema({
    extensionName: "...",
    extensionVersion: "...",
  });
```

### getExtensionDetails

**extensionsClient.getExtensionDetails(config): Promise\<[Extension](#extension)>**

Retrieves details of a specified version of Extension 2.0.

**Required scope:** extensions:definitions:read

#### Parameters

| Name                               | Type                              | Description                                |
| ---------------------------------- | --------------------------------- | ------------------------------------------ |
| config.acceptType (required)       | "application/json; charset=utf-8" |                                            |
| config.extensionName (required)    | string                            | The name of the requested Extension 2.0.   |
| config.extensionVersion (required) | string                            | The version of the requested Extension 2.0 |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success.    |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await extensionsClient.getExtensionDetails({
  acceptType: "application/json; charset=utf-8",
  extensionName: "...",
  extensionVersion: "...",
});
```

**extensionsClient.getExtensionDetails(config): Promise\<Binary>**

#### Parameters

| Name                               | Type                                             | Description                                |
| ---------------------------------- | ------------------------------------------------ | ------------------------------------------ |
| config.acceptType (required)       | "application/octet-stream" \| "application/yaml" |                                            |
| config.extensionName (required)    | string                                           | The name of the requested Extension 2.0.   |
| config.extensionVersion (required) | string                                           | The version of the requested Extension 2.0 |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success.    |

### getExtensionMonitoringConfigurationAudit

**extensionsClient.getExtensionMonitoringConfigurationAudit(config): Promise\<[AuditLog](#auditlog)>**

Retrieves the audit logs for a specified monitoring configuration of Extension 2.0.

**Required scope:** extensions:configurations:read

#### Parameters

| Name                              | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.configurationId (required) | string | The ID of the requested monitoring configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.extensionName (required)   | string | The name of the requested Extension 2.0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
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
| config.pageKey                    | string | The cursor for the next page of results. You can find it in the **next-page-key** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| config.pageSize                   | number | The amount of extensions in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.sort (required)            | string | The sorting of audit log entries: * `timestamp`
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

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [AuditLog](#auditlog) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.getExtensionMonitoringConfigurationAudit(
    {
      extensionName: "...",
      configurationId: "...",
      sort: "-timestamp",
    },
  );
```

### getExtensionMonitoringConfigurationDetails

**extensionsClient.getExtensionMonitoringConfigurationDetails(config): Promise\<[ExtensionMonitoringConfiguration](#extensionmonitoringconfiguration)>**

Retrieves details of a specified monitoring configuration for Extension 2.0.

**Required scope:** extensions:configurations:read

#### Parameters

| Name                              | Type   | Description                                       |
| --------------------------------- | ------ | ------------------------------------------------- |
| config.configurationId (required) | string | The ID of the requested monitoring configuration. |
| config.extensionName (required)   | string | The name of the requested Extension 2.0.          |

#### Returns

| Return type                                                           | Status code | Description |
| --------------------------------------------------------------------- | ----------- | ----------- |
| [ExtensionMonitoringConfiguration](#extensionmonitoringconfiguration) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.getExtensionMonitoringConfigurationDetails(
    { extensionName: "...", configurationId: "..." },
  );
```

### getExtensionMonitoringConfigurationStatus

**extensionsClient.getExtensionMonitoringConfigurationStatus(config): Promise\<[ExtensionStatus](#extensionstatus)>**

Retrieves the most recent execution status of a specified monitoring configuration for Extension 2.0.

**Required scope:** extensions:configurations:read

#### Parameters

| Name                              | Type   | Description                                       |
| --------------------------------- | ------ | ------------------------------------------------- |
| config.configurationId (required) | string | The ID of the requested monitoring configuration. |
| config.extensionName (required)   | string | The name of the requested Extension 2.0.          |

#### Returns

| Return type                         | Status code | Description |
| ----------------------------------- | ----------- | ----------- |
| [ExtensionStatus](#extensionstatus) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.getExtensionMonitoringConfigurationStatus(
    { extensionName: "...", configurationId: "..." },
  );
```

### getExtensionMonitoringConfigurationStatuses

**extensionsClient.getExtensionMonitoringConfigurationStatuses(config): Promise\<[ExtensionStatusWithIdList](#extensionstatuswithidlist)>**

Retrieves the most recent execution statuses of monitoring configurations for Extension 2.0.

**Required scope:** extensions:configurations:read

#### Parameters

| Name                            | Type   | Description                              |
| ------------------------------- | ------ | ---------------------------------------- |
| config.extensionName (required) | string | The name of the requested Extension 2.0. |

#### Returns

| Return type                                             | Status code | Description |
| ------------------------------------------------------- | ----------- | ----------- |
| [ExtensionStatusWithIdList](#extensionstatuswithidlist) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.getExtensionMonitoringConfigurationStatuses(
    { extensionName: "..." },
  );
```

### installExtension

**extensionsClient.installExtension(config): Promise\<[RegisteredExtensionResult](#registeredextensionresult)>**

Installs an Extension 2.0 from the Hub.

**Required scope:** extensions:definitions:write

#### Parameters

| Name                            | Type   | Description                                                                                                                   |
| ------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| config.extensionName (required) | string | The name of the requested Extension 2.0.                                                                                      |
| config.version                  | string | The version of Extension 2.0 to install. If not specified, the recommended version from the Dynatrace Hub shall be installed. |

#### Returns

| Return type                                             | Status code | Description                                                                                                                                                                                 |
| ------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [RegisteredExtensionResult](#registeredextensionresult) | 202         | Accepted. The extension version is installed and active. If the requested version was already the active environment configuration, this is an idempotent no-op (no backend state changes). |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await extensionsClient.installExtension({
  extensionName: "...",
});
```

### listExtensionMonitoringConfigurations

**extensionsClient.listExtensionMonitoringConfigurations(config): Promise\<[ExtensionMonitoringConfigurationList](#extensionmonitoringconfigurationlist)>**

Lists all monitoring configurations for Extension 2.0.

**Required scope:** extensions:configurations:read

#### Parameters

| Name                            | Type   | Description                                                                                                                                                                                                                                                                                                   |
| ------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.extensionName (required) | string | The name of the requested Extension 2.0.                                                                                                                                                                                                                                                                      |
| config.filter                   | string | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following fields: * `version`
* `active`
   or&#x20;
  `enabled`
   (both keywords are supported and interchangeable)
* `description`
* `activationContext`                          |
| config.pageKey                  | string | The cursor for the next page of results. You can find it in the **next-page-key** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize                 | number | The amount of monitoring configurations in a single response payload. The maximal allowed page size is 500. If not set, 20 is used.                                                                                                                                                                           |

#### Returns

| Return type                                                                   | Status code | Description |
| ----------------------------------------------------------------------------- | ----------- | ----------- |
| [ExtensionMonitoringConfigurationList](#extensionmonitoringconfigurationlist) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.listExtensionMonitoringConfigurations(
    { extensionName: "..." },
  );
```

### listExtensionVersions

**extensionsClient.listExtensionVersions(config): Promise\<[ExtensionList](#extensionlist)>**

Lists all versions of an Extension 2.0.

**Required scope:** extensions:definitions:read

#### Parameters

| Name                            | Type   | Description                                                                                                                                                                                                                                                                                                   |
| ------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.extensionName (required) | string | The name of the requested Extension 2.0.                                                                                                                                                                                                                                                                      |
| config.pageKey                  | string | The cursor for the next page of results. You can find it in the **next-page-key** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize                 | number | The amount of extensions in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                                          |

#### Returns

| Return type                     | Status code | Description |
| ------------------------------- | ----------- | ----------- |
| [ExtensionList](#extensionlist) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await extensionsClient.listExtensionVersions({
  extensionName: "...",
});
```

### listExtensions

**extensionsClient.listExtensions(config): Promise\<[ExtensionInfoList](#extensioninfolist)>**

Lists all Extensions 2.0 available in the environment.

**Required scope:** extensions:definitions:read

#### Parameters

| Name             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields | string | Comma separated list of additional fields to include in the response. Available fields: * `activeVersion`
   \- includes the active version of the Extension 2.0 in the environment.
* `keywords`
   \- includes the keywords of the Extension 2.0.
* `markedForDeletion`
   \- includes the markedForDeletion flag of the Extension 2.0 in the environment, which indicates that the extension is being deleted and cannot be updated or installed until the deletion process is completed. <br /><br />**Example:** `keywords,activeVersion,markedForDeletion` |
| config.filter    | string | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following fields: * `name`
* `markedForDeletion` This filter supports all type operators as well as logical operators 'AND' and 'OR'. 'NOT' operator and parentheses aren't supported.                                                                                                                                                                                                                                                  |
| config.pageKey   | string | The cursor for the next page of results. You can find it in the **next-page-key** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                    |
| config.pageSize  | number | The amount of extensions in a single response payload. The maximal allowed page size is 100. If not set, 20 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [ExtensionInfoList](#extensioninfolist) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await extensionsClient.listExtensions();
```

### updateExtensionEnvironmentConfiguration

**extensionsClient.updateExtensionEnvironmentConfiguration(config): Promise\<[ExtensionEnvironmentConfigurationVersion](#extensionenvironmentconfigurationversion)>**

Updates the active environment configuration version for Extension 2.0.

**Required scope:** extensions:definitions:write

#### Parameters

| Name                            | Type                                                                                  | Description                              |
| ------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------- |
| config.body (required)          | [ExtensionEnvironmentConfigurationVersion](#extensionenvironmentconfigurationversion) |                                          |
| config.extensionName (required) | string                                                                                | The name of the requested Extension 2.0. |

#### Returns

| Return type                                                                           | Status code | Description                                 |
| ------------------------------------------------------------------------------------- | ----------- | ------------------------------------------- |
| [ExtensionEnvironmentConfigurationVersion](#extensionenvironmentconfigurationversion) | 200         | Success. Environment configuration updated. |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.updateExtensionEnvironmentConfiguration(
    { extensionName: "...", body: { version: "1.2.3" } },
  );
```

### updateExtensionMonitoringConfiguration

**extensionsClient.updateExtensionMonitoringConfiguration(config): Promise\<[MonitoringConfigurationResponse](#monitoringconfigurationresponse)>**

Updates a specified monitoring configuration for Extension 2.0.

**Required scope:** extensions:configurations:write

#### Parameters

| Name                              | Type                                                            | Description                                       |
| --------------------------------- | --------------------------------------------------------------- | ------------------------------------------------- |
| config.body (required)            | [MonitoringConfigurationUpdate](#monitoringconfigurationupdate) |                                                   |
| config.configurationId (required) | string                                                          | The ID of the requested monitoring configuration. |
| config.extensionName (required)   | string                                                          | The name of the requested Extension 2.0.          |

#### Returns

| Return type                                                         | Status code | Description |
| ------------------------------------------------------------------- | ----------- | ----------- |
| [MonitoringConfigurationResponse](#monitoringconfigurationresponse) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data =
  await extensionsClient.updateExtensionMonitoringConfiguration(
    {
      extensionName: "...",
      configurationId: "...",
      body: {},
    },
  );
```

### uploadExtension

**extensionsClient.uploadExtension(config): Promise\<[ExtensionUploadResponse](#extensionuploadresponse)>**

Uploads a new Extension 2.0.

**Required scope:** extensions:definitions:write

#### Parameters

| Name                   | Type |
| ---------------------- | ---- |
| config.body (required) | Blob |

#### Returns

| Return type                                         | Status code | Description                               |
| --------------------------------------------------- | ----------- | ----------------------------------------- |
| [ExtensionUploadResponse](#extensionuploadresponse) | 201         | Success. Extension 2.0 has been uploaded. |

#### Throws

| Error Type         | Error Message                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | Failed. The input file is invalid. \| Upload isn't possible yet. Try again in a few seconds. \| Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await extensionsClient.uploadExtension({
  body: new Blob(),
});
```

### validateExtension

**extensionsClient.validateExtension(config): Promise\<void>**

Verifies a new Extension 2.0 for lack of any errors. Performs the same set of operations as upload but doesn't persist the changes.

**Required scope:** extensions:definitions:write

#### Parameters

| Name                   | Type |
| ---------------------- | ---- |
| config.body (required) | Blob |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { extensionsClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await extensionsClient.validateExtension({
  body: new Blob(),
});
```
