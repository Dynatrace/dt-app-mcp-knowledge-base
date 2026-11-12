## Thresholds on Sparkline

Thresholds are used to mark meaningful ranges or values on a `Sparkline` and they add contextual information to a numerical axis. There are two variants of thresholds:

- a specific point represented by a line across.
- a range - or filled area - represented by a band across.

### Point and range

**ThresholdsPointAndRange**

```tsx
import { Sparkline } from '@dynatrace/strato-components/charts';
import type { Timeseries } from '@dynatrace/strato-components/charts';
import { Grid } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const dqlDailyConsumption: Timeseries[] = [
  {
    name: ['Query consumption (daily)'],
    unit: 'byte',
    datapoints: [
      {
        start: new Date('Wed, 22 Mar 2022 12:00:00 UTC'),
        value: 13434958904392,
      },
      {
        start: new Date('Thu, 23 Mar 2022 12:00:00 UTC'),
        value: 129555269807371,
      },
      {
        start: new Date('Fri, 24 Mar 2022 12:00:00 UTC'),
        value: 74177850880590,
      },
      {
        start: new Date('Sat, 25 Mar 2022 12:00:00 UTC'),
        value: 17093181745425,
      },
      {
        start: new Date('Sun, 26 Mar 2022 12:00:00 UTC'),
        value: 19759456522319,
      },
      {
        start: new Date('Mon, 27 Mar 2022 12:00:00 UTC'),
        value: 18476705862193,
      },
      {
        start: new Date('Tue, 28 Mar 2022 12:00:00 UTC'),
        value: 50802712767958,
      },
      {
        start: new Date('Wed, 29 Mar 2022 12:00:00 UTC'),
        value: 47399148818472,
      },
      {
        start: new Date('Thu, 30 Mar 2022 12:00:00 UTC'),
        value: 69998524642349,
      },
      {
        start: new Date('Fri, 31 Mar 2022 12:00:00 UTC'),
        value: 65220128307956,
      },
      {
        start: new Date('Sat, 01 Apr 2022 12:00:00 UTC'),
        value: 163826554173848,
      },
      {
        start: new Date('Sun, 02 Apr 2022 12:00:00 UTC'),
        value: 21287878833288,
      },
      {
        start: new Date('Mon, 03 Apr 2022 12:00:00 UTC'),
        value: 58530940427445,
      },
      {
        start: new Date('Tue, 04 Apr 2022 12:00:00 UTC'),
        value: 321016424029719,
      },
    ],
  },
];

const ThresholdsPointAndRange = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="100px">
      <Sparkline data={dqlDailyConsumption}>
        {/* highlight-start */}
        <Sparkline.ThresholdIndicator
          data={{ value: 65220128307956 }}
          color={Colors.Charts.Threshold.Good.Default}
        />
        {/* highlight-end */}
      </Sparkline>
      <Sparkline data={dqlDailyConsumption}>
        {/* highlight-start */}
        <Sparkline.ThresholdIndicator
          data={[
            {
              min: 163000000000000,
              max: 69000000000000,
              date: new Date('Sun, 26 Mar 2022 12:00:00 UTC'),
            },
            {
              min: 163000000000000,
              max: 69000000000000,
              date: new Date('Sun, 30 Mar 2022 12:00:00 UTC'),
            },
          ]}
          color={Colors.Charts.Threshold.Bad.Default}
        />
        {/* highlight-end */}
      </Sparkline>
    </Grid>
  );
};
```

Both point and range can be represented by static or dynamic data sources. A static data source has a single value representing a point or a single key-value pair representing a fixed range. A dynamic data source has a data array containing more than one value or various key-value pairs.

There are three different types of threshold markers:

- Range filled, where the value range is defined in order to display the threshold band. The upper and lower lines are not drawn.

- Range stroke-only variant, where a value range is defined in order to display the threshold band represented by upper and lower dashed lines.

- Point, where only one value is required to display the threshold. It's represented by a dashed line.

### Dynamic point and dynamic range

**ThresholdsDynamicPointAndDynamicRange**

