## settingsSchemasClient

```js
import { settingsSchemasClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getAvailableSchemaDefinitions

**settingsSchemasClient.getAvailableSchemaDefinitions(config): Promise\<[SchemaList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#schemalist)>**

Lists available settings schemas

**Required scope:** settings:schemas:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:schemas:read

#### Parameters

| Name          | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.fields | string | A list of fields to be included to the response. The provided set of fields replaces the default set. Specify the required top-level fields, separated by commas (for example, `schemaId,displayName`). Supported fields: `schemaId`, `displayName`, `maturity`, `latestSchemaVersion`, `multiObject`, `ordered`, `ownerBasedAccessControl`. <br /><br />**Default:** `schemaId,displayName,latestSchemaVersion` |

#### Returns

| Return type                                                                                                     | Status code | Description |
| --------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SchemaList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#schemalist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { settingsSchemasClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsSchemasClient.getAvailableSchemaDefinitions();
```

### getSchemaDefinition

**settingsSchemasClient.getSchemaDefinition(config): Promise\<[SchemaDefinitionRestDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#schemadefinitionrestdto)>**

Gets parameters of the specified settings schema

**Required scope:** settings:schemas:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:schemas:read

#### Parameters

| Name                       | Type   | Description                                                                          |
| -------------------------- | ------ | ------------------------------------------------------------------------------------ |
| config.schemaId (required) | string | The ID of the required schema.                                                       |
| config.schemaVersion       | string | The version of the required schema. If not set, the most recent version is returned. |

#### Returns

| Return type                                                                                                                               | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SchemaDefinitionRestDto](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v8/types.md#schemadefinitionrestdto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. Forbidden. \| Failed. The specified schema doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsSchemasClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsSchemasClient.getSchemaDefinition({
    schemaId: "...",
  });
```
