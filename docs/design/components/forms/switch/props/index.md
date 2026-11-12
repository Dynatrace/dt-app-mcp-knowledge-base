Use the `Switch` to let users toggle a setting between on and off. The change takes effect immediately without requiring a separate confirmation step.

**`SwitchProps`**

```ts
export declare type SwitchProps = FormControlProps<boolean, (checked: boolean, event?: ChangeEvent<HTMLInputElement>) => void | never, HTMLDivElement> & StylingProps & DataTestId & MaskingProps & BehaviorTrackingProps & WithChildren & {
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
    /** The string used as the value of the switch when submitting it in a form, if the switch is toggled on. */
    formValue?: string;
};
```
