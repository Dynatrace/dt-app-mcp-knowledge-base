The `Label` component allows users to add an associated text to another form control by using the `FormField` component.

**`LabelProps`**

| Prop       | Type      | Default | Description                                                                                                                                                                                                               |
| ---------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `htmlFor`  | `string`  |         | Defines the id of a labelable form related field.                                                                                                                                                                         |
| `required` | `boolean` | `false` | If there is a wrapping form field then this label uses the required value from the form field, otherwise it uses this required value. The label has a visual style to indicate the associated field is a mandatory field. |
| `disabled` | `boolean` | `false` | If there is a wrapping form field then this label uses the disabled value from the form field, otherwise it uses this disabled value. The label has a visual style to indicate the associated field is disabled.          |
