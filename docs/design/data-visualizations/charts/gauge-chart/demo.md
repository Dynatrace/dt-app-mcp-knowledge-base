## Demo

The `GaugeChart` expects a numerical value as an input. This value needs to be passed to the visualization's `value` prop as a `Number`.

You can also provide custom `min` and `max` props to set the scale of the `GaugeChart`, and if none are provided, the default `min` will be 0 and `max` will be 100.

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/charts/GaugeChart/props.md).

**AddData**

```tsx
import { GaugeChart } from '@dynatrace/strato-components/charts';

const AddData = () => {
  return (
    <div style={{ width: '400px' }}>
      <GaugeChart
        // highlight-next-line
        value={50}
      >
        <GaugeChart.Label />
      </GaugeChart>
    </div>
  );
};
```
