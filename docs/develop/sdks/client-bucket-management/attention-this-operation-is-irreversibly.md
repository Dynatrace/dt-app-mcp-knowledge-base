# &#x20;**ATTENTION - This operation is irreversibly**

Truncate can be used to empty a bucket. This operation will remove the content of a given bucket.

**Truncate is an asyncronous task. Runtime will depend on the amount of data that has to be removed.**

Operation can be executed on all types of buckets.

Required permission: `storage:bucket-definitions:truncate`

#### Parameters

| Name                         | Type   | Description              |
| ---------------------------- | ------ | ------------------------ |
| config.bucketName (required) | string | Bucket name to truncate. |

#### Returns

| Return type | Status code | Description              |
| ----------- | ----------- | ------------------------ |
| void        | 202         | Accepted truncate bucket |

#### Throws

| Error Type         | Error Message                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | bad request \| unauthorized \| Forbidden \| Bucket not found \| Server not ready \| Error occurred. |

**Code example**

```ts
import { bucketDefinitionsClient } from "@dynatrace-sdk/client-bucket-management";

const data = await bucketDefinitionsClient.truncateBucket({
  bucketName: "...",
});
```

### updateBucket

**bucketDefinitionsClient.updateBucket(config): Promise\<void>**

Update a bucket

**Required scope:** storage:bucket-definitions:write

Update a bucket definition.

The following fields can be changed:

- **displayName** can be used to describe your bucket (up to 200 characters)
- **retentionDays** defines how long the data in the bucket will be retained

**Warning: changing the retention days will also apply to existing records. Shortening the retention period could result in data deletion.**

Add the field(s) to be updated to the request body.

Required permission: `storage:bucket-definitions:write`

#### Parameters

