## SingleValueGrid

**`SingleValueGridProps`**

| Prop                       | Type                                                       | Default   | Description                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `loading`                  | `boolean`                                                  | `false`   | Show the loading indicator when truly.                                                                                                               |
| `data` (required)          | `(number \| string \| Record<string, unknown>)[]`          |           | The data source for the SingleValueGrid component.                                                                                                   |
| `color`                    | `string`                                                   |           | The default color for the SingleValues. This color will be overwritten by individual colors specified in the SingleValueGridData or ColorRules slot. |
| `colorAccessor`            | `string`                                                   |           | Accessor function to override colors for individual SingleValue components.                                                                          |
| `applyThresholdBackground` | `boolean`                                                  |           | This option will define if the color is applied to the value or to the background.                                                                   |
| `labelAccessor`            | `string`                                                   |           | Accessor function for individual labels of each SingleValue component.                                                                               |
| `prefixIconAccessor`       | `string`                                                   |           | Accessor function for individual prefix icons of each SingleValue component.                                                                         |
| `alignment`                | `SingleValueAlignment`                                     | `'start'` | Horizontal alignment of icons, values, units, labels, and trends within each SingleValue component.                                                  |
| `seriesActions`            | `(data: Record<string, unknown>) => SeriesActionsTemplate` |           | Actions to be shown in individual SingleValue components                                                                                             |

**`SingleValueGridValueProps`**

| Prop                | Type                                                | Default | Description                                                        |
| ------------------- | --------------------------------------------------- | ------- | ------------------------------------------------------------------ |
| `dataAccessor`      | `string`                                            |         | Accessor function to retrieve the data for the value.              |
| `formatter`         | `Formatter \| FormatOptions<Unit, ConvertibleUnit>` |         | Formatter options for formatting the value.                        |
| `formatterAccessor` | `string`                                            |         | Accessor function to retrieve the formatter options for the value. |
| `unit`              | `SingleValueUnit`                                   |         | Unit for the value.                                                |
| `unitAccessor`      | `string`                                            |         | Accessor function to retrieve the unit for the value.              |

**`SingleValueGridSparklineProps`**

| Prop            | Type     | Default | Description                                                         |
| --------------- | -------- | ------- | ------------------------------------------------------------------- |
| `dataAccessor`  | `string` |         | Accessor function or string to retrieve the data for the sparkline. |
| `colorAccessor` | `string` |         | Accessor function to retrieve the color of the sparkline.           |

**`SingleValueGridTrendProps`**

| Prop                   | Type                                                | Default  | Description                                                                      |
| ---------------------- | --------------------------------------------------- | -------- | -------------------------------------------------------------------------------- |
| `directionAccessor`    | `string`                                            |          | Accessor to retrieve the trend direction.                                        |
| `valueAccessor`        | `string`                                            |          | Accessor to retrieve the trend value.                                            |
| `labelAccessor`        | `string`                                            |          | Accessor to retrieve the trend label.                                            |
| `showIcon`             | `boolean`                                           | `true`   | Determines whether to show the trend icon.                                       |
| `colorsOverride`       | `TrendIndicatorColors`                              |          | Overrides the colors of the trend icon and value for different trend directions. |
| `formatter`            | `Formatter \| FormatOptions<Unit, ConvertibleUnit>` |          | Formatter options or function to format the trend value.                         |
| `formatterAccessor`    | `string`                                            |          | Accessor to retrieve the formatter options for the trend value.                  |
| `inverseTrend`         | `InverseTrendOptions`                               | `'none'` | Inverts 'upward' and 'downward' color options.                                   |
| `inverseTrendAccessor` | `string`                                            |          | Accessor to retrieve the inverse trend options.                                  |
