## Keyboard accessibility and focus

`FilterBar` handles focus management out of the box. When an optional filter is pinned from the "Add filter" dropdown, focus moves automatically to the newly pinned filter item.

- **Don't** override the component's built-in focus handling. Focus must move to the pinned item so screen readers can announce it correctly.
