The `Combobox` component allows users to choose one option from a collapsed dropdown, filter options by typing, or create a new one.

**`ComboboxProps`**

```ts
export declare type ComboboxProps = PropsWithChildren<Omit<FormControlProps<string | null, (value: string | null) => void, HTMLInputElement>, 'controlState'>> & DOMProps & StylingProps & DataTestId & BehaviorTrackingProps & MaskingProps & {
    /**
     * Called when the user creates a new option by typing a value not in the list.
     * Receives the trimmed input string.
     * When `value` is controlled, `onChange` is not called for the created value;
     * set `value` in this callback to apply it. When uncontrolled, the value is
     * applied and `onChange` is called before this callback.
     */
    onCreateOption?: (inputValue: string) => void;
    /**
     * Called when the open state of the dropdown changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Placeholder text shown when no value is selected.
     * @defaultValue "Search or create"
     */
    placeholder?: string;
    /**
     * Action word shown before the typed input in the option to create a new value.
     * For example, pass `"Use"` to render "Use xyz" instead of the default "Create xyz".
     * @defaultValue "Create"
     */
    createLabel?: string;
};
```

## Combobox components
