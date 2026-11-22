## Types

### ConstraintViolation

Contains information about a constraint violation caused by invalid input.

| Name               | Type   | Description                                                    |
| ------------------ | ------ | -------------------------------------------------------------- |
| message (required) | string | The constraint violation description message                   |
| path               | string | The path of the parameter that caused the constraint violation |

### Criteria

| Name                     | Type   | Description                                                                                                                                                       |
| ------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| target (required)        | number | **Example:** `99.8`<br />**Minimum:** `0`                                                                                                                         |
| timeframeFrom (required) | string | The start of the timeframe. Supports relative time expressions (e.g. `now-7d`) and ISO 8601 timestamps.<br /><br />**Example:** `now-7d`                          |
| timeframeTo              | string | The end of the timeframe. Supports relative time expressions (e.g. `now-7d`) and ISO 8601 timestamps. Defaults to `now` if omitted.<br /><br />**Example:** `now` |
| warning                  | number | **Example:** `99.9`<br />**Minimum:** `0`                                                                                                                         |

### CustomSli

| Name                 | Type                              | Description                                         |
| -------------------- | --------------------------------- | --------------------------------------------------- |
| filterSegments       | [FilterSegments](#filtersegments) | Represents a collection of filter segments.         |
| indicator (required) | string                            | **Example:** `timeseries sli=avg(dt.host.cpu.idle)` |

### Deprecation

| Name                  | Type    | Description                                                                       |
| --------------------- | ------- | --------------------------------------------------------------------------------- |
| deprecated (required) | boolean | True if this template is deprecated and shouldn't be used for new SLOs.           |
| replacementTemplateId | string  | If deprecated=true, this field may contain the ID of the template to use instead. |

### Error

An error response as defined [here](https://dt-url.net/platform-services-error-handling).

| Name               | Type                          | Description                                      |
| ------------------ | ----------------------------- | ------------------------------------------------ |
| code (required)    | number                        |                                                  |
| details            | [ErrorDetails](#errordetails) | Optional details of the error                    |
| message (required) | string                        | **Example:** `Error while parsing SLO timeframe` |

### ErrorDetails

Optional details of the error

| Name                 | Type                                                | Description                                                                      |
| -------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------- |
| constraintViolations | Array\<[ConstraintViolation](#constraintviolation)> | A list of constraint violations of input parameters (path, query, request body)  |
| errorRef             | string                                              | reference to the error occurrence in the internal self-monitoring, logging, etc. |

### ErrorEnvelope

| Name             | Type            | Description                                                                               |
| ---------------- | --------------- | ----------------------------------------------------------------------------------------- |
| error (required) | [Error](#error) | An error response as defined [here](https://dt-url.net/platform-services-error-handling). |

### FilterSegment

A filter segment is identified by an ID.

| Name          | Type                                                    | Description                                                                 |
| ------------- | ------------------------------------------------------- | --------------------------------------------------------------------------- |
| id (required) | string                                                  | The identifier of the filter segment.<br /><br />**Example:** `Frbo6TNENSC` |
| variables     | Array\<[FilterSegmentVariable](#filtersegmentvariable)> |                                                                             |

### FilterSegmentVariable

Defines a variable with a name and a list of values.

| Name              | Type           | Description                                                     |
| ----------------- | -------------- | --------------------------------------------------------------- |
| name (required)   | string         | The name of the variable.<br /><br />**Example:** `environment` |
| values (required) | Array\<string> | The list of values for this variable.                           |

### FilterSegments

Represents a collection of filter segments.

**type**: Array\<[FilterSegment](#filtersegment)>

### Metadata

| Name                         | Type   | Description                                                                                                                                                                                                     |
| ---------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| evaluatedSliQuery (required) | string | The resolved DQL query that was actually executed for this evaluation.<br /><br />**Example:** `timeseries sli=avg(dt.host.cpu.idle), by: {dt.entity.host} \| filter dt.entity.host == "HOST-123456789ABCDEFG"` |

### MetadataResponse

| Name                | Type                  |
| ------------------- | --------------------- |
| metadata (required) | [Metadata](#metadata) |

### ObjectiveTemplate

| Name                       | Type                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| applicableScope (required) | "SERVICE" \| "HOST" \| "APPLICATION" \| "CLOUD_APPLICATION" \| "KUBERNETES_CLUSTER" \| "CLOUD_APPLICATION_NAMESPACE" \| "ALL" |                                                                                                                                                                                                                                                                                                                               |
| builtIn (required)         | boolean                                                                                                                           | **Default:** `false`                                                                                                                                                                                                                                                                                                          |
| deprecation                | [Deprecation](#deprecation)                                                                                                       |                                                                                                                                                                                                                                                                                                                               |
| description                | string                                                                                                                            | **Example:** `This is a description`                                                                                                                                                                                                                                                                                          |
| externalId                 | string                                                                                                                            | An optional user-provided external identifier for the objective template. Must be unique across all objective templates.                                                                                                                                                                                                      |
| id (required)              | string                                                                                                                            |                                                                                                                                                                                                                                                                                                                               |
| indicator (required)       | string                                                                                                                            | **Example:** `timeseries sli=avg(dt.host.cpu.idle), by: {dt.entity.host}\| filter in(dt.entity.host, $hostIds)`                                                                                                                                                                                                               |
| name (required)            | string                                                                                                                            | **Example:** `My new Objective Template`                                                                                                                                                                                                                                                                                      |
| tags                       | Array\<string>                                                                                                                    | A list of tags for this objective template. Tags can be plain strings (e.g. `myTag`) or key-value pairs separated by a colon (e.g. `Stage:DEV`). To include a literal colon in a tag, escape it with a backslash (e.g. `key\:value`).                                                                                         |
| variables (required)       | Array\<[TemplateVariable](#templatevariable)>                                                                                     |                                                                                                                                                                                                                                                                                                                               |
| version                    | string                                                                                                                            | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. |

### ObjectiveTemplateConfig

| Name                       | Type                                                                                                                              | Description                                                                                                                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| applicableScope (required) | "SERVICE" \| "HOST" \| "APPLICATION" \| "CLOUD_APPLICATION" \| "KUBERNETES_CLUSTER" \| "CLOUD_APPLICATION_NAMESPACE" \| "ALL" |                                                                                                                                                                                                                                       |
| description                | string                                                                                                                            | **Example:** `This is a description`                                                                                                                                                                                                  |
| externalId                 | string                                                                                                                            | An optional user-provided external identifier for the objective template. Must be unique across all objective templates.                                                                                                              |
| indicator (required)       | string                                                                                                                            | **Example:** `timeseries sli=avg(dt.host.cpu.idle), by: {dt.entity.host}\| filter in(dt.entity.host, $hostIds)`                                                                                                                       |
| name (required)            | string                                                                                                                            | **Example:** `My new Objective Template`                                                                                                                                                                                              |
| tags                       | Array\<string>                                                                                                                    | A list of tags for this objective template. Tags can be plain strings (e.g. `myTag`) or key-value pairs separated by a colon (e.g. `Stage:DEV`). To include a literal colon in a tag, escape it with a backslash (e.g. `key\:value`). |
| variables (required)       | Array\<[TemplateVariable](#templatevariable)>                                                                                     |                                                                                                                                                                                                                                       |

### ObjectiveTemplateList

| Name                  | Type                                            | Description                                                                                                                                                             |
| --------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items (required)      | Array\<[ObjectiveTemplate](#objectivetemplate)> |                                                                                                                                                                         |
| nextPageKey           | string                                          | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. |
| totalCount (required) | number                                          | The total number of entries in the result.                                                                                                                              |

### SliReference

| Name                  | Type                                                  | Description                                                      |
| --------------------- | ----------------------------------------------------- | ---------------------------------------------------------------- |
| templateId (required) | string                                                | The `id` of the objective template to use as the SLI definition. |
| variables (required)  | Array\<[SliReferenceVariable](#slireferencevariable)> |                                                                  |

### SliReferenceVariable

| Name             | Type   | Description                            |
| ---------------- | ------ | -------------------------------------- |
| name (required)  | string | **Example:** `hostIds`                 |
| value (required) | string | **Example:** `"HOST-123456789ABCDEFG"` |

### Slo

Configuration for a service-level objective. Exactly one of `sliReference` or `customSli` must be provided. Providing both or neither results in a `400 Bad Request`.

| Name                | Type                          | Description                                                                                                                                                                                                                                                                                                                   |
| ------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| criteria (required) | Array\<[Criteria](#criteria)> |                                                                                                                                                                                                                                                                                                                               |
| customSli           | [CustomSli](#customsli)       |                                                                                                                                                                                                                                                                                                                               |
| description         | string                        | **Example:** `This is a description`                                                                                                                                                                                                                                                                                          |
| externalId          | string                        | An optional user-provided external identifier for the SLO. Must be unique across all SLOs.                                                                                                                                                                                                                                    |
| id (required)       | string                        |                                                                                                                                                                                                                                                                                                                               |
| name (required)     | string                        | **Example:** `New SLO`                                                                                                                                                                                                                                                                                                        |
| sliReference        | [SliReference](#slireference) |                                                                                                                                                                                                                                                                                                                               |
| tags                | Array\<string>                | A list of tags for this SLO. Tags can be plain strings (e.g. `myTag`) or key-value pairs separated by a colon (e.g. `Stage:DEV`). To include a literal colon in a tag, escape it with a backslash (e.g. `key\:value`).                                                                                                        |
| version (required)  | string                        | The version of the object for optimistic locking. You can use it to detect simultaneous modifications by different users. It's generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update. |

### SloConfig

Configuration for a service-level objective. Exactly one of `sliReference` or `customSli` must be provided. Providing both or neither results in a `400 Bad Request`.

| Name                | Type                          | Description                                                                                                                                                                                                            |
| ------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| criteria (required) | Array\<[Criteria](#criteria)> |                                                                                                                                                                                                                        |
| customSli           | [CustomSli](#customsli)       |                                                                                                                                                                                                                        |
| description         | string                        | **Example:** `This is a description`                                                                                                                                                                                   |
| externalId          | string                        | An optional user-provided external identifier for the SLO. Must be unique across all SLOs.                                                                                                                             |
| name (required)     | string                        | **Example:** `New SLO`                                                                                                                                                                                                 |
| sliReference        | [SliReference](#slireference) |                                                                                                                                                                                                                        |
| tags                | Array\<string>                | A list of tags for this SLO. Tags can be plain strings (e.g. `myTag`) or key-value pairs separated by a colon (e.g. `Stage:DEV`). To include a literal colon in a tag, escape it with a backslash (e.g. `key\:value`). |

### SloEvaluationBaseResponse

| Name                | Type                                                |
| ------------------- | --------------------------------------------------- |
| evaluationResults   | Array\<[SloEvaluationResult](#sloevaluationresult)> |
| metadata (required) | [Metadata](#metadata)                               |

### SloEvaluationCancelResponse

| Name                  | Type                                                |
| --------------------- | --------------------------------------------------- |
| definition (required) | [Slo](#slo)                                         |
| evaluationResults     | Array\<[SloEvaluationResult](#sloevaluationresult)> |
| metadata (required)   | [Metadata](#metadata)                               |

### SloEvaluationRequest

| Name                       | Type                                    | Description                                                                                                                                                                                                                                                                                                            |
| -------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customTimeframe            | [Timeframe](#timeframe)                 |                                                                                                                                                                                                                                                                                                                        |
| filterSegments             | Array\<[FilterSegment](#filtersegment)> | Filter segments to apply during this evaluation. The effective filter for each segment is the intersection of the segment defined on the SLO and the segment provided here. If only one side defines a segment, that segment is used as-is.                                                                            |
| id (required)              | string                                  | **Example:** `A5LTU5YTVjNTcxODI5OL7vVN4V2t6t`                                                                                                                                                                                                                                                                          |
| requestTimeoutMilliseconds | number                                  | How long to wait for the evaluation result before returning in milliseconds. If the evaluation finishes within this time, the result is returned directly (`200`). If not, a `202` is returned with an `evaluationToken` that can be used to poll for the result.<br /><br />**Default:** `1000`<br />**Minimum:** `0` |

### SloEvaluationResponse

| Name                  | Type                                                | Description                                                                                                                                                   |
| --------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| definition (required) | [Slo](#slo)                                         |                                                                                                                                                               |
| evaluationResults     | Array\<[SloEvaluationResult](#sloevaluationresult)> |                                                                                                                                                               |
| evaluationToken       | string                                              | Token to pass to `evaluation:poll` or `evaluation:cancel` to retrieve or discard the evaluation result.<br /><br />**Example:** `FQ5aVZERXZNMjR1SzVnPT0ifQ==` |
| metadata (required)   | [Metadata](#metadata)                               |                                                                                                                                                               |
| ttlSeconds            | number                                              | **Example:** `300`                                                                                                                                            |

### SloEvaluationResult

| Name                | Type                                           | Description                                                                                                                                                                                                                                                                                 |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| criteria (required) | string                                         | **Example:** `now-7d - now`                                                                                                                                                                                                                                                                 |
| errorBudget         | number                                         | **Example:** `29.99`<br />**Minimum:** `0`                                                                                                                                                                                                                                                  |
| message             | string                                         | **Example:** `The field sli doesn't exist.`                                                                                                                                                                                                                                                 |
| status (required)   | "SUCCESS" \| "WARNING" \| "FAILURE" \| "ERROR" | The status of an SLO evaluation. `SUCCESS` and `WARNING` indicate the SLO was evaluated successfully (target met or warning threshold breached respectively). `FAILURE` means the SLO target wasn't met. `ERROR` means the evaluation couldn't be completed due to a system or query error. |
| value               | number                                         | The evaluated SLO compliance as a percentage (0–100).<br /><br />**Example:** `95`<br />**Minimum:** `0`                                                                                                                                                                                    |

### SloObjectsList

| Name                  | Type                | Description                                                                                                                                                             |
| --------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nextPageKey           | string              | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **page-key** query parameter to obtain subsequent pages of the result. |
| slos (required)       | Array\<[Slo](#slo)> |                                                                                                                                                                         |
| totalCount (required) | number              | The total number of entries in the result.<br /><br />**Minimum:** `0`                                                                                                  |

### TemplateVariable

| Name             | Type                                                                                                                                                                                                                                              | Description                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| name (required)  | string                                                                                                                                                                                                                                            | **Example:** `hostIds`                                                                                         |
| scope (required) | "CUSTOM" \| "SERVICE" \| "SMARTSCAPE_SERVICE" \| "HOST" \| "SMARTSCAPE_HOST" \| "APPLICATION" \| "CLOUD_APPLICATION" \| "KUBERNETES_CLUSTER" \| "SMARTSCAPE_K8S_CLUSTER" \| "CLOUD_APPLICATION_NAMESPACE" \| "SMARTSCAPE_K8S_NAMESPACE" | The scope of a template variable. Use `SMARTSCAPE_*` variants when referencing Smartscape objective templates. |

### Timeframe

| Name                     | Type   | Description                                                                                                                                                       |
| ------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timeframeFrom (required) | string | The start of the timeframe. Supports relative time expressions (e.g. `now-7d`) and ISO 8601 timestamps.<br /><br />**Example:** `now-7d`                          |
| timeframeTo              | string | The end of the timeframe. Supports relative time expressions (e.g. `now-7d`) and ISO 8601 timestamps. Defaults to `now` if omitted.<br /><br />**Example:** `now` |
