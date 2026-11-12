## Keyboard accessibility and focus

`Select` handles focus management out of the box. When the dropdown opens, focus stays on the combobox and the active option is announced via `aria-activedescendant`. When the dropdown closes, focus returns to the trigger.

- **Don't** override the component's built-in focus handling. The active option must be announced via `aria-activedescendant` so screen readers can track the selection correctly.
