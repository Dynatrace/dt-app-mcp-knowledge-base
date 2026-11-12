### DatasourceDefinition

Configuration of a datasource for a property.

| Name                        | Type                                   | Description                                                                                        |
| --------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| filterProperties (required) | Array\<string>                         | The properties to filter the datasource options on.                                                |
| fullContext (required)      | boolean                                | Whether this datasource expects full setting payload as the context.                               |
| identifier (required)       | string                                 | The identifier of a custom data source of the property's value.                                    |
| resetValue                  | "ALWAYS" \| "INVALID_ONLY" \| "NEVER" | When to reset datasource value in the UI on filter change.                                         |
| useApiSearch (required)     | boolean                                | If true, the datasource should use the api to filter the results instead of client-side filtering. |
| validate (required)         | boolean                                | Whether to validate input to only allow values returned by the datasource.                         |
