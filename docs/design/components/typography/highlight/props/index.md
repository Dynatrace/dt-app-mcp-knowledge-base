Use the `Highlight` component to highlight one or more substrings within a text.

**`HighlightProps`**

| Prop              | Type                 | Default | Description                                                                                                                                                                        |
| ----------------- | -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `term` (required) | `string \| string[]` |         | Either a substring or an array of multiple different substrings that should be highlighted in the projected content. Every occurrence of the string(s) is highlighted accordingly. |
| `caseSensitive`   | `boolean`            | `false` | Property that determines whether the highlighting search is case-sensitive. If set to \`true\`, the component searches for case sensitive occurrences.                             |
