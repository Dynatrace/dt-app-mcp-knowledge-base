The `HoneycombChart` displays data in a grid of tiles (shaped as hexagons, squares, or circles), one tile per datapoint.

Provide `data` in the unified `ChartData` format — a flat array of objects. The tile value is resolved through the `valueAccessor` prop, which defaults to `"value"` and supports dot-notation for nested fields (e.g. `"metrics.responseTime"`). Values can be numeric (numerical hive) or string (categorical hive). Coloring is controlled with the `colorPalette` prop.

**See also**

- HoneycombChartAccessorDataProps

A honeycomb chart organizes and presents data in a visually structured way, making it easier for viewers to analyze and interpret information.

**`HoneycombChartProps`**

```ts
export declare type HoneycombChartProps = HoneycombCategoricalProps | HoneycombChartNumericalProps | HoneycombChartAccessorDataProps;
```
