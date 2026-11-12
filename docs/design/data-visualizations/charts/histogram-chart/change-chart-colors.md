## Change chart colors

The `HistogramChart` provides several ways to customize the appearance of your data:

1. **Predefined Color Palettes**: Choose from a set of built-in color palettes.
2. **Custom Colors**: Define your own color schemes.
3. **Color Rules**: Apply conditional coloring based on data values.

### Use color palettes

The `HistogramChart` provides a set of predefined color palettes and it also accepts custom color palettes. See [coloring](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md) for more details.

### Direct color assignment

You can directly assign colors to specific series by including a `color` property in your series data. This takes precedence over the color palette.

**OverriddenColor**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';

const multipleSeriesStacked: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: -40,
        to: -30,
        value: 0,
      },
      {
        from: -30,
        to: -20,
        value: 20,
      },
      {
        from: -20,
        to: -10,
        value: 50,
      },
      {
        from: -10,
        to: 0,
        value: 120,
      },
      {
        from: 0,
        to: 10,
        value: 200,
      },
      {
        from: 10,
        to: 20,
        value: 300,
      },
      {
        from: 20,
        to: 30,
        value: 400,
      },
      {
        from: 30,
        to: 40,
        value: 600,
      },
      {
        from: 40,
        to: 50,
        value: 900,
      },
      {
        from: 50,
        to: 60,
        value: 700,
      },
      {
        from: 60,
        to: 70,
        value: 600,
      },
      {
        from: 70,
        to: 80,
        value: 500,
      },
      {
        from: 80,
        to: 90,
        value: 360,
      },
      {
        from: 90,
        to: 100,
        value: 340,
      },
      {
        from: 100,
        to: 110,
        value: 300,
      },
      {
        from: 110,
        to: 120,
        value: 280,
      },
      {
        from: 120,
        to: 130,
        value: 200,
      },
      {
        from: 130,
        to: 140,
        value: 150,
      },
      {
        from: 140,
        to: 150,
        value: 80,
      },
      {
        from: 150,
        to: 160,
        value: 50,
      },
      {
        from: 160,
        to: 170,
        value: 30,
      },
      {
        from: 170,
        to: 180,
        value: 15,
      },
      {
        from: 180,
        to: 190,
        value: 0,
      },
    ],
    color: 'hsl(55, 100%, 60%)',
  },
  {
    name: 'Series 2',
    bins: [
      {
        from: 100,
        to: 110,
        value: 10,
      },
      {
        from: 110,
        to: 120,
        value: 20,
      },
      {
        from: 120,
        to: 130,
        value: 40,
      },
      {
        from: 130,
        to: 140,
        value: 50,
      },
      {
        from: 140,
        to: 150,
        value: 60,
      },
      {
        from: 150,
        to: 160,
        value: 80,
      },
      {
        from: 160,
        to: 170,
        value: 150,
      },
      {
        from: 170,
        to: 180,
        value: 200,
      },
      {
        from: 180,
        to: 190,
        value: 250,
      },
      {
        from: 190,
        to: 200,
        value: 300,
      },
      {
        from: 200,
        to: 210,
        value: 360,
      },
      {
        from: 210,
        to: 220,
        value: 590,
      },
      {
        from: 220,
        to: 230,
        value: 890,
      },
      {
        from: 230,
        to: 240,
        value: 670,
      },
      {
        from: 240,
        to: 250,
        value: 600,
      },
      {
        from: 250,
        to: 260,
        value: 500,
      },
      {
        from: 260,
        to: 270,
        value: 450,
      },
      {
        from: 270,
        to: 280,
        value: 340,
      },
      {
        from: 280,
        to: 290,
        value: 300,
      },
      {
        from: 290,
        to: 300,
        value: 180,
      },
      {
        from: 300,
        to: 310,
        value: 80,
      },
      {
        from: 310,
        to: 320,
        value: 50,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];

const OverriddenColor = () => {
  return <HistogramChart data={multipleSeriesStacked} />;
};
```

### Use color rules

For more advanced coloring scenarios, you can use the `HistogramChart.ColorRule` slot to apply conditional coloring based on your data values. This is particularly useful for highlighting specific data points or applying business logic to your visualizations.

**ColorRules**

```tsx
import { HistogramChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const histogramData = [
  {
    name: 'High Priority',
    bins: [
      { from: 0, to: 20, value: 50 },
      { from: 20, to: 40, value: 120 },
      { from: 40, to: 60, value: 200 },
      { from: 60, to: 80, value: 180 },
      { from: 80, to: 100, value: 150 },
    ],
    horizontal: { start: true },
  },
  {
    name: 'Medium Priority',
    bins: [
      { from: 0, to: 20, value: 80 },
      { from: 20, to: 40, value: 150 },
      { from: 40, to: 60, value: 250 },
      { from: 60, to: 80, value: 220 },
      { from: 80, to: 100, value: 180 },
    ],
  },
  {
    name: 'Low Priority',
    bins: [
      { from: 0, to: 20, value: 100 },
      { from: 20, to: 40, value: 200 },
      { from: 40, to: 60, value: 300 },
      { from: 60, to: 80, value: 250 },
      { from: 80, to: 100, value: 200 },
    ],
  },
];

const ColorRules = () => {
  return (
    <Flex flexDirection="column" gap={16}>
      <HistogramChart data={histogramData} colorPalette="categorical">
        {/* highlight-start */}
        <HistogramChart.ColorRule
          comparator="starts-with"
          matchValue="High"
          colorPalette="red-inverted"
        />
        <HistogramChart.ColorRule
          comparator="starts-with"
          matchValue="Medium"
          colorPalette="yellow-inverted"
        />
        <HistogramChart.ColorRule
          comparator="starts-with"
          matchValue="Low"
          colorPalette="moss"
        />
        <HistogramChart.ColorRule
          valueAccessor="horizontal.start"
          comparator="equals"
          matchValue={true}
          colorPalette="purple-inverted"
        />
        {/* highlight-end */}
      </HistogramChart>
    </Flex>
  );
};
```

Color rules can be applied based on different criteria:

- **Name-based rules**: Color series based on their name patterns
- **Property-based rules**: Color based on specific properties in your series data
- **Value-based rules**: Color based on data values

In the example above, we're using several rules:

1. Color any series starting with "High" in red
2. Color any series starting with "Medium" in yellow
3. Color any series starting with "Low" in green
4. Color any series with `horizontal.start` set to `true` in purple

For more details about available comparators and options, see the [Color Rules](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md#override-series-color-with-colorrule) section.
