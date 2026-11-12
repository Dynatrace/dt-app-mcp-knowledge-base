## analyzersClient

```js
import { analyzersClient } from '@dynatrace-sdk/client-davis-analyzers';
```

### cancelAnalyzerExecution

**analyzersClient.cancelAnalyzerExecution(config): Promise\<void | [AnalyzerCancelResult](#analyzercancelresult)>**

Stop a started analyzer execution.

**Required scope:** davis:analyzers:execute

Use the request token that was returned when starting an analyzer execution to cancel it.

#### Parameters

| Name                           | Type   | Description                                                                                                                                                                                           |
| ------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.analyzerName (required) | string | The name of the analyzer.                                                                                                                                                                             |
| config.requestToken (required) | string | The request token is returned when starting a long-running analyzer execution. It can be used to do follow-up operations like polling and cancelling. <br /><br />**Example:** `RHluYXRyYWNlMjAyMw==` |

#### Returns

| Return type                                   | Status code | Description                                                           |
| --------------------------------------------- | ----------- | --------------------------------------------------------------------- |
| [AnalyzerCancelResult](#analyzercancelresult) | 200         | The current analyzer execution status and an optional partial result. |
| void                                          | 202         | The cancel request was accepted and is being processed.               |

#### Throws

| Error Type                 | Error Message                                                                                                                                                                                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnalyzerErrorEnvelopeError | Invalid or malformed request. \| Insufficient permissions. \| No analyzer available with the requested name. \| The analyzer result with the request token has already been consumed or its time-to-live (TTL) has been reached. The result is not available anymore. \| Client error. \| Internal server error. |

**Code example**

```ts
import { analyzersClient } from "@dynatrace-sdk/client-davis-analyzers";

const data = await analyzersClient.cancelAnalyzerExecution({
  analyzerName: "...",
  requestToken: "RHluYXRyYWNlMjAyMw==",
});
```

### executeAnalyzer

**analyzersClient.executeAnalyzer(config): Promise\<[AnalyzerExecuteResult](#analyzerexecuteresult)>**

Execute an analyzer with the given input.

**Required scope:** davis:analyzers:execute

The analyzer execution is started asynchronously.
If the result is not available after the specified timeout, a request token is returned
to poll for the result. Otherwise, the final result is directly available and no request token is returned.

Depending on the chosen analyzer and the analyzer input, additional scopes might be required, e.g.
`storage:buckets:read` and `storage:metrics:read` to enable the analyzer to read time series data from Grail™.

#### Parameters

| Name                           | Type                            | Description                                                                                                                                                                                                                                    |
| ------------------------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.analyzerName (required) | string                          | The name of the analyzer.                                                                                                                                                                                                                      |
| config.body (required)         | [AnalyzerInput](#analyzerinput) |                                                                                                                                                                                                                                                |
| config.enablePreview           | boolean                         | Indicates if analyzer results should preview already created outputs while the analyzer is still running. Set to false if only the final result is needed. <br /><br />**Default:** `true`                                                     |
| config.timeoutSeconds          | number                          | The amount of seconds to wait for the response to be returned. The timeout controls how long the client is willing to wait, while the analyzer execution continues running until it has finished or is cancelled. <br /><br />**Default:** `2` |

#### Returns

| Return type                                     | Status code | Description                                                                                                           |
| ----------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| [AnalyzerExecuteResult](#analyzerexecuteresult) | 200         | The final analyzer result and execution status.                                                                       |
| [AnalyzerExecuteResult](#analyzerexecuteresult) | 202         | The current analyzer execution status and a request token and time-to-live (TTL) to continue polling the result with. |

#### Throws

| Error Type                 | Error Message                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnalyzerErrorEnvelopeError | Invalid or malformed request. \| Insufficient permissions. \| No analyzer available with the requested name. \| Client error. \| Internal server error. |

**Code example**

```ts
import { analyzersClient } from "@dynatrace-sdk/client-davis-analyzers";

const data = await analyzersClient.executeAnalyzer({
  analyzerName: "...",
  body: {
    timeSeriesData: {
      expression: "timeseries avg(dt.host.cpu.usage)",
    },
    forecastHorizon: 10,
  },
});
```

### getAnalyzer

**analyzersClient.getAnalyzer(config): Promise\<[AnalyzerDefinitionDetails](#analyzerdefinitiondetails)>**

Get the analyzer definition for an analyzer.

**Required scope:** davis:analyzers:read

All available meta-information for the analyzer is returned.

#### Parameters

| Name                           | Type   | Description               |
| ------------------------------ | ------ | ------------------------- |
| config.analyzerName (required) | string | The name of the analyzer. |

#### Returns

| Return type                                             | Status code | Description                               |
| ------------------------------------------------------- | ----------- | ----------------------------------------- |
| [AnalyzerDefinitionDetails](#analyzerdefinitiondetails) | 200         | The definition of the requested analyzer. |

#### Throws

| Error Type                 | Error Message                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnalyzerErrorEnvelopeError | Invalid or malformed request. \| Insufficient permissions. \| No analyzer available with the requested name. \| Client error. \| Internal server error. |

**Code example**

```ts
import { analyzersClient } from "@dynatrace-sdk/client-davis-analyzers";

const data = await analyzersClient.getAnalyzer({
  analyzerName: "...",
});
```

### getAnalyzerDocumentation

**analyzersClient.getAnalyzerDocumentation(config): Promise\<Binary>**

Get the documentation for an analyzer.

**Required scope:** davis:analyzers:read

A documentation may provide further information and context for a given analyzer.
Not all analyzers provide documentation.

The documentation is returned as Markdown.

#### Parameters

| Name                           | Type   | Description               |
| ------------------------------ | ------ | ------------------------- |
| config.analyzerName (required) | string | The name of the analyzer. |

#### Returns

| Return type | Status code | Description                                  |
| ----------- | ----------- | -------------------------------------------- |
| void        | 200         | The documentation of the requested analyzer. |

#### Throws

| Error Type                 | Error Message                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnalyzerErrorEnvelopeError | Invalid or malformed request. \| Insufficient permissions. \| No analyzer available with the requested name. \| Client error. \| Internal server error. |

**Code example**

```ts
import { analyzersClient } from "@dynatrace-sdk/client-davis-analyzers";

const data = await analyzersClient.getAnalyzerDocumentation(
  { analyzerName: "..." },
);
```

### getJsonSchemaForInput

**analyzersClient.getJsonSchemaForInput(config): Promise\<Record\<string | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)>>**

Get the JSON schema for an analyzer input.

**Required scope:** davis:analyzers:read

The [JSON schema](https://json-schema.org/) defines a standardized declaration of the input structure,
providing well-defined input documentation that is both human- and machine-readable.

#### Parameters

| Name                           | Type               | Description                                       |
| ------------------------------ | ------------------ | ------------------------------------------------- |
| config.analyzerName (required) | string             | The name of the analyzer.                         |
| config.config                  | "DEFAULT" \| "LLM" | The configuration for the JSON schema generation. |

#### Returns

| Return type | Status code | Description                                                                  |
| ----------- | ----------- | ---------------------------------------------------------------------------- |
| void        | 200         | The [JSON input schema](https://json-schema.org/) of the requested analyzer. |

#### Throws

| Error Type                 | Error Message                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnalyzerErrorEnvelopeError | Invalid or malformed request. \| Insufficient permissions. \| No analyzer available with the requested name. \| Client error. \| Internal server error. |

**Code example**

```ts
import { analyzersClient } from "@dynatrace-sdk/client-davis-analyzers";

const data = await analyzersClient.getJsonSchemaForInput({
  analyzerName: "...",
});
```

### getJsonSchemaForResult

**analyzersClient.getJsonSchemaForResult(config): Promise\<Record\<string | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)>>**

Get the JSON schema for an analyzer result.

**Required scope:** davis:analyzers:read

The [JSON schema](https://json-schema.org/) defines a standardized declaration of the output structure,
providing well-defined output documentation that is both human- and machine-readable.

#### Parameters

| Name                           | Type               | Description                                       |
| ------------------------------ | ------------------ | ------------------------------------------------- |
| config.analyzerName (required) | string             | The name of the analyzer.                         |
| config.config                  | "DEFAULT" \| "LLM" | The configuration for the JSON schema generation. |

#### Returns

| Return type | Status code | Description                                                                   |
| ----------- | ----------- | ----------------------------------------------------------------------------- |
| void        | 200         | The [JSON result schema](https://json-schema.org/) of the requested analyzer. |

#### Throws

| Error Type                 | Error Message                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnalyzerErrorEnvelopeError | Invalid or malformed request. \| Insufficient permissions. \| No analyzer available with the requested name. \| Client error. \| Internal server error. |

**Code example**

```ts
import { analyzersClient } from "@dynatrace-sdk/client-davis-analyzers";

const data = await analyzersClient.getJsonSchemaForResult({
  analyzerName: "...",
});
```

### pollAnalyzerExecution

**analyzersClient.pollAnalyzerExecution(config): Promise\<[AnalyzerPollResult](#analyzerpollresult)>**

Poll for the result of a started analyzer execution.

**Required scope:** davis:analyzers:execute

Use the request token returned when starting an analyzer execution to poll for a result.

The `executionStatus` of the result indicates if the analyzer execution is already completed.
While the status is `RUNNING`, wait and poll for the result again in subsequent calls.

#### Parameters

| Name                           | Type   | Description                                                                                                                                                                                                                                    |
| ------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.analyzerName (required) | string | The name of the analyzer.                                                                                                                                                                                                                      |
| config.requestToken (required) | string | The request token is returned when starting a long-running analyzer execution. It can be used to do follow-up operations like polling and cancelling. <br /><br />**Example:** `RHluYXRyYWNlMjAyMw==`                                          |
| config.timeoutSeconds          | number | The amount of seconds to wait for the response to be returned. The timeout controls how long the client is willing to wait, while the analyzer execution continues running until it has finished or is cancelled. <br /><br />**Default:** `2` |

#### Returns

| Return type                               | Status code | Description                                                           |
| ----------------------------------------- | ----------- | --------------------------------------------------------------------- |
| [AnalyzerPollResult](#analyzerpollresult) | 200         | The current analyzer execution status and an optional partial result. |

#### Throws

| Error Type                 | Error Message                                                                                                                                                                                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnalyzerErrorEnvelopeError | Invalid or malformed request. \| Insufficient permissions. \| No analyzer available with the requested name. \| The analyzer result with the request token has already been consumed or its time-to-live (TTL) has been reached. The result is not available anymore. \| Client error. \| Internal server error. |

**Code example**

```ts
import { analyzersClient } from "@dynatrace-sdk/client-davis-analyzers";

const data = await analyzersClient.pollAnalyzerExecution({
  analyzerName: "...",
  requestToken: "RHluYXRyYWNlMjAyMw==",
});
```

### queryAnalyzers

**analyzersClient.queryAnalyzers(config): Promise\<[AnalyzerQueryResult](#analyzerqueryresult)>**

Query all available analyzer definitions.

**Required scope:** davis:analyzers:read

The analyzer definition contains meta-information about an analyzer, including its input and output structure:

- The `input` definition specifies which fields the analyzer accepts, some of which may be required.
- The `output` definition specifies how the returned analyzer result is structured.

#### Parameters

| Name             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields | string | Specify which meta-information to fetch in addition to the default fields `name`, `displayName` and `description`. Valid values are: * `analyzerCall`
* `baseAnalyzer`
* `category`
* `input`
* `labels`
* `output`
* `type` Any other field will result in a HTTP 400 response. <br /><br />**Example:** `baseAnalyzer, type, input`<br />**Minimum:** `1`                                                                                                                                                                                                                                       |
| config.filter    | string | Use the `filter` parameter to only fetch a subset of analyzer definitions. When using the operators `=`and `!=`, filtering is **case sensitive**. The following operators are supported: * `=`
* `!=`
* `contains`
* `starts-with`
* `ends-with`
* `and`
* `or` Parenthesis and the `not` operator are currently not supported. The following fields are valid filtering parameters: * `baseAnalyzer`
* `description`
* `displayName`
* `labels`
* `name`
* `type` Any other field will result in a HTTP 400 response. <br /><br />**Example:** `name contains 'statistic'`<br />**Minimum:** `1` |
| config.pageKey   | string | The cursor for the page of results. Find it in the `nextPageKey` field of the previous response. If the `page-key` parameter is used, no other query parameters must be provided. If not provided, the first page is always returned.                                                                                                                                                                                                                                                                                                                                                             |
| config.pageSize  | number | The amount of returned analyzer definitions in a single response payload. By default, 50 is used. The maximum is 200. <br /><br />**Example:** `50`<br />**Minimum:** `1`                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Returns

| Return type                                 | Status code | Description                         |
| ------------------------------------------- | ----------- | ----------------------------------- |
| [AnalyzerQueryResult](#analyzerqueryresult) | 200         | All available analyzer definitions. |

#### Throws

| Error Type                 | Error Message                                                        |
| -------------------------- | -------------------------------------------------------------------- |
| AnalyzerErrorEnvelopeError | Insufficient permissions. \| Client error. \| Internal server error. |

**Code example**

```ts
import { analyzersClient } from "@dynatrace-sdk/client-davis-analyzers";

const data = await analyzersClient.queryAnalyzers();
```

### validateAnalyzerExecution

**analyzersClient.validateAnalyzerExecution(config): Promise\<[AnalyzerValidationResult](#analyzervalidationresult)>**

Validate the provided input for an analyzer execution.

**Required scope:** davis:analyzers:execute

Provide the same input that is planned to be used for an analyzer execution to have it validated without
executing the analyzer.

#### Parameters

| Name                           | Type                            | Description               |
| ------------------------------ | ------------------------------- | ------------------------- |
| config.analyzerName (required) | string                          | The name of the analyzer. |
| config.body (required)         | [AnalyzerInput](#analyzerinput) |                           |

#### Returns

| Return type                                           | Status code | Description                                                 |
| ----------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| [AnalyzerValidationResult](#analyzervalidationresult) | 200         | The validation result for the requested analyzer execution. |

#### Throws

| Error Type                 | Error Message                                                                                                                       |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| AnalyzerErrorEnvelopeError | No analyzer available with the requested name. \| Insufficient permissions. \| Not found \| Client error. \| Internal server error. |

**Code example**

```ts
import { analyzersClient } from "@dynatrace-sdk/client-davis-analyzers";

const data =
  await analyzersClient.validateAnalyzerExecution({
    analyzerName: "...",
    body: {},
  });
```
