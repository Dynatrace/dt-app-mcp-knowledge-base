## Data accessors

Accessors specify how to retrieve data from your data structure. Accessor strings that contain dots allow you to retrieve nested data. If the actual property key contains a dot, you can escape an accessor by enclosing the string in square brackets.

**Accessors**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const data = [
  {
    horizontal: {
      'number(of.host.available)': {
        min: 0,
      },
      'number(of.host.[available]).max': { value: 50000 },
    },
    vertical: {
      cpu: {
        usage: {
          level: {
            min: 0,
            max: 100,
          },
        },
      },
    },
    'host.primary': { 'host.secondary': 'CPU avg' },
  },
];

const Accessors = () => {
  return (
    <XYChart data={data}>
      <XYChart.RectSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor='horizontal["number(of.host.available)"].min'
        x1Accessor='horizontal["number(of.host.[available]).max"].value'
        y0Accessor="vertical.cpu.usage.level.min"
        y1Accessor='vertical.cpu.usage.["level"].max'
        valueAccessor='["host.primary"].["host.secondary"]'
      />
      <XYChart.XAxis
        id="x-first-axis"
        type="numerical"
        position="bottom"
        label="Number of hosts"
      />
      <XYChart.YAxis
        id="y-first-axis"
        type="numerical"
        position="left"
        unit="percent"
        label="CPU usage (%)"
      />
    </XYChart>
  );
};
```
