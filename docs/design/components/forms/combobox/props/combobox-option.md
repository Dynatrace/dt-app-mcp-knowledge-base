### Combobox.Option

Every option of the `Combobox` is represented by the children of `Combobox.Option`.

**`ComboboxOptionProps`**

```ts
export declare type ComboboxOptionProps = PropsWithChildren & StylingProps & DataTestId & BehaviorTrackingProps & {
    /**
     * The string value submitted when this option is selected.
     */
    value: string;
    /**
     * Plain-text label used for filtering and as the react-select option key when
     * `children` is a non-string `ReactNode`. When omitted and `children` is a
     * plain string, `children` is used automatically.
     */
    textValue?: string;
    /**
     * Unique key for the option within the list. Defaults to `value` when omitted.
     */
    id?: Key;
    /**
     * Accessible label for the option, used when `children` is not descriptive enough for screen readers.
     */
    'aria-label'?: string;
    /**
     * When `true`, the option is visible but cannot be selected.
     */
    disabled?: boolean;
};
```
