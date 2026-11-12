## Control bar

`PageLayout.Details.ControlBar` renders a close button and a toggle above the responsive breakpoint. The toggle lets users switch between the `'split'` and `'overlay'` layouts. Place it at the top of the details panel content so users can easily see how to close or reposition the panel. Omit the control bar if panel repositioning isn't needed for your use case.

### Maximize or restore button

A pre-built maximize button is available, which can be added to the panel control bar. The maximize button exposes configuration options, such as setting a custom maximum width other than 100%.

Use the maximize feature when:

- The information in the details panel is important and requires a bigger format.
- `Content` and `Details` must not be visible simultaneously.

Place the maximize button in the control bar as a pre-built, configurable component. Maximize and restore actions are rendered to the left of the default controls, separated by a divider.
