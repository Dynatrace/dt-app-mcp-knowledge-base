## Choosing and aligning shortcut patterns

Consistency across apps is critical. Users should not have to learn different keys for the same action in each Dynatrace app.

### Reuse the baseline set

- Universal shortcuts like Copy (`Ctrl/Cmd+C`), Paste (`Ctrl/Cmd+V`), Undo (`Ctrl/Cmd+Z`), and Search (`Ctrl/Cmd+F`) should behave as users expect. Do not override them.

### Follow platform modifiers

- On macOS, use `⌘` instead of `Ctrl`, per [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/) conventions.
- On Windows/Linux, use `Ctrl` and follow patterns like `Alt`, `F6`, `Ctrl+Tab`, and arrow keys, per [Microsoft Fluent](https://learn.microsoft.com/en-us/windows/apps/design/basics/) guidance.

### Reserve keys for global patterns

- For example:
  - `Ctrl/⌘+K` for the command palette (`open.search`)
  - `Shift+/` or `?` to open the keyboard-shortcuts overlay (`open.keyboard`)
  - `Ctrl/⌘+F` for in-context search
- Use the `keyBindings` schema to declare both macOS and Windows/Linux variants so each OS displays the correct label.
