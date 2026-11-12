## Size

By default, the chart will use all the available container size up to a maximum height of 300 pixels and width of 100%. This height and width can be changed by providing a value in the `height` and `width` props of the `TimeseriesChart`. If a number is passed to these props, it will be treated as `px`. If a string is passed, it will be treated as a CSS string.

**Size**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const Size = () => {
  return (
    <TimeseriesChart
      data={mockTimeseriesCpuUsage}
      // highlight-start
      height={500}
      // highlight-end
    />
  );
};
```

### Minimum size behavior

When the `TimeseriesChart` is rendered in a small container, it automatically hides elements that would otherwise be clipped or unusable. No configuration is needed — this happens based on the available chart height.

| Chart height | What is shown                                |
| ------------ | -------------------------------------------- |
| ≥ 160 px     | Plot area, axes, and annotations             |
| ≥ 50 px      | Plot area and axes (annotations hidden)      |
| \< 50 px     | Plot area only (axes and annotations hidden) |

This graceful degradation is especially useful in dashboards where chart tiles can be resized to very small dimensions.
