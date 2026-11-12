## Coloring

The `XYChart` provides several ways to customize the appearance of your data:

1. **Predefined Color Palettes**: Use built-in color schemes
2. **Custom Color Palettes**: Define your own color schemes
3. **Color Rules**: Apply conditional coloring based on data values.

### Predefined color palettes

The `XYChart`'s `colorPalette` property supports predefined color palettes, which are useful for consistent theming across your application. See [coloring](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md) for more details.

**PredefinedColorPalette**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const categoryTimeDataset = [
  {
    Person: { start: 'Person2' },
    Year: { start: '2017-01-01', end: '2018-01-01' },
    EventsAssisted: 10,
  },
  {
    Person: { start: 'Person2' },
    Year: { start: '2018-01-01', end: '2019-01-01' },
    EventsAssisted: 30,
  },
  {
    Person: { start: 'Person2' },
    Year: { start: '2019-01-01', end: '2020-01-01' },
    EventsAssisted: 50,
  },
  {
    Person: { start: 'Person2' },
    Year: { start: '2020-01-01', end: '2021-01-01' },
    EventsAssisted: 100,
  },
  {
    Person: { start: 'Person1' },
    Year: { start: '2017-01-01', end: '2018-01-01' },
    EventsAssisted: 20,
  },
  {
    Person: { start: 'Person1' },
    Year: { start: '2018-01-01', end: '2019-01-01' },
    EventsAssisted: 50,
  },
  {
    Person: { start: 'Person1' },
    Year: { start: '2019-01-01', end: '2020-01-01' },
    EventsAssisted: 40,
  },
  {
    Person: { start: 'Person1' },
    Year: { start: '2020-01-01', end: '2021-01-01' },
    EventsAssisted: 20,
  },
];

