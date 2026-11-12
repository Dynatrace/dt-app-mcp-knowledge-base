## TimeseriesChart.Tooltip

To configure the tooltip, add `TimeseriesChart.Tooltip` to the time series chart.

**`TimeseriesChartTooltipProps`**

| Prop                | Type                | Default    | Description                                                                                                                                               |
| ------------------- | ------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant`           | `TooltipVariant`    | `'single'` | Whether the tooltip should contain datapoints from all series for the selected timestamp, or just the closest one.                                        |
| `seriesDisplayMode` | `SeriesDisplayMode` |            | The tooltip items display mode. When it's undefined and variant is 'shared', then set to 'single-line', if variant is 'single', then set to 'multi-line'. |
