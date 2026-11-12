Use the `Radio` to let users select one option from a small group of mutually exclusive choices. The choices are presented so users can compare all options at once.

**`RadioProps`**

```ts
export declare type RadioProps = Pick<FormControlProps<string, never, HTMLLabelElement>, 'disabled' | 'value' | 'onFocus' | 'onBlur'> & DOMProps & StylingProps & WithChildren & DataTestId & AriaLabelingProps & BehaviorTrackingProps & {
    /**
     * Handler that is called when the element's focus status changes.
     * @deprecated Use onFocus/onBlur instead.
     */
    onFocusChange?: (isFocused: boolean) => void;
};
```

**`RadioGroupProps`**

```ts
export declare type RadioGroupProps = FormControlProps<string, (value: string, event?: FocusEvent<HTMLInputElement>) => void | never, HTMLDivElement> & StylingProps & WithChildren & DataTestId & MaskingProps & BehaviorTrackingProps & {
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
