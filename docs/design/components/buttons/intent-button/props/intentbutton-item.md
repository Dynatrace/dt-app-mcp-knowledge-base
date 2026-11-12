### IntentButton.Item

Has the same properties as the `IntentButton` component and can also use the `IntentButton.Icon` component.

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
