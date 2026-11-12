## Multiple chart configuration

In certain situations, it may be beneficial to share a common chart configuration across multiple charts of the same type. To avoid the need for repeating the same configuration in each instance, all charts provide a config provider that can be utilized. This provider accepts an object, where the keys are either props of the chart component or the corresponding object representation of each of the chart subcomponent props (e.g. TimeseriesChart.Legend, CategoricalBarChart.ValueAxis, PieChart.Legend, etc.).

> **Note**
>
> The configuration set using this provider has a lower priority than the specific configuration of each chart. This means that if a chart has a specific configuration, it will override the corresponding property from the provider configuration.

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
