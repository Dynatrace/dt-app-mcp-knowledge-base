## HistogramChart.Select

`HistogramChart.Select` provides a slot that enables functionality for selecting a specific area in the chart.

**`SelectProps`**

| Prop      | Type                                                                                                        | Default | Description            |
| --------- | ----------------------------------------------------------------------------------------------------------- | ------- | ---------------------- |
| `actions` | `(selectedSeries: HistogramSeries[], selectionDomain: [number, number]) => ReactNode \| Promise<ReactNode>` |         | Custom actions handler |
