### DeletionConstraint

A constraint on the values that are going to be deleted.

| Name              | Type                                                              | Description                          |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------ |
| customMessage     | string                                                            | A custom message for invalid values. |
| customValidatorId | string                                                            | The ID of a custom validator.        |
| schemaIds         | Array\<string>                                                    |                                      |
| type (required)   | "UNKNOWN" \| "CUSTOM_VALIDATOR_REF" \| "REFERENTIAL_INTEGRITY" | The type of the deletion constraint. |
