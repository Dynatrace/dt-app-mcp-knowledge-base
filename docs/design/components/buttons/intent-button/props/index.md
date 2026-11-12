The `IntentButton` is a dedicated component for sending [intents](https://developer.dynatrace.com/develop/guides/navigation/intents.md). The `IntentButton` only works within the AppShell context.

**`IntentButtonProps`**

```ts
export declare type IntentButtonProps = Exclude<IntentProps, 'onSelect' | 'icon'> & Pick<ButtonOwnProps, 'onClick' | 'color' | 'variant' | 'width' | 'aria-disabled' | 'textAlign' | 'size' | 'disabled'> & BehaviorTrackingProps & {
    /**
     * Enable the three dot menu for additional intents.
     * This menu includes a fallback "Open with..." entry for cases where specific intents are unavailable.
     * @defaultValue true
     */
    showMenu?: boolean;
};
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

**`IntentWithoutResponseProps`**

| Prop                 | Type                               | Default | Description |
| -------------------- | ---------------------------------- | ------- | ----------- |
| `options` (required) | `SendIntentOptions<IntentPayload>` |         |             |
| `onResponse`         | `never`                            |         |             |

**`IntentWithResponseProps`**

| Prop                    | Type                                         | Default | Description |
| ----------------------- | -------------------------------------------- | ------- | ----------- |
| `options` (required)    | `SendIntentWithResponseOptions<string>`      |         |             |
| `onResponse` (required) | `(response: SuccessRes \| ErrorRes) => void` |         |             |

## IntentButton components
