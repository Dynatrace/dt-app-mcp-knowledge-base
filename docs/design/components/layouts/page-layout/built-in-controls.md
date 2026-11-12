## Built-in controls

### Sidebar

Collapse and expand controls are always present in `PageLayout.Sidebar` and require no configuration. The collapse button appears on hover when the sidebar is expanded. When collapsed, an expand button takes its place.

### Overlay

Control the active mode with `layout` and `onLayoutChange`, or set an initial value with `defaultLayout`. In overlay mode, the details panel floats above the content area without displacing it. This maximizes the width of the content area but risks obstructing focused elements below the overlay. See [Usage](https://developer.dynatrace.com/design/components/layouts/PageLayout/usage.md) for further guidance.

### Details control bar

`PageLayout.Details.ControlBar` is optional. Place it at the top of the details panel to give users a close button and, above the breakpoint, a layout-mode toggle. See [Control bar](https://developer.dynatrace.com/design/components/layouts/PageLayout/usage.md#control-bar) in [Usage](https://developer.dynatrace.com/design/components/layouts/PageLayout/usage.md) for placement and customization guidance.

Compose it in a `Flex` to add a title, subtitle, and other elements for your details header.

- Pass custom actions as children to extend the bar with panel-specific buttons. They appear before the default controls, separated by a divider.
- The layout-toggle button is hidden in drawer mode.
