## When not to use

- For warnings about impactful changes, such as scheduled system maintenance. Instead, use a [MessageContainer](https://developer.dynatrace.com/design/components/content/MessageContainer.md).
- For directions at the beginning of a form. Try an inline message in the UI instead.
- To validate simple actions, such as when something is copied to the clipboard or downloaded. If the effect is obvious (or the browser provides feedback), no toast is needed.
