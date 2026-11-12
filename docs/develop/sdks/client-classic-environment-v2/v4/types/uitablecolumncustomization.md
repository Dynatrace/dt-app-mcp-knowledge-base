### UiTableColumnCustomization

Customization for UI table columns

| Name             | Type                                                                      | Description                                                                                                        |
| ---------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| builtinColumnRef | string                                                                    | The ui specific builtin column-implementation for this column.                                                     |
| columnRef        | string                                                                    | The referenced column from the 'tableColumns' property of the schema for this column.                              |
| displayName      | string                                                                    | The display name for this column.                                                                                  |
| id               | string                                                                    | The id for this column used for filtering. Required for conflicting or pathed columns - otherwise the ref is used. |
| items            | Array\<[UiTableColumnItemCustomization](#uitablecolumnitemcustomization)> | The possible items of this column.                                                                                 |
| propertyRef      | string                                                                    | The referenced property for this column.                                                                           |
| type             | string                                                                    | The ui specific type for this column.                                                                              |
| width            | string                                                                    | The width this column should take up on the table.                                                                 |
