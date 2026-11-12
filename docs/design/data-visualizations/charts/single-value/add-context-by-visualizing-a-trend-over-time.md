## Add context by visualizing a trend over time

In its most basic configuration a `SingleValue` displays exactly that, a single value. In most use cases, however, a numerical value changes over time. In order to add additional context to the value being displayed and its change over time an optional `sparkline` can be added to the `SingleValue` visualization.

### Sparkline

In order to display a `Sparkline` within the `SingleValue` component you need to add the `<Sparkline />` subcomponent to the `SingleValue` chart. The `Sparkline` component requires data of type `Timeseries` or `Timeseries[]` to be passed to the `data` prop. If more than one series is provided, the first one is used. The datapoints within the series need to provide a time dimension as well as a numerical value.

The `Sparkline` has three variants and can be either displayed as a `line`(default), `area` or `bar`.

You can further customise the `Sparkline` by setting its `color` prop to any of the `Design System ColorPalette`.

Lastly, x-axis ticks can be visualized on the `Sparkline` by using the `showTicks` prop. By default, these ticks are hidden.

**AddSparkline**

```tsx
import { SingleValue } from '@dynatrace/strato-components/charts';
import type { Timeseries } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const cpuUsage: Timeseries[] = [
  {
    name: ['pl1l-vh48.example.com', 'HYPERVISOR-CC7CFC844F787622'],
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
    ],
  },
  {
    name: ['pl1l-vh93.example.com', 'HYPERVISOR-610F030E04740015'],
    unit: 'percent',
    datapoints: [
      {
        start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
        end: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        value: 23.2,
      },
      {
        start: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        end: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
        value: 25.54,
      },
      {
        start: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
        end: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
        value: 21.88,
      },
      {
        start: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
        end: new Date('Tue, 03 May 2022 12:22:00 UTC'),
        value: 24.62,
      },
      {
        start: new Date('Tue, 03 May 2022 12:22:00 UTC'),
        end: new Date('Tue, 10 May 2022 12:23:00 UTC'),
        value: 40,
      },
      {
        start: new Date('Tue, 10 May 2022 12:23:00 UTC'),
        end: new Date('Tue, 17 May 2022 12:24:00 UTC'),
        value: 42.99,
      },
      {
        start: new Date('Tue, 17 May 2022 12:24:00 UTC'),
        end: new Date('Tue, 24 May 2022 12:25:00 UTC'),
        value: 33.4,
      },
      {
        start: new Date('Tue, 24 May 2022 12:25:00 UTC'),
        end: new Date('Tue, 24 May 2022 12:26:00 UTC'),
        value: 12.15,
      },
      {
        start: new Date('Tue, 24 May 2022 12:26:00 UTC'),
        end: new Date('Tue, 31 May 2022 12:27:00 UTC'),
        value: 23,
      },
      {
        start: new Date('Tue, 31 May 2022 12:27:00 UTC'),
        end: new Date('Tue, 07 Jun 2022 12:28:00 UTC'),
        value: 35.65,
      },
    ],
  },
  {
    name: ['pl1i-vh41.example.com', 'HYPERVISOR-CC7EFC844F606622'],
    unit: 'percent',
    datapoints: [
      {
        start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
        end: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        value: 36.84,
      },
      {
        start: new Date('Tue, 12 Apr 2022 12:19:00 UTC'),
        end: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
        value: 31.77,
      },
      {
        start: new Date('Tue, 19 Apr 2022 12:20:00 UTC'),
        end: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
        value: 79.15,
      },
      {
        start: new Date('Tue, 26 Apr 2022 12:21:00 UTC'),
        end: new Date('Tue, 03 May 2022 12:22:00 UTC'),
        value: 2.1,
      },
      {
        start: new Date('Tue, 03 May 2022 12:22:00 UTC'),
        end: new Date('Tue, 10 May 2022 12:23:00 UTC'),
        value: 2.68,
      },
      {
        start: new Date('Tue, 10 May 2022 12:23:00 UTC'),
        end: new Date('Tue, 17 May 2022 12:24:00 UTC'),
        value: 1.18,
      },
      {
        start: new Date('Tue, 17 May 2022 12:24:00 UTC'),
        end: new Date('Tue, 24 May 2022 12:25:00 UTC'),
        value: 77.79,
      },
      {
        start: new Date('Tue, 24 May 2022 12:25:00 UTC'),
        end: new Date('Tue, 24 May 2022 12:26:00 UTC'),
        value: 1.56,
      },
      {
        start: new Date('Tue, 24 May 2022 12:26:00 UTC'),
        end: new Date('Tue, 31 May 2022 12:27:00 UTC'),
        value: 69.07,
      },
      {
        start: new Date('Tue, 31 May 2022 12:27:00 UTC'),
        end: new Date('Tue, 07 Jun 2022 12:28:00 UTC'),
        value: 66.87,
      },
    ],
  },
];

const AddSparkline = () => {
  return (
    <div
      style={{
        outline: 'solid 1px black',
        outlineOffset: '1px',
        width: '600px',
        height: '200px',
      }}
    >
      <SingleValue data="HOST-1CB78E6BCE1E768C">
        {/* highlight-start */}
        <SingleValue.Sparkline
          data={cpuUsage}
          variant="area"
          color={Colors.Charts.Categorical.Color03.Default}
        />
        {/* highlight-end */}
      </SingleValue>
    </div>
  );
};
```
