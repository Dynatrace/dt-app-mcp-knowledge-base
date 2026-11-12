## Truncation, collapsing, and overflow

![Examples of truncation, collapsing, and overflow: a row truncated with an ellipsis, a group collapsed into a "+7 more" chip, and a progress bar overflowing its container](https://developer.dynatrace.com/assets/images/mobile-truncation-collapsing-overflow-light-e9808758c41f2d0205d16a2e16d4a6b8.webp)

- **Never delete**—anything hidden by a mobile pattern must be reachable (expandable content, overflow menu, secondary view).
- **Prioritize**—decide what to collapse first based on importance, not DOM order.
- **Rethink hover**—don't use hover-only disclosures on mobile. Instead, give important content a tap target.

### Inline text elements

The following recommendations apply to labels, metric values, table cell text, inline links, and captions.

**Recommendation for truncation:** Avoid character-count rules. Instead, use container width with token-based `max-width`, so truncation is driven by the actual, rendered space.

| Condition                                 | Recommendation                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| Data values (numbers, single-line labels) | Single-line truncation with an ellipsis at the container edge. Full value reachable by tap. |
| Descriptive text, captions                | Show up to two lines before truncating.                                                     |

### Inline block elements

The following recommendations apply to tags, chips, badges, and filter pills.

| Condition                                                                                       | Recommendation                                                               |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Container can grow vertically (for example, a card body, a filter row with its own row height). | Wrap chips to additional lines.                                              |
| Vertical space is fixed (single-row context—table cell, card header, compact list row).         | Show what fits and collapse the rest into a "Show N more" `ChipGroup`.       |
| Content is genuinely non-essential (related tags, inactive filters).                            | Horizontal scroll is acceptable only with a visible edge-fade or scroll cue. |

![Do: chips wrap onto additional lines as the container narrows, keeping full labels readable, compared to Don't: chips are squeezed into a single row and truncated illegibly](https://developer.dynatrace.com/assets/images/mobile-minwidth-wrapping-light-39f61cc7722bf39c56654aa94e6a8b59.webp)

1. **Wrap, don't cram**—use wrapping to keep inline elements readable as the container narrows.
2. **Set a min-width**—give interactive elements a minimum width so labels expose the action.
3. **Don't stretch to fit**—avoid stretching elements that vary in quantity or size, or are mostly text.
4. **Keep actions visible**—don't let truncation obstruct any key actions or labels.

### Button lists, groups, and toolbars

If the specific component guidelines don't address your use case, use these tips:

| Condition                              | Recommendation                                                                                     |
| -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Full width                             | No collapsing. Make all buttons visible inline.                                                    |
| Narrow (tablet, constrained container) | Secondary and tertiary actions may collapse into an overflow menu; primary action(s) stay visible. |
| Mobile                                 | Truncate buttons, or collapse into an overflow menu if truncation makes the content illegible.     |

### Card lists

Choose scroll direction based on what the user needs to do with the cards, not on how many cards there are. However, don't mix directions within a page without a clear visual break.

| Condition                                                                                                    | Recommendation                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| User needs to compare or scan values across cards (KPI cards, chart cards).                                  | Stack in a single, full-width column. Horizontal scroll works against comparison as some cards are off-screen. |
| Cards are a browsable, homogeneous, non-critical set (related dashboards, recommendations, recently viewed). | Horizontal scroll is acceptable, with a peeking edge and snap-to-card behavior.                                |
