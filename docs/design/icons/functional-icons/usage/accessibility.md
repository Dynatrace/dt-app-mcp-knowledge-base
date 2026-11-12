## Accessibility

Be sure to give users enough informaton about the context and functionality.
This is especially true for icons without labels.

Set an `aria-label` for every icon that doesn't have a label and ensure that
`aria-hidden` is set to `false`.

If the icon shouldn't be part of the accessibility tree, use
`aria-hidden="true"`.
