## Keyboard accessibility and focus

`DateTimePicker` handles focus management out of the box. When the calendar opens, focus moves into the calendar dialog; when it closes, focus returns to the trigger.

- **Don't** override the component's built-in focus handling. Focus must move into the calendar dialog when it opens, and return to the trigger on close, so screen readers can announce the state change correctly.
