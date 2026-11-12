## Keyboard accessibility and focus

`Menu` handles focus management out of the box. When the menu opens, focus moves to the first menu item; when it closes, focus returns to the trigger.

- **Don't** override the component's built-in focus handling. Focus must land on the first menu item when the menu opens, and return to the trigger on close, so screen readers can announce the state change correctly.
