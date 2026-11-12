Use `NumberInputV2` to let users enter integers and floating-point numbers.

**`NumberInputV2Props`**

```ts
export declare type NumberInputV2Props = Pick<BaseInputProps, 'placeholder' | 'variant' | 'onKeyUp' | 'onKeyDown' | 'className' | 'style' | 'data-testid' | 'data-dtrum-mask' | 'data-dtrum-allow'> & FormControlProps<number | null, (value: number | null) => void> & PropsWithChildren & FocusEvents & BehaviorTrackingProps & {
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
    /** Minimum amount of the input.
     * @defaultValue undefined */
    min?: number;
    /** Maximum amount of the input.
     * @defaultValue undefined */
    max?: number;
    /** Defines the step in which increments/decrements can be performed on the input and validates the value.
     * Must be a positive number greater than 0. Values that are negative, zero, NaN, or undefined default to 1.
     * @defaultValue undefined */
    step?: number;
    /** Multiplier applied to `step` (or 1 if no `step` is set) to determine how much the value changes
     * when using arrow keys or the scroll wheel. Must be a positive integer greater than 0.
     * Values that are negative, zero, NaN, or undefined default to 1. Decimal values are truncated to the nearest integer.
     * @defaultValue 1 */
    stepMultiplier?: number;
};
```
