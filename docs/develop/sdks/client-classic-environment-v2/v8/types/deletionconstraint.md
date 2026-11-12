### DeletionConstraint

A constraint on the values that are going to be deleted.

| Name              | Type                                                              | Description                                                                                     |
| ----------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| customMessage     | string                                                            | A custom message for invalid values.                                                            |
| customValidatorId | string                                                            | The ID of a custom validator.<br /><br />**Example:** `my-min-max`                              |
| schemaIds         | Array\<string>                                                    |                                                                                                 |
| timeout           | number                                                            | The maximum time in seconds the custom validator is allowed to run.<br /><br />**Example:** `5` |
| type (required)   | "UNKNOWN" \| "CUSTOM_VALIDATOR_REF" \| "REFERENTIAL_INTEGRITY" | The type of the deletion constraint.                                                            |
