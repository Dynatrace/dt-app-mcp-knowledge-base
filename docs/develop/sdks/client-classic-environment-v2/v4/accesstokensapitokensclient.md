## accessTokensApiTokensClient

```js
import { accessTokensApiTokensClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createApiToken

**accessTokensApiTokensClient.createApiToken(config): Promise\<[ApiTokenCreated](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitokencreated)>**

Creates a new API token

**Required scope:** environment-api:api-tokens:write
**Required permission:** environment:roles:viewer

The newly created token will be owned by the same user who owns the token used for authentication of the call.

Creating personal access tokens requires the `environment:roles:viewer` permission. Creating access tokens requires the `environment:roles:manage-settings` permission.

#### Parameters

| Name                   | Type                                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [ApiTokenCreate](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitokencreate) |

#### Returns

| Return type                                                                                                               | Status code | Description                                                                              |
| ------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| [ApiTokenCreated](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitokencreated) | 201         | Success. The token has been created. The body of the response contains the token secret. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensApiTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensApiTokensClient.createApiToken({
    body: { name: "tokenName", scopes: ["metrics.read"] },
  });
```

### deleteApiToken

**accessTokensApiTokensClient.deleteApiToken(config): Promise\<void>**

Deletes an API token

**Required scope:** environment-api:api-tokens:write
**Required permission:** environment:roles:viewer

#### Parameters

| Name                 | Type   | Description                                                                                                                                                             |
| -------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.id (required) | string | The ID of the token to be deleted. You can specify either the ID or the secret of the token. You can't delete the token you're using for authentication of the request. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | Failed. You can't delete the token you're using for authentication of the request. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensApiTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensApiTokensClient.deleteApiToken({
    id: "...",
  });
```

### getApiToken

**accessTokensApiTokensClient.getApiToken(config): Promise\<[ApiToken](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitoken)>**

Gets API token metadata by token ID

**Required scope:** environment-api:api-tokens:read
**Required permission:** environment:roles:viewer

The token secret is **not** exposed.

#### Parameters

| Name                 | Type   |
| -------------------- | ------ |
| config.id (required) | string |

#### Returns

| Return type                                                                                                 | Status code | Description |
| ----------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ApiToken](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitoken) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensApiTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await accessTokensApiTokensClient.getApiToken({
  id: "...",
});
```

### listApiTokens

**accessTokensApiTokensClient.listApiTokens(config): Promise\<[ApiTokenList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitokenlist)>**

Lists all available API tokens

**Required scope:** environment-api:api-tokens:read
**Required permission:** environment:roles:viewer

You can limit the output by using pagination:

1. Specify the number of results per page in the **pageSize** query parameter.
2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.

#### Parameters

| Name                    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.apiTokenSelector | string | Filters the resulting sets of tokens. Only tokens matching the specified criteria are included into response. You can set one or more of the following criteria: * Owner:&#x20;
  `owner("value")`
  . The user that owns the token. Case-sensitive.
* Personal access token:&#x20;
  `personalAccessToken(false)`
  . Set to&#x20;
  `true`
   to include only personal access tokens or to&#x20;
  `false`
   to include only API tokens.
* Token scope:&#x20;
  `scope("scope1","scope2")`
  . If several values are specified, the&#x20;
  **OR**
   logic applies. To set multiple criteria, separate them with commas (`,`). Only results matching **all** criteria are included into response.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.fields           | string | Specifies the fields to be included in the response. The following fields are included by default: * `id`
* `name`
* `enabled`
* `owner`
* `creationDate` To remove fields from the response, specify them with the minus (`-`) operator as a comma-separated list (for example, `-creationDate,-owner`). You can include additional fields: * &#x20;
  `personalAccessToken`
  &#x20;
* &#x20;
  `expirationDate`
  &#x20;
* &#x20;
  `lastUsedDate`
  &#x20;
* &#x20;
  `lastUsedIpAddress`
  &#x20;
* &#x20;
  `modifiedDate`
  &#x20;
* &#x20;
  `scopes`
  &#x20;
