## accessTokensTenantTokensClient

```js
import { accessTokensTenantTokensClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### cancelRotation

**accessTokensTenantTokensClient.cancelRotation(config): Promise\<[TenantTokenConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#tenanttokenconfig)>**

Cancels tenant token rotation

**Required scope:** environment-api:tenant-token-rotation:write
**Required permission:** environment:roles:manage-settings

To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation.

#### Returns

| Return type                                                                                                                   | Status code | Description                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| [TenantTokenConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#tenanttokenconfig) | 200         | Success. Rotation process has been cancelled. The current tenant token remains valid. |

#### Throws

| Error Type         | Error Message                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. There is no ongoing rotation process. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensTenantTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensTenantTokensClient.cancelRotation();
```

### finishRotation

**accessTokensTenantTokensClient.finishRotation(config): Promise\<[TenantTokenConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#tenanttokenconfig)>**

Finishes tenant token rotation

**Required scope:** environment-api:tenant-token-rotation:write
**Required permission:** environment:roles:manage-settings

To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation.

#### Returns

| Return type                                                                                                                   | Status code | Description                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| [TenantTokenConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#tenanttokenconfig) | 200         | Success. The rotation process is completed. The **active** field of the response contains the new tenant token. |

#### Throws

| Error Type         | Error Message                                                            |
| ------------------ | ------------------------------------------------------------------------ |
| ErrorEnvelopeError | No ongoing rotation process. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensTenantTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensTenantTokensClient.finishRotation();
```

### startRotation

**accessTokensTenantTokensClient.startRotation(config): Promise\<[TenantTokenConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#tenanttokenconfig)>**

Starts tenant token rotation

**Required scope:** environment-api:tenant-token-rotation:write
**Required permission:** environment:roles:manage-settings

To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation.

#### Returns

| Return type                                                                                                                   | Status code | Description                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [TenantTokenConfig](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#tenanttokenconfig) | 200         | Success. The new tenant token is created and will replace the old one. The **active** field of the response contains the new tenant token. |

#### Throws

| Error Type         | Error Message                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. Another rotation process is already in progress. \| Client side error. \| Server side error. |

**Code example**

```ts
import { accessTokensTenantTokensClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await accessTokensTenantTokensClient.startRotation();
```
