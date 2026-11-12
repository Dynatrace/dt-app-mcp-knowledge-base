## Change chart colors

The `HoneycombChart` provides several ways to customize the appearance of your data:

1. **Predefined Color Palettes**: Choose from a set of built-in color palettes.
2. **Custom Ranges**: Define your own color ranges for numerical data.
3. **Color Rules**: Apply conditional coloring based on data values.

### Use color palettes

The `HoneycombChart` provides a set of predefined color palettes that can be used out of the box to provide more appealing visualizations. See [Charts Colors](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md) for more info.

### Use predefined color palette

The `HoneycombChart` is able to assign colors to the nodes based on the value distribution of each node compared to the total. Domain will be divided in an amount of 'groups' equal to the quantity of colors in the palette. Each node will receive the color of the group that fits its value.

**NumericalPredefinedColor**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const honeycombTileNumericData: ChartData = [
  { value: 10757, name: 'Severe' },
  { value: 4106, name: 'Emergency' },
  { value: 1652, name: 'Notice' },
  { value: 10958, name: 'Alert' },
  { value: 7095, name: 'Error' },
  { value: 6935, name: 'Emergency' },
  { value: 1273, name: 'None' },
  { value: 2368, name: 'Warning' },
  { value: 10321, name: 'Alert' },
  { value: 3638, name: 'Notice' },
];

const NumericalPredefinedColor = () => {
  return (
    <HoneycombChart
      data={honeycombTileNumericData}
      // highlight-next-line
      colorPalette="swamps"
    >
      <HoneycombChart.Legend></HoneycombChart.Legend>
    </HoneycombChart>
  );
};
```

### Color a numerical dataset using custom ranges

To define custom ranges and colors, pass an array of `ColoredRange` objects to the `colorScheme` prop. This allows you to specify exact value ranges and their corresponding colors.

Custom ranges are the one case that still relies on the deprecated `colorScheme` prop: the `colorPalette` prop accepts predefined palette names and custom color maps, but not `ColoredRange` arrays.

**NumericalRangesColor**

```tsx
import {
  HoneycombChart,
  HoneycombTileNumericData,
} from '@dynatrace/strato-components/charts';

const honeycombTileNumericData: HoneycombTileNumericData[] = [
  { value: 10757, name: 'Severe' },
  { value: 4106, name: 'Emergency' },
  { value: 1652, name: 'Notice' },
  { value: 10958, name: 'Alert' },
  { value: 7095, name: 'Error' },
  { value: 6935, name: 'Emergency' },
  { value: 1273, name: 'None' },
  { value: 2368, name: 'Warning' },
  { value: 10321, name: 'Alert' },
  { value: 3638, name: 'Notice' },
];

const NumericalRangesColor = () => {
  // Custom `ColoredRange` arrays are only supported through the deprecated
  // `colorScheme` prop; the `colorPalette` prop does not accept ranges.
  const colorScheme = [
    { from: 0, to: 2000, color: 'red' },
    { from: 2000, to: 7000, color: 'gold' },
    { from: 7000, to: 15000, color: 'green' },
  ];

  return (
    <HoneycombChart
      data={honeycombTileNumericData}
      // highlight-next-line
      colorScheme={colorScheme}
    >
      <HoneycombChart.Legend />
    </HoneycombChart>
  );
};
```

### Color a categorical dataset with a predefined color palette

If a categorical dataset is used, then the value of each node should be a string. A predefined color palette can be used to map the categories in the value of the node to the specific predefined color.

**CategoricalColor**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const honeycombTileCategoricalData: ChartData = [
  { value: 'Severe', name: 'dts-eu-zone1-server-1' },
  { value: 'Emergency', name: 'dts-eu-zone1-server-2' },
  { value: 'Notice', name: 'dts-eu-zone1-server-3' },
  { value: 'Alert', name: 'dts-eu-zone1-server-4' },
  { value: 'Error', name: 'dts-eu-zone1-server-5' },
  { value: 'Emergency', name: 'dts-eu-zone1-server-6' },
  { value: 'None', name: 'dts-eu-zone1-server-7' },
  { value: 'Warning', name: 'dts-eu-zone1-server-8' },
  { value: 'Alert', name: 'dts-eu-zone1-server-9' },
  { value: 'Notice', name: 'dts-eu-zone1-server-10' },
];

const CategoricalColor = () => {
  return (
    <HoneycombChart
      data={honeycombTileCategoricalData}
      // highlight-next-line
      colorPalette="log-level"
    >
      <HoneycombChart.Legend></HoneycombChart.Legend>
    </HoneycombChart>
  );
};
```

### Color a categorical dataset using custom categories and color palette

If none of the predefined color palettes fit your case, the `HoneycombChart` is able to process a `key-value` object as `colorPalette` taking each `key` as the category label and the `value` as its assigned color.

