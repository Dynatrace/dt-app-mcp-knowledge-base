## Types

### AccessorPermissions

| Name                   | Type                                | Description                                                                                                                                                                                                                                            |
| ---------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| accessor (required)    | [Identity](#identity)               |                                                                                                                                                                                                                                                        |
| permissions (required) | [PermissionsList](#permissionslist) | Permissions granted to the accessor on this object. `r` grants read access to view the object; `w` grants write access to modify the object. Valid values: `["r"]` for read-only, `["r", "w"]` for read and write.<br /><br />**Example:** `["r","w"]` |

### AccessorPermissionsList

| Name                 | Type                                                |
| -------------------- | --------------------------------------------------- |
| accessors (required) | Array\<[AccessorPermissions](#accessorpermissions)> |

### BiComparableContainerConstraint

| Name                  | Type                                                                                     | Description                                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| customMessage         | string                                                                                   | Message to be displayed if constraint is violated.                                                                               |
| properties (required) | Array\<string>                                                                           | For `type` in [`GREATER_THAN`, `GREATER_THAN_OR_EQUAL`, `LESS_THAN`, `LESS_THAN_OR_EQUAL`] exactly two properties are required. |
| type (required)       | "GREATER_THAN" \| "GREATER_THAN_OR_EQUAL" \| "LESS_THAN" \| "LESS_THAN_OR_EQUAL" | Type also defines which properties are available.                                                                                |

### ByteSizeLimitConstraint

| Name                 | Type                | Description                                                |
| -------------------- | ------------------- | ---------------------------------------------------------- |
| byteLimit (required) | number              | For `type` = `BYTE_SIZE_LIMIT`<br /><br />**Minimum:** `0` |
| customMessage        | string              | Message to be displayed if constraint is violated.         |
| type (required)      | "BYTE_SIZE_LIMIT" | Type also defines which properties are available.          |

### ComplexType

| Name                  | Type                                            | Description                                                                                                                                                                                           |
| --------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| constraints           | Array\<ContainerConstraint>                     | Container validation constraints the type values must fulfill to be persistable.                                                                                                                      |
| description           | string                                          | Short description of what this type is used for.<br /><br />**Default:** ``                                                                                                                           |
| displayName           | string                                          | Defaults to `id` in the code-api.                                                                                                                                                                     |
| documentation         | string                                          | Additional information about the type, explanation of semantics of its values.                                                                                                                        |
| properties (required) | [ComplexTypeProperties](#complextypeproperties) | Order is relevant for UI, not for serialization.                                                                                                                                                      |
| searchPattern         | string                                          | If not specified the summaryPattern is used for search.                                                                                                                                               |
| summaryPattern        | string                                          | Defaults to empty string. Markdown symbols need to be escaped if they're to be displayed normally.<br /><br />**Default:** ``                                                                         |
| type (required)       | "object"                                        | Always has to be `object` for complex types.<br /><br />**Default:** `object`                                                                                                                         |
| version               | string                                          | Semantic version `x.y.z`, defaults to `0`, has to be increased when properties are added/removed or structurally modified (type, nullable).<br /><br />**Default:** `0`<br />Pattern: `^\d+(\.\d+)*$` |
| versionInfo           | string                                          | Defaults to empty string.<br /><br />**Default:** ``                                                                                                                                                  |

### ComplexTypeProperties

Order is relevant for UI, not for serialization.

**type**: Record\<string, Property>

### ConstraintViolation

Contains information about a constraint violation caused by invalid input.

| Name               | Type                                             | Description                                                    |
| ------------------ | ------------------------------------------------ | -------------------------------------------------------------- |
| message (required) | string                                           | The constraint violation description message                   |
| parameterLocation  | "PATH" \| "QUERY" \| "HEADER" \| "PAYLOAD_BODY" | Describes the general location of the violating parameter      |
| path               | string                                           | The path of the parameter that caused the constraint violation |

### CustomContainerValidationRequest

The request payload for a custom validation of a container.

| Name             | Type                                                                            | Description                                |
| ---------------- | ------------------------------------------------------------------------------- | ------------------------------------------ |
| key              | string                                                                          | The key of the setting being validated.    |
| path             | string                                                                          | The path of the container being validated. |
| value (required) | [CustomContainerValidationRequestValue](#customcontainervalidationrequestvalue) | The container value.                       |

### CustomContainerValidationRequestValue

The container value.

**type**: Record\<string, any>

### CustomDeletionValidatorReferenceConstraint

| Name                         | Type                     | Description                                        |
| ---------------------------- | ------------------------ | -------------------------------------------------- |
| customMessage                | string                   | Message to be displayed if constraint is violated. |
| customValidatorId (required) | string                   | For `type` = `CUSTOM_VALIDATOR_REF`                |
| type                         | "CUSTOM_VALIDATOR_REF" | Type also defines which properties are available.  |

### CustomPropertyValidationRequest

The request payload for a custom validation of a single property value.

| Name         | Type                                                                                          | Description                               |
| ------------ | --------------------------------------------------------------------------------------------- | ----------------------------------------- |
| arrayValue   | null \| Array\<[any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)> | The property value.                       |
| booleanValue | null \| boolean                                                                               | The property value.                       |
| floatValue   | null \| number                                                                                | The property value.                       |
| intValue     | null \| number                                                                                | The property value.                       |
| path         | string                                                                                        | The path of the property being validated. |
| stringValue  | string                                                                                        | The property value.                       |

### CustomSchemaValidatorReferenceConstraint

| Name                         | Type                                                               | Description                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| customMessage                | string                                                             | Message to be displayed if constraint is violated.                                                           |
| customValidatorId (required) | string                                                             | For `type` = `CUSTOM_VALIDATOR_REF` or `MULTI_SCOPE_CUSTOM_VALIDATOR_REF`.                                   |
| skipAsyncValidation          | boolean                                                            | `false` - validate on every change in the UI, `true` - validate only on save<br /><br />**Default:** `false` |
| type (required)              | "CUSTOM_VALIDATOR_REF" \| "MULTI_SCOPE_CUSTOM_VALIDATOR_REF" | Type also defines which properties are available.                                                            |

### CustomValidatorReferenceConstraint

| Name                         | Type                     | Description                                                                                                  |
| ---------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| customMessage                | string                   | Message to be displayed if constraint is violated.                                                           |
| customValidatorId (required) | string                   | For `type` = `CUSTOM_VALIDATOR_REF`.                                                                         |
| skipAsyncValidation          | boolean                  | `false` - validate on every change in the UI, `true` - validate only on save<br /><br />**Default:** `false` |
| timeout                      | number                   | For `type` = `CUSTOM_VALIDATOR_REF`. Default is 5 s.<br /><br />**Default:** `5`<br />**Minimum:** `0`       |
| type (required)              | "CUSTOM_VALIDATOR_REF" | Type also defines which properties are available.                                                            |

### CustomValidatorReferenceContainerConstraint

| Name                         | Type                     | Description                                                                                                  |
| ---------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| customMessage                | string                   | Message to be displayed if constraint is violated.                                                           |
| customValidatorId (required) | string                   | For `type` = `CUSTOM_VALIDATOR_REF`.                                                                         |
| skipAsyncValidation          | boolean                  | `false` - validate on every change in the UI, `true` - validate only on save<br /><br />**Default:** `false` |
| timeout                      | number                   | For `type` = `CUSTOM_VALIDATOR_REF`. Default is 5 s.<br /><br />**Default:** `5`<br />**Minimum:** `0`       |
| type (required)              | "CUSTOM_VALIDATOR_REF" | Type also defines which properties are available.                                                            |

### Datasource

| Name                  | Type                                   | Description                                                                                                                      |
| --------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| filterProperties      | Array\<string>                         |                                                                                                                                  |
| fullContext           | boolean                                | **Default:** `false`                                                                                                             |
| identifier (required) | string                                 |                                                                                                                                  |
| resetValue            | "ALWAYS" \| "NEVER" \| "INVALID_ONLY" | Hint to the UI to reset value when one of the filter properties changed<br /><br />**Default:** `NEVER`                          |
| useApiSearch          | boolean                                | This should be used for datasources that have scaling amounts of options, or exceptionally many.<br /><br />**Default:** `false` |
| validate              | boolean                                | **Default:** `true`                                                                                                              |

### EffectivePermission

| Name                  | Type                                    |
| --------------------- | --------------------------------------- |
| context               | [PermissionContext](#permissioncontext) |
| granted (required)    | "true" \| "false" \| "condition"        |
| permission (required) | string                                  |

### EffectivePermissions

**type**: Array\<[EffectivePermission](#effectivepermission)>

### EffectiveSettingsValue

An effective settings value.

| Name             | Type                                  | Description                                                                                                                        |
| ---------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| classicOrigin    | string                                | The origin of the settings value in a classic format. Either a scope or **default**.<br /><br />**Example:** `environment`         |
| modificationInfo | [ModificationInfo](#modificationinfo) | Modification information about the setting.                                                                                        |
| origin           | string                                | The origin of the settings value. Either a scope or **default**.<br /><br />**Example:** `environment`                             |
| schemaId         | string                                | The schema on which the object is based.<br /><br />**Example:** `jira-connection`                                                 |
| schemaVersion    | string                                | The version of the schema on which the object is based.<br /><br />**Example:** `1.0.0`                                            |
| searchSummary    | string                                | A searchable summary string of the setting value. Plain text without Markdown.                                                     |
| summary          | string                                | A short summary of settings. This can contain Markdown and will be escaped accordingly.                                            |
| value            | [SettingsValue](#settingsvalue)       | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema. |

### EffectiveSettingsValuesList

A list of effective settings values.

| Name                  | Type                                                      | Description                                                                                                                                                                                                                                                                            |
| --------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error                 | [ErrorIncomplete](#errorincomplete)                       | Error object for an incomplete response                                                                                                                                                                                                                                                |
| items (required)      | Array\<[EffectiveSettingsValue](#effectivesettingsvalue)> | A list of effective settings values.                                                                                                                                                                                                                                                   |
| nextPageKey           | string                                                    | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==`                                                                    |
| pageSize (required)   | number                                                    | The number of entries per page.                                                                                                                                                                                                                                                        |
| totalCount (required) | number                                                    | The total number of entries in the result.                                                                                                                                                                                                                                             |
| version (required)    | string                                                    | The version of the settings objects list for optimistic locking."  You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests).  If set on a followup GET request, it fails if there was a change between these two requests. |

### EnumType

| Name                          | Type                            | Description                                                                                                                                            |
| ----------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| checkForDuplicateDisplayNames | boolean                         | Should only be set for enums that are used in combination with a datasource (so that no duplicates are ever displayed).<br /><br />**Default:** `true` |
| description                   | string                          | Short description of what this type is used for.<br /><br />**Default:** ``                                                                            |
| displayName                   | string                          | Defaults to `id` in the code-api.                                                                                                                      |
| documentation                 | string                          | Additional information about the type, explanation of semantics of its values.<br /><br />**Default:** ``                                              |
| enumClass                     | string                          | Fully-qualified name of the java enum class this enum should be mapped to.                                                                             |
| items (required)              | Array\<[EnumValue](#enumvalue)> | Mapping from enum values to displayName.                                                                                                               |
| type (required)               | "enum"                          | Always has to be `enum` for enum types.<br /><br />**Default:** `enum`                                                                                 |

### EnumValue

| Name                   | Type   | Description                                                      |
| ---------------------- | ------ | ---------------------------------------------------------------- |
| description            | string | The human-friendly optional description of the value.            |
| displayName (required) | string | The human-friendly name of the value.                            |
| enumInstance           | string | Reference to an instance of #EnumType/enumClass using Enum::name |
| icon                   | string | An optional barista icon that's displayed next to the value.     |
| value (required)       | string | Persisted value for the enum item                                |

### EqualsPrecondition

| Name                     | Type                                | Description                                                                    |
| ------------------------ | ----------------------------------- | ------------------------------------------------------------------------------ |
| expectedValue (required) | string \| number \| boolean \| Date | For `type` = `EQUALS`, type of value should match type of referenced property. |
| property (required)      | string                              | For `type` in [`NULL`, `EQUALS`, `IN`, `REGEX_MATCH`].                        |
| type (required)          | "EQUALS"                            | Type also defines which properties are required.                               |

### Error

Standard error response

| Name               | Type                          | Description                                                                            |
| ------------------ | ----------------------------- | -------------------------------------------------------------------------------------- |
| code (required)    | number                        | The error code (HTTP response)                                                         |
| details            | [ErrorDetails](#errordetails) | Optional details of the error                                                          |
| message (required) | string                        | The error message                                                                      |
| retryAfterSeconds  | number                        | Number of seconds a request can be retried after a 'too many requests' error response. |

### ErrorDetails

Optional details of the error

| Name                 | Type                                                | Description                                                                                                        |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| constraintViolations | Array\<[ConstraintViolation](#constraintviolation)> | A list of constraint violations of input parameters (path, query, request body)                                    |
| errorRef             | string                                              | reference to the error occurrence in the internal self-monitoring, logging, etc.                                   |
| missingPermissions   | Array\<string>                                      | In case of a 403 - Forbidden response, a list of missing permissions necessary to successfully execute the request |
| missingScopes        | Array\<string>                                      | In case of a 403 - Forbidden response, a list of missing scopes necessary to successfully execute the request      |

### ErrorIncomplete

Error object for an incomplete response

| Name               | Type                          | Description                                                                            |
| ------------------ | ----------------------------- | -------------------------------------------------------------------------------------- |
| code (required)    | number                        | The error code (HTTP response)                                                         |
| details            | [ErrorDetails](#errordetails) | Optional details of the error                                                          |
| message (required) | string                        | The error message                                                                      |
| retryAfterSeconds  | number                        | Number of seconds a request can be retried after a 'too many requests' error response. |

### ErrorResponse

| Name             | Type            | Description             |
| ---------------- | --------------- | ----------------------- |
| error (required) | [Error](#error) | Standard error response |

### Identity

| Name            | Type                             | Description                                                                           |
| --------------- | -------------------------------- | ------------------------------------------------------------------------------------- |
| id              | string                           | user id or user group id if type is 'user' or 'group', missing if type is 'all-users' |
| type (required) | "user" \| "group" \| "all-users" |                                                                                       |

### InPrecondition

| Name                      | Type                                        | Description                                                                 |
| ------------------------- | ------------------------------------------- | --------------------------------------------------------------------------- |
| expectedValues (required) | Array\<string \| number \| boolean \| Date> | For `type` = `IN`, type of values should match type of referenced property. |
| property (required)       | string                                      | For `type` in [`NULL`, `EQUALS`, `IN`, `REGEX_MATCH`].                     |
| type (required)           | "IN"                                        | Type also defines which properties are required.                            |

### Item

| Name            | Type                                | Description                                                                                                                                                     |
| --------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| constraints     | Array\<Constraint>                  | Validation constraints the list/set item value must fulfill to be persistable.                                                                                  |
| datasource      | [Datasource](#datasource)           |                                                                                                                                                                 |
| description     | string                              | Short description of what this list/set item is used for.                                                                                                       |
| displayName     | string                              | The human-friendly name of the list/set item.                                                                                                                   |
| documentation   | string                              | Additional information about the list/set item, explanation of semantics of its values.                                                                         |
| metadata        | [MetaData](#metadata)               |                                                                                                                                                                 |
| referencedType  | string                              | Mandatory for `setting` type, otherwise only optionally used in conjunction with subType.                                                                       |
| subType         | string                              | Only in combination with built-in and enum types.                                                                                                               |
| type (required) | string \| [RefPointer](#refpointer) | Ref-pointer to ComplexType/EnumType id or enum boolean,integer,float,local_date,local_time,local_date_time,zoned_date_time,time_zone,text,secret,setting |

### JsonPatch

**type**: Record\<string, Record\<string, any>>

### LengthConstraint

| Name            | Type     | Description                                        |
| --------------- | -------- | -------------------------------------------------- |
| customMessage   | string   | Message to be displayed if constraint is violated. |
| maxLength       | number   | For `type` = `LENGTH` and string values.           |
| minLength       | number   | For `type` = `LENGTH` and string values.           |
| type (required) | "LENGTH" | Type also defines which properties are available.  |

### MetaData

**type**: Record\<string, string>

### ModificationInfo

Modification information about the setting.

| Name               | Type   | Description                                                                                                                                  |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| createdBy          | string | The unique identifier of the user who created the setting.<br /><br />**Example:** `fab17b7a-2eb2-4c95-b818-743d94be2c30`                    |
| createdTime        | Date   | Timestamp when the setting was created in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')                                                     |
| lastModifiedBy     | string | The unique identifier of the user who performed the most recent modification.<br /><br />**Example:** `fab17b7a-2eb2-4c95-b818-743d94be2c30` |
| lastModifiedReason | string | The reason for the most recent modification, if available.                                                                                   |
| lastModifiedTime   | Date   | Timestamp when the setting was last modified in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')                                               |

### ModificationInfoHistory

Modification information about the setting.

| Name               | Type   | Description                                                                                                                      |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| lastModifiedBy     | string | The unique identifier of the user who performed the modification.<br /><br />**Example:** `fab17b7a-2eb2-4c95-b818-743d94be2c30` |
| lastModifiedReason | string | The reason for the modification, if available.                                                                                   |
| lastModifiedTime   | Date   | Timestamp when the setting was modified in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')                                        |
| lastModifiedToken  | string | The token id of the modification, if applicable.                                                                                 |

### Modifications

The additional modification details for this settings object.

| Name                          | Type           | Description                                                                                                            |
| ----------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| first                         | boolean        | If non-moveable settings object is in the first group of non-moveable settings, or in the last (start or end of list). |
| modifiablePaths (required)    | Array\<string> | Property paths which are modifiable, regardless if the `write` operation is allowed.                                   |
| movable                       | boolean        | If settings object can be moved/reordered. Only applicable for ordered list schema.                                    |
| nonModifiablePaths (required) | Array\<string> | Property paths which aren't modifiable, even if the `write` operation is allowed.                                      |

### NoWhitespaceConstraint

| Name            | Type             | Description                                        |
| --------------- | ---------------- | -------------------------------------------------- |
| customMessage   | string           | Message to be displayed if constraint is violated. |
| type (required) | "NO_WHITESPACE" | Type also defines which properties are available.  |

### NotBlankConstraint

| Name            | Type         | Description                                        |
| --------------- | ------------ | -------------------------------------------------- |
| customMessage   | string       | Message to be displayed if constraint is violated. |
| type (required) | "NOT_BLANK" | Type also defines which properties are available.  |

### NotEmptyConstraint

| Name            | Type         | Description                                        |
| --------------- | ------------ | -------------------------------------------------- |
| customMessage   | string       | Message to be displayed if constraint is violated. |
| type (required) | "NOT_EMPTY" | Type also defines which properties are available.  |

### NotPrecondition

| Name                    | Type         | Description                                      |
| ----------------------- | ------------ | ------------------------------------------------ |
| precondition (required) | Precondition |                                                  |
| type (required)         | "NOT"        | Type also defines which properties are required. |

### NullPrecondition

| Name                | Type   | Description                                             |
| ------------------- | ------ | ------------------------------------------------------- |
| property (required) | string | For `type` in [`NULL`, `EQUALS`, `IN`, `REGEX_MATCH`]. |
| type (required)     | "NULL" | Type also defines which properties are required.        |

### PatternConstraint

| Name               | Type      | Description                                        |
| ------------------ | --------- | -------------------------------------------------- |
| customMessage      | string    | Message to be displayed if constraint is violated. |
| pattern (required) | string    | For `type` = `PATTERN` and string values.          |
| type (required)    | "PATTERN" | Type also defines which properties are available.  |

### PermissionContext

| Name                | Type   |
| ------------------- | ------ |
| schemaId (required) | string |
| scope (required)    | string |

### PermissionsList

Permissions granted to the accessor on this object. `r` grants read access to view the object; `w` grants write access to modify the object. Valid values: `["r"]` for read-only, `["r", "w"]` for read and write.

**type**: Array\<"r" | "w">

### Property

| Name                    | Type                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| constraints             | Array\<[UniquePropertiesConstraint](#uniquepropertiesconstraint) \| Constraint>                                                                                                                                                  | Validation constraints the property value must fulfill to be persistable.                                                                                                                                                                                          |
| datasource              | [Datasource](#datasource)                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                    |
| default                 | string \| number \| boolean \| Array\<[any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)> \| Date \| Record\<string \| [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)> | Mandatory if `nullable` = `false`, can't be set if `nullable` = `true`. Can't be empty for enum properties.                                                                                                                                                        |
| description             | string                                                                                                                                                                                                                           | Short description of what this property is used for.<br /><br />**Default:** ``                                                                                                                                                                                    |
| displayName (required)  | string                                                                                                                                                                                                                           | Defaults to `id` in the code-api.                                                                                                                                                                                                                                  |
| documentation           | string                                                                                                                                                                                                                           | Additional information about the property, explanation of semantics of its values.<br /><br />**Default:** ``                                                                                                                                                      |
| forceSecretResubmission | boolean                                                                                                                                                                                                                          | If `true` any change to the property value also requires all properties of type `secret` to be provided<br /><br />**Default:** `false`                                                                                                                            |
| items                   | [Item](#item)                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                    |
| maxObjects              | number                                                                                                                                                                                                                           | Defaults to `100` for collections and `1` for non-collections.<br /><br />**Default:** `1`<br />**Minimum:** `1`                                                                                                                                                   |
| metadata                | [MetaData](#metadata)                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                    |
| migrationPattern        | string                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                    |
| minObjects              | number                                                                                                                                                                                                                           | Optional.<br /><br />**Minimum:** `0`                                                                                                                                                                                                                              |
| modificationPolicy      | "ALWAYS" \| "NEVER" \| "DEFAULT"                                                                                                                                                                                                 | `DEFAULT` - modifiability of the value is defined by ModificationFlags.isModifiable, `ALWAYS`/`NEVER` - the value can be always/never modified. Defaults to `DEFAULT`. Can't be used on properties inside a collection property.<br /><br />**Default:** `DEFAULT` |
| nullable                | boolean                                                                                                                                                                                                                          | Defaults to `false`. Can't be `true` for properties with type `list` and `set`.<br /><br />**Default:** `false`                                                                                                                                                    |
| precondition            | Precondition                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                    |
| referencedType          | string                                                                                                                                                                                                                           | Mandatory for `setting` type, otherwise only optionally used in conjunction with subType.                                                                                                                                                                          |
| subType                 | string                                                                                                                                                                                                                           | Only in combination with built-in types.                                                                                                                                                                                                                           |
| type (required)         | string \| [RefPointer](#refpointer)                                                                                                                                                                                              | Ref-pointer to ComplexType/EnumType id or enum list,set,boolean,integer,float,local_date,local_time,local_date_time,zoned_date_time,time_zone,text,secret,setting.                                                                                          |

### PropertyCountRangeContainerConstraint

| Name                  | Type                     | Description                                                                                         |
| --------------------- | ------------------------ | --------------------------------------------------------------------------------------------------- |
| customMessage         | string                   | Message to be displayed if constraint is violated.                                                  |
| maximumPropertyCount  | number                   | For `type` = `PROPERTY_COUNT_RANGE`.                                                                |
| minimumPropertyCount  | number                   | For `type` = `PROPERTY_COUNT_RANGE`.                                                                |
| properties (required) | Array\<string>           | For `type` in [for `type` = `PROPERTY_COUNT_RANGE` an arbitrary number of properties can be given. |
| type (required)       | "PROPERTY_COUNT_RANGE" | Type also defines which properties are available.                                                   |

### RangeConstraint

| Name            | Type    | Description                                                         |
| --------------- | ------- | ------------------------------------------------------------------- |
| customMessage   | string  | Message to be displayed if constraint is violated.                  |
| maximum         | number  | For `type` = `RANGE` and integer and floating-point numeric values. |
| minimum         | number  | For `type` = `RANGE` and integer and floating-point numeric values. |
| type (required) | "RANGE" | Type also defines which properties are available.                   |

### RecursivePrecondition

| Name                     | Type                 | Description                                      |
| ------------------------ | -------------------- | ------------------------------------------------ |
| preconditions (required) | Array\<Precondition> | For `type` in [`AND`, `OR`].                    |
| type (required)          | "AND" \| "OR"        | Type also defines which properties are required. |

### RefPointer

| Name            | Type   |
| --------------- | ------ |
| $ref (required) | string |

### ReferentialIntegrityDeletionConstraint

| Name                 | Type                     | Description                                        |
| -------------------- | ------------------------ | -------------------------------------------------- |
| customMessage        | string                   | Message to be displayed if constraint is violated. |
| schemaIds (required) | Array\<string>           | For `type` = `REFERENTIAL_INTEGRITY`               |
| type (required)      | "REFERENTIAL_INTEGRITY" | Type also defines which properties are available.  |

### RegexConstraint

| Name                   | Type    | Description                                                                                       |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| customMessage          | string  | Message to be displayed if constraint is violated.                                                |
| disallowDangerousRegex | boolean | `true` - regex must be safe, `false` - unsafe regexes are allowed<br /><br />**Default:** `false` |
| type (required)        | "REGEX" | Type also defines which properties are available.                                                 |

### RegexMatchPrecondition

| Name                | Type           | Description                                                 |
| ------------------- | -------------- | ----------------------------------------------------------- |
| pattern (required)  | string         | For `type` = `REGEX_MATCH`, type of value should be string. |
| property (required) | string         | For `type` in [`NULL`, `EQUALS`, `IN`, `REGEX_MATCH`].     |
| type (required)     | "REGEX_MATCH" | Type also defines which properties are required.            |

### ReorderObject

| Name                | Type   | Description                          |
| ------------------- | ------ | ------------------------------------ |
| objectId (required) | string | The objectId of the settings object. |

### ReorderRequest

| Name                | Type                                      | Description                                                                                                                                                                                                                 |
| ------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| schemaId (required) | string                                    | The schema to which the objects belong.<br /><br />**Example:** `builtin:schema`                                                                                                                                            |
| scope (required)    | string                                    | The scope to which the objects belong.<br /><br />**Example:** `environment`                                                                                                                                                |
| sections (required) | Array\<[ReorderSection](#reordersection)> | Defines the reorder operations. Each section defines a contiguous range of objects in the source list that should be reordered. The sections must not overlap. Moving an object from one section to another isn't possible. |

### ReorderResponse

| Name               | Type                                                          | Description                                                                                            |
| ------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| items (required)   | Array\<[ReorderResponseItemsItem](#reorderresponseitemsitem)> | A list of settings objects after reordering.  Only contains the objects that were part of the request. |
| version (required) | string                                                        | The version of the settings objects list for optimistic locking.                                       |

### ReorderResponseItemsItem

| Name                | Type   | Description                                       |
| ------------------- | ------ | ------------------------------------------------- |
| objectId (required) | string | The ID of the settings object.                    |
| version (required)  | string | The version of the object for optimistic locking. |

### ReorderSection

| Name                     | Type                                    | Description                                                                                  |
| ------------------------ | --------------------------------------- | -------------------------------------------------------------------------------------------- |
| firstObjectId (required) | string                                  | The objectId of the first object of the source list that should be included in this section. |
| lastObjectId (required)  | string                                  | The objectId of the last object of the source list that should be included in this section.  |
| order (required)         | Array\<[ReorderObject](#reorderobject)> | The new order of objects spanning all objects between firstObject and lastObject inclusive.  |

### ResolutionRequest

| Name                   | Type                                                        |
| ---------------------- | ----------------------------------------------------------- |
| permissions (required) | Array\<[SinglePermissionRequest](#singlepermissionrequest)> |

### ResourceContext

The resource context, which contains additional permission information about the object.

| Name                     | Type                                  | Description                                                   |
| ------------------------ | ------------------------------------- | ------------------------------------------------------------- |
| modifications (required) | [Modifications](#modifications)       | The additional modification details for this settings object. |
| operations (required)    | Array\<"read" \| "write" \| "delete"> | The allowed operations on this settings object.               |

### RevisionDiff

The diff between two revisions.

| Name                        | Type                                                          | Description                                                                                   |
| --------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| appId                       | string                                                        | The id of the app which changed the settings object.                                          |
| jsonAfter                   | string                                                        | The new value of the changed settings value or null if the value has been deleted.            |
| jsonBefore                  | string                                                        | The previous value of the changed settings value or null if the value has been newly created. |
| jsonPatch                   | null \| Array\<[JsonPatch](#jsonpatch)>                       | The JSON Patch for this value. May be null if the diff type isn't UPDATE.                     |
| modificationInfo (required) | [ModificationInfoHistory](#modificationinfohistory)           | Modification information about the setting.                                                   |
| objectId                    | string                                                        | The ID of the settings object.                                                                |
| ownerAfter                  | [Identity](#identity)                                         |                                                                                               |
| ownerBefore                 | [Identity](#identity)                                         |                                                                                               |
| revision (required)         | string                                                        | The revision of the change.                                                                   |
| schemaDisplayName           | string                                                        | The display name of the schema to which the revision belongs.                                 |
| schemaId                    | string                                                        | Schema ID to which the revision belongs.                                                      |
| schemaVersion               | string                                                        | The schema version the new value complies to.                                                 |
| source                      | string                                                        | The source of the change.                                                                     |
| summary                     | string                                                        | Summary of the object value corresponding to the summary pattern of the schema.               |
| type                        | "CREATE" \| "DELETE" \| "NO_CHANGE" \| "REORDER" \| "UPDATE" | The type of the difference.                                                                   |

### RevisionDiffPage

The paged response payload for diff between revisions of settings.

| Name                  | Type                                  | Description                                                                                                                                                                                                         |
| --------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| endTime               | string                                | The 'to' time in ISO Date Time Format from the original request.                                                                                                                                                    |
| items                 | Array\<[RevisionDiff](#revisiondiff)> | The list of revisions changes in the current page.                                                                                                                                                                  |
| nextPageKey           | string                                | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | number                                | The number of entries per page.                                                                                                                                                                                     |
| startTime             | string                                | The 'from' time in ISO Date Time Format from the original request.                                                                                                                                                  |
| totalCount (required) | number                                | The total number of entries in the result.                                                                                                                                                                          |

### SchemaList

The list of available settings schemas.

| Name                  | Type                              | Description                                                    |
| --------------------- | --------------------------------- | -------------------------------------------------------------- |
| items (required)      | Array\<[SchemaStub](#schemastub)> | A list of settings schemas.                                    |
| totalCount (required) | number                            | The number of schemas in the list.<br /><br />**Example:** `1` |

### SchemaStub

The short representation of the settings schema.

| Name                           | Type                                                     | Description                                                                                                                  |
| ------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| displayName (required)         | string                                                   | The name of the schema.<br /><br />**Example:** `Built-in container monitoring rules`                                        |
| latestSchemaVersion (required) | string                                                   | The most recent version of the schema.<br /><br />**Example:** `1.4.2`                                                       |
| maturity                       | "PREVIEW" \| "EARLY_ADOPTER" \| "GENERAL_AVAILABILITY" | The maturity of the schema.<br /><br />**Example:** `GENERAL_AVAILABILITY`                                                   |
| multiObject                    | boolean                                                  | Multi-object flag. `True` if the schema is a multi-object schema<br /><br />**Example:** `true`                              |
| ordered                        | boolean                                                  | Ordered flag. `True` if the schema is an ordered multi-object schema.<br /><br />**Example:** `false`                        |
| ownerBasedAccessControl        | boolean                                                  | Owner based access control flag. `True` if the schema has owner based access control enabled.<br /><br />**Example:** `true` |
| schemaId (required)            | string                                                   | The ID of the schema.<br /><br />**Example:** `builtin:container.built-in-monitoring-rule`                                   |
| schemaVersions                 | Array\<string>                                           | A list of available (GA) versions of the schema.                                                                             |

### SecretResubmissionContainerConstraint

| Name                          | Type                   | Description                                                                               |
| ----------------------------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| checkAllProperties (required) | boolean                | Either all properties or only those marked with `forceSecretResubmission` are considered. |
| customMessage                 | string                 | Message to be displayed if constraint is violated.                                        |
| type (required)               | "SECRET_RESUBMISSION" | Type also defines which properties are available.                                         |

### SettingsDefaultObject

The default settings object for the given schema.

| Name             | Type                            | Description                                                                                                                        |
| ---------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| searchSummary    | string                          | A searchable summary string of the object. Plain text without Markdown. Only set if the schema is a multi-object schema.           |
| summary          | string                          | A short summary of the object. Only set if the schema is a multi-object schema.                                                    |
| value (required) | [SettingsValue](#settingsvalue) | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema. |

### SettingsObject

A settings object.

| Name                | Type                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| classicScope        | string                                | The classic scope that the object targets. For more details, see [Dynatrace Documentation](https://dt-url.net/ky03459).                                                                                                                                                                                                                                                                                                       |
| externalId          | string                                | The externalId of the object.<br /><br />**Example:** `myExternalId`                                                                                                                                                                                                                                                                                                                                                          |
| modificationInfo    | [ModificationInfo](#modificationinfo) | Modification information about the setting.                                                                                                                                                                                                                                                                                                                                                                                   |
| objectId (required) | string                                | The ID of the settings object.<br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=`                                                                                                                                                                                                                                                                                                 |
| owner               | [Identity](#identity)                 |                                                                                                                                                                                                                                                                                                                                                                                                                               |
| resourceContext     | [ResourceContext](#resourcecontext)   | The resource context, which contains additional permission information about the object.                                                                                                                                                                                                                                                                                                                                      |
| schemaId            | string                                | The schema on which the object is based.<br /><br />**Example:** `jira-connection`                                                                                                                                                                                                                                                                                                                                            |
| schemaVersion       | string                                | The version of the schema on which the object is based.<br /><br />**Example:** `1.0.0`                                                                                                                                                                                                                                                                                                                                       |
| scope               | string                                | The scope that the object targets. For more details, see [Dynatrace Documentation](https://dt-url.net/ky03459).                                                                                                                                                                                                                                                                                                               |
| searchSummary       | string                                | A searchable summary string of the setting value. Plain text without Markdown.                                                                                                                                                                                                                                                                                                                                                |
| summary             | string                                | A short summary of settings. This can contain Markdown and will be escaped accordingly.                                                                                                                                                                                                                                                                                                                                       |
| value               | [SettingsValue](#settingsvalue)       | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema.                                                                                                                                                                                                                                                                                            |
| version (required)  | string                                | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. <br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=` |

### SettingsObjectCreate

Configuration of a new settings object.

| Name                | Type                                     | Description                                                                                                                                                                                                      |
| ------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| externalId          | string                                   | External id for upserts.<br /><br />**Example:** `myExternalId`                                                                                                                                                  |
| insertNeighbor      | string                                   | The position of the new object based on the objectId of the neighbor. Only for insertPosition `after`and `before`<br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=` |
| insertPosition      | "first" \| "last" \| "after" \| "before" |                                                                                                                                                                                                                  |
| schemaId (required) | string                                   | The schema on which the object is based.<br /><br />**Example:** `jira-connection`                                                                                                                               |
| schemaVersion       | string                                   | The version of the schema on which the object is based.<br /><br />**Example:** `1.0`                                                                                                                            |
| scope (required)    | string                                   | The scope of the settings object.<br /><br />**Example:** `environment`                                                                                                                                          |
| value (required)    | [SettingsValue](#settingsvalue)          | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema.                                                                               |

### SettingsObjectResponse

The response to a creation request. Only contains the ID and version, not the full object.

| Name                | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objectId (required) | string | The ID of the created settings object.<br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=`                                                                                                                                                                                                                                                                                         |
| version (required)  | string | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. <br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=` |

### SettingsObjectSummarize

The settings object to summarize.

| Name             | Type                            | Description                                                                                                                        |
| ---------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| schemaVersion    | string                          | The version of the schema on which the object is based.<br /><br />**Example:** `1.0`                                              |
| value (required) | [SettingsValue](#settingsvalue) | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema. |

### SettingsObjectSummary

The summary of the provided settings object according to the schema.

| Name                     | Type                                                                | Description                                                                                        |
| ------------------------ | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| items                    | null \| Array\<[SettingsObjectSummary](#settingsobjectsummary)>     | The summaries of the items in this property (if this property is a collection).                    |
| properties               | [SettingsObjectSummaryProperties](#settingsobjectsummaryproperties) | The summaries of the child properties by their name.                                               |
| searchSummary (required) | string                                                              | A searchable summary string of the setting value. Plain text without Markdown.                     |
| summary (required)       | string                                                              | A short summary of the settings object. This can contain Markdown and will be escaped accordingly. |

### SettingsObjectSummaryProperties

The summaries of the child properties by their name.

**type**: Record\<string, SettingsObjectSummary>

### SettingsObjectUpdate

An update of a settings object.

| Name             | Type                                     | Description                                                                                                                                                                                                      |
| ---------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| externalId       | string                                   | External identifier for the object being updated                                                                                                                                                                 |
| insertNeighbor   | string                                   | The position of the new object based on the objectId of the neighbor. Only for insertPosition `after`and `before`<br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=` |
| insertPosition   | "first" \| "last" \| "after" \| "before" |                                                                                                                                                                                                                  |
| schemaVersion    | string                                   | The version of the schema on which the object is based.<br /><br />**Example:** `1.0.0`                                                                                                                          |
| value (required) | [SettingsValue](#settingsvalue)          | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema.                                                                               |

### SettingsObjectsList

A list of settings objects.

| Name                  | Type                                      | Description                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error                 | [ErrorIncomplete](#errorincomplete)       | Error object for an incomplete response                                                                                                                                                                                                                                                                                                                                                                   |
| items (required)      | Array\<[SettingsObject](#settingsobject)> | A list of settings objects.                                                                                                                                                                                                                                                                                                                                                                               |
| nextPageKey           | string                                    | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==`                                                                                                                                                                                       |
| pageSize (required)   | number                                    | The number of entries per page.                                                                                                                                                                                                                                                                                                                                                                           |
| totalCount (required) | number                                    | The total number of entries in the result.                                                                                                                                                                                                                                                                                                                                                                |
| version (required)    | string                                    | The version of the settings objects list for optimistic locking."  You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests). If set on reorder, the update will be allowed only if there wasn't any change between the retrieval and the update. If set on a followup GET request, it fails if there was a change between these two requests. |

### SettingsSchemaDefinition

| Name                     | Type                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowedScopes (required) | Array\<string>                                                                                                                                                                         | A list of scopes where the schema can be used.<br /><br />**Example:** `["host","application"]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| constraints              | Array\<ContainerConstraint \| [SecretResubmissionContainerConstraint](#secretresubmissioncontainerconstraint)>                                                                         | A list of constrains limiting the values to be accepted by the schema.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| deletionConstraints      | Array\<[CustomDeletionValidatorReferenceConstraint](#customdeletionvalidatorreferenceconstraint) \| [ReferentialIntegrityDeletionConstraint](#referentialintegritydeletionconstraint)> | Constraints limiting the values to be deleted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| description (required)   | string                                                                                                                                                                                 | A short description of the schema.<br /><br />**Example:** `Dynatrace disables monitoring of containers that do not run any applications`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| displayName (required)   | string                                                                                                                                                                                 | The display name of the schema.<br /><br />**Example:** `Built-in container monitoring rules`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| documentation            | string                                                                                                                                                                                 | An extended description of the schema and/or links to documentation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| dynatrace (required)     | string                                                                                                                                                                                 | The version of the data format.<br /><br />**Example:** `1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| enums (required)         | [SettingsSchemaDefinitionEnums](#settingsschemadefinitionenums)                                                                                                                        | A list of definitions of enum properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| keyProperty              | string                                                                                                                                                                                 | Name of the key property in this schema.<br /><br />**Example:** `keyProperty`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| maturity                 | "PREVIEW" \| "EARLY_ADOPTER" \| "GENERAL_AVAILABILITY"                                                                                                                               | The maturity of the schema. Possible values: * PREVIEW: Preview features aren't generally available, but might be available in specific environments as part of early-access programs. These are the most likely to change in incompatible ways.
* EARLY_ADOPTER: Features marked "early adopter" are available in all environments, but aren't mature enough to warrant the "general availability" designation. We don't expect incompatible changes for these, but be aware, that these aren't fully stable yet and incompatible changes may be necessary in rare cases.
* GENERAL_AVAILABILITY: Features marked "general availability" are the most stable. While the schemas will still evolve over time, care will be taken to only do so in a backward-compatible manner. In any case, automations should make use of the `schemaVersion` field when writing settings objects. <br /><br />**Example:** `GENERAL_AVAILABILITY` |
| maxObjects (required)    | number                                                                                                                                                                                 | The maximum amount of objects per scope. Only applicable when **multiObject** is set to `true`. <br /><br />**Example:** `10`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| metadata                 | [SettingsSchemaDefinitionMetadata](#settingsschemadefinitionmetadata)                                                                                                                  | Metadata of the setting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| multiObject (required)   | boolean                                                                                                                                                                                | Multiple (`true`) objects per scope are permitted or a single (`false`) object per scope is permitted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ordered                  | boolean                                                                                                                                                                                | If `true` the order of objects has semantic significance. Only applicable when **multiObject** is set to `true`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| properties (required)    | [SettingsSchemaDefinitionProperties](#settingsschemadefinitionproperties)                                                                                                              | A list of schema's properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| schemaConstraints        | Array\<SchemaConstraint>                                                                                                                                                               | Constraints limiting the values as a whole to be accepted in this configuration element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| schemaGroups             | Array\<string>                                                                                                                                                                         | Names of the groups, which the schema belongs to.<br /><br />**Example:** `["group:some.1","group:some.2"]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| schemaId (required)      | string                                                                                                                                                                                 | The ID of the schema.<br /><br />**Example:** `builtin:container.built-in-monitoring-rule`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| types (required)         | [SettingsSchemaDefinitionTypes](#settingsschemadefinitiontypes)                                                                                                                        | A list of definitions of types. A type is a complex property that contains its own set of subproperties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| version (required)       | string                                                                                                                                                                                 | The version of the schema.<br /><br />**Example:** `1.4.2`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### SettingsSchemaDefinitionEnums

A list of definitions of enum properties.

**type**: Record\<string, EnumType>

### SettingsSchemaDefinitionMetadata

Metadata of the setting.

**type**: Record\<string, string>

### SettingsSchemaDefinitionProperties

A list of schema's properties.

**type**: Record\<string, Property>

### SettingsSchemaDefinitionTypes

A list of definitions of types.

A type is a complex property that contains its own set of subproperties.

**type**: Record\<string, ComplexType>

### SettingsUpdateResponse

The response to an update request.

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| version (required) | string | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. <br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=` |

### SettingsValue

The value of the setting.

It defines the actual values of settings' parameters.

The actual content depends on the object's schema.

**type**: Record\<string, any>

### SinglePermissionRequest

optional generic set of context data

| Name                  | Type                                                                            |
| --------------------- | ------------------------------------------------------------------------------- |
| context               | [PermissionContext](#permissioncontext)                                         |
| permission (required) | "settings:objects:read" \| "settings:objects:write" \| "settings:objects:admin" |

### TransferOwnershipRequest

| Name                | Type                  |
| ------------------- | --------------------- |
| newOwner (required) | [Identity](#identity) |

### TrimmedConstraint

| Name            | Type      | Description                                        |
| --------------- | --------- | -------------------------------------------------- |
| customMessage   | string    | Message to be displayed if constraint is violated. |
| type (required) | "TRIMMED" | Type also defines which properties are available.  |

### UniqueMultiScopeSchemaPropertiesConstraint

| Name                        | Type                   | Description                                        |
| --------------------------- | ---------------------- | -------------------------------------------------- |
| customMessage               | string                 | Message to be displayed if constraint is violated. |
| type (required)             | "MULTI_SCOPE_UNIQUE" | Type also defines which properties are available.  |
| uniqueProperties (required) | Array\<string>         | For `type` = `MULTI_SCOPE_UNIQUE`                  |

### UniquePropertiesConstraint

| Name                        | Type           | Description                                        |
| --------------------------- | -------------- | -------------------------------------------------- |
| customMessage               | string         | Message to be displayed if constraint is violated. |
| type (required)             | "UNIQUE"       | Type also defines which properties are available.  |
| uniqueProperties (required) | Array\<string> | For `type` = `UNIQUE`.                             |

### UniqueSchemaPropertiesConstraint

| Name                        | Type           | Description                                           |
| --------------------------- | -------------- | ----------------------------------------------------- |
| customMessage               | string         | Message to be displayed if constraint is violated.    |
| flattenCollections          | boolean        | For `type` = `UNIQUE`<br /><br />**Default:** `false` |
| type (required)             | "UNIQUE"       | Type also defines which properties are available.     |
| uniqueProperties (required) | Array\<string> | For `type` = `UNIQUE`                                 |

### UpdatePermissionsRequest

| Name                   | Type                                | Description                                                                                                                                                                                                                                            |
| ---------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| permissions (required) | [PermissionsList](#permissionslist) | Permissions granted to the accessor on this object. `r` grants read access to view the object; `w` grants write access to modify the object. Valid values: `["r"]` for read-only, `["r", "w"]` for read and write.<br /><br />**Example:** `["r","w"]` |

### ValidationResponse

| Name                 | Type                                            |
| -------------------- | ----------------------------------------------- |
| constraintViolations | Array\<[ViolationResponse](#violationresponse)> |
| message              | string                                          |
| valid (required)     | boolean                                         |

### ViolationResponse

| Name    | Type   |
| ------- | ------ |
| message | string |
| path    | string |

### Constraint

**type**: [LengthConstraint](#lengthconstraint) | [RangeConstraint](#rangeconstraint) | [NotBlankConstraint](#notblankconstraint) | [NotEmptyConstraint](#notemptyconstraint) | [TrimmedConstraint](#trimmedconstraint) | [NoWhitespaceConstraint](#nowhitespaceconstraint) | [RegexConstraint](#regexconstraint) | [PatternConstraint](#patternconstraint) | [CustomValidatorReferenceConstraint](#customvalidatorreferenceconstraint)

### ContainerConstraint

**type**: [BiComparableContainerConstraint](#bicomparablecontainerconstraint) | [CustomValidatorReferenceContainerConstraint](#customvalidatorreferencecontainerconstraint) | [PropertyCountRangeContainerConstraint](#propertycountrangecontainerconstraint)

### Precondition

**type**: [RecursivePrecondition](#recursiveprecondition) | [NotPrecondition](#notprecondition) | [EqualsPrecondition](#equalsprecondition) | [InPrecondition](#inprecondition) | [NullPrecondition](#nullprecondition) | [RegexMatchPrecondition](#regexmatchprecondition)

### SchemaConstraint

**type**: [UniqueSchemaPropertiesConstraint](#uniqueschemapropertiesconstraint) | [UniqueMultiScopeSchemaPropertiesConstraint](#uniquemultiscopeschemapropertiesconstraint) | [CustomSchemaValidatorReferenceConstraint](#customschemavalidatorreferenceconstraint) | [ByteSizeLimitConstraint](#bytesizelimitconstraint)
