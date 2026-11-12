### Item

An item of a collection property.

| Name            | Type                                          | Description                                               |
| --------------- | --------------------------------------------- | --------------------------------------------------------- |
| constraints     | Array\<[Constraint](#constraint)>             | A list of constraints limiting the values to be accepted. |
| datasource      | [DatasourceDefinition](#datasourcedefinition) | Configuration of a datasource for a property.             |
| description     | string                                        | A short description of the item.                          |
| displayName     | string                                        | The display name of the item.                             |
| documentation   | string                                        | An extended description and/or links to documentation.    |
| metadata        | [ItemMetadata](#itemmetadata)                 | Metadata of the items.                                    |
| referencedType  | string                                        | The type referenced by the item's value.                  |
| subType         | string                                        | The subtype of the item's value.                          |
| type (required) | string \| [RefPointer](#refpointer)           | The type of the item's value.                             |
| uiCustomization | [UiCustomization](#uicustomization)           | Customization for UI elements                             |
