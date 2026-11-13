## usersAndGroupsClient

```js
import { usersAndGroupsClient } from '@dynatrace-sdk/client-iam';
```

### getActiveUserFromOrganizationalLevel

**usersAndGroupsClient.getActiveUserFromOrganizationalLevel(config): Promise\<[RestUserPublic](#restuserpublic)>**

Get active user from organizational level

**Required scope:** iam:users:read

Authorization is based on an assignment of the calling user to the account associated with the 'level-type' and 'level-id' For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment

#### Parameters

| Name                        | Type   | Description                                                                                                                                                                                                                                  |
| --------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.levelId (required)   | string | Identifier of 'level-type'. Max allowed length is 36. For account use its UUID. For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment |
| config.levelType (required) | string | Allowed values: account, environment                                                                                                                                                                                                         |
| config.uuid (required)      | string | User UUID                                                                                                                                                                                                                                    |

#### Returns

| Return type                       | Status code | Description               |
| --------------------------------- | ----------- | ------------------------- |
| [RestUserPublic](#restuserpublic) | 200         | User fetched successfully |

#### Throws

| Error Type                            | Error Message                                                                                                                                                                                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PublicExceptionMessageError           | Authorization header is missing or is incorrect. \| Execution user is not allowed to perform the action. \| Calling user is not assigned to the requested account or requested environment is not assigned to account that user is assigned to or the 'level-id' does not exist |
| PublicExceptionThrottlingMessageError | Too many requests have been sent - requests are throttled                                                                                                                                                                                                                       |

**Code example**

```ts
import { usersAndGroupsClient } from "@dynatrace-sdk/client-iam";

const data =
  await usersAndGroupsClient.getActiveUserFromOrganizationalLevel(
    { levelType: "...", levelId: "...", uuid: "..." },
  );
```

### getActiveUsersForOrganizationalLevel

**usersAndGroupsClient.getActiveUsersForOrganizationalLevel(config): Promise\<[RestUserPublicListResponse](#restuserpubliclistresponse)>**

Get active users from organizational level

**Required scope:** iam:users:read

Providing value for at least one of the parameters: 'partialString' or 'uuid' is required.
If both query params 'partialString' and 'uuid' are provided then the result returns users meeting any of the filtering criteria.
Returned users are first ordered by name and then by surname.
Authorization is based on an assignment of the calling user to the account associated with the 'level-type' and 'level-id' For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment

#### Parameters

| Name                        | Type           | Description                                                                                                                                                                                                                                                               |
| --------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.levelId (required)   | string         | Identifier of 'level-type'. Max allowed length is 36. For account use its UUID. For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment                              |
| config.levelType (required) | string         | Allowed values: account, environment                                                                                                                                                                                                                                      |
| config.page                 | number         | Offset-based Pagination - page. Default value: 1. Page number to return. Offset-based Pagination can't be used with Cursor-based Pagination!                                                                                                                              |
| config.pageKey              | string         | Cursor-based Pagination - page-key. Cursor to the next page, includes page number and filtering values. Implicit filtering values will be overwritten by page-key property. Cursor-based Pagination can't be used together with Offset-based Pagination! Max length: 2000 |
| config.pageSize             | number         | Pagination - page size. Default value: 1000. Minimum value: 1. Maximum value: 1000<br /><br />**Default:** `1000`<br />**Minimum:** `1`                                                                                                                                   |
| config.partialString        | string         | Filter value - searches for users whose email contains provided value AND users whose 'name surname' or 'surname name' starts with provided value. Minimum length: 3. Maximum length: 320                                                                                 |
| config.uuid                 | Array\<string> | List of user UUIDs. Filter value - equals. Allows multiple values. Maximum allowed size: 25                                                                                                                                                                               |

#### Returns

| Return type                                               | Status code | Description                                              |
| --------------------------------------------------------- | ----------- | -------------------------------------------------------- |
| [RestUserPublicListResponse](#restuserpubliclistresponse) | 200         | Users from the organizational level fetched successfully |

#### Throws

| Error Type                            | Error Message                                                                                                                                                                                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PublicExceptionMessageError           | Authorization header is missing or is incorrect. \| Execution user is not allowed to perform the action. \| Calling user is not assigned to the requested account or requested environment is not assigned to account that user is assigned to or the 'level-id' does not exist |
| PublicExceptionThrottlingMessageError | Too many requests have been sent - requests are throttled                                                                                                                                                                                                                       |

**Code example**

```ts
import { usersAndGroupsClient } from "@dynatrace-sdk/client-iam";

const data =
  await usersAndGroupsClient.getActiveUsersForOrganizationalLevel(
    { levelType: "...", levelId: "..." },
  );
```

### getActiveUsersForOrganizationalLevelPost

**usersAndGroupsClient.getActiveUsersForOrganizationalLevelPost(config): Promise\<[RestUserPublicListResponse](#restuserpubliclistresponse)>**

Get active users from organizational level

**Required scope:** iam:users:read

It is required to provide either request body containing list of user UUIDs or partialString.
If both are provided then the result returns users meeting any of the provided criteria.
Returned users are first ordered by name and then by surname.
Authorization is based on an assignment of the calling user to the account associated with the 'level-type' and 'level-id' For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment

#### Parameters

| Name                        | Type           | Description                                                                                                                                                                                                                                                               |
| --------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required)      | Array\<string> |                                                                                                                                                                                                                                                                           |
| config.levelId (required)   | string         | Identifier of 'level-type'. Max allowed length is 36. For account use its UUID. For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment                              |
| config.levelType (required) | string         | Allowed values: account, environment                                                                                                                                                                                                                                      |
| config.page                 | number         | Offset-based Pagination - page. Default value: 1. Page number to return. Offset-based Pagination can't be used with Cursor-based Pagination!                                                                                                                              |
| config.pageKey              | string         | Cursor-based Pagination - page-key. Cursor to the next page, includes page number and filtering values. Implicit filtering values will be overwritten by page-key property. Cursor-based Pagination can't be used together with Offset-based Pagination! Max length: 2000 |
| config.pageSize             | number         | Pagination - page size. Default value: 1000. Minimum value: 1. Maximum value: 1000<br /><br />**Default:** `1000`<br />**Minimum:** `1`                                                                                                                                   |
| config.partialString        | string         | Filter value - searches for users whose email contains provided value AND users whose 'name surname' or 'surname name' starts with provided value. Minimum length: 3. Maximum length: 320                                                                                 |

#### Returns

| Return type                                                                                                                                                     | Description                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[RestUserPublicListResponse](#restuserpubliclistresponse)> | Users from the organizational level fetched successfully |

#### Throws

| Error Type                            | Error Message                                                                                                                                                                                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PublicExceptionMessageError           | Authorization header is missing or is incorrect. \| Execution user is not allowed to perform the action. \| Calling user is not assigned to the requested account or requested environment is not assigned to account that user is assigned to or the 'level-id' does not exist |
| PublicExceptionThrottlingMessageError | Too many requests have been sent - requests are throttled                                                                                                                                                                                                                       |

**Code example**

```ts
import { usersAndGroupsClient } from "@dynatrace-sdk/client-iam";

const data =
  await usersAndGroupsClient.getActiveUsersForOrganizationalLevelPost(
    { levelType: "...", levelId: "...", body: ["..."] },
  );
```

### getAvailableServiceUsers

**usersAndGroupsClient.getAvailableServiceUsers(config): Promise\<[SearchResult](#searchresult)>**

Get active service users from organizational level which are usable by the execution user

**Required scope:** iam:service-users:use

Environment-level queries are executed in account context because there is no direct link between environments and service users.

#### Parameters

| Name                        | Type   | Description                                                                                                                                                                                                                                                               |
| --------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.levelId (required)   | string | Identifier of 'level-type'. Max allowed length is 36. For account use its UUID. For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment                              |
| config.levelType (required) | string | Allowed values: account, environment                                                                                                                                                                                                                                      |
| config.page                 | number | Offset-based Pagination - page. Default value: 1. Page number to return. Offset-based Pagination can't be used with Cursor-based Pagination!                                                                                                                              |
| config.pageKey              | string | Cursor-based Pagination - page-key. Cursor to the next page, includes page number and filtering values. Implicit filtering values will be overwritten by page-key property. Cursor-based Pagination can't be used together with Offset-based Pagination! Max length: 2000 |
| config.pageSize             | number | Pagination - page size. Default value: 1000. Minimum value: 1. Maximum value: 1000<br /><br />**Minimum:** `1`                                                                                                                                                            |

#### Returns

| Return type                   | Status code | Description                                                                                          |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| [SearchResult](#searchresult) | 200         | Active service users from the organizational level filtered by user permissions fetched successfully |

#### Throws

| Error Type                            | Error Message                                                                                                                                   |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| PublicExceptionMessageError           | Authorization header is missing or is incorrect. \| Execution user is not allowed to perform the action. \| The 'level-id' param does not exist |
| PublicExceptionThrottlingMessageError | Too many requests have been sent - requests are throttled                                                                                       |

**Code example**

```ts
import { usersAndGroupsClient } from "@dynatrace-sdk/client-iam";

const data =
  await usersAndGroupsClient.getAvailableServiceUsers({
    levelType: "...",
    levelId: "...",
  });
```

### getVisibleGroupsForAccount

**usersAndGroupsClient.getVisibleGroupsForAccount(config): Promise\<[RestGroupPublicListResponse](#restgrouppubliclistresponse)>**

Get visible groups from organizational level

**Required scope:** iam:groups:read

Providing value for at least one of the parameters: 'partialGroupName' or 'uuid' is required.
If both query params 'partialGroupName' and 'uuid' are provided then the result will be all of the groups meeting any of the filtering criteria.
Authorization is based on an assignment of the calling user to the account associated with the 'level-type' and 'level-id' For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment

#### Parameters

| Name                        | Type           | Description                                                                                                                                                                                                                                                               |
| --------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.levelId (required)   | string         | Identifier of 'level-type'. Max allowed length is 36. For account use its UUID. For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment                              |
| config.levelType (required) | string         | Allowed values: account, environment                                                                                                                                                                                                                                      |
| config.page                 | number         | Offset-based Pagination - page. Default value: 1. Page number to return. Offset-based Pagination can't be used with Cursor-based Pagination!                                                                                                                              |
| config.pageKey              | string         | Cursor-based Pagination - page-key. Cursor to the next page, includes page number and filtering values. Implicit filtering values will be overwritten by page-key property. Cursor-based Pagination can't be used together with Offset-based Pagination! Max length: 2000 |
| config.pageSize             | number         | Pagination - page size. Default value: 1000. Minimum value: 1. Maximum value: 1000<br /><br />**Default:** `1000`<br />**Minimum:** `1`                                                                                                                                   |
| config.partialGroupName     | string         | Filter value - contains. Minimum length: 3. Maximum length: 320                                                                                                                                                                                                           |
| config.uuid                 | Array\<string> | List of group UUIDs. Filter value - equals.  Allows definition of multiple values. Maximum allowed size: 10                                                                                                                                                               |

#### Returns

| Return type                                                 | Status code | Description                                |
| ----------------------------------------------------------- | ----------- | ------------------------------------------ |
| [RestGroupPublicListResponse](#restgrouppubliclistresponse) | 200         | Groups from the level fetched successfully |

#### Throws

| Error Type                            | Error Message                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PublicExceptionMessageError           | Missing both 'partialGroupName' and 'uuid' filter values, or the values don't meet the requirements. \| Authorization header is missing or is incorrect. \| Execution user is not allowed to perform the action. \| Calling user is not assigned to the requested account or requested environment is not assigned to account that user is assigned to or the 'level-id' does not exist |
| PublicExceptionThrottlingMessageError | Too many requests have been sent - requests are throttled                                                                                                                                                                                                                                                                                                                               |

**Code example**

```ts
import { usersAndGroupsClient } from "@dynatrace-sdk/client-iam";

const data =
  await usersAndGroupsClient.getVisibleGroupsForAccount({
    levelType: "...",
    levelId: "...",
  });
```

### getVisibleGroupsForAccountPost

**usersAndGroupsClient.getVisibleGroupsForAccountPost(config): Promise\<[RestGroupPublicListResponse](#restgrouppubliclistresponse)>**

Get visible groups from organizational level

**Required scope:** iam:groups:read

It is required to provide at either request body containing list of group uuids or partialGroupName.
If both are provided then the result returns groups meeting any of the provided criteria.
Authorization is based on an assignment of the calling user to the account associated with the 'level-type' and 'level-id' For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment

#### Parameters

| Name                        | Type           | Description                                                                                                                                                                                                                                                               |
| --------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required)      | Array\<string> |                                                                                                                                                                                                                                                                           |
| config.levelId (required)   | string         | Identifier of 'level-type'. Max allowed length is 36. For account use its UUID. For environment 'level-type' user has to be assigned to account to which the environment is assigned, user does not need any permissions in such environment                              |
| config.levelType (required) | string         | Allowed values: account, environment                                                                                                                                                                                                                                      |
| config.page                 | number         | Offset-based Pagination - page. Default value: 1. Page number to return. Offset-based Pagination can't be used with Cursor-based Pagination!                                                                                                                              |
| config.pageKey              | string         | Cursor-based Pagination - page-key. Cursor to the next page, includes page number and filtering values. Implicit filtering values will be overwritten by page-key property. Cursor-based Pagination can't be used together with Offset-based Pagination! Max length: 2000 |
| config.pageSize             | number         | Pagination - page size. Default value: 1000. Minimum value: 1. Maximum value: 1000<br /><br />**Default:** `1000`<br />**Minimum:** `1`                                                                                                                                   |
| config.partialGroupName     | string         | Filter value - contains. Minimum length: 3. Maximum length: 320                                                                                                                                                                                                           |

#### Returns

| Return type                                                                                                                                                       | Description                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[RestGroupPublicListResponse](#restgrouppubliclistresponse)> | Groups from the level fetched successfully |

#### Throws

| Error Type                            | Error Message                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PublicExceptionMessageError           | Missing both 'partialGroupName' and 'uuid' filter values, or the values don't meet requirements. \| Authorization header is missing or is incorrect. \| Execution user is not allowed to perform the action. \| Calling user is not assigned to the requested account or requested environment is not assigned to account that user is assigned to or the 'level-id' does not exist |
| PublicExceptionThrottlingMessageError | Too many requests have been sent - requests are throttled                                                                                                                                                                                                                                                                                                                           |

**Code example**

```ts
import { usersAndGroupsClient } from "@dynatrace-sdk/client-iam";

const data =
  await usersAndGroupsClient.getVisibleGroupsForAccountPost(
    { levelType: "...", levelId: "...", body: ["..."] },
  );
```
