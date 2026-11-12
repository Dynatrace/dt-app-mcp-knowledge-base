## XYChart.Tooltip

`XYChart.Tooltip` provides a slot for defining a custom tooltip in your chart.

**`XYChartTooltipProps`**

| Prop                 | Type                                                   | Default         | Description                                                                                                                                                                                                         |
| -------------------- | ------------------------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hidden`             | `boolean`                                              |                 | Hides the tooltip entirely without requiring a render function.                                                                                                                                                     |
| `children`           | `(tooltipPayload: XYChartTooltipPayload) => ReactNode` |                 | Render function receiving the tooltip payload. Return JSX to render a custom tooltip, \`null\` to hide the tooltip, or \`undefined\` to fall back to the default tooltip.                                           |
| `_variant`           | `_XYChartTooltipVariant`                               | `'single'`      | Controls whether the tooltip displays a single datapoint or groups all bar datapoints at the same x-axis position.                                                                                                  |
| `_seriesDisplayMode` | `SeriesDisplayMode`                                    | `'single-line'` | The tooltip items display mode. If this prop is \`undefined\`, XYChart renders series names in single-line mode by default. Set this prop to \`'multi-line'\` to render array-based series names on separate lines. |
