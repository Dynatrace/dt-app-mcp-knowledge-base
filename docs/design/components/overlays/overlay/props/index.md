The `Overlay` component allows you to show additional content when the user clicks on a particular element in the UI. The `Overlay` is placed at the border of its trigger element. To define a UI element as a trigger, use the `useOverlayWithTrigger` hook. The Overlay only exists in a controlled manner, so the `isOpen` prop must be updated by the developer.

**`OverlayComponentProps`**

| Prop                    | Type                                     | Default | Description                                                                                                 |
| ----------------------- | ---------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `isOpen` (required)     | `OverlayProps['overlayState']['isOpen']` |         | Whether the overlay is open.                                                                                |
| `overlayProps`          | `OverlayProps['overlayProps']`           |         | Properties for connecting the overlay to the overlay trigger. Includes styles and accessibility attributes. |
| `overlayContainerProps` | `OverlayProps['overlayContainerProps']`  |         | Properties to pass to the overlay container.                                                                |
