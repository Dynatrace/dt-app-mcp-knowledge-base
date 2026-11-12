## Item

The `ToggleButtonGroup.Item` component is used to render individual elements within the `ToggleButtonGroup`.

**`ToggleButtonGroupItemProps`**

```ts
export declare type ToggleButtonGroupItemProps = FormControlProps<string, never> & PropsWithChildren & DOMProps & AriaLabelingProps & StylingProps & DataTestId & BehaviorTrackingProps & {
    /** When a tooltip is provided, text is shown on hover. */
    tooltip?: string;
    /**
     * Zero or more items in a group can be checked.
     * @defaultValue false
     * @deprecated unused, will be removed
     */
    checked?: boolean;
    /**
     * Indicates if the mover is currently over the item.
     * @defaultValue false
     * @deprecated unused, will be removed
     */
    hovered?: boolean;
};
```
