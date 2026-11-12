Chart interactions enable additional possibilities for end users to interact with the data plotted within the chart area. The interactive options currently supported within the `TimeseriesChart`, the `HistogramChart` and the `XYChart` are zoom, pan, and select.

Zoom, pan, and select are enabled by default. Add the corresponding slot only to disable an interaction or, for `Select`, to add custom actions — e.g. `<TimeseriesChart.Zoom disabled />`, `<XYChart.Pan disabled />`, `<HistogramChart.Select actions={...} />`.

For the `XYChart`, every X-axis can opt-in or opt-out for enabling these interactions by specifying two props: `disableZoom` and `disablePan` (for more information, see [Zoom and Pan](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md#zoom-and-pan)).

Chart interactions can be triggered using keyboard shortcuts or by using the chart toolbar. The toolbar is enabled by default. To customize the toolbar (e.g., hide it or change its placement), add the toolbar slot to the chart: `<TimeseriesChart.Toolbar />`, `<HistogramChart.Toolbar />`, or `<XYChart.Toolbar />`.
