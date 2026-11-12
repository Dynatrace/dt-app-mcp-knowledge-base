## Content guidelines

### Label (recommended)

Add a label that describes the purpose or context of the number to be entered. It should be descriptive but short (1-2 words).

- Do: Password
- Do: Access key
- Don't: Add your password here

### Placeholder (required)

- Default text: **Add password**

The default placeholder text works for most use cases, but if you customize the placeholder, do the following:

- Use the formula **Add + [subject]** or **[Verb] + [subject]**.
- “Add” is the default verb for our placeholders. Don't replace it with alternatives such as “Enter,” “Fill,” or “Type,” unless there's a good reason to do so.
- Omit unnecessary articles (a, an, the).
- Don't add periods, ellipses, or exclamation marks.

Example: Add access key

:::note Use hint for essential information

Don't use the placeholder for information users need to complete the task, as placeholders disappear when users start typing.

:::

### Hint (optional)

Use the hint ([FormFieldMessages](https://developer.dynatrace.com/design/components/forms/FormField.md#show-custom-hints-and-errors) component) for information users need to avoid errors or work efficiently. Always provide any error messages here too.

Example: Passwords must be at least 8 characters.

- Keep the hint short.
- Add periods after sentences.
