## Accessible names and roles

Each avatar in the group must have an accessible name matching the individual's full name.

- **Do** provide each avatar with an `aria-label` set to the individual's full name.
- **Do** use a [Tooltip](https://developer.dynatrace.com/design/components/overlays/Tooltip.md) on each avatar to surface the full name visually. Ensure that the tooltip text matches the `aria-label` exactly.
- **Don't** let the tooltip text and `aria-label` differ.
