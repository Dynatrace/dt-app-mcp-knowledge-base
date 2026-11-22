## Accessible names and roles

- **Do** verify that the visible label matches the accessible name, if a visible label is present. Wrapping the `Combobox` in a `FormField` with a `Label` handles this for you.
- **Do** provide an `aria-label` that describes the purpose of the field in its context, if no visible label is present.
- **Do** provide an `aria-label` on a `Combobox.Option` if its content isn't descriptive enough for screen readers, for example when it contains only an icon.
