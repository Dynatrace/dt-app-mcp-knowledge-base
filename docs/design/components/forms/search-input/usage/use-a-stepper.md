## Use a stepper

The stepper is for scenarios where matches are highlighted in place rather than filtered out. Use it when:

- Matches are highlighted within visible content rather than filtering non-matches away.
- Results are tree-like or hierarchical, where parent and child elements must remain visible to provide context.

Do not use the stepper when the search filters content down to only matching results.

When you use the stepper, the `SearchInput` must be a permanently visible control that stays in a fixed position. Do not let it scroll away or reposition as the user steps through matches.
