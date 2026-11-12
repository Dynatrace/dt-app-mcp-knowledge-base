The `Divider` component visually separates groups of content.

**`DividerProps`**

| Prop            | Type                                                             | Default        | Description                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `orientation`   | `'horizontal' \| 'vertical'`                                     | `'horizontal'` | Orientation of the Divider component.                                                                                                                                                |
| `as`            | `'hr' \| 'div'`                                                  | `'div'`        | Control the HTML tag used for rendering the Divider.                                                                                                                                 |
| `flexItem`      | `boolean`                                                        | `true`         | Indicate whether the Divider is used inside a Flex component to apply the right styling. If set to false, make sure to have an explicit width/height style set on a parent HTML tag. |
| `color`         | `'primary' \| 'neutral' \| 'success' \| 'warning' \| 'critical'` | `'neutral'`    | The color of the Divider.                                                                                                                                                            |
| `variant`       | `'default' \| 'accent'`                                          | `'default'`    | The visual style of the Divider.                                                                                                                                                     |
| `'aria-hidden'` | `AriaAttributes['aria-hidden']`                                  |                | Hides the Divider from the accessibility tree. Set this to \`true\` when the Divider is purely decorative, so screen readers don't announce it as a separator.                       |
