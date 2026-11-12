## Usage

Add `XYChart.BarSeries` inside `XYChart`. Provide accessors to describe the bar’s position (primary accessor) and growth (growth accessor). Orientation is inferred from the accessor pattern, no orientation prop required.

Required accessors depend on the pattern:

- Vertical single bars: `x0Accessor` (position) + `y1Accessor` (height)
- Horizontal single bars: `y0Accessor` (position) + `x1Accessor` (width)
- Vertical floating bars: `x0Accessor` + `y0Accessor` + `y1Accessor`
- Horizontal floating bars: `y0Accessor` + `x0Accessor` + `x1Accessor`
- Vertical range bars: `x0Accessor` + `x1Accessor` + `y1Accessor`
- Horizontal range bars: `y0Accessor` + `y1Accessor` + `x1Accessor`
- Full rectangle (manual placement): `x0Accessor` + `x1Accessor` + `y0Accessor` + `y1Accessor` (single variant only)

Additionally:

- `seriesIdAccessor`: groups datapoints into series (enables multiple series in one BarSeries slot)
- `nameAccessor`: series label for legends and tooltips

Assign the series to axes via `xAxisId` and `yAxisId`. See [XYChart docs](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md) for axis configuration.
