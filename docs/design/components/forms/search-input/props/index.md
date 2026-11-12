Use the `SearchInput` component for search queries. It includes a built-in `Clear` button for quick resets.

**`SearchInputProps`**

```ts
export declare type SearchInputProps = Pick<BaseInputProps, 'variant' | 'onBlur' | 'autoComplete' | 'placeholder' | 'minLength' | 'maxLength'> & FormControlStateProps & WithChildren & StylingProps & DataTestId & MaskingProps & FormControlProps<string, (value: string) => void, HTMLInputElement> & BehaviorTrackingProps & {
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
