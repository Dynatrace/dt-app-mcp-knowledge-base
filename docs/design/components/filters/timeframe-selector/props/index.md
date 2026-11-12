Use the `TimeframeSelector` to let users filter data by time, choosing from preset timeframes or entering a custom start and end time.

**`TimeframeSelectorProps`**

```ts
export declare type TimeframeSelectorProps = FormControlProps<RequireAtLeastOne<{
    from: string;
    to: string;
}> | RequireAtLeastOne<Timeframe> | null, (value: Timeframe | null) => void, HTMLDivElement> & StylingProps & DataTestId & PropsWithChildren & MaskingProps & BehaviorTrackingProps & {
    /**
     * Shows the "Clear selection" button if set to true.
     * @defaultValue false
     * @deprecated The `clearable` prop is deprecated in favor of the new clear button directly located in the input.
     */
    clearable?: boolean;
    /**
     * The ISODatetime string of the earliest datetime that can be configured.
     * @defaultValue '1677-09-21T00:12:43.145224192Z'
     */
    min?: string;
    /**
     * The ISODatetime string of the latest datetime that can be configured.
     * @defaultValue '2262-04-11T23:47:16.854775807Z'
     */
    max?: string;
    /**
     * The precision of the time shown in the display value.
     * @defaultValue 'minutes'
     */
    precision?: 'minutes' | 'seconds' | 'milliseconds';
    /**
     * Whether the TimeframeStepper is shown.
     * @defaultValue true
     */
    stepper?: boolean;
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
};
```
