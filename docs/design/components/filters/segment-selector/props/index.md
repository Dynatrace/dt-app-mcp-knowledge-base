Use the `SegmentSelector` as a top-level filter to narrow data by segment, setting the scope for any additional filters applied alongside it.

**`SegmentSelectorProps`**

```ts
export declare type SegmentSelectorProps = DOMProps & WithChildren & StylingProps & DataTestId & MaskingProps & BehaviorTrackingProps & Omit<FormControlBaseProps<(...args: any[]) => void, HTMLButtonElement>, 'onChange' | 'controlState'> & {
    /**
     * Internal: associates this control with a `_Form` rendered outside its
     * React subtree via the native `form` attribute. Unstable.
     * @internal
     */
    _form?: string;
    /**
     * Internal: routes this control's native/Strato validation messages to the
     * field outlet (default), the enclosing form's outlet, or both. Unstable.
     * @internal
     */
    _messageTarget?: _MessageTarget | _MessageTarget[];
    /**
     * Configures the style of the trigger.
     * @defaultValue 'default
     */
    variant?: 'default' | 'compact';
    /** Callback that is triggered when the open state of the SegmentSelector's overlay changes its open state. */
    onOpenChange?: (isOpen: boolean) => void;
};
```
