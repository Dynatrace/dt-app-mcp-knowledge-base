## Value representation

By default, values within a chart are displayed as is - with their absolute value (e.g. 3.14 kB). This can, however, be changed so that instead of absolute values, relative values are represented. Relative values indicate the proportion that a given series or datapoint contributes to the sum (100%) of a given timestamp or timeframe. The `valueRepresentation` prop can be used to change this behavior. Only timeframes/timestamps with the same unit will be stacked. If there is only one series of a given unit, the relative value is based on the maximum value within the given series.

In the **line and band variant**, relative values are always calculated based on the highest value in the dataset, regardless of whether the series are stacked or not. This ensures consistency in representation, as the highest value in the series becomes the baseline for calculating the relative percentages.

**ValueRepresentation**

```tsx
import { mockTimeseriesMixedUnits } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const ValueRepresentation = () => {
  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
    >
      <div>
        <h4>Line — Absolute</h4>
        <TimeseriesChart
          data={mockTimeseriesMixedUnits}
          valueRepresentation="absolute"
        />
      </div>
      <div>
        <h4>Line — Relative</h4>
        <TimeseriesChart
          data={mockTimeseriesMixedUnits}
          valueRepresentation="relative"
        />
      </div>
      <div>
        <h4>Bar — Absolute</h4>
        <TimeseriesChart
          data={mockTimeseriesMixedUnits.slice(0, 2)}
          valueRepresentation="absolute"
          variant="bar"
        />
      </div>
      <div>
        <h4>Bar — Relative</h4>
        <TimeseriesChart
          data={mockTimeseriesMixedUnits.slice(0, 2)}
          valueRepresentation="relative"
          variant="bar"
        />
      </div>
      <div>
        <h4>Area — Absolute</h4>
        <TimeseriesChart
          data={mockTimeseriesMixedUnits.slice(0, 2)}
          valueRepresentation="absolute"
          variant="area"
        />
      </div>
      <div>
        <h4>Area — Relative</h4>
        <TimeseriesChart
          data={mockTimeseriesMixedUnits.slice(0, 2)}
          valueRepresentation="relative"
          variant="area"
        />
      </div>
    </div>
  );
};
```
