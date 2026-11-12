## XYChart.DotSeries

`XYChart.DotSeries` provides a slot for defining a `DotSeries`.

**`XYChartDotSeriesProps`**

```ts
export declare type XYChartDotSeriesProps = XYChartSeriesBaseProps & ShapeColorSelectionProp & {
    /**
     * Series name.
     * @deprecated - Use nameAccessor instead. This key will be removed in a future release.
     */
    name?: string;
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
    seriesIdAccessor?: string;
    /**
     * Series name accessor.
     */
    nameAccessor?: string;
    /**
     * Custom actions to be shown in the tooltip and legend.
     * For tooltip, information about the selected datapoint is displayed.
     * For legend, the first parameter returns the first datapoint of the series and the second parameter returns the series object.
     */
    actions?: (datapoint: XYChartDotSeriesActionItem, series?: XYChartDotSeries) => SeriesActionsTemplate;
    /**
     * Determines the visual appearance of the dot, such as 'circle', 'square', 'diamond', or 'triangle'.
     * @defaultValue 'circle'
     */
    shape?: PointShapeType;
};
```
