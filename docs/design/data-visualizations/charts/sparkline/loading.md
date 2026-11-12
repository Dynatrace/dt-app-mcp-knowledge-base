## Loading

**Loading**

```tsx
import { Sparkline } from '@dynatrace/strato-components/charts';
import type { Timeseries } from '@dynatrace/strato-components/charts';
import { Grid } from '@dynatrace/strato-components/layouts';

const profitAndLoss: Timeseries[] = [
  {
    name: ['P&L 2024'],
    unit: '$',
    datapoints: [
      { start: new Date('Wed, 31 Jan 2024 12:00:00 UTC'), value: 1000 },
      { start: new Date('Thu, 01 Feb 2024 12:00:00 UTC'), value: -500 },
      { start: new Date('Fri, 02 Feb 2024 12:00:00 UTC'), value: 1500 },
      { start: new Date('Sat, 03 Feb 2024 12:00:00 UTC'), value: -200 },
      { start: new Date('Sun, 04 Feb 2024 12:00:00 UTC'), value: 800 },
      { start: new Date('Mon, 05 Feb 2024 12:00:00 UTC'), value: -1000 },
      { start: new Date('Tue, 06 Feb 2024 12:00:00 UTC'), value: 2200 },
      { start: new Date('Wed, 07 Feb 2024 12:00:00 UTC'), value: -300 },
      { start: new Date('Thu, 08 Feb 2024 12:00:00 UTC'), value: 1700 },
      { start: new Date('Fri, 09 Feb 2024 12:00:00 UTC'), value: -800 },
      { start: new Date('Sat, 10 Feb 2024 12:00:00 UTC'), value: 1900 },
      { start: new Date('Sun, 11 Feb 2024 12:00:00 UTC'), value: 2500 },
    ],
  },
];

const Loading = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="100px">
      <Sparkline
        // highlight-next-line
        loading
        data={profitAndLoss}
        variant="line"
      ></Sparkline>
      <Sparkline
        // highlight-next-line
        loading
        data={[]}
        variant="area"
      ></Sparkline>
    </Grid>
  );
};
```
