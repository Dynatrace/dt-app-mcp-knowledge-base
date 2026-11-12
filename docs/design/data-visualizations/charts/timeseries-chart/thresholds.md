## Thresholds

Thresholds are used to mark meaningful ranges or values on a `TimeseriesChart` and they add contextual information to a numerical axis. There are two variants of thresholds:

- a specific point represented on the Y-axis and a line across.
- a range - or filled area - represented by a pill on the Y-axis and a band across.

Thresholds are bound to the topmost axis at their assigned position. If that axis is hidden — for example, when it is filtered out via legend interaction — the thresholds bound to that position will also disappear.

### Static thresholds

**StaticThresholds**

```tsx
import { mockTimeseriesThreshold } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const StaticThresholds = () => {
  return (
    <TimeseriesChart data={mockTimeseriesThreshold}>
      {/* highlight-start */}
      <TimeseriesChart.ThresholdIndicator
        data={{
          min: 0,
          max: 35000,
        }}
        color={Colors.Charts.Threshold.Good.Default}
        label="ThresholdIndicator 1"
      />
      <TimeseriesChart.ThresholdIndicator
        data={{ value: 57667 }}
        color={Colors.Charts.Threshold.Bad.Default}
        label="ThresholdIndicator 2"
      />
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```

Both point and range can be represented by static or dynamic data sources. A static data source has a single value representing a point or a single key-value pair representing a fixed range. A dynamic data source has a data array containing more than one value or various key-value pairs.

There are three different types of threshold markers:

- Range filled, where the value range is defined in order to display the threshold band. The upper and lower lines are not drawn unless the pill is hovered.

- Range stroke-only variant, where a value range is defined in order to display the threshold band represented by upper and lower dashed lines. The upper and lower lines become continuous lines when the pill is hovered.

- Point, where only one value is required to display the threshold. It's represented by a dashed line and when the point is hovered the line becomes a continuous line.

### Dynamic thresholds

**DynamicThresholds**

```tsx
import { mockTimeseriesThreshold } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const DynamicThresholds = () => {
  return (
    <>
      <div>
        <h4>Dynamic point</h4>
        <TimeseriesChart data={mockTimeseriesThreshold}>
          {/* highlight-start */}
          <TimeseriesChart.ThresholdIndicator
            data={[
              { value: 42000, date: new Date('Tue, 5 Apr 2022 12:22:00 UTC') },
              { value: 56000, date: new Date('Tue, 5 Apr 2022 12:22:00 UTC') },
              { value: 56000, date: new Date('Tue, 5 Apr 2022 12:26:00 UTC') },
              { value: 73000, date: new Date('Tue, 5 Apr 2022 12:26:00 UTC') },
              { value: 73000, date: new Date('Tue, 5 Apr 2022 12:30:00 UTC') },
            ]}
            color={Colors.Charts.Threshold.Warning.Default}
            label="ThresholdIndicator 1"
          />
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
      <div>
        <h4>Dynamic range</h4>
        <TimeseriesChart data={mockTimeseriesThreshold}>
          {/* highlight-start */}
          <TimeseriesChart.ThresholdIndicator
            data={[
              {
                min: 8000,
                max: 42000,
                date: new Date('Tue, 5 Apr 2022 12:25:00 UTC'),
              },
              {
                min: 33000,
                max: 67000,
                date: new Date('Tue, 5 Apr 2022 12:28:00 UTC'),
              },
            ]}
            color={Colors.Charts.Threshold.Bad.Default}
            label="ThresholdIndicator 1"
          />
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
      <div>
        <h4>Dynamic range stroke only</h4>
        <TimeseriesChart data={mockTimeseriesThreshold}>
          {/* highlight-start */}
          <TimeseriesChart.ThresholdIndicator
            data={[
              {
                min: 33000,
                max: 67000,
                date: new Date('Tue, 5 Apr 2022 12:25:00 UTC'),
              },
              {
                min: 8000,
                max: 42000,
                date: new Date('Tue, 5 Apr 2022 12:28:00 UTC'),
              },
            ]}
            color={Colors.Charts.Threshold.Good.Default}
            label="ThresholdIndicator 1"
            strokeOnly
          />
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
    </>
  );
};
```

There is no limit defined for the number of threshold ranges or points that can be used in a single `TimeseriesChart`.

By default, thresholds are positioned on the left axis and with the use of the `position` prop, we can place thresholds on the right axis or on both, as depicted below.

