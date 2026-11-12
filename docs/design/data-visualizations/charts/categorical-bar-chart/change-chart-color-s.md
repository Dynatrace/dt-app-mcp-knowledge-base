## Change chart color/s

The `CategoricalBarChart` provides several ways to customize the appearance of your data:

1. **Predefined Color Palettes**: Choose from a set of built-in color palettes.
2. **Custom Colors**: Define your own color schemes.
3. **Color Rules**: Apply conditional coloring based on data values.

### Use color palettes

The `CategoricalBarChart` accepts a `colorPaletteMode` prop that can be set to either `single-color` (default) or `multi-color`. In `single-color` mode, all categories take the first color of the palette, while in `multi-color` mode, colors are applied to categories by index or by value.

For more details about available palettes and custom colors, see [Chart Coloring](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md).

### Use color rules

For more advanced coloring scenarios, you can use the `CategoricalBarChart.ColorRule` slot to apply conditional coloring based on your data values. Here are some examples:

**ColorRulesSingleDimension**

```tsx
import { CategoricalBarChart } from '@dynatrace/strato-components/charts';

const appRatings = [
  { category: 'App 1', value: 4.5 },
  { category: 'App 2', value: 3.2 },
  { category: 'App 3', value: 2.8 },
  { category: 'App 4', value: 4.1 },
  { category: 'App 5', value: 3.7 },
];

const ColorRulesSingleDimension = () => {
  return (
    <CategoricalBarChart data={appRatings}>
      {/* highlight-start */}
      <CategoricalBarChart.ColorRule
        comparator="greater-than"
        valueAccessor="value"
        matchValue={4.0}
        color="#2C7B00"
      />
      <CategoricalBarChart.ColorRule
        comparator="ends-with"
        matchValue="5"
        color="#C32F27"
      />
      {/* highlight-end */}
    </CategoricalBarChart>
  );
};
```

**ColorRulesMultiDimensions**

```tsx
import { CategoricalBarChart } from '@dynatrace/strato-components/charts';

const timeSeriesData = [
  { category: 'Q1', value: { '2023': 45, '2022': 35, '2021': 40 } },
  { category: 'Q2', value: { '2023': 52, '2022': 38, '2021': 42 } },
  { category: 'Q3', value: { '2023': 58, '2022': 41, '2021': 45 } },
  { category: 'Q4', value: { '2023': 62, '2022': 48, '2021': 50 } },
];

const ColorRulesMultiDimensions = () => {
  return (
    <CategoricalBarChart data={timeSeriesData} groupMode="grouped">
      {/* highlight-start */}
      <CategoricalBarChart.ColorRule
        comparator="ends-with"
        matchValue="3"
        colorPalette="swamps"
      />
      <CategoricalBarChart.ColorRule
        comparator="contains"
        matchValue="Q2"
        color="rebeccapurple"
      />
      <CategoricalBarChart.ColorRule
        comparator="ends-with"
        matchValue="4"
        colorPalette="blue-steel"
      />
      {/* highlight-end */}
    </CategoricalBarChart>
  );
};
```

For more details about using color rules, see the [Color Rules](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md#override-series-color-with-colorrule) section.

**ColorPaletteModeSingleColor**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const singleAppRatingPositive: CategoricalBarChartData[] = [
  { category: 'Unacceptable', value: 5 },
  { category: 'Poor', value: 56 },
  { category: 'Fair', value: 280 },
  { category: 'Good', value: 129 },
  { category: 'Excellent', value: 17 },
];

const ColorPaletteModeSingleColor = () => {
  return (
    <CategoricalBarChart
      data={singleAppRatingPositive}
      colorPalette="categorical"
      // highlight-next-line
      colorPaletteMode="single-color"
    />
  );
};
```

**ColorPaletteModeMultiColor**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const singleAppRatingPositive: CategoricalBarChartData[] = [
  { category: 'Unacceptable', value: 5 },
  { category: 'Poor', value: 56 },
  { category: 'Fair', value: 280 },
  { category: 'Good', value: 129 },
  { category: 'Excellent', value: 17 },
];

const ColorPaletteModeMultiColor = () => {
  return (
    <CategoricalBarChart
      data={singleAppRatingPositive}
      colorPalette="categorical"
      // highlight-next-line
      colorPaletteMode="multi-color"
    />
  );
};
```

Apart from all these options for providing a color palette, the `CategoricalBarChart` also offers the ability to override colors for specific series. When a color override is specified, it takes precedence over the color that would otherwise be assigned from the color palette. However, it does not affect the colors assigned to other series. This allows for fine-grained control over the appearance of individual series within the chart. A color override is done by category. We should specify the category name we want overridden and provide the desired color to the `CategoricalBarChart` data using a `color` prop.

**OverriddenColor**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const singleAppRatingPositive: CategoricalBarChartData[] = [
  { category: 'Unacceptable', value: 5 },
  { category: 'Poor', value: 56 },
  { category: 'Fair', value: 280 },
  { category: 'Good', value: 129 },
  { category: 'Excellent', value: 17 },
];

const OverriddenColor = () => {
  const myOverriddenColorData: CategoricalBarChartData[] = [
    ...singleAppRatingPositive,
  ];
  myOverriddenColorData.map((series) =>
    series.category === 'Fair'
      ? (series.color = 'hsl(55, 100%, 60%)')
      : (series.color = undefined),
  );

  return (
    <CategoricalBarChart data={myOverriddenColorData} colorPalette="swamps" />
  );
};
```
