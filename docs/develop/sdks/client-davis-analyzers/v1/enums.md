## Enums

### ~~AnalyzerDefinitionType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the analyzer.

- IMPLEMENTED: Analyzers which have an implementation and can be executed.
- INTERFACE: Just an interface to be implemented or extended by other analyzer definitions.

#### Enum keys

`Implemented` | `Interface`

### ~~AnalyzerDimensionalDataType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the dimensional query.

#### Enum keys

`EntityId` | `TimeseriesArray`

### ~~AnalyzerExecutionLogLevel~~

> ⚠️ **Deprecated**
> Use literal values.

Determines the severity of the log.

#### Enum keys

`Info` | `Severe` | `Tracing` | `Warning`

### ~~AnalyzerOutputLogLevel~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Info` | `Tracing` | `Warning`

### ~~AnalyzerResultExecutionStatus~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Aborted` | `Completed` | `Running`

### ~~AnalyzerResultResultStatus~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Failed` | `Successful` | `SuccessfulWithWarnings`

### ~~JsonSchemaConfig~~

> ⚠️ **Deprecated**
> Use literal values.

The configuration for the JSON schema generation:

- `DEFAULT` - Use the standard JSON schema generation (recommended for most clients).
- `LLM` - Generate a schema optimized for LLM consumption.

#### Enum keys

`Default` | `Llm`

### ~~ParameterDefinitionType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the parameter, indicating the format of the value to be provided.

#### Enum keys

`AnalyzerStructure` | `Boolean` | `DimensionQuery` | `Enumeration` | `Integer` | `Number` | `String` | `Timeframe` | `TimeseriesArray` | `TimeseriesQuery` | `Timestamp`
