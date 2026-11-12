## Content guidelines

### Label (recommended)

Add a label that describes the purpose or context for the input. It should be descriptive but short (1-2 words).

- Do: Feedback
- Don't: Do you have some feedback for us?
- Don't: Text area

### Placeholder (required)

- Default text: **Add text**

A customized placeholder in the text area can be more helpful with this component. If you choose to customize the placeholder, do the following:

- Use the formula **Add + [subject]** or **[Verb] + [subject]**.
- “Add” is the default verb for our placeholders. Don't replace it with alternates like “Enter,” “Fill,” or “Type,” unless there's a good reason to do so.
- Omit unnecessary articles (a, an, the).
- Don't add periods, ellipses, or exclamation marks.

Custom example: Add your feedback here

:::note Use hint for essential information

Don't use the placeholder for information users need to complete the task, as placeholders disappear when users start typing.

:::

### Hint (optional)

Use the hint ([FormFieldMessages](https://developer.dynatrace.com/design/components/forms/FormField.md#show-custom-hints-and-errors) component) for additional information that helps users add a valid input and avoid an error. Include a character counter if there's a character limit. Always provide any error messages here too.

Example hint: 0/100 characters

- Keep the hint short.
- Only add periods after sentences.
