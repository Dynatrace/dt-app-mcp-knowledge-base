## credentialVaultEntriesClient

```js
import { credentialVaultEntriesClient } from '@dynatrace-sdk/client-credential-vault';
```

### createCredentialVaultEntry

**credentialVaultEntriesClient.createCredentialVaultEntry(config): Promise\<[CredentialsId](#credentialsid)>**

Creates a new credential entry. | maturity=EARLY_ADOPTER

**Required scope:** credential-vault:entries:write

The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.

#### Parameters

| Name                   | Type                        |
| ---------------------- | --------------------------- |
| config.body (required) | [Credentials](#credentials) |

#### Returns

| Return type                     | Status code | Description                                                                                    |
| ------------------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| [CredentialsId](#credentialsid) | 201         | Success. The new credential entry has been created. The response contains the ID of the entry. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultEntriesClient } from "@dynatrace-sdk/client-credential-vault";

const data =
  await credentialVaultEntriesClient.createCredentialVaultEntry(
    {
      body: {
        name: "...",
        scopes: ["APP_ENGINE"],
        type: "AWS_MONITORING_KEY_BASED",
      },
    },
  );
```

### deleteCredentialVaultEntry

**credentialVaultEntriesClient.deleteCredentialVaultEntry(config): Promise\<void>**

Deletes the specified credential entry. | maturity=EARLY_ADOPTER

**Required scope:** credential-vault:entries:admin

Provide the credential ID in the path.

#### Parameters

| Name                      | Type   | Description                                   |
| ------------------------- | ------ | --------------------------------------------- |
| config.entryId (required) | string | The ID of the credential entry to be deleted. |

#### Returns

| Return type | Status code | Description                                                                       |
| ----------- | ----------- | --------------------------------------------------------------------------------- |
| void        | 204         | Success. The credential entry has been deleted. The response doesn't have a body. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultEntriesClient } from "@dynatrace-sdk/client-credential-vault";

const data =
  await credentialVaultEntriesClient.deleteCredentialVaultEntry(
    { entryId: "..." },
  );
```

### getCredentialVaultEntry

**credentialVaultEntriesClient.getCredentialVaultEntry(config): Promise\<[CredentialsResponseElement](#credentialsresponseelement)>**

Gets the metadata of the specified credential entry. | maturity=EARLY_ADOPTER

**Required scope:** credential-vault:entries:read

The credential entry itself (e.g. username/certificate and password) is not included in the response.

#### Parameters

| Name                      | Type   | Description                              |
| ------------------------- | ------ | ---------------------------------------- |
| config.entryId (required) | string | The ID of the required credential entry. |

#### Returns

| Return type                                               | Status code | Description                                                          |
| --------------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| [CredentialsResponseElement](#credentialsresponseelement) | 200         | Success. The response contains the metadata of the credential entry. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultEntriesClient } from "@dynatrace-sdk/client-credential-vault";

const data =
  await credentialVaultEntriesClient.getCredentialVaultEntry(
    { entryId: "..." },
  );
```

### getCredentialVaultEntryDetails

**credentialVaultEntriesClient.getCredentialVaultEntryDetails(config): Promise\<[AbstractCredentialsResponseElement](#abstractcredentialsresponseelement)>**

Gets the details of the specified credential entry.

The credential entry including username/certificate, password or token is included in the response.

#### Parameters

| Name                      | Type   | Description                              |
| ------------------------- | ------ | ---------------------------------------- |
| config.entryId (required) | string | The ID of the required credential entry. |

#### Returns

| Return type                                                               | Status code | Description                                                         |
| ------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------- |
| [AbstractCredentialsResponseElement](#abstractcredentialsresponseelement) | 200         | Success. The response contains the details of the credential entry. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultEntriesClient } from "@dynatrace-sdk/client-credential-vault";

const data =
  await credentialVaultEntriesClient.getCredentialVaultEntryDetails(
    { entryId: "..." },
  );
```

### listCredentialVaultEntries

**credentialVaultEntriesClient.listCredentialVaultEntries(config): Promise\<[CredentialsList](#credentialslist)>**

Lists all credential entries in your environment. | maturity=EARLY_ADOPTER

**Required scope:** credential-vault:entries:read

The credential entry itself (username/certificate and password) is not included in the response.

#### Parameters

| Name            | Type                                                                                                                            | Description                                                                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.name     | string                                                                                                                          | Filters the result by name. Enclose the value in quotation marks to match the whole phrase. Case-insensitive.                                                                                                                                                                                               |
| config.pageKey  | string                                                                                                                          | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize | number                                                                                                                          | The amount of credential vault entries in a single response payload. The maximal allowed page size is 500. If not set, 100 is used.                                                                                                                                                                         |
| config.scope    | string                                                                                                                          | Filters the result by the specified scope.                                                                                                                                                                                                                                                                  |
| config.type     | "AWS_MONITORING_KEY_BASED" \| "AWS_MONITORING_ROLE_BASED" \| "CERTIFICATE" \| "TOKEN" \| "USERNAME_PASSWORD" \| "SNMPV3" | Filters the result by the specified credential type.                                                                                                                                                                                                                                                        |
| config.user     | string                                                                                                                          | Filters the result to credentials accessible to the specified user (those they own or those shared with everyone).                                                                                                                                                                                          |

#### Returns

| Return type                         | Status code | Description |
| ----------------------------------- | ----------- | ----------- |
| [CredentialsList](#credentialslist) | 200         | Success     |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultEntriesClient } from "@dynatrace-sdk/client-credential-vault";

const data =
  await credentialVaultEntriesClient.listCredentialVaultEntries();
```

### listCredentialVaultEntryDetails

**credentialVaultEntriesClient.listCredentialVaultEntryDetails(config): Promise\<[CredentialsDetailsList](#credentialsdetailslist)>**

Gets the details of the specified credential entries.

Each credential entry including username/certificate, password or token is included in the response.

#### Parameters

| Name       | Type   |
| ---------- | ------ |
| config.ids | string |

#### Returns

| Return type                                       | Status code | Description                                                           |
| ------------------------------------------------- | ----------- | --------------------------------------------------------------------- |
| [CredentialsDetailsList](#credentialsdetailslist) | 200         | Success. The response contains the details of the credential entries. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultEntriesClient } from "@dynatrace-sdk/client-credential-vault";

const data =
  await credentialVaultEntriesClient.listCredentialVaultEntryDetails();
```

### updateCredentialVaultEntry

**credentialVaultEntriesClient.updateCredentialVaultEntry(config): Promise\<void>**

Updates the specified credential entry. | maturity=EARLY_ADOPTER

**Required scope:** credential-vault:entries:admin

The body must not provide an ID. The ID should be provided in the path.

#### Parameters

| Name                      | Type                        | Description                                   |
| ------------------------- | --------------------------- | --------------------------------------------- |
| config.body (required)    | [Credentials](#credentials) |                                               |
| config.entryId (required) | string                      | The ID of the credential entry to be updated. |

#### Returns

| Return type | Status code | Description                                                                       |
| ----------- | ----------- | --------------------------------------------------------------------------------- |
| void        | 204         | Success. The credential entry has been updated. The response doesn't have a body. |

#### Throws

| Error Type                 | Error Message                            |
| -------------------------- | ---------------------------------------- |
| ErrorResponseEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { credentialVaultEntriesClient } from "@dynatrace-sdk/client-credential-vault";

const data =
  await credentialVaultEntriesClient.updateCredentialVaultEntry(
    {
      entryId: "...",
      body: {
        name: "...",
        scopes: ["APP_ENGINE"],
        type: "AWS_MONITORING_KEY_BASED",
      },
    },
  );
```
