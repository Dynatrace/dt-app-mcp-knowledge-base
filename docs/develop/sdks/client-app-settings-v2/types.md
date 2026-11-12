## Types

### AppSettingsAccessorPermissions

| Name                   | Type                                                      | Description                                                                                                                                                                                                                                            |
| ---------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| accessor (required)    | [Identity](#identity)                                     |                                                                                                                                                                                                                                                        |
| permissions (required) | [AppSettingsPermissionsList](#appsettingspermissionslist) | Permissions granted to the accessor on this object. `r` grants read access to view the object; `w` grants write access to modify the object. Valid values: `["r"]` for read-only, `["r", "w"]` for read and write.<br /><br />**Example:** `["r","w"]` |

### AppSettingsAccessorPermissionsList

| Name                 | Type                                                                      |
| -------------------- | ------------------------------------------------------------------------- |
| accessors (required) | Array\<[AppSettingsAccessorPermissions](#appsettingsaccessorpermissions)> |

### AppSettingsObject

A settings object.

| Name                | Type                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| modificationInfo    | [ModificationInfo](#modificationinfo) | Modification information about the setting.                                                                                                                                                                                                                                                                                                                                                                                    |
| objectId (required) | string                                | The ID of the settings object.<br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=`                                                                                                                                                                                                                                                                                                  |
| owner               | [Identity](#identity)                 |                                                                                                                                                                                                                                                                                                                                                                                                                                |
| resourceContext     | [ResourceContext](#resourcecontext)   | The resource context, which contains additional permission information about the object.                                                                                                                                                                                                                                                                                                                                       |
| schemaId            | string                                | The schema on which the object is based.<br /><br />**Example:** `jira-connection`                                                                                                                                                                                                                                                                                                                                             |
| schemaVersion       | string                                | The version of the schema on which the object is based.<br /><br />**Example:** `1.0.0`                                                                                                                                                                                                                                                                                                                                        |
| searchSummary       | string                                | A searchable summary string of the setting value. Plain text without Markdown.                                                                                                                                                                                                                                                                                                                                                 |
| summary             | string                                | A short summary of settings. This can contain Markdown and will be escaped accordingly.                                                                                                                                                                                                                                                                                                                                        |
| value               | AppSettingsValueRaw                   | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema.                                                                                                                                                                                                                                                                                             |
| version (required)  | string                                | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. <br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=` |

### AppSettingsObjectCreate

Configuration of a new settings object.

| Name                | Type             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| insertAfter         | string           | The position of the new object. The new object will be added after the specified one. If `null`, the new object will be placed in the last position. If set to empty string, the new object will be placed in the first position. Only applicable for objects based on schemas with ordered objects (schema's `ordered` parameter is set to `true`). <br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=` |
| schemaId (required) | string           | The schema on which the object is based.<br /><br />**Example:** `jira-connection`                                                                                                                                                                                                                                                                                                                                                                   |
| value (required)    | AppSettingsValue | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema.                                                                                                                                                                                                                                                                                                                   |

### AppSettingsObjectResponse

The response to a creation request.

| Name                | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| objectId (required) | string | The ID of the created settings object.<br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=`                                                                                                                                                                                                                                                                                          |
| version (required)  | string | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. <br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=` |

### AppSettingsObjectUpdate

An update of a settings object.

| Name             | Type             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| insertAfter      | string           | The position of the updated object. The new object will be moved behind the specified one. **insertAfter** and **insertBefore** are evaluated together and only one of both can be set. If `null` and **insertBefore** 'null', the existing object keeps the current position. If set to empty string, the updated object will be placed in the first position. Only applicable for objects based on schemas with ordered objects (schema's **ordered** parameter is set to `true`). <br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=`    |
| insertBefore     | string           | The position of the updated object. The new object will be moved in front of the specified one. **insertAfter** and **insertBefore** are evaluated together and only one of both can be set. If `null` and **insertAfter** 'null', the existing object keeps the current position. If set to empty string, the updated object will be placed in the last position. Only applicable for objects based on schemas with ordered objects (schema's **ordered** parameter is set to `true`). <br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=` |
| value (required) | AppSettingsValue | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### AppSettingsObjectsList

A list of settings objects.

| Name                  | Type                                            | Description                                                                                                                                                                                                            |
| --------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error                 | [ErrorIncomplete](#errorincomplete)             | Error object for an incomplete response                                                                                                                                                                                |
| items (required)      | Array\<[AppSettingsObject](#appsettingsobject)> | A list of settings objects.                                                                                                                                                                                            |
| nextPageKey           | string                                          | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize (required)   | number                                          | The number of entries per page.                                                                                                                                                                                        |
| totalCount (required) | number                                          | The total number of entries in the result.                                                                                                                                                                             |

### AppSettingsPermissionsList

Permissions granted to the accessor on this object. `r` grants read access to view the object; `w` grants write access to modify the object. Valid values: `["r"]` for read-only, `["r", "w"]` for read and write.

**type**: Array\<"r" | "w">

### AppSettingsTransferOwnershipRequest

| Name     | Type                  |
| -------- | --------------------- |
| newOwner | [Identity](#identity) |

### AppSettingsUpdatePermissionsRequest

| Name                   | Type                                                      | Description                                                                                                                                                                                                                                            |
| ---------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| permissions (required) | [AppSettingsPermissionsList](#appsettingspermissionslist) | Permissions granted to the accessor on this object. `r` grants read access to view the object; `w` grants write access to modify the object. Valid values: `["r"]` for read-only, `["r", "w"]` for read and write.<br /><br />**Example:** `["r","w"]` |

### AppSettingsUpdateResponse

The response to an update request.

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| version (required) | string | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. <br /><br />**Example:** `Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=` |

### ConstraintViolation

Contains information about a constraint violation caused by invalid input.

| Name               | Type                                             | Description                                                    |
| ------------------ | ------------------------------------------------ | -------------------------------------------------------------- |
| message (required) | string                                           | The constraint violation description message                   |
| parameterLocation  | "PATH" \| "QUERY" \| "HEADER" \| "PAYLOAD_BODY" | Describes the general location of the violating parameter      |
| path               | string                                           | The path of the parameter that caused the constraint violation |

### EffectiveAppSettingsValue

An effective settings value.

| Name             | Type                                  | Description                                                                                                                        |
| ---------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| modificationInfo | [ModificationInfo](#modificationinfo) | Modification information about the setting.                                                                                        |
| schemaId         | string                                | The schema on which the object is based.<br /><br />**Example:** `jira-connection`                                                 |
| schemaVersion    | string                                | The version of the schema on which the object is based.<br /><br />**Example:** `1.0.0`                                            |
| searchSummary    | string                                | A searchable summary string of the setting value. Plain text without Markdown.                                                     |
| summary          | string                                | A short summary of settings. This can contain Markdown and will be escaped accordingly.                                            |
| value            | AppSettingsValueRaw                   | The value of the setting. It defines the actual values of settings' parameters. The actual content depends on the object's schema. |

### EffectiveAppSettingsValuesList

A list of effective settings values.

| Name                  | Type                                                            | Description                                                                                                                                                                                                            |
| --------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error                 | [ErrorIncomplete](#errorincomplete)                             | Error object for an incomplete response                                                                                                                                                                                |
| items (required)      | Array\<[EffectiveAppSettingsValue](#effectiveappsettingsvalue)> | A list of effective settings values.                                                                                                                                                                                   |
| nextPageKey           | string                                                          | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize (required)   | number                                                          | The number of entries per page.                                                                                                                                                                                        |
| totalCount (required) | number                                                          | The total number of entries in the result.                                                                                                                                                                             |

### EffectivePermission

| Name                  | Type                                    |
| --------------------- | --------------------------------------- |
| context               | [PermissionContext](#permissioncontext) |
| granted (required)    | "true" \| "false" \| "condition"        |
| permission (required) | string                                  |

### EffectivePermissions

**type**: Array\<[EffectivePermission](#effectivepermission)>

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

### ModificationInfo

Modification information about the setting.

| Name               | Type   | Description                                                                                                                                  |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| createdBy          | string | The unique identifier of the user who created the setting.<br /><br />**Example:** `fab17b7a-2eb2-4c95-b818-743d94be2c30`                    |
| createdTime        | Date   | Timestamp when the setting was created in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')                                                     |
| lastModifiedBy     | string | The unique identifier of the user who performed the most recent modification.<br /><br />**Example:** `fab17b7a-2eb2-4c95-b818-743d94be2c30` |
| lastModifiedReason | string | The reason for the most recent modification, if available.                                                                                   |
| lastModifiedTime   | Date   | Timestamp when the setting was last modified in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')                                               |

### Modifications

The additional modification details for this settings object.

| Name                          | Type           | Description                                                                                                            |
| ----------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| first                         | boolean        | If non-moveable settings object is in the first group of non-moveable settings, or in the last (start or end of list). |
| modifiablePaths (required)    | Array\<string> | Property paths which are modifiable, regardless if the `write` operation is allowed.                                   |
| movable                       | boolean        | If settings object can be moved/reordered. Only applicable for ordered list schema.                                    |
| nonModifiablePaths (required) | Array\<string> | Property paths which are not modifiable, even if the `write` operation is allowed.                                     |

### PermissionContext

| Name                | Type   |
| ------------------- | ------ |
| schemaId (required) | string |

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

### SinglePermissionRequest

optional generic set of context data

| Name                  | Type                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------- |
| context               | [PermissionContext](#permissioncontext)                                                     |
| permission (required) | "app-settings:objects:read" \| "app-settings:objects:write" \| "app-settings:objects:admin" |
