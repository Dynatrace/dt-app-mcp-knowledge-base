## Data types

With Strato visualizations, you can visualize a variety of data types, such as:

- Time series data
  - Timestamp data
  - Timeframe data
- Categorical data
- Key Performance Indicators
- Tabular data

### Time series data

Time series data consists of sequences of numeric values gathered over time measured at consistent time intervals (for example, every minute, hour, or day).
Use **TimeseriesCharts** to visualize your time series data as [lines](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/TimeseriesChart/index.mdx/#variants), [bars](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/TimeseriesChart/index.mdx/#variants), or [areas](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/TimeseriesChart/index.mdx/#variants). However, you should select the right chart type based on the use case and the data provided.

We use time series data for changes in variables over time, such as:

- Weather data
- Stock prices
- Industry forecasts
- Performance over time

Time series data can consist of either a timestamp or a timeframe data (or both).

#### Timestamp data

Timestamp data is the simplest form of time series data. It correlates values with specific points in time. Timestamp data only consists of a data point with a **start time** and **value**. For example:

```json
{
  start:new Date ("2022-10-01 06:00:00"),
  value:1500,
}
```

#### Timeframe data

Timeframe data includes two timestamps per data point: a **start** and an **end**. That's why the timestamp data always represents a duration. For example:

```json
{
  start:new Date ("2022-10-01 06:00:00"),
  end: new Date ("2022-10-01 08:00:00"),
  value:1500,
}
```

#### Strato charts with time series data

##### Time series line chart

![Time series line chart](https://developer.dynatrace.com/assets/images/dataviz-chart-timeseries-line-light-18ef2caa13000cffdce33d2aae1425bf.webp)

##### Time series area chart

![Time series area chart](https://developer.dynatrace.com/assets/images/dataviz-chart-timeseries-area-light-0149209f36c9b524fc08c3f1e41aa095.webp)

##### Time series bar chart

![Time series bar chart](./assets/dataviz-chart-timeseries-bar-light.webp)

##### Time series band chart

![Time series band chart](https://developer.dynatrace.com/assets/images/dataviz-chart-timeseries-band-light-2c58635ff5e816f8c4b1ff2e409ab5b0.webp)

### Categorical data

Categorical data represents qualitative or non-numeric variables. It aggregates information into groups with similar characteristics. This also includes time (for example, months, quarters, etc.) if set as a category.

We support nominal data in our charts with no inherent order or ranking. We can render categorical data in a categorical bar chart or a pie and donut chart.

We use the **CategoricalBarChart** to visualize the categorical data as bars and the **PieChart** to render data as a pie or a donut chart.

We use categorical data to compare aggregated data, such as:

- Browser usage
- Action count
- Active sessions
- Top 10 Hosts' CPU usage

#### Strato charts with categorical data

##### Categorical pie/donut chart

![Categorical pie/donut chart](https://developer.dynatrace.com/assets/images/dataviz-chart-donut-pie-light-91337a23a52f64b6c7afba65ff9a3a78.webp)

##### Categorical bar chart

![Categorical bar chart](./assets/dataviz-chart-categorical-bar-light.webp)

##### Categorical bar chart variant: grouped bar chart

![Categorical bar chart variant grouped](./assets/dataviz-chart-categorical-groupedBar-light.webp)

##### Categorical bar chart variant: stacked bar chart

![Categorical bar chart variant stacked](./assets/dataviz-chart-categorical-stackedBar-light.webp)

##### Histogram

![Histogram](./assets/dataviz-chart-histogram-light.webp)

##### Honeycomb

![Honeycomb](https://developer.dynatrace.com/assets/images/dataviz-chart-categorical-honeycomb-light-2db2eedecdb8b352f0bd9c3bc33a8e50.webp)

##### Treemap

![Treemap](./assets/dataviz-chart-treemap-light.webp)

##### Heatmap

![Heatmap](https://developer.dynatrace.com/assets/images/dataviz-chart-heatmap-light-436f01743695c03d03579e84c3530065.webp)

### KPI data

We use key performance indicators (KPIs) to track performance variables over time. These can be related to the performance of your website or application or the effectiveness of a company strategy. We use KPIs to monitor performance data, such as:

- Monthly recurring revenue
- User action duration
- Load actions

#### Single value chart

![Single value chart](https://developer.dynatrace.com/assets/images/dataviz-chart-singleValue-light-b7583deed39798a0ca0a8a67662f47b0.webp)

#### Meter bar and muli meter bar

![Meter bar](./assets/dataviz-chart-categorical-meterBar-light.webp)

### Geospatial data

We use geospatial data to represent data on a map. The map consists of a base layer (the map itself), and one or more layers on top to visualize data. The layers include:

- Dot and bubble (also supports icons, emojis and shapes)
- Choropleth
- Connection

#### Dot and bubble layer

![Dot and bubble layer](https://developer.dynatrace.com/assets/images/dataviz-chart-worldmap-bubble-light-5d5d8e6a5391b1b8c971606697e0a10d.webp)

#### Choropleth layer

![Choropleth layer](https://developer.dynatrace.com/assets/images/dataviz-chart-worldmap-choropleth-light-fbd2524b06ea326821d30be0258a3745.webp)

#### Connection layer

![Connection layer](https://developer.dynatrace.com/assets/images/dataviz-chart-worldmap-connection-light-523815eceaa098ea1266054b1317847e.webp)

### Annotations

#### Annotations standalone chart

![Annotations chart](https://developer.dynatrace.com/assets/images/dataviz-chart-annotations-light-7002275872b251d2b64a20ef68828530.webp)
