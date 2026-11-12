## Usage

Add `XYChart.AreaSeries` inside `XYChart`. Provide accessors to describe the area's position (primary accessor) and upper boundary (growth accessor). Orientation is inferred from the accessor pattern.

Required accessors depend on the pattern:

- Vertical area: `x0Accessor` (position) + `y1Accessor` (height)
- Horizontal area: `y0Accessor` (position) + `x1Accessor` (width)
- Vertical band: `x0Accessor` + `y0Accessor` + `y1Accessor`
- Horizontal band: `y0Accessor` + `x0Accessor` + `x1Accessor`
- Vertical area with x-range (timeframe): `x0Accessor` + `x1Accessor` + `y1Accessor`
- Horizontal area with y-range (timeframe): `y0Accessor` + `y1Accessor` + `x1Accessor`

Additionally:

- `seriesIdAccessor`: groups datapoints into series (enables multiple series in one AreaSeries slot)
- `nameAccessor`: series label for legends and tooltips

The `XYChart.AreaSeries` subcomponent also includes the optional properties: `data`, `color`, `actions`, `pointsDisplay` and `curve`.

Assign the series to axes via `xAxisId` and `yAxisId`. See [XYChart docs](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md) for axis configuration.
