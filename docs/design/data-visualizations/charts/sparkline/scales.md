## Scales

The `Sparkline` component supports the Y-axis scale configuration. To configure a scale, the `Sparkline.YAxis` subcomponent should be used. The `Sparkline.YAxis` component requires a `scale` prop to be passed with the two possible options: `linear` (default) or `log`.

**Scales**

```tsx
import { Sparkline } from '@dynatrace/strato-components/charts';
import type { Timeseries } from '@dynatrace/strato-components/charts';
import { Grid } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const requestsPerMinute: Timeseries[] = [
  {
    name: ['Requests per minute'],
    unit: 'count',
    datapoints: [
      { start: new Date('Wed, 01 Jan 2025 12:00:00 UTC'), value: 100 },
      { start: new Date('Wed, 01 Jan 2025 12:01:00 UTC'), value: 200 },
      { start: new Date('Wed, 01 Jan 2025 12:02:00 UTC'), value: 400 },
      { start: new Date('Wed, 01 Jan 2025 12:03:00 UTC'), value: 800 },
      { start: new Date('Wed, 01 Jan 2025 12:04:00 UTC'), value: 1600 },
      { start: new Date('Wed, 01 Jan 2025 12:05:00 UTC'), value: 3200 },
      { start: new Date('Wed, 01 Jan 2025 12:06:00 UTC'), value: 6400 },
      { start: new Date('Wed, 01 Jan 2025 12:07:00 UTC'), value: 12800 },
      { start: new Date('Wed, 01 Jan 2025 12:08:00 UTC'), value: 25600 },
      { start: new Date('Wed, 01 Jan 2025 12:09:00 UTC'), value: 51200 },
    ],
  },
];

const Scales = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="100px">
      <Sparkline
        data={requestsPerMinute}
        variant="bar"
        color={Colors.Charts.Categorical.Color03.Default}
      >
        {/* highlight-next-line */}
        <Sparkline.YAxis scale="linear"></Sparkline.YAxis>
      </Sparkline>
      <Sparkline
        data={requestsPerMinute}
        variant="bar"
        color={Colors.Charts.Categorical.Color08.Default}
      >
        {/* highlight-next-line */}
        <Sparkline.YAxis scale="log"></Sparkline.YAxis>
      </Sparkline>
    </Grid>
  );
};
```
