## settingsPermissionsClient

```js
import { settingsPermissionsClient } from '@dynatrace-sdk/client-settings';
```

### addSettingsObjectAccessorPermissions

**settingsPermissionsClient.addSettingsObjectAccessorPermissions(config): Promise\<[AccessorPermissions](#accessorpermissions)>**

**Required scope:** settings:objects:write

Add the permissions for a single accessor on this object, anyone with write permissions is allowed to add more permissions

#### Parameters

| Name                       | Type                                        | Description                                                                                                                                                     |
| -------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean                                     | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.body (required)     | [AccessorPermissions](#accessorpermissions) |                                                                                                                                                                 |
| config.objectId (required) | string                                      | The ID of the required settings object                                                                                                                          |

#### Returns

| Return type                                 | Status code | Description |
| ------------------------------------------- | ----------- | ----------- |
| [AccessorPermissions](#accessorpermissions) | 201         | Success.    |

#### Throws

| Error Type                        | Error Message                               |
| --------------------------------- | ------------------------------------------- |
| BadRequestAccessorIdAlreadyExists | If accessor id already exists.              |
| NotFoundObject                    | No object available for the given objectId. |
| TooManyRequests                   | Failed. Too many requests.                  |
| ServiceUnavailable                | Failed. Service unavailable.                |
| GeneralError                      | Error.                                      |

**Code example**

```ts
import { settingsPermissionsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsPermissionsClient.addSettingsObjectAccessorPermissions(
    {
      objectId: "...",
      body: { accessor: { type: "user" }, permissions: {} },
    },
  );
```

### deleteSettingsObjectAccessorPermissions

**settingsPermissionsClient.deleteSettingsObjectAccessorPermissions(config): Promise\<void>**

**Required scope:** settings:objects:write

Remove the permissions for an existing accessor on this object, anyone with write permissions is allowed to delete permissions

#### Parameters

| Name                           | Type              | Description                                                                                                                                                     |
| ------------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.accessorId (required)   | string            | The user uuid or group uuid of the accessor, depending on the type                                                                                              |
| config.accessorType (required) | "user" \| "group" | The type of the accessor                                                                                                                                        |
| config.adminAccess             | boolean           | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required)     | string            | The ID of the required settings object                                                                                                                          |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 204         | Success.    |

#### Throws

| Error Type                    | Error Message                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| NotFoundObjectOrNoPermissions | No object available for the given objectId or the accessor doesn't have any permissions on this object. |
| TooManyRequests               | Failed. Too many requests.                                                                              |
| ServiceUnavailable            | Failed. Service unavailable.                                                                            |
| GeneralError                  | Error.                                                                                                  |

**Code example**

```ts
import { settingsPermissionsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsPermissionsClient.deleteSettingsObjectAccessorPermissions(
    {
      objectId: "...",
      accessorType: "user",
      accessorId: "...",
    },
  );
```

### deleteSettingsObjectAllUsersPermissions

**settingsPermissionsClient.deleteSettingsObjectAllUsersPermissions(config): Promise\<void>**

**Required scope:** settings:objects:write

Remove the permissions for an existing all-users accessor on this object, anyone with write permissions is allowed to delete permissions

#### Parameters

| Name                       | Type    | Description                                                                                                                                                     |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required) | string  | The ID of the required settings object                                                                                                                          |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 204         | Success.    |

#### Throws

| Error Type                            | Error Message                                                                                                     |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| NotFoundObjectOrAllUsersNoPermissions | No object available for the given objectId or the all-users accessor doesn't have any permissions on this object. |
| TooManyRequests                       | Failed. Too many requests.                                                                                        |
| ServiceUnavailable                    | Failed. Service unavailable.                                                                                      |
| GeneralError                          | Error.                                                                                                            |

**Code example**

```ts
import { settingsPermissionsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsPermissionsClient.deleteSettingsObjectAllUsersPermissions(
    { objectId: "..." },
  );
```

### getSettingsObjectAccessorPermissions

**settingsPermissionsClient.getSettingsObjectAccessorPermissions(config): Promise\<[AccessorPermissions](#accessorpermissions)>**

**Required scope:** settings:objects:read

Get current permissions of the accessor on this object

#### Parameters

| Name                           | Type              | Description                                                                                                                                                     |
| ------------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.accessorId (required)   | string            | The user uuid or group uuid of the accessor, depending on the type                                                                                              |
| config.accessorType (required) | "user" \| "group" | The type of the accessor                                                                                                                                        |
| config.adminAccess             | boolean           | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required)     | string            | The ID of the required settings object                                                                                                                          |

#### Returns

| Return type                                 | Status code | Description |
| ------------------------------------------- | ----------- | ----------- |
| [AccessorPermissions](#accessorpermissions) | 200         | Success.    |

#### Throws

| Error Type                    | Error Message                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| NotFoundObjectOrNoPermissions | No object available for the given objectId or the accessor doesn't have any permissions on this object. |
| TooManyRequests               | Failed. Too many requests.                                                                              |
| ServiceUnavailable            | Failed. Service unavailable.                                                                            |
| GeneralError                  | Error.                                                                                                  |

**Code example**

```ts
import { settingsPermissionsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsPermissionsClient.getSettingsObjectAccessorPermissions(
    {
      objectId: "...",
      accessorType: "user",
      accessorId: "...",
    },
  );
```

### getSettingsObjectAllUsersPermissions

**settingsPermissionsClient.getSettingsObjectAllUsersPermissions(config): Promise\<[AccessorPermissions](#accessorpermissions)>**

**Required scope:** settings:objects:read

Get current permissions of the all-users accessor on this object

#### Parameters

| Name                       | Type    | Description                                                                                                                                                     |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required) | string  | The ID of the required settings object                                                                                                                          |

#### Returns

| Return type                                 | Status code | Description |
| ------------------------------------------- | ----------- | ----------- |
| [AccessorPermissions](#accessorpermissions) | 200         | Success.    |

#### Throws

| Error Type                            | Error Message                                                                                                     |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| NotFoundObjectOrAllUsersNoPermissions | No object available for the given objectId or the all-users accessor doesn't have any permissions on this object. |
| TooManyRequests                       | Failed. Too many requests.                                                                                        |
| ServiceUnavailable                    | Failed. Service unavailable.                                                                                      |
| GeneralError                          | Error.                                                                                                            |

**Code example**

```ts
import { settingsPermissionsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsPermissionsClient.getSettingsObjectAllUsersPermissions(
    { objectId: "..." },
  );
```

### getSettingsObjectPermissions

**settingsPermissionsClient.getSettingsObjectPermissions(config): Promise\<[AccessorPermissionsList](#accessorpermissionslist)>**

**Required scope:** settings:objects:read

Get current permissions on this object

#### Parameters

| Name                       | Type    | Description                                                                                                                                                     |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.objectId (required) | string  | The ID of the required settings object                                                                                                                          |

#### Returns

| Return type                                         | Status code | Description |
| --------------------------------------------------- | ----------- | ----------- |
| [AccessorPermissionsList](#accessorpermissionslist) | 200         | Success.    |

#### Throws

| Error Type         | Error Message                               |
| ------------------ | ------------------------------------------- |
| NotFoundObject     | No object available for the given objectId. |
| TooManyRequests    | Failed. Too many requests.                  |
| ServiceUnavailable | Failed. Service unavailable.                |
| GeneralError       | Error.                                      |

**Code example**

```ts
import { settingsPermissionsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsPermissionsClient.getSettingsObjectPermissions(
    { objectId: "..." },
  );
```

### resolveEffectivePermissions

**settingsPermissionsClient.resolveEffectivePermissions(config): Promise\<[EffectivePermissions](#effectivepermissions)>**

Get the effective settings permissions of the calling user in the environment

**Required scope:** settings:schemas:read

#### Parameters

| Name                   | Type                                    |
| ---------------------- | --------------------------------------- |
| config.body (required) | [ResolutionRequest](#resolutionrequest) |

#### Throws

| Error Type              | Error Message                               |
| ----------------------- | ------------------------------------------- |
| BadRequestInvalidInput  | Failed. The input is invalid.               |
| ForbiddenNoSchemaAccess | Failed. Forbidden. No access to any schema. |
| TooManyRequests         | Failed. Too many requests.                  |
| ServiceUnavailable      | Failed. Service unavailable.                |
| GeneralError            | Error.                                      |

**Code example**

```ts
import { settingsPermissionsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsPermissionsClient.resolveEffectivePermissions(
    {
      body: {
        permissions: [
          {
            permission: "settings:objects:read",
            context: { schemaId: "...", scope: "..." },
          },
        ],
      },
    },
  );
```

### transferSettingsObjectOwnership

**settingsPermissionsClient.transferSettingsObjectOwnership(config): Promise\<void>**

**Required scope:** settings:objects:write

Change owner of the object, only the owner or the main admin is allowed to transfer the ownership (IAM permission needed).

#### Parameters

| Name                       | Type                                                  | Description                                                                                                                                                     |
| -------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean                                               | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.body (required)     | [TransferOwnershipRequest](#transferownershiprequest) |                                                                                                                                                                 |
| config.objectId (required) | string                                                | The ID of the required settings object                                                                                                                          |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 204         | Success.    |

#### Throws

| Error Type         | Error Message                               |
| ------------------ | ------------------------------------------- |
| NotFoundObject     | No object available for the given objectId. |
| TooManyRequests    | Failed. Too many requests.                  |
| ServiceUnavailable | Failed. Service unavailable.                |
| GeneralError       | Error.                                      |

**Code example**

```ts
import { settingsPermissionsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsPermissionsClient.transferSettingsObjectOwnership(
    {
      objectId: "...",
      body: { newOwner: { type: "user" } },
    },
  );
```

### updateSettingsObjectAccessorPermissions

**settingsPermissionsClient.updateSettingsObjectAccessorPermissions(config): Promise\<void>**

**Required scope:** settings:objects:write

Update the permissions for an existing accessor on this object, anyone with write permissions is allowed to update permissions

#### Parameters

| Name                           | Type                                                  | Description                                                                                                                                                     |
| ------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.accessorId (required)   | string                                                | The user uuid or group uuid of the accessor, depending on the type                                                                                              |
| config.accessorType (required) | "user" \| "group"                                     | The type of the accessor                                                                                                                                        |
| config.adminAccess             | boolean                                               | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.body (required)         | [UpdatePermissionsRequest](#updatepermissionsrequest) |                                                                                                                                                                 |
| config.objectId (required)     | string                                                | The ID of the required settings object                                                                                                                          |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success.    |

#### Throws

| Error Type                      | Error Message                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| BadRequestPermissionListInvalid | If permission list is empty, contains unsupported entries or unsupported combinations of entries.       |
| NotFoundObjectOrNoPermissions   | No object available for the given objectId or the accessor doesn't have any permissions on this object. |
| TooManyRequests                 | Failed. Too many requests.                                                                              |
| ServiceUnavailable              | Failed. Service unavailable.                                                                            |
| GeneralError                    | Error.                                                                                                  |

**Code example**

```ts
import { settingsPermissionsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsPermissionsClient.updateSettingsObjectAccessorPermissions(
    {
      objectId: "...",
      accessorType: "user",
      accessorId: "...",
      body: { permissions: {} },
    },
  );
```

### updateSettingsObjectAllUsersPermissions

**settingsPermissionsClient.updateSettingsObjectAllUsersPermissions(config): Promise\<void>**

**Required scope:** settings:objects:write

Update the permissions for an existing all-users accessor on this object, anyone with write permissions is allowed to update permissions

#### Parameters

| Name                       | Type                                                  | Description                                                                                                                                                     |
| -------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.adminAccess         | boolean                                               | If set to true and user has settings:objects:admin permission, the endpoint will act as if the user is the owner of all objects<br /><br />**Default:** `false` |
| config.body (required)     | [UpdatePermissionsRequest](#updatepermissionsrequest) |                                                                                                                                                                 |
| config.objectId (required) | string                                                | The ID of the required settings object                                                                                                                          |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success.    |

#### Throws

| Error Type                            | Error Message                                                                                                     |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| BadRequestPermissionListInvalid       | If permission list is empty, contains unsupported entries or unsupported combinations of entries.                 |
| NotFoundObjectOrAllUsersNoPermissions | No object available for the given objectId or the all-users accessor doesn't have any permissions on this object. |
| TooManyRequests                       | Failed. Too many requests.                                                                                        |
| ServiceUnavailable                    | Failed. Service unavailable.                                                                                      |
| GeneralError                          | Error.                                                                                                            |

**Code example**

```ts
import { settingsPermissionsClient } from "@dynatrace-sdk/client-settings";

const data =
  await settingsPermissionsClient.updateSettingsObjectAllUsersPermissions(
    { objectId: "...", body: { permissions: {} } },
  );
```