### Threshold positions

**ThresholdPositions**

```tsx
import {
  mockTimeseriesThreshold,
  mockTimeseriesThresholdDualAxis,
} from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const ThresholdPositions = () => {
  return (
    <>
      <div>
        <h4>Left axis</h4>
        <TimeseriesChart data={mockTimeseriesThreshold}>
          {/* highlight-start */}
          <TimeseriesChart.ThresholdIndicator
            data={{ min: 0, max: 18000 }}
            color={Colors.Charts.Threshold.Good.Default}
            label="ThresholdIndicator 1"
          />
          <TimeseriesChart.ThresholdIndicator
            data={{ value: 33000 }}
            color={Colors.Charts.Threshold.Good.Default}
            label="ThresholdIndicator 2"
          />
          <TimeseriesChart.ThresholdIndicator
            data={{ value: 45000 }}
            color={Colors.Charts.Threshold.Warning.Default}
            label="ThresholdIndicator 3"
          />
          <TimeseriesChart.ThresholdIndicator
            data={{ min: 59000, max: 77000 }}
            color={Colors.Charts.Threshold.Bad.Default}
            label="ThresholdIndicator 4"
            strokeOnly
          />
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
      <div>
        <h4>Right axis</h4>
        <TimeseriesChart data={mockTimeseriesThresholdDualAxis}>
          {/* highlight-start */}
          <TimeseriesChart.ThresholdIndicator
            data={{ min: 0, max: 15 }}
            color={Colors.Charts.Threshold.Good.Default}
            position="right"
            label="ThresholdIndicator 1"
          />
          <TimeseriesChart.ThresholdIndicator
            data={{ value: 22 }}
            color={Colors.Charts.Threshold.Good.Default}
            position="right"
            label="ThresholdIndicator 2"
          />
          <TimeseriesChart.ThresholdIndicator
            data={{ value: 32 }}
            color={Colors.Charts.Threshold.Warning.Default}
            position="right"
            label="ThresholdIndicator 3"
          />
          <TimeseriesChart.ThresholdIndicator
            data={{ min: 42, max: 59 }}
            color={Colors.Charts.Threshold.Bad.Default}
            position="right"
            label="ThresholdIndicator 4"
            strokeOnly
          />
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
      <div>
        <h4>Dual axis</h4>
        <TimeseriesChart data={mockTimeseriesThresholdDualAxis}>
          {/* highlight-start */}
          {/* Left */}
          <TimeseriesChart.ThresholdIndicator
            data={[
              { value: 32000, date: new Date('Tue, 5 Apr 2022 12:22:00 UTC') },
              { value: 46000, date: new Date('Tue, 5 Apr 2022 12:22:00 UTC') },
              { value: 46000, date: new Date('Tue, 5 Apr 2022 12:26:00 UTC') },
              { value: 55000, date: new Date('Tue, 5 Apr 2022 12:26:00 UTC') },
              { value: 55000, date: new Date('Tue, 5 Apr 2022 12:30:00 UTC') },
            ]}
            color={Colors.Charts.Threshold.Warning.Default}
            strokeOnly
            label="ThresholdIndicator 1"
          />
          <TimeseriesChart.ThresholdIndicator
            data={[
              {
                min: 53000,
                max: 65000,
                date: new Date('Tue, 5 Apr 2022 12:30:00 UTC'),
              },
              {
                min: 53000,
                max: 77000,
                date: new Date('Tue, 5 Apr 2022 12:30:00 UTC'),
              },
              {
                min: 53000,
                max: 77000,
                date: new Date('Tue, 5 Apr 2022 12:31:00 UTC'),
              },
              {
                min: 65000,
                max: 77000,
                date: new Date('Tue, 5 Apr 2022 12:31:00 UTC'),
              },
            ]}
            color={Colors.Charts.Threshold.Bad.Default}
            label="ThresholdIndicator 2"
          />
          {/* Right */}
          <TimeseriesChart.ThresholdIndicator
            data={{ min: 0, max: 18 }}
            color={Colors.Charts.Threshold.Good.Default}
            position="right"
            label="ThresholdIndicator 3"
          />
          <TimeseriesChart.ThresholdIndicator
            data={{ value: 45 }}
            color={Colors.Charts.Threshold.Good.Default}
            position="right"
            label="ThresholdIndicator 4"
          />
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
    </>
  );
};
```
