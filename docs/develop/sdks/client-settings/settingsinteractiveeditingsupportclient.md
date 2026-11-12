## settingsInteractiveEditingSupportClient

```js
import { settingsInteractiveEditingSupportClient } from '@dynatrace-sdk/client-settings';
```

### generateSchemaDefaultValue

**settingsInteractiveEditingSupportClient.generateSchemaDefaultValue(config): Promise\<[SettingsDefaultObject](#settingsdefaultobject)>**

**Required scope:** settings:schemas:read

Gets the default value of a settings schema.

#### Parameters

| Name                       | Type   | Description                                                                          |
| -------------------------- | ------ | ------------------------------------------------------------------------------------ |
| config.schemaId (required) | string | The ID of the requested schema.                                                      |
| config.schemaVersion       | string | The requested version of the schema. If not set, the most recent version is assumed. |
| config.scope               | string | The ID of the scope.                                                                 |

#### Returns

| Return type                                     | Status code | Description |
| ----------------------------------------------- | ----------- | ----------- |
| [SettingsDefaultObject](#settingsdefaultobject) | 200         | Success.    |

#### Throws

| Error Type              | Error Message                                                        |
| ----------------------- | -------------------------------------------------------------------- |
| BadRequestInvalidInput  | Failed. The input is invalid.                                        |
| Forbidden               | Failed. Forbidden.                                                   |
| NotFoundSchemaIdVersion | No schema could be found for the given schema-id and schema-version. |
| TooManyRequests         | Failed. Too many requests.                                           |
| ServiceUnavailable      | Failed. Service unavailable.                                         |
| GeneralError            | Error.                                                               |

**Code example**

```ts
import { settingsInteractiveEditingSupportClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsInteractiveEditingSupportClient.generateSchemaDefaultValue(
    { schemaId: "..." },
  );
```

### summarizeSettingsValue

**settingsInteractiveEditingSupportClient.summarizeSettingsValue(config): Promise\<[SettingsObjectSummary](#settingsobjectsummary)>**

Generate a summary for a specific settings value

**Required scope:** settings:schemas:read

#### Parameters

| Name                       | Type                                                | Description                    |
| -------------------------- | --------------------------------------------------- | ------------------------------ |
| config.body (required)     | [SettingsObjectSummarize](#settingsobjectsummarize) |                                |
| config.schemaId (required) | string                                              | The ID of the required schema. |

#### Returns

| Return type                                     | Status code | Description |
| ----------------------------------------------- | ----------- | ----------- |
| [SettingsObjectSummary](#settingsobjectsummary) | 200         | Success.    |

#### Throws

| Error Type                | Error Message                                                                   |
| ------------------------- | ------------------------------------------------------------------------------- |
| BadRequestInvalidInput    | Failed. The input is invalid.                                                   |
| Forbidden                 | Failed. Forbidden.                                                              |
| NotFoundMultiObjectSchema | No multi-object schema could be found for the given schemaId and schemaVersion. |
| TooManyRequests           | Failed. Too many requests.                                                      |
| ServiceUnavailable        | Failed. Service unavailable.                                                    |
| GeneralError              | Error.                                                                          |

**Code example**

```ts
import { settingsInteractiveEditingSupportClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsInteractiveEditingSupportClient.summarizeSettingsValue(
    { schemaId: "...", body: { value: {} } },
  );
```

### validateSettingsContainer

**settingsInteractiveEditingSupportClient.validateSettingsContainer(config): Promise\<[ValidationResponse](#validationresponse)>**

Validates the given settings container.

**Required scope:** settings:schemas:read

Validates the given settings container.

#### Parameters

| Name                          | Type                                                                  | Description                      |
| ----------------------------- | --------------------------------------------------------------------- | -------------------------------- |
| config.body (required)        | [CustomContainerValidationRequest](#customcontainervalidationrequest) |                                  |
| config.schemaId (required)    | string                                                                | The ID of the schema.            |
| config.schemaVersion          | string                                                                | Version of the schema.           |
| config.scope                  | string                                                                | The ID of the scope.             |
| config.validatorId (required) | string                                                                | The identifier of the validator. |

#### Returns

| Return type                               | Status code | Description                              |
| ----------------------------------------- | ----------- | ---------------------------------------- |
| [ValidationResponse](#validationresponse) | 200         | Validated. Details in the response body. |

#### Throws

| Error Type         | Error Message                                          |
| ------------------ | ------------------------------------------------------ |
| NotFoundValidator  | Failed. Validator with the given identifier not found. |
| TooManyRequests    | Failed. Too many requests.                             |
| ServiceUnavailable | Failed. Service unavailable.                           |
| GeneralError       | Error.                                                 |

**Code example**

```ts
import { settingsInteractiveEditingSupportClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsInteractiveEditingSupportClient.validateSettingsContainer(
    {
      schemaId: "...",
      validatorId: "...",
      body: { value: {} },
    },
  );
```

### validateSettingsProperty

**settingsInteractiveEditingSupportClient.validateSettingsProperty(config): Promise\<[ValidationResponse](#validationresponse)>**

Validates the given settings property.

**Required scope:** settings:schemas:read

Validates the given settings property value with the given custom validator.

#### Parameters

| Name                          | Type                                                                | Description                      |
| ----------------------------- | ------------------------------------------------------------------- | -------------------------------- |
| config.body (required)        | [CustomPropertyValidationRequest](#custompropertyvalidationrequest) |                                  |
| config.schemaId (required)    | string                                                              | The ID of the schema.            |
| config.schemaVersion          | string                                                              | Version of the schema.           |
| config.scope                  | string                                                              | The ID of the scope.             |
| config.validatorId (required) | string                                                              | The identifier of the validator. |

#### Returns

| Return type                               | Status code | Description                              |
| ----------------------------------------- | ----------- | ---------------------------------------- |
| [ValidationResponse](#validationresponse) | 200         | Validated. Details in the response body. |

#### Throws

| Error Type         | Error Message                                          |
| ------------------ | ------------------------------------------------------ |
| NotFoundValidator  | Failed. Validator with the given identifier not found. |
| TooManyRequests    | Failed. Too many requests.                             |
| ServiceUnavailable | Failed. Service unavailable.                           |
| GeneralError       | Error.                                                 |

**Code example**

```ts
import { settingsInteractiveEditingSupportClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsInteractiveEditingSupportClient.validateSettingsProperty(
    { schemaId: "...", validatorId: "...", body: {} },
  );
```
