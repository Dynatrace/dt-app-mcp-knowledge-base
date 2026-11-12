The `Menu` component displays the list of action items that are revealed when the user clicks on the trigger element.

**`MenuProps`**

| Prop               | Type                        | Default | Description                                                                                                                                                 |
| ------------------ | --------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultOpen`      | `boolean`                   | `false` | The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.                                      |
| `open`             | `boolean`                   |         | The controlled open state of the dropdown menu. Must be used in conjunction with onOpenChange.                                                              |
| `onOpenChange`     | `(isOpen: boolean) => void` |         | Event handler called when the open state of the dropdown menu changes.                                                                                      |
| `modal`            | `boolean`                   | `true`  | The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers. |
| `mobileBreakpoint` | `number`                    | `480`   | The maximum viewport width in pixels at which the mobile drill-down menu is rendered instead of the standard dropdown.                                      |
