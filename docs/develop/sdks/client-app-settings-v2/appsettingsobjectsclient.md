## appSettingsObjectsClient

```js
import { appSettingsObjectsClient } from '@dynatrace-sdk/client-app-settings-v2';
```

### deleteAppSettingsAllUsersPermissionByObjectId

**appSettingsObjectsClient.deleteAppSettingsAllUsersPermissionByObjectId(config): Promise\<void>**

**Required scope:** app-settings:objects:write

Remove the permissions for an existing all-users accessor on this object, anyone with write permissions is allowed to delete permissions

#### Parameters

| Name                       | Type    | Description                                                                                                                                                         |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required) | string  | The ID of the required settings object                                                                                                                              |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 204         | success     |

#### Throws

| Error Type         | Error Message                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| ErrorResponseError | No object available for the given objectId or the all-users accessor doesn't have any permissions on this object |
| TooManyRequests    | Failed. Too many requests.                                                                                       |
| ServiceUnavailable | Failed. Service unavailable.                                                                                     |
| GeneralError       | Error.                                                                                                           |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.deleteAppSettingsAllUsersPermissionByObjectId(
    { objectId: "..." },
  );
```

### deleteAppSettingsObjectByObjectId

**appSettingsObjectsClient.deleteAppSettingsObjectByObjectId(config): Promise\<void>**

Deletes the specified settings object

**Required scope:** app-settings:objects:write

#### Parameters

| Name                                       | Type    | Description                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.adminAccess                         | boolean | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false`                                                                                                                                                            |
| config.objectId (required)                 | string  | The ID of the required settings object                                                                                                                                                                                                                                                                                         |
| config.optimisticLockingVersion (required) | string  | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type          | Error Message                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| ErrorResponseError  | Failed. The input is invalid. \| Failed. Forbidden. \| Failed. The requested resource doesn't exist. |
| ConflictingResource | Failed. Conflicting resource.                                                                        |
| TooManyRequests     | Failed. Too many requests.                                                                           |
| ServiceUnavailable  | Failed. Service unavailable.                                                                         |
| GeneralError        | Error.                                                                                               |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.deleteAppSettingsObjectByObjectId(
    { objectId: "...", optimisticLockingVersion: "..." },
  );
```

### deleteAppSettingsPermissionByObjectIdAndAccessorId

**appSettingsObjectsClient.deleteAppSettingsPermissionByObjectIdAndAccessorId(config): Promise\<void>**

**Required scope:** app-settings:objects:write

Remove the permissions for an existing accessor on this object, anyone with write permissions is allowed to delete permissions

#### Parameters

| Name                           | Type              | Description                                                                                                                                                         |
| ------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.accessorId (required)   | string            | The user uuid or group uuid of the accessor, depending on the type                                                                                                  |
| config.accessorType (required) | "user" \| "group" | The type of the accessor                                                                                                                                            |
| config.adminAccess             | boolean           | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required)     | string            | The ID of the required settings object                                                                                                                              |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 204         | success     |

#### Throws

| Error Type         | Error Message                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| ErrorResponseError | No object available for the given objectId or the accessor doesn't have any permissions on this object |
| TooManyRequests    | Failed. Too many requests.                                                                             |
| ServiceUnavailable | Failed. Service unavailable.                                                                           |
| GeneralError       | Error.                                                                                                 |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.deleteAppSettingsPermissionByObjectIdAndAccessorId(
    {
      objectId: "...",
      accessorType: "user",
      accessorId: "...",
    },
  );
```

### getAppSettingsAllUsersPermissionByObjectId

**appSettingsObjectsClient.getAppSettingsAllUsersPermissionByObjectId(config): Promise\<[AppSettingsAccessorPermissions](#appsettingsaccessorpermissions)>**

**Required scope:** app-settings:objects:read

Get current permissions of the all-users accessor on this object

#### Parameters

| Name                       | Type    | Description                                                                                                                                                         |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required) | string  | The ID of the required settings object                                                                                                                              |

