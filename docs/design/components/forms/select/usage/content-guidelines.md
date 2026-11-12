## Content guidelines

### Label (recommended)

Add a label that describes the purpose of the select. It should be descriptive but short (1-2 words).

- Do: Databases
- Don't: Select a database from the dropdown

### Placeholder (required)

- Default text for a single select: **Select an option**
- Default text for a multiselect: **Select options**

The default placeholder works for most use cases, but if you customize the placeholder, do the following:

- Use the formula **Add + [subject]** or **[Verb] + [subject]**.
- “Add” is the default verb for our placeholders. Don't replace it with alternatives such as “Enter,” “Fill,” or “Type,” unless there's a good reason to do so.
- Omit unnecessary articles (a, an, the).
- Don't add periods, ellipses, or exclamation marks.

Examples:

- Select database
- Select editors

:::note Use hint for essential information

Don't use the placeholder for information users need to complete the task, as placeholders disappear as soon as users start typing.

:::

### Hint (optional)

Use the hint ([FormFieldMessages](https://developer.dynatrace.com/design/components/forms/FormField.md#show-custom-hints-and-errors) component) for information users need to avoid errors or work efficiently. Always provide any error messages here too.

Example: Select 1-3 options.

- Keep the hint short.
- Add periods after sentences.