const PredefinedColorPalette = () => {
  return (
    <XYChart
      data={categoryTimeDataset}
      // highlight-next-line
      colorPalette="pink"
    >
      <XYChart.RectSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="Person.start"
        y0Accessor="Year.start"
        y1Accessor="Year.end"
        valueAccessor="EventsAssisted"
      />
      <XYChart.XAxis id="x-first-axis" type="categorical" position="bottom" />
      <XYChart.YAxis id="y-first-axis" type="time" position="left" />
    </XYChart>
  );
};
```

### Custom color palettes

Custom color palettes can be useful when you need specific colors for your data, especially for categorical data of type string.

**CustomColorPalette**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const randomNumber = [
  { seriesName: 'Error', x0: 40, y0: 9 },
  { seriesName: 'Error', x0: 22, y0: 4 },
  { seriesName: 'Error', x0: 47, y0: 19 },
  { seriesName: 'Error', x0: 34, y0: 48 },
  { seriesName: 'Error', x0: 23, y0: 1 },
  { seriesName: 'Error', x0: 1, y0: 35 },
  { seriesName: 'Error', x0: 45, y0: 27 },
  { seriesName: 'Error', x0: 17, y0: 28 },
  { seriesName: 'Error', x0: 33, y0: 6 },
  { seriesName: 'Error', x0: 0, y0: 4 },
  { seriesName: 'Error', x0: 20, y0: 43 },
  { seriesName: 'Error', x0: 27, y0: 0 },
  { seriesName: 'Error', x0: 47, y0: 0 },
  { seriesName: 'Error', x0: 49, y0: 4 },
  { seriesName: 'Error', x0: 25, y0: 0 },
  { seriesName: 'Error', x0: 47, y0: 20 },
  { seriesName: 'Error', x0: 23, y0: 42 },
  { seriesName: 'Error', x0: 24, y0: 38 },
  { seriesName: 'Error', x0: 45, y0: 47 },
  { seriesName: 'Error', x0: 25, y0: 11 },
  { seriesName: 'Error', x0: 47, y0: 10 },
  { seriesName: 'Error', x0: 15, y0: 48 },
  { seriesName: 'Error', x0: 46, y0: 7 },
  { seriesName: 'Error', x0: 47, y0: 13 },
  { seriesName: 'Error', x0: 34, y0: 5 },
  { seriesName: 'Error', x0: 33, y0: 6 },
  { seriesName: 'Error', x0: 31, y0: 18 },
  { seriesName: 'Error', x0: 12, y0: 27 },
  { seriesName: 'Error', x0: 45, y0: 2 },
  { seriesName: 'Error', x0: 36, y0: 48 },
  { seriesName: 'Info', x1: 33, y1: 8 },
  { seriesName: 'Info', x1: 32, y1: 31 },
  { seriesName: 'Info', x1: 41, y1: 46 },
  { seriesName: 'Info', x1: 13, y1: 0 },
  { seriesName: 'Info', x1: 25, y1: 22 },
  { seriesName: 'Info', x1: 36, y1: 3 },
  { seriesName: 'Info', x1: 39, y1: 31 },
  { seriesName: 'Info', x1: 38, y1: 30 },
  { seriesName: 'Info', x1: 9, y1: 10 },
  { seriesName: 'Info', x1: 2, y1: 3 },
  { seriesName: 'Info', x1: 36, y1: 28 },
  { seriesName: 'Info', x1: 37, y1: 3 },
  { seriesName: 'Info', x1: 47, y1: 42 },
  { seriesName: 'Info', x1: 33, y1: 25 },
  { seriesName: 'Info', x1: 27, y1: 30 },
  { seriesName: 'Info', x1: 19, y1: 14 },
  { seriesName: 'Info', x1: 8, y1: 15 },
  { seriesName: 'Info', x1: 18, y1: 20 },
  { seriesName: 'Info', x1: 27, y1: 41 },
  { seriesName: 'Info', x1: 1, y1: 32 },
  { seriesName: 'Info', x1: 50, y1: 31 },
  { seriesName: 'Info', x1: 22, y1: 7 },
  { seriesName: 'Info', x1: 49, y1: 18 },
  { seriesName: 'Info', x1: 38, y1: 36 },
  { seriesName: 'Info', x1: 1, y1: 24 },
  { seriesName: 'Info', x1: 0, y1: 0 },
  { seriesName: 'Info', x1: 29, y1: 25 },
  { seriesName: 'Info', x1: 5, y1: 30 },
  { seriesName: 'Info', x1: 13, y1: 13 },
  { seriesName: 'Info', x1: 33, y1: 18 },
  { seriesName: 'Warning', x2: 37, y2: 43 },
  { seriesName: 'Warning', x2: 27, y2: 2 },
  { seriesName: 'Warning', x2: 45, y2: 43 },
  { seriesName: 'Warning', x2: 46, y2: 32 },
  { seriesName: 'Warning', x2: 45, y2: 42 },
  { seriesName: 'Warning', x2: 25, y2: 49 },
  { seriesName: 'Warning', x2: 15, y2: 15 },
  { seriesName: 'Warning', x2: 15, y2: 38 },
  { seriesName: 'Warning', x2: 30, y2: 40 },
  { seriesName: 'Warning', x2: 29, y2: 14 },
  { seriesName: 'Warning', x2: 1, y2: 0 },
  { seriesName: 'Warning', x2: 31, y2: 36 },
  { seriesName: 'Warning', x2: 27, y2: 21 },
  { seriesName: 'Warning', x2: 38, y2: 11 },
  { seriesName: 'Warning', x2: 23, y2: 37 },
  { seriesName: 'Warning', x2: 11, y2: 46 },
  { seriesName: 'Warning', x2: 2, y2: 20 },
  { seriesName: 'Warning', x2: 5, y2: 32 },
  { seriesName: 'Warning', x2: 2, y2: 5 },
  { seriesName: 'Warning', x2: 17, y2: 1 },
  { seriesName: 'Warning', x2: 20, y2: 47 },
  { seriesName: 'Warning', x2: 22, y2: 35 },
  { seriesName: 'Warning', x2: 0, y2: 4 },
  { seriesName: 'Warning', x2: 37, y2: 36 },
  { seriesName: 'Warning', x2: 44, y2: 37 },
  { seriesName: 'Warning', x2: 21, y2: 28 },
  { seriesName: 'Warning', x2: 37, y2: 38 },
  { seriesName: 'Warning', x2: 50, y2: 37 },
  { seriesName: 'Warning', x2: 28, y2: 2 },
  { seriesName: 'Warning', x2: 28, y2: 32 },
];

const CustomColorPalette = () => {
  return (
    <XYChart
      data={randomNumber}
      // highlight-start
      colorPalette={{
        Error: '#be5d46',
        Info: '#6092c5',
        Warning: '#cdde42',
      }}
      // highlight-end
    >
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x1"
        y0Accessor="y1"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x2"
        y0Accessor="y2"
        nameAccessor="seriesName"
      />
      <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

### Use color rules

For advanced coloring scenarios, you can use the `XYChart.ColorRule` slot to apply conditional coloring based on data values. Color Rule slots behave differently depending on the series type:

- **RectSeries (heatmaps)** and **BarSeries**: Apply solid colors to individual datapoints that match the rule.
- **DotSeries, LineSeries**: Apply colors at the series level when any datapoint matches.

This is particularly useful for highlighting specific data points or ranges that meet certain criteria, such as error states, thresholds, or specific categories.

**ColorRules**

```tsx
import { ColorRuleProps, XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

// Sample data
const dotData = [
  { seriesName: 'Data Points', x: 1, y: 10, category: 'A', status: 'Error' },
  { seriesName: 'Data Points', x: 2, y: 20, category: 'B', status: 'Warning' },
  { seriesName: 'Data Points', x: 3, y: 30, category: 'C', status: 'OK' },
  { seriesName: 'Data Points', x: 4, y: 40, category: 'D', status: 'Error' },
  { seriesName: 'Data Points', x: 5, y: 50, category: 'E', status: 'Warning' },
];

const standardData = [
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-01', end: '2023-01-02' },
    value: 75000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-02', end: '2023-01-03' },
    value: 20000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-03', end: '2023-01-04' },
    value: 20000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-04', end: '2023-01-05' },
    value: 45000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-05', end: '2023-01-06' },
    value: 65000,
  },
  {
    horizontal: { start: 0, end: 50 },
    vertical: { start: '2023-01-06', end: '2023-01-07' },
    value: 20000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-01', end: '2023-01-02' },
    value: 75000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-02', end: '2023-01-03' },
    value: 35000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-03', end: '2023-01-04' },
    value: 35000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-04', end: '2023-01-05' },
    value: 45000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-05', end: '2023-01-06' },
    value: 30000,
  },
  {
    horizontal: { start: 50, end: 100 },
    vertical: { start: '2023-01-06', end: '2023-01-07' },
    value: 20000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-01', end: '2023-01-02' },
    value: 55000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-02', end: '2023-01-03' },
    value: 20000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-03', end: '2023-01-04' },
    value: 20000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-04', end: '2023-01-05' },
    value: 45000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-05', end: '2023-01-06' },
    value: 45000,
  },
  {
    horizontal: { start: 100, end: 150 },
    vertical: { start: '2023-01-06', end: '2023-01-07' },
    value: 20000,
  },
  {
    horizontal: { start: 150, end: 200 },
    vertical: { start: '2023-01-01', end: '2023-01-02' },
    value: 75000,
  },
  {
    horizontal: { start: 150, end: 200 },
    vertical: { start: '2023-01-02', end: '2023-01-03' },
    value: 20000,
  },
  {
    horizontal2: { start: 150, end: 200 },
    vertical2: { start: '2023-01-03', end: '2023-01-04' },
    value: 35000,
  },
  {
    horizontal2: { start: 150, end: 200 },
    vertical2: { start: '2023-01-04', end: '2023-01-05' },
    value: 20000,
  },
  {
    horizontal2: { start: 150, end: 200 },
    vertical2: { start: '2023-01-05', end: '2023-01-06' },
    value: 45000,
  },
  {
    horizontal2: { start: 150, end: 200 },
    vertical2: { start: '2023-01-06', end: '2023-01-07' },
    value: 20000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-01', end: '2023-01-02' },
    value: 55000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-02', end: '2023-01-03' },
    value: 35000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-03', end: '2023-01-04' },
    value: 65000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-04', end: '2023-01-05' },
    value: 20000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-05', end: '2023-01-06' },
    value: 75000,
  },
  {
    horizontal2: { start: 200, end: 250 },
    vertical2: { start: '2023-01-06', end: '2023-01-07' },
    value: 45000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-01', end: '2023-01-02' },
    value: 30000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-02', end: '2023-01-03' },
    value: 20000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-03', end: '2023-01-04' },
    value: 65000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-04', end: '2023-01-05' },
    value: 20000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-05', end: '2023-01-06' },
    value: 20000,
  },
  {
    horizontal2: { start: 250, end: 300 },
    vertical2: { start: '2023-01-06', end: '2023-01-07' },
    value: 30000,
  },
];

