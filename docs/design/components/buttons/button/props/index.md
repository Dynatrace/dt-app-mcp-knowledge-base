Buttons let users trigger actions or events with a single click, or by pressing `Enter` or `Space` while the button has focus.

**`ButtonProps`**

```ts
export declare type ButtonProps<E extends ElementType> = PolymorphicComponentProps<E, ButtonOwnProps>;
```

**`ButtonOwnProps`**

| Prop        | Type                                                             | Default     | Description                                                                                                                                                                               |
| ----------- | ---------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`  | `boolean`                                                        | `false`     | If a button is disabled e.g. it cannot be interacted with.                                                                                                                                |
| `variant`   | `'default' \| 'emphasized' \| 'accent'`                          | `'default'` | Different variants have different styles.                                                                                                                                                 |
| `type`      | `'button' \| 'reset' \| 'submit'`                                | `'button'`  | The HTML button type.                                                                                                                                                                     |
| `onClick`   | `MouseEventHandler`                                              |             | Called when the button is interacted with.                                                                                                                                                |
| `width`     | `'content' \| 'full' \| CSS.Property.Width<string & {}>`         | `'content'` | The width of the button.                                                                                                                                                                  |
| `color`     | `'primary' \| 'neutral' \| 'success' \| 'critical' \| 'warning'` | `'neutral'` | The color of the button. This should be chosen based on the context the button is used in.                                                                                                |
| `textAlign` | `'center' \| 'start'`                                            | `'center'`  | Controls the text alignment inside the button. Only affects the button if the width is not set to 'content'.                                                                              |
| `size`      | `'default' \| 'condensed'`                                       | `'default'` | The size of the button.                                                                                                                                                                   |
| `loading`   | `boolean`                                                        | `false`     | The current loading state of the button. If true, a loading icon is shown, the button stays in the tab order with aria-disabled=true, and its busy state is signalled via aria-busy=true. |