| Name                                       | Type                          | Description                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required)                     | [UpdateBucket](#updatebucket) |                                                                                                                                                                                                                                                                                                                                                                                       |
| config.bucketName (required)               | string                        | Bucket name to update                                                                                                                                                                                                                                                                                                                                                                 |
| config.optimisticLockingVersion (required) | number                        | **optimistic-locking-version** defines the base version that this update applies to. You can get the current version of a bucket definition by checking the **version** field in the JSON response of GET bucket definitions or GET bucket definition. **ATTENTION: this optimistic-locking-version and the version value in the JSON body must match.** <br /><br />**Minimum:** `0` |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 200         | Successfully updated bucket definition |
| void        | 202         | Accepted update bucket definition      |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | bad request \| unauthorized \| Forbidden \| Bucket with provided name was not found \| Attempt to update an old version or an operation is currently in progress that prevents current modifications (creating, deleting, updating) \| Error occurred. |

**Code example**

```ts
import { bucketDefinitionsClient } from "@dynatrace-sdk/client-bucket-management";

const data = await bucketDefinitionsClient.updateBucket({
  bucketName: "...",
  optimisticLockingVersion: 10,
  body: {
    bucketName: "custom_logs",
    table: "logs",
    displayName: "Custom logs bucket (updated)",
    status: "active",
    retentionDays: 10,
    includedQueryLimitDays: 0,
    version: 1,
  },
});
```

### updateBucketPartially

**bucketDefinitionsClient.updateBucketPartially(config): Promise\<void>**

Update a bucket partially

**Required scope:** storage:bucket-definitions:write

Update a bucket definition.

There are to fields that can be changed

- **displayName** can be used to describe your bucket (up to 200 characters)
- **retentionDays** defines the period in days

**Warning: changing the retention days will also apply to existing records. Shortening the
retention period could result in data deletion.**

Add the field(s) to be updated to the request body.

Required permission: `storage:bucket-definitions:write`

#### Parameters

| Name                                       | Type                                        | Description                                                                                                                                                                                                                                                                         |
| ------------------------------------------ | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required)                     | [PartialUpdateBucket](#partialupdatebucket) |                                                                                                                                                                                                                                                                                     |
| config.bucketName (required)               | string                                      | Bucket name to update.                                                                                                                                                                                                                                                              |
| config.optimisticLockingVersion (required) | number                                      | **optimistic-locking-version** defines the base version that this update applies to. You can get the current version of a bucket definition by checking the **version** field in the JSON response of GET bucket definitions or GET bucket definition. <br /><br />**Minimum:** `0` |

#### Returns

| Return type | Status code | Description                            |
| ----------- | ----------- | -------------------------------------- |
| void        | 200         | Successfully updated bucket definition |
| void        | 202         | Accepted update bucket definition      |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | bad request \| unauthorized \| Forbidden \| Bucket with provided name was not found \| Attempt to update an old version or an operation is currently in progress that prevents current modifications (creating, deleting, updating) \| Error occurred. |

**Code example**

```ts
import { bucketDefinitionsClient } from "@dynatrace-sdk/client-bucket-management";

const data =
  await bucketDefinitionsClient.updateBucketPartially({
    bucketName: "...",
    optimisticLockingVersion: 10,
    body: {
      displayName: "Custom logs bucket (updated)",
      retentionDays: 10,
      includedQueryLimitDays: 0,
    },
  });
```

## Types

### Bucket

| Name                                    | Type                                                                         | Description                                                                                                                                                                                                                                     |
| --------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bucketClass                             | null \| "live" \| "historic"                                                 | The class of the bucket. Read-only after creation.<br /><br />**Example:** `live`                                                                                                                                                               |
| bucketName (required)                   | string                                                                       | The unique identifier of the bucket within the tenant.<br /><br />**Example:** `default_logs`<br />Pattern: `([a-z])([a-z0-9])([a-z0-9_-])+`                                                                                                    |
| displayName                             | null \| string                                                               | Descriptive name of the bucket. No restriction regarding unique naming or valid characters. <br /><br />**Example:** `Logs (35 days)`                                                                                                           |
| estimatedUncompressedBytes              | null \| number                                                               | Estimated uncompressed size of the bucket in bytes.<br /><br />**Example:** `24544`                                                                                                                                                             |
| estimatedUncompressedBytesOnDemand      | null \| number                                                               | Estimated uncompressed size of on-demand data in the bucket in bytes.<br /><br />**Example:** `24546`                                                                                                                                           |
| estimatedUncompressedBytesQueryIncluded | null \| number                                                               | Estimated uncompressed size of query-included data in the bucket in bytes.<br /><br />**Example:** `24545`                                                                                                                                      |
| includedQueryLimitDays (required)       | number                                                                       | The period in days in which queries from the bucket are included in the pricing model.<br /><br />**Example:** `10`<br />**Minimum:** `0`                                                                                                       |
| metricInterval                          | null \| "PT1S" \| "PT5S" \| "PT10S" \| "PT1M" \| "PT5M" \| "PT15M" \| "PT1H" | Interval of aggregated metric data. Only applies to metric buckets.<br /><br />**Example:** `PT1M`                                                                                                                                              |
| records                                 | null \| number                                                               | Amount of records in the bucket.<br /><br />**Example:** `24544`                                                                                                                                                                                |
| retentionDays (required)                | number                                                                       | The retention period in days of the data in the bucket.<br /><br />**Example:** `35`                                                                                                                                                            |
| status (required)                       | "creating" \| "active" \| "updating" \| "deleting"                           | The current status of the bucket, depending on bucket lifecycle.<br /><br />**Example:** `active`                                                                                                                                               |
| table (required)                        | string                                                                       | Name of the table the bucket is assigned to.<br /><br />**Example:** `logs`                                                                                                                                                                     |
| updatable (required)                    | boolean                                                                      | A flag indicating whether a bucket can be updated or not.<br /><br />**Example:** `true`                                                                                                                                                        |
| version (required)                      | number                                                                       | Optimistic locking version. Update requests define with this on which version the data updated is based on. This must match with the version stored, otherwise the update will fail due to concurrent modification.<br /><br />**Example:** `1` |

### Buckets

| Name               | Type                      |
| ------------------ | ------------------------- |
| buckets (required) | Array\<[Bucket](#bucket)> |

### CreateBucket

| Name                            | Type                                          | Description                                                                                                                                                                        |
| ------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bucketClass                     | null \| "live" \| "historic"                  | Classification of the bucket. Determines the ingest mode. Allowed values: live, historic. Defaults to live if not specified. Historic buckets are only supported for table 'logs'. |
| bucketName (required)           | string                                        | The unique identifier of the bucket within the tenant.<br />Pattern: `([a-z])([a-z0-9])([a-z0-9_-])+`                                                                              |
| displayName                     | null \| string                                | Descriptive name of the bucket. No restriction regarding unique naming or valid characters.                                                                                        |
| includedQueryLimitDays          | null \| number                                | The period in days in which queries from the bucket are included in the pricing model.<br /><br />**Example:** `10`<br />**Minimum:** `0`                                          |
| includedQueryLimitDaysOrDefault | number                                        |                                                                                                                                                                                    |
| metricInterval                  | null \| "PT1M" \| "PT5M" \| "PT15M" \| "PT1H" | Interval of aggregated metric data. Only applies to metric buckets. Only PT1M is currently supported for custom metric buckets.                                                    |
| retentionDays (required)        | null \| number                                | The retention period in days of the data in the bucket.<br /><br />**Minimum:** `1`                                                                                                |
| retentionDaysOrDefault          | number                                        |                                                                                                                                                                                    |
| table (required)                | string                                        | Name of the table the bucket is assigned to. One of [logs, events, bizevents, spans, security.events, user.sessions, user.events, user.live_sessions, metrics]                   |

### CustomValidationErrorInfo

| Name               | Type   |
| ------------------ | ------ |
| message (required) | string |

### ErrorEnvelope

| Name  | Type                                    |
| ----- | --------------------------------------- |
| error | [ExceptionalReturn](#exceptionalreturn) |

### ErrorInfo

| Name               | Type   |
| ------------------ | ------ |
| message (required) | string |

### ExceptionalReturn

| Name                    | Type                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code                    | number                                                                                                                                                                                                                                                                                                                                                                    |
| errorDetails (required) | Array\<[CustomValidationErrorInfo](#customvalidationerrorinfo) \| [InvalidAuditEventsErrorInfo](#invalidauditeventserrorinfo) \| [MediaTypeErrorInfo](#mediatypeerrorinfo) \| [ParameterErrorInfo](#parametererrorinfo) \| [ProxyErrorInfo](#proxyerrorinfo) \| [QueryFrontendRawErrorInfo](#queryfrontendrawerrorinfo) \| [RequestBodyErrorInfo](#requestbodyerrorinfo)> |
| message (required)      | string                                                                                                                                                                                                                                                                                                                                                                    |

### InvalidAuditEventsErrorInfo

| Name                                | Type           |
| ----------------------------------- | -------------- |
| invalidAuditEventIndices (required) | Array\<number> |
| invalidEventIndices                 | Array\<number> |
| message (required)                  | string         |

### MediaTypeErrorInfo

| Name                           | Type           |
| ------------------------------ | -------------- |
| message (required)             | string         |
| supportedMediaTypes (required) | Array\<string> |

### ParameterErrorInfo

| Name                           | Type   |
| ------------------------------ | ------ |
| message (required)             | string |
| parameterDescriptor (required) | string |

### PartialUpdateBucket

| Name                   | Type           | Description                                                                                                                                                                                                                    |
| ---------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| displayName            | null \| string | Descriptive name of the bucket. No restriction regarding unique naming or valid characters.                                                                                                                                    |
| includedQueryLimitDays | null \| number | The period in days in which queries from the bucket are included in the pricing model.<br /><br />**Example:** `10`<br />**Minimum:** `0`                                                                                      |
| retentionDays          | null \| number | The retention period in days of the data in the bucket. Important note: the new retention days will also apply to existing records. Shortening the retention period could result in data deletion!<br /><br />**Minimum:** `1` |

### ProxyErrorInfo

| Name               | Type   |
| ------------------ | ------ |
| message (required) | string |

### QueryFrontendRawErrorInfo

| Name                                | Type   |
| ----------------------------------- | ------ |
| message (required)                  | string |
| rawQueryFrontendResponse (required) | string |

### RequestBodyErrorInfo

| Name                      | Type   |
| ------------------------- | ------ |
| bodyDescriptor (required) | string |
| message (required)        | string |

### UpdateBucket

| Name                            | Type                                               | Description                                                                                                                                                                                                                    |
| ------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| bucketClass                     | null \| "live" \| "historic"                       | The class of the bucket. Read-only after creation.<br /><br />**Example:** `live`                                                                                                                                              |
| bucketName (required)           | string                                             | The unique identifier of the bucket within the tenant.<br />Pattern: `([a-z])([a-z0-9])([a-z0-9_-])+`                                                                                                                          |
| displayName                     | null \| string                                     | Descriptive name of the bucket. No restriction regarding unique naming or valid characters.                                                                                                                                    |
| includedQueryLimitDays          | null \| number                                     | The period in days in which queries from the bucket are included in the pricing model.<br /><br />**Example:** `10`<br />**Minimum:** `0`                                                                                      |
| includedQueryLimitDaysOrDefault | number                                             |                                                                                                                                                                                                                                |
| metricInterval                  | null \| "PT1M" \| "PT5M" \| "PT15M" \| "PT1H"      | Metric interval for metric buckets. Will be ignored for other buckets.                                                                                                                                                         |
| retentionDays                   | null \| number                                     | The retention period in days of the data in the bucket. Important note: the new retention days will also apply to existing records. Shortening the retention period could result in data deletion!<br /><br />**Minimum:** `1` |
| retentionDaysOrDefault          | number                                             |                                                                                                                                                                                                                                |
| status (required)               | "creating" \| "active" \| "updating" \| "deleting" | The current status of the bucket, depending on bucket lifecycle.                                                                                                                                                               |
| table (required)                | string                                             | Name of the table the bucket is assigned to.                                                                                                                                                                                   |
| version                         | null \| number                                     | Optimistic locking version. Update requests define with this on which version the data updated is based on. This must match with the version stored, otherwise the update will fail due to concurrent modification.            |
| versionOrDefault                | number                                             |                                                                                                                                                                                                                                |

## Enums

### ~~BucketBucketClass~~

> ⚠️ **Deprecated**
> Use literal values.

The class of the bucket. Read-only after creation.

#### Enum keys

`Historic` | `Live`

### ~~BucketMetricInterval~~

> ⚠️ **Deprecated**
> Use literal values.

Interval of aggregated metric data. Only applies to metric buckets.

#### Enum keys

`Pt10S` | `Pt15M` | `Pt1H` | `Pt1M` | `Pt1S` | `Pt5M` | `Pt5S`

### ~~BucketStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The current status of the bucket, depending on bucket lifecycle.

#### Enum keys

`Active` | `Creating` | `Deleting` | `Updating`

### ~~CreateBucketBucketClass~~

> ⚠️ **Deprecated**
> Use literal values.

Classification of the bucket. Determines the ingest mode.
Allowed values: live, historic. Defaults to live if not specified.
Historic buckets are only supported for table 'logs'.

#### Enum keys

`Historic` | `Live`

### ~~CreateBucketMetricInterval~~

> ⚠️ **Deprecated**
> Use literal values.

Interval of aggregated metric data. Only applies to metric buckets. Only PT1M is currently supported for custom metric buckets.

#### Enum keys

`Pt15M` | `Pt1H` | `Pt1M` | `Pt5M`

### ~~GetDefinitionQueryAddFieldsItem~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`EstimatedUncompressedBytes` | `EstimatedUncompressedBytesOnDemand` | `EstimatedUncompressedBytesQueryIncluded` | `Records`

### ~~GetDefinitionsQueryAddFieldsItem~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`EstimatedUncompressedBytes` | `EstimatedUncompressedBytesOnDemand` | `EstimatedUncompressedBytesQueryIncluded` | `Records`

### ~~UpdateBucketBucketClass~~

> ⚠️ **Deprecated**
> Use literal values.

The class of the bucket. Read-only after creation.

#### Enum keys

`Historic` | `Live`

### ~~UpdateBucketMetricInterval~~

> ⚠️ **Deprecated**
> Use literal values.

Metric interval for metric buckets. Will be ignored for other buckets.

#### Enum keys

`Pt15M` | `Pt1H` | `Pt1M` | `Pt5M`

### ~~UpdateBucketStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The current status of the bucket, depending on bucket lifecycle.

#### Enum keys

`Active` | `Creating` | `Deleting` | `Updating`
