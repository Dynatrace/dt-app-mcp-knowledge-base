## General considerations

### Consistency

- Never alter the implementation, features, behavior, or syntax described in the user-facing [Filter field documentation](https://docs.dynatrace.com/docs/get-started/dynatrace-ui/ui-filter-field). The FilterField component includes a direct link to it in the footer. Any inconsistencies will confuse or frustrate users looking for guidance.

![A FilterField with a link in the footer pointing to the user-facing filter
field
documentation.](https://developer.dynatrace.com/assets/images/filterfield-documentation-link-light-6e3895641323b1a899400270961ad093.webp)

Every FilterField includes a link to the user-facing FilterField
documentation.

### Performance

- Debounce your callback logic. Wait at least 300ms after the user stops typing before sending requests for suggestions.
- Use caching for previously loaded suggestions so you don't fetch them again.
- Limit the payload size that you get from the backend and that you send to the FilterField.
- Cancel outdated requests. For example, use AbortController.
- Keep the input responsive and avoid blocking the UI when network responses are slow.
- Don't fetch data on every keystroke without debounce.
- Avoid running complex logic synchronously in the suggestion callback.

### Validation

Validation helps users understand if their input is formulated correctly to provide meaningful results. Follow our best practices for the main types of validation:

#### Syntax validation

Syntax validation shows users whether their input has the correct syntax. It's handled automatically by FilterField.

- Always wrap the FilterField in a FormField with a FormFieldMessages context to display validation messages in an accessible way below the FilterField.

#### Contextual validation

Contextual validation shows users if the keys, comparison operators, and values they used are meaningful in the given context.

- Use the `validatorMap` property to define specific valid keys, comparison operators, and values (e.g., error, info, warning) or general value types (e.g., string, number). Read more about the `validatorMap` property under [Validate user input](https://developer.dynatrace.com/design/components/filters/FilterField.md#validate-user-input).
- Show custom error messages, such as backend timeouts or permission issues.
