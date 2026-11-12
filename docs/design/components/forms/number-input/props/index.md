:::caution Deprecated

This component is deprecated and will be removed in a future release. Please use the NumberInputV2 component instead.

:::

Number inputs let users enter and edit integers and floating-point numbers.

**`NumberInputProps`**

```ts
export declare type NumberInputProps = Pick<BaseInputProps, 'autoComplete' | 'placeholder' | 'minLength' | 'maxLength' | 'pattern' | 'onKeyUp' | 'className' | 'style' | 'data-testid' | 'data-dtrum-mask' | 'data-dtrum-allow'> & FormControlProps<number | null, (value: number | null) => void> & FocusEvents & BehaviorTrackingProps & {
    /** Handler that is called when a key is pressed. */
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    /** Minimum amount of the input. */
    min?: number | string;
    /** Maximum amount of the input. */
    max?: number | string;
    /** Defines the step size in which increments/decrements can be performed on the input. */
    step?: number;
};
```