const lineData = [
  // Series 1
  { x0: 0, y0: 10, seriesId: '1', name: 'Series 1' },
  { x0: 5, y0: 18, seriesId: '1', name: 'Series 1' },
  { x0: 10, y0: 13, seriesId: '1', name: 'Series 1' },
  { x0: 15, y0: 21, seriesId: '1', name: 'Series 1' },
  { x0: 20, y0: 15, seriesId: '1', name: 'Series 1' },
  { x0: 25, y0: 20, seriesId: '1', name: 'Series 1' },
  { x0: 30, y0: 12, seriesId: '1', name: 'Series 1' },
  { x0: 35, y0: 19, seriesId: '1', name: 'Series 1' },
  { x0: 40, y0: 17, seriesId: '1', name: 'Series 1' },
  { x0: 45, y0: 14, seriesId: '1', name: 'Series 1' },

  // Series 2
  { x0: 0, y0: 25, seriesId: '2', name: 'Series 2' },
  { x0: 5, y0: 15, seriesId: '2', name: 'Series 2' },
  { x0: 10, y0: 28, seriesId: '2', name: 'Series 2' },
  { x0: 15, y0: 22, seriesId: '2', name: 'Series 2' },
  { x0: 20, y0: 19, seriesId: '2', name: 'Series 2' },
  { x0: 25, y0: 30, seriesId: '2', name: 'Series 2' },
  { x0: 30, y0: 16, seriesId: '2', name: 'Series 2' },
  { x0: 35, y0: 27, seriesId: '2', name: 'Series 2' },
  { x0: 40, y0: 23, seriesId: '2', name: 'Series 2' },
  { x0: 45, y0: 20, seriesId: '2', name: 'Series 2' },

  // Series 3
  { x0: 0, y0: 7, seriesId: '3', name: 'Series 3' },
  { x0: 5, y0: 14, seriesId: '3', name: 'Series 3' },
  { x0: 10, y0: 9, seriesId: '3', name: 'Series 3' },
  { x0: 15, y0: 12, seriesId: '3', name: 'Series 3' },
  { x0: 20, y0: 6, seriesId: '3', name: 'Series 3' },
  { x0: 25, y0: 17, seriesId: '3', name: 'Series 3' },
  { x0: 30, y0: 8, seriesId: '3', name: 'Series 3' },
  { x0: 35, y0: 13, seriesId: '3', name: 'Series 3' },
  { x0: 40, y0: 11, seriesId: '3', name: 'Series 3' },
  { x0: 45, y0: 15, seriesId: '3', name: 'Series 3' },

  // Series 4
  { x0: 0, y0: 20, seriesId: '4', name: 'Series 4' },
  { x0: 5, y0: 11, seriesId: '4', name: 'Series 4' },
  { x0: 10, y0: 24, seriesId: '4', name: 'Series 4' },
  { x0: 15, y0: 17, seriesId: '4', name: 'Series 4' },
  { x0: 20, y0: 13, seriesId: '4', name: 'Series 4' },
  { x0: 25, y0: 22, seriesId: '4', name: 'Series 4' },
  { x0: 30, y0: 18, seriesId: '4', name: 'Series 4' },
  { x0: 35, y0: 15, seriesId: '4', name: 'Series 4' },
  { x0: 40, y0: 21, seriesId: '4', name: 'Series 4' },
  { x0: 45, y0: 16, seriesId: '4', name: 'Series 4' },

  // Series 5
  { x0: 0, y0: 30, seriesId: '5', name: 'Series 5' },
  { x0: 5, y0: 22, seriesId: '5', name: 'Series 5' },
  { x0: 10, y0: 19, seriesId: '5', name: 'Series 5' },
  { x0: 15, y0: 25, seriesId: '5', name: 'Series 5' },
  { x0: 20, y0: 27, seriesId: '5', name: 'Series 5' },
  { x0: 25, y0: 21, seriesId: '5', name: 'Series 5' },
  { x0: 30, y0: 29, seriesId: '5', name: 'Series 5' },
  { x0: 35, y0: 24, seriesId: '5', name: 'Series 5' },
  { x0: 40, y0: 26, seriesId: '5', name: 'Series 5' },
  { x0: 45, y0: 23, seriesId: '5', name: 'Series 5' },
];

