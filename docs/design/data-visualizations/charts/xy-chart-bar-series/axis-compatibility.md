## Axis compatibility

The display behavior of `BarSeries` variants is tightly coupled with the axis types they are assigned to. To ensure the chart displays as expected, please note the following requirements:

- Grouping requires a categorical primary axis (e.g., categorical X-axis for vertical bars).
- Stacking works with numerical, time, and log axes. A categorical growth axis cannot stack.
- Unsupported combinations automatically fall back to supported behavior, typically `variant="single"`, and log a warning.
