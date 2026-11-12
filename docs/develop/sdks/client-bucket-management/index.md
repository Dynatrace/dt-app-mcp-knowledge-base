This API allows you to manage storage for Grail. Data is organizied in buckets. To get familiar
with the data model within Grail check the [Grail data model documentation.](https://dt-url.net/grail-data-model-doc)

## Access Management

## Entpoint permissions

There are 4 permissions that are enabling the management of the Grail bucket storage. More about
Grail storage permissions can be read in the [documentation.](https://dt-url.net/grail-storage-permission-doc)

- `storage:bucket-definitions:read`

- `storage:bucket-definitions:write`

- `storage:bucket-definitions:delete`

- `storage:bucket-definitions:truncate`

## Storage Object Modification

## Optimistic Locking Version

Operations which modify buckets use **mandatory** optimistic locking.
When such operations are executed, the user must provide the version upon which they operate.
The **version** can be found in the JSON within the response of
[GET bucket definitions](#operations-Bucket_Definitions-getDefinitions) or [GET bucket definition](#operations-Bucket_Definitions-getDefinition).

If the document version in the service doesn't match, because the document has been modified in
the meantime, then the operation gets rejected.

## Storage Object creation

Creating a **custom storage bucket** can have benefits in terms of data management.
Read more about [custom buckets](https://dt-url.net/grail-storage-custom-bucket-doc).

**Bucket creation can take up to 1 minute.**

To create a new custom Grail bucket with Storage Management you need to specify:

- A unique bucket name
  - It has to be between **3-100 characters** long and **start with a letter**.
  - The bucket name can **only** contain
    - **lowercase alphanumeric characters [ a - z ]**
    - **underscores [ \_ ]** and
    - **hyphens [ - ]**.
- Bucket name can not start with
  - **default\_**
  - **dt\_**.

**The bucket name can't be edited or changed at a later time.**

- Display name. You can use this field to describe your bucket.

- Retention period in days between 1 day - 3657 days (10 years).

```bash
npm install @dynatrace-sdk/client-bucket-management
```

## bucketDefinitionsClient

```js
import { bucketDefinitionsClient } from '@dynatrace-sdk/client-bucket-management';
```

### createBucket

**bucketDefinitionsClient.createBucket(config): Promise\<[Bucket](#bucket)>**

Create a new bucket

**Required scope:** storage:bucket-definitions:write

Create a new [custom bucket](https://dt-url.net/grail-storage-custom-bucket-doc).

**Bucket creation can take up to 1 minute.**

Required permission: `storage:bucket-definitions:write`

To create a new custom Grail bucket with Storage Management you need to specify the following values:

## &#x20;Allowed JSON values

- **bucketName** defines the name of the bucket. **The bucket name can't be edited or changed
  at a later time.**

  - **must** be unique

  - has to be between **3-100 characters** long and has to **start with a letter**

  - can **only** contain

    - **lowercase alphanumeric characters [ a - z ]**

    - **underscores [ \_ ]** and

    - **hyphens [ - ]**.

  - must **not** start with

    - **default\_**

    - **dt\_**

- **table** name of the table this bucket is assigned to. Currently allowed
  **one of [logs, events, bizevents, spans, security.events, user.sessions, user.events, metrics]**.

- **retentionDays** describes the data retention period in days between 1 day - 3657 days (10
  years + 1 week).

- **displayName** Optional field that can be used to describe the bucket. Length of the field
  is limited to 200 characters.

- **bucketClass** Optional field that can be used to specify the bucket class.
  Allowed values are `live` and `historic`. If not specified, the bucket class will be set to `live` by default.

#### Parameters

| Name                   | Type                          |
| ---------------------- | ----------------------------- |
| config.body (required) | [CreateBucket](#createbucket) |

#### Returns

| Return type       | Status code | Description                            |
| ----------------- | ----------- | -------------------------------------- |
| [Bucket](#bucket) | 201         | Successfully created bucket definition |

#### Throws

| Error Type         | Error Message                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| missing permissions \| Bucket already exists \| Error occurred. |

**Code example**

```ts
import { bucketDefinitionsClient } from "@dynatrace-sdk/client-bucket-management";

const data = await bucketDefinitionsClient.createBucket({
  body: {
    bucketName: "custom_logs",
    table: "logs",
    displayName: "Custom logs bucket",
    retentionDays: 35,
    includedQueryLimitDays: 0,
  },
});
```

### deleteBucket

**bucketDefinitionsClient.deleteBucket(config): Promise\<[Bucket](#bucket)>**

Delete a bucket

**Required scope:** storage:bucket-definitions:delete
