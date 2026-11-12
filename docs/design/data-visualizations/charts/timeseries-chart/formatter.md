## Formatter

The unit for the `TimeseriesChart`, by default, will be appended to the specified value. There are two other options in the formatter that allow for greater customization. The first option enables you to prepend the unit to the value, while the second option enables you to ignore the original unit and append a custom string instead. Additionally, there is a custom formatter option available to allow you to change the input unit to one of your choice, e.g.: if the input unit is `bits`, you are able to switch and display the unit as `bytes`, correctly formatted. The formatted value is applied in the axis ticks, as well as in the tooltip and the axis magnifier. The use cases below outline each of these scenarios.

> The precision of the formatter will adapt automatically based on the data decimals if there is no precision configuration from the custom formatter option.

**Formatter**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { units } from '@dynatrace-sdk/units';
import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const Formatter = () => {
  return (
    <>
      <TimeseriesChart data={mockTimeseriesCpuUsage}>
        {/* highlight-next-line */}
        <TimeseriesChart.YAxis formatter={undefined} />
      </TimeseriesChart>

      <TimeseriesChart data={mockTimeseriesCpuUsage}>
        {/* highlight-next-line */}
        <TimeseriesChart.YAxis
          formatter={(value, unit) => `${unit} ${Math.round(value)}`}
        />
      </TimeseriesChart>

      <TimeseriesChart data={mockTimeseriesCpuUsage}>
        {/* highlight-start */}
        <TimeseriesChart.YAxis
          formatter={{
            input: units.data.bit,
            output: units.data.byte,
          }}
        />
        {/* highlight-end */}
      </TimeseriesChart>

      <TimeseriesChart data={mockTimeseriesCpuUsage}>
        <TimeseriesChart.YAxis
          formatter={{
            input: units.data.megabyte,
            output: units.data.gigabyte,
          }}
        />
      </TimeseriesChart>
    </>
  );
};
```