const barData = [
  { x0: 'January', y0: 100000, y1: 150000 },
  { x0: 'February', y0: 150000, y1: 185000 },
  { x0: 'March', y0: 185000, y1: 155000 },
  { x0: 'April', y0: 155000, y1: 205000 },
  { x0: 'May', y0: 205000, y1: 165000 },
  { x0: 'June', y0: 165000, y1: 220000 },
  { x0: 'July', y0: 220000, y1: 265000 },
  { x0: 'August', y0: 265000, y1: 210000 },
  { x0: 'September', y0: 210000, y1: 275000 },
  { x0: 'October', y0: 275000, y1: 225000 },
  { x0: 'November', y0: 225000, y1: 295000 },
  { x0: 'December', y0: 295000, y1: 350000 },
].map((d) => ({
  ...d,
  seriesId: d.y0 <= d.y1 ? 'increase' : 'decrease',
  name: 'Revenue',
}));

const colorRules: ColorRuleProps[] = [
  {
    comparator: 'less-than',
    matchValue: 30000,
    colorPalette: 'orange',
  },
  {
    comparator: 'equals',
    matchValue: 'Error',
    colorPalette: 'red',
  },
  {
    valueAccessor: 'x',
    comparator: 'greater-than',
    matchValue: 3,
    color: '#9c27b0',
  },
  {
    valueAccessor: 'status',
    comparator: 'starts-with',
    matchValue: 'Warn',
    color: '#ff9800',
  },
];

