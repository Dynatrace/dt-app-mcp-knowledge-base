## Accessible names and roles

`SegmentSelector` provides a default trigger with built-in accessible naming based on the current segment name.

- **Do** spread all the provided trigger props onto the trigger element if using `SegmentSelector.CustomTrigger`. These props carry the accessible name, role, and state attributes required for correct screen reader behaviour.
- **Don't** omit the provided props on a custom trigger. Doing so would remove the built-in accessibility semantics.
