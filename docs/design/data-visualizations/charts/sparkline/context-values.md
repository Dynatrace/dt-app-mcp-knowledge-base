## Context values

The Sparkline provides the `showContextValues` prop which allows to display indicators with labels showing the maximum and minimum values of the provided data. The indicators will highlight both the maximum and minimum value of the dataset.

If you provide a custom `YAxis`, the context values will only be visible if they are within your custom `Axis` minimum and maximum value.

**ContextValues**

```tsx
import type { Timeseries } from '@dynatrace/strato-components/charts';
import { Sparkline } from '@dynatrace/strato-components/charts';
import { Grid } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const cpuUsage: Timeseries = {
  name: ['pl1l-vh48.example.com', 'HYPERVISOR-CC7CFC844F787622', 'eu-zone-2'],
  unit: 'percent',
  datapoints: [
    {
      start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
      end: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
      value: 51,
    },
    {
      start: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
      end: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
      value: 49.29,
    },
    {
      start: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
      end: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
      value: 51.98,
    },
    {
      start: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
      end: new Date('Tue, 03 May 2022 12:22:00 UTC'),
      value: 40.14,
    },
    {
      start: new Date('Tue, 03 May 2022 12:22:00 UTC'),
      end: new Date('Tue, 10 May 2022 12:23:00 UTC'),
      value: 46.71,
    },
    {
      start: new Date('Tue, 10 May 2022 12:23:00 UTC'),
      end: new Date('Tue, 17 May 2022 12:24:00 UTC'),
      value: 33.81,
    },
    {
      start: new Date('Tue, 17 May 2022 12:24:00 UTC'),
      end: new Date('Tue, 24 May 2022 12:25:00 UTC'),
      value: 41.57,
    },
    {
      start: new Date('Tue, 24 May 2022 12:25:00 UTC'),
      end: new Date('Tue, 24 May 2022 12:26:00 UTC'),
      value: 40.33,
    },
    {
      start: new Date('Tue, 24 May 2022 12:26:00 UTC'),
      end: new Date('Tue, 31 May 2022 12:27:00 UTC'),
      value: 43.63,
    },
    {
      start: new Date('Tue, 31 May 2022 12:27:00 UTC'),
      end: new Date('Tue, 07 Jun 2022 12:28:00 UTC'),
      value: 44.81,
    },
    {
      start: new Date('Tue, 07 Jun 2022 12:28:00 UTC'),
      end: new Date('Tue, 14 Jun 2022 12:29:00 UTC'),
      value: 55.27,
    },
    {
      start: new Date('Tue, 14 Jun 2022 12:29:00 UTC'),
      end: new Date('Tue, 21 Jun 2022 12:30:00 UTC'),
      value: 48.31,
    },
    {
      start: new Date('Tue, 21 Jun 2022 12:30:00 UTC'),
      end: new Date('Tue, 28 Jun 2022 12:31:00 UTC'),
      value: 39.95,
    },
    {
      start: new Date('Tue, 28 Jun 2022 12:31:00 UTC'),
      end: new Date('Tue, 05 Jul 2022 12:32:00 UTC'),
      value: 51.87,
    },
    {
      start: new Date('Tue, 05 Jul 2022 12:32:00 UTC'),
      end: new Date('Tue, 12 Jul 2022 12:33:00 UTC'),
      value: 44.49,
    },
    {
      start: new Date('Tue, 12 Jul 2022 12:33:00 UTC'),
      end: new Date('Tue, 19 Jul 2022 12:34:00 UTC'),
      value: 53.53,
    },
    {
      start: new Date('Tue, 19 Jul 2022 12:34:00 UTC'),
      end: new Date('Tue, 26 Jul 2022 12:35:00 UTC'),
      value: 56.32,
    },
    {
      start: new Date('Tue, 26 Jul 2022 12:35:00 UTC'),
      end: new Date('Tue, 02 Aug 2022 12:36:00 UTC'),
      value: 47.92,
    },
    {
      start: new Date('Tue, 02 Aug 2022 12:36:00 UTC'),
      end: new Date('Tue, 09 Aug 2022 12:37:00 UTC'),
      value: 38.65,
    },
    {
      start: new Date('Tue, 09 Aug 2022 12:37:00 UTC'),
      end: new Date('Tue, 16 Aug 2022 12:38:00 UTC'),
      value: 50.96,
    },
    {
      start: new Date('Tue, 16 Aug 2022 12:38:00 UTC'),
      end: new Date('Tue, 23 Aug 2022 12:39:00 UTC'),
      value: 55.08,
    },
    {
      start: new Date('Tue, 23 Aug 2022 12:39:00 UTC'),
      end: new Date('Tue, 30 Aug 2022 12:40:00 UTC'),
      value: 38.88,
    },
    {
      start: new Date('Tue, 30 Aug 2022 12:40:00 UTC'),
      end: new Date('Tue, 06 Sep 2022 12:41:00 UTC'),
      value: 48.59,
    },
    {
      start: new Date('Tue, 06 Sep 2022 12:41:00 UTC'),
      end: new Date('Tue, 13 Sep 2022 12:42:00 UTC'),
      value: 43.76,
    },
    {
      start: new Date('Tue, 13 Sep 2022 12:42:00 UTC'),
      end: new Date('Tue, 20 Sep 2022 12:43:00 UTC'),
      value: 46.01,
    },
  ],
};
const negativeValues: Timeseries = {
  name: 'Home loan',
  unit: '€',
  datapoints: [
    {
      start: new Date('Mon, 31 Jan 2021 23:00:00 UTC'),
      end: new Date('Mon, 28 Feb 2021 23:00:00 UTC'),
      value: -15300,
    },
    {
      start: new Date('Mon, 28 Feb 2021 23:00:00 UTC'),
      end: new Date('Mon, 28 Mar 2021 23:00:00 UTC'),
      value: -14025,
    },
    {
      start: new Date('Mon, 28 Mar 2021 23:00:00 UTC'),
      end: new Date('Mon, 25 Apr 2021 23:00:00 UTC'),
      value: -12750,
    },
    {
      start: new Date('Mon, 25 Apr 2021 23:00:00 UTC'),
      end: new Date('Mon, 23 May 2021 23:00:00 UTC'),
      value: -11475,
    },
    {
      start: new Date('Mon, 23 May 2021 23:00:00 UTC'),
      end: new Date('Mon, 20 Jun 2021 23:00:00 UTC'),
      value: -10200,
    },
    {
      start: new Date('Mon, 20 Jun 2021 23:00:00 UTC'),
      end: new Date('Mon, 18 Jul 2021 23:00:00 UTC'),
      value: -8925,
    },
    {
      start: new Date('Mon, 18 Jul 2021 23:00:00 UTC'),
      end: new Date('Mon, 15 Aug 2021 23:00:00 UTC'),
      value: -7650,
    },
    {
      start: new Date('Mon, 15 Aug 2021 23:00:00 UTC'),
      end: new Date('Mon, 12 Sep 2021 23:00:00 UTC'),
      value: -6375,
    },
    {
      start: new Date('Mon, 12 Sep 2021 23:00:00 UTC'),
      end: new Date('Mon, 10 Oct 2021 23:00:00 UTC'),
      value: -5100,
    },
    {
      start: new Date('Mon, 10 Oct 2021 23:00:00 UTC'),
      end: new Date('Mon, 07 Nov 2021 23:00:00 UTC'),
      value: -3825,
    },
    {
      start: new Date('Mon, 07 Nov 2021 23:00:00 UTC'),
      end: new Date('Mon, 05 Dec 2021 23:00:00 UTC'),
      value: -2550,
    },
    {
      start: new Date('Mon, 05 Dec 2021 23:00:00 UTC'),
      end: new Date('Mon, 02 Jan 2022 23:00:00 UTC'),
      value: -1275,
    },
    {
      start: new Date('Mon, 27 Mar 2022 23:00:00 UTC'),
      end: new Date('Mon, 24 Apr 2022 23:00:00 UTC'),
      value: -5000,
    },
    {
      start: new Date('Mon, 24 Apr 2022 23:00:00 UTC'),
      end: new Date('Mon, 22 May 2022 23:00:00 UTC'),
      value: -3750,
    },
    {
      start: new Date('Mon, 22 May 2022 23:00:00 UTC'),
      end: new Date('Mon, 19 Jun 2022 23:00:00 UTC'),
      value: -2500,
    },
    {
      start: new Date('Mon, 19 Jun 2022 23:00:00 UTC'),
      end: new Date('Mon, 17 Jul 2022 23:00:00 UTC'),
      value: -1250,
    },
  ],
};
const profitAndLoss: Timeseries = {
  name: ['P&L 2024'],
  unit: '$',
  datapoints: [
    { start: new Date('Wed, 31 Jan 2024 12:00:00 UTC'), value: 1000 },
    { start: new Date('Wed, 29 Feb 2024 12:00:00 UTC'), value: -500 },
    { start: new Date('Sun, 31 Mar 2024 12:00:00 UTC'), value: 1500 },
    { start: new Date('Tue, 30 Apr 2024 12:00:00 UTC'), value: -200 },
    { start: new Date('Fri, 31 May 2024 12:00:00 UTC'), value: 800 },
    { start: new Date('Sun, 30 Jun 2024 12:00:00 UTC'), value: -1000 },
    { start: new Date('Wed, 31 Jul 2024 12:00:00 UTC'), value: 2200 },
    { start: new Date('Sat, 31 Aug 2024 12:00:00 UTC'), value: -300 },
    { start: new Date('Mon, 30 Sep 2024 12:00:00 UTC'), value: 1700 },
    { start: new Date('Thu, 31 Oct 2024 12:00:00 UTC'), value: -800 },
    { start: new Date('Sat, 30 Nov 2024 12:00:00 UTC'), value: 1900 },
    { start: new Date('Tue, 31 Dec 2024 12:00:00 UTC'), value: 2500 },
  ],
};

const ContextValues = () => {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gridAutoRows="100px">
      <Sparkline
        data={cpuUsage}
        color={Colors.Charts.Categorical.Color03.Default}
        // highlight-next-line
        showContextValues={true}
      ></Sparkline>
      <Sparkline
        data={negativeValues}
        color={Colors.Charts.Categorical.Color05.Default}
        // highlight-next-line
        showContextValues={true}
      ></Sparkline>
      <Sparkline
        data={profitAndLoss}
        color={Colors.Charts.Categorical.Color07.Default}
        // highlight-next-line
        showContextValues={true}
      >
        <Sparkline.YAxis min={-1000} max={2500} />
      </Sparkline>
    </Grid>
  );
};
```
