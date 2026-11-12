## accessTokensActiveGateTokensClient

```js
import { accessTokensActiveGateTokensClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createToken

**accessTokensActiveGateTokensClient.createToken(config): Promise\<[ActiveGateTokenCreated](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#activegatetokencreated)>**

Creates a new ActiveGate token

**One of the following scopes is required:**

- environment-api:activegate-tokens:create
- environment-api:activegate-tokens:write
- fleet-management:activegate.tokens:create
- fleet-management:activegate.tokens:write

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegate.tokens:write

The newly created token will be owned by the same user who owns the token used for authentication of the call.

#### Parameters

| Name                   | Type                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [ActiveGateTokenCreate](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#activegatetokencreate) |

#### Returns

| Return type                                                                                                                             | Status code | Description                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| [ActiveGateTokenCreated](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#activegatetokencreated) | 201         | Success. The token has been created. The body of the response contains the token secret. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensActiveGateTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensActiveGateTokensClient.createToken({
    body: {
      activeGateType: "ENVIRONMENT",
      name: "myToken",
    },
  });
```

### getToken

**accessTokensActiveGateTokensClient.getToken(config): Promise\<[ActiveGateToken](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#activegatetoken)>**

Gets metadata of an ActiveGate token

**One of the following scopes is required:**

- environment-api:activegate-tokens:read
- fleet-management:activegate.tokens:read

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegate.tokens:read

The token secret is **not** exposed.

#### Parameters

| Name                                        | Type   | Description                                                                                                       |
| ------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| config.activeGateTokenIdentifier (required) | string | The ActiveGate token identifier, consisting of [prefix and public part](https://dt-url.net/rn00tjg) of the token. |

#### Returns

| Return type                                                                                                               | Status code | Description                                                |
| ------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------- |
| [ActiveGateToken](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#activegatetoken) | 200         | Success. The response contains the metadata of the tokens. |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensActiveGateTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensActiveGateTokensClient.getToken({
    activeGateTokenIdentifier: "...",
  });
```

### listTokens

**accessTokensActiveGateTokensClient.listTokens(config): Promise\<[ActiveGateTokenList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#activegatetokenlist)>**

Lists all available ActiveGate tokens

**One of the following scopes is required:**

- environment-api:activegate-tokens:read
- fleet-management:activegate.tokens:read

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegate.tokens:read

You can limit the output by using pagination:

1. Specify the number of results per page in the **pageSize** query parameter.
2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.nextPageKey | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize    | number | The amount of ActiveGate tokens in a single response payload. The maximal allowed page size is 3000 and the minimal size is 100. If not set, 100 is used.                                                                                                                                                         |

#### Returns

| Return type                                                                                                                       | Status code | Description                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------- |
| [ActiveGateTokenList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#activegatetokenlist) | 200         | Success. The response contains the list of ActiveGate tokens. |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensActiveGateTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensActiveGateTokensClient.listTokens();
```

### revokeToken

**accessTokensActiveGateTokensClient.revokeToken(config): Promise\<void>**

Deletes an ActiveGate token

**One of the following scopes is required:**

- environment-api:activegate-tokens:write
- fleet-management:activegate.tokens:write

**One of the following permissions is required:**

- environment:roles:manage-settings
- fleet-management:activegate.tokens:write

#### Parameters

| Name                                        | Type   | Description                                                                                                                     |
| ------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| config.activeGateTokenIdentifier (required) | string | The ActiveGate token identifier, consisting of [prefix and public part](https://dt-url.net/rn00tjg) of the token to be deleted. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensActiveGateTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensActiveGateTokensClient.revokeToken({
    activeGateTokenIdentifier: "...",
  });
```
