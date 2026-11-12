## Add legend

Legend can be added to `MultiMeterBarChart` in order to add more information about the data represented by the chart. Legend is optional and can be included using the subcomponent `<MultiMeterBarChart.Legend>`.

**Legend**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';

const Legend = () => {
  return (
    <div style={{ width: '400px', height: '120px' }}>
      <MultiMeterBarChart>
        <MultiMeterBarChart.Segment value={50} name="Good" />
        <MultiMeterBarChart.Segment value={20} name="Excellent" />
      </MultiMeterBarChart>
    </div>
  );
};
```
