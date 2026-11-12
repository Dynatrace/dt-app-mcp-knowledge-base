## Multiple chart configuration

Given certain situations it can be helpful to share a common chart configuration across several `TimeseriesChart` instances. To avoid repeating the same configuration in all instances, the `TimeseriesChartConfig` provider can be used. It accepts an object where the keys are either props of the `TimeseriesChart` component, or the corresponding object representation of each one of the `TimeseriesChart` subcomponents props. (`TimeseriesChart.Legend`, `TimeseriesChart.YAxis`, `Timeseries.XAxis`, `Timeseries.Tooltip`).

A specific configuration of a `TimeseriesChart` instance will take precedence over the one specified in the `TimeseriesChartConfig`.

**SharedConfiguration**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import {
  TimeseriesChart,
  TimeseriesChartConfig,
} from '@dynatrace/strato-components/charts';

const SharedConfiguration = () => {
  return (
    // highlight-next-line
    <TimeseriesChartConfig
      value={{
        gapPolicy: 'connect',
        colorPalette: 'blue-steel',
        legend: {
          hidden: true,
        },
        yAxis: [
          {
            max: 120,
            min: 0,
          },
        ],
        tooltip: {
          variant: 'shared',
        },
      }}
    >
      <TimeseriesChart data={mockTimeseriesCpuUsage}>
        <TimeseriesChart.Tooltip variant="single"></TimeseriesChart.Tooltip>
      </TimeseriesChart>
      <TimeseriesChart data={mockTimeseriesCpuUsage} variant="bar" />
      <TimeseriesChart
        data={mockTimeseriesCpuUsage}
        variant="area"
        colorPalette="fireplace"
      />
    </TimeseriesChartConfig>
  );
};
```
