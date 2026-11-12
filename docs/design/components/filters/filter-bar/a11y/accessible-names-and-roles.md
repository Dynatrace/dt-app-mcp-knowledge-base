## Accessible names and roles

Each `FilterBar.Item` must have an accessible name so screen readers can identify it in the "Add filter" dropdown and when it is pinned.

- **Do** provide a visible `label` for every `FilterBar.Item`.
- **Do** provide an `aria-label` or `name` for `pinned-optional` and `optional` items without visible text content — these are required for the "Add filter" dropdown.
- **Do** provide an `aria-label` or `name` for custom components used as `FilterBar.Item` if there is no visible text content.