```tsx
import { Sparkline } from '@dynatrace/strato-components/charts';
import type { Timeseries } from '@dynatrace/strato-components/charts';
import { Grid } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const dqlDailyConsumption: Timeseries[] = [
  {
    name: ['Query consumption (daily)'],
    unit: 'byte',
    datapoints: [
      {
        start: new Date('Wed, 22 Mar 2022 12:00:00 UTC'),
        value: 13434958904392,
      },
      {
        start: new Date('Thu, 23 Mar 2022 12:00:00 UTC'),
        value: 129555269807371,
      },
      {
        start: new Date('Fri, 24 Mar 2022 12:00:00 UTC'),
        value: 74177850880590,
      },
      {
        start: new Date('Sat, 25 Mar 2022 12:00:00 UTC'),
        value: 17093181745425,
      },
      {
        start: new Date('Sun, 26 Mar 2022 12:00:00 UTC'),
        value: 19759456522319,
      },
      {
        start: new Date('Mon, 27 Mar 2022 12:00:00 UTC'),
        value: 18476705862193,
      },
      {
        start: new Date('Tue, 28 Mar 2022 12:00:00 UTC'),
        value: 50802712767958,
      },
      {
        start: new Date('Wed, 29 Mar 2022 12:00:00 UTC'),
        value: 47399148818472,
      },
      {
        start: new Date('Thu, 30 Mar 2022 12:00:00 UTC'),
        value: 69998524642349,
      },
      {
        start: new Date('Fri, 31 Mar 2022 12:00:00 UTC'),
        value: 65220128307956,
      },
      {
        start: new Date('Sat, 01 Apr 2022 12:00:00 UTC'),
        value: 163826554173848,
      },
      {
        start: new Date('Sun, 02 Apr 2022 12:00:00 UTC'),
        value: 21287878833288,
      },
      {
        start: new Date('Mon, 03 Apr 2022 12:00:00 UTC'),
        value: 58530940427445,
      },
      {
        start: new Date('Tue, 04 Apr 2022 12:00:00 UTC'),
        value: 321016424029719,
      },
    ],
  },
];

const ThresholdsDynamicPointAndDynamicRange = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="100px">
      <Sparkline data={dqlDailyConsumption}>
        {/* highlight-start */}
        <Sparkline.ThresholdIndicator
          data={[
            {
              value: 200000000000000,
              date: new Date('Sun, 26 Mar 2022 12:00:00 UTC'),
            },
            {
              value: 50000000000000,
              date: new Date('Thu, 30 Mar 2022 12:00:00 UTC'),
            },
          ]}
          color={Colors.Charts.Threshold.Good.Default}
        />
        {/* highlight-end */}
      </Sparkline>
      <Sparkline data={dqlDailyConsumption}>
        {/* highlight-start */}
        <Sparkline.ThresholdIndicator
          data={[
            {
              min: 50000000000000,
              max: 150000000000000,
              date: new Date('Sun, 26 Mar 2022 12:00:00 UTC'),
            },
            {
              min: 200000000000000,
              max: 300000000000000,
              date: new Date('Thu, 30 Mar 2022 12:00:00 UTC'),
            },
          ]}
          color={Colors.Charts.Threshold.Good.Default}
        />
        {/* highlight-end */}
      </Sparkline>
    </Grid>
  );
};
```

### Dynamic range stroke only and static ranges

**ThresholdsDynamicRangeStrokeOnlyAndStaticRanges**

```tsx
import { Sparkline } from '@dynatrace/strato-components/charts';
import type { Timeseries } from '@dynatrace/strato-components/charts';
import { Grid } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const dqlDailyConsumption: Timeseries[] = [
  {
    name: ['Query consumption (daily)'],
    unit: 'byte',
    datapoints: [
      {
        start: new Date('Wed, 22 Mar 2022 12:00:00 UTC'),
        value: 13434958904392,
      },
      {
        start: new Date('Thu, 23 Mar 2022 12:00:00 UTC'),
        value: 129555269807371,
      },
      {
        start: new Date('Fri, 24 Mar 2022 12:00:00 UTC'),
        value: 74177850880590,
      },
      {
        start: new Date('Sat, 25 Mar 2022 12:00:00 UTC'),
        value: 17093181745425,
      },
      {
        start: new Date('Sun, 26 Mar 2022 12:00:00 UTC'),
        value: 19759456522319,
      },
      {
        start: new Date('Mon, 27 Mar 2022 12:00:00 UTC'),
        value: 18476705862193,
      },
      {
        start: new Date('Tue, 28 Mar 2022 12:00:00 UTC'),
        value: 50802712767958,
      },
      {
        start: new Date('Wed, 29 Mar 2022 12:00:00 UTC'),
        value: 47399148818472,
      },
      {
        start: new Date('Thu, 30 Mar 2022 12:00:00 UTC'),
        value: 69998524642349,
      },
      {
        start: new Date('Fri, 31 Mar 2022 12:00:00 UTC'),
        value: 65220128307956,
      },
      {
        start: new Date('Sat, 01 Apr 2022 12:00:00 UTC'),
        value: 163826554173848,
      },
      {
        start: new Date('Sun, 02 Apr 2022 12:00:00 UTC'),
        value: 21287878833288,
      },
      {
        start: new Date('Mon, 03 Apr 2022 12:00:00 UTC'),
        value: 58530940427445,
      },
      {
        start: new Date('Tue, 04 Apr 2022 12:00:00 UTC'),
        value: 321016424029719,
      },
    ],
  },
];

const ThresholdsDynamicRangeStrokeOnlyAndStaticRanges = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="100px">
      <Sparkline data={dqlDailyConsumption}>
        <Sparkline.ThresholdIndicator
          data={[
            {
              min: 300000000000000,
              max: 200000000000000,
              date: new Date('Sun, 26 Mar 2022 12:00:00 UTC'),
            },
            {
              min: 150000000000000,
              max: 50000000000000,
              date: new Date('Sun, 30 Mar 2022 12:00:00 UTC'),
            },
          ]}
          color={Colors.Charts.Threshold.Good.Default}
          // highlight-next-line
          strokeOnly
        />
      </Sparkline>
      <Sparkline data={dqlDailyConsumption}>
        <Sparkline.ThresholdIndicator
          data={{ min: 0, max: 100000000000000 }}
          color={Colors.Charts.Threshold.Good.Default}
        />
        <Sparkline.ThresholdIndicator
          data={{ min: 100000000000000, max: 200000000000000 }}
          color={Colors.Charts.Threshold.Warning.Default}
        />
        <Sparkline.ThresholdIndicator
          data={{ min: 200000000000000, max: 300000000000000 }}
          color={Colors.Charts.Threshold.Bad.Default}
        />
      </Sparkline>
    </Grid>
  );
};
```

