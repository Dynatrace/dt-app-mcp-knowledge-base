## settingsObjectsClient

```js
import { settingsObjectsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### addPermission

**settingsObjectsClient.addPermission(config): Promise\<[AccessorPermissions](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#accessorpermissions)>**

Add the permissions for a single accessor on this object.

**Required scope:** settings:objects:write
**Required permission:** settings:objects:write

Add the permissions for a single accessor on this object, anyone with read/write permissions is allowed to add more permissions.

#### Parameters

| Name                       | Type                                                                                                                              | Description                                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean                                                                                                                           | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.body (required)     | [AccessorPermissions](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#accessorpermissions) |                                                                                                                                 |
| config.objectId (required) | string                                                                                                                            | The ID of the required settings object.                                                                                         |

#### Returns

| Return type                                                                                                                       | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AccessorPermissions](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#accessorpermissions) | 201         | Created     |

#### Throws

| Error Type         | Error Message                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | If accessor id already exists. \| Failed. Forbidden. \| No object available for the given objectId. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await settingsObjectsClient.addPermission({
  objectId: "...",
  body: { accessor: { type: "user" } },
});
```

### deleteSettingsObjectByObjectId

**settingsObjectsClient.deleteSettingsObjectByObjectId(config): Promise\<void>**

Deletes the specified settings object

**Required scope:** settings:objects:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:write

#### Parameters

| Name                       | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects                                                                                                                                                                                                                                                                                         |
| config.objectId (required) | string  | The ID of the required settings object.                                                                                                                                                                                                                                                                                                                                                                                 |
| config.updateToken         | string  | The update token of the object. You can use it to detect simultaneous modifications by different users. It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. If omitted on update/deletion, the operation overrides the current value or deletes it without any checks. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type                  | Error Message                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SettingsObjectResponseError | Failed. Schema validation failed. \| Failed. The requested resource doesn't exist. \| Failed. Conflicting resource. |
| ErrorEnvelopeError          | Failed. Forbidden. \| Client side error. \| Server side error.                                                      |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.deleteSettingsObjectByObjectId(
    { objectId: "..." },
  );
```

### getEffectiveSettingsValues

**settingsObjectsClient.getEffectiveSettingsValues(config): Promise\<[EffectiveSettingsValuesList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#effectivesettingsvalueslist)>**

Lists effective settings values

**Required scope:** settings:objects:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:read

Lists effective settings values for selected schemas at a selected scope (or entity). This operation evaluates the hierarchy of persisted objects (see /settings/objects)

It will always return a result for a schema/scope combination, even if the schema would not be relevant to the given scope/entity.

If no object along the hierarchy is persisted, the default value as defined in the schema will be returned.

**Deprecation notice:** The ability to query values of any schema by leaving out the `schemaIds` parameter in the first-page query is deprecated and will eventually be removed.

#### Parameters

| Name               | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects                                                                                                                                                                                                                                                               |
| config.fields      | string  | A list of fields to be included to the response. The provided set of fields replaces the default set. Specify the required top-level fields, separated by commas (for example, `origin,value`). Supported fields: `summary`, `searchSummary`, `created`, `modified`, `createdBy`, `modifiedBy`, `author`, `origin`, `schemaId`, `schemaVersion`, `value`, `externalId`.                       |
| config.nextPageKey | string  | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                             |
| config.pageSize    | number  | The amount of settings objects in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                                                                                                                   |
| config.schemaIds   | string  | A list of comma-separated schema IDs to which the requested objects belong. Only considered on load of the first page, when the **nextPageKey** is not set.                                                                                                                                                                                                                                   |
| config.scope       | string  | The scope that the requested objects target. The selection only matches objects directly targeting the specified scope. For example, `environment` will not match objects that target a host within environment. For more details, please see [Dynatrace Documentation](https://dt-url.net/ky03459). To load the first page, when the **nextPageKey** is not set, this parameter is required. |

#### Returns

| Return type                                                                                                                                       | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [EffectiveSettingsValuesList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#effectivesettingsvalueslist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The specified schema or scope is not found. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.getEffectiveSettingsValues();
```

### getPermission

