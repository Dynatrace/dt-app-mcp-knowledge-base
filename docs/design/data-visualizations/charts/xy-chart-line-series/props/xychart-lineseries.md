## XYChart.LineSeries

`XYChart.LineSeries` provides a slot for defining a `LineSeries`.

**`XYChartLineSeriesProps`**

```ts
export declare type XYChartLineSeriesProps = Omit<XYChartSeriesBaseProps, 'colorPalette'> & ShapeColorSelectionProp & {
    /**
     * Accessor function to retrieve the data for the x1.
     */
    x1Accessor?: string;
    /**
     * Accessor function to retrieve the data for the y1.
     */
    y1Accessor?: string;
    /**
     * Series ID accessor.
     */
    seriesIdAccessor: string;
    /**
     * Series name accessor.
     */
    nameAccessor: string;
    /**
     * Custom actions to be shown in the tooltip and legend.
     * For tooltip, information about the selected datapoint is displayed.
     * For legend, the first parameter returns the first datapoint of the series and the second parameter returns the series object.
     */
    actions?: (datapoint: XYChartLineSeriesActionItem, series?: XYChartLineSeries) => SeriesActionsTemplate;
    /**
     * Show the datapoints always, never or auto based on a threshold amount.
     * @defaultValue 'auto'
     */
    pointsDisplay?: PointsDisplay;
    /**
     * Line interpolation curve type
     */
    curve?: XYChartSeriesCurve;
};
```
