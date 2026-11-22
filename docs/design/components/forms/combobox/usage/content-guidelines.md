## Content guidelines

### Label (recommended)

Add a label that describes the purpose of the field. Keep it descriptive but short (one to two words).

- Do: Programming language
- Don't: Select or enter a programming language

### Placeholder

The default placeholder is "Search or create". It works for most use cases. You may want to customize the placeholder for certain use cases. If you do, use this pattern:

- **Select + [subject]** or **Select or enter + [subject]**.
- Omit unnecessary articles (a, an, the).
- Don't add periods, ellipses, or exclamation marks.

Examples:

- Select language
- Select or enter language

:::note Use a hint for essential information

Don't use the placeholder for information that users need to complete the task. The placeholder disappears as soon as users start typing.

:::

### Hint (optional)

Use the hint ([FormFieldMessages](https://public-developer.central.internal.dynatrace.com/design/components/forms/FormField.md#show-custom-hints-and-errors) component) for information users need to avoid errors or work efficiently. Always provide any error messages here too.

Example: New languages can be added using any alphabet.

- Keep the hint short.
- Add periods after sentences.

### Option labels

- Use sentence case.
- Keep labels short so users can scan the list.
- Order options in a logical way, for example alphabetically, or group them with `Combobox.Group`.
- If you use content other than plain text in an option, provide a `textValue` so filtering works.

### Create label

The create option produces the label "Create" followed by the entered text. Don't change the action word "Create" with the `createLabel` prop unless "create" doesn't fit the use case. For example, the action verb "Use" is a better fit if the value is applied without being saved.