const ColorRules = () => {
  return (
    <Flex flexDirection="column" gap={16}>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
      >
        <div>
          <h4>Dot Series with Color Rules</h4>
          <XYChart data={dotData} height={300}>
            <XYChart.DotSeries
              x0Accessor="x"
              y0Accessor="y"
              nameAccessor="seriesName"
              colorPalette="blue"
              xAxisId="xAxisDot"
              yAxisId="yAxisDot"
            />
            <XYChart.XAxis type="numerical" position="bottom" id="xAxisDot" />
            <XYChart.YAxis type="numerical" position="left" id="yAxisDot" />
            <XYChart.Legend />
            {/* highlight-start */}
            {colorRules.map((rule, idx) => (
              <XYChart.ColorRule key={rule.comparator} {...rule} />
            ))}
            {/* highlight-end */}
          </XYChart>
        </div>

        <div>
          <h4>Rect Series with Color Rules</h4>
          <XYChart data={standardData} height={300}>
            <XYChart.RectSeries
              xAxisId="x-axis"
              yAxisId="y-axis"
              x0Accessor="horizontal.start"
              x1Accessor="horizontal.end"
              y0Accessor="vertical.start"
              y1Accessor="vertical.end"
              valueAccessor="value"
            />
            <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
            <XYChart.YAxis id="y-axis" type="time" position="left" />
            {colorRules.map((rule, idx) => (
              <XYChart.ColorRule key={rule.comparator} {...rule} />
            ))}
          </XYChart>
        </div>

        <div>
          <h4>Line Series with Color Rules</h4>
          <XYChart data={[]} height="200px" colorPalette="pink-green-inverted">
            <XYChart.LineSeries
              data={lineData}
              xAxisId="x-first-axis"
              yAxisId="y-first-axis"
              x0Accessor="x0"
              y0Accessor="y0"
              seriesIdAccessor="seriesId"
              nameAccessor="name"
            />
            <XYChart.XAxis
              id="x-first-axis"
              type="numerical"
              position="bottom"
            />
            <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
            <XYChart.ColorRule
              comparator="greater-or-equal"
              valueAccessor="y0"
              matchValue={29}
              colorPalette="orange"
            />
          </XYChart>
        </div>

        <div>
          <h4>Bar Series with Color Rules</h4>
          <XYChart data={barData}>
            <XYChart.ColorRule
              valueAccessor="seriesId"
              matchValue="increase"
              comparator="equals"
              color="#179d1bff"
            />
            <XYChart.ColorRule
              valueAccessor="seriesId"
              matchValue="decrease"
              comparator="equals"
              color="#c31f14ff"
            />
            <XYChart.BarSeries
              variant="single"
              x0Accessor="x0"
              y0Accessor="y0"
              y1Accessor="y1"
              seriesIdAccessor="seriesId"
              nameAccessor="name"
              xAxisId="x-axis"
              yAxisId="y-axis"
            />
            <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
            <XYChart.YAxis id="y-axis" type="numerical" position="left" />
            <XYChart.Legend hidden />
          </XYChart>
        </div>
      </div>
    </Flex>
  );
};
```

#### Supported comparators

Color rules support various comparison operators that can be used to match data values:

- **Numerical comparisons**: `'less-than'`, `'less-or-equal'`, `'greater-than'`, `'greater-or-equal'`
- **Equality comparisons**: `'equals'`, `'not-equals'`
- **String comparisons**: `'starts-with'`, `'not-starts-with'`, `'ends-with'`, `'not-ends-with'`, `'contains'`, `'not-contains'`, `'matches-phrase'`, `'not-matches-phrase'`

You can apply rules to different data properties using the `valueAccessor` prop, which defaults to the y-value if not specified. When multiple rules match a data point, the last rule in the array takes precedence.

For more details about available comparators and options, see the [Color Rules](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md#override-series-color-with-colorrule) section.

### Custom color ranges

Custom color ranges can be useful to apply gradient-based coloring to data of type number.

**CustomColorRange**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const numericalDataset = [
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 0,
      end: 10,
    },
    events: 10,
  },

  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 10,
      end: 20,
    },
    events: 30,
  },
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 20,
      end: 30,
    },
    events: 50,
  },
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 30,
      end: 40,
    },
    events: 100,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 0,
      end: 10,
    },
    events: 20,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 10,
      end: 20,
    },
    events: 50,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 20,
      end: 30,
    },
    events: 40,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 30,
      end: 40,
    },
    events: 20,
  },
];

const CustomColorRange = () => {
  return (
    <XYChart
      data={numericalDataset}
      // highlight-start
      colorPalette={[
        { from: 0, to: 30, color: '#109e84' },
        { from: 30, to: 60, color: '#cba261' },
        { from: 60, to: 110, color: '#1861AA' },
      ]}
      // highlight-end
    >
      <XYChart.RectSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="amountRange.start"
        x1Accessor="amountRange.end"
        y0Accessor="peopleRange.start"
        y1Accessor="peopleRange.end"
        valueAccessor="events"
      />
      <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```
