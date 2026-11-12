Use the `AiLoadingIndicator` component to indicate that AI-generated content is being loaded.

**`AiLoadingIndicatorProps`**

| Prop                  | Type                              | Default | Description                                                                                                                                          |
| --------------------- | --------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `'aria-disabled'`     | `AriaAttributes['aria-disabled']` |         | Whether the element and all focusable descendants are disabled. \`aria-disabled="true"\` only semantically exposes these elements as being disabled. |
| `children` (required) | `ReactNode`                       |         | The label shown in the indicator.                                                                                                                    |
| `'aria-valuetext'`    | `string`                          |         | The \`aria-valuetext\` attribute provides a human-readable text alternative for assistive technologies about the loading progress.                   |
