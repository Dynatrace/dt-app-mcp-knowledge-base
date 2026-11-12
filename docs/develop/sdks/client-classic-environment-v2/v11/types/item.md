### Item

An item of a collection property.

| Name            | Type                                          | Description                                                                                            |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| constraints     | Array\<[Constraint](#constraint)>             | A list of constraints limiting the values to be accepted.                                              |
| datasource      | [DatasourceDefinition](#datasourcedefinition) | Configuration of a datasource for a property.                                                          |
| description     | string                                        | A short description of the item.<br /><br />**Example:** `itemDescription`                             |
| displayName     | string                                        | The display name of the item.<br /><br />**Example:** `itemDisplayName`                                |
| documentation   | string                                        | An extended description and/or links to documentation.<br /><br />**Example:** `propertyDocumentation` |
| metadata        | [ItemMetadata](#itemmetadata)                 | Metadata of the items.                                                                                 |
| referencedType  | string                                        | The type referenced by the item's value.<br /><br />**Example:** `itemReferencedType`                  |
| subType         | string                                        | The subtype of the item's value.<br /><br />**Example:** `itemSubType`                                 |
| type (required) | string \| [RefPointer](#refpointer)           | The type of the item's value.                                                                          |
| uiCustomization | [UiCustomization](#uicustomization)           | Customization for UI elements                                                                          |
