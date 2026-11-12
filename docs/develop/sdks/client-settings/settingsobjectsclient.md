## settingsObjectsClient

```js
import { settingsObjectsClient } from '@dynatrace-sdk/client-settings';
```

### deleteSettingsObject

**settingsObjectsClient.deleteSettingsObject(config): Promise\<void>**

Deletes the specified settings object

**Required scope:** settings:objects:write

#### Parameters

| Name                                       | Type    | Description                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess                         | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false`                                                                                                                                                               |
| config.objectId (required)                 | string  | The ID of the required settings object                                                                                                                                                                                                                                                                                        |
| config.optimisticLockingVersion (required) | string  | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. |
| config.validateOnly                        | boolean | If `true`, the request runs only validation for the deletion of the settings object, without actually deleting it.<br /><br />**Default:** `false`                                                                                                                                                                            |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type             | Error Message                                 |
| ---------------------- | --------------------------------------------- |
| BadRequestInvalidInput | Failed. The input is invalid.                 |
| Forbidden              | Failed. Forbidden.                            |
| NotFoundResource       | Failed. The requested resource doesn't exist. |
| ConflictingResource    | Failed. Conflicting resource.                 |
| TooManyRequests        | Failed. Too many requests.                    |
| ServiceUnavailable     | Failed. Service unavailable.                  |
| GeneralError           | Error.                                        |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsObjectsClient.deleteSettingsObject({
    objectId: "...",
    optimisticLockingVersion: "...",
  });
```

### getSettingsObject

