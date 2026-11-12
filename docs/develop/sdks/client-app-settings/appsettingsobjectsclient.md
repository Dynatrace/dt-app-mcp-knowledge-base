## appSettingsObjectsClient

```js
import { appSettingsObjectsClient } from '@dynatrace-sdk/client-app-settings';
```

### ~~deleteAppSettingsObjectByObjectId~~

> ⚠️ **Deprecated**

**appSettingsObjectsClient.deleteAppSettingsObjectByObjectId(config): Promise\<void>**

Deletes the specified settings object

**Required scope:** app-settings:objects:write
**Required permission:** app-settings:objects:write

#### Parameters

| Name                                       | Type   | Description                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.objectId (required)                 | string | The ID of the required settings object.                                                                                                                                                                                                                                                                                        |
| config.optimisticLockingVersion (required) | string | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type                    | Error Message                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AppSettingsErrorEnvelopeError | Failed. The input is invalid. \| Failed. Forbidden. \| Failed. The requested resource doesn't exist. \| Failed. Conflicting resource. |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings";

const data =
  await appSettingsObjectsClient.deleteAppSettingsObjectByObjectId(
    { objectId: "...", optimisticLockingVersion: "..." },
  );
```

### ~~getAppSettingsObjectByObjectId~~

> ⚠️ **Deprecated**

**appSettingsObjectsClient.getAppSettingsObjectByObjectId(config): Promise\<[AppSettingsObject](#appsettingsobject)>**

Gets the specified settings object

**Required scope:** app-settings:objects:read
**Required permission:** app-settings:objects:read

Gets the specified settings object. Properties of type **secret** will be included in plain text if the call originates from a serverless function of your app; they will have irreversibly masked values otherwise. This protects these secrets from leaking to users of your app or other third parties.

#### Parameters

| Name                       | Type   | Description                             |
| -------------------------- | ------ | --------------------------------------- |
| config.objectId (required) | string | The ID of the required settings object. |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [AppSettingsObject](#appsettingsobject) | 200         | Success     |

#### Throws

| Error Type                    | Error Message                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| AppSettingsErrorEnvelopeError | Failed. The input is invalid. \| Failed. Forbidden. \| No object available for the given objectId |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings";

const data =
  await appSettingsObjectsClient.getAppSettingsObjectByObjectId(
    { objectId: "..." },
  );
```

### ~~getAppSettingsObjects~~

> ⚠️ **Deprecated**

