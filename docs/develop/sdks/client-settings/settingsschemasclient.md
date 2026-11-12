## settingsSchemasClient

```js
import { settingsSchemasClient } from '@dynatrace-sdk/client-settings';
```

### getSchemaDefinition

**settingsSchemasClient.getSchemaDefinition(config): Promise\<[SettingsSchemaDefinition](#settingsschemadefinition)>**

Gets parameters of the specified settings schema.

**Required scope:** settings:schemas:read

Gets parameters of the specified settings schema.

#### Parameters

| Name                       | Type   | Description                                                                          |
| -------------------------- | ------ | ------------------------------------------------------------------------------------ |
| config.schemaId (required) | string | The ID of the required schema.                                                       |
| config.schemaVersion       | string | The version of the required schema. If not set, the most recent version is returned. |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [SettingsSchemaDefinition](#settingsschemadefinition) | 200         | Success.    |

#### Throws

| Error Type                 | Error Message                               |
| -------------------------- | ------------------------------------------- |
| NotFoundSchemaDoesNotExist | Failed. The specified schema doesn't exist. |
| TooManyRequests            | Failed. Too many requests.                  |
| ServiceUnavailable         | Failed. Service unavailable.                |
| GeneralError               | Error.                                      |

**Code example**

```ts
import { settingsSchemasClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsSchemasClient.getSchemaDefinition({
    schemaId: "...",
  });
```

### listSchemaDefinitions

**settingsSchemasClient.listSchemaDefinitions(config): Promise\<[SchemaList](#schemalist)>**

Lists available settings schemas.

**Required scope:** settings:schemas:read

Lists available settings schemas.

#### Parameters

| Name             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields | string | A list of fields to be included in the response. The provided set of fields extends the default set. Specify the required top-level fields, separated by commas (for example, **multiObject,ordered**). Supported fields: **schemaId**, **displayName**, **latestSchemaVersion**, **maturity**, **multiObject**, **ordered**, **ownerBasedAccessControl**, **schemaVersions**. Default fields: schemaId, displayName, latestSchemaVersion. <br /><br />**Default:** `schemaId, displayName, latestSchemaVersion` |

#### Returns

| Return type               | Status code | Description |
| ------------------------- | ----------- | ----------- |
| [SchemaList](#schemalist) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                |
| ------------------ | ---------------------------- |
| TooManyRequests    | Failed. Too many requests.   |
| ServiceUnavailable | Failed. Service unavailable. |
| GeneralError       | Error.                       |

**Code example**

```ts
import { settingsSchemasClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsSchemasClient.listSchemaDefinitions();
```
