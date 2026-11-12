## Loading

The `loading` prop is a boolean value that can be passed to the `TimeseriesChart` component to control its loading state. When the loading prop is set to true, the loading indicator appears in the middle of the chart plot to inform the user that the component is currently fetching or processing data. When the loading prop is set to false, the component should display its regular content.

**LoadingState**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const LoadingState = () => {
  return (
    <>
      <div>
        <h4>Loading without data</h4>
        <TimeseriesChart
          // highlight-next-line
          loading
          data={[]}
        />
      </div>
      <div>
        <h4>Loading with data</h4>
        <TimeseriesChart
          data={mockTimeseriesCpuUsage}
          // highlight-next-line
          loading
        />
      </div>
    </>
  );
};
```
