## XYChart.BarSeries

`XYChart.BarSeries` provides a slot for defining a `BarSeries`.

**`XYChartBarSeriesProps`**

```ts
export declare type XYChartBarSeriesProps = (BarSeriesProps<typeof BAR_VARIANT_SINGLE> | BarSeriesProps<typeof BAR_VARIANT_GROUP> | BarSeriesProps<typeof BAR_VARIANT_STACK>) & {
    /**
     * Custom actions to be shown in the tooltip and legend.
     * For tooltip, information about the selected datapoint is displayed.
     * For legend, the first parameter returns the first datapoint of the series and the second parameter returns the series object.
     */
    actions?: (datapoint: XYChartBarSeriesActionItem, series?: XYChartBarSeries) => SeriesActionsTemplate;
};
```
