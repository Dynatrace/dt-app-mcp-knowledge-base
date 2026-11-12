Component to comfortably enter a date time value. The `DateTimePicker` component automatically uses the user's settings for the locale and timezone and formats the date and time accordingly.

**`DateTimePickerProps`**

```ts
export declare type DateTimePickerProps = FormControlProps<TimeValue | string | null, (value: TimeValue | string | null) => void, HTMLDivElement> & StylingProps & DataTestId & MaskingProps & DateTimePickerTypeProps & BehaviorTrackingProps & {
    /**
     * Earliest allowed ISOString and timestamp for validation.
     */
    min?: string;
    /**
     * Latest allowed ISOString for validation.
     */
    max?: string;
    /**
     * The placeholder that's shown in the input field if the content is empty.
     */
    placeholder?: string;
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
