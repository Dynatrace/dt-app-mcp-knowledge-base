## Types

### ActiveGateGroupInfo

Metadata for each ActiveGate group.

| Name                            | Type                                      | Description                                             |
| ------------------------------- | ----------------------------------------- | ------------------------------------------------------- |
| activeGates (required)          | Array\<[ActiveGateInfo](#activegateinfo)> | ActiveGates in group.                                   |
| availableActiveGates (required) | number                                    | Number of ActiveGates in group available for extension. |
| groupName (required)            | string                                    | ActiveGate group name.                                  |

### ActiveGateGroupInfoList

ActiveGate groups metadata for extensions.

| Name             | Type                                                | Description                         |
| ---------------- | --------------------------------------------------- | ----------------------------------- |
| items (required) | Array\<[ActiveGateGroupInfo](#activegategroupinfo)> | Metadata for each ActiveGate group. |

### ActiveGateInfo

ActiveGates in group.

| Name              | Type           | Description                                                |
| ----------------- | -------------- | ---------------------------------------------------------- |
| errors (required) | Array\<string> | List of errors if Extension can't be run on the ActiveGate |
| id (required)     | string         | ActiveGate ID.                                             |

### AlertTemplate

| Name         | Type   |
| ------------ | ------ |
| templateJson | string |

### AssetInfo

Metadata for an extension asset.

| Name               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| assetSchemaDetails | [AssetSchemaDetails](#assetschemadetails)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Settings schema details for asset                                               |
| displayName        | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | User-friendly name of the asset.                                                |
| id                 | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ID of the asset. Identifies the asset in REST API and/or UI (where applicable). |
| type               | "ALERT" \| "ALERT_TEMPLATE" \| "AWS_SERVICE" \| "CUSTOM_CARDS" \| "DASHBOARD" \| "DECLARATIVE_PROCESSES" \| "DOCUMENT_DASHBOARD" \| "DOCUMENT_SCREEN" \| "DQL_LOG_METRIC" \| "DQL_LOG_PROCESSING_RULE" \| "EVENT_CORRELATION_RULES" \| "GENERIC_RELATIONSHIP" \| "GENERIC_TYPE" \| "LIST_SCREEN_FILTERS" \| "LIST_SCREEN_INJECTIONS" \| "LIST_SCREEN_LAYOUT" \| "LOG_EVENT" \| "LOG_METRIC" \| "LOG_PROCESSING_RULE" \| "LQL_LOG_METRIC" \| "LQL_LOG_PROCESSING_RULE" \| "METRIC_METADATA" \| "METRIC_QUERY" \| "OPEN_PIPELINE" \| "PROBLEM_RESOLUTION_PATH_RULES" \| "PROCESS_GROUPING_RULES" \| "SCREEN_ACTIONS" \| "SCREEN_CHART_GROUPS" \| "SCREEN_DQL_TABLE" \| "SCREEN_ENTITIES_LISTS" \| "SCREEN_EVENTS_CARDS" \| "SCREEN_FILTERS" \| "SCREEN_HEALTH_CARDS" \| "SCREEN_INJECTIONS" \| "SCREEN_LAYOUT" \| "SCREEN_LOGS_CARDS" \| "SCREEN_MESSAGE_CARDS" \| "SCREEN_METRIC_TABLES" \| "SCREEN_PROBLEMS" \| "SCREEN_PROPERTIES" | The type of the asset.                                                          |

### AssetSchemaDetails

Settings schema details for asset

| Name     | Type   | Description               |
| -------- | ------ | ------------------------- |
| key      | string | Asset key                 |
| schemaId | string | Asset schema id           |
| scope    | string | Asset configuration scope |

### AuditLog

The audit log of your environment.

| Name                  | Type                                    | Description                                                                                                                                                                                                            |
| --------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auditLogs             | Array\<[AuditLogEntry](#auditlogentry)> | A list of audit log entries ordered by the creation timestamp.                                                                                                                                                         |
| nextPageKey           | string                                  | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | number                                  | The number of entries per page.                                                                                                                                                                                        |
| totalCount (required) | number                                  | The total number of entries in the result.                                                                                                                                                                             |

### AuditLogEntry

An entry of the audit log.

| Name                        | Type                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| category (required)         | "ACTIVEGATE_TOKEN" \| "BUILD_UNIT_V2" \| "CONFIG" \| "MANUAL_TAGGING_SERVICE" \| "TENANT_LIFECYCLE" \| "TOKEN" \| "WEB_UI" | The category of the recorded operation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| dt.settings.key             | string                                                                                                                            | The key of the affected object of a setting for entries of category `CONFIG`.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| dt.settings.object_id      | string                                                                                                                            | The ID of the affected object of a setting for entries of category `CONFIG`.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| dt.settings.object_summary | string                                                                                                                            | The value summary for entries of category `CONFIG`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| dt.settings.schema_id      | string                                                                                                                            | The schema ID or config ID for entries of category `CONFIG`.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| dt.settings.scope_id       | string                                                                                                                            | The persistence scope for entries of category `CONFIG`, e.g. an ME identifier.<br /><br />**Example:** `environment`                                                                                                                                                                                                                                                                                                                                                                                                       |
| dt.settings.scope_name     | string                                                                                                                            | The display name of the scope for entries of category `CONFIG`.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| entityId                    | string                                                                                                                            | The ID of an entity from the **category**. For example, it can be config ID for the `CONFIG` category or token ID for the `TOKEN` category.                                                                                                                                                                                                                                                                                                                                                                                |
| environmentId (required)    | string                                                                                                                            | The ID of the Dynatrace environment where the recorded operation occurred.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| eventType (required)        | "CREATE" \| "DELETE" \| "LOGIN" \| "LOGOUT" \| "REORDER" \| "REVOKE" \| "TAG_ADD" \| "TAG_REMOVE" \| "TAG_UPDATE" \| "UPDATE"  | The type of the recorded operation. * `LOGIN`
   -> A user logged in
* `LOGOUT`
   -> A user logged out
* `CREATE`
   -> An object was created
* `UPDATE`
   -> An object was updated
* `DELETE`
   -> An object was deleted
* `REVOKE`
   -> An Active Gate token was revoked
* `TAG_ADD`
   -> A manual tag was added
* `TAG_REMOVE`
   -> A manual tag was removed
* `TAG_UPDATE`
   -> A manual tag was updated
* `REMOTE_CONFIGURATION_MANAGEMENT`
   -> A Remote Configuration Management related operation occurred |
| logId (required)            | string                                                                                                                            | The ID of the log entry.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| message                     | string                                                                                                                            | The logged message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| patch                       | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)                                                     | The patch of the recorded operation as the JSON representation. The format is an enhanced RFC 6902. The patch also carries the previous value in the **oldValue** field.                                                                                                                                                                                                                                                                                                                                                   |
| success (required)          | boolean                                                                                                                           | The recorded operation is successful (`true`) or failed (`false`).                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| timestamp (required)        | number                                                                                                                            | The timestamp of the record creation, in UTC milliseconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| user (required)             | string                                                                                                                            | The ID of the user who performed the recorded operation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| userOrigin                  | string                                                                                                                            | The origin and the IP address of the **user**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| userType (required)         | "PUBLIC_TOKEN_IDENTIFIER" \| "SERVICE_NAME" \| "TOKEN_HASH" \| "USER_NAME"                                                   | The type of the authentication of the **user**. * `USER_NAME`
   -> User was logged in the UI
* `TOKEN_HASH`
   ->  URL Token or DevOps Token, the hash of the token is logged
* `SERVICE_NAME`
   -> No authenticated user at all, this action was performed by a system service automatically
* `PUBLIC_TOKEN_IDENTIFIER`
   -> API Token, the public token id is logged                                                                                                                                                 |

### Author

Extension author

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string | Author name |

### ComplexConstraint

A constraint on the values accepted for a complex settings property.

| Name                 | Type                                                                                                                                                                                    | Description                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| checkAllProperties   | boolean                                                                                                                                                                                 | Defines if modification of any property triggers secret resubmission check.<br /><br />**Example:** `false` |
| customMessage        | string                                                                                                                                                                                  | A custom message for invalid values.                                                                        |
| customValidatorId    | string                                                                                                                                                                                  | The ID of a custom validator.<br /><br />**Example:** `my-min-max`                                          |
| maximumPropertyCount | number                                                                                                                                                                                  | The maximum number of properties that can be set.<br /><br />**Example:** `2`                               |
| minimumPropertyCount | number                                                                                                                                                                                  | The minimum number of properties that must be set.<br /><br />**Example:** `1`                              |
| properties           | Array\<string>                                                                                                                                                                          | A list of properties (defined by IDs) that are used to check the constraint.                                |
| skipAsyncValidation  | boolean                                                                                                                                                                                 | Whether to skip validation on a change made from the UI.<br /><br />**Example:** `false`                    |
| timeout              | number                                                                                                                                                                                  | The maximum time in seconds the custom validator is allowed to run.<br /><br />**Example:** `5`             |
| type (required)      | "CUSTOM_VALIDATOR_REF" \| "GREATER_THAN" \| "GREATER_THAN_OR_EQUAL" \| "LESS_THAN" \| "LESS_THAN_OR_EQUAL" \| "PROPERTY_COUNT_RANGE" \| "SECRET_RESUBMISSION" \| "UNKNOWN" | The type of the constraint.                                                                                 |

### Constraint

A constraint on the values accepted for a settings property.

| Name                   | Type                                                                                                                                                              | Description                                                                                                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| customMessage          | string                                                                                                                                                            | A custom message for invalid values.<br /><br />**Example:** `customConstraintMessage`                                                                                   |
| customValidatorId      | string                                                                                                                                                            | The ID of a custom validator.<br /><br />**Example:** `my-min-max`                                                                                                       |
| disallowDangerousRegex | boolean                                                                                                                                                           | Whether to disallow usage of dangerous regexes<br /><br />**Example:** `true`                                                                                            |
| maxLength              | number                                                                                                                                                            | The maximum allowed length of string values.<br /><br />**Example:** `20`                                                                                                |
| maximum                | number                                                                                                                                                            | The maximum allowed value.<br /><br />**Example:** `200`                                                                                                                 |
| minLength              | number                                                                                                                                                            | The minimum required length of string values.<br /><br />**Example:** `7`                                                                                                |
| minimum                | number                                                                                                                                                            | The minimum allowed value.<br /><br />**Example:** `3`                                                                                                                   |
| pattern                | string                                                                                                                                                            | The regular expression pattern for valid string values.<br /><br />**Example:** `^([a-z]\|[0-9]\|-\|_\|+\|.)+@([a-z]\|[0-9]\|-){2,}.([a-z]\|[0-9]\|-){2,}(.[a-z]{2,})?$` |
| skipAsyncValidation    | boolean                                                                                                                                                           | Whether to skip validation on a change made from the UI.<br /><br />**Example:** `false`                                                                                 |
| timeout                | number                                                                                                                                                            | The maximum time in seconds the custom validator is allowed to run.<br /><br />**Example:** `5`                                                                          |
| type (required)        | "CUSTOM_VALIDATOR_REF" \| "UNKNOWN" \| "LENGTH" \| "NOT_BLANK" \| "NOT_EMPTY" \| "NO_WHITESPACE" \| "PATTERN" \| "RANGE" \| "REGEX" \| "TRIMMED" \| "UNIQUE" | The type of the constraint.<br /><br />**Example:** `UNKNOWN`                                                                                                            |
| uniqueProperties       | Array\<string>                                                                                                                                                    | A list of properties for which the combination of values must be unique.<br /><br />**Example:** `["my-prop-1","my-prop-2"]`                                             |

### ConstraintViolation

A list of constraint violations.

| Name              | Type                                             |
| ----------------- | ------------------------------------------------ |
| location          | string                                           |
| message           | string                                           |
| parameterLocation | "HEADER" \| "PATH" \| "PAYLOAD_BODY" \| "QUERY" |
| path              | string                                           |

### DatasourceDefinition

Configuration of a datasource for a property.

| Name                        | Type                                   | Description                                                                                        |
| --------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| filterProperties (required) | Array\<string>                         | The properties to filter the datasource options on.                                                |
| fullContext (required)      | boolean                                | Whether this datasource expects full setting payload as the context.                               |
| identifier (required)       | string                                 | The identifier of a custom data source of the property's value.                                    |
| resetValue                  | "ALWAYS" \| "INVALID_ONLY" \| "NEVER" | When to reset datasource value in the UI on filter change.                                         |
| useApiSearch (required)     | boolean                                | If true, the datasource should use the api to filter the results instead of client-side filtering. |
| validate (required)         | boolean                                | Whether to validate input to only allow values returned by the datasource.                         |

### DeletionConstraint

A constraint on the values that are going to be deleted.

| Name              | Type                                                              | Description                                                                                     |
| ----------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| customMessage     | string                                                            | A custom message for invalid values.                                                            |
| customValidatorId | string                                                            | The ID of a custom validator.<br /><br />**Example:** `my-min-max`                              |
| schemaIds         | Array\<string>                                                    |                                                                                                 |
| timeout           | number                                                            | The maximum time in seconds the custom validator is allowed to run.<br /><br />**Example:** `5` |
| type (required)   | "CUSTOM_VALIDATOR_REF" \| "UNKNOWN" \| "REFERENTIAL_INTEGRITY" | The type of the deletion constraint.                                                            |

### EnumType

Definition of an enum property.

| Name                     | Type                            | Description                                                                                                |
| ------------------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| description (required)   | string                          | A short description of the property.<br /><br />**Example:** `typeDescription`                             |
| displayName              | string                          | The display name of the property.<br /><br />**Example:** `typeDisplayName`                                |
| documentation (required) | string                          | An extended description and/or links to documentation.<br /><br />**Example:** `typeDocumentation`         |
| enumClass                | string                          | An existing Java enum class that holds the allowed values of the enum.<br /><br />**Example:** `enumClass` |
| items (required)         | Array\<[EnumValue](#enumvalue)> | A list of allowed values of the enum.                                                                      |
| type (required)          | "enum"                          | The type of the property.<br /><br />**Example:** `enum`                                                   |

### EnumValue

An allowed value for an enum property.

| Name                   | Type                                                                          | Description                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| description            | string                                                                        | A short description of the value.<br /><br />**Example:** `exampleDescription`                       |
| displayName (required) | string                                                                        | The display name of the value.<br /><br />**Example:** `exampleDisplayName`                          |
| enumInstance           | string                                                                        | The name of the value in an existing Java enum class.<br /><br />**Example:** `exampleJavaEnumValue` |
| icon                   | string                                                                        | The icon of the value.<br /><br />**Example:** `checkmark`                                           |
| value (required)       | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) | The allowed value of the enum.<br /><br />**Example:** `exampleValue`                                |

### EnvironmentConfiguration

List of assets imported with the active extension environment configuration.

| Name               | Type                            | Description                                                                                                                                                   |
| ------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| assets (required)  | Array\<[AssetInfo](#assetinfo)> | The list of the imported assets.                                                                                                                              |
| errors (required)  | Array\<string>                  | List of errors during asset import                                                                                                                            |
| status (required)  | "PENDING" \| "UP_TO_DATE"     | The status of the assets list.                                                                                                                                |
| version (required) | string                          | Version of the active extension environment configuration.<br /><br />**Example:** `1.2.3`<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

### Error

| Name    | Type                          | Description           |
| ------- | ----------------------------- | --------------------- |
| code    | number                        | The HTTP status code. |
| details | [ErrorDetails](#errordetails) | The error details.    |
| message | string                        | The error message.    |

### ErrorDetails

The error details.

| Name                 | Type                                                | Description                      |
| -------------------- | --------------------------------------------------- | -------------------------------- |
| constraintViolations | Array\<[ConstraintViolation](#constraintviolation)> | A list of constraint violations. |

### ErrorEnvelope

| Name  | Type            |
| ----- | --------------- |
| error | [Error](#error) |

### ExecuteActions

| Name    | Type                                            | Description                        |
| ------- | ----------------------------------------------- | ---------------------------------- |
| actions | [ExecuteActionsActions](#executeactionsactions) | Data Source defined action objects |

### ExecuteActionsActions

Data Source defined action objects

**type**: Record\<string, JsonNode>

### ExecuteActionsResponse

| Name                             | Type           | Description                            |
| -------------------------------- | -------------- | -------------------------------------- |
| ~~activeGateId~~**DEPRECATED**   | string         | Active Gate id for actions execution   |
| activeGateIds                    | Array\<string> | Active Gate ids for actions execution  |
| ~~activeGateName~~**DEPRECATED** | string         | Active Gate name for actions execution |

### Extension

| Name                           | Type                                                        | Description                                                                                                          |
| ------------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| author (required)              | [Author](#author)                                           | Extension author                                                                                                     |
| dataSources (required)         | Array\<string>                                              | Data sources that extension uses to gather data                                                                      |
| extensionName (required)       | string                                                      | Extension name                                                                                                       |
| featureSets (required)         | Array\<string>                                              | Available feature sets                                                                                               |
| featureSetsDetails (required)  | [ExtensionFeatureSetsDetails](#extensionfeaturesetsdetails) | Details of feature sets                                                                                              |
| fileHash (required)            | string                                                      | SHA-256 hash of uploaded Extension file                                                                              |
| metadata (required)            | [ExtensionMetadata](#extensionmetadata)                     | Additional non-asset information about the extension, as key-value pairs                                             |
| minDynatraceVersion (required) | string                                                      | Minimal Dynatrace version that works with the extension                                                              |
| minEECVersion (required)       | string                                                      | Minimal Extension Execution Controller version that works with the extension                                         |
| variables (required)           | Array\<string>                                              | Custom variables used in extension configuration                                                                     |
| version (required)             | string                                                      | Extension version<br /><br />**Example:** `1.2.3`<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

### ExtensionEnvironmentConfigurationVersion

| Name               | Type   | Description                                                                                                          |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------- |
| version (required) | string | Extension version<br /><br />**Example:** `1.2.3`<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

### ExtensionFeatureSetsDetails

Details of feature sets

**type**: Record\<string, FeatureSetDetails>

### ExtensionInfo

A list of extensions with additional metadata.

| Name                     | Type            | Description                                                                                                                                                   |
| ------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| activeVersion            | null \| string  | Active version in the environment (null if none is active)<br /><br />**Example:** `1.2.3`<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |
| extensionName (required) | string          | Extension name                                                                                                                                                |
| keywords (required)      | Array\<string>  | Extension keywords for the highest version                                                                                                                    |
| markedForDeletion        | null \| boolean | Indicates if the extension is marked for deletion                                                                                                             |
| version (required)       | string          | Highest installed version<br /><br />**Example:** `1.2.3`<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?`                                  |

### ExtensionInfoList

A list of extensions with additional metadata.

| Name                  | Type                                    | Description                                                                                                                                                             |
| --------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items (required)      | Array\<[ExtensionInfo](#extensioninfo)> | A list of extensions with additional metadata.                                                                                                                          |
| nextPageKey           | string                                  | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. |
| pageSize              | number                                  | The number of entries per page.                                                                                                                                         |
| totalCount (required) | number                                  | The total number of entries in the result.                                                                                                                              |

### ExtensionList

A list of extensions.

| Name                  | Type                                          | Description                                                                                                                                                             |
| --------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items (required)      | Array\<[MinimalExtension](#minimalextension)> | A list of extensions.                                                                                                                                                   |
| nextPageKey           | string                                        | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. |
| pageSize              | number                                        | The number of entries per page.                                                                                                                                         |
| totalCount (required) | number                                        | The total number of entries in the result.                                                                                                                              |

### ExtensionMetadata

Additional non-asset information about the extension, as key-value pairs

**type**: Record\<string, string>

### ExtensionMonitoringConfiguration

A list of extension monitoring configurations.

| Name                        | Type                                  | Description                                                            |
| --------------------------- | ------------------------------------- | ---------------------------------------------------------------------- |
| modificationInfo (required) | [ModificationInfo](#modificationinfo) | Audit information about the creation and modification of this resource |
| objectId (required)         | string                                | Configuration id                                                       |
| scope (required)            | string                                | Configuration scope                                                    |
| value (required)            | ExtensionMonitoringConfigurationValue | Configuration                                                          |

### ExtensionMonitoringConfigurationList

| Name                  | Type                                                                          | Description                                                                                                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items (required)      | Array\<[ExtensionMonitoringConfiguration](#extensionmonitoringconfiguration)> | A list of extension monitoring configurations.                                                                                                                                                                      |
| nextPageKey           | string                                                                        | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | number                                                                        | The number of entries per page.                                                                                                                                                                                     |
| totalCount (required) | number                                                                        |                                                                                                                                                                                                                     |

### ExtensionStatus

| Name              | Type                                                   | Description                                            |
| ----------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| status (required) | "UNKNOWN" \| "PENDING" \| "ERROR" \| "OK" \| "WARNING" | Latest status of given configuration.                  |
| timestamp         | string                                                 | Timestamp of the latest status of given configuration. |

### ExtensionStatusWithId

| Name                       | Type                                                   | Description                                            |
| -------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| configurationId (required) | string                                                 | Unique ID of the configuration.                        |
| status (required)          | "UNKNOWN" \| "PENDING" \| "ERROR" \| "OK" \| "WARNING" | Latest status of given configuration.                  |
| timestamp                  | string                                                 | Timestamp of the latest status of given configuration. |

### ExtensionStatusWithIdList

| Name             | Type                                                    |
| ---------------- | ------------------------------------------------------- |
| items (required) | Array\<[ExtensionStatusWithId](#extensionstatuswithid)> |

### ExtensionUploadResponse

| Name                           | Type                                                                                    | Description                                                                                                          |
| ------------------------------ | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| assetsInfo (required)          | Array\<[UploadResponseAssetInfo](#uploadresponseassetinfo)>                             | Information about extension assets included                                                                          |
| author (required)              | [Author](#author)                                                                       | Extension author                                                                                                     |
| dataSources (required)         | Array\<string>                                                                          | Data sources that extension uses to gather data                                                                      |
| extensionName (required)       | string                                                                                  | Extension name                                                                                                       |
| featureSets (required)         | Array\<string>                                                                          | Available feature sets                                                                                               |
| featureSetsDetails (required)  | [ExtensionUploadResponseFeatureSetsDetails](#extensionuploadresponsefeaturesetsdetails) | Details of feature sets                                                                                              |
| fileHash (required)            | string                                                                                  | SHA-256 hash of uploaded Extension file                                                                              |
| metadata (required)            | [ExtensionUploadResponseMetadata](#extensionuploadresponsemetadata)                     | Additional non-asset information about the extension, as key-value pairs                                             |
| minDynatraceVersion (required) | string                                                                                  | Minimal Dynatrace version that works with the extension                                                              |
| minEECVersion (required)       | string                                                                                  | Minimal Extension Execution Controller version that works with the extension                                         |
| variables (required)           | Array\<string>                                                                          | Custom variables used in extension configuration                                                                     |
| version (required)             | string                                                                                  | Extension version<br /><br />**Example:** `1.2.3`<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

### ExtensionUploadResponseFeatureSetsDetails

Details of feature sets

**type**: Record\<string, FeatureSetDetails>

### ExtensionUploadResponseMetadata

Additional non-asset information about the extension, as key-value pairs

**type**: Record\<string, string>

### FeatureSetDetails

Additional information about a Feature Set

| Name                     | Type                      | Description                                                                  |
| ------------------------ | ------------------------- | ---------------------------------------------------------------------------- |
| description              | string                    | Optional description for the feature set                                     |
| displayName              | string                    | Optional display name of the feature set                                     |
| isRecommended (required) | boolean                   | Marks the feature set as recommended (selected by default during activation) |
| metrics                  | Array\<[Metric](#metric)> | Feature set metrics                                                          |

### InsertPosition

The position where the button should be shown relative to a property in the UI

| Name             | Type   | Description                                                             |
| ---------------- | ------ | ----------------------------------------------------------------------- |
| after (required) | string | The path of a property after which the button should be shown in the UI |

### Item

An item of a collection property.

| Name            | Type                                          | Description                                                                                            |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| constraints     | Array\<[Constraint](#constraint)>             | A list of constraints limiting the values to be accepted.                                              |
| datasource      | [DatasourceDefinition](#datasourcedefinition) | Configuration of a datasource for a property.                                                          |
| description     | string                                        | A short description of the item.<br /><br />**Example:** `itemDescription`                             |
| displayName     | string                                        | The display name of the item.<br /><br />**Example:** `itemDisplayName`                                |
| documentation   | string                                        | An extended description and/or links to documentation.<br /><br />**Example:** `propertyDocumentation` |
| metadata        | [ItemMetadata](#itemmetadata)                 | Metadata of the items.                                                                                 |
| referencedType  | string                                        | The type referenced by the item's value.<br /><br />**Example:** `itemReferencedType`                  |
| subType         | string                                        | The subtype of the item's value.<br /><br />**Example:** `itemSubType`                                 |
| type (required) | string \| [RefPointer](#refpointer)           | The type of the item's value.                                                                          |
| uiCustomization | [UiCustomization](#uicustomization)           | Customization for UI elements                                                                          |

### ItemMetadata

Metadata of the items.

**type**: Record\<string, string>

### JavaProcessContainer

| Name         | Type                                                              |
| ------------ | ----------------------------------------------------------------- |
| agentVersion | string                                                            |
| id           | string                                                            |
| name         | string                                                            |
| properties   | [JavaProcessContainerProperties](#javaprocesscontainerproperties) |

### JavaProcessContainerList

| Name             | Type                                                  |
| ---------------- | ----------------------------------------------------- |
| items (required) | Array\<[JavaProcessContainer](#javaprocesscontainer)> |

### JavaProcessContainerProperties

**type**: Record\<string, string[]>

### Metric

Metric gathered by an extension

| Name     | Type                              | Description     |
| -------- | --------------------------------- | --------------- |
| key      | string                            | Metric key      |
| metadata | [MetricMetadata](#metricmetadata) | Metric metadata |

### MetricMetadata

Metric metadata

| Name        | Type   | Description                                  |
| ----------- | ------ | -------------------------------------------- |
| description | string | A short description of the metric            |
| displayName | string | The name of the metric in the user interface |
| unit        | string | The unit of the metric                       |

### MinimalExtension

A list of extensions.

| Name                     | Type   | Description                                                                                                          |
| ------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------- |
| extensionName (required) | string | Extension name                                                                                                       |
| version (required)       | string | Extension version<br /><br />**Example:** `1.2.3`<br />Pattern: `^(0\|[1-9]\d*)(\.(0\|[1-9]\d*))?(\.(0\|[1-9]\d*))?` |

### ModificationInfo

Audit information about the creation and modification of this resource

| Name             | Type   | Description                                                                                     |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------- |
| createdBy        | string | User who created the configuration                                                              |
| createdTime      | string | Timestamp when the resource was last modified in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z') |
| lastModifiedBy   | string | User who last modified the configuration                                                        |
| lastModifiedTime | string | Timestamp when the resource was last modified in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z') |

### MonitoringConfiguration

| Name             | Type     | Description                                                                                                 |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| scope (required) | string   | The scope this monitoring configuration will be defined for<br /><br />**Example:** `HOST-D3A3C5A146830A79` |
| value            | JsonNode | The monitoring configuration                                                                                |

### MonitoringConfigurationResponse

| Name                | Type   | Description                                                                                            |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| code (required)     | number | The HTTP Status code                                                                                   |
| objectId (required) | string | The identifier of the new configuration<br /><br />**Example:** `331e416f-9ab7-4694-8408-816026820645` |

### MonitoringConfigurationUpdate

| Name  | Type     | Description                  |
| ----- | -------- | ---------------------------- |
| value | JsonNode | The monitoring configuration |

### Precondition

A precondition for visibility of a property.

| Name            | Type                                                                                  | Description                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expectedValue   | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)         | The expected value of the property. Only applicable to properties of the `EQUALS` type. <br /><br />**Example:** `expectedValue`                                |
| expectedValues  | Array\<[any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)> | A list of valid values of the property. Only applicable to properties of the `IN` type. <br /><br />**Example:** `expectedValues`                               |
| pattern         | string                                                                                | The Regular expression which is matched against the property. Only applicable to properties of the `REGEX_MATCH` type. <br /><br />**Example:** `example Regex` |
| precondition    | [Precondition](#precondition)                                                         | A precondition for visibility of a property.                                                                                                                    |
| preconditions   | Array\<[Precondition](#precondition)>                                                 | A list of child preconditions to be evaluated. Only applicable to properties of the `AND` and `OR` types.                                                       |
| property        | string                                                                                | The property to be evaluated.<br /><br />**Example:** `propertyToEvaluate`                                                                                      |
| type (required) | "AND" \| "EQUALS" \| "IN" \| "NOT" \| "NULL" \| "OR" \| "REGEX_MATCH"                | The type of the precondition.<br /><br />**Example:** `NULL`                                                                                                    |

### PropertyDefinition

Configuration of a property in a settings schema.

| Name                    | Type                                                                          | Description                                                                                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| constraints             | Array\<[Constraint](#constraint)>                                             | A list of constraints limiting the values to be accepted.                                                                                                                         |
| datasource              | [DatasourceDefinition](#datasourcedefinition)                                 | Configuration of a datasource for a property.                                                                                                                                     |
| default                 | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) | The default value to be used when no value is provided. If a non-singleton has the value of `null`, it means an empty collection. <br /><br />**Example:** `propertyDefaultValue` |
| description             | string                                                                        | A short description of the property.<br /><br />**Example:** `propertyDescription`                                                                                                |
| displayName             | string                                                                        | The display name of the property.<br /><br />**Example:** `propertyDisplayName`                                                                                                   |
| documentation           | string                                                                        | An extended description and/or links to documentation.<br /><br />**Example:** `propertyDocumentation`                                                                            |
| forceSecretResubmission | boolean                                                                       | Defines if value is allowed to be modified when secret properties are not<br /><br />**Example:** `true`                                                                          |
| items                   | [Item](#item)                                                                 | An item of a collection property.                                                                                                                                                 |
| maxObjects (required)   | number                                                                        | The maximum number of **objects** in a collection property. Has the value of `1` for singletons.                                                                                  |
| metadata                | [PropertyDefinitionMetadata](#propertydefinitionmetadata)                     | Metadata of the property.                                                                                                                                                         |
| migrationPattern        | string                                                                        | Pattern with references to properties to create a new value.                                                                                                                      |
| minObjects              | number                                                                        | The minimum number of **objects** in a collection property.<br /><br />**Example:** `1`                                                                                           |
| modificationPolicy      | "ALWAYS" \| "NEVER" \| "DEFAULT"                                              | Modification policy of the property.<br /><br />**Example:** `ALWAYS`                                                                                                             |
| nullable (required)     | boolean                                                                       | The value can (`true`) or can't (`false`) be `null`.<br /><br />**Example:** `true`                                                                                               |
| precondition            | [Precondition](#precondition)                                                 | A precondition for visibility of a property.                                                                                                                                      |
| referencedType          | string                                                                        | The type referenced by the property value<br /><br />**Example:** `propertyReferencedType`                                                                                        |
| subType                 | string                                                                        | The subtype of the property's value.<br /><br />**Example:** `propertySubType`                                                                                                    |
| type (required)         | string \| [RefPointer](#refpointer)                                           | The type of the property's value.                                                                                                                                                 |
| uiCustomization         | [UiCustomization](#uicustomization)                                           | Customization for UI elements                                                                                                                                                     |

### PropertyDefinitionMetadata

Metadata of the property.

**type**: Record\<string, string>

### RefPointer

Object with a pointer to a JSON object

| Name            | Type   | Description                                                                                                                     |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| $ref (required) | string | Pointer to a JSON object this object should be logically replaced with.<br /><br />**Example:** `refPointerToAnotherJsonObject` |

### RegisteredExtensionResult

| Name             | Type   | Description                                    |
| ---------------- | ------ | ---------------------------------------------- |
| extensionName    | string | FQN of the extension registered in the tenant. |
| extensionVersion | string | Version number of the extension.               |

### SchemaConstraintRestDto

| Name                | Type                                                                                                                                                                               | Description                                                                                                                                     |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| byteLimit           | number                                                                                                                                                                             | The maximum allowed size in bytes for the sum over all persisted values for the schema<br /><br />**Example:** `500000`                         |
| customMessage       | string                                                                                                                                                                             | A custom message for invalid values.                                                                                                            |
| customValidatorId   | string                                                                                                                                                                             | The ID of a custom validator.<br /><br />**Example:** `my-min-max`                                                                              |
| flattenCollections  | boolean                                                                                                                                                                            | Whether to flatten collection properties when checking for uniqueness, so only disjoint collections are considered unique                       |
| maxObjectCount      | number                                                                                                                                                                             | The maximum number of objects over all scopes. Only additions are denied, updates and deletions are always allowed<br /><br />**Example:** `10` |
| skipAsyncValidation | boolean                                                                                                                                                                            | Whether to skip validation on a change made from the UI.<br /><br />**Example:** `false`                                                        |
| type (required)     | "CUSTOM_VALIDATOR_REF" \| "UNKNOWN" \| "UNIQUE" \| "BYTE_SIZE_LIMIT" \| "MULTI_SCOPE_CUSTOM_VALIDATOR_REF" \| "MULTI_SCOPE_MAX_OBJECT_COUNT" \| "MULTI_SCOPE_UNIQUE" | The type of the schema constraint.                                                                                                              |
| uniqueProperties    | Array\<string>                                                                                                                                                                     | The list of properties for which the combination of values needs to be unique<br /><br />**Example:** `["my-prop-1","my-prop-2"]`               |

### SchemaDefinitionRestDto

| Name                     | Type                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allowedScopes (required) | Array\<string>                                                              | A list of scopes where the schema can be used.<br /><br />**Example:** `["host","application"]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| constraints              | Array\<[ComplexConstraint](#complexconstraint)>                             | A list of constrains limiting the values to be accepted by the schema.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| deletionConstraints      | Array\<[DeletionConstraint](#deletionconstraint)>                           | Constraints limiting the values to be deleted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| description (required)   | string                                                                      | A short description of the schema.<br /><br />**Example:** `Dynatrace disables monitoring of containers that do not run any applications`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| displayName (required)   | string                                                                      | The display name of the schema.<br /><br />**Example:** `Built-in container monitoring rules`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| documentation            | string                                                                      | An extended description of the schema and/or links to documentation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| dynatrace (required)     | string                                                                      | The version of the data format.<br /><br />**Example:** `1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| enums (required)         | [SchemaDefinitionRestDtoEnums](#schemadefinitionrestdtoenums)               | A list of definitions of enum properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| keyProperty              | string                                                                      | Name of the key property in this schema.<br /><br />**Example:** `keyProperty`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| maturity                 | "EARLY_ADOPTER" \| "GENERAL_AVAILABILITY" \| "PREVIEW"                    | The maturity of the schema. Possible values: * PREVIEW: Preview features are not generally available, but might be available in specific environments as part of early-access programs. These are the most likely to change in incompatible ways.
* EARLY_ADOPTER: Features marked "early adopter" are available in all environments, but are not mature enough to warrant the "general availability" designation. We don't expect incompatible changes for these, but please be aware, that these are not fully stable yet and incompatible changes may be necessary in rare cases.
* GENERAL_AVAILABILITY: Features marked "general availability" are the most stable. While the schemas will still evolve over time, care will be taken to only do so in a backward-compatible manner. In any case, automations should make use of the `schemaVersion` field when writing settings objects. <br /><br />**Example:** `GENERAL_AVAILABILITY` |
| maxObjects (required)    | number                                                                      | The maximum amount of objects per scope. Only applicable when **multiObject** is set to `true`. <br /><br />**Example:** `10`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| metadata                 | [SchemaDefinitionRestDtoMetadata](#schemadefinitionrestdtometadata)         | Metadata of the setting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| multiObject (required)   | boolean                                                                     | Multiple (`true`) objects per scope are permitted or a single (`false`) object per scope is permitted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ordered                  | boolean                                                                     | If `true` the order of objects has semantic significance. Only applicable when **multiObject** is set to `true`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| properties (required)    | [SchemaDefinitionRestDtoProperties](#schemadefinitionrestdtoproperties)     | A list of schema's properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| schemaConstraints        | Array\<[SchemaConstraintRestDto](#schemaconstraintrestdto)>                 | Constraints limiting the values as a whole to be accepted in this configuration element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| schemaGroups             | Array\<string>                                                              | Names of the groups, which the schema belongs to.<br /><br />**Example:** `["group:some.1","group:some.2"]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| schemaId (required)      | string                                                                      | The ID of the schema.<br /><br />**Example:** `builtin:container.built-in-monitoring-rule`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| spaceAware               | boolean                                                                     | If `true` space-based access control is enabled for this schema. Only applicable when **multiObject** is set to `true` and **ordered** to `false`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| tableColumns             | [SchemaDefinitionRestDtoTableColumns](#schemadefinitionrestdtotablecolumns) | Table column definitions for use in the ui.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| types (required)         | [SchemaDefinitionRestDtoTypes](#schemadefinitionrestdtotypes)               | A list of definitions of types. A type is a complex property that contains its own set of subproperties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| uiCustomization          | [UiCustomization](#uicustomization)                                         | Customization for UI elements                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| version (required)       | string                                                                      | The version of the schema.<br /><br />**Example:** `1.4.2`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### SchemaDefinitionRestDtoEnums

A list of definitions of enum properties.

**type**: Record\<string, EnumType>

### SchemaDefinitionRestDtoMetadata

Metadata of the setting.

**type**: Record\<string, string>

### SchemaDefinitionRestDtoProperties

A list of schema's properties.

**type**: Record\<string, PropertyDefinition>

### SchemaDefinitionRestDtoTableColumns

Table column definitions for use in the ui.

**type**: Record\<string, TableColumn>

### SchemaDefinitionRestDtoTypes

A list of definitions of types.

A type is a complex property that contains its own set of subproperties.

**type**: Record\<string, SchemaType>

### SchemaFileList

A list of schema files.

| Name             | Type           | Description             |
| ---------------- | -------------- | ----------------------- |
| items (required) | Array\<string> | A list of schema files. |

### SchemaType

A list of definitions of types.

A type is a complex property that contains its own set of subproperties.

| Name                      | Type                                            | Description                                                                                                                                               |
| ------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| constraints               | Array\<[ComplexConstraint](#complexconstraint)> | A list of constraints limiting the values to be accepted.                                                                                                 |
| description (required)    | string                                          | A short description of the property.<br /><br />**Example:** `typeDescription`                                                                            |
| displayName               | string                                          | The display name of the property.<br /><br />**Example:** `typeDisplayName`                                                                               |
| documentation (required)  | string                                          | An extended description and/or links to documentation.<br /><br />**Example:** `typeDocumentation`                                                        |
| properties (required)     | [SchemaTypeProperties](#schematypeproperties)   | Definition of properties that can be persisted.                                                                                                           |
| searchPattern             | string                                          | The pattern for the summary search(for example, "Alert after *X* minutes.") of the configuration in the UI.<br /><br />**Example:** `searchPatternOfType` |
| summaryPattern (required) | string                                          | The pattern for the summary (for example, "Alert after *X* minutes.") of the configuration in the UI.<br /><br />**Example:** `summaryPatternOfType`      |
| type (required)           | "object"                                        | Type of the reference type.<br /><br />**Example:** `object`                                                                                              |
| version (required)        | string                                          | The version of the type.<br /><br />**Example:** `0`                                                                                                      |
| versionInfo               | string                                          | A short description of the version.<br /><br />**Example:** `Added new property`                                                                          |

### SchemaTypeProperties

Definition of properties that can be persisted.

**type**: Record\<string, PropertyDefinition>

### SchemaVersionList

A list of available schema versions.

| Name             | Type           | Description                |
| ---------------- | -------------- | -------------------------- |
| items (required) | Array\<string> | A list of schema versions. |

### TableColumn

The definition of a table column to be used in the ui.

| Name               | Type   | Description                                                                    |
| ------------------ | ------ | ------------------------------------------------------------------------------ |
| pattern (required) | string | Pattern with references to properties to create a single value for the column. |

### UiButtonCustomization

UI customization for defining a button that calls a function when pressed

| Name                   | Type                                        | Description                                                            |
| ---------------------- | ------------------------------------------- | ---------------------------------------------------------------------- |
| description            | string                                      | The description to be shown in a tooltip when hovering over the button |
| displayName (required) | string                                      | The label of the button                                                |
| identifier (required)  | string                                      | The identifier of the function to be called when the button is pressed |
| insert (required)      | string \| [InsertPosition](#insertposition) | The position where the button should be shown in the UI                |

### UiCallbackCustomization

UI customization options for defining custom callbacks

| Name    | Type                                                    | Description                                                            |
| ------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| buttons | Array\<[UiButtonCustomization](#uibuttoncustomization)> | UI customization for defining buttons that call functions when pressed |

### UiCustomization

Customization for UI elements

| Name       | Type                                                    | Description                                            |
| ---------- | ------------------------------------------------------- | ------------------------------------------------------ |
| callback   | [UiCallbackCustomization](#uicallbackcustomization)     | UI customization options for defining custom callbacks |
| expandable | [UiExpandableCustomization](#uiexpandablecustomization) | UI customization for expandable section                |
| table      | [UiTableCustomization](#uitablecustomization)           | Customization for UI tables                            |
| tabs       | [UiTabsCustomization](#uitabscustomization)             | UI customization for tabs                              |

### UiEmptyStateCustomization

UI customization for empty state in a table

| Name | Type   | Description                             |
| ---- | ------ | --------------------------------------- |
| text | string | The text to be shown in the empty state |

### UiExpandableCustomization

UI customization for expandable section

| Name        | Type                                                                          | Description                                       |
| ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------- |
| displayName | string                                                                        | The display name                                  |
| expanded    | boolean                                                                       | Defines if the item should be expanded by default |
| sections    | Array\<[UiExpandableSectionCustomization](#uiexpandablesectioncustomization)> | A list of sections                                |

### UiExpandableSectionCustomization

Expandable section customization for UI

| Name                   | Type           | Description                                          |
| ---------------------- | -------------- | ---------------------------------------------------- |
| description            | string         | The description                                      |
| displayName (required) | string         | The display name                                     |
| expanded               | boolean        | Defines if the section should be expanded by default |
| properties (required)  | Array\<string> | A list of properties                                 |

### UiTabGroupCustomization

Tab group customization for UI

| Name                   | Type           | Description          |
| ---------------------- | -------------- | -------------------- |
| description            | string         | The description      |
| displayName (required) | string         | The display name     |
| properties (required)  | Array\<string> | A list of properties |

### UiTableColumnCustomization

Customization for UI table columns

| Name             | Type                                                                      | Description                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| builtinColumnRef | string                                                                    | The ui specific builtin column-implementation for this column.<br /><br />**Example:** `summary`                                                   |
| columnRef        | string                                                                    | The referenced column from the 'tableColumns' property of the schema for this column.<br /><br />**Example:** `myCustomColumn`                     |
| displayName      | string                                                                    | The display name for this column.<br /><br />**Example:** `Color`                                                                                  |
| id               | string                                                                    | The id for this column used for filtering. Required for conflicting or pathed columns - otherwise the ref is used.<br /><br />**Example:** `color` |
| items            | Array\<[UiTableColumnItemCustomization](#uitablecolumnitemcustomization)> | The possible items of this column.                                                                                                                 |
| propertyRef      | string                                                                    | The referenced property for this column.<br /><br />**Example:** `apiColor`                                                                        |
| type             | string                                                                    | The ui specific type for this column.<br /><br />**Example:** `cell-color-picker`                                                                  |
| width            | string                                                                    | The width this column should take up on the table.<br /><br />**Example:** `10%`                                                                   |

### UiTableColumnItemCustomization

Customization for UI table column items

| Name             | Type   | Description                                                     |
| ---------------- | ------ | --------------------------------------------------------------- |
| displayName      | string | The display name of this item.<br /><br />**Example:** `Active` |
| icon             | string | The icon of this item.<br /><br />**Example:** `CRITICAL`       |
| value (required) | string | The value of this item.<br /><br />**Example:** `ACTIVE`        |

### UiTableCustomization

Customization for UI tables

| Name       | Type                                                              | Description                                 |
| ---------- | ----------------------------------------------------------------- | ------------------------------------------- |
| columns    | Array\<[UiTableColumnCustomization](#uitablecolumncustomization)> | A list of columns for the UI table          |
| emptyState | [UiEmptyStateCustomization](#uiemptystatecustomization)           | UI customization for empty state in a table |

### UiTabsCustomization

UI customization for tabs

| Name   | Type                                                        | Description      |
| ------ | ----------------------------------------------------------- | ---------------- |
| groups | Array\<[UiTabGroupCustomization](#uitabgroupcustomization)> | A list of groups |

### UploadResponseAssetInfo

Information about extension assets included

| Name      | Type   |
| --------- | ------ |
| assetType | string |
| count     | number |
