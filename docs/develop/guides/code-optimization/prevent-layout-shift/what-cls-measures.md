## What CLS measures

Cumulative Layout Shift (CLS) quantifies how much visible content moves around unexpectedly during a page's lifetime; our target is **\< 0.1**. Every time a visible element shifts position without being triggered by a user interaction, the browser records a layout shift score based on the element's size and the distance it moved. CLS is the sum of the largest burst of these scores.

The unintuitive part: CLS is not limited to initial page load. Shifts that happen seconds or minutes into a session—when an async query resolves, when a lazy chunk lands, when a toast appears and pushes content down—all count. An app can have a perfect first paint and a terrible CLS because of what happens after the user starts interacting.

### What doesn't count

Shifts that happen within 500 ms of a discrete user interaction (such as selection, navigation, or key presses) are excluded. The 500 ms exclusion window means a table re-sorting when selected, a panel expanding on toggle, or a drawer opening are not CLS violations—the user caused them. What does count is content moving because something loaded asynchronously without the user asking for it.
