A prebuilt menu as entrypoint for app specific help links and actions.

**`HelpMenuProps`**

| Prop                 | Type                                                                                                                                                                                                                                                                                                    | Default | Description |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------- |
| `entries` (required) | `{ whatsNew?: HelpMenuDefaultableEntry; getStarted?: HelpMenuExpandableEntry; documentation?: HelpMenuExpandableEntry; keyboardShortcuts?: HelpMenuDefaultableEntry; playground?: HelpMenuDefaultableEntry; feedback?: HelpMenuExpandableEntry \| HelpMenuDefault; about?: HelpMenuDefaultableEntry; }` |         |             |
| `onOpenChange`       | `(isOpen: boolean) => void`                                                                                                                                                                                                                                                                             |         |             |
