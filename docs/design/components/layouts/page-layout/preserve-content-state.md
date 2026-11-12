## Preserve content state

Panel content is never unmounted. Component state, scroll positions, and form input values survive collapse and expand cycles without any configuration. To reset state on close, do so explicitly in `onCollapsedChange`, or conditionally render the slot's children.
