Use the `Checkbox` to let users select one or more options from a list, or to confirm a selection that requires a further action such as clicking a submit button.

**`CheckboxProps`**

```ts
export declare type CheckboxProps = FormControlProps<boolean | 'indeterminate', (checked: boolean, event?: ChangeEvent<HTMLInputElement>) => void | never, HTMLDivElement> & StylingProps & DataTestId & WithChildren & MaskingProps & BehaviorTrackingProps & {
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
     * Handler that is called when the element's focus status changes.
     * @deprecated Use onFocus/onBlur instead.
     */
    onFocusChange?: (isFocused: boolean) => void;
    /**
     * A string representing the value used for the checkbox.
     * When submitted in a form, it is only submitted if checked, with the set value.
     * If undefined, the string 'on' is submitted by default as per https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#attr-value.
     */
    formValue?: string;
};
```