#### Returns

| Return type                                                       | Status code | Description |
| ----------------------------------------------------------------- | ----------- | ----------- |
| [AppSettingsAccessorPermissions](#appsettingsaccessorpermissions) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| ErrorResponseError | No object available for the given objectId or the all-users accessor doesn't have any permissions on this object |
| TooManyRequests    | Failed. Too many requests.                                                                                       |
| ServiceUnavailable | Failed. Service unavailable.                                                                                     |
| GeneralError       | Error.                                                                                                           |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.getAppSettingsAllUsersPermissionByObjectId(
    { objectId: "..." },
  );
```

### getAppSettingsObjectByObjectId

**appSettingsObjectsClient.getAppSettingsObjectByObjectId(config): Promise\<[AppSettingsObject](#appsettingsobject)>**

Gets the specified settings object

**Required scope:** app-settings:objects:read

Gets the specified settings object. Properties of type **secret** will be included in plain text if the call originates from a serverless function of your app; they will have irreversibly masked values otherwise. This protects these secrets from leaking to users of your app or other third parties.

#### Parameters

| Name                       | Type    | Description                                                                                                                                                         |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required) | string  | The ID of the required settings object                                                                                                                              |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [AppSettingsObject](#appsettingsobject) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| ErrorResponseError | Failed. The input is invalid. \| Failed. Forbidden. \| No object available for the given objectId |
| TooManyRequests    | Failed. Too many requests.                                                                        |
| ServiceUnavailable | Failed. Service unavailable.                                                                      |
| GeneralError       | Error.                                                                                            |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.getAppSettingsObjectByObjectId(
    { objectId: "..." },
  );
```

### getAppSettingsObjects

**appSettingsObjectsClient.getAppSettingsObjects(config): Promise\<[AppSettingsObjectsList](#appsettingsobjectslist)>**

Lists persisted settings objects

**Required scope:** app-settings:objects:read

Lists persisted settings objects for selected schemas.

If nothing is persisted or if all persisted settings objects are not accessible due to missing permissions, no items will be returned.

To query the effective values (including schema defaults) please see getEffectiveAppSettingsValues.

Properties of type **secret** will be included in plain text if the call originates from a serverless function of your app; they will have irreversibly masked values otherwise. This protects these secrets from leaking to users of your app or other third parties.

#### Parameters

| Name               | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields   | string  | A list of fields to be included in the response. The provided set of fields extends the default set. Specify the required top-level fields, separated by commas (for example, **summary,value**). Supported fields: **objectId**, **version**, **summary**, **searchSummary**, **schemaId**, **schemaVersion**, **modificationInfo**, **resourceContext**, **value**, **owner**. Default fields: objectId, version. <br /><br />**Default:** `objectId, version`                                                                                                                                                                                                                                                |
| config.adminAccess | boolean | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.filter      | string  | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following fields: * `modificationInfo.createdBy`
* `modificationInfo.createdTime`
* `modificationInfo.lastModifiedBy`
* `modificationInfo.lastModifiedTime`
* `value`
   with properties and sub-properties separated by dot (for example,&#x20;
  `value.owningApp = 'Notebooks'`
  )
* `owner.type`
* `owner.id` If this parameter is omitted, all settings objects will be returned. The maximum nesting depth (via parentheses) is 5. The maximum expression length is 1024 characters. Note that only fields included to the response via `add-fields` can be used for filtering. |
| config.pageKey     | string  | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.pageSize    | number  | The amount of settings objects in a single response payload. If set to 0, all available settings objects will be included in the response. The maximal allowed page size is 500. If not set, 100 is used. <br /><br />**Default:** `100`<br />**Minimum:** `0`                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| config.schemaId    | string  | Schema ID to which the requested objects belong. To load the first page, when the **nextPageKey** is not set, this parameter is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.sort        | string  | The sort parameter, as explained [here](https://dt-url.net/platform-services-filtering). Sorting is supported on the following fields: * `modificationInfo.createdBy`
* `modificationInfo.createdTime`
* `modificationInfo.lastModifiedBy`
* `modificationInfo.lastModifiedTime`
* `value`
   with properties and sub-properties separated by dot (for example,&#x20;
  `value.owningApp`
  ) Note that only fields included to the response via `add-fields` can be used for sorting.                                                                                                                                                                                                                          |

#### Returns

| Return type                                       | Status code | Description                     |
| ------------------------------------------------- | ----------- | ------------------------------- |
| [AppSettingsObjectsList](#appsettingsobjectslist) | 200         | Success. Uses chunked encoding. |

Even if a response returns a successful response code it is possible that the result is incomplete due to an internal error.

In this case an 'error' property with information about the problem is added. The caller may decide to work with the incomplete result or do a retry of the operation.|

#### Throws

| Error Type         | Error Message                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| ErrorResponseError | Failed. The input is invalid. \| Failed. Forbidden. \| Failed. The specified schema was not found. |
| TooManyRequests    | Failed. Too many requests.                                                                         |
| ServiceUnavailable | Failed. Service unavailable.                                                                       |
| GeneralError       | Error.                                                                                             |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.getAppSettingsObjects();
```

### getAppSettingsPermissionByObjectIdAndAccessorId

**appSettingsObjectsClient.getAppSettingsPermissionByObjectIdAndAccessorId(config): Promise\<[AppSettingsAccessorPermissions](#appsettingsaccessorpermissions)>**

**Required scope:** app-settings:objects:read

Get current permissions of the accessor on this object

#### Parameters

| Name                           | Type              | Description                                                                                                                                                         |
| ------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.accessorId (required)   | string            | The user uuid or group uuid of the accessor, depending on the type                                                                                                  |
| config.accessorType (required) | "user" \| "group" | The type of the accessor                                                                                                                                            |
| config.adminAccess             | boolean           | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required)     | string            | The ID of the required settings object                                                                                                                              |

#### Returns

| Return type                                                       | Status code | Description |
| ----------------------------------------------------------------- | ----------- | ----------- |
| [AppSettingsAccessorPermissions](#appsettingsaccessorpermissions) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| ErrorResponseError | No object available for the given objectId or the accessor doesn't have any permissions on this object |
| TooManyRequests    | Failed. Too many requests.                                                                             |
| ServiceUnavailable | Failed. Service unavailable.                                                                           |
| GeneralError       | Error.                                                                                                 |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.getAppSettingsPermissionByObjectIdAndAccessorId(
    {
      objectId: "...",
      accessorType: "user",
      accessorId: "...",
    },
  );
```

### getAppSettingsPermissionsByObjectId

**appSettingsObjectsClient.getAppSettingsPermissionsByObjectId(config): Promise\<[AppSettingsAccessorPermissionsList](#appsettingsaccessorpermissionslist)>**

**Required scope:** app-settings:objects:read

Get current permissions on this object

#### Parameters

| Name                       | Type    | Description                                                                                                                                                         |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required) | string  | The ID of the required settings object                                                                                                                              |

#### Returns

| Return type                                                               | Status code | Description |
| ------------------------------------------------------------------------- | ----------- | ----------- |
| [AppSettingsAccessorPermissionsList](#appsettingsaccessorpermissionslist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                              |
| ------------------ | ------------------------------------------ |
| ErrorResponseError | No object available for the given objectId |
| TooManyRequests    | Failed. Too many requests.                 |
| ServiceUnavailable | Failed. Service unavailable.               |
| GeneralError       | Error.                                     |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.getAppSettingsPermissionsByObjectId(
    { objectId: "..." },
  );
```

### getEffectiveAppSettingsValues

**appSettingsObjectsClient.getEffectiveAppSettingsValues(config): Promise\<[EffectiveAppSettingsValuesList](#effectiveappsettingsvalueslist)>**

Lists effective settings values

**Required scope:** app-settings:objects:read

Lists effective settings values for selected schemas.
If no object is persisted for a schema with **"multiObject": false**, the default value as defined in the schema will be returned.

Properties of type **secret** will be included in plain text if the call originates from a serverless function of your app; they will have irreversibly masked values otherwise. This protects these secrets from leaking to users of your app or other third parties.

#### Parameters

| Name               | Type    | Description                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields   | string  | A list of fields to be included in the response. The provided set of fields extends the default set. Specify the required top-level fields, separated by commas (for example, **summary,schemaId**). Supported fields: **summary**, **searchSummary**, **schemaId**, **schemaVersion**, **modificationInfo**, **value**. Default fields: value. <br /><br />**Default:** `value` |
| config.adminAccess | boolean | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false`                                                                                                                                                                                                              |
| config.pageKey     | string  | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters.                                                                      |
| config.pageSize    | number  | The amount of settings objects in a single response payload. If set to 0, all available settings objects will be included in the response. The maximal allowed page size is 500. If not set, 100 is used. <br /><br />**Default:** `100`<br />**Minimum:** `0`                                                                                                                   |
| config.schemaId    | string  | Schema ID to which the requested objects belong. Only considered on load of the first page, when the **nextPageKey** is not set.                                                                                                                                                                                                                                                 |

#### Returns

| Return type                                                       | Status code | Description                     |
| ----------------------------------------------------------------- | ----------- | ------------------------------- |
| [EffectiveAppSettingsValuesList](#effectiveappsettingsvalueslist) | 200         | Success. Uses chunked encoding. |

Even if a response returns a successful response code it is possible that the result is incomplete due to an internal error.

In this case an 'error' property with information about the problem is added. The caller may decide to work with the incomplete result or do a retry of the operation.|

#### Throws

| Error Type         | Error Message                                                               |
| ------------------ | --------------------------------------------------------------------------- |
| ErrorResponseError | Failed. The input is invalid. \| Failed. The specified schema is not found. |
| TooManyRequests    | Failed. Too many requests.                                                  |
| ServiceUnavailable | Failed. Service unavailable.                                                |
| GeneralError       | Error.                                                                      |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.getEffectiveAppSettingsValues();
```

### postAppSettingsObject

**appSettingsObjectsClient.postAppSettingsObject(config): Promise\<void | [AppSettingsObjectResponse](#appsettingsobjectresponse)>**

Creates a new settings object

**Required scope:** app-settings:objects:write

Creates a new settings object.

#### Parameters

| Name                   | Type                                                | Description                                                                                                                         |
| ---------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [AppSettingsObjectCreate](#appsettingsobjectcreate) |                                                                                                                                     |
| config.validateOnly    | boolean                                             | If `true`, the request runs only validation of the submitted settings objects, without saving them.<br /><br />**Default:** `false` |

#### Returns

| Return type                                             | Status code | Description                    |
| ------------------------------------------------------- | ----------- | ------------------------------ |
| void                                                    | 200         | Success. No validation errors. |
| [AppSettingsObjectResponse](#appsettingsobjectresponse) | 201         | Created                        |

#### Throws

| Error Type          | Error Message                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| ErrorResponseError  | Failed. The input is invalid. \| Failed. Forbidden. \| Failed. The requested resource doesn't exist. |
| ConflictingResource | Failed. Conflicting resource.                                                                        |
| TooManyRequests     | Failed. Too many requests.                                                                           |
| ServiceUnavailable  | Failed. Service unavailable.                                                                         |
| GeneralError        | Error.                                                                                               |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.postAppSettingsObject({
    body: { schemaId: "jira-connection", value: {} },
  });
```

### postAppSettingsOwnershipByObjectId

**appSettingsObjectsClient.postAppSettingsOwnershipByObjectId(config): Promise\<void>**

**Required scope:** app-settings:objects:write

Transfer ownership of the object, only the owner or the main admin is allowed to transfer the ownership (IAM permission needed).

#### Parameters

| Name                       | Type                                                                        | Description                                                                                                                                                         |
| -------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean                                                                     | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.body (required)     | [AppSettingsTransferOwnershipRequest](#appsettingstransferownershiprequest) |                                                                                                                                                                     |
| config.objectId (required) | string                                                                      | The ID of the required settings object                                                                                                                              |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 204         | Success     |

#### Throws

| Error Type         | Error Message                              |
| ------------------ | ------------------------------------------ |
| ErrorResponseError | No object available for the given objectId |
| TooManyRequests    | Failed. Too many requests.                 |
| ServiceUnavailable | Failed. Service unavailable.               |
| GeneralError       | Error.                                     |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.postAppSettingsOwnershipByObjectId(
    {
      objectId: "...",
      body: { newOwner: { type: "user" } },
    },
  );
```

### postAppSettingsPermissionByObjectId

**appSettingsObjectsClient.postAppSettingsPermissionByObjectId(config): Promise\<[AppSettingsAccessorPermissions](#appsettingsaccessorpermissions)>**

**Required scope:** app-settings:objects:write

Add the permissions for a single accessor on this object, anyone with write permissions is allowed to add more permissions

#### Parameters

| Name                       | Type                                                              | Description                                                                                                                                                         |
| -------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean                                                           | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.body (required)     | [AppSettingsAccessorPermissions](#appsettingsaccessorpermissions) |                                                                                                                                                                     |
| config.objectId (required) | string                                                            | The ID of the required settings object                                                                                                                              |

#### Returns

| Return type                                                       | Status code | Description |
| ----------------------------------------------------------------- | ----------- | ----------- |
| [AppSettingsAccessorPermissions](#appsettingsaccessorpermissions) | 201         | Success     |

#### Throws

| Error Type         | Error Message                                                               |
| ------------------ | --------------------------------------------------------------------------- |
| ErrorResponseError | if accessor id already exists \| No object available for the given objectId |
| TooManyRequests    | Failed. Too many requests.                                                  |
| ServiceUnavailable | Failed. Service unavailable.                                                |
| GeneralError       | Error.                                                                      |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.postAppSettingsPermissionByObjectId(
    {
      objectId: "...",
      body: { accessor: { type: "user" }, permissions: {} },
    },
  );
```

### putAppSettingsAllUsersPermissionByObjectId

**appSettingsObjectsClient.putAppSettingsAllUsersPermissionByObjectId(config): Promise\<void>**

**Required scope:** app-settings:objects:write

Update the permissions for an existing all-users accessor on this object, anyone with write permissions is allowed to update permissions

#### Parameters

| Name                       | Type                                                                        | Description                                                                                                                                                         |
| -------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean                                                                     | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.body (required)     | [AppSettingsUpdatePermissionsRequest](#appsettingsupdatepermissionsrequest) |                                                                                                                                                                     |
| config.objectId (required) | string                                                                      | The ID of the required settings object                                                                                                                              |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | success     |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorResponseError | if permission list is empty, contains unsupported entries or unsupported combinations of entries \| No object available for the given objectId or the all-users accessor doesn't have any permissions on this object |
| TooManyRequests    | Failed. Too many requests.                                                                                                                                                                                           |
| ServiceUnavailable | Failed. Service unavailable.                                                                                                                                                                                         |
| GeneralError       | Error.                                                                                                                                                                                                               |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.putAppSettingsAllUsersPermissionByObjectId(
    { objectId: "...", body: { permissions: {} } },
  );
```

### putAppSettingsObjectByObjectId

**appSettingsObjectsClient.putAppSettingsObjectByObjectId(config): Promise\<[AppSettingsUpdateResponse](#appsettingsupdateresponse)>**

Updates an existing settings object

**Required scope:** app-settings:objects:write

Updates an existing settings object with new values. To update a property of the `secret` type you need to pass the new value unmasked. To keep the current value, send the current masked secret. You can obtain it via GET an object endpoint.

Some schemas don't allow passing of the masked secret. In that case you need to send the unmasked secret with every update of the object.

#### Parameters

| Name                                       | Type                                                | Description                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.adminAccess                         | boolean                                             | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false`                                                                                                                                                            |
| config.body (required)                     | [AppSettingsObjectUpdate](#appsettingsobjectupdate) |                                                                                                                                                                                                                                                                                                                                |
| config.objectId (required)                 | string                                              | The ID of the required settings object                                                                                                                                                                                                                                                                                         |
| config.optimisticLockingVersion (required) | string                                              | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. |

#### Returns

| Return type                                             | Status code | Description |
| ------------------------------------------------------- | ----------- | ----------- |
| [AppSettingsUpdateResponse](#appsettingsupdateresponse) | 200         | Success     |

#### Throws

| Error Type          | Error Message                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| ErrorResponseError  | Failed. The input is invalid. \| Failed. Forbidden. \| Failed. The requested resource doesn't exist. |
| ConflictingResource | Failed. Conflicting resource.                                                                        |
| TooManyRequests     | Failed. Too many requests.                                                                           |
| ServiceUnavailable  | Failed. Service unavailable.                                                                         |
| GeneralError        | Error.                                                                                               |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.putAppSettingsObjectByObjectId(
    {
      objectId: "...",
      optimisticLockingVersion: "...",
      body: { value: {} },
    },
  );
```

### putAppSettingsPermissionByObjectIdAndAccessorId

**appSettingsObjectsClient.putAppSettingsPermissionByObjectIdAndAccessorId(config): Promise\<void>**

**Required scope:** app-settings:objects:write

Update the permissions for an existing accessor on this object, anyone with write permissions is allowed to update permissions

#### Parameters

| Name                           | Type                                                                        | Description                                                                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.accessorId (required)   | string                                                                      | The user uuid or group uuid of the accessor, depending on the type                                                                                                  |
| config.accessorType (required) | "user" \| "group"                                                           | The type of the accessor                                                                                                                                            |
| config.adminAccess             | boolean                                                                     | If set to true and user has app-settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.body (required)         | [AppSettingsUpdatePermissionsRequest](#appsettingsupdatepermissionsrequest) |                                                                                                                                                                     |
| config.objectId (required)     | string                                                                      | The ID of the required settings object                                                                                                                              |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | success     |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorResponseError | if permission list is empty, contains unsupported entries or unsupported combinations of entries \| No object available for the given objectId or the accessor doesn't have any permissions on this object |
| TooManyRequests    | Failed. Too many requests.                                                                                                                                                                                 |
| ServiceUnavailable | Failed. Service unavailable.                                                                                                                                                                               |
| GeneralError       | Error.                                                                                                                                                                                                     |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.putAppSettingsPermissionByObjectIdAndAccessorId(
    {
      objectId: "...",
      accessorType: "user",
      accessorId: "...",
      body: { permissions: {} },
    },
  );
```

### resolveEffectivePermissions

**appSettingsObjectsClient.resolveEffectivePermissions(config): Promise\<[EffectivePermissions](#effectivepermissions)>**

Get the effective settings permissions of the calling user in the environment

**All the following scopes are required:**

- app-settings:objects:read
- app-settings:objects:write

**One of the following permissions is required:**

- app-settings:objects:read
- app-settings:objects:write

#### Parameters

| Name                   | Type                                    |
| ---------------------- | --------------------------------------- |
| config.body (required) | [ResolutionRequest](#resolutionrequest) |

#### Throws

| Error Type         | Error Message                                                                |
| ------------------ | ---------------------------------------------------------------------------- |
| ErrorResponseError | Failed. The input is invalid. \| Failed. Forbidden. No access to any schema. |
| GeneralError       | Error.                                                                       |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings-v2";

const data =
  await appSettingsObjectsClient.resolveEffectivePermissions(
    {
      body: {
        permissions: [
          {
            permission: "app-settings:objects:read",
            context: { schemaId: "..." },
          },
        ],
      },
    },
  );
```
