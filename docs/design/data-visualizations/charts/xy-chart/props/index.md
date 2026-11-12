The `XYChart` encompasses various types of charts that utilize both x-axis and y-axis for data representation, designed to visually display and analyze data that involve two numerical variables.

**`XYChartProps`**

| Prop                     | Type                                        | Default    | Description                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data` (required)        | `XYChartData[]`                             |            | Data object for the xy chart.                                                                                                                                                                             |
| `height`                 | `number \| string`                          | `300px`    | Chart height. When a number is specified, it's treated as pixels, otherwise a valid height string is expected.                                                                                            |
| `width`                  | `number \| string`                          | `100%`     | Chart width. When a number is specified, it's treated as pixels, otherwise a valid width string is expected.                                                                                              |
| `colorPalette`           | `XYChartColorPalette`                       | `'blue'`   | Color palette for the xy chart.                                                                                                                                                                           |
| `loading`                | `boolean`                                   | `false`    | Show the loading indicator when truthy.                                                                                                                                                                   |
| `truncationMode`         | `TruncationMode`                            | `'middle'` | Truncation mode to be used as start, middle or end, and applied to all the parts that truncate text.                                                                                                      |
| `__downloadDataCallback` | `() => void`                                |            | Callback invoked when a download is triggered. Receives the CSV string so the caller can drive the actual download (e.g. for migration purposes). When provided, the default browser download is skipped. |
| `__onEvent`              | `(payload: _XYChartOnEventPayload) => void` |            | Fired when a chart interaction event occurs.                                                                                                                                                              |

### XYChart.XAxis

To configure the x-axis, add `XYChart.XAxis` to the xy chart.

**`XYChartXAxisProps`**

```ts
export declare type XYChartXAxisProps = XYChartAxisProps & {
    /**
     * Whether the tick labels are displayed in a 'vertical' or 'horizontal' layout.
     * @defaultValue 'horizontal'
     */
    tickLabelLayout?: TickLabelLayout;
    /** The position for the xy chart x-axis */
    position: XYChartXAxisPosition;
    /** If true, the zoom interaction will be disabled
     * @defaultValue false
     */
    disableZoom?: boolean;
    /** If true, the pan interaction will be disabled
     * @defaultValue false
     */
    disablePan?: boolean;
    /** Sets the new zoom and pan domain boundaries, overwriting the ones that come from the data */
    initialZoom?: [Date, Date] | [number, number];
    /** Sets the domain of the axis to start at the specified values */
    currentZoom?: [Date, Date] | [number, number];
    /** If true, the chart will be able to zoom and pan outside the set boundaries
     * @defaultValue false
     */
    infiniteZoom?: boolean;
    /** Handler triggered when there is a change on the time domain caused by a zoom action */
    onZoomChange?: ZoomChangeHandler;
};
```

### XYChart.YAxis

To configure the y-axis, add `XYChart.YAxis` to the xy chart.

**`XYChartYAxisProps`**

```ts
export declare type XYChartYAxisProps = XYChartAxisProps & {
    position: XYChartYAxisPosition;
};
```

### XYChart.Legend

To configure the legend, add `XYChart.Legend` to the xy chart.

**`XYChartChartLegendProps`**

```ts
export declare type XYChartChartLegendProps = LegendProps;
```

### XYChart.Toolbar

To customise the toolbar, add `XYChart.Toolbar` to the xy chart.

**`XYChartToolbarProps`**

```ts
export declare type XYChartToolbarProps = Omit<ChartToolbarConfig, 'downloadData'> & {
    /** Decides if the toolbar is visible or hidden
     * @defaultValue false
     */
    hidden?: boolean;
};
```

### XYChart.EmptyState

`XYChart.EmptyState` provides a slot where the Empty state wrapper can be set.

**`EmptyStateProp`**

| Prop                  | Type        | Default | Description |
| --------------------- | ----------- | ------- | ----------- |
| `children` (required) | `ReactNode` |         |             |

### XYChart.ErrorState

`XYChart.ErrorState` provides a slot where the Error state wrapper can be set.

**`ErrorStateProps`**

| Prop                  | Type                                                   | Default | Description |
| --------------------- | ------------------------------------------------------ | ------- | ----------- |
| `children` (required) | `ReactNode \| ((errorMessage: string) => JSX.Element)` |         |             |

### XYChart.RectSeries

`XYChart.RectSeries` provides a slot for defining a `RectSeries`.

**`XYChartRectSeriesProps`**

| Prop                       | Type                                                                                            | Default | Description                                                                                                                                                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x1Accessor`               | `string`                                                                                        |         | Accessor function to retrieve the data for the x1.                                                                                                                                                                                                      |
| `y1Accessor`               | `string`                                                                                        |         | Accessor function to retrieve the data for the y1.                                                                                                                                                                                                      |
| `valueAccessor` (required) | `string`                                                                                        |         | Accessor function to retrieve the data for the value.                                                                                                                                                                                                   |
| `valueAccessorLabel`       | `string`                                                                                        |         | A custom label to overwrite the valueAccessor when naming the value                                                                                                                                                                                     |
| `valueMin`                 | `number`                                                                                        |         | If specified, all values coming from the valueAccessor that are under this number will display a default color. Doesn't apply for category values.                                                                                                      |
| `valueMax`                 | `number`                                                                                        |         | If specified, all values coming from the valueAccessor that are above this number will display a default color. Doesn't apply for category values.                                                                                                      |
| `valueFormatter`           | `Formatter \| FormatOptions<Unit, ConvertibleUnit>`                                             |         | If specified, the value coming from the valueAccessor will be formatted with given formatter options. Doesn't apply for string values.                                                                                                                  |
| `valueUnit`                | `ChartUnit`                                                                                     |         | A custom unit to be displayed in the Legend for number values                                                                                                                                                                                           |
| `actions`                  | `(datapoint: XYChartRectSeriesActionItem, series?: XYChartRectSeries) => SeriesActionsTemplate` |         | Custom actions to be shown in the tooltip and legend. For tooltip, information about the selected datapoint is displayed. For legend, the first parameter returns the first datapoint of the series and the second parameter returns the series object. |

### XYChart.DotSeries

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

### XYChart.LineSeries

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
