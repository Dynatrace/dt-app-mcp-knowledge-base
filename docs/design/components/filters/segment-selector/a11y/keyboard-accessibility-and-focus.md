## Keyboard accessibility and focus

`SegmentSelector` handles focus management out of the box. When the popup opens, focus moves to the first segment option; when it closes, focus returns to the trigger.

- **Don't** override the component's built-in focus handling. Focus must move into the popup when it opens, and return to the trigger on close, so screen readers can announce the state change correctly.
