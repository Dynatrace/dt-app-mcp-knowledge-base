## Keyboard accessibility and focus

`HelpMenu` handles focus management out of the box. When the menu opens, focus moves to the first menu item; when it closes, focus returns to the trigger.

- **Do** ensure that the trigger has a meaningful accessible name: "Help", for example. This allows screen readers to announce its purpose when it receives focus.
- **Don't** override the component's built-in focus handling. Focus must land on the first menu item when the menu opens and return to the trigger on close, so screen readers can announce the state change correctly.
