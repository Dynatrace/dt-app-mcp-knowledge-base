The `FormField` component is the outermost layout component of an input component (for example `TextInput`), providing support for displaying a sibling `label` element alongside.

It also features responsive design: small containers show the label elements aligned on top of the input. In comparison, wider containers show input elements with their label aligned to the left.

The form field is child-agnostic.

**`SharedFormFieldProps`**

| Prop           | Type      | Default | Description                                                        |
| -------------- | --------- | ------- | ------------------------------------------------------------------ |
| `controlId`    | `string`  |         | An id for the form control (also needed to link the label).        |
| `required`     | `boolean` | `false` | Defines if any form control within the FormField is required.      |
| `disabled`     | `boolean` | `false` | Defines if any form control within the FormField is disabled.      |
| `ariaDisabled` | `boolean` |         | Defines if any form control within the FormField is aria-disabled. |
| `readOnly`     | `boolean` | `false` | Defines if any form control within the FormField is read-only.     |
