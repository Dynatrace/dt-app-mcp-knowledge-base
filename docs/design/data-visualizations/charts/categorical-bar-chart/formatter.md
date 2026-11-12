## Formatter

As the `CategoricalBarChart` expects an array of categories with a value and an optional unit, by default this optional unit will be appended to the specified value, if it is included. There are two other options in the formatter that allow for greater customization. The first option enables you to prepend the unit to the value, while the second option enables you to ignore the original unit and append a custom string instead. Additionally, there is a custom formatter option available to allow you to change the input unit to one of your choice, e.g.: if the input unit is `bits`, you are able to switch and display the unit as `bytes`, correctly formatted. The formatted value is applied in the axis ticks, as well as in the tooltip and the axis magnifier. The use cases below outline each of these scenarios.

**Formatter**

```tsx
import { units, type Unit } from '@dynatrace-sdk/units';
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const appRating: CategoricalBarChartData[] = [
  { category: 'Unacceptable', value: 5, unit: 'votes' },
  { category: 'Poor', value: 56, unit: 'votes' },
  { category: 'Fair', value: 280, unit: 'votes' },
  { category: 'Good', value: 129, unit: 'votes' },
  { category: 'Excellent', value: 17, unit: 'votes' },
];

const Formatter = () => {
  return (
    <>
      <CategoricalBarChart data={appRating}>
        <CategoricalBarChart.ValueAxis formatter={undefined} />
      </CategoricalBarChart>

      <CategoricalBarChart data={appRating}>
        {/* highlight-start */}
        <CategoricalBarChart.ValueAxis
          formatter={(value: number, unit?: string | Unit) =>
            `${unit} ${Math.round(value)}`
          }
        />
        {/* highlight-end */}
      </CategoricalBarChart>

      <CategoricalBarChart data={appRating}>
        {/* highlight-start */}
        <CategoricalBarChart.ValueAxis
          formatter={(value: number) => `${Math.round(value)} sessions`}
        />
        {/* highlight-end */}
      </CategoricalBarChart>

      <CategoricalBarChart data={appRating}>
        {/* highlight-start */}
        <CategoricalBarChart.ValueAxis
          formatter={{
            input: units.data.bit,
            output: units.data.byte,
          }}
        />
        {/* highlight-end */}
      </CategoricalBarChart>

      <CategoricalBarChart data={appRating}>
        {/* highlight-start */}
        <CategoricalBarChart.ValueAxis
          formatter={{
            input: units.data.byte,
            output: units.data.megabyte,
          }}
        />
        {/* highlight-end */}
      </CategoricalBarChart>

      <CategoricalBarChart data={appRating}>
        {/* highlight-start */}
        <CategoricalBarChart.ValueAxis
          formatter={{
            input: units.data.megabyte,
            output: units.data.gigabyte,
          }}
        />
        {/* highlight-end */}
      </CategoricalBarChart>
    </>
  );
};
```
