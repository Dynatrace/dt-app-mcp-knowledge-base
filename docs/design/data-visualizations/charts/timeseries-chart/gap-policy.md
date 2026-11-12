## Gap policy

Gaps in data refer to missing or unrepresented values between existing data points. In a dataset exclusively with timestamps, no continuity can be determined and therefore there are always “gaps” between data points regardless of the resolution of the dataset. In a timeframe dataset however, gaps are considered when the end timestamp of the previous data point is earlier than the start timestamp of the next data point, meaning there is a timespan between the end of a previous data point and the next one with no given value.

The TimeseriesChart provides the `gapPolicy` prop to configure how gaps are visualized in a chart. There are three `gapPolicy` options available: gap, connect, and threshold.

- The `gap` option displays gaps on the chart as is (e.g. breaks along a line). This option helps to see the absence of data during a period of time.
- The `connect` option connects consecutive data points irrespective of the gap using linear interpolation.
- The `threshold` option provides a mechanism to configure thresholds of a certain time (e.g. 30 seconds, 5 minutes, 1 day, 3 months, etc.). When the gap between sequential data points in the dataset is less than or equal to the threshold, then the data points will be connected.

Note: The `gapPolicy` prop is only supported in area and line chart variants and with the band subcomponent. The bar chart variant doesn't support a gapPolicy and does not react to the property configuration.

**GapPolicy**

```tsx
import { mockTimeseriesDiskUsageWithGaps } from '@design-system/mock-data';

import {
  ThresholdGapPolicy,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const GapPolicy = () => {
  const thresholdGapPolicy: ThresholdGapPolicy = {
    threshold: '4min',
  };

  return (
    <Flex flexDirection="column" gap={16}>
      <TimeseriesChart
        data={mockTimeseriesDiskUsageWithGaps}
        // highlight-next-line
        gapPolicy="connect"
      />
      <TimeseriesChart
        data={mockTimeseriesDiskUsageWithGaps}
        // highlight-next-line
        gapPolicy="gap"
      />
      <TimeseriesChart
        data={mockTimeseriesDiskUsageWithGaps}
        // highlight-next-line
        gapPolicy={thresholdGapPolicy}
      />
    </Flex>
  );
};
```
