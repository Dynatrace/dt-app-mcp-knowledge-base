## Keyboard accessibility and focus

`ExpandableText` handles focus management out of the box. When the trigger is activated, focus stays on the trigger and the content expands in place. The user tabs into the revealed content when ready.

- **Do** verify that revealed content appears immediately after the trigger, in reading order, so `Tab` moves into it naturally.
- **Don't** move focus into the revealed content on activation. Doing so would suppress the state announcement and screen reader users wouldn't know that the content opened.
