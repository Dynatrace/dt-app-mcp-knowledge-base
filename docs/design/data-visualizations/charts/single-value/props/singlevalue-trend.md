## SingleValue.Trend

`SingleValue.Trend` provides a subcomponent where the Trend component can be added.

**`TrendProps`**

| Prop             | Type                                                | Default  | Description                                                             |
| ---------------- | --------------------------------------------------- | -------- | ----------------------------------------------------------------------- |
| `direction`      | `TrendDirection`                                    |          | The direction of a trend.                                               |
| `showIcon`       | `boolean`                                           | `true`   | Flag to show the icon or not.                                           |
| `value`          | `number`                                            |          | The trend value                                                         |
| `label`          | `string`                                            |          | The trend label                                                         |
| `inverseTrend`   | `InverseTrendOptions`                               | `'none'` | Inverts 'upward' and 'downward' color options.                          |
| `colorsOverride` | `TrendIndicatorColors`                              |          | Overrides colors of the trend icon and value for trend directions.      |
| `formatter`      | `Formatter \| FormatOptions<Unit, ConvertibleUnit>` |          | If specified, the value will be formatted with given formatter options. |
