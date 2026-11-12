The `TextArea` component can be used as a multi-line plain-text editing control to enter free-form text, such as a comment on a form. The component uses a fallback FormFieldMessages context if it wasn't wrapped in a FormField.

**`TextAreaProps`**

```ts
export declare type TextAreaProps = FormControlProps<string, (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void | never, HTMLDivElement> & StylingProps & DataTestId & MaskingProps & KeyboardEvents & BehaviorTrackingProps & {
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
    placeholder?: string;
    /**
     * This attribute indicates whether the textarea is resizable by the user, and, if so, in which direction.
     * @defaultValue 'both'
     */
    resize?: 'both' | 'vertical' | 'horizontal' | 'none';
    /**
     * The visible width of the text control, in average character widths.
     * If it is specified, it must be a positive integer.
     * @defaultValue 20
     */
    cols?: number;
    /**
     * The number of visible text lines for the control. If it is specified, it must be a positive integer.
     * @defaultValue 2
     */
    rows?: number;
    /**
     * The minimum number of characters required that the user should enter.
     * Doesn't stop the user from removing characters so that the number entered goes past the minimum,
     * but it does make the value entered into the <textarea> invalid.
     * With a set minlength an empty <textarea> is still considered valid unless you also have the required attribute set.
     */
    minLength?: number;
    /**
     * The maximum number of characters that the user can enter. If this value isn't specified,
     * the user can enter an unlimited number of characters.
     */
    maxLength?: number;
    /**
     * This attribute indicates whether the value of the control can be automatically completed by the browser.
     * If no autocompletion is desired, it can be set to "off".
     */
    autoComplete?: string;
    /**
     * Sets the width of the textarea element.
     * @defaultValue 'full'
     */
    width?: 'content' | 'full' | Property.Width<string & Record<string, never>>;
};
```