**settingsObjectsClient.getPermission(config): Promise\<[AccessorPermissions](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#accessorpermissions)>**

Get current permissions of the accessor on this object.

**Required scope:** settings:objects:read
**Required permission:** settings:objects:read

Get current permissions of the accessor on this object.

#### Parameters

| Name                           | Type              | Description                                                                                                                     |
| ------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.accessorId (required)   | string            | The user uuid or group uuid of the accessor, depending on the type.                                                             |
| config.accessorType (required) | "group" \| "user" | The type of the accessor.                                                                                                       |
| config.adminAccess             | boolean           | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.objectId (required)     | string            | The ID of the required settings object.                                                                                         |

#### Returns

| Return type                                                                                                                       | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AccessorPermissions](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#accessorpermissions) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | No object available for the given objectId or the accessor doesn't have any permissions on this object. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await settingsObjectsClient.getPermission({
  objectId: "...",
  accessorType: "group",
  accessorId: "...",
});
```

### getPermissionAllUsers

**settingsObjectsClient.getPermissionAllUsers(config): Promise\<[AccessorPermissions](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#accessorpermissions)>**

Get current permissions of the all-users accessor on this object.

**Required scope:** settings:objects:read
**Required permission:** settings:objects:read

Get current permissions of the all-users accessor on this object.

#### Parameters

| Name                       | Type    | Description                                                                                                                     |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.objectId (required) | string  | The ID of the required settings object.                                                                                         |

#### Returns

| Return type                                                                                                                       | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AccessorPermissions](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#accessorpermissions) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | No object available for the given objectId or the all-users accessor doesn't have any permissions on this object. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.getPermissionAllUsers({
    objectId: "...",
  });
```

### getPermissions

**settingsObjectsClient.getPermissions(config): Promise\<[AccessorPermissionsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#accessorpermissionslist)>**

Get current permissions on this object.

**Required scope:** settings:objects:read
**Required permission:** settings:objects:read

Get current permissions on this object.

#### Parameters

| Name                       | Type    | Description                                                                                                                     |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.objectId (required) | string  | The ID of the required settings object.                                                                                         |

#### Returns

| Return type                                                                                                                               | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AccessorPermissionsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#accessorpermissionslist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                           |
| ------------------ | --------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | No object available for the given objectId. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await settingsObjectsClient.getPermissions({
  objectId: "...",
});
```

### getSettingsHistory

**settingsObjectsClient.getSettingsHistory(config): Promise\<[RevisionDiffPage](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#revisiondiffpage)>**

Gets the history of settings objects

**Required scope:** settings:objects:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:read

#### Parameters

| Name               | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects                                                                                                                                                                                                                                                                                                                                                                                                                           |
| config.fields      | string  | A list of fields to be included to the response.Specify the required top-level fields, separated by commas (for example, **revision,modificationInfo**). Supported fields: **revision**, **jsonPatch**, **jsonBefore**, **jsonAfter**, **objectId**, **type**, **schemaId**, **schemaVersion**, **schemaDisplayName**, **modificationInfo**, **summary**, **source**, **appId**, **ownerBefore**, **ownerAfter**.(optional, default to revision, modificationInfo)                                                                                        |
| config.filter      | string  | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following fields: * `objectId`
* `modificationInfo.lastModifiedTime` The fields can only be combined with `and` as a boolean operator. If this parameter is omitted only revisions of the last 2 weeks are returned. If **modificationInfo.lastModifiedTime** does not specify a full range, it will be completed with current time minus 1 year for the missing lower bound or the current time for the upper bound. (optional) |
| config.nextPageKey | string  | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                         |
| config.pageSize    | number  | The amount of settings objects in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| config.schemaId    | string  | Schema ID to which the requested revisions belong. In the Dynatrace Platform, this parameter accepts multiple schema IDs separated with commas. In Dynatrace Managed and in SaaS Environments not connected to the Dynatrace Platform, this parameter accepts only a single schema ID, not multiple ones.                                                                                                                                                                                                                                                 |
| config.scope       | string  | The scope that the requested history objects target. The selection only matches revisions directly targeting the specified scope. For example, `environment` will not match objects that target a host within environment. For more details, please see [Dynatrace Documentation](https://dt-url.net/ky03459). To load the first page, when the **nextPageKey** is not set, this parameter is required.                                                                                                                                                   |
| config.sort        | string  | The sort parameter, as explained [here](https://dt-url.net/platform-services-filtering). Sorting is supported on the following fields: * `modificationInfo.lastModifiedTime`
   (optional, default to -modificationInfo.lastModifiedTime)                                                                                                                                                                                                                                                                                                                 |

#### Returns

| Return type                                                                                                                 | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [RevisionDiffPage](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#revisiondiffpage) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | Failed. schemaId contains multiple schemaIds and request was for not for Dynatrace Platform. \| Failed. Forbidden. \| No object available for the given objectId \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.getSettingsHistory();
```

### getSettingsObjectByObjectId

**settingsObjectsClient.getSettingsObjectByObjectId(config): Promise\<[SettingsObjectByObjectIdResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#settingsobjectbyobjectidresponse)>**

Gets the specified settings object

**Required scope:** settings:objects:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:read

#### Parameters

| Name                       | Type    | Description                                                                                                                     |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.objectId (required) | string  | The ID of the required settings object.                                                                                         |

#### Returns

| Return type                                                                                                                                                 | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SettingsObjectByObjectIdResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#settingsobjectbyobjectidresponse) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | Failed. Forbidden. \| No object available for the given objectId \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.getSettingsObjectByObjectId({
    objectId: "...",
  });
