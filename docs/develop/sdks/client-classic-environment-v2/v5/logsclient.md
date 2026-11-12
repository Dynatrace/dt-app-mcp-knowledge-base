## logsClient

```js
import { logsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### exportLogRecords

**logsClient.exportLogRecords(config): Promise\<[ExportedLogRecordList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#exportedlogrecordlist)>**

Exports log records | maturity=EARLY_ADOPTER

**Required scope:** storage:logs:read
**One of the following permissions is required:**

- environment:roles:logviewer
- storage:logs:read

Returns the first *X* records (specified in the **pageSize** query parameter).

Unlike the **search** API, this API does not split the result into slices and has no limit for the total number of records. Log records are sorted by the criteria specified in the **sort** query parameter.

In order to fetch large amount of records (exceeding the **pageSize** value), one should repeat the **export** call with **nextPageKey** param.

Please note that export works **only** for *Logs Classic*.

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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
  &#x20; If not set, the relative timeframe of two weeks is used (`now-2w`). |
| config.nextPageKey | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.pageSize    | number | The number of results per result page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| config.query       | string | The log search query. The query must use the [Dynatrace search query language](https://dt-url.net/pe03s6f).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.sort        | string | Defines the ordering of the log records. Each field has a sign prefix (+/-) for sorting order. If no sign prefix is set, then the `+` option will be applied. Currently, ordering is available only for the timestamp (+timestamp for the oldest records first, or -timestamp for the newest records first). When millisecond resolution provided by the timestamp is not enough, log records are sorted based on the order in which they appear in the log source (remote process writing to REST API endpoint or remote process from which logs are collected).  <br />Pattern: `^[+-]?[a-z]+$`                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
  &#x20; If not set, the current timestamp is used.                            |

#### Returns

| Return type                                                                                                                           | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ExportedLogRecordList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#exportedlogrecordlist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. The server either does not recognize the request method, or it lacks the ability to fulfill the request. May happen when Grail log storage is enabled. \| Client side error. \| Server side error. |

**Code example**

```ts
import { logsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await logsClient.exportLogRecords();
```

### getLogHistogramData

**logsClient.getLogHistogramData(config): Promise\<[AggregatedLog](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#aggregatedlog)>**

Gets aggregated log records | maturity=EARLY_ADOPTER

**Required scope:** storage:logs:read
**One of the following permissions is required:**

- environment:roles:logviewer
- storage:logs:read

Returns the aggregated number of occurrences of log values divided into time slots.

It is possible that the timeframe covered by results exceeds the specified timeframe. In that case the request returns fewer time slots than specified in the **timeBuckets** query parameter.

If *Log Management and Analytics, powered by Grail* is enabled,
then a bearer OAuth token (with `storage:logs:read` and `storage:buckets:read` scopes)
needs to be used for authentication.

Please note that *Dynatrace API explorer* does not currently support OAuth authentication.

**Logs on Grail:**

It is **not** recommended to run Grail queries using Logs v2 API, please use Grail API instead.

#### Parameters

| Name                  | Type           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.from           | string         | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of two weeks is used (`now-2w`). |
| config.groupBy        | Array\<string> | The groupings to be included in the response. You can specify several groups in the following format: `groupBy=status&groupBy=log.source`. If not set, all possible groups are returned. You can use this option to check for possible grouping values. Unique log data attributes (high-cardinality attributes) for example, `span_id` or `trace_id` cannot be used for grouping.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| config.maxGroupValues | number         | The maximum number of values in each group. You can get up to 100 values per group. If not set, 10 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.query          | string         | The log search query. The query must use the [Dynatrace search query language](https://dt-url.net/pe03s6f).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.timeBuckets    | number         | The number of time slots in the result. The query timeframe is divided equally into the specified number of slots. The minimum length of a slot is 1 ms. If not set, 1 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| config.to             | string         | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                            |

#### Returns

| Return type                                                                                                           | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [AggregatedLog](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#aggregatedlog) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { logsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await logsClient.getLogHistogramData();
```

### getLogRecords

**logsClient.getLogRecords(config): Promise\<[LogRecordsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#logrecordslist)>**

Reads log records | maturity=EARLY_ADOPTER

**Required scope:** storage:logs:read
**One of the following permissions is required:**

- environment:roles:logviewer
- storage:logs:read

Returns the first *X* records (specified in the **limit** query parameter). Log records are sorted by the criteria specified in the **sort** query parameter.

If the query is too large to be processed in a single request, it is divided into slices (slices are unsupported on *Log Management and Analytics, powered by Grail*). In that case the first response contains the **nextSliceKey** cursor for the second slice. Use it in the **nextSliceKey** query parameter to obtain the second slice, which contains **nextSliceKey** cursor for the third slice, and so on.

Results can be distributed unevenly between slices and some slices might be empty.

If *Log Management and Analytics, powered by Grail* is enabled,
then a bearer OAuth token (with `storage:logs:read` and `storage:buckets:read` scopes)
needs to be used for authentication.

Please note that *Dynatrace API explorer* does not currently support OAuth authentication.

**Logs on Grail:**

It is **not** recommended to run Grail queries using Logs v2 API, please use Grail API instead.

#### Parameters

| Name                | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.from         | string | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of two weeks is used (`now-2w`). |
| config.limit        | number | The desired amount of log records. The maximal allowed limit is 1000. If not set, 1000 is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| config.nextSliceKey | string | The cursor for the next slice of results. You can find it in the **nextSliceKey** field of the previous response. The first slice is always returned if you don't specify this parameter. If this parameter is set, all other query parameters are ignored. Unsupported on *Log Management and Analytics, powered by Grail*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| config.query        | string | The log search query. The query must use the [Dynatrace search query language](https://dt-url.net/pe03s6f).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.sort         | string | Defines the ordering of the log records. Each field has a sign prefix (+/-) for sorting order. If no sign prefix is set, then the `+` option will be applied. Currently, ordering is available only for the timestamp (+timestamp for the oldest records first, or -timestamp for the newest records first). When millisecond resolution provided by the timestamp is not enough, log records are sorted based on the order in which they appear in the log source (remote process writing to REST API endpoint or remote process from which logs are collected).  <br />Pattern: `^[+-]?[a-z]+$`                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.to           | string | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                            |

#### Returns

| Return type                                                                                                             | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [LogRecordsList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#logrecordslist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { logsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await logsClient.getLogRecords();
```

### storeLog

**logsClient.storeLog(config): Promise\<void | [SuccessEnvelope](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#successenvelope)>**

Pushes log records to Dynatrace

**Required scope:** storage:logs:write
**Required permission:** storage:logs:write

Ingested logs are stored in the indexed log storage.

This endpoint requires an ActiveGate with the **Log Analytics Collector** module enabled.

**High-cardinality attributes:**

Unique log data attributes (high-cardinality attributes) such as `span_id` and `trace_id` generate unnecessarily excessive facet lists that may impact log viewer performance. Because of this, they aren't listed in log viewer facets. You can still use them in a log viewer advanced search query.

**Limitations:**

Please refer to the following documentation pages:

- [Grail tenant limits](https://docs.dynatrace.com/docs/analyze-explore-automate/logs/lma-limits)
- [LM v2 SaaS tenant limits](https://docs.dynatrace.com/docs/analyze-explore-automate/log-monitoring/log-monitoring-limits)
- [LM v2 Managed tenant limits](https://docs.dynatrace.com/managed/analyze-explore-automate/log-monitoring/log-monitoring-limits)

**Error handling:**

The following HTTP status codes are considered retryable:

- 429 Too Many Requests
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout

It is recommended to use an exponential backoff strategy for retrying requests.

#### Parameters

| Name                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required)   | LogMessageJson \| LogMessagePlain                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                            |
| config.type (required)   | "application/json; charset=utf-8" \| "application/json" \| "application/jsonl" \| "application/jsonl; charset=utf-8" \| "application/jsonlines" \| "application/jsonlines+json" \| "application/jsonlines+json; charset=utf-8" \| "application/jsonlines; charset=utf-8" \| "application/x-jsonlines" \| "application/x-jsonlines; charset=utf-8" \| "application/x-ndjson" \| "application/x-ndjson; charset=utf-8" \| "text/plain; charset=utf-8" |                                                                                                                                                                                                            |
| config.contentType       | string                                                                                                                                                                                                                                                                                                                                                                                                                                              | Allows to provide content type with query parameter. Has priority over value provided in Content-Type header.                                                                                              |
| config.structure         | "flattened" \| "raw"                                                                                                                                                                                                                                                                                                                                                                                                                                | Specifies the JSON parsing mode for log ingestion (SaaS only). For more details, refer to the [documentation](https://dt-url.net/rl03zti).                                                                 |
| config.xDynatraceOptions | string                                                                                                                                                                                                                                                                                                                                                                                                                                              | (Optional) Contains ampersand-separated Dynatrace-specific parameters. Query parameter takes precedence over the header value. For more details, refer to the [documentation](https://dt-url.net/rl03zti). |

#### Returns

| Return type                                                                                                               | Status code | Description                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| [SuccessEnvelope](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#successenvelope) | 200         | Only a part of input events were ingested due to event invalidity. For details, check the response body. |
| void                                                                                                                      | 204         | Success. Response doesn't have a body.                                                                   |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. This is due either to the status of your licensing agreement or because you've exhausted your [DPS license](https://www.dynatrace.com/support/help/shortlink/dynatrace-platform-subscription). \| Failed. The requested resource doesn't exist. This may happen when no ActiveGate is available with the Log Analytics Collector module enabled. \| Failed. Request payload size is too big. This may happen when the payload byte size exceeds the limit or when the ingested payload is a JSON array with the size exceeding the limit. \| Failed. Too Many Requests. This may happen when ActiveGate is unable to process more requests at the moment or when log ingest is disabled. Retryable with exponential backoff strategy. \| Failed. The server either does not recognize the request method, or it lacks the ability to fulfil the request. In Log Monitoring Classic, this may happen when indexed log storage is not enabled. \| Failed. The server is currently unable to handle the request. This may happen when ActiveGate is overloaded. Retryable with exponential backoff strategy. \| Client side error. \| Server side error. |

**Code example**

```ts
import { logsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await logsClient.storeLog({
  type: "application/json",
  body: [
    {
      content:
        "Exception: Custom error log sent via Generic Log Ingest",
      "log.source": "/var/log/syslog",
      timestamp: "2022-01-17T22:12:31.0000",
      severity: "error",
      "custom.attribute": "attribute value",
    },
    {
      content:
        "Exception: Custom error log sent via Generic Log Ingest",
      "log.source": "/var/log/syslog",
      timestamp: "2022-01-17T22:12:35.0000",
    },
    {
      content:
        "Exception: Custom error log sent via Generic Log Ingest",
      "log.source": "/var/log/syslog",
    },
    {
      content:
        "Exception: Custom error log sent via Generic Log Ingest",
    },
  ],
});
```
