## Surfacing shortcuts in the UI

Shortcuts should be easy to discover and use. Consider these methods for surfacing them:

### Tooltips

- Provide contextual, low-noise hints next to icons or buttons.
- Ensure tooltips are visible on focus (for keyboard users) as well as hover.

### Menu hints

- Display shortcuts in dropdown or kebab menus, aligning them right-justified to improve readability.
- Refer to the [Keyboard Shortcuts Design Guide](https://developer.dynatrace.com/design/components/content/KeyboardShortcut/) for additional best practices.

### Global cheat-sheet modal

- Offer a complete, searchable reference (e.g., `Shift+/` or `?`).
- Keep it up-to-date automatically via [**uiCommands**](https://developer.dynatrace.com/develop/keyboard-shortcuts/display-app-keyboard-shortcuts/#2-add-the-shortcuts-in-the-app-configuration).

### Command palette (`Ctrl/⌘+K`)

- Use the palette for long-tail actions and display matching shortcuts in the results list.

### Onboarding tips

- Introduce new users to critical shortcuts sparingly.