```

### getSettingsObjects

**settingsObjectsClient.getSettingsObjects(config): Promise\<[ObjectsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#objectslist)>**

Lists persisted settings objects

**Required scope:** settings:objects:read
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:read

Lists persisted settings objects for selected schemas at selected scopes (or entities).

If nothing is persisted or if all persisted settings objects are not accessible due to missing permissions, no items will be returned.

**Deprecation notice:** The ability to query values of any schema by leaving out the `schemaIds` parameter in the first-page query is deprecated and will eventually be removed.

To query the effective values (including schema defaults) please see /settings/effectiveValues.

#### Parameters

| Name               | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.externalIds | string  | A list of comma-separated external IDs that the requested objects have. Each external ID has a maximum length of 500 characters. Only considered on load of the first page, when the **nextPageKey** is not set.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| config.fields      | string  | A list of fields to be included to the response. The provided set of fields replaces the default set. Specify the required top-level fields, separated by commas (for example, `objectId,value`). Supported fields: `objectId`, `summary`, `searchSummary`, `created`, `modified`, `createdBy`, `modifiedBy`, `author`, `updateToken`, `scope`, `modificationInfo` (deprecated), `resourceContext`, `owner`, `schemaId`, `schemaVersion`, `value`, `externalId`.                                                                                                                                                                                         |
| config.filter      | string  | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following fields: * `created`
* `modified`
* `createdBy`
* `modifiedBy`
* `author`
   (deprecated, will not work for future schemas)
* `value`
   with properties and sub-properties separated by dot (for example,&#x20;
  `value.owningApp = 'Notebooks'`
  ) If this parameter is omitted, all settings objects will be returned. The maximum nesting depth (via parentheses) is 5. The maximum expression length is 1024 characters. Note that only fields included to the response via `fields` can be used for filtering. |
| config.nextPageKey | string  | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                        |
| config.pageSize    | number  | The amount of settings objects in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.schemaIds   | string  | A list of comma-separated schema IDs to which the requested objects belong. To load the first page, when the **nextPageKey** is not set, either this parameter or **scopes** is required. To load all objects belonging to the given schema IDs leave the **scopes** parameter empty.                                                                                                                                                                                                                                                                                                                                                                    |
| config.scopes      | string  | A list of comma-separated scopes, that the requested objects target. The selection only matches objects directly targeting the specified scopes. For example, `environment` will not match objects that target a host within environment. For more details, please see [Dynatrace Documentation](https://dt-url.net/ky03459). To load the first page, when the **nextPageKey** is not set, either this parameter or **schemaIds** is required. To load all objects belonging to the given scopes leave the **schemaIds** parameter empty.                                                                                                                |
| config.sort        | string  | The sort parameter, as explained [here](https://dt-url.net/platform-services-filtering). Sorting is supported on the following fields: * `created`
* `modified`
* `createdBy`
* `modifiedBy`
* `author`
   (deprecated, will not work for future schemas)
* `value`
   with properties and sub-properties separated by dot (for example,&#x20;
  `value.owningApp`
  ) Note that only fields included to the response via `fields` can be used for sorting.                                                                                                                                                                                              |

#### Returns

| Return type                                                                                                       | Status code | Description                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------- |
| [ObjectsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#objectslist) | 200         | Success. Accessible objects returned. |

#### Throws

| Error Type         | Error Message                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. Forbidden. \| Failed. The specified schema or scope is not found. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.getSettingsObjects();
```

