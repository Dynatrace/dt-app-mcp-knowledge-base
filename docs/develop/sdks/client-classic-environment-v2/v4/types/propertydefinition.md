### PropertyDefinition

Configuration of a property in a settings schema.

| Name                    | Type                                                      | Description                                                                                                                       |
| ----------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| constraints             | Array\<[Constraint](#constraint)>                         | A list of constraints limiting the values to be accepted.                                                                         |
| datasource              | [DatasourceDefinition](#datasourcedefinition)             | Configuration of a datasource for a property.                                                                                     |
| default                 | AnyValue                                                  | The default value to be used when no value is provided. If a non-singleton has the value of `null`, it means an empty collection. |
| description             | string                                                    | A short description of the property.                                                                                              |
| displayName             | string                                                    | The display name of the property.                                                                                                 |
| documentation           | string                                                    | An extended description and/or links to documentation.                                                                            |
| forceSecretResubmission | boolean                                                   | Defines if value is allowed to be modified when secret properties are not                                                         |
| items                   | [Item](#item)                                             | An item of a collection property.                                                                                                 |
| maxObjects (required)   | number                                                    | The maximum number of **objects** in a collection property. Has the value of `1` for singletons.                                  |
| metadata                | [PropertyDefinitionMetadata](#propertydefinitionmetadata) | Metadata of the property.                                                                                                         |
| migrationPattern        | string                                                    | Pattern with references to properties to create a new value.                                                                      |
| minObjects              | number                                                    | The minimum number of **objects** in a collection property.                                                                       |
| modificationPolicy      | "DEFAULT" \| "ALWAYS" \| "NEVER"                          | Modification policy of the property.                                                                                              |
| nullable (required)     | boolean                                                   | The value can (`true`) or can't (`false`) be `null`.                                                                              |
| precondition            | [Precondition](#precondition)                             | A precondition for visibility of a property.                                                                                      |
| referencedType          | string                                                    | The type referenced by the property value                                                                                         |
| subType                 | string                                                    | The subtype of the property's value.                                                                                              |
| type (required)         | string \| [RefPointer](#refpointer)                       | The type of the property's value.                                                                                                 |
| uiCustomization         | [UiCustomization](#uicustomization)                       | Customization for UI elements                                                                                                     |
