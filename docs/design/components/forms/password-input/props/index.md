The `PasswordInput` component can be used to hide user input. Always use a `PasswordInput` when your app asks for sensitive data, such as a password. Users can click on the eye icon to hide or show their data.

**`PasswordInputProps`**

```ts
export declare type PasswordInputProps = Pick<BaseInputProps, 'placeholder' | 'autoComplete' | 'minLength' | 'maxLength' | 'pattern' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onKeyUp' | 'className' | 'style' | 'data-testid' | 'data-dtrum-mask' | 'data-dtrum-allow'> & FormControlProps<string, (value: string, event?: ChangeEvent<HTMLInputElement>) => void, HTMLInputElement> & WithChildren & BehaviorTrackingProps & {
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
