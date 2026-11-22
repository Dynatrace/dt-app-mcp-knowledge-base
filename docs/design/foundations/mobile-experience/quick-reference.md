## Quick reference

### General guidance

- [Accessibility](https://public-developer.central.internal.dynatrace.com/design/foundations/accessibility.md)—a11y guidance, including the 24x24px minimum touch-target rule and alternative drag-and-drop requirement.
- [Breakpoints](https://public-developer.central.internal.dynatrace.com/contents/docs/design/design-tokens/Breakpoints.mdx/)—token values for recommended breakpoints (640px, 960px, 1920px).
- [DataTable](https://public-developer.central.internal.dynatrace.com/contents/docs/design/components/tables/DataTable/index.mdx/)—column visibility and pinning, expandable sub-rows, and truncation config (fr-unit sizing, textOverflow, truncateMode, log-content limits).
- [Layout](https://public-developer.central.internal.dynatrace.com/design/foundations/layout.md)—minimum viewport width (320px), centered vs. full-width layout guidance, responsive layout tools (Grid, Flex).
- [PageLayout](https://public-developer.central.internal.dynatrace.com/contents/docs/design/components/layouts/PageLayout/index.mdx/)—Sidebar and Details drawer collapse behavior and per-panel breakpoints.
- [useBreakpoint hook](https://public-developer.central.internal.dynatrace.com/contents/docs/design/components/layouts/hooks/useBreakpoint/index.mdx/)—media-query hook for reading breakpoint state in custom components.

### Specific guidance

- [App structure patterns](https://public-developer.central.internal.dynatrace.com/contents/docs/design/patterns/app-structure.md/)—sidebar, main, detail view functions.
- [AppHeader](https://public-developer.central.internal.dynatrace.com/contents/docs/design/components/layouts/AppHeader/index.mdx/)—collapses nav items into a menu under space constraints.
- [ChipGroup](https://public-developer.central.internal.dynatrace.com/contents/docs/design/components/content/ChipGroup/index.mdx/)—use `maxVisibleChips` to limit the collapsed set and add `ChipGroup.Control` to provide the "Show more" interaction.
- [FilterBar](https://public-developer.central.internal.dynatrace.com/contents/docs/design/components/filters/FilterBar/index.mdx/)—optional filters to pin and unpin into an "Add filter" overflow dropdown.
- [ExpandableText](https://public-developer.central.internal.dynatrace.com/contents/docs/design/components/content/ExpandableText/index.mdx/)—"never hide critical info"; "Show more"/"Show less" text label convention.
- [Page (deprecated)](https://public-developer.central.internal.dynatrace.com/contents/docs/design/components/layouts/Page/index.mdx/)—same concept as PageLayout, older API; superseded by PageLayout.
- [TextEllipsis](https://public-developer.central.internal.dynatrace.com/contents/docs/design/components/typography/TextEllipsis/index.mdx/)—truncation modes (start, middle, end); its tooltip-on-overflow pattern relies on hover, which doesn't work on touch.
