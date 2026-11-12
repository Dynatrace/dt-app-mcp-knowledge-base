## Gap policy

Gaps in data refer to missing or unrepresented values between existing data points. In a dataset exclusively with timestamps, no continuity can be determined and therefore there are always “gaps” between data points regardless of the resolution of the dataset. In a timeframe dataset however, gaps are considered when the end timestamp of the previous data point is earlier than the start timestamp of the next data point, meaning there is a timespan between the end of a previous data point and the next one with no given value.

The Sparkline provides the `gapPolicy` prop to configure how gaps are visualized in a chart. There are two `gapPolicy` options available: gap, and connect.

- The `gap` option displays gaps on the chart as is (e.g. breaks along a line). This option helps to see the absence of data during a period of time.
- The `connect` option connects consecutive data points irrespective of the gap using linear interpolation.

**GapPolicy**

```tsx
import { Sparkline } from '@dynatrace/strato-components/charts';
import type { Timeseries } from '@dynatrace/strato-components/charts';
import { Grid } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const userInteractions: Timeseries[] = [
  {
    name: ['pl1l-vh48.example.com', 'HYPERVISOR-CC7CFC844F787622'],
    unit: 'count',
    datapoints: [
      {
        start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
        value: 51,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
        value: 49,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
        value: 5,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:22:00 UTC'),
        value: 10,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
        value: 40,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
        value: 43,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
        value: 24,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
        value: 55,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:30:00 UTC'),
        value: 37,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:30:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:31:00 UTC'),
        value: 39,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
        value: 15,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
        value: 56,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
        value: 68,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:37:00 UTC'),
        value: 38,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:39:00 UTC'),
        value: 55,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:39:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:40:00 UTC'),
        value: 38,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:41:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:42:00 UTC'),
        value: 70,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:42:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:43:00 UTC'),
        value: 46,
      },
    ],
  },
];

const GapPolicy = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="100px">
      <Sparkline
        data={userInteractions}
        variant="line"
        color={Colors.Charts.Categorical.Color03.Default}
        // highlight-next-line
        gapPolicy="gap"
      ></Sparkline>
      <Sparkline
        data={userInteractions}
        variant="line"
        color={Colors.Charts.Categorical.Color08.Default}
      ></Sparkline>
    </Grid>
  );
};
```
