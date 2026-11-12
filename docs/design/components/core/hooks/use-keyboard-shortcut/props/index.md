The `useKeyboardShortcut` hook registers a `keydown` listener for a key combination in `aria-keyshortcuts` format and runs `onTrigger` when the user presses it. On top of that, the hook accepts `mod`, which resolves to `Meta` on macOS and to `Control` on every other platform.

**`UseKeyboardShortcutOptions`**

| Prop                   | Type                                            | Default              | Description                                                                                                              |
| ---------------------- | ----------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `keys` (required)      | `KeyboardShortcutKeys`                          |                      | The combination that triggers the shortcut.                                                                              |
| `onTrigger` (required) | `(event: KeyboardEvent) => void`                |                      | Runs when the combination matches.                                                                                       |
| `eventTarget`          | `HTMLElement \| RefObject<HTMLElement \| null>` | `document.body`      | Where the listener is attached. A ref may still be \`null\` on the first render; the listener attaches once it resolves. |
| `enabled`              | `boolean`                                       | `true`               | Whether the shortcut currently listens.                                                                                  |
| `preventDefault`       | `boolean`                                       | `true`               | Whether the browser's default action for the combination is suppressed on a match.                                       |
| `capture`              | `boolean`                                       | `false`              | Whether the listener runs in the capture phase, ahead of descendants that call \`stopPropagation\`.                      |
| `shouldIgnoreTarget`   | `(target: EventTarget \| null) => boolean`      | `isValueEntryTarget` | Suppresses the shortcut when it returns \`true\` for the event's target.                                                 |
