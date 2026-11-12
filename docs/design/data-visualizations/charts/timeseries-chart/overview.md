## Overview

The `TimeseriesChart` is a data visualization component for displaying time-based metrics. It supports multiple chart geometries (line, area, bar, band), annotations, thresholds, tooltips, legends, and rich customization options — making it suitable for monitoring dashboards, performance analysis, and forecasting use cases.

**MinimalChartConfiguration**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const MinimalChartConfiguration = () => {
  return <TimeseriesChart data={mockTimeseriesCpuUsage} />;
};
```
