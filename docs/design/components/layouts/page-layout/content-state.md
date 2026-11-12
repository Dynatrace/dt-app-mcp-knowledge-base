## Content state

Panel content is never unmounted. Component state, scroll positions, and form input values persist across collapse and expand cycles automatically.

To reset state when a panel closes, do so explicitly in `onCollapsedChange`. To re-initialize state on open, conditionally render the slot's children based on the collapsed state.