**appSettingsObjectsClient.getAppSettingsObjects(config): Promise\<[AppSettingsObjectsList](#appsettingsobjectslist)>**

Lists persisted settings objects

**Required scope:** app-settings:objects:read
**Required permission:** app-settings:objects:read

Lists persisted settings objects for selected schemas.

If nothing is persisted or if all persisted settings objects are not accessible due to missing permissions, no items will be returned.

To query the effective values (including schema defaults) please see getEffectiveAppSettingsValues.

Properties of type **secret** will be included in plain text if the call originates from a serverless function of your app; they will have irreversibly masked values otherwise. This protects these secrets from leaking to users of your app or other third parties.

#### Parameters

| Name             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields | string | A list of fields to be included to the response. The provided set of fields extends the default set. Specify the required top-level fields, separated by commas (for example, **summary,value**). Supported fields: **objectId**, **version**, **summary**, **searchSummary**, **schemaId**, **schemaVersion**, **modificationInfo**, **resourceContext**, **value**. Default fields: objectId, version. <br /><br />**Default:** `objectId, version` |
| config.pageKey   | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                           |
| config.pageSize  | number | The amount of settings objects in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                                                                                                                                                                           |
| config.schemaIds | string | A list of comma-separated schema IDs to which the requested objects belong. To load the first page, when the **nextPageKey** is not set, this parameter is required.                                                                                                                                                                                                                                                                                  |

#### Returns

| Return type                                       | Status code | Description                           |
| ------------------------------------------------- | ----------- | ------------------------------------- |
| [AppSettingsObjectsList](#appsettingsobjectslist) | 200         | Success. Accessible objects returned. |

Even if a response returns a successful response code it is possible that the result is incomplete due to an internal error.

In this case an 'error' property with information about the problem is added. The caller may decide to work with the incomplete result or do a retry of the operation.|

#### Throws

| Error Type                    | Error Message                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------- |
| AppSettingsErrorEnvelopeError | Failed. The input is invalid. \| Failed. Forbidden. \| Failed. The specified schema was not found. |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings";

const data =
  await appSettingsObjectsClient.getAppSettingsObjects();
```

### ~~getEffectiveAppSettingsValues~~

> ⚠️ **Deprecated**

**appSettingsObjectsClient.getEffectiveAppSettingsValues(config): Promise\<[EffectiveAppSettingsValuesList](#effectiveappsettingsvalueslist)>**

Lists effective settings values

**Required scope:** app-settings:objects:read
**Required permission:** app-settings:objects:read

Lists effective settings values for selected schemas.
If no object is persisted for a schema with **"multiObject": false**, the default value as defined in the schema will be returned.

Properties of type **secret** will be included in plain text if the call originates from a serverless function of your app; they will have irreversibly masked values otherwise. This protects these secrets from leaking to users of your app or other third parties.

#### Parameters

| Name             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields | string | A list of fields to be included to the response. The provided set of fields extends the default set. Specify the required top-level fields, separated by commas (for example, **summary,schemaId**). Supported fields: **summary**, **searchSummary**, **schemaId**, **schemaVersion**, **modificationInfo**, **value**. Default fields: value. <br /><br />**Default:** `value` |
| config.pageKey   | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters.                                                                      |
| config.pageSize  | number | The amount of settings objects in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                                                                                                      |
| config.schemaIds | string | A list of comma-separated schema IDs to which the requested objects belong. Only considered on load of the first page, when the **nextPageKey** is not set.                                                                                                                                                                                                                      |

#### Returns

| Return type                                                       | Status code | Description |
| ----------------------------------------------------------------- | ----------- | ----------- |
| [EffectiveAppSettingsValuesList](#effectiveappsettingsvalueslist) | 200         | Success     |

Even if a response returns a successful response code it is possible that the result is incomplete due to an internal error.

In this case an 'error' property with information about the problem is added. The caller may decide to work with the incomplete result or do a retry of the operation.|

#### Throws

| Error Type                    | Error Message                                                               |
| ----------------------------- | --------------------------------------------------------------------------- |
| AppSettingsErrorEnvelopeError | Failed. The input is invalid. \| Failed. The specified schema is not found. |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings";

const data =
  await appSettingsObjectsClient.getEffectiveAppSettingsValues();
```

### ~~postAppSettingsObject~~

> ⚠️ **Deprecated**

**appSettingsObjectsClient.postAppSettingsObject(config): Promise\<void | [AppSettingsObjectResponse](#appsettingsobjectresponse)>**

Creates a new settings object

**Required scope:** app-settings:objects:write
**Required permission:** app-settings:objects:write

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

| Error Type                    | Error Message                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AppSettingsErrorEnvelopeError | Failed. The input is invalid. \| Failed. Forbidden. \| Failed. The requested resource doesn't exist. \| Failed. Conflicting resource. |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings";

const data =
  await appSettingsObjectsClient.postAppSettingsObject({
    body: { schemaId: "jira-connection", value: {} },
  });
```

### ~~putAppSettingsObjectByObjectId~~

> ⚠️ **Deprecated**

**appSettingsObjectsClient.putAppSettingsObjectByObjectId(config): Promise\<void>**

Updates an existing settings object

**Required scope:** app-settings:objects:write
**Required permission:** app-settings:objects:write

Updates an existing settings object with new values. To update a property of the `secret` type you need to pass the new value unmasked. To keep the current value, send the current masked secret. You can obtain it via [GET an object](https://dt-url.net/kj036oj) endpoint.

Some schemas don't allow passing of the masked secret. In that case you need to send the unmasked secret with every update of the object.

#### Parameters

| Name                                       | Type                                                | Description                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.body (required)                     | [AppSettingsObjectUpdate](#appsettingsobjectupdate) |                                                                                                                                                                                                                                                                                                                                |
| config.objectId (required)                 | string                                              | The ID of the required settings object.                                                                                                                                                                                                                                                                                        |
| config.optimisticLockingVersion (required) | string                                              | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type                    | Error Message                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AppSettingsErrorEnvelopeError | Failed. The input is invalid. \| Failed. Forbidden. \| Failed. The requested resource doesn't exist. \| Failed. Conflicting resource. |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings";

const data =
  await appSettingsObjectsClient.putAppSettingsObjectByObjectId(
    {
      objectId: "...",
      optimisticLockingVersion: "...",
      body: { value: {} },
    },
  );
```

### ~~resolveEffectivePermissions~~

> ⚠️ **Deprecated**

**appSettingsObjectsClient.resolveEffectivePermissions(config): Promise\<[EffectivePermissions](#effectivepermissions)>**

Get the effective settings permissions of the calling user in the environment

**Required scope:** app-settings:objects:read or app-settings:objects:write
**Required permission:** app-settings:objects:read or app-settings:objects:write

#### Parameters

| Name                   | Type                                    |
| ---------------------- | --------------------------------------- |
| config.body (required) | [ResolutionRequest](#resolutionrequest) |

#### Throws

| Error Type                    | Error Message                                                                           |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| AppSettingsErrorEnvelopeError | Failed. The input is invalid. \| Failed. Forbidden. No access to any schema. \| Failed. |

**Code example**

```ts
import { appSettingsObjectsClient } from "@dynatrace-sdk/client-app-settings";

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
