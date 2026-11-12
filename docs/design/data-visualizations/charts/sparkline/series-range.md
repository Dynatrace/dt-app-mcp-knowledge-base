## Series range

The `Sparkline` component supports `curve` prop **only** in the line and area variant. By default, this value is set to `linear` showing sharp corners in the joins of the lines. It can also be set to `smooth` providing a continuous curve.

**SeriesCurve**

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

const SeriesCurve = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="100px">
      <Sparkline
        data={dqlDailyConsumption}
        variant="line"
        // highlight-next-line
        curve="smooth"
        color={Colors.Charts.Categorical.Color03.Default}
      ></Sparkline>
      <Sparkline
        data={dqlDailyConsumption}
        variant="area"
        // highlight-next-line
        curve="smooth"
        color={Colors.Charts.Categorical.Color08.Default}
      ></Sparkline>
    </Grid>
  );
};
```
