## activeGateTokensClient

```js
import { activeGateTokensClient } from '@dynatrace-sdk/client-fleet-management';
```

### createToken

**activeGateTokensClient.createToken(config): Promise\<[ActiveGateTokenCreated](#activegatetokencreated)>**

Creates a new ActiveGate token

**One of the following scopes is required:**

- fleet-management:activegate.tokens:create
- fleet-management:activegate.tokens:write

The newly created token will be owned by the user authenticated for this request.

**Make sure to copy the token secret** from the response---it won't be available again after creation.

#### Parameters

| Name                   | Type                                            |
| ---------------------- | ----------------------------------------------- |
| config.body (required) | [ActiveGateTokenCreate](#activegatetokencreate) |

#### Returns

| Return type                                       | Status code | Description                                                                       |
| ------------------------------------------------- | ----------- | --------------------------------------------------------------------------------- |
| [ActiveGateTokenCreated](#activegatetokencreated) | 201         | Success. The token has been created. The response body contains the token secret. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGateTokensClient } from "@dynatrace-sdk/client-fleet-management";

const data = await activeGateTokensClient.createToken({
  body: { name: "myToken" },
});
```

### getToken

**activeGateTokensClient.getToken(config): Promise\<[ActiveGateToken](#activegatetoken)>**

Gets the metadata of an ActiveGate token

**Required scope:** fleet-management:activegate.tokens:read

The token secret **isn't** exposed.

#### Parameters

| Name                 | Type   | Description                                                                                                            |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| config.id (required) | string | The ActiveGate token identifier, consisting of the [prefix and public parts](https://dt-url.net/rn00tjg) of the token. |

#### Returns

| Return type                         | Status code | Description                                               |
| ----------------------------------- | ----------- | --------------------------------------------------------- |
| [ActiveGateToken](#activegatetoken) | 200         | Success. The response contains the metadata of the token. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGateTokensClient } from "@dynatrace-sdk/client-fleet-management";

const data = await activeGateTokensClient.getToken({
  id: "...",
});
```

### listTokens

**activeGateTokensClient.listTokens(config): Promise\<[ActiveGateTokenList](#activegatetokenlist)>**

Lists all available ActiveGate tokens

**Required scope:** fleet-management:activegate.tokens:read

You can limit the output by using pagination:

1. Specify the number of results per page in the **page-size** query parameter.
2. Use the cursor from the **nextPageKey** field of the previous response in the **page-key** query parameter to obtain subsequent pages.

#### Parameters

| Name            | Type   | Description                                                                                                                                                                                                                                                                                                 |
| --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.pageKey  | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize | number | The amount of ActiveGate tokens in a single response payload. The maximal allowed page size is 3000 and the minimum size is 100. If not set, 100 is used. <br /><br />**Default:** `100`<br />**Minimum:** `100`                                                                                            |

#### Returns

| Return type                                 | Status code | Description                                                   |
| ------------------------------------------- | ----------- | ------------------------------------------------------------- |
| [ActiveGateTokenList](#activegatetokenlist) | 200         | Success. The response contains the list of ActiveGate tokens. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGateTokensClient } from "@dynatrace-sdk/client-fleet-management";

const data = await activeGateTokensClient.listTokens();
```

### revokeToken

**activeGateTokensClient.revokeToken(config): Promise\<void>**

Deletes an ActiveGate token

**Required scope:** fleet-management:activegate.tokens:write

#### Parameters

| Name                 | Type   | Description                                                                                                                                 |
| -------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| config.id (required) | string | The identifier of the ActiveGate token to be deleted, consisting of the [prefix and public parts](https://dt-url.net/rn00tjg) of the token. |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 204         | Success. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGateTokensClient } from "@dynatrace-sdk/client-fleet-management";

const data = await activeGateTokensClient.revokeToken({
  id: "...",
});
```
