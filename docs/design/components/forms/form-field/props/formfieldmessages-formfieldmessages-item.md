### FormFieldMessages, FormFieldMessages.Item

You can use the `FormFieldMessages.Item` component to render any custom message item inside the `FormFieldMessages`. Similarly, you can use the `FormFieldMessages.Item` component to render any message item coming from the form control.

**`FormFieldMessageItemProps`**

```ts
export declare type FormFieldMessageItemProps = FormFieldMessageBaseItemProps & {
    /**
     * Content of the FormFieldMessage
     */
    message?: ReactNode;
    /**
     * The validity state key set on the form control element.
     * The automatically supported errors depend on the keys from the browser API (See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState).
     * In case the same key is used for additional validation, the message will be overwritten by the default.
     *
     */
    validityStateKey?: string;
    /**
     * When `true`, an error item is revealed as soon as it mounts and puts the field into
     * an error state immediately, bypassing the field's normal reveal gate (first blur, overlay
     * close, or immediate-on-click, depending on the control). Has no effect on hint items.
     *
     * @defaultValue false
     */
    showImmediately?: boolean;
};
```
