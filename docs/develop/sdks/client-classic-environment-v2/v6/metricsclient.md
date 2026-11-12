## metricsClient

```js
import { metricsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### allMetrics

**metricsClient.allMetrics(config): Promise\<[MetricDescriptorCollection](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#metricdescriptorcollection)>**

Lists all available metrics

**Required scope:** environment-api:metrics:read
**Required permission:** environment:roles:viewer

You can narrow down the output by selecting metrics in the **metricSelector** field.

You can additionally limit the output by using pagination:

1. Specify the number of results per page in the **pageSize** query parameter.

2. Then use the cursor from the **nextPageKey** field of the response in the **nextPageKey** query parameter to obtain subsequent pages. All other query parameters must be omitted.

#### Parameters

| Name                         | Type                                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.acceptType (required) | "application/json; charset=utf-8" \| "text/csv; header=absent; charset=utf-8" \| "text/csv; header=present; charset=utf-8" |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| config.fields                | string                                                                                                                     | Defines the list of metric properties included in the response. `metricId` is **always** included in the result. The following additional properties are available: * `displayName`
  : The name of the metric in the user interface. Enabled by default.
* `description`
  : A short description of the metric. Enabled by default.
* `unit`
  : The unit of the metric. Enabled by default.
* `tags`
  : The tags of the metric. * `dduBillable`
  :  An indicator whether the usage of metric consumes&#x20;
  [Davis data units](https://dt-url.net/ddu)
  . Deprecated and always&#x20;
  `false`
   for Dynatrace Platform Subscription. Superseded by&#x20;
  `billable`
  .
* `billable`
  :  An indicator whether the usage of metric is billable. * `created`
  :  The timestamp (UTC milliseconds) when the metrics has been created.
* `lastWritten`
  :  The timestamp (UTC milliseconds) when metric data points have been written for the last time.
* `aggregationTypes`
  : The list of allowed aggregations for the metric. Note that it may be different after a&#x20;
  [transformation](https://dt-url.net/metricSelector)
   is applied.
* `defaultAggregation`
  : The default aggregation of the metric. It is used when no aggregation is specified or the&#x20;
  `:auto`
   transformation is set.
* `dimensionDefinitions`
  : The fine metric division (for example, process group and process ID for some process-related metric).
* `transformations`
  : A list of&#x20;
  [transformations](https://dt-url.net/metricSelector)
   that can be applied to the metric.
* `entityType`
  : A list of entity types supported by the metric.
* `minimumValue`
  : The minimum allowed value of the metric.
* `maximumValue`
  : The maximum allowed value of the metric.
* `rootCauseRelevant`
  : Whether (true or false) the metric is related to a root cause of a problem. A root-cause relevant metric represents a strong indicator for a faulty component.
* `impactRelevant`
  : Whether (true or false) the metric is relevant to a problem's impact. An impact-relevant metric is highly dependent on other metrics and changes because an underlying root-cause metric has changed.
* `metricValueType`
  : The type of the metric's value. You have these options:&#x20;
  - `score`
    : A score metric is a metric where high values indicate a good situation, while low values indicate trouble. An example of such a metric is a success rate.
  - `error`
    : An error metric is a metric where high values indicate trouble, while low values indicate a good situation. An example of such a metric is an error count.
  &#x20;
* `latency`
  : The latency of the metric, in minutes. The latency is the expected reporting delay (for example, caused by constraints of cloud vendors or other third-party data sources) between the observation of a metric data point and its availability in Dynatrace. The allowed value range is from&#x20;
  `1`
   to&#x20;
  `60`
   minutes.
* `metricSelector`
  : The underlying metric selector used by a func: metric.
* `scalar`
  : Indicates whether the metric expression resolves to a scalar (
  `true`
  ) or to a series (
  `false`
  ). A scalar result always contains one data point. The amount of data points in a series result depends on the resolution you're using.
* `resolutionInfSupported`
  : If&#x20;
  `true`
  , resolution=Inf can be applied to the metric query.
* `unitDisplayFormat`
  : The numeral system used to display byte/bit values. Can be&#x20;
  `binary`
   (1 MiB = 1024 KiB) or&#x20;
  `decimal`
   (1 MB = 1000 kB).
* `exported`
  : Indicates whether the metric has been exported to Grail.
* `dimensionCardinalities`
  : Cardinality statistics for each dimension of a MINT metric, including the estimated number of unique values and relative percentage. To add properties, list them with leading plus `+`. To exclude default properties, list them with leading minus `-`. To specify several properties, join them with a comma (for example `fields=+aggregationTypes,-description`). If you specify just one property, the response contains the metric key and the specified property. To return metric keys only, specify `metricId` here. |
| config.metadataSelector      | string                                                                                                                     | The metadata scope of the query. Only metrics with specified properties are included to the response. You can set one or more of the following criteria. Values are case-sensitive and the `EQUALS` operator is used. If several values are specified, the **OR** logic applies. * &#x20;
  `unit("unit-1","unit-2")`
  &#x20;
* &#x20;
  `tags("tag-1","tag-2")`
  &#x20;
* &#x20;
  `dimensionKey("dimkey-1","dimkey-2")`. The filtering applies only to dimensions that were written within the last 14 days.
  &#x20;
* &#x20;
  `custom("true")`. "true" to include only user-defined metrics metrics (without namespace or with `ext:`, `calc:`, `func:`, `appmon:`), "false" to filter them out.
  &#x20;
* &#x20;
  `exported("true")`. "true" to include only exported metrics, "false" to filter them out.
  &#x20; To set several criteria, separate them with a comma (`,`). For example, `tags("feature","cloud"),unit("Percent"),dimensionKey("location"),custom("true")`. Only results matching **all** criteria are included in response. For example, to list metrics that have the tags **feature** AND **cloud** with a unit of **Percent** OR **MegaByte** AND a dimension with a dimension key **location**, use this **metadataSelector**: `tags("feature"),unit("Percent","MegaByte"),tags("cloud"),dimensionKey("location")`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.metricSelector        | string                                                                                                                     | Selects metrics for the query by their keys. You can specify multiple metric keys separated by commas (for example, `metrickey1,metrickey2`). To select multiple metrics belonging to the same parent, list the last part of the required metric keys in parentheses, separated by commas, while keeping the common part untouched. For example, to list the `builtin:host.cpu.idle` and `builtin:host.cpu.user` metric, write: `builtin:host.cpu.(idle,user)`. You can select a full set of related metrics by using a trailing asterisk (`*`) wildcard. For example, `builtin:host.*` selects all host-based metrics and `builtin:*` selects all Dynatrace-provided metrics. You can set additional transformation operators, separated by a colon (`:`). See [Metrics selector transformations](https://dt-url.net/metricSelector) in Dynatrace Documentation for additional information on available result transformations and syntax. Only `aggregation`, `merge`, `parents`, and `splitBy` transformations are supported by this endpoint. If the metric key contains any symbols you must quote (`"`) the key. The following characters inside of a quoted metric key must be escaped with a tilde (`~`): * Quotes (
  `"`
  )
