The `Select` component allows you to choose one or multiple options from a collapsed dropdown with options.

**`SelectFormsProps`**

```ts
export declare type SelectFormsProps<OptionValue, Multiple extends boolean> = SelectBaseProps<OptionValue, Multiple> & FormControlProps<Multiple extends true ? SelectMultiValue<OptionValue> : SelectSingleValue<OptionValue>, (value: SelectOnChangeValue<OptionValue, Multiple>) => void, HTMLElement> & FormControlStateProps & DOMProps & StylingProps & DataTestId & BehaviorTrackingProps;
```

**`SelectBaseProps`**

```ts
export declare type SelectBaseProps<T, Multiple extends boolean> = PropsWithChildren<{
    /**
     * Used to compare options with objects for values either by a specified property of the object or through a comparator function.
     */
    compareBy?: keyof T | ((valueA: T, valueB: T) => boolean);
    /** Name used for the component when submitting it in a form */
    name?: string;
    /** Form name used to connect the component to a form */
    form?: string;
    /**
     * Internal: routes this control's native/Strato validation messages to the
     * field outlet (default), the enclosing form's outlet, or both. Unstable.
     * @internal
     */
    _messageTarget?: _MessageTarget | _MessageTarget[];
    /**
     * Boolean to determine whether the component is required
     *
     * @defaultValue false
     */
    required?: boolean;
    /**
     * Whether the component is disabled
     *
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * Event handler called when the open state for the select changes
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Whether or not the select allows multiple selection or not
     * @defaultValue false
     */
    multiple?: Multiple;
    /**
     * Whether or not the select is clearable.
     * @defaultValue false for single select, true for multi select
     */
    clearable?: boolean;
}> & MaskingProps;
```
