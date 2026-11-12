## Demo

The `MeterBarChart` expects a single value as an input. This value needs to be passed to the visualisation's `value` prop as a `Number`.

You can also provide custom `min` and `max` props to set the scale of the `MeterBarChart`, and if none are provided the default `min` will be 0 and `max` will be 100.

It is also possible to delegate the component to generate the labels by setting `<MeterBarChart.Min />`, `<MeterBarChart.Max />` and `<MeterBarChart.Value />` slots, to respectively generate automatically min, max, and value labels (the formatting will be applied automatically).

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/charts/MeterBarChart/props.md).

**AddData**

```tsx
import { MeterBarChart } from '@dynatrace/strato-components/charts';

const AddData = () => {
  return (
    <div style={{ width: '400px' }}>
      <MeterBarChart
        // highlight-next-line
        value={50}
      >
        <MeterBarChart.Min />
        <MeterBarChart.Max />
        <MeterBarChart.Value />
      </MeterBarChart>
    </div>
  );
};
```
