### SchemaType

A list of definitions of types.

A type is a complex property that contains its own set of subproperties.

| Name                      | Type                                            | Description                                                                                                 |
| ------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| constraints               | Array\<[ComplexConstraint](#complexconstraint)> | A list of constraints limiting the values to be accepted.                                                   |
| description (required)    | string                                          | A short description of the property.                                                                        |
| displayName               | string                                          | The display name of the property.                                                                           |
| documentation (required)  | string                                          | An extended description and/or links to documentation.                                                      |
| properties (required)     | [SchemaTypeProperties](#schematypeproperties)   | Definition of properties that can be persisted.                                                             |
| searchPattern             | string                                          | The pattern for the summary search(for example, "Alert after *X* minutes.") of the configuration in the UI. |
| summaryPattern (required) | string                                          | The pattern for the summary (for example, "Alert after *X* minutes.") of the configuration in the UI.       |
| type (required)           | "object"                                        | Type of the reference type.                                                                                 |
| version (required)        | string                                          | The version of the type.                                                                                    |
| versionInfo               | string                                          | A short description of the version.                                                                         |