### postSettingsObjects

**settingsObjectsClient.postSettingsObjects(config): Promise\<Array\<[SettingsObjectResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#settingsobjectresponse)>>**

Creates a new settings object

**Required scope:** settings:objects:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:write

You can upload several objects at once. In that case each object returns its own response code. Check the response body for details.

#### Parameters

| Name                   | Type                                                                                                                                        | Description                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                                                                                                                                     | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.body (required) | Array\<[SettingsObjectCreate](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#settingsobjectcreate)> |                                                                                                                                 |
| config.validateOnly    | boolean                                                                                                                                     | If `true`, the request runs only validation of the submitted settings objects, without saving them.                             |

#### Returns

| Return type                                                                                                                             | Status code | Description                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------ |
| [SettingsObjectResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#settingsobjectresponse) | 200         | Success                                                                        |
| [SettingsObjectResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#settingsobjectresponse) | 207         | Multi-status: different objects in the payload resulted in different statuses. |

#### Throws

| Error Type                       | Error Message                                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SettingsObjectResponseArrayError | Failed. Schema validation failed. \| Failed. The requested resource doesn't exist. \| Failed. Conflicting resource. |
| ErrorEnvelopeError               | Failed. Forbidden. \| Client side error. \| Server side error.                                                      |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.postSettingsObjects({
    body: [
      {
        schemaId:
          "builtin:container.built-in-monitoring-rule",
        scope: "HOST-D3A3C5A146830A79",
        value: {},
      },
    ],
  });
```

### putSettingsObjectByObjectId

**settingsObjectsClient.putSettingsObjectByObjectId(config): Promise\<[SettingsObjectResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#settingsobjectresponse)>**

Updates an existing settings object

**Required scope:** settings:objects:write
**One of the following permissions is required:**

- environment:roles:manage-settings
- settings:objects:write

To update a property of the `secret` type you need to pass the new value unmasked. To keep the current value, send the current masked secret. You can obtain it via [GET an object](https://dt-url.net/kj036oj) endpoint.

Some schemas don't allow passing of the masked secret. In that case you need to send the unmasked secret with every update of the object.

#### Parameters

| Name                       | Type                                                                                                                                | Description                                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean                                                                                                                             | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.body (required)     | [SettingsObjectUpdate](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#settingsobjectupdate) |                                                                                                                                 |
| config.objectId (required) | string                                                                                                                              | The ID of the required settings object.                                                                                         |
| config.validateOnly        | boolean                                                                                                                             | If `true`, the request runs only validation of the submitted settings object, without saving it.                                |

#### Returns

| Return type                                                                                                                             | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [SettingsObjectResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#settingsobjectresponse) | 200         | Success     |

#### Throws

| Error Type                  | Error Message                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SettingsObjectResponseError | Failed. Schema validation failed. \| Failed. The requested resource doesn't exist. \| Failed. Conflicting resource. |
| ErrorEnvelopeError          | Failed. Forbidden. \| Client side error. \| Server side error.                                                      |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.putSettingsObjectByObjectId({
    objectId: "...",
    body: { value: {} },
  });
```

### removePermission

**settingsObjectsClient.removePermission(config): Promise\<void>**

Remove the permissions for an existing accessor on this object.

**Required scope:** settings:objects:write
**Required permission:** settings:objects:write

Remove the permissions for an existing accessor on this object, anyone with read/write permissions is allowed to delete permissions.

#### Parameters

| Name                           | Type              | Description                                                                                                                     |
| ------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.accessorId (required)   | string            | The user uuid or group uuid of the accessor, depending on the type.                                                             |
| config.accessorType (required) | "group" \| "user" | The type of the accessor.                                                                                                       |
| config.adminAccess             | boolean           | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.objectId (required)     | string            | The ID of the required settings object.                                                                                         |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 204         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | No object available for the given objectId or the accessor doesn't have any permissions on this object. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await settingsObjectsClient.removePermission({
  objectId: "...",
  accessorType: "group",
  accessorId: "...",
});
```

### removePermissionAllUsers

**settingsObjectsClient.removePermissionAllUsers(config): Promise\<void>**

Remove the permissions for an existing all-users accessor on this object.

**Required scope:** settings:objects:write
**Required permission:** settings:objects:write

Remove the permissions for an existing all-users accessor on this object, anyone with read/write permissions is allowed to delete permissions.

#### Parameters

| Name                       | Type    | Description                                                                                                                     |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.objectId (required) | string  | The ID of the required settings object.                                                                                         |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 204         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | No object available for the given objectId or the all-users accessor doesn't have any permissions on this object. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.removePermissionAllUsers({
    objectId: "...",
  });
```

### resolveEffectivePermissions

**settingsObjectsClient.resolveEffectivePermissions(config): Promise\<Array\<[EffectivePermission](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#effectivepermission)>>**

Get the effective settings permissions of the calling user in the environment

**One of the following scopes is required:**

- settings:objects:write
- settings:objects:read
- settings:schemas:read

**One of the following permissions is required:**

- environment:roles:viewer
- settings:schemas:read

#### Parameters

| Name                   | Type                                                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [ResolutionRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#resolutionrequest) |

#### Returns

| Return type                                                                                                                       | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [EffectivePermission](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#effectivepermission) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. Forbidden. No access to any settings. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.resolveEffectivePermissions({
    body: {
      permissions: [
        {
          context: {
            schemaId: "service:schema",
            scope: "environment",
          },
          permission: "settings:objects:write",
        },
      ],
    },
  });
```

### transferOwnership

**settingsObjectsClient.transferOwnership(config): Promise\<void>**

Transfer ownership of the object.

**Required scope:** settings:objects:write
**Required permission:** settings:objects:write

Transfer ownership of the object, only the owner or the main admin is allowed to transfer the ownership (IAM permission needed).

#### Parameters

| Name                       | Type                                                                                                                                        | Description                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean                                                                                                                                     | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.body (required)     | [TransferOwnershipRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#transferownershiprequest) |                                                                                                                                 |
| config.objectId (required) | string                                                                                                                                      | The ID of the required settings object.                                                                                         |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. Forbidden. \| No object available for the given objectId. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await settingsObjectsClient.transferOwnership({
  objectId: "...",
  body: { newOwner: { type: "user" } },
});
```

### updatePermission

**settingsObjectsClient.updatePermission(config): Promise\<void>**

Update the permissions for an existing accessor on this object.

**Required scope:** settings:objects:write
**Required permission:** settings:objects:write

Update the permissions for an existing accessor on this object, anyone with read/write permissions is allowed to update permissions.

#### Parameters

| Name                           | Type                                                                                                                                        | Description                                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.accessorId (required)   | string                                                                                                                                      | The user uuid or group uuid of the accessor, depending on the type.                                                             |
| config.accessorType (required) | "group" \| "user"                                                                                                                           | The type of the accessor.                                                                                                       |
| config.adminAccess             | boolean                                                                                                                                     | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.body (required)         | [UpdatePermissionsRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatepermissionsrequest) |                                                                                                                                 |
| config.objectId (required)     | string                                                                                                                                      | The ID of the required settings object.                                                                                         |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                                            |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | If permission list is empty, contains unsupported entries or unsupported combinations of entries. \| No object available for the given objectId or the accessor doesn't have any permissions on this object. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await settingsObjectsClient.updatePermission({
  objectId: "...",
  accessorType: "group",
  accessorId: "...",
  body: {},
});
```

### updatePermissionAllUsers

**settingsObjectsClient.updatePermissionAllUsers(config): Promise\<void>**

Update the permissions for an existing all-users accessor on this object.

**Required scope:** settings:objects:write
**Required permission:** settings:objects:write

Update the permissions for an existing all-users accessor on this object, anyone with read/write permissions is allowed to update permissions.

#### Parameters

| Name                       | Type                                                                                                                                        | Description                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean                                                                                                                                     | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects |
| config.body (required)     | [UpdatePermissionsRequest](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#updatepermissionsrequest) |                                                                                                                                 |
| config.objectId (required) | string                                                                                                                                      | The ID of the required settings object.                                                                                         |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | If permission list is empty, contains unsupported entries or unsupported combinations of entries. \| No object available for the given objectId or the all-users accessor doesn't have any permissions on this object. \| Client side error. \| Server side error. |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await settingsObjectsClient.updatePermissionAllUsers({
    objectId: "...",
    body: {},
  });
```
