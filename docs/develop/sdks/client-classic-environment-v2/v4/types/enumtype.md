### EnumType

Definition of an enum property.

| Name                     | Type                            | Description                                                            |
| ------------------------ | ------------------------------- | ---------------------------------------------------------------------- |
| description (required)   | string                          | A short description of the property.                                   |
| displayName              | string                          | The display name of the property.                                      |
| documentation (required) | string                          | An extended description and/or links to documentation.                 |
| enumClass                | string                          | An existing Java enum class that holds the allowed values of the enum. |
| items (required)         | Array\<[EnumValue](#enumvalue)> | A list of allowed values of the enum.                                  |
| type (required)          | "enum"                          | The type of the property.                                              |
