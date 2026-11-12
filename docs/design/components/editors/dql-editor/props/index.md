The `DQLEditor` is specifically designed for editing DQL queries.

It further offers syntax highlighting and autocomplete functionality specific to the Dynatrace Query Language (DQL). Once the editor is focused via the keyboard, the user must press `Enter` to start editing and `Escape` to quit editing and return to the keyboard navigation flow.

**`DQLEditorProps`**

```ts
export declare type DQLEditorProps = Omit<DQLEditorBaseProps, 'onValidationStart' | 'onValidationEnd' | 'onValidityChange'> & (DQLEditorControlledProps | DQLEditorUncontrolledProps) & DQLEditorValidationProps;
```
