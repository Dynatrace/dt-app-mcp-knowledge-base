## Keyboard accessibility and focus

`AvatarGroup` handles focus management out of the box. The focus can be moved with the `arrow-left` and `arrow-right` keys, as well as the `tab` key. When the overflow trigger is activated, focus moves into the revealed list; when the list closes, focus returns to the trigger.

- **Do** ensure the revealed content has a meaningful accessible name.
- **Don't** override the component's built-in focus handling. Focus must move into the revealed list when it opens, and return to the trigger on close, so screen readers can announce the state change correctly.
