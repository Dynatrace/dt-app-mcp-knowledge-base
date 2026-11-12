## Custom color maps

In addition, there is the capability to assign colors that correspond to specific chart series names. To achieve this, you can provide a map consisting of series name-color pairs, where the series name acts as the key and the corresponding color as the value. The provided color strings can utilize any format supported by web browsers, including RGB, HSL, HEX, as well as color tokens. To implement this functionality, you can pass the aforementioned map to the colorPalette prop.

### Custom color palette value on PieChart

**ColorPalette**

```tsx
import { PieChart } from '@dynatrace/strato-components/charts';

const mockFinancialDataExampleTwo = [
  { category: 'Park', value: 5 },
  { category: 'Date', value: 15 },
  { category: 'Parties', value: 80 },
  { category: 'Internet bill', value: 17 },
  { category: 'Water', value: 15 },
  { category: 'Electricity', value: 30 },
];
const myCustomColorMap = {
  Park: 'hsl(355, 58%, 54%)',
  Date: 'hsl(41, 64%, 54%)',
  Parties: 'hsl(239, 43%, 60%)',
  'Internet bill': 'hsl(173, 82%, 37%)',
  Water: 'hsl(132, 43%, 45%)',
  Electricity: 'hsl(334, 48%, 59%)',
};

const ColorPalette = () => {
  return (
    <PieChart
      data={mockFinancialDataExampleTwo}
      labelAccessor="category"
      valueAccessor="value"
      unit="$"
      // highlight-next-line
      colorPalette={myCustomColorMap}
    />
  );
};
```
