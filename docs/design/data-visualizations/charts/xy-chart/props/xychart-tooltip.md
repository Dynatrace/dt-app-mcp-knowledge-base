## XYChart.Tooltip

`XYChart.Tooltip` provides a slot for defining a custom tooltip in your chart.

**`XYChartTooltipProps`**

| Prop       | Type                                                   | Default | Description                                                                                                                                                               |
| ---------- | ------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hidden`   | `boolean`                                              |         | Hides the tooltip entirely without requiring a render function.                                                                                                           |
| `children` | `(tooltipPayload: XYChartTooltipPayload) => ReactNode` |         | Render function receiving the tooltip payload. Return JSX to render a custom tooltip, \`null\` to hide the tooltip, or \`undefined\` to fall back to the default tooltip. |
