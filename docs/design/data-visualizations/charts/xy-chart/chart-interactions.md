## Chart interactions

The `XYChart` provides various interactions (e.g. zoom-x, zoom in, zoom out, and pan) that are enabled all by default. See [chart interactions](https://developer.dynatrace.com/design/data-visualizations/charts/ChartInteractions.md) for more details.

### Zoom and pan

Every X-axis can opt-in or out of having the zoom and pan enabled. This also applies regardless of the position (top, bottom). To disable these interactions, `disableZoom` and `disablePan` can be specified as props for the `XAxis` subcomponent.

As soon as there's one X-axis with zoom, the controls and interactions are enabled. When performing any zoom interaction, it affects to *all* the X-axis with also zoom enabled.

Categorical axis are excluded and will never be zoomed or panned.

### onZoomChange

You can subscribe to changes on interactions made on X-axis in the `XYChart` by specifying a callback `onZoomChange` for the `XAxis` subcomponent. See [chart interactions](https://developer.dynatrace.com/design/data-visualizations/charts/ChartInteractions.md) to know all possibilities.

### Infinite zoom

The infinite zoom provides a way to zoom and pan without limits. This way, the boundaries set by the current domain will be bypassed.

If the customer enables the feature and exceeds the data domain, the chart won't show any data unless the consumer provides new ones for the new domain.

This feature can be enabled by defining `infiniteZoom` prop for the desired `XAxis` subcomponent.

### Initial and current zoom

A chart's domain is determined by its data, and each axis can define its scale boundaries by a `min` and `max` property as explained [here](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md#axis-min-and-max). However, there's a way to set the `initialZoom` (min, max) of the chart by setting this property on the desired `XAxis` subcomponent. This will cause the chart to display plot information at this initial specified domain, no matter the dataset used. There's another property called `currentZoom` (min, max) that can also be combined with the `initialZoom` to perform other more advanced actions, like synchronized zoom between Charts.

The priority in which these properties are being considered for plotting the information on the chart is the following:

- `currentZoom` (Highest priority)
- `initialZoom`
- Custom min/max on axis
- Domain derived from data (Lowest priority)
