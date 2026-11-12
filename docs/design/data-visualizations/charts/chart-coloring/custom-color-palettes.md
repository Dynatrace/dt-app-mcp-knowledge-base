## Custom color palettes

There is also the option to supply a personalized collection of colors, which will be subsequently applied to the chart series based on their index. To accomplish this, you can furnish an array of color strings using the `colorPalette` prop. The provided color strings can utilize any format supported by web browsers, including RGB, HSL, HEX, as well as color tokens.

### Custom color palette value on DonutChart

**ColorPalette**

```tsx
import { DonutChart } from '@dynatrace/strato-components/charts';

const mockFinancialDataExampleOne = [
  { category: 'Rent', value: 300 },
  { category: 'Gym', value: 27 },
  { category: 'Fast food', value: 60 },
  { category: 'Car fuel', value: 100 },
  { category: 'Supermarket', value: 40 },
  { category: 'Grocery market', value: 20 },
];
const myCustomColorPalette = [
  'rgb(129, 130, 205)',
  'rgb(205, 68, 79)',
  'rgb(109, 110, 197)',
  'rgb(212, 165, 62)',
  'rgb(200, 100, 143)',
  'rgb(65, 162, 84)',
];

const ColorPalette = () => {
  return (
    <DonutChart
      data={mockFinancialDataExampleOne}
      labelAccessor="category"
      valueAccessor="value"
      unit="$"
      // highlight-next-line
      colorPalette={myCustomColorPalette}
    />
  );
};
```
