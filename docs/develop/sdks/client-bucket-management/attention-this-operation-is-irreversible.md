# &#x20;**ATTENTION - This operation is irreversible**

Delete can be used to delete a bucket. This operation will remove the content of a given bucket and then delete the bucket itself.

**Delete is an asynchronous task. Runtime will depend on the amount of data that has to be removed.**

The status of this operation can be tracked via the status field within the \[GET bucket definitions]
(#operations-Bucket_Definitions-getDefinitions)
or GET bucket definition.
Status will show **deleting** as long as data will be drained and finally the bucket will be deleted. Afterwards the bucket will cease to exist.

Operation can be executed on all types of buckets **except** buckets where **bucketName** starts with **dt\_** or **default\_**.

Before a bucket is deleted, checks are performed to verify that the bucket is not in use.

Required permission: `storage:bucket-definitions:delete`

#### Parameters

| Name                         | Type   | Description            |
| ---------------------------- | ------ | ---------------------- |
| config.bucketName (required) | string | Bucket name to delete. |

#### Returns

| Return type       | Status code | Description            |
| ----------------- | ----------- | ---------------------- |
| [Bucket](#bucket) | 202         | accepted delete bucket |

#### Throws

| Error Type         | Error Message                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| Forbidden \| bucket not found \| The operation cannot proceed due to a conflict. \| Error occurred. |

**Code example**

```ts
import { bucketDefinitionsClient } from "@dynatrace-sdk/client-bucket-management";

const data = await bucketDefinitionsClient.deleteBucket({
  bucketName: "...",
});
```

### getDefinition

**bucketDefinitionsClient.getDefinition(config): Promise\<[Bucket](#bucket)>**

Get bucket definition by name

**Required scope:** storage:bucket-definitions:read

Get a bucket definition by name.

**Newly created buckets aren't shown immediately, this can take up to one minute.**

Required permission: `storage:bucket-definitions:read`

#### Parameters

| Name                         | Type                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields             | Array\<"estimatedUncompressedBytes" \| "records" \| "estimatedUncompressedBytesQueryIncluded" \| "estimatedUncompressedBytesOnDemand"> | **add-fields:** Define additional fields added to the response. **Depending on the field this may result in longer response times**: * `records`
   \- Request number of records stored in a bucket.
* `estimatedUncompressedBytes`
   \- Request estimated uncompressed size of a bucket.
* `estimatedUncompressedBytesQueryIncluded`
   \- Request estimated uncompressed size of query-included data in a bucket.
* `estimatedUncompressedBytesOnDemand`
   \- Request estimated uncompressed size of on-demand data in a bucket. **Note:** Hold down **STRG** on *Windows/Linux* or **Command** on *Mac* to select multiple values in the box below. |
| config.bucketName (required) | string                                                                                                                                 | Bucket name to get definition for.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Returns

| Return type       | Status code | Description                               |
| ----------------- | ----------- | ----------------------------------------- |
| [Bucket](#bucket) | 200         | Successfully retrieved bucket definition. |

#### Throws

| Error Type         | Error Message                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| missing permissions \| Bucket with provided name was not found. \| Error occurred. |

**Code example**

```ts
import { bucketDefinitionsClient } from "@dynatrace-sdk/client-bucket-management";

const data = await bucketDefinitionsClient.getDefinition({
  bucketName: "...",
});
```

### getDefinitions

**bucketDefinitionsClient.getDefinitions(config): Promise\<[Buckets](#buckets)>**

Get all bucket definitions

**Required scope:** storage:bucket-definitions:read

Get all bucket definitions.

**Newly created buckets aren't shown immediately, this can take up to one minute.**

Required permission: `storage:bucket-definitions:read`

#### Parameters

| Name             | Type                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields | Array\<"estimatedUncompressedBytes" \| "records" \| "estimatedUncompressedBytesQueryIncluded" \| "estimatedUncompressedBytesOnDemand"> | **add-fields:** Define additional fields added to the response. **Depending on the field this may result in longer response times**: * `records`
   \- Request number of records stored in a bucket.
* `estimatedUncompressedBytes`
   \- Request estimated uncompressed size of a bucket.
* `estimatedUncompressedBytesQueryIncluded`
   \- Request estimated uncompressed size of query-included data in a bucket.
* `estimatedUncompressedBytesOnDemand`
   \- Request estimated uncompressed size of on-demand data in a bucket. **Note:** Hold down **STRG** on *Windows/Linux* or **Command** on *Mac* to select multiple values in the box below. |

#### Returns

| Return type         | Status code | Description                                   |
| ------------------- | ----------- | --------------------------------------------- |
| [Buckets](#buckets) | 200         | Successfully retrieved all bucket definitions |

#### Throws

| Error Type         | Error Message                                                         |
| ------------------ | --------------------------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| missing permissions \| Error occurred. |

**Code example**

```ts
import { bucketDefinitionsClient } from "@dynatrace-sdk/client-bucket-management";

const data = await bucketDefinitionsClient.getDefinitions();
```

### truncateBucket

**bucketDefinitionsClient.truncateBucket(config): Promise\<void>**

Truncate a bucket

**Required scope:** storage:bucket-definitions:truncate
