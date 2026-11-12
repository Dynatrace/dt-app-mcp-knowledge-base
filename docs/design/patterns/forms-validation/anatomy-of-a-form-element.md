## Anatomy of a form element

![Form anatomy](./assets/forms-anatomy-light.webp)

1. Label
2. Placeholder
3. Hint

### Labels

![Form labels](./assets/forms-labels-light.webp)

Labels help users understand the purpose of the form. Labels are required unless the purpose of the form is obvious from the context. Labels should always be short and descriptive. Eliminate unnecessary articles (a, an, the) and obvious or redundant words, and never add a period.

### Placeholders

![Form placeholders](./assets/forms-placeholders-light.webp)

Placeholders show users which input is expected. In addition, they increase the contrast and visibility of unfilled form fields. Our form field components come with default placeholders that work in most situations, but they can also be customized when necessary. Be aware that placeholders disappear as soon as users start typing in the field. Always use hints for information users need to complete the task.

### Hints

![Form hints](./assets/forms-hints-light.webp)

Use hints for in-context guidance that helps users fill out a form element correctly. Contrary to placeholders, hints are always visible, even after the user starts typing in the field. Therefore, hints should be used for information users need to complete the task—for example, special characters required for a password. Keep hints short and to the point.

### Required form elements

![Required form elements](./assets/forms-required-light.webp)

If a value is required for a particular form field, put an asterisk at the end of the label.

### Form element states

![A TextInput in enabled, disabled, and read-only state.](https://developer.dynatrace.com/assets/images/forms-element-states-light-6f6fd86fba7d2491741472559b118173.webp)

Form elements can be enabled, disabled, or read only. While disabled and read-only states both prevent editing, they behave differently:

- **Disabled:** Elements cannot be focused or submitted, but assistive technologies can still discover and announce them as disabled. If a disabled element must remain accessible to explain why it's unavailable, use [ariaDisabled](https://developer.dynatrace.com/design/components/forms/FormField/props.md) and prevent interaction in your code.
- **Read only:** Values cannot be changed but are relevant and submitted with the form. Users can focus the input and highlight the content.

See [Interaction states](https://developer.dynatrace.com/design/foundations/interaction-states.md/) for guidance on when to use each.
