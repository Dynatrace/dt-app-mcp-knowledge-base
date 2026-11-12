## schemasClient

```js
import { schemasClient } from '@dynatrace-sdk/client-extensions-v2';
```

### getSchemaVersionFile

**schemasClient.getSchemaVersionFile(config): Promise\<JsonNode>**

Retrieves the schema file for a specified schema version of Extension 2.0.

**Required scope:** extensions:definitions:read

#### Parameters

| Name                            | Type   | Description                  |
| ------------------------------- | ------ | ---------------------------- |
| config.fileName (required)      | string | The name of the schema file. |
| config.schemaVersion (required) | string | The version of the schema.   |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [JsonNode](#jsonnode) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { schemasClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await schemasClient.getSchemaVersionFile({
  schemaVersion: "...",
  fileName: "...",
});
```

### listSchemaVersionFiles

**schemasClient.listSchemaVersionFiles(config): Promise\<[SchemaFileList](#schemafilelist)>**

Lists all schema files for a specified schema version of Extension 2.0.

**Required scope:** extensions:definitions:read

#### Parameters

| Name                            | Type                              | Description                |
| ------------------------------- | --------------------------------- | -------------------------- |
| config.acceptType (required)    | "application/json; charset=utf-8" |                            |
| config.schemaVersion (required) | string                            | The version of the schema. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success.    |

**Code example**

```ts
import { schemasClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await schemasClient.listSchemaVersionFiles({
  acceptType: "application/json; charset=utf-8",
  schemaVersion: "...",
});
```

**schemasClient.listSchemaVersionFiles(config): Promise\<Binary>**

#### Parameters

| Name                            | Type                       | Description                |
| ------------------------------- | -------------------------- | -------------------------- |
| config.acceptType (required)    | "application/octet-stream" |                            |
| config.schemaVersion (required) | string                     | The version of the schema. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success.    |

### listSchemaVersions

**schemasClient.listSchemaVersions(config): Promise\<[SchemaVersionList](#schemaversionlist)>**

Lists all schema versions of Extension 2.0 available in the environment.

**Required scope:** extensions:definitions:read

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [SchemaVersionList](#schemaversionlist) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                  |
| ------------------ | ------------------------------ |
| ErrorEnvelopeError | Client error. \| Server error. |

**Code example**

```ts
import { schemasClient } from "@dynatrace-sdk/client-extensions-v2";

const data = await schemasClient.listSchemaVersions();
```
