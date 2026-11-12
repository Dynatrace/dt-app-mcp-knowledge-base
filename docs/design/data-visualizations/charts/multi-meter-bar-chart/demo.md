## Demo

The `MultiMeterBarChart` expects one or various `MultiMeterBarChart.Segment` subcomponents to be rendered along with it. These subcomponents expect a `value` prop as a `Number`.

You can also provide custom `min` and `max` props to set the scale of the `MultiMeterBarChart`, and if none are provided the default `min` will be 0 and `max` will be the total value of all segments.

It is also possible to delegate the component to generate the labels by setting `<MultiMeterBarChart.Min />`, `<MultiMeterBarChart.Max />` and `<MultiMeterBarChart.Value />` slots, to respectively generate automatically min, max, and value labels (the formatting will be applied automatically).

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/charts/MultiMeterBarChart/props.md).

**AddData**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';

const AddData = () => {
  return (
    <div style={{ width: '400px' }}>
      <MultiMeterBarChart colorPalette="blue-moss">
        {/* highlight-start */}
        <MultiMeterBarChart.Segment value={50} name="Rent" />
        <MultiMeterBarChart.Segment value={20} name="University" />
        {/* highlight-end */}
        <MultiMeterBarChart.Min />
        <MultiMeterBarChart.Max />
        <MultiMeterBarChart.Value />
      </MultiMeterBarChart>
    </div>
  );
};
```
