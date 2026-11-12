InlineButton is an inline, text-flowing action trigger. It flows with surrounding text, wraps naturally across line breaks, and supports `color`, `loading`, and `disabled`/`aria-disabled` states. Use the `as` prop to render a different underlying element.

**`InlineButtonProps`**

```ts
export declare type InlineButtonProps<E extends ElementType> = PolymorphicComponentProps<E, InlineButtonOwnProps>;
```

**`InlineButtonOwnProps`**

| Prop              | Type                                                                                  | Default     | Description                                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onClick`         | `MouseEventHandler`                                                                   |             | Called when the button is clicked. Not invoked while the button is disabled or loading.                                                                                                  |
| `disabled`        | `boolean`                                                                             | `false`     | If a button is disabled, it cannot be interacted with: it leaves the tab order and its pointer and click events are blocked.                                                             |
| `color`           | `'primary' \| 'neutral' \| 'success' \| 'warning' \| 'critical'`                      | `'neutral'` | The text, icon, and underline/hover color.                                                                                                                                               |
| `loading`         | `boolean`                                                                             | `false`     | The current loading state of the button. If true, a loading icon is shown with aria-disabled=true and aria-busy=true. The button stays in the tab order unless \`disabled\` is also set. |
| `'aria-expanded'` | `boolean \| 'true' \| 'false'`                                                        |             | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.                                                                              |
| `'aria-haspopup'` | `boolean \| 'menu' \| 'listbox' \| 'tree' \| 'grid' \| 'dialog' \| 'true' \| 'false'` |             | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.                                                           |
| `'aria-controls'` | `string`                                                                              |             | Identifies the element (or elements) whose contents or presence are controlled by the current element.                                                                                   |
