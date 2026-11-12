## When not to use

- Multi-line or long-form text is expected. Use `TextArea`.
- Numeric inputs with increment/decrement controls or where the input is used for calculations (quantities, ages). Use `NumberInputV2`.
- Sensitive data should be masked (passwords, secrets). Use `PasswordInput`.
- For search or filter functionality. Use `SearchInput` or an appropriate filter component.
- A date, time, or date and time selection is needed. Use `DateTimePicker`.
- Users should select from predefined options. Use `Select`, `Radio`, or `Checkbox`.
- Code or structured syntax editing is required. Use `CodeEditor` or `DQLEditor`.
- Complex contact info is collected (name, email, phone, address). Use multiple fields within a `FieldSet`.
