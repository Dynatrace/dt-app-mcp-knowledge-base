## credentialVaultClient

```js
import { credentialVaultClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### createCredentials

**credentialVaultClient.createCredentials(config): Promise\<[CredentialsId](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentialsid)>**

Creates a new credentials set.

**Required scope:** environment-api:credentials:write
**Required permission:** environment:roles:viewer

The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.

#### Parameters

| Name                   | Type                                                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [Credentials](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentials) |

#### Returns

| Return type                                                                                                           | Status code | Description                                                                                 |
| --------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| [CredentialsId](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentialsid) | 201         | Success. The new credentials set has been created. The response contains the ID of the set. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await credentialVaultClient.createCredentials({
  body: {
    name: "...",
    scopes: ["APP_ENGINE"],
    type: "AWS_MONITORING_KEY_BASED",
  },
});
```

### getCredentials

**credentialVaultClient.getCredentials(config): Promise\<[CredentialsResponseElement](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentialsresponseelement)>**

Gets the metadata of the specified credentials set.

**Required scope:** environment-api:credentials:read
**Required permission:** environment:roles:viewer

The credentials set itself (e.g. username/certificate and password) is not included in the response.

#### Parameters

| Name                 | Type   | Description                                              |
| -------------------- | ------ | -------------------------------------------------------- |
| config.id (required) | string | The Dynatrace entity ID of the required credentials set. |

#### Returns

| Return type                                                                                                                                     | Status code | Description                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------- |
| [CredentialsResponseElement](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentialsresponseelement) | 200         | Success. The response contains the metadata of the credentials set. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await credentialVaultClient.getCredentials({
  id: "...",
});
```

### getCredentialsDetails

**credentialVaultClient.getCredentialsDetails(config): Promise\<[AbstractCredentialsResponseElement](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#abstractcredentialsresponseelement)>**

Gets the details of the specified credentials set.

**Required scope:** environment-api:credentials:read
**Required permission:** environment:roles:viewer

The credentials set including username/certificate, password or token is included in the response.

#### Parameters

| Name                 | Type   | Description                                              |
| -------------------- | ------ | -------------------------------------------------------- |
| config.id (required) | string | The Dynatrace entity ID of the required credentials set. |

#### Returns

| Return type                                                                                                                                                     | Status code | Description                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------ |
| [AbstractCredentialsResponseElement](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#abstractcredentialsresponseelement) | 200         | Success. The response contains the details of the credentials set. |

#### Throws

| Error Type         | Error Message                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | Failed. The input is invalid. E.g. Requested credentials with unsupported scope. Only APP_ENGINE scope is supported. \| Failed. Requested credentials belong to another user. |

**Code example**

```ts
import { credentialVaultClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await credentialVaultClient.getCredentialsDetails({
    id: "...",
  });
```

### getCredentialsDetailsList

**credentialVaultClient.getCredentialsDetailsList(config): Promise\<[CredentialsDetailsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentialsdetailslist)>**

Gets the details of the specified credentials sets.

The credentials set including username/certificate, password or token is included in the response.

#### Parameters

| Name       | Type   | Description                                                                              |
| ---------- | ------ | ---------------------------------------------------------------------------------------- |
| config.ids | string | The list of Dynatrace entity IDs of the required credentials sets (separated by commas). |

#### Returns

| Return type                                                                                                                             | Status code | Description                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------- |
| [CredentialsDetailsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentialsdetailslist) | 200         | Success. The response contains the details of the credentials sets. |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. E.g. Requested credentials with unsupported scope. Only SYNTHETIC and APP_ENGINE scope are supported. \| Failed. Requested credentials belong to another user. \| Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await credentialVaultClient.getCredentialsDetailsList();
```

### listCredentials

**credentialVaultClient.listCredentials(config): Promise\<[CredentialsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentialslist)>**

Lists all sets of credentials in your environment.

**Required scope:** environment-api:credentials:read
**Required permission:** environment:roles:viewer

The credentials set itself (username/certificate and password) is not included in the response.

#### Parameters

| Name               | Type                                                                                                                            | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.name        | string                                                                                                                          | Filters the result by the name. When in quotation marks, whole phrase is taken. Case insensitive.                                                                                                                                                                                                                 |
| config.nextPageKey | string                                                                                                                          | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize    | number                                                                                                                          | The amount of credentials in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                                            |
| config.scope       | string                                                                                                                          | Filters credentials with specified scope.                                                                                                                                                                                                                                                                         |
| config.type        | "CERTIFICATE" \| "TOKEN" \| "USERNAME_PASSWORD" \| "AWS_MONITORING_KEY_BASED" \| "AWS_MONITORING_ROLE_BASED" \| "SNMPV3" | Filters the result by the specified credentials type.                                                                                                                                                                                                                                                             |
| config.user        | string                                                                                                                          | Filters credentials accessible to the user (owned by the user or the ones that are accessible for all).                                                                                                                                                                                                           |

#### Returns

| Return type                                                                                                               | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [CredentialsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentialslist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await credentialVaultClient.listCredentials();
```

### removeCredentials

**credentialVaultClient.removeCredentials(config): Promise\<void>**

Deletes the specified credentials set

**Required scope:** environment-api:credentials:write
**Required permission:** environment:roles:viewer

Provide credential ID in the path.

#### Parameters

| Name                 | Type   | Description                                  |
| -------------------- | ------ | -------------------------------------------- |
| config.id (required) | string | The ID of the credentials set to be deleted. |

#### Returns

| Return type | Status code | Description                                                                  |
| ----------- | ----------- | ---------------------------------------------------------------------------- |
| void        | 204         | Success. The credentials set has been deleted. Response doesn't have a body. |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await credentialVaultClient.removeCredentials({
  id: "...",
});
```

### updateCredentials

**credentialVaultClient.updateCredentials(config): Promise\<void | [CredentialsId](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentialsid)>**

Updates the specified credentials set.

**Required scope:** environment-api:credentials:write
**Required permission:** environment:roles:viewer

The body must not provide an ID. The ID should be provided in the path.

#### Parameters

| Name                   | Type                                                                                                              | Description                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| config.body (required) | [Credentials](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentials) |                                                               |
| config.id (required)   | string                                                                                                            | The Dynatrace entity ID of the credentials set to be updated. |

#### Returns

| Return type                                                                                                           | Status code | Description                                                                                 |
| --------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| [CredentialsId](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v7/types.md#credentialsid) | 201         | Success. The new credentials set has been created. The response contains the ID of the set. |
| void                                                                                                                  | 204         | Success. The credentials set has been updated. Response doesn't have a body.                |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await credentialVaultClient.updateCredentials({
  id: "...",
  body: {
    name: "...",
    scopes: ["APP_ENGINE"],
    type: "AWS_MONITORING_KEY_BASED",
  },
});
```
