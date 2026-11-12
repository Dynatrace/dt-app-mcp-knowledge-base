## Keyboard accessibility and focus

`InformationOverlay` handles focus management out of the box. When the overlay opens, focus moves into the revealed content; when it closes, focus returns to the trigger.

- **Don't** override the component's built-in focus handling. Focus must move into the revealed content when the overlay opens, and return to the trigger on close, so screen readers can announce the state change correctly.
- **Do** ensure the revealed content has a meaningful accessible name: the dialog or panel title, for example.
