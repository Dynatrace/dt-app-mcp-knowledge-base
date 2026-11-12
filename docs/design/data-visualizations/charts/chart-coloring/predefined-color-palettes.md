## Predefined color palettes

The `colorPalette` prop allows you to set the chart color palette to be used within the chart (i.e. to color the chart's series). Depending on the selected color palette, the color is then applied to the series by index or by value.

When utilizing the index-based method, colors are allocated to the series in a sequential manner. Once the last color in the sequence is reached, the series will restart from the beginning with the same color sequence. The following color palettes employ the index-based approach for color assignment:

- `categorical (default)`
- `swamps`
- `fireplace`
- `blue-steel`
- `purple-rain`

All color palettes can be used in reverse order by adding the suffix `-inverted` to the palette name. For example, `categorical` would become `categorical-inverted`

### Color palette by index on TimeseriesChart

**ColorPalette**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const ColorPalette = () => {
  return (
    <>
      <h4>purple-rain</h4>
      <TimeseriesChart
        data={mockTimeseriesCpuUsage}
        // highlight-next-line
        colorPalette="purple-rain"
      />
      <h4>purple-rain-inverted</h4>
      <TimeseriesChart
        data={mockTimeseriesCpuUsage}
        // highlight-next-line
        colorPalette="purple-rain-inverted"
      />
    </>
  );
};
```

When employing the value-based approach, colors are automatically allocated to correspond with the series name. For instance, a series labeled as "Error" would be associated with the color denoted as "error". The correlation between a series name and color value is not influenced by letter case, ensuring a case-insensitive matching process. In cases where a series does not align with any color palette value, the color assignment is determined based on the index of the series. The available color palettes and their respective admissible values are as follows:

- `log-status ( error, warn, info, none )`
- `apdex ( excellent, good, fair, poor, unacceptable )`
- `log-level ( emergency, alert, critical, severe, error, warn, notice, debug, info, none )`
- `vulnerability-risk-level ( critical, high, medium, low )`
- `vulnerability-status ( affected, resolved, muted )`

If you want to use an inverted color palette using the value-based approach, it will only work in cases where the name does not match a category. In such cases, the order of the colors in that palette will be inverted.

**InvertedColorPalette**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const timeseriesApdexData = [
  { ...mockTimeseriesCpuUsage[0], name: 'Excellent' },
  { ...mockTimeseriesCpuUsage[1], name: 'Good' },
  { ...mockTimeseriesCpuUsage[2], name: 'Fair' },
];

const InvertedColorPalette = () => {
  return (
    <>
      <h4>apdex (value-based)</h4>
      <TimeseriesChart
        data={timeseriesApdexData}
        // highlight-next-line
        colorPalette="apdex"
      />
      <h4>apdex-inverted</h4>
      <TimeseriesChart
        data={mockTimeseriesCpuUsage}
        // highlight-next-line
        colorPalette="apdex-inverted"
      />
    </>
  );
};
```

### Color palette by value on CategoricalBarChart

**ColorPalette**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const weekDaysLogs: CategoricalBarChartData[] = [
  { category: 'Monday', value: { errors: 10, warnings: 20, info: 20 } },
  { category: 'Tuesday', value: { errors: 2, warnings: 20, info: 10 } },
  { category: 'Wednesday', value: { errors: 4, warnings: 20, info: 6 } },
  { category: 'Thursday', value: { errors: 5, warnings: 18, info: 18 } },
  { category: 'Friday', value: { errors: 20, warnings: 18, info: 13 } },
  { category: 'Saturday', value: { errors: 8, warnings: 18, info: 14 } },
  { category: 'Sunday', value: { errors: 7, warnings: 15, info: 9 } },
];

const ColorPalette = () => {
  return (
    <CategoricalBarChart
      data={weekDaysLogs}
      // highlight-next-line
      colorPalette="log-status"
      groupMode="grouped"
    >
      <CategoricalBarChart.ValueAxis label="Average logs amount" />
    </CategoricalBarChart>
  );
};
```
