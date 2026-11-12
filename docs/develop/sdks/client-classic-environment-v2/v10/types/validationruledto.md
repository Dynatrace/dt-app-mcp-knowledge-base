### ValidationRuleDto

Validation rule of Browser Monitor step.

| Name                       | Type                                                  | Description                                                                                                                   |
| -------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| failIfFound (required)     | null \| boolean                                       | Boolean value, true if we should fail on found pattern. If not defined in request, it will be set to false by default.        |
| matchingPattern (required) | string                                                | Text pattern that should match on the website.                                                                                |
| regex                      | null \| boolean                                       | Boolean value, true if the "matchingPattern" value is a regex. If not defined in request, it will be set to false by default. |
| target                     | null \| [TargetDto](#targetdto)                       | Target of Browser Monitor step.                                                                                               |
| type (required)            | "TEXT_MATCH" \| "CONTENT_MATCH" \| "ELEMENT_MATCH" | Type of validation.                                                                                                           |
