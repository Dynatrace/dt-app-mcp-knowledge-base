## Legend

The purpose of the legend is to provide additional identifying information for the chart, without needing to interact with the legend directly.

### Visibility

The legend of the `TimeseriesChart` is shown by default. In order to hide or show the legend, you need to set the value of `legend.hidden` on the subcomponent.

### Position

By default, the position of the legend of the `TimeseriesChart` is set automatically. This option prioritizes the legend placement to the right of the chart area. When the chart width is reduced, the legend is repositioned to the area beneath the chart. It is also possible to explicitly set the chart's legend position to right or bottom with the `position` prop.

### Legend ratio

By default, the legend occupies `25%` of the container width, in the case where the legend is positioned on the right and `25%` of the container height if the legend position is on the bottom.

It is possible to override the default legend ratio by setting a custom percentage value for the ratio prop. The expected value is in the range of `5-80`. Values out of expected ranges will roll back to the default legend ratio.

**Legend**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const Legend = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <p>Chart with legend hidden</p>
      <TimeseriesChart data={mockTimeseriesCpuUsage}>
        {/* highlight-next-line */}
        <TimeseriesChart.Legend hidden={true} />
      </TimeseriesChart>

      <p>Chart with legend positioned to the right (default)</p>
      <TimeseriesChart data={mockTimeseriesCpuUsage}>
        {/* highlight-next-line */}
        <TimeseriesChart.Legend position="auto" />
      </TimeseriesChart>

      <p>Chart with legend positioned at the bottom</p>
      <TimeseriesChart data={mockTimeseriesCpuUsage}>
        {/* highlight-next-line */}
        <TimeseriesChart.Legend position="bottom" />
      </TimeseriesChart>

      <p>Chart with legend resized</p>
      <TimeseriesChart data={mockTimeseriesCpuUsage}>
        {/* highlight-next-line */}
        <TimeseriesChart.Legend position="bottom" initialRatio={50} />
      </TimeseriesChart>
    </Flex>
  );
};
```
