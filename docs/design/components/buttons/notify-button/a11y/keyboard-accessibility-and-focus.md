## Keyboard accessibility and focus

`NotifyButton` handles focus management out of the box. When the panel opens, focus moves into the revealed content; when it closes, focus returns to the trigger.

- **Do** provide a meaningful accessible name for the revealed content, such as the title of the panel or dialog.
- **Do** ensure that focus returns to the trigger when the content closes.
- **Don't** override the component's built-in focus handling. Focus must move into the revealed content when the panel opens, and return to the trigger on close, so screen readers can announce the state change correctly.
