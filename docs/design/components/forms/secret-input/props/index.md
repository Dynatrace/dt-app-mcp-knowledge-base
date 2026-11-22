Use the `SecretInput` to let users enter write-only secrets, such as API tokens. After a secret is stored, the input shows a fixed mask with a "Replace" button, so the secret can be changed but never displayed again.

**`SecretInputProps`**

```ts
export declare type SecretInputProps = Pick<BaseInputProps, 'placeholder' | 'autoComplete' | 'minLength' | 'maxLength' | 'pattern' | 'onKeyDown' | 'onKeyUp' | 'className' | 'style' | 'data-testid' | 'data-dtrum-mask' | 'data-dtrum-allow' | 'onFocus' | 'onBlur'> & FormControlProps<string | null, (value: string) => void> & BehaviorTrackingProps & {
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
