The `Markdown` component is a read-only way to display content formatted in markdown-style.

**`MarkdownProps`**

| Prop                      | Type                                     | Default     | Description                                                                                                                                                                                                    |
| ------------------------- | ---------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` (required)     | `string`                                 |             | The markdown content to render.                                                                                                                                                                                |
| `customComponentMappings` | `Components`                             | `undefined` | A map of HTML tags (e.g., \`'a'\`, \`'h1'\`) to custom render functions, allowing you to override the default rendering of specific elements.                                                                  |
| `onSelectionChange`       | `(selection: MarkdownSelection) => void` |             | Callback fired whenever the user's text selection within the rendered markdown changes. Receives a \`MarkdownSelection\` describing the selected range expressed as positions in the original markdown source. |
