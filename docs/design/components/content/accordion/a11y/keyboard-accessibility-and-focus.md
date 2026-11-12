## Keyboard accessibility and focus

`Accordion` handles focus management out of the box. When a section is expanded or collapsed, focus stays on the trigger. The user tabs into the revealed content when ready.

- **Do** verify the revealed content appears immediately after the trigger in reading order, so `Tab` moves into it naturally.
- **Don't** move focus into the revealed content on activation. Doing so would suppress the state announcement and screen reader users wouldn't know that the content opened.
