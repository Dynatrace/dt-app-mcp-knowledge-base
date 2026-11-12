Use the `TextInput` component to request a small amount of information, such as a name or an email address. To let users input larger amounts of text, use a `TextArea` instead.

**`TextInputProps`**

```ts
export declare type TextInputProps = Pick<BaseInputProps, 'autoComplete' | 'placeholder' | 'variant' | 'minLength' | 'maxLength' | 'pattern' | 'onClick' | 'onKeyDown' | 'onKeyUp' | 'onFocus' | 'onBlur' | 'onValidityChange' | 'role' | 'className' | 'style' | 'data-testid' | 'data-dtrum-mask' | 'data-dtrum-allow'> & FormControlProps<string, (value: string, event: ChangeEvent<HTMLInputElement>) => void, HTMLInputElement> & WithChildren & BehaviorTrackingProps & {
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
     * Maps to the native input type. Use this to enhance the semantics
     * of the native input, change default keyboards on mobile or support browser
     * autocompletion for specific types.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types}
     *
     * @defaultValue 'text'
     */
    type?: 'text' | 'password' | 'email' | 'url' | 'tel' | 'search';
};
```

**`TextInputUncontrolledProps`**

| Prop           | Type     | Default | Description                     |
| -------------- | -------- | ------- | ------------------------------- |
| `defaultValue` | `string` |         | The default value of the input. |
| `value`        | `never`  |         | The value of the input.         |

**`TextInputControlledProps`**

| Prop           | Type     | Default | Description                     |
| -------------- | -------- | ------- | ------------------------------- |
| `defaultValue` | `never`  |         | The default value of the input. |
| `value`        | `string` |         | The value of the input.         |
