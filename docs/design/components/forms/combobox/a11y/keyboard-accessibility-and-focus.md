## Keyboard accessibility and focus

The `Combobox` handles focus management out of the box. Focus stays in the input while the dropdown is open, and the active option is announced. When users press **Tab**, the `Combobox` commits the typed text and moves focus to the next element.

- **Don't** override the built-in focus handling. The active option must stay announced so screen readers can track the user's position in the list.
