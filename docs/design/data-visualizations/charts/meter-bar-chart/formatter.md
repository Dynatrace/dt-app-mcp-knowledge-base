## Formatter

The `MeterBarChart` has a formatter prop that accepts any function to provide format to the relevant chart values. One of the uses of this formatter can be to attach a custom unit or string to the value. The default formatter shows the value without any format.

Additionally, there is a custom formatter option available to allow you to change the input unit to one of your choice, e.g.: if the input unit is `bits`, you are able to switch and display the unit as `bytes`, correctly formatted. The formatted value will appear in the chart tooltip. The use cases below outline each of these scenarios.

**Formatter**

```tsx
import { units } from '@dynatrace-sdk/units';
import { MeterBarChart } from '@dynatrace/strato-components/charts';

const Formatter = () => {
  return (
    <div style={{ width: '400px' }}>
      <p>Value with appended unit</p>
      <MeterBarChart
        value={50}
        // highlight-next-line
        formatter={(value) => `${value} $`}
      >
        <MeterBarChart.Min />
        <MeterBarChart.Max />
        <MeterBarChart.Tooltip />
        <MeterBarChart.Value />
      </MeterBarChart>

      <p>Value with prepended unit</p>
      <MeterBarChart
        value={50}
        // highlight-next-line
        formatter={(value) => `$ ${value}`}
      >
        <MeterBarChart.Min />
        <MeterBarChart.Max />
        <MeterBarChart.Tooltip />
        <MeterBarChart.Value />
      </MeterBarChart>

      <p>Value converted to a different unit</p>
      <MeterBarChart
        value={50}
        // highlight-start
        formatter={{
          input: units.data.bit,
          output: units.data.byte,
        }}
        // highlight-end
      >
        <MeterBarChart.Min />
        <MeterBarChart.Max />
        <MeterBarChart.Tooltip />
        <MeterBarChart.Value />
      </MeterBarChart>
    </div>
  );
};
```
