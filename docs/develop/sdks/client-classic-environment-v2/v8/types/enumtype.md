### EnumType

Definition of an enum property.

| Name                     | Type                            | Description                                                                                                |
| ------------------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| description (required)   | string                          | A short description of the property.<br /><br />**Example:** `typeDescription`                             |
| displayName              | string                          | The display name of the property.<br /><br />**Example:** `typeDisplayName`                                |
| documentation (required) | string                          | An extended description and/or links to documentation.<br /><br />**Example:** `typeDocumentation`         |
| enumClass                | string                          | An existing Java enum class that holds the allowed values of the enum.<br /><br />**Example:** `enumClass` |
| items (required)         | Array\<[EnumValue](#enumvalue)> | A list of allowed values of the enum.                                                                      |
| type (required)          | "enum"                          | The type of the property.<br /><br />**Example:** `enum`                                                   |
