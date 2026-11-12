## Variants

The `Sparkline` has three variants and can be displayed as a `line` (default), `area`, or `bar`. It is important to note that not all features and props apply to all variants equally, for example curve has no effect in `bar` variant, and scale has effect only in `bar` variant

**Variants**

```tsx
import type { Timeseries } from '@dynatrace/strato-components/charts';
import { Sparkline } from '@dynatrace/strato-components/charts';
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

const Variants = () => {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gridAutoRows="100px">
      <Sparkline
        data={dqlDailyConsumption}
        // highlight-next-line
        variant="line"
        color={Colors.Charts.Categorical.Color03.Default}
      ></Sparkline>
      <Sparkline
        data={dqlDailyConsumption}
        // highlight-next-line
        variant="area"
        color={Colors.Charts.Categorical.Color08.Default}
        showTicks
      ></Sparkline>
      <Sparkline
        data={dqlDailyConsumption}
        // highlight-next-line
        variant="bar"
        color={Colors.Charts.Categorical.Color05.Default}
        showTicks
      ></Sparkline>
    </Grid>
  );
};
```
