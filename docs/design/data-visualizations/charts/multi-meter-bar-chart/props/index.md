The `MultiMeterBarChart` is a more complex version of the single meter bar, it allows for different data inputs to be considered when presenting progress toward a goal, consumption of a total, etc.

**`MultiMeterBarChartProps`**

| Prop            | Type                                                              | Default         | Description                                           |
| --------------- | ----------------------------------------------------------------- | --------------- | ----------------------------------------------------- |
| `width`         | `number \| string`                                                | `100%`          | The chart width. A valid CSS width is expected.       |
| `height`        | `number \| string`                                                | `300px`         | The chart height. A valid CSS height is expected.     |
| `min`           | `number`                                                          | `0`             | Min value for the multi meter bar chart scale.        |
| `max`           | `number \| 'auto'`                                                | `'auto'`        | Max value for the multi meter bar chart scale.        |
| `colorPalette`  | `ColorPalette \| CustomColorPalette`                              | `"categorical"` | Color palette to be used for the segments             |
| `loading`       | `boolean`                                                         | `false`         | Show the loading indicator when truthy.               |
| `size`          | `MeterBarSize`                                                    |                 | The size that applies to the value, icon, and label.  |
| `unit`          | `string \| Unit`                                                  |                 | The custom unit for the value of the multi meter bar. |
| `formatter`     | `Formatter \| FormatOptions<Unit, ConvertibleUnit>`               |                 | Custom Formatter for the chart                        |
| `prefixIcon`    | `ReactNode`                                                       |                 | Icon to show left of the label.                       |
| `seriesActions` | `(seriesData: MultiMeterBarSegmentData) => SeriesActionsTemplate` |                 | Exposed callback to display series actions            |

**`MultiMeterBarSegmentProps`**

```ts
export declare type MultiMeterBarSegmentProps = MultiMeterBarSegmentPropsWithAccessor | MultiMeterBarSegmentPropsWithNumericValue;
```

**`MultiMeterBarChartTooltipProps`**

| Prop       | Type                                                       | Default    | Description                                                                  |
| ---------- | ---------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------- |
| `hidden`   | `boolean`                                                  | `false`    | Hides the tooltip when true.                                                 |
| `variant`  | `MultiMeterBarChartTooltipVariant`                         | `"single"` | Variant to be used for the multi meter bar chart tooltip                     |
| `children` | `(payload: MultiMeterBarChartTooltipPayload) => ReactNode` |            | Custom render function. When provided, replaces the default tooltip content. |
