## Keyboard accessibility and focus

### Keyboard

- Reachable by `Tab` by default, and removed from the tab order only when `disabled` is set. Only `aria-disabled` keeps it focusable.
- Activated by `Enter` or `Space`, matching native button behavior. `InlineButton` renders a `<span>` by default, so it replicates this activation itself. Set `as="button"` to use the browser's own keyboard handling instead.
- **Don't** wrap the built-in key handling with your own `onKeyDown`/`onKeyUp` logic that calls `preventDefault()`, as doing so can break the disabled, loading, or popup trigger behavior described below.

### Focus

`InlineButton` shows its focus ring only when focus arrives from the keyboard, not from a pointer click, so the ring never competes with the surrounding running text when a user clicks or taps it.

- **Do** trust the built-in focus ring. It's sized to sit inline with the surrounding text at any font size, so you don't need to adjust it when the text wraps or resizes.
- **Don't** wrap `InlineButton` in a container that clips overflow, as this can cut off the focus ring.
