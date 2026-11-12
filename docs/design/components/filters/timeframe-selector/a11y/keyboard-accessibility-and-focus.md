## Keyboard accessibility and focus

`TimeframeSelector` handles focus management out of the box. When the popup opens, focus moves into the revealed content; when it closes, focus returns to the trigger.

- **Don't** override the component's built-in focus handling. Focus must move into the popup when it opens, and return to the trigger on close, so screen readers can announce the state change correctly.