**CustomPalette**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const CustomPalette = () => {
  const customColorPalette = {
    Europe: '#ea32b5',
    America: '#517fc4',
    Asia: '#3e8c46',
    Oceania: '#e7ce70',
    Africa: '#ea3200',
  };
  const data: ChartData = [
    { value: 'Europe' },
    { value: 'America' },
    { value: 'Asia' },
    { value: 'Oceania' },
    { value: 'Africa' },
  ];

  return (
    <HoneycombChart
      data={data}
      // highlight-next-line
      colorPalette={customColorPalette}
    >
      <HoneycombChart.Legend></HoneycombChart.Legend>
    </HoneycombChart>
  );
};
```

### Use color rules

For advanced coloring scenarios, use the `HoneycombChart.ColorRule` slot to apply conditional coloring based on your data values. This is particularly useful for highlighting specific nodes or applying business logic to your visualizations.

**ColorRules**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const numericalData: ChartData = [
  { name: 'Node 1', value: 1500 },
  { name: 'Node 2', value: 2500 },
  { name: 'Node 3', value: 3500, priority: 'high' },
  { name: 'Node 4', value: 4500, status: 'warning' },
  { name: 'Node 5', value: 5500 },
  { name: 'Emergency Node', value: 8500 },
];

const categoricalData: ChartData = [
  { value: 'North America' },
  { value: 'South America' },
  { value: 'Europe' },
  { value: 'Asia' },
  { value: 'Africa' },
  { value: 'Oceania' },
  { value: 'Antarctica' },
];

const ColorRules = () => {
  return (
    <Flex flexDirection="column" gap={16}>
      <Flex flexDirection="row" gap={16}>
        <div>
          <h3>Base Numerical Data</h3>
          <HoneycombChart
            width={350}
            height={300}
            data={numericalData}
            colorPalette="categorical"
          />
        </div>
        <div>
          <h3>Numerical Data with Color Rules</h3>
          <HoneycombChart
            width={350}
            height={300}
            data={numericalData}
            colorPalette="categorical"
          >
            {/* highlight-start */}
            <HoneycombChart.ColorRule
              comparator="greater-or-equal"
              matchValue={5000}
              colorPalette="red-inverted"
            />
            <HoneycombChart.ColorRule
              comparator="matches-phrase"
              matchValue="Emergency"
              valueAccessor="name"
              colorPalette="red"
            />
            <HoneycombChart.ColorRule
              comparator="equals"
              matchValue="high"
              valueAccessor="priority"
              colorPalette="orange-inverted"
            />
            <HoneycombChart.ColorRule
              comparator="equals"
              matchValue="warning"
              valueAccessor="status"
              colorPalette="yellow-inverted"
            />
            {/* highlight-end */}
          </HoneycombChart>
        </div>
      </Flex>
      <Flex flexDirection="row" gap={16}>
        <div>
          <h3>Base Categorical Data</h3>
          <HoneycombChart
            width={350}
            height={300}
            data={categoricalData}
            colorPalette="categorical"
          />
        </div>
        <div>
          <h3>Categorical Data with Color Rules</h3>
          <HoneycombChart
            width={350}
            height={300}
            data={categoricalData}
            colorPalette="categorical"
          >
            <HoneycombChart.ColorRule
              comparator="starts-with"
              matchValue="North"
              colorPalette="blue-steel"
            />
            <HoneycombChart.ColorRule
              comparator="equals"
              matchValue="Europe"
              colorPalette="purple-rain"
            />
            <HoneycombChart.ColorRule
              comparator="equals"
              matchValue="Asia"
              colorPalette="orange-inverted"
            />
          </HoneycombChart>
        </div>
      </Flex>
    </Flex>
  );
};
```

Color rules can be applied to both numerical and categorical data:

**For Numerical Data:**

- Color nodes based on their value thresholds
- Highlight specific value ranges
- Apply colors based on nested properties

**For Categorical Data:**

- Color nodes based on exact matches
- Use pattern matching for text values
- Apply different colors to different categories

**Example Rules:**

```tsx
// Numerical rule: Color nodes with value >= 5000 in red
<HoneycombChart.ColorRule
  comparator="greater-or-equal"
  matchValue={5000}
  colorPalette="red-inverted"
/>

// Text rule: Color nodes containing 'Emergency' in their name
<HoneycombChart.ColorRule
  comparator="contains"
  matchValue="Emergency"
  valueAccessor="name"
  colorPalette="red"
/>

// Categorical rule: Color nodes with category 'Europe' in purple
<HoneycombChart.ColorRule
  comparator="equals"
  matchValue="Europe"
  colorPalette="purple-rain"
/>
```

For more details about available comparators and options, see the [Color Rules](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md#override-series-color-with-colorrule) section.

### Filter values in numeric dataset

The `HoneycombChart` can focus the applied color palette to a specified range using the `min` and `max` props. All nodes will be preserved, but those outside the boundaries will use a default color.

**MinMax**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const honeycombTileNumericData: ChartData = [
  { value: 1, name: 'Severe' },
  { value: 2, name: 'Emergency' },
  { value: 3, name: 'Notice' },
  { value: 4, name: 'Alert' },
  { value: 5, name: 'Error' },
  { value: 6, name: 'Emergency' },
  { value: 7, name: 'None' },
  { value: 8, name: 'Warning' },
  { value: 9, name: 'Alert' },
  { value: 10, name: 'Notice' },
];

const MinMax = () => {
  return (
    <HoneycombChart
      data={honeycombTileNumericData}
      // highlight-start
      min={4}
      max={8}
      // highlight-end
      colorPalette="blue"
    >
      <HoneycombChart.Legend />
    </HoneycombChart>
  );
};
```
