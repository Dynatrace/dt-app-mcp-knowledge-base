## Formatter and unit

The `HoneycombChart` provides a way to format the values of the chart nodes. The `formatter` prop at the root component can be used to format the values shown in the tooltip on node hover and the legend ticks. The `unit` prop can be used to add a unit to the values of the nodes. When both props are specified the `formatter` will be applied with the provided unit (formatting options objects are an exception). When no formatter is provided a default formatter with value abbreviation will be used.

Note that the `formatter` and the `unit` props will be applied only to numeric data.

**FormatterAndUnit**

```tsx
import { units, type Unit } from '@dynatrace-sdk/units';
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
  { value: 6057, name: 'None' },
  { value: 9876, name: 'Error' },
  { value: 10351, name: 'Debug' },
  { value: 6523, name: 'Critical' },
  { value: 4488, name: 'Error' },
  { value: 4888, name: 'Error' },
  { value: 4574, name: 'Critical' },
  { value: 6862, name: 'Debug' },
  { value: 2415, name: 'None' },
  { value: 7899, name: 'Severe' },
  { value: 10818, name: 'Debug' },
  { value: 3216, name: 'Severe' },
  { value: 6535, name: 'Info' },
  { value: 4262, name: 'Notice' },
  { value: 4110, name: 'Warning' },
  { value: 9629, name: 'Alert' },
  { value: 8165, name: 'Critical' },
  { value: 4305, name: 'None' },
];

const FormatterAndUnit = () => {
  const customFormatterIgnoreUnit = (value: number, unit?: string | Unit) =>
    `${Math.round(value)} custom units`;
  const customFormatterWithUnit = (value: number, unit?: string | Unit) =>
    `${unit} ${Math.round(value)}`;
  const formattingOptionsObject = {
    minimumFractionDigits: 1,
    // TODO: Adapt to non deprecated code - APPDEV-10743
    // oxlint-disable-next-line typescript/no-deprecated
    input: units.currency.usd,
  };

  return (
    <>
      <HoneycombChart
        data={honeycombTileNumericData}
        colorPalette="turquoise"
        // highlight-start
        formatter={customFormatterIgnoreUnit}
        unit="nodes"
        // highlight-end
      />
      <HoneycombChart
        data={honeycombTileNumericData}
        colorPalette="turquoise"
        // highlight-start
        formatter={customFormatterWithUnit}
        unit="nodes"
        // highlight-end
      />
      <HoneycombChart
        data={honeycombTileNumericData}
        colorPalette="turquoise"
        // highlight-start
        formatter={formattingOptionsObject}
        unit="nodes"
        // highlight-end
      />
    </>
  );
};
```
