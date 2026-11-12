The `Modal` component lets you show important, additional content in an overlay.

**`ModalProps`**

| Prop               | Type                     | Default | Description                                                         |
| ------------------ | ------------------------ | ------- | ------------------------------------------------------------------- |
| `title` (required) | `string \| ReactElement` |         | Title of the modal, which is shown in the header section.           |
| `footer`           | `ReactNode`              |         | Footer section of the modal, where customized content can be added. |

**`BaseModalProps`**

| Prop          | Type                   | Default    | Description                                                                                                      |
| ------------- | ---------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `show`        | `boolean`              | `false`    | Controls when the modal is shown.                                                                                |
| `size`        | `ModalSizeOptionsType` | `'medium'` | Sets the size of the modal.                                                                                      |
| `onDismiss`   | `() => void`           |            | Handler function that is called when the modal is closed.                                                        |
| `dismissible` | `boolean`              | `true`     | Determines if you can click the backdrop to dismiss the modal. If true, pressing "ESC" also dismisses the modal. |
