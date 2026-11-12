## Sizing

Different sizes can be set on the `GaugeChart` to display the information. By default, the chart will use all the available container size up to a maximum height of 300 pixels. This maximum height can be changed by providing a value in the `height` prop of the `GaugeChart.` If a number is passed to this prop without any unit specified, it will be treated as `px`. You can also specify the `width` prop, and it works in the same way.

Resizing the chart will especially affect the `label`. If a `string` is provided to the `label` slot, both the arc and the strings will grow accordingly. However, size will not be affected if another type of element is provided as `label`, but size can be modified manually. The arc will resize either way.

**Sizing**

```tsx
import { GaugeChart } from '@dynatrace/strato-components/charts';

const Sizing = () => {
  return (
    <div style={{ width: '400px' }}>
      <p>Default Width and height</p>
      <GaugeChart value={20}>
        <GaugeChart.Label></GaugeChart.Label>
      </GaugeChart>

      <p>Width and height defined</p>
      <GaugeChart
        value={20}
        // highlight-start
        width="100%"
        height={400}
        // highlight-end
      >
        <GaugeChart.Label></GaugeChart.Label>
      </GaugeChart>
    </div>
  );
};
```
