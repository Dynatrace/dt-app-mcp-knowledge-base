## auditLogsClient

```js
import { auditLogsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getLog

**auditLogsClient.getLog(config): Promise\<[AuditLogEntry](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#auditlogentry)>**

Gets the specified entry of the audit log | maturity=EARLY_ADOPTER

**Required scope:** environment-api:audit-logs:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                 | Type   | Description                       |
| -------------------- | ------ | --------------------------------- |
| config.id (required) | string | The ID of the required log entry. |

#### Returns

| Return type                                                                                                           | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AuditLogEntry](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#auditlogentry) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. Invalid ID format. \| Failed. The requested resource doesn't exist. \| Client side error. \| Server side error. |

**Code example**

```ts
import { auditLogsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await auditLogsClient.getLog({ id: "..." });
```

### getLogs

**auditLogsClient.getLogs(config): Promise\<[AuditLog](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#auditlog)>**

Gets the audit log of your Dynatrace environment | maturity=EARLY_ADOPTER

**Required scope:** environment-api:audit-logs:read
**Required permission:** environment:roles:manage-settings

You can limit the output by using pagination:

1. Specify the number of results per page in the **pageSize** query parameter.
2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.filter      | string | Filters the audit log. You can use the following criteria: * User:&#x20;
  `user("userIdentification")`
  . The&#x20;
  `EQUALS`
   operator applies.
* Event type:&#x20;
  `eventType("value")`
  . The&#x20;
  `EQUALS`
   operator applies.
* Category of a logged operation:&#x20;
  `category("value")`
  . The&#x20;
  `EQUALS`
   operator applies.
* Entity ID:&#x20;
  `entityId("id")`
  . The&#x20;
  `CONTAINS`
   operator applies.
* Settings schema ID:&#x20;
  `dt.settings.schema_id("id")`
  . The&#x20;
  `EQUALS`
   operator applies.
* Settings scope ID:&#x20;
  `dt.settings.scope_id("id")`
  . The&#x20;
  `EQUALS`
   operator applies.
* Settings key:&#x20;
  `dt.settings.key("key")`
  . The&#x20;
  `EQUALS`
   operator applies.
* Settings object ID:&#x20;
  `dt.settings.object_id("id")`
  . The&#x20;
  `EQUALS`
   operator applies. For each criterion, you can specify multiple alternatives with comma-separated values. In this case, the OR logic applies. For example, `eventType("CREATE","UPDATE")` means eventType can be "CREATE" or "UPDATE". You can specify multiple comma-separated criteria, such as `eventType("CREATE","UPDATE"),category("CONFIG")`. Only results matching **all** criteria are included in response. Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes: * Tilde&#x20;
  `~`
* Quote&#x20;
  `"` |
| config.from        | string | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of two weeks is used (`now-2w`).                                                                                                                                                                                                                                                                                                                                                                                                        |
| config.nextPageKey | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.pageSize    | number | The amount of log entries in a single response payload. The maximal allowed page size is 5000. If not set, 1000 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.sort        | string | The sorting of audit log entries: * `timestamp`
  : Oldest first.
* `-timestamp`
  : Newest first. If not set, the newest first sorting is applied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| config.to          | string | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Returns

| Return type                                                                                                 | Status code | Description |
| ----------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AuditLog](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#auditlog) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { auditLogsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await auditLogsClient.getLogs();
```
