## Zoom

The zoom functionality allows users to zoom in to the chart's plotted data by a fixed point along the X-axis. The chart supports zoom in (incremental) and zoom out (decremental) actions. Zoom is enabled by default. To disable it, add the slot for your chart: `<TimeseriesChart.Zoom disabled />`, `<HistogramChart.Zoom disabled />`, or `<XYChart.Zoom disabled />`.

Zoom can be activated permanently by pressing `Z` or via the toolbar, or temporarily by holding `Cmd` (`Ctrl` on Windows) while in any other mode. Temporary mode takes precedence over the active mode.

Once in zoom mode (permanent or temporary):

- The mouse wheel zooms in/out.
- Clicking zooms in. Hold `Shift` to zoom out.
- Clicking and dragging draws a zoom area and zooms in on mouse up.
- Pressing ↑ (Up Arrow) zooms in. Pressing ↓ (Down Arrow) zooms out.
