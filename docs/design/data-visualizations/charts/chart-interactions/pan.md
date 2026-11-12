## Pan

Panning allows users to navigate left and right along the X-axis whilst in a zoomed-in state. Pan is enabled by default. To disable it, add the slot for your chart: `<TimeseriesChart.Pan disabled />`, `<HistogramChart.Pan disabled />`, or `<XYChart.Pan disabled />`.

Regardless of the active mode, you can also pan by clicking the arrow buttons on the respective X-axis, or by clicking and dragging the X-axis directly.

Pan can be activated permanently by pressing `P` or via the toolbar, or temporarily by holding `Alt` (`Option` on Mac) while in any other mode. Temporary mode takes precedence over the active mode.

Once in pan mode (permanent or temporary):

- Clicking and dragging on the chart pans left/right. You can also use the middle mouse button.
- The mouse wheel pans left/right on the chart.
- Pressing `ArrowLeft` pans to the left. Hold `Shift` to increase speed.
- Pressing `ArrowRight` pans to the right. Hold `Shift` to increase speed.
