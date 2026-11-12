## Content guidelines

### Label (optional)

Include a label if the purpose or scope of the search field isn't obvious from the context or to align it with nearby form fields. The label should be descriptive but short (1-2 words).

- Do: Search all records
- Don't: Search (It's understood from the component and the default placeholder text.)

### Placeholder (required)

- Default text: **Search**

The default placeholder text works for most use cases, but if you customize the placeholder, do the following:

- Use the formula **Add + [subject]** or **[Verb] + [subject]**.
- “Add” is the default verb for our placeholders. Don't replace it with alternatives such as “Enter,” “Fill,” or “Type,” unless there's a good reason to do so.
- Omit unnecessary articles (a, an, the).
- Don't add periods, ellipses, or exclamation marks.

Examples:

- Search all records
- Search name or ID

:::note Use hint for essential information

Don't use the placeholder for information users need to complete the task, as placeholders disappear when users start typing.

:::

### Hint (optional)

Use the hint ([FormFieldMessages](https://developer.dynatrace.com/design/components/forms/FormField.md#show-custom-hints-and-errors) component) for information users need to avoid errors or work efficiently. Always provide any error messages here too.

- Keep the hint short.
- Only add periods after sentences.