* Tildes (
  `~`
  ) For example, to query the metric with the key of **ext:selfmonitoring.jmx.Agents: Type "APACHE"** you must specify this selector: `"ext:selfmonitoring.jmx.Agents: Type ~"APACHE~""` To find metrics based on a search term, rather than metricId, use the **text** query parameter instead of this one.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| config.nextPageKey           | string                                                                                                                     | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.pageSize              | number                                                                                                                     | The amount of metric schemata in a single response payload. The maximal allowed page size is 500. If not set, 100 is used. If a value higher than 500 is used, only 500 results per page are returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| config.text                  | string                                                                                                                     | Metric registry search term. Only show metrics that contain the term in their key, display name, or description. Use the `metricSelector` parameter instead of this one to select a complete metric hierarchy instead of doing a text-based search.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| config.writtenSince          | string                                                                                                                     | Filters the resulted set of metrics to those that have data points within the specified timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| config.writtenSinceMode      | string                                                                                                                     | Controls how the writtenSince filter is applied. * `INCLUDE`
  : Includes only metrics that have been written since the specified writtenSince timestamp (filters out metrics not written since then).
* `EXCLUDE`
  : Excludes metrics that have been written since the specified writtenSince timestamp (only returns metrics not written since then). If not specified, the default is `INCLUDE`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Returns

