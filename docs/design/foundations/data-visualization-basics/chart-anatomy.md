## Chart anatomy

![Line chart](https://developer.dynatrace.com/assets/images/dataviz-chart-anatomy-line-light-72c327a7195033ac5dc72b6305ea9a84.webp)

![Pie chart](https://developer.dynatrace.com/assets/images/dataviz-chart-anatomy-pie-light-32081337387d450dea82a104b131a924.webp)

1. **Value labels:** Range of values representing a variable.
2. **Chart tooltip:** Displays additional information about the hovered data points. Allows additional actions when selected.
3. **Interactive toolbar:** Allows you to zoom, inspect, pan, or download chart data.
4. **Interactive legend:** Represents series in charts with a color/chart type indicator and name in an interactive legend.
5. **Legend resize handle:** Controls the proportion between the chart and the legend.
6. **Axes:** Represents the range of data values. We usualy label them with the variable name.
7. **Crosshair and Magnifiers:** A **crosshair** is a visual aid consisting of two lines intersecting at a point on the chart, usually where the mouse cursor is located. You can use a crosshair to find data points or outliers more precisely. **Magnifiers** connects to the axis and show precise values.
8. **Axis Description:** Axis descriptions provide context to the variables plotted on each axis.

### Interactivity in charts

[Chart Interactions](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/TimeseriesChart/index.mdx/#chart-interactions) enable additional possibilities for end users to interact with the data plotted within the chart area. The interactive options currently supported within the [Timeseries charts](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/TimeseriesChart/index.mdx/) are [zoom in](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/TimeseriesChart/index.mdx/#zoom-in-and-zoom-out), [zoom out](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/TimeseriesChart/index.mdx/#zoom-in-and-zoom-out), [x-axis zoom](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/TimeseriesChart/index.mdx/#zoom-in-and-zoom-out) and [pan](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/TimeseriesChart/index.mdx/#pan). To user these interactions, add the **ChartInteractions** subcomponent to the **TimeseriesChart**.

![Chart interaction x-axis zoom](https://developer.dynatrace.com/assets/images/dataviz-chart-interaction-explore-zoom-light-c4195a54fbcebb2d61385379d24ad2bb.webp)
