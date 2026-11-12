## XYChart.AreaSeries

`XYChart.AreaSeries` provides a slot for defining an `AreaSeries`.

**`XYChartAreaSeriesProps`**

```ts
export declare type XYChartAreaSeriesProps = Omit<XYChartSeriesBaseProps, 'colorPalette' | 'x0Accessor' | 'y0Accessor'> & ShapeColorSelectionProp & {
    x0Accessor?: string;
    y0Accessor?: string;
    x1Accessor?: string;
    y1Accessor?: string;
    seriesIdAccessor: string;
    nameAccessor: string;
    /**
     * Show the datapoints always, never or auto based on a threshold amount.
     * @defaultValue 'auto'
     */
    pointsDisplay?: PointsDisplay;
    /**
     * Area interpolation curve type
     */
    curve?: XYChartSeriesCurve;
    /**
     * Custom actions to be shown in the legend.
     * (Upcoming for tooltip)
     * For legend, the first parameter returns the first datapoint of the series and the second parameter returns the series object.
     */
    actions?: (datapoint: XYChartAreaSeriesActionItem, series?: XYChartAreaSeries) => SeriesActionsTemplate;
};
```
