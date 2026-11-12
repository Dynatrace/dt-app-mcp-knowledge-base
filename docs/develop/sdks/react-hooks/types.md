## Types

### AnalyzerHookOptions

#### Properties

| Name                                           | Type                   | Description                                                                                                                 |
| ---------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ~~autoFetch~~**DEPRECATED** (required)         | boolean                | If set to true, the hook will execute the query immediately. If set to false, the query only executes when calling refetch. |
| ~~autoFetchOnUpdate~~**DEPRECATED** (required) | boolean                | If set to true, the hook will execute the query on a component update. If set to false, it is not executed on update.       |
| ~~onError~~**DEPRECATED**                      | (error: Error) => void |                                                                                                                             |

### AutocompleteQueryOptions

Options for the autocomplete query passed to [useGrailFields](#usegrailfields).

#### Properties

| Name             | Type              | Description                                                           |
| ---------------- | ----------------- | --------------------------------------------------------------------- |
| enabled          | boolean           | Whether the query is enabled.                                         |
| query (required) | string            | The DQL query string used to derive autocomplete field suggestions.   |
| retry            | number \| boolean | Number of retries or boolean to indicate whether to retry on failure. |
| staleTime        | number            | Time in milliseconds before the query is considered stale.            |

### DqlQueryParams

Parameters for query execution.

#### Properties

| Name                         | Type                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultSamplingRatio         | number                            | Default sampling ratio. By default no sampling is applied. No upper limit but will be normalized to a power of 10 less than or equal to 100000.<br /><br />**Example:** `1`<br />**Minimum:** `1`                                                                                                                                                                                                                                                                                                                                                   |
| defaultScanLimitGbytes       | number                            | Default scan limit in gigabytes. Can be overridden in DQL. Default value is configured on application level (see documentation of FETCH command). Use -1 for no limit. Although this parameter has no explicit upper bound, other constraints such as timeouts, maxResultRecords, or maxResultBytes may still apply, as this API is not intended for large-scale data export.<br /><br />**Example:** `100`<br />**Minimum:** `-1`                                                                                                                  |
| defaultTimeframeEnd          | string                            | The query timeframe 'end' timestamp in ISO-8601 or RFC3339 format. If the timeframe 'start' parameter is missing, the whole timeframe is ignored. *Note that if a timeframe is specified within the query string (query) then it has precedence over this query request parameter.*<br /><br />**Example:** `2022-04-20T13:10:04.123Z`                                                                                                                                                                                                              |
| defaultTimeframeStart        | string                            | The query timeframe 'start' timestamp in ISO-8601 or RFC3339 format. If the timeframe 'end' parameter is missing, the whole timeframe is ignored. *Note that if a timeframe is specified within the query string (query) then it has precedence over this query request parameter.*<br /><br />**Example:** `2022-04-20T12:10:04.123Z`                                                                                                                                                                                                              |
| dtClientContext              | string                            | The dt-client-context header is an optional string parameter used for monitoring purposes. When included in a request, it helps retrieve information about the execution of the query. It shouldn't hold sensitive information.                                                                                                                                                                                                                                                                                                                     |
| enablePreview                | boolean                           | Request preview results. If a preview is available within the requestTimeoutMilliseconds, then it will be returned as part of the response.<br /><br />**Default:** `false`<br />**Example:** `true`                                                                                                                                                                                                                                                                                                                                                |
| enforceQueryConsumptionLimit | boolean                           | Boolean to indicate if the query consumption limit should be enforced                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| enrich                       | string                            | If set additional data will be available in the metadata section.<br /><br />**Example:** `metric-metadata`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| fetchTimeoutSeconds          | number                            | The time limit for fetching data. This is a soft limit as further data processing can happen after fetching. While this parameter has no explicit upper bound in the API, application-level default and maximum fetch timeout constraints still apply, and other limits such as maxResultRecords or maxResultBytes may take effect, as this API is not designed for large-scale data export.<br /><br />**Example:** `60`<br />**Minimum:** `0`                                                                                                     |
| filterSegments               | [FilterSegments](#filtersegments) | Represents a collection of filter segments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| includeContributions         | boolean                           | Indicates whether bucket contribution information should be included in the query response metadata. When set to true, the response will contain details about how each bucket contributed to the query result.<br /><br />**Default:** `false`<br />**Example:** `true`                                                                                                                                                                                                                                                                            |
| includeTypes                 | boolean                           | Parameter to exclude the type information from the query result. In case not specified, the type information will be included.<br /><br />**Default:** `true`                                                                                                                                                                                                                                                                                                                                                                                       |
| locale                       | string                            | The query locale. If none specified, then a language/country neutral locale is chosen. The input values take the ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore. For instance, both values are valid 'en' or 'en_US'.<br /><br />**Example:** `en_US`                                                                                                                                                                                                                                              |
| maxResultBytes               | number                            | The maximum number of bytes permitted for the serialized result. This limit applies only to records and is treated as a soft constraint - meaning that if the final record pushes the result size beyond this limit, that entire record will still be included in the response. While this parameter has no default value or explicit upper bound, other constraints such as timeouts or maxResultRecords may still take effect, as this API is not designed for large-scale data export.<br /><br />**Example:** `1000000`<br />**Minimum:** `0`   |
| maxResultRecords             | number                            | The maximum number of query result records to be returned. If this limit is exceeded, a warning notification will be included in the response. Although this parameter has no explicit upper bound, other constraints such as timeouts or maxResultBytes may still apply, as this API is not intended for large-scale data export.<br /><br />**Default:** `1000`<br />**Example:** `1000`<br />**Minimum:** `0`                                                                                                                                    |
| pollingPromiseSeconds        | number                            | The number of seconds the client promises to send the next polling request after a response for a running query was sent. If the client does not poll within this time window, the query will be cancelled. Handling of the polling promise starts after request processing finished, so that requestTimeoutMilliseconds and pollingPromiseSeconds can be used without contradicting each other. A value of 0 means that the query will be cancelled immediately, without waiting for a poll request. No default value.<br /><br />**Minimum:** `0` |
| query (required)             | string                            | The full query string.<br /><br />**Example:** `fetch events`<br />`\| filter event.type == "davis" AND davis.status != "CLOSED"`<br />`\| fields timestamp, davis.title, davis.underMaintenance, davis.status`<br />`\| sort timestamp`<br />`\| limit 10`                                                                                                                                                                                                                                                                                         |
| queryOptions                 | [QueryOptions](#queryoptions)     | Query options enhance query functionality for Dynatrace internal services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| requestTimeoutMilliseconds   | number                            | The maximum time the response will be delayed to wait for a result. (This excludes the sending time and time spent in any services between the query-frontend and the client.) If the query finishes within the specified timeout, the query result is returned. Otherwise, the requestToken is returned, allowing polling for the result.<br /><br />**Example:** `1000`<br />**Minimum:** `0`                                                                                                                                                     |
| timezone                     | string                            | The query timezone. If none is specified, UTC is used as fallback. The list of valid input values matches that of the IANA Time Zone Database (TZDB). It accepts values in their canonical names like 'Europe/Paris', the abbreviated version like CET or the UTC offset format like '+01:00'<br /><br />**Example:** `UTC`                                                                                                                                                                                                                         |

### DqlQueryParamsContextProps

#### Properties

| Name                         | Type                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultSamplingRatio         | number                            | Default sampling ratio. By default no sampling is applied. No upper limit but will be normalized to a power of 10 less than or equal to 100000.<br /><br />**Example:** `1`<br />**Minimum:** `1`                                                                                                                                                                                                                                                                                                                                                   |
| defaultScanLimitGbytes       | number                            | Default scan limit in gigabytes. Can be overridden in DQL. Default value is configured on application level (see documentation of FETCH command). Use -1 for no limit. Although this parameter has no explicit upper bound, other constraints such as timeouts, maxResultRecords, or maxResultBytes may still apply, as this API is not intended for large-scale data export.<br /><br />**Example:** `100`<br />**Minimum:** `-1`                                                                                                                  |
| defaultTimeframeEnd          | string                            | The query timeframe 'end' timestamp in ISO-8601 or RFC3339 format. If the timeframe 'start' parameter is missing, the whole timeframe is ignored. *Note that if a timeframe is specified within the query string (query) then it has precedence over this query request parameter.*<br /><br />**Example:** `2022-04-20T13:10:04.123Z`                                                                                                                                                                                                              |
| defaultTimeframeStart        | string                            | The query timeframe 'start' timestamp in ISO-8601 or RFC3339 format. If the timeframe 'end' parameter is missing, the whole timeframe is ignored. *Note that if a timeframe is specified within the query string (query) then it has precedence over this query request parameter.*<br /><br />**Example:** `2022-04-20T12:10:04.123Z`                                                                                                                                                                                                              |
| dtClientContext              | string                            | The dt-client-context header is an optional string parameter used for monitoring purposes. When included in a request, it helps retrieve information about the execution of the query. It shouldn't hold sensitive information.                                                                                                                                                                                                                                                                                                                     |
| enablePreview                | boolean                           | Request preview results. If a preview is available within the requestTimeoutMilliseconds, then it will be returned as part of the response.<br /><br />**Default:** `false`<br />**Example:** `true`                                                                                                                                                                                                                                                                                                                                                |
| enforceQueryConsumptionLimit | boolean                           | Boolean to indicate if the query consumption limit should be enforced                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| enrich                       | string                            | If set additional data will be available in the metadata section.<br /><br />**Example:** `metric-metadata`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| fetchTimeoutSeconds          | number                            | The time limit for fetching data. This is a soft limit as further data processing can happen after fetching. While this parameter has no explicit upper bound in the API, application-level default and maximum fetch timeout constraints still apply, and other limits such as maxResultRecords or maxResultBytes may take effect, as this API is not designed for large-scale data export.<br /><br />**Example:** `60`<br />**Minimum:** `0`                                                                                                     |
| filterSegments               | [FilterSegments](#filtersegments) | Represents a collection of filter segments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| includeContributions         | boolean                           | Indicates whether bucket contribution information should be included in the query response metadata. When set to true, the response will contain details about how each bucket contributed to the query result.<br /><br />**Default:** `false`<br />**Example:** `true`                                                                                                                                                                                                                                                                            |
| includeTypes                 | boolean                           | Parameter to exclude the type information from the query result. In case not specified, the type information will be included.<br /><br />**Default:** `true`                                                                                                                                                                                                                                                                                                                                                                                       |
| locale                       | string                            | The query locale. If none specified, then a language/country neutral locale is chosen. The input values take the ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore. For instance, both values are valid 'en' or 'en_US'.<br /><br />**Example:** `en_US`                                                                                                                                                                                                                                              |
| maxResultBytes               | number                            | The maximum number of bytes permitted for the serialized result. This limit applies only to records and is treated as a soft constraint - meaning that if the final record pushes the result size beyond this limit, that entire record will still be included in the response. While this parameter has no default value or explicit upper bound, other constraints such as timeouts or maxResultRecords may still take effect, as this API is not designed for large-scale data export.<br /><br />**Example:** `1000000`<br />**Minimum:** `0`   |
| maxResultRecords             | number                            | The maximum number of query result records to be returned. If this limit is exceeded, a warning notification will be included in the response. Although this parameter has no explicit upper bound, other constraints such as timeouts or maxResultBytes may still apply, as this API is not intended for large-scale data export.<br /><br />**Default:** `1000`<br />**Example:** `1000`<br />**Minimum:** `0`                                                                                                                                    |
| pollingPromiseSeconds        | number                            | The number of seconds the client promises to send the next polling request after a response for a running query was sent. If the client does not poll within this time window, the query will be cancelled. Handling of the polling promise starts after request processing finished, so that requestTimeoutMilliseconds and pollingPromiseSeconds can be used without contradicting each other. A value of 0 means that the query will be cancelled immediately, without waiting for a poll request. No default value.<br /><br />**Minimum:** `0` |
| queryOptions                 | [QueryOptions](#queryoptions)     | Query options enhance query functionality for Dynatrace internal services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| requestTimeoutMilliseconds   | number                            | The maximum time the response will be delayed to wait for a result. (This excludes the sending time and time spent in any services between the query-frontend and the client.) If the query finishes within the specified timeout, the query result is returned. Otherwise, the requestToken is returned, allowing polling for the result.<br /><br />**Example:** `1000`<br />**Minimum:** `0`                                                                                                                                                     |
| timezone                     | string                            | The query timezone. If none is specified, UTC is used as fallback. The list of valid input values matches that of the IANA Time Zone Database (TZDB). It accepts values in their canonical names like 'Europe/Paris', the abbreviated version like CET or the UTC offset format like '+01:00'<br /><br />**Example:** `UTC`                                                                                                                                                                                                                         |

### DssQueryOptions

Options for the DSS query passed to [useGrailFields](#usegrailfields).

#### Properties

| Name                              | Type                                                 | Description                                                                                                       |
| --------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ~~dataObject~~**DEPRECATED**      | "logs" \| "spans" \| "smartscape.nodes" \| "metrics" | The target DSS data object (`"logs"`, `"spans"`, `"smartscape.nodes"`, or `"metrics"`).                           |
| enabled                           | boolean                                              | Whether the query is enabled.                                                                                     |
| ~~filterStatement~~**DEPRECATED** | string                                               | Optional DSS filter statement to scope the internal DSS query.                                                    |
| maxResultRecords                  | number                                               | Maximum number of records returned by the DSS query. Defaults to 1000. Increase this on tenants with many fields. |
| query                             | string                                               | The DSS query string to execute. When provided, `dataObject` and `filterStatement` are ignored.                   |
| requestTimeoutMilliseconds        | number                                               | Optional timeout in milliseconds for the DSS query request.                                                       |
| retry                             | number \| boolean                                    | Number of retries or boolean to indicate whether to retry on failure.                                             |
| staleTime                         | number                                               | Time in milliseconds before the query is considered stale.                                                        |

### FilterSegment

A filter segment is identified by an ID. Each segment includes a list of variable definitions.

#### Properties

| Name          | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| id (required) | string                                                                      |
| variables     | Array\<[FilterSegmentVariableDefinition](#filtersegmentvariabledefinition)> |

### FilterSegmentVariableDefinition

Defines a variable with a name and a list of values.

#### Properties

| Name              | Type           |
| ----------------- | -------------- |
| name (required)   | string         |
| values (required) | Array\<string> |

### FilterSegments

Represents a collection of filter segments.

### GrailFieldQueryOption

A configured query-option object suitable for passing to
`queryClient.prefetchQuery()` or `queryClient.fetchQuery()`.

#### Properties

| Name                | Type                                      | Description                                                           |
| ------------------- | ----------------------------------------- | --------------------------------------------------------------------- |
| enabled             | boolean                                   | Whether the query is enabled.                                         |
| queryFn (required)  | (context: \{ signal }) => Promise\<TData> | The function that fetches the data.                                   |
| queryKey (required) |                                           | The query key used for caching and invalidation.                      |
| retry               | number \| boolean                         | Number of retries or boolean to indicate whether to retry on failure. |
| staleTime           | number                                    | Time in milliseconds before the query is considered stale.            |

### GrailFieldsQueryOptions

Return type of [getGrailFieldsQueryOptions](#getgrailfieldsqueryoptions), containing query options for both autocomplete and DSS queries.

#### Properties

| Name                    | Type                                                                   |
| ----------------------- | ---------------------------------------------------------------------- |
| autocomplete (required) | [GrailFieldQueryOption](#grailfieldqueryoption)\<AutocompleteResponse> |
| dss (required)          | [GrailFieldQueryOption](#grailfieldqueryoption)\<QueryResult>          |

### QueryOptions

Query options enhance query functionality for Dynatrace internal services.

### QueryOverrides

Subset of `UseQueryOptions` fields (from `@tanstack/react-query`) forwarded to each internal
`useQueries` entry. Mirrors the `enabled`, `staleTime`, and `retry` options.

#### Properties

| Name      | Type              | Description                                                           |
| --------- | ----------------- | --------------------------------------------------------------------- |
| enabled   | boolean           | Whether the query is enabled.                                         |
| retry     | number \| boolean | Number of retries or boolean to indicate whether to retry on failure. |
| staleTime | number            | Time in milliseconds before the query is considered stale.            |

### RefetchOptions

Options for the refetch functions returned by the useDql hook.

#### Properties

| Name          | Type    | Description                                                                                                                                                                                        |
| ------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cancelRefetch | boolean | If set to `true`, a currently running request will be cancelled before a new request is made If set to `false`, no refetch will be made if there is already a request running. Defaults to `true`. |
| throwOnError  | boolean |                                                                                                                                                                                                    |

### TypedQueryResult

Generic type that allows to type data returned from Grail.

#### Properties

| Name                | Type                              | Description                            |
| ------------------- | --------------------------------- | -------------------------------------- |
| metadata (required) | [UseDqlMetadata](#usedqlmetadata) |                                        |
| records (required)  | Array\<T>                         |                                        |
| types (required)    | Array\<RangedFieldTypes>          | The data types for the result records. |

### UseDqlGrailMetadata

Collects various bits of metadata information.

#### Properties

| Name                      | Type                                | Description                                                                                               |
| ------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------- |
| analysisTimeframe         | [UseDqlTimeframe](#usedqltimeframe) |                                                                                                           |
| canonicalQuery            | string                              | The canonical form of the query. It has normalized spaces and canonical constructs.                       |
| contributions             | Contributions                       |                                                                                                           |
| dqlVersion                | string                              | The version of DQL that was used to process the query request.                                            |
| executionTimeMilliseconds | number                              | The time it took to execute the query.                                                                    |
| flags                     | Array\<string>                      | Flags indicating specific properties of the query execution, such as CLASSIC_ENTITY_MIGRATION_ADVISED. |
| locale                    | string                              | Effective locale for the query.                                                                           |
| notifications             | Array\<MetadataNotification>        | Collected messages during the execution of the query.                                                     |
| query                     | string                              | The submitted query.                                                                                      |
| queryId                   | string                              | The id of the query                                                                                       |
| sampled                   | boolean                             | True if sampling was used for at least one segment.                                                       |
| scannedBytes              | number                              | Number of scanned bytes during the query execution.                                                       |
| scannedDataPoints         | number                              |                                                                                                           |
| scannedRecords            | number                              | Number of scanned records during the query execution.                                                     |
| timezone                  | string                              | Effective timezone for the query.                                                                         |

### UseDqlMetadata

Collects various bits of metadata information.

#### Properties

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| grail   | [UseDqlGrailMetadata](#usedqlgrailmetadata) |
| metrics | Array\<MetricMetadata>                      |

### UseDqlOptions

Options for the useDql hook.

#### Properties

| Name            | Type                                      | Description                                                                                                   |
| --------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| enabled         | boolean                                   | Set this to `false` to disable this query from automatically running. Default: `true`.                        |
| placeholderData | [TypedQueryResult](#typedqueryresult)\<T> | If set, this value will be used as the placeholder data while the query is still in the `loading` state.      |
| pollRate        | number                                    | The rate at which Grail query is polled.                                                                      |
| refetchInterval | number                                    | Query will continuously refetch at this frequency in milliseconds.                                            |
| retryOnMount    | boolean                                   | If set to false, the query will not be retried on mount if it contains an error. Defaults to true.            |
| runInBackground | boolean                                   | If set to `true`, the query will run in the background and not cancel when switching focus. Default: `false`. |
| staleTime       | number                                    | The time in milliseconds after which data is considered stale.                                                |

### UseDqlResult

Represents the possible results of the useDql hook.

#### Properties

| Name                         | Type                                                                                        | Description                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| cancel (required)            | () => Promise\<void>                                                                        | Function to call to cancel to ongoing query                                                             |
| data                         | [TypedQueryResult](#typedqueryresult)\<T>                                                   | The last successfully resolved data for the query.                                                      |
| error (required)             | null \| Error                                                                               | The error object for the query, if an error was thrown.                                                 |
| forceRefetch (required)      | (options: [RefetchOptions](#refetchoptions)) => Promise\<[UseDqlResult](#usedqlresult)\<T>> | Function to manually force refetch the query. Ignores stale time.                                       |
| isError (required)           | boolean                                                                                     | `true` if the query attempt resulted in an error.                                                       |
| isFetched (required)         | boolean                                                                                     | `true` if the query has been fetched.                                                                   |
| isFetching (required)        | boolean                                                                                     | `true` whenever the query is executing, which includes initial pending as well as background refetches. |
| isLoading (required)         | boolean                                                                                     | `true` whenever the first fetch for a query is in-flight.                                               |
| isLoadingError (required)    | boolean                                                                                     | Will be `true` if the query failed while fetching for the first time.                                   |
| isPending (required)         | boolean                                                                                     | `true` if there's no cached data and no query attempt was finished yet.                                 |
| isPlaceholderData (required) | boolean                                                                                     | Will be `true` if the data shown is the placeholder data.                                               |
| isRefetchError (required)    | boolean                                                                                     | `true` if the query failed while refetching.                                                            |
| isStale (required)           | boolean                                                                                     | `true` if the data in the cache is invalidated or if the data is older than the given `staleTime`.      |
| isSuccess (required)         | boolean                                                                                     | `true` if the query has received a response with no errors and is ready to display the data.            |
| progress (required)          | undefined \| number                                                                         | The progress of the query from 0 to 100.                                                                |
| refetch (required)           | (options: [RefetchOptions](#refetchoptions)) => Promise\<[UseDqlResult](#usedqlresult)\<T>> | Function to manually refetch the query.                                                                 |
| state (required)             | "RUNNING" \| "NOT_STARTED" \| "SUCCEEDED" \| "RESULT_GONE" \| "CANCELLED" \| "FAILED"     | Possible state of the query.                                                                            |

### UseDqlTimeframe

Represents a timeframe value when no date transformations are applied

#### Properties

| Name  | Type   | Description                      |
| ----- | ------ | -------------------------------- |
| end   | string | The end time of the timeframe.   |
| start | string | The start time of the timeframe. |

### UseGrailFieldsOptions

Options for the [useGrailFields](#usegrailfields) hook.

#### Properties

| Name                                | Type                                                     | Description                                                                                                                                                                                                                                                        |
| ----------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| autocompleteQueryOptions (required) | [AutocompleteQueryOptions](#autocompletequeryoptions)    | Options for the autocomplete query, including the DQL query string and optional cache/retry overrides.                                                                                                                                                             |
| dssQueryOptions (required)          | [DssQueryOptions](#dssqueryoptions)                      | Options for the DSS query, including the query string (or deprecated `dataObject`) and optional cache/retry overrides.                                                                                                                                             |
| select                              | (data: [UseGrailFieldsRaw](#usegrailfieldsraw)) => TData | Selector applied to the raw data object (`{ autocompleteData, dssData }`) once both queries succeed. Use this to transform or filter the raw data before it's returned as `data`. When omitted, `data` is the full [UseGrailFieldsRaw](#usegrailfieldsraw) object. |

### UseGrailFieldsRaw

The raw, unprocessed response data returned by the two underlying queries in [useGrailFields](#usegrailfields).

#### Properties

| Name             | Type                 | Description                                |
| ---------------- | -------------------- | ------------------------------------------ |
| autocompleteData | AutocompleteResponse | Response data from the autocomplete query. |
| dssData          | QueryResult          | Response data from the DSS query.          |

### UseGrailFieldsResult

Return value of the [useGrailFields](#usegrailfields) hook.

#### Properties

| Name                           | Type                            | Description                                                                                                                  |
| ------------------------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| cancel (required)              | () => Promise                   | Cancels both underlying in-flight requests by aborting their signals via React Query.                                        |
| data (required)                | undefined \| TData              | The raw response data from both queries (or the value returned by `select` once both succeed), or `undefined` while loading. |
| errors (required)              | \{ autocomplete, dss }          | Individual errors from each underlying query (`null` when that query hasn't errored).                                        |
| errors.autocomplete (required) | null \| Error                   | Error from the autocomplete query.                                                                                           |
| errors.dss (required)          | null \| Error                   | Error from the DSS query.                                                                                                    |
| isError (required)             | boolean                         | `true` when either query is in an error state.                                                                               |
| isLoading (required)           | boolean                         | `true` when either query is still fetching for the first time.                                                               |
| isSuccess (required)           | boolean                         | `true` when both queries have successfully fetched.                                                                          |
| refetch (required)             | () => Promise\<Array\<unknown>> | Re-triggers both underlying queries.                                                                                         |

### UseUserBaseResult

Base result shape shared by all `useUser` result states.

#### Properties

| Name                  | Type                                | Description                                                             |
| --------------------- | ----------------------------------- | ----------------------------------------------------------------------- |
| data (required)       | undefined \| null \| RestUserPublic | The resolved user data, if available.                                   |
| error (required)      | null \| Error                       | The error object, if an error occurred.                                 |
| isError (required)    | boolean                             | `true` if the query attempt resulted in an error.                       |
| isFetching (required) | boolean                             | `true` whenever the query is executing, including background refetches. |
| isLoading (required)  | boolean                             | `true` whenever the first fetch for a query is in-flight.               |
| isPending (required)  | boolean                             | `true` if there's no cached data and no query attempt was finished yet. |
| isSuccess (required)  | boolean                             | `true` if the query has received a response with no errors.             |
| refetch (required)    | () => void                          | Function to manually refetch the user.                                  |

### UseUserErrorResult

Result of the `useUser` hook when an error occurred.

#### Properties

| Name                  | Type       | Description                                                             |
| --------------------- | ---------- | ----------------------------------------------------------------------- |
| data (required)       | undefined  | The resolved user data, if available.                                   |
| error (required)      | Error      | The error object, if an error occurred.                                 |
| isError (required)    | true       | `true` if the query attempt resulted in an error.                       |
| isFetching (required) | boolean    | `true` whenever the query is executing, including background refetches. |
| isLoading (required)  | false      | `true` whenever the first fetch for a query is in-flight.               |
| isPending (required)  | false      | `true` if there's no cached data and no query attempt was finished yet. |
| isSuccess (required)  | false      | `true` if the query has received a response with no errors.             |
| refetch (required)    | () => void | Function to manually refetch the user.                                  |

### UseUserLoadingResult

Result of the `useUser` hook while loading.

#### Properties

| Name                  | Type       | Description                                                             |
| --------------------- | ---------- | ----------------------------------------------------------------------- |
| data (required)       | undefined  | The resolved user data, if available.                                   |
| error (required)      | null       | The error object, if an error occurred.                                 |
| isError (required)    | false      | `true` if the query attempt resulted in an error.                       |
| isFetching (required) | boolean    | `true` whenever the query is executing, including background refetches. |
| isLoading (required)  | true       | `true` whenever the first fetch for a query is in-flight.               |
| isPending (required)  | true       | `true` if there's no cached data and no query attempt was finished yet. |
| isSuccess (required)  | false      | `true` if the query has received a response with no errors.             |
| refetch (required)    | () => void | Function to manually refetch the user.                                  |

### UseUserOptions

Options for the `useUser` and `useUsers` hooks.

#### Properties

| Name      | Type    | Description                                                                                             |
| --------- | ------- | ------------------------------------------------------------------------------------------------------- |
| enabled   | boolean | Set this to `false` to disable this query from automatically running. Default: `true`.                  |
| levelId   | string  | The organizational level ID to use for the IAM API. By default, auto-detected via `getEnvironmentId()`. |
| levelType | string  | The organizational level type to use for the IAM API. Default: `"environment"`.                         |
| staleTime | number  | The time in milliseconds after which data is considered stale. Default: `300000` (5 minutes).           |

### UseUserSuccessResult

Result of the `useUser` hook when the user was successfully fetched.

#### Properties

| Name                  | Type                   | Description                                                             |
| --------------------- | ---------------------- | ----------------------------------------------------------------------- |
| data (required)       | null \| RestUserPublic | The resolved user data, if available.                                   |
| error (required)      | null                   | The error object, if an error occurred.                                 |
| isError (required)    | false                  | `true` if the query attempt resulted in an error.                       |
| isFetching (required) | boolean                | `true` whenever the query is executing, including background refetches. |
| isLoading (required)  | false                  | `true` whenever the first fetch for a query is in-flight.               |
| isPending (required)  | false                  | `true` if there's no cached data and no query attempt was finished yet. |
| isSuccess (required)  | true                   | `true` if the query has received a response with no errors.             |
| refetch (required)    | () => void             | Function to manually refetch the user.                                  |

### UseUsersConfig

Configuration for the `UseUsersProvider` context.

#### Properties

| Name        | Type        | Description                                                               |
| ----------- | ----------- | ------------------------------------------------------------------------- |
| levelId     | string      | Organizational level ID. Default: auto-detected via `getEnvironmentId()`. |
| levelType   | string      | Organizational level type. Default: `"environment"`.                      |
| queryClient | QueryClient | Custom TanStack Query client for caching and state management.            |

### UseUsersResult

Aggregated result of the `useUsers` hook.

#### Properties

| Name                  | Type                           | Description                                                                 |
| --------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| data (required)       | Map\<string \| RestUserPublic> | Map of UUID → user data for all successfully resolved users.                |
| errors (required)     | Map\<string \| Error>          | Map of UUID → error for all failed queries.                                 |
| isError (required)    | boolean                        | `true` if any query resulted in an error.                                   |
| isFetching (required) | boolean                        | `true` if any query is currently fetching (including background refetches). |
| isLoading (required)  | boolean                        | `true` if any query is still loading for the first time.                    |
| isSuccess (required)  | boolean                        | `true` if all queries have finished successfully.                           |
| refetch (required)    | () => void                     | Function to manually refetch all users.                                     |
| users (required)      | Array\<RestUserPublic>         | Flat array of all successfully resolved users.                              |
