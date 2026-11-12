## Content guidelines

### Label (optional)

Add a customized label if the purpose for the `DateTimePicker` isn’t obvious from the context. The label should be descriptive but short (1-2 words).

### Placeholder (required)

- Default placeholder for date and time input: **Add date and time**
- Default placeholder for date input: **Add date**
- Default placeholder for time input: **Add time**

The default placeholder text works for most use cases, but if you customize the placeholder, do the following:

- Use the formula **Add + [subject]** or **[Verb] + [subject]**
- “Add” is the default verb for our placeholders. Don't replace it with alternatives such as “Enter,” “Fill,” or “Type,” unless there's a good reason to do so.
- Omit unnecessary articles (a, an, the).
- Don't add periods, ellipses, or exclamation marks.

:::note Regional formatting

As soon as a date input is detected, the formatting of the placeholder text switches automatically to that of the user's regional and time settings. For example: DD/MM/YYYY, hh:mm for Europe and the 24-hour clock.

:::

:::note Use hint for essential information

Don't use the placeholder for information users need to complete the task, as placeholders disappear when users start typing.

:::

### Hint (optional)

Use the hint ([FormFieldMessages](https://developer.dynatrace.com/design/components/forms/FormField.md#show-custom-hints-and-errors) component) for information users need to avoid errors or work efficiently. Always provide any error messages here too.

Example hint text: Absolute and relative dates are supported.

- Keep the hint short.
- Add periods after sentences.
