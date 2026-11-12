The `Sheet` component allows you to show additional content in an overlay of your application. It is essential to add at least one focusable element inside the `Sheet` to be keyboard accessible. If none is available the focus will be lost and given to the `window.document` when opening the sheet.

The developer is responsible for the sheet's visibility via the `show` prop. This prop must be updated to false in the `onDismiss` callback to ensure keyboard accessibility.

**`SheetProps`**

| Prop        | Type                     | Default | Description                                                                                                          |
| ----------- | ------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `title`     | `string \| ReactElement` |         | The title which is displayed at the top of the sheet.                                                                |
| `show`      | `boolean`                | `false` | Toggles the visibility of the sheet component.                                                                       |
| `topoffset` | `number`                 | `28`    | The offset to the top of the App which should not be covered.                                                        |
| `actions`   | `ReactNode`              |         | Actions will be rendered to the top right, next to the title. They usually contain buttons like 'Apply' or 'Cancel'. |
| `onDismiss` | `() => void`             |         | Handler that is only called if the sheet is closed with the Escape key.                                              |