**settingsObjectsClient.getSettingsObject(config): Promise\<[SettingsObject](#settingsobject)>**

Gets the specified settings object

**Required scope:** settings:objects:read

Gets the specified settings object. Properties of type **secret** will be included in plain text if the call originates from a serverless function of your app; they will have irreversibly masked values otherwise. This protects these secrets from leaking to users of your app or other third parties.

#### Parameters

| Name                       | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields           | string  | A list of fields to be included in the response. The provided set of fields extends the default set. Specify the required top-level fields, separated by commas (for example, **summary,value**). Supported fields: **objectId**, **version**, **summary**, **searchSummary**, **scope**, **schemaId**, **schemaVersion**, **modificationInfo**, **resourceContext**, **value**, **owner**, **externalId**. Default fields: objectId, version, scope, schemaId, schemaVersion, value, externalId. <br /><br />**Default:** `objectId, version, scope, schemaId, schemaVersion, value, externalId` |
| config.adminAccess         | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| config.objectId (required) | string  | The ID of the required settings object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

#### Returns

| Return type                       | Status code | Description |
| --------------------------------- | ----------- | ----------- |
| [SettingsObject](#settingsobject) | 200         | Success.    |

#### Throws

| Error Type             | Error Message                               |
| ---------------------- | ------------------------------------------- |
| BadRequestInvalidInput | Failed. The input is invalid.               |
| Forbidden              | Failed. Forbidden.                          |
| NotFoundObject         | No object available for the given objectId. |
| TooManyRequests        | Failed. Too many requests.                  |
| ServiceUnavailable     | Failed. Service unavailable.                |
| GeneralError           | Error.                                      |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-settings";

const data = await settingsObjectsClient.getSettingsObject({
  objectId: "...",
});
```

### listEffectiveSettingsValues

**settingsObjectsClient.listEffectiveSettingsValues(config): Promise\<[EffectiveSettingsValuesList](#effectivesettingsvalueslist)>**

Lists effective settings values

**Required scope:** settings:objects:read

Lists effective settings values for selected schema.
If no object is persisted for a schema with **"multiObject": false**, the default value as defined in the schema will be returned.

#### Parameters

| Name                            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.addFields                | string  | A list of fields to be included in the response. The provided set of fields extends the default set. Specify the required top-level fields, separated by commas (for example, **summary,origin**). Supported fields: **summary**, **searchSummary**, **schemaId**, **schemaVersion**, **origin**, **modificationInfo**, **value**. Default fields: value. <br /><br />**Default:** `value` |
| config.adminAccess              | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false`                                                                                                                                                                                                                            |
| config.optimisticLockingVersion | string  | The version of the objects list for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval of the list of objects (GET requests).  If specified and modifications were made between retrieval and the request, the request will fail.                                                                                   |
| config.pageKey                  | string  | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters except the **optimistic-locking-version** parameter.                            |
| config.pageSize                 | number  | The amount of settings objects in a single response payload. The maximal allowed page size is 500. If not set, the response won't be paged. <br /><br />**Minimum:** `1`                                                                                                                                                                                                                   |
| config.schemaId                 | string  | Schema ID to which the requested objects belong. Only considered on load of the first page, when the **page-key** isn't set.                                                                                                                                                                                                                                                               |
| config.scope                    | string  | Scope to which the requested objects belong. Only considered on load of the first page, when the **page-key** isn't set.                                                                                                                                                                                                                                                                   |

#### Returns

| Return type                                                 | Status code | Description                     |
| ----------------------------------------------------------- | ----------- | ------------------------------- |
| [EffectiveSettingsValuesList](#effectivesettingsvalueslist) | 200         | Success. Uses chunked encoding. |

Even if a response returns a successful response code it's possible that the result is incomplete due to an internal error.

In this case an 'error' property with information about the problem is added. The caller may decide to work with the incomplete result or do a retry of the operation.|

#### Throws

| Error Type               | Error Message                                                                                                                                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BadRequestInvalidInput   | Failed. The input is invalid.                                                                                                                                                                                                    |
| NotFoundSchemaIsNotFound | Failed. The specified schema isn't found.                                                                                                                                                                                        |
| ListVersionMismatch      | Paging data is outdated. The data has been modified since the initial request, query again from the first page to ensure a consistent result or rerun the same query without the optimistic locking version parameter to ignore. |
| TooManyRequests          | Failed. Too many requests.                                                                                                                                                                                                       |
| ServiceUnavailable       | Failed. Service unavailable.                                                                                                                                                                                                     |
| GeneralError             | Error.                                                                                                                                                                                                                           |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsObjectsClient.listEffectiveSettingsValues();
```

### listSettingsObjects

**settingsObjectsClient.listSettingsObjects(config): Promise\<[SettingsObjectsList](#settingsobjectslist)>**

Lists persisted settings objects

**Required scope:** settings:objects:read

Lists persisted settings objects for selected schemas.

If nothing is persisted or if all persisted settings objects aren't accessible due to missing permissions, no items will be returned.

To query the effective values (including schema defaults) see getEffectiveSettingsValues.

#### Parameters

| Name                            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields                | string  | A list of fields to be included in the response. The provided set of fields extends the default set. Specify the required top-level fields, separated by commas (for example, **summary,value**). Supported fields: **objectId**, **version**, **summary**, **searchSummary**, **scope**, **schemaId**, **schemaVersion**, **modificationInfo**, **resourceContext**, **value**, **owner**, **externalId**. Default fields: objectId, version. <br /><br />**Default:** `objectId, version`                                                                                                                                                                                                                                                 |
| config.adminAccess              | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.filter                   | string  | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following fields: * `objectId`
* `modificationInfo.createdBy`
* `modificationInfo.createdTime`
* `modificationInfo.lastModifiedBy`
* `modificationInfo.lastModifiedTime`
* `value`
   with properties and sub-properties separated by dot (for example,&#x20;
  `value.owningApp = 'Notebooks'`
  )
* `externalId`
* `owner.type`
* `owner.id` If this parameter is omitted, all settings objects will be returned. The maximum nesting depth (via parentheses) is 5. The maximum expression length is 1024 characters. Note that only fields included to the response via `add-fields` can be used for filtering. |
| config.optimisticLockingVersion | string  | The version of the objects list for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval of the list of objects (GET requests).  If specified and modifications were made between retrieval and the request, the request will fail.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.pageKey                  | string  | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters except the **optimistic-locking-version** parameter.                                                                                                                                                                                                                                                                                                                                                                             |
| config.pageSize                 | number  | The amount of settings objects in a single response payload. The maximal allowed page size is 500. If not set, the response won't be paged. <br /><br />**Minimum:** `1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.schemaId                 | string  | Schema ID to which the requested objects belong. To load the first page, when the **page-key** isn't  set, this parameter is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| config.scope                    | string  | Scope to which the requested objects belong. To load the first page, when the **page-key** isn't  set, this parameter is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.sort                     | string  | The sort parameter, as explained [here](https://dt-url.net/platform-services-filtering). Sorting is supported on the following fields: * `modificationInfo.createdBy`
* `modificationInfo.createdTime`
* `modificationInfo.lastModifiedBy`
* `modificationInfo.lastModifiedTime`
* `value`
   with properties and sub-properties separated by dot (for example,&#x20;
  `value.owningApp`
  ) Note that only fields included to the response via `add-fields` can be used for sorting.                                                                                                                                                                                                                                                      |

#### Returns

| Return type                                 | Status code | Description                     |
| ------------------------------------------- | ----------- | ------------------------------- |
| [SettingsObjectsList](#settingsobjectslist) | 200         | Success. Uses chunked encoding. |

Even if a response returns a successful response code it's possible that the result is incomplete due to an internal error.

In this case an 'error' property with information about the problem is added. The caller may decide to work with the incomplete result or do a retry of the operation.|

#### Throws

| Error Type             | Error Message                                                                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BadRequestInvalidInput | Failed. The input is invalid.                                                                                                                                                                                                    |
| Forbidden              | Failed. Forbidden.                                                                                                                                                                                                               |
| NotFoundSchema         | Failed. The specified schema wasn't found.                                                                                                                                                                                       |
| ListVersionMismatch    | Paging data is outdated. The data has been modified since the initial request, query again from the first page to ensure a consistent result or rerun the same query without the optimistic locking version parameter to ignore. |
| TooManyRequests        | Failed. Too many requests.                                                                                                                                                                                                       |
| ServiceUnavailable     | Failed. Service unavailable.                                                                                                                                                                                                     |
| GeneralError           | Error.                                                                                                                                                                                                                           |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsObjectsClient.listSettingsObjects();
```

### reorderSettingsObjects

**settingsObjectsClient.reorderSettingsObjects(config): Promise\<[ReorderResponse](#reorderresponse)>**

Reorder multi-object settings objects

**Required scope:** settings:objects:write

Reorders settings objects for schemas defined as multi-object and ordered.

The new order is defined by the list of object IDs in the request body.  If any objects change in the meantime, the reorder will be rejected to  prevent overwriting concurrent changes, even if the changed objects aren't  part of the defined reorder sections.

#### Parameters

| Name                                       | Type                              | Description                                                                                                                                                                                                                                                                                        |
| ------------------------------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required)                     | [ReorderRequest](#reorderrequest) |                                                                                                                                                                                                                                                                                                    |
| config.optimisticLockingVersion (required) | string                            | The version of the objects for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval of the list of objects (GET requests). The reorder  will be allowed only if there wasn't any change between the retrieval and the update. |

#### Returns

| Return type                         | Status code | Description |
| ----------------------------------- | ----------- | ----------- |
| [ReorderResponse](#reorderresponse) | 200         | Success.    |

#### Throws

| Error Type             | Error Message                                 |
| ---------------------- | --------------------------------------------- |
| BadRequestInvalidInput | Failed. The input is invalid.                 |
| Forbidden              | Failed. Forbidden.                            |
| NotFoundResource       | Failed. The requested resource doesn't exist. |
| ConflictingResource    | Failed. Conflicting resource.                 |
| TooManyRequests        | Failed. Too many requests.                    |
| ServiceUnavailable     | Failed. Service unavailable.                  |
| GeneralError           | Error.                                        |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsObjectsClient.reorderSettingsObjects({
    optimisticLockingVersion: "...",
    body: {
      schemaId: "builtin:schema",
      scope: "environment",
      sections: [
        {
          firstObjectId: "...",
          lastObjectId: "...",
          order: [{ objectId: "..." }],
        },
      ],
    },
  });
```

### updateSettingsObject

**settingsObjectsClient.updateSettingsObject(config): Promise\<void | [SettingsUpdateResponse](#settingsupdateresponse)>**

Updates an existing settings object

**Required scope:** settings:objects:write

Updates an existing settings object with new values. To update a property of the `secret` type you need to pass the new value unmasked. To keep the current value, send the current masked secret. You can obtain it via GET an object endpoint.

Some schemas don't allow passing of the masked secret. In that case you need to send the unmasked secret with every update of the object.

#### Parameters

| Name                                       | Type                                          | Description                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess                         | boolean                                       | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false`                                                                                                                                                               |
| config.body (required)                     | [SettingsObjectUpdate](#settingsobjectupdate) |                                                                                                                                                                                                                                                                                                                               |
| config.objectId (required)                 | string                                        | The ID of the required settings object                                                                                                                                                                                                                                                                                        |
| config.optimisticLockingVersion (required) | string                                        | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. |
| config.validateOnly                        | boolean                                       | If `true`, the request runs only validation of the submitted settings object, without saving it.<br /><br />**Default:** `false`                                                                                                                                                                                              |

#### Returns

| Return type                                       | Status code | Description                    |
| ------------------------------------------------- | ----------- | ------------------------------ |
| [SettingsUpdateResponse](#settingsupdateresponse) | 200         | Success.                       |
| void                                              | 204         | Success. No validation errors. |

#### Throws

| Error Type             | Error Message                                 |
| ---------------------- | --------------------------------------------- |
| BadRequestInvalidInput | Failed. The input is invalid.                 |
| Forbidden              | Failed. Forbidden.                            |
| NotFoundResource       | Failed. The requested resource doesn't exist. |
| ConflictingResource    | Failed. Conflicting resource.                 |
| TooManyRequests        | Failed. Too many requests.                    |
| ServiceUnavailable     | Failed. Service unavailable.                  |
| GeneralError           | Error.                                        |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsObjectsClient.updateSettingsObject({
    objectId: "...",
    optimisticLockingVersion: "...",
    body: { value: {} },
  });
```

### upsertSettingsObject

**settingsObjectsClient.upsertSettingsObject(config): Promise\<void | [SettingsObjectResponse](#settingsobjectresponse)>**

Creates a new settings object

**Required scope:** settings:objects:write

#### Parameters

| Name                   | Type                                          | Description                                                                                                                                                     |
| ---------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess     | boolean                                       | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.body (required) | [SettingsObjectCreate](#settingsobjectcreate) |                                                                                                                                                                 |
| config.validateOnly    | boolean                                       | If `true`, the request runs only validation of the submitted settings objects, without saving them.<br /><br />**Default:** `false`                             |

#### Returns

| Return type                                       | Status code | Description                           |
| ------------------------------------------------- | ----------- | ------------------------------------- |
| [SettingsObjectResponse](#settingsobjectresponse) | 200         | Existing object successfully updated. |
| [SettingsObjectResponse](#settingsobjectresponse) | 201         | Created.                              |
| void                                              | 204         | Success. No validation errors.        |

#### Throws

| Error Type             | Error Message                                 |
| ---------------------- | --------------------------------------------- |
| BadRequestInvalidInput | Failed. The input is invalid.                 |
| Forbidden              | Failed. Forbidden.                            |
| NotFoundResource       | Failed. The requested resource doesn't exist. |
| ConflictingResource    | Failed. Conflicting resource.                 |
| TooManyRequests        | Failed. Too many requests.                    |
| ServiceUnavailable     | Failed. Service unavailable.                  |
| GeneralError           | Error.                                        |

**Code example**

```ts
import { settingsObjectsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsObjectsClient.upsertSettingsObject({
    body: {
      schemaId: "jira-connection",
      scope: "environment",
      value: {},
    },
  });
```
