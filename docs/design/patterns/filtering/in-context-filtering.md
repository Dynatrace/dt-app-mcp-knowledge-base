## In-context filtering

Give users the ability to filter directly from the data context (table, chart, list) without needing to switch views, copy-paste, or type values elsewhere. Here are a couple examples:

### Within data tables

Let users trigger different filter actions simply by selecting a cell. The selected filter action should appear with valid syntax in a `FilterField` above the table. To implement, see `DataTable` [Configure cell actions](https://developer.dynatrace.com/design/components/tables/DataTable.md#configure-cell-actions).

![In-context-filtering-within-tables](https://developer.dynatrace.com/assets/images/filters-tables-filter-light-a8771903bb6f914647c541d3b02468c7.webp)

### Within charts

As users zoom in or out of areas of charts with timeframe or numeric data, show the dynamically updated timeframe data in the tooltip and the `TimeframeSelector` above the chart. To implement, see `TimeseriesChart` [ChartInteractions](https://developer.dynatrace.com/design/data-visualizations/charts/TimeseriesChart.md#chart-interactions).

![In-context-filtering-within-charts](https://developer.dynatrace.com/assets/images/filters-chart-zoom-and-selection-light-998cde7b67a130eedd3e27eddbcc8491.webp)
