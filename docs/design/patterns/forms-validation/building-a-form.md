## Building a form

A form is composed of related form elements. The following guidelines ensure that users can rely on a consistent experience across multiple pages or apps when filling out forms.

### Spacing

Spacing communicates the relationship and hierarchy between individual form elements. Use the following guideline to ensure sufficient spacing between form elements:

![Spacing in forms](https://developer.dynatrace.com/assets/images/forms-spacing-light-2c875a04db89f8e9afeeaa38fb4cf441.webp)

- Vertical spacing between groups of form elements is `Spacings.Size32` (32px).
- Vertical spacing between form elements is `Spacings.Size16` (16px).
- Vertical spacing between checkboxes and radios is `Spacings.Size8` (8px).
- Vertical spacing between labels and form elements is `Spacings.Size4` (4px).

The maximum recommended width for single-column forms is 480px. Always use our spacing tokens.

### Columns

Single-column layouts are best for forms. Each form element gets its own row. Avoid multi-column layouts in forms, as they interrupt the vertical momentum of moving down the form.

![Columns in forms](./assets/forms-columns-light.webp)

If you must use a multi-column layout in a form, follow our spacing guidelines to ensure sufficient spacing between columns of form elements:

- Horizontal spacing between form elements is `Spacings.Size8` (8px). Always use the spacing token.

### Sizing form elements

The width of form elements should always reflect the expected length of the input. To ensure visual clarity in a single-column layout, or if the expected input is unknown, form elements may also fill the width of their parent.