| Return type                                                                                                                                     | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [MetricDescriptorCollection](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#metricdescriptorcollection) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { metricsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await metricsClient.allMetrics({
  acceptType: "application/json; charset=utf-8",
});
```

### bulkDelete

**metricsClient.bulkDelete(config): Promise\<void>**

Deletes all unused metrics within the specified number of days

**Required scope:** environment-api:metrics:write
**Required permission:** environment:roles:manage-settings

You can only delete metrics that have been ingested via the Metrics v2 API. Deleted metrics cannot be recovered.

#### Parameters

| Name                             | Type   | Description                                                                                                                                                                                                                           |
| -------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.metricSelector (required) | string | Selects metrics to be considered for deletion. You can select a full set of related metrics by using a trailing asterisk (`*`) wildcard. For example, `airflow_*` selects all custom airflow metrics, `*` selects all custom metrics. |
| config.minUnusedDays (required)  | number | The number of days since the metric was last used. Must be between `30` and `1825` (5 years).                                                                                                                                         |

#### Returns

| Return type | Status code | Description                                              |
| ----------- | ----------- | -------------------------------------------------------- |
| void        | 202         | Success. The deletion of the metrics has been triggered. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { metricsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await metricsClient.bulkDelete({
  metricSelector: "...",
  minUnusedDays: 10,
});
```

### delete

**metricsClient.delete(config): Promise\<void>**

Deletes the specified metric

**Required scope:** environment-api:metrics:write
**Required permission:** environment:roles:manage-settings

Deletion cannot be undone! You can't delete a metric if it has data points ingested within the last two hours.

#### Parameters

| Name                        | Type   | Description                     |
| --------------------------- | ------ | ------------------------------- |
| config.metricKey (required) | string | The key of the required metric. |

#### Returns