* &#x20;
  `additionalMetadata`
  &#x20; To add fields to the response, specify them with the plus (`+`) operator as a comma-separated list (for example, `+expirationDate,+scopes`). You can combine adding and removing of fields (for example, `+scopes,-creationDate`). Alternatively, you can define the desired set of fields in the response. Specify the required fields as a comma-separated list, without operators (for example, `creationDate,expirationDate,owner`). The ID is always included in the response. The **fields** string must be URL-encoded. |
| config.from             | string | Filters tokens based on the last usage time. The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20;                                                                                                               |
| config.nextPageKey      | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.pageSize         | number | The amount of API tokens in a single response payload. The maximal allowed page size is 10000 and the minimal allowed page size is 100. If not set, 200 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| config.sort             | string | The sort order of the token list. You can sort by the following properties with a sign prefix for the sort order: * `name`
  : token name (
  `+`
   a...z or&#x20;
  `-`
   z...a)
* `lastUsedDate`
   last used (
  `+`
   never used tokens first&#x20;
  `-`
   most recently used tokens first)
* `creationDate`
   (
  `+`
   oldest tokens first&#x20;
  `-`
   newest tokens first)
* `expirationDate`
   (
  `+`
   tokens that expire soon first&#x20;
  `-`
   unlimited tokens first)
* `modifiedDate`
   last modified (
  `+`
   never modified tokens first&#x20;
  `-`
   most recently modified tokens first) If no prefix is set, + is used. If not set, tokens are sorted by creation date with newest first.                                                                                                                                                                                                                                                                                                                                                                                                               |
| config.to               | string | Filters tokens based on the last usage time. The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
* Human-readable format of&#x20;
  `2021-01-25T05:57:01.123+01:00`
  . If no time zone is specified, UTC is used. You can use a space character instead of the&#x20;
  `T`
  . Seconds and fractions of a second are optional.
* Relative timeframe, back from now. The format is&#x20;
  `now-NU/A`
  , where&#x20;
  `N`
   is the amount of time,&#x20;
  `U`
   is the unit of time, and&#x20;
  `A`
   is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example,&#x20;
  `now-1y/w`
   is one year back, aligned by a week. You can also specify relative timeframe without an alignment:&#x20;
  `now-NU`
  . Supported time units for the relative timeframe are:&#x20;
  - `m`
    : minutes
  - `h`
    : hours
  - `d`
    : days
  - `w`
    : weeks
  - `M`
    : months
  - `y`
    : years
  &#x20; If not set, the current timestamp is used.                                                                      |

#### Returns

| Return type                                                                                                         | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ApiTokenList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitokenlist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensApiTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensApiTokensClient.listApiTokens();
```

### lookupApiToken

**accessTokensApiTokensClient.lookupApiToken(config): Promise\<[ApiToken](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitoken)>**

Gets API token metadata by token secret

**Required scope:** environment-api:api-tokens:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                   | Type                                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [ApiTokenSecret](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitokensecret) |

#### Returns

| Return type                                                                                                 | Status code | Description |
| ----------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ApiToken](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitoken) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensApiTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensApiTokensClient.lookupApiToken({
    body: {
      token:
        "dt0c01.ST2EY72KQINMH574WMNVI7YN.G3DFPBEJYMODIDAEX454M7YWBUVEFOWKPRVMWFASS64NFH52PX6BNDVFFM572RZM",
    },
  });
```

### updateApiToken

**accessTokensApiTokensClient.updateApiToken(config): Promise\<void>**

Updates an API token

**Required scope:** environment-api:api-tokens:write
**Required permission:** environment:roles:viewer

#### Parameters

| Name                   | Type                                                                                                                    | Description                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [ApiTokenUpdate](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#apitokenupdate) |                                                                                                                |
| config.id (required)   | string                                                                                                                  | The ID of the token to be updated. You can't disable the token you're using for authentication of the request. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensApiTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensApiTokensClient.updateApiToken({
    id: "...",
    body: {},
  });
```
