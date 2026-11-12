## Types

### AnalyzerCancelResult

Result of cancelling the analyzer execution. Only returned if the result completes while cancelling.

| Name              | Type                              | Description                                                                                                                                           |
| ----------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| requestToken      | string                            | The request token is returned when starting a long-running analyzer execution. It can be used to do follow-up operations like polling and cancelling. |
| result (required) | [AnalyzerResult](#analyzerresult) |                                                                                                                                                       |
| ttlInSeconds      | number                            | Time-to-live until the result is not available anymore.                                                                                               |

### AnalyzerCategory

The category of an analyzer used to logically group different analyzers.

| Name                   | Type   |
| ---------------------- | ------ |
| displayName (required) | string |

### AnalyzerData

The map of actual data matching the input and output definition of the analyzer.

**type**: Record\<string, any>

### AnalyzerDefinition

The definition of the analyzer. It describes which input and output data the analyzer accepts
and produces when being executed.

| Name                   | Type                                                | Description                                                                                                                                                                                      |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| baseAnalyzer           | string                                              | The analyzer name that the current analyzer is based on. All input and output parameters are inherited. Additional parameters may be present in the current analyzer.                            |
| category               | [AnalyzerCategory](#analyzercategory)               | The category of an analyzer used to logically group different analyzers.                                                                                                                         |
| description            | string                                              | Detailed description of the analyzers' functionality. Get the documentation of the analyzer for more information.                                                                                |
| displayName (required) | string                                              |                                                                                                                                                                                                  |
| input                  | Array\<[ParameterDefinition](#parameterdefinition)> |                                                                                                                                                                                                  |
| labels                 | Array\<string>                                      | A list of string-based labels to group and mark different analyzers.                                                                                                                             |
| name (required)        | string                                              | The uniquely identifying name of the analyzer.                                                                                                                                                   |
| output                 | Array\<[ParameterDefinition](#parameterdefinition)> |                                                                                                                                                                                                  |
| type                   | "IMPLEMENTED" \| "INTERFACE"                        | The type of the analyzer. * IMPLEMENTED: Analyzers which have an implementation and can be executed.
* INTERFACE: Just an interface to be implemented or extended by other analyzer definitions. |

### AnalyzerDefinitionDetails

The definition of the analyzer. It describes which input and output data the analyzer accepts
and produces when being executed.

| Name                   | Type                                                | Description                                                                                                                                                                                      |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| baseAnalyzer           | string                                              | The analyzer name that the current analyzer is based on. All input and output parameters are inherited. Additional parameters may be present in the current analyzer.                            |
| category               | [AnalyzerCategory](#analyzercategory)               | The category of an analyzer used to logically group different analyzers.                                                                                                                         |
| description            | string                                              | Detailed description of the analyzers' functionality. Get the documentation of the analyzer for more information.                                                                                |
| displayName (required) | string                                              |                                                                                                                                                                                                  |
| input                  | Array\<[ParameterDefinition](#parameterdefinition)> |                                                                                                                                                                                                  |
| labels                 | Array\<string>                                      | A list of string-based labels to group and mark different analyzers.                                                                                                                             |
| name (required)        | string                                              | The uniquely identifying name of the analyzer.                                                                                                                                                   |
| output                 | Array\<[ParameterDefinition](#parameterdefinition)> |                                                                                                                                                                                                  |
| type                   | "IMPLEMENTED" \| "INTERFACE"                        | The type of the analyzer. * IMPLEMENTED: Analyzers which have an implementation and can be executed.
* INTERFACE: Just an interface to be implemented or extended by other analyzer definitions. |

### AnalyzerDimensionalData

A list of resolved dimensional data.

| Name             | Type                            | Description                                                                                                             |
| ---------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| query (required) | DimensionQuery                  | A query for dimensional data such as timeseries, entities, or logs.                                                     |
| type (required)  | "entityId" \| "timeseriesArray" | The type of the dimensional query.                                                                                      |
| value (required) | AnalyzerDimensionalDataValue    | The resolved value of the dimensional query.<br /><br />**Example:** `{"$ref":"#/components/examples/TimeseriesArray"}` |

### AnalyzerError

The error that is returned for unsuccessful responses.

| Name               | Type                                          | Description                                                      |
| ------------------ | --------------------------------------------- | ---------------------------------------------------------------- |
| code (required)    | number                                        | The HTTP status code of the error.<br /><br />**Example:** `400` |
| details            | [AnalyzerErrorDetails](#analyzererrordetails) |                                                                  |
| message (required) | string                                        |                                                                  |

### AnalyzerErrorDetails

| Name                 | Type                                                |
| -------------------- | --------------------------------------------------- |
| constraintViolations | Array\<[ConstraintViolation](#constraintviolation)> |

### AnalyzerErrorEnvelope

| Name  | Type                            | Description                                            |
| ----- | ------------------------------- | ------------------------------------------------------ |
| error | [AnalyzerError](#analyzererror) | The error that is returned for unsuccessful responses. |

### AnalyzerExecuteResult

Result of the analyzer execution.

| Name              | Type                              | Description                                                                                                                                           |
| ----------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| requestToken      | string                            | The request token is returned when starting a long-running analyzer execution. It can be used to do follow-up operations like polling and cancelling. |
| result (required) | [AnalyzerResult](#analyzerresult) |                                                                                                                                                       |
| ttlInSeconds      | number                            | Time-to-live until the result is not available anymore.                                                                                               |

### AnalyzerExecutionLog

| Name               | Type                                         | Description                                                                                                                                                     |
| ------------------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| level (required)   | "TRACING" \| "INFO" \| "WARNING" \| "SEVERE" | Determines the severity of the log.                                                                                                                             |
| message (required) | string                                       |                                                                                                                                                                 |
| path               | string                                       | A path pointing to the source of the error in the input. The format of the path follows the [JSON path specification](https://goessner.net/articles/JsonPath/). |

### AnalyzerGeneralParameters

Parameters that are present in all analyzer input parameter definitions.

| Name                        | Type                                         | Default   |
| --------------------------- | -------------------------------------------- | --------- |
| logVerbosity                | "TRACING" \| "INFO" \| "WARNING" \| "SEVERE" | `WARNING` |
| resolveDimensionalQueryData | boolean                                      | `false`   |
| timeframe                   | [Timeframe](#timeframe)                      |           |

### AnalyzerInput

The input is specific to an analyzer. Get the definition of the analyzer to retrieve the required input structure.

| Name              | Type                                                    | Description                                                              |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| generalParameters | [AnalyzerGeneralParameters](#analyzergeneralparameters) | Parameters that are present in all analyzer input parameter definitions. |

### AnalyzerMetadata

Metadata about the analyzer execution.

| Name  | Type                                            | Description                                           |
| ----- | ----------------------------------------------- | ----------------------------------------------------- |
| grail | [AnalyzerMetadataGrail](#analyzermetadatagrail) | Grail-specific metadata about the analyzer execution. |

### AnalyzerMetadataGrail

Grail-specific metadata about the analyzer execution.

| Name                      | Type   | Description                                                                                                                                |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| executionTimeMilliseconds | number | The total execution time in milliseconds of all Grail queries that were run as part of the analyzer execution.<br /><br />**Minimum:** `0` |
| scannedBytes              | number | The total number of bytes scanned in all Grail queries that were run as part of the analyzer execution.<br /><br />**Minimum:** `0`        |
| scannedDataPoints         | number | The total number of data points scanned in all Grail queries that were run as part of the analyzer execution.<br /><br />**Minimum:** `0`  |
| scannedRecords            | number | The total number of records scanned in all Grail queries that were run as part of the analyzer execution.<br /><br />**Minimum:** `0`      |

### AnalyzerOutput

The output is specific to an analyzer. Get the definition of the analyzer to retrieve the required output structure.

| Name   | Type                                                              | Description                                                               |
| ------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------- |
| system | [AnalyzerOutputSystemParameters](#analyzeroutputsystemparameters) | Parameters that are present in all analyzer output parameter definitions. |

### AnalyzerOutputLog

| Name               | Type                             |
| ------------------ | -------------------------------- |
| level (required)   | "TRACING" \| "INFO" \| "WARNING" |
| message (required) | string                           |

### AnalyzerOutputSystemParameters

Parameters that are present in all analyzer output parameter definitions.

| Name | Type                                            |
| ---- | ----------------------------------------------- |
| logs | Array\<[AnalyzerOutputLog](#analyzeroutputlog)> |

### AnalyzerPollResult

Result of polling the analyzer execution.

| Name              | Type                              | Description                                                                                                                                           |
| ----------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| requestToken      | string                            | The request token is returned when starting a long-running analyzer execution. It can be used to do follow-up operations like polling and cancelling. |
| result (required) | [AnalyzerResult](#analyzerresult) |                                                                                                                                                       |
| ttlInSeconds      | number                            | Time-to-live until the result is not available anymore.                                                                                               |

### AnalyzerQueryResult

The list of available analyzers.

| Name                  | Type                                              | Description                                                                                                                                                                                                                     |
| --------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| analyzers (required)  | Array\<[AnalyzerDefinition](#analyzerdefinition)> |                                                                                                                                                                                                                                 |
| nextPageKey           | string                                            | The key that should be used to do follow-up requests, fetching the remaining analyzers. If the last page is reached or all analyzers are already listed, this field is omitted. <br /><br />**Example:** `RHluYXRyYWNlMjAyMw==` |
| totalCount (required) | number                                            | The total amount of analyzers available opposed to the current page size.<br /><br />**Example:** `100`                                                                                                                         |

### AnalyzerResult

| Name                       | Type                                                        | Description                                                                                                        |
| -------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| data                       | Array\<[AnalyzerDimensionalData](#analyzerdimensionaldata)> |                                                                                                                    |
| executionStatus (required) | "RUNNING" \| "ABORTED" \| "COMPLETED"                       |                                                                                                                    |
| input (required)           | [AnalyzerInput](#analyzerinput)                             | The input is specific to an analyzer. Get the definition of the analyzer to retrieve the required input structure. |
| logs                       | Array\<[AnalyzerExecutionLog](#analyzerexecutionlog)>       |                                                                                                                    |
| metadata                   | [AnalyzerMetadata](#analyzermetadata)                       | Metadata about the analyzer execution.                                                                             |
| output (required)          | Array\<[AnalyzerOutput](#analyzeroutput)>                   |                                                                                                                    |
| resultId (required)        | string                                                      | The uniquely identifying ID of the result. Used for logging.                                                       |
| resultStatus (required)    | "SUCCESSFUL" \| "SUCCESSFUL_WITH_WARNINGS" \| "FAILED"    |                                                                                                                    |

### AnalyzerValidationResult

The result of the dry-execution of the analyzer.

| Name             | Type                                          | Description                                                                  |
| ---------------- | --------------------------------------------- | ---------------------------------------------------------------------------- |
| details          | [AnalyzerErrorDetails](#analyzererrordetails) |                                                                              |
| valid (required) | boolean                                       | Whether the analyzer can be successfully executed with the given input data. |

### ConstraintViolation

A constraint violation indicating why an error has occurred.

| Name               | Type                                         | Description                                                                                                                                                     |
| ------------------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| level (required)   | "TRACING" \| "INFO" \| "WARNING" \| "SEVERE" | Determines the severity of the log.                                                                                                                             |
| message (required) | string                                       |                                                                                                                                                                 |
| path               | string                                       | A path pointing to the source of the error in the input. The format of the path follows the [JSON path specification](https://goessner.net/articles/JsonPath/). |

### EnumerationElement

An object that has a fixed set of possible values differentiated by the `key` property.

| Name                   | Type   |
| ---------------------- | ------ |
| description (required) | string |
| displayName (required) | string |
| key (required)         | string |

### ParameterDefinition

The definition for a single parameter, describing its name and other meta information.

| Name                   | Type                                                                                                                                                                               | Description                                                                                                                         |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| advanced               | boolean                                                                                                                                                                            | If true, this parameter is considered to be for advanced usage.                                                                     |
| array (required)       | boolean                                                                                                                                                                            | Whether this parameter can have an array of values. Passing a single, non-array value is also allowed.                              |
| defaultValue           | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)                                                                                                      | The default value used when the parameter is omitted.                                                                               |
| description            | string                                                                                                                                                                             |                                                                                                                                     |
| displayName (required) | string                                                                                                                                                                             |                                                                                                                                     |
| enumerationValues      | Array\<[EnumerationElement](#enumerationelement)>                                                                                                                                  |                                                                                                                                     |
| extendedType           | string                                                                                                                                                                             | Provides extended type information for this parameter. This allows additional semantics that can be utilized by analyzer consumers. |
| fields                 | Array\<[ParameterDefinition](#parameterdefinition)>                                                                                                                                | Given the parameter is of type `structure` this property contains the sub-definition of the parameter.                              |
| maxSize                | number                                                                                                                                                                             | The maximum number of elements if the parameter is an array.                                                                        |
| name (required)        | string                                                                                                                                                                             |                                                                                                                                     |
| optional (required)    | boolean                                                                                                                                                                            | Whether this parameter can be omitted when executing the analyzer.                                                                  |
| type (required)        | "string" \| "number" \| "boolean" \| "timeseriesArray" \| "analyzerStructure" \| "dimensionQuery" \| "enumeration" \| "integer" \| "timeframe" \| "timeseriesQuery" \| "timestamp" | The type of the parameter, indicating the format of the value to be provided.                                                       |
| valueConstraints       | ParameterDefinitionValueConstraints                                                                                                                                                | Defines value constraints for string or number parameters. Not applicable to other parameter types.                                 |

### Timeframe

| Name                 | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| endTime              | string | Specify the end time in either absolute or relative format. For absolute format, use the ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ). For relative format, use 'now' for the current time or apply an offset with the available units: 's' for seconds, 'm' for minutes, 'h' for hours, and 'd' for days. For example, use 'now-2h' or '-2h' for a relative offset of 2 hours. If not specified, defaults to now. <br /><br />**Example:** `2023-04-12T12:10:04.123Z` |
| startTime (required) | string | Specify the start time in either absolute or relative format. For absolute format, use the ISO 8601 format (yyyy-MM-ddTHH:mm:ssZ). For relative format, use 'now' for the current time or apply an offset with the available units: 's' for seconds, 'm' for minutes, 'h' for hours, and 'd' for days. For example, use 'now-2h' or '-2h' for a relative offset of 2 hours. <br /><br />**Example:** `2023-04-10T12:10:04.123Z`                                  |

### DimensionQuery

A query for dimensional data such as timeseries, entities, or logs.

**type**: string | object