### Point and range with area variant

**ThresholdsPointsAndRangesAreaVariant**

```tsx
import { Sparkline } from '@dynatrace/strato-components/charts';
import type { Timeseries } from '@dynatrace/strato-components/charts';
import { Grid } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const dqlDailyConsumption: Timeseries[] = [
  {
    name: ['Query consumption (daily)'],
    unit: 'byte',
    datapoints: [
      {
        start: new Date('Wed, 22 Mar 2022 12:00:00 UTC'),
        value: 13434958904392,
      },
      {
        start: new Date('Thu, 23 Mar 2022 12:00:00 UTC'),
        value: 129555269807371,
      },
      {
        start: new Date('Fri, 24 Mar 2022 12:00:00 UTC'),
        value: 74177850880590,
      },
      {
        start: new Date('Sat, 25 Mar 2022 12:00:00 UTC'),
        value: 17093181745425,
      },
      {
        start: new Date('Sun, 26 Mar 2022 12:00:00 UTC'),
        value: 19759456522319,
      },
      {
        start: new Date('Mon, 27 Mar 2022 12:00:00 UTC'),
        value: 18476705862193,
      },
      {
        start: new Date('Tue, 28 Mar 2022 12:00:00 UTC'),
        value: 50802712767958,
      },
      {
        start: new Date('Wed, 29 Mar 2022 12:00:00 UTC'),
        value: 47399148818472,
      },
      {
        start: new Date('Thu, 30 Mar 2022 12:00:00 UTC'),
        value: 69998524642349,
      },
      {
        start: new Date('Fri, 31 Mar 2022 12:00:00 UTC'),
        value: 65220128307956,
      },
      {
        start: new Date('Sat, 01 Apr 2022 12:00:00 UTC'),
        value: 163826554173848,
      },
      {
        start: new Date('Sun, 02 Apr 2022 12:00:00 UTC'),
        value: 21287878833288,
      },
      {
        start: new Date('Mon, 03 Apr 2022 12:00:00 UTC'),
        value: 58530940427445,
      },
      {
        start: new Date('Tue, 04 Apr 2022 12:00:00 UTC'),
        value: 321016424029719,
      },
    ],
  },
];

const ThresholdsPointsAndRangesAreaVariant = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="100px">
      <Sparkline
        data={dqlDailyConsumption}
        // highlight-next-line
        variant="area"
        color={Colors.Charts.Categorical.Color03.Default}
        showTicks
      >
        <Sparkline.ThresholdIndicator
          data={{ value: 300000000000000 }}
          color={Colors.Charts.Threshold.Bad.Default}
        />
        <Sparkline.ThresholdIndicator
          data={{ value: 200000000000000 }}
          color={Colors.Charts.Threshold.Warning.Default}
        />
        <Sparkline.ThresholdIndicator
          data={{ value: 100000000000000 }}
          color={Colors.Charts.Threshold.Warning.Default}
        />
        <Sparkline.ThresholdIndicator
          data={{ value: 20000000000000 }}
          color={Colors.Charts.Threshold.Good.Default}
        />
      </Sparkline>
      <Sparkline
        data={dqlDailyConsumption}
        // highlight-next-line
        variant="area"
        color={Colors.Charts.Categorical.Color08.Default}
        showTicks
      >
        <Sparkline.ThresholdIndicator
          data={{ min: 150000000000000, max: 300000000000000 }}
          color={Colors.Charts.Threshold.Good.Default}
        />
      </Sparkline>
    </Grid>
  );
};
```
