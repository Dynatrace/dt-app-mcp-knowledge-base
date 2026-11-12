The `Modal` component lets you show important, additional content in an overlay.

The overlay is always centered on the page and covers the on-screen content until the user closes it.

The `Modal` must have a trigger that controls the open status of the modal. The `useOverlayWithTrigger` hook provides the corresponding props.

It's also essential to add at least one focusable element inside the `Modal` so that it's keyboard accessible. If no focusable element is available, the focus will be given to the document when opening the modal.