| Return type | Status code | Description                                             |
| ----------- | ----------- | ------------------------------------------------------- |
| void        | 202         | Success. The deletion of the metric has been triggered. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { metricsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await metricsClient.delete({
  metricKey: "...",
});
```

### ingest

**metricsClient.ingest(config): Promise\<[ValidationResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#validationresponse)>**

Pushes metric data points to Dynatrace

**Required scope:** storage:metrics:write

#### Parameters

| Name                   | Type   |
| ---------------------- | ------ |
| config.body (required) | string |

#### Returns

| Return type | Status code | Description                                                          |
| ----------- | ----------- | -------------------------------------------------------------------- |
| void        | 202         | The provided business events are all accepted and will be processed. |

#### Throws

| Error Type              | Error Message                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| ValidationResponseError | Some data points are invalid. Valid data points are accepted and will be processed in the background. |
| ErrorEnvelopeError      | Client side error. \| Server side error.                                                              |

**Code example**

```ts
import { metricsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await metricsClient.ingest({
  body: "server.cpu.temperature,cpu.id=0 42",
});
```

### metric

**metricsClient.metric(config): Promise\<[MetricDescriptor](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#metricdescriptor)>**

Gets the descriptor of the specified metric

**Required scope:** environment-api:metrics:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                         | Type                                                                                                                       | Description                                                                                                                                                                                                                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.acceptType (required) | "application/json; charset=utf-8" \| "text/csv; header=absent; charset=utf-8" \| "text/csv; header=present; charset=utf-8" |                                                                                                                                                                                                                                                                                              |
| config.metricKey (required)  | string                                                                                                                     | The key of the required metric. You can set additional transformation operators, separated by a colon (`:`). See [Metrics selector transformations](https://dt-url.net/metricSelector) in Dynatrace Documentation for additional information on available result transformations and syntax. |

#### Returns

| Return type                                                                                                                 | Status code | Description |
| --------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [MetricDescriptor](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#metricdescriptor) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { metricsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await metricsClient.metric({
  acceptType: "application/json; charset=utf-8",
  metricKey: "...",
});
```

### query

**metricsClient.query(config): Promise\<[MetricData](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#metricdata)>**

Gets data points of the specified metrics

**Required scope:** environment-api:metrics:read
**Required permission:** environment:roles:viewer

The following limits apply:

- The amount of aggregated data points in the response is limited to 1,000
- The amount of series in the response is limited to 1,000
  - The amount of data points per series is limited to 10,080 (minutes of one week)
  - The overall amount of data points is limited to 100,000

The **dataPointCountRatio** specifies the ratio of queried data points divided by the maximum number of data points per metric that are allowed in a single query.
The **dimensionCountRatio** specifies the ratio of queried dimension tuples divided by the maximum number of dimension tuples allowed in a single query.

#### Parameters

| Name                         | Type                                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.acceptType (required) | "application/json; charset=utf-8" \| "text/csv; header=absent; charset=utf-8" \| "text/csv; header=present; charset=utf-8" |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| config.entitySelector        | string                                                                                                                     | Specifies the entity scope of the query. Only data points delivered by matched entities are included in response. You must set one of these criteria: * Entity type:&#x20;
  `type("TYPE")`
* Dynatrace entity ID:&#x20;
  `entityId("id")`
  . You can specify several IDs, separated by a comma (
  `entityId("id-1","id-2")`
  ). All requested entities must be of the same type. You can add one or more of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified. * Tag:&#x20;
  `tag("value")`
  . Tags in&#x20;
  `[context]key:value`
  ,&#x20;
  `key:value`
  , and&#x20;
  `value`
   formats are detected and parsed automatically. Any colons (
  `:`
  ) that are part of the key or value must be escaped with a backslash(
  `\`
  ). Otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
* Management zone ID:&#x20;
  `mzId(123)`
* Management zone name:&#x20;
  `mzName("value")`
* Entity name:&#x20;
  - `entityName.equals`
    : performs a non-casesensitive&#x20;
    `EQUALS`
     query.
  - `entityName.startsWith`
    : changes the operator to&#x20;
    `BEGINS WITH`
    .
  - `entityName.in`
    : enables you to provide multiple values. The&#x20;
    `EQUALS`
     operator applies.
  - `caseSensitive(entityName.equals("value"))`
    : takes any entity name criterion as an argument and makes the value case-sensitive.
  &#x20;
* Health state (HEALTHY,UNHEALTHY):&#x20;
  `healthState("HEALTHY")`
* First seen timestamp:&#x20;
  `firstSeenTms.<operator>(now-3h)`
  . Use any timestamp format from the&#x20;
  **from**
   /
  **to**
   parameters. The following operators are available:&#x20;
  - `lte`
    : earlier than or at the specified time
  - `lt`
    : earlier than the specified time
  - `gte`
    : later than or at the specified time
  - `gt`
    : later than the specified time
  &#x20;
* Entity attribute:&#x20;
  `<attribute>("value1","value2")`
   and&#x20;
  `<attribute>.exists()`
  . To fetch the list of available attributes, execute the&#x20;
  [GET entity type](https://dt-url.net/2ka3ivt)
   request and check the&#x20;
  **properties**
   field of the response.
* Relationships:&#x20;
  `fromRelationships.<relationshipName>()`
   and&#x20;
  `toRelationships.<relationshipName>()`
  . This criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the&#x20;
  [GET entity type](https://dt-url.net/2ka3ivt)
   request and check the&#x20;
  **fromRelationships**
   and&#x20;
  **toRelationships**
   fields.
* Negation:&#x20;
  `not(<criterion>)`
  . Inverts any criterion except for&#x20;
  **type**
  . For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation. To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in the response. The maximum string length is 2,000 characters. Use the [`GET /metrics/\{metricId}`](https://dt-url.net/6z23ifk) call to fetch the list of possible entity types for your metric. To set a universal scope matching all entities, omit this parameter. |
| config.from                  | string                                                                                                                     | The start of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the relative timeframe of two hours is used (`now-2h`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| config.metricSelector        | string                                                                                                                     | Selects metrics for the query by their keys. You can select up to 10 metrics for one query. You can specify multiple metric keys separated by commas (for example, `metrickey1,metrickey2`). To select multiple metrics belonging to the same parent, list the last part of the required metric keys in parentheses, separated by commas, while keeping the common part untouched. For example, to list the `builtin:host.cpu.idle` and `builtin:host.cpu.user` metric, write: `builtin:host.cpu.(idle,user)`. If the metric key contains any symbols you must quote (`"`) the key. The following characters inside of a quoted metric key must be escaped with a tilde (`~`): * Quotes (
  `"`
  )
* Tildes (
  `~`
  ) For example, to query the metric with the key of **ext:selfmonitoring.jmx.Agents: Type "APACHE"** you must specify this selector: `"ext:selfmonitoring.jmx.Agents: Type ~"APACHE~""` You can set additional transformation operators, separated by a colon (`:`). See [Metrics selector transformations](https://dt-url.net/metricSelector) in Dynatrace Documentation for additional information on available result transformations and syntax.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| config.mzSelector            | string                                                                                                                     | The management zone scope of the query. Only metrics data relating to the specified management zones are included to the response. You can set one or more of the following criteria. Values are case-sensitive and the `EQUALS` operator is used. If several values are specified, the **OR** logic applies. * `mzId(123,456)`
* `mzName("name-1","name-2")`
   To set several criteria, separate them with a comma (
  `,`
  ). For example,&#x20;
  `mzName("name-1","name-2"),mzId(1234)`
  . Only results matching&#x20;
  **all**
   of the criteria are included in the response.For example, to list metrics that have the id&#x20;
  **123**
   OR&#x20;
  **234**
   AND the name&#x20;
  **name-1**
   OR&#x20;
  **name-2**
  , use this&#x20;
  **mzSelector**
  : \`mzId(123,234),mzName("name-1","name-2").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| config.resolution            | string                                                                                                                     | The desired resolution of data points. You can use one of the following options: * The desired amount of data points. This is the default option. This is a reference number of points, which is not necessarily equal to the number of the returned data points.
* The desired timespan between data points. This is a reference timespan, which is not necessarily equal to the returned timespan. To use this option, specify the unit of the timespan. Valid units for the timespan are: * `m`
  : minutes
* `h`
  : hours
* `d`
  : days
* `w`
  : weeks
* `M`
  : months
* `q`
  : quarters
* `y`
  : years If not set, the default is **120 data points**. For example: * Get data points which are 10 minutes apart:&#x20;
  `resolution=10m`
* Get data points which are 3 weeks apart:&#x20;
  `resolution=3w` You can also specify **multiple resolutions** for a single query using index-based formatting. This allows each metric expression in a multi-expression selector to have its own resolution. Use the format: `<index>:<resolution>(,<index>:<resolution>)*` Where: * `index`
   is the zero-based position of the metric expression in the&#x20;
  `metricSelector`
   list.
* `resolution`
   is either a number of data points (e.g.,&#x20;
  `120`
  ) or a timespan with a unit (e.g.,&#x20;
  `10m`
  ,&#x20;
  `3w`
  ). If a resolution is not specified for a given index, the default of **120 data points** is applied. **Examples:** * `resolution=0:Inf`
   → First metric uses resolution&#x20;
  `Inf`
  , second metric uses default (120 data points).
* `resolution=0:Inf,1:10`
   → First metric uses&#x20;
  `Inf`
  , second metric uses&#x20;
  `10`
   data points.
* `resolution=Inf`
   → All metrics use resolution&#x20;
  `Inf`
  .&#x20;
  **Note:**
   If multiple resolutions are used, the resolution field in the response is the smallest resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| config.to                    | string                                                                                                                     | The end of the requested timeframe. You can use one of the following formats: * Timestamp in UTC milliseconds.
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
  &#x20; If not set, the current timestamp is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Returns

| Return type                                                                                                     | Status code | Description |
| --------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [MetricData](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v6/types.md#metricdata) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { metricsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await metricsClient.query({
  acceptType: "application/json; charset=utf-8",
});
```
