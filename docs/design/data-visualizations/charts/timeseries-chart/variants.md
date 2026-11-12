## Variants

The `TimeseriesChart` supports three different chart variants: Area, bar and line. If no value is provided in the `variant` prop, the line variant is used by default. It is important to note that not all features and props apply to all variants equally. Each of these specific cases are outlined in the use cases below.

**Variants**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex flexDirection="column" gap={16}>
      <TimeseriesChart
        data={mockTimeseriesCpuUsage}
        // The default value if not set is "line"
        // highlight-next-line
        variant="line"
      />
      <TimeseriesChart
        data={mockTimeseriesCpuUsage}
        // highlight-next-line
        variant="area"
      />
      <TimeseriesChart
        data={mockTimeseriesCpuUsage}
        // highlight-next-line
        variant="bar"
      />
    </Flex>
  );
};
```
