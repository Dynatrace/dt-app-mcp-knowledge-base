## Content guidelines

### Label (recommended)

Add a label that describes the purpose or context for the input. It should be descriptive but short (1-2 words).

- Do: User name
- Don't: Text field

### Placeholder (required)

- Default placeholder for `type="text"`: **Add text**
- Default placeholder for `type="email"`: **Add email**
- Default placeholder for `type="url"`: **Add URL**
- Default placeholder for `type="tel"`: **Add telephone number**

For `type="text"` inputs, a customized placeholder may support user understanding better. If you choose to customize the placeholder, do the following:

- Use the formula **Add + [subject]** or **[Verb] + [subject]**.
- “Add” is the default verb for our placeholders. Don't replace it with alternatives such as “Enter,” “Fill,” or “Type,” unless there's a good reason to do so.
- Omit unnecessary articles (a, an, the).
- Don't add periods, ellipses, or exclamation marks.

Example custom placeholders for `type="text"`:

- Add last name
- Add tags

:::note Use hint for essential information

Don't use the placeholder for information users need to complete the task, as placeholders disappear when users start typing.

:::

### Hint (optional)

Use the hint ([FormFieldMessages](https://developer.dynatrace.com/design/components/forms/FormField.md#show-custom-hints-and-errors) component) for information users need to avoid errors or work efficiently. Always provide any error messages here too.

Example hint for a unique name requirement: Name must be unique and can't be changed later.

- Keep the hint short.
- Only add periods after sentences.
