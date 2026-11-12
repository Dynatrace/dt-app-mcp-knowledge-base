## Shared crosshair

The shared crosshair feature allows you to synchronize the crosshair position across multiple `XYChart` or `Timeseries` instances. This is especially useful for comparing time-based data points across different charts.

To enable crosshair synchronization, wrap the charts you want to synchronize with the `SynchronizationProvider` component.

**Important notes for XYChart:**

- **x-axis Only:** The shared crosshair synchronization only works for the **X axis**. y-axis are not supported.
- **Supported Axis:** The shared crosshair will only synchronize on **visible time axes**. Numerical or categorical axes are not supported for crosshair synchronization.
- **Axis Priority:** If both a bottom and a top time axis are present and visible, the **bottom axis takes priority** for synchronization.
- **Hidden Axes:** Axes marked as `hidden` will not trigger or participate in crosshair synchronization, even if they are of type `time`.

**SharedCrosshair**

```tsx
import {
  SharedChartInteractions,
  type Timeseries,
  TimeseriesChart,
  XYChart,
} from '@dynatrace/strato-components/charts';
import { Surface } from '@dynatrace/strato-components/layouts';

const mockTimeseriesDiskUsage: Timeseries[] = [
  {
    name: ['pl1l-vh48.example.com', 'HYPERVISOR-CC7CFC844F787622'],
    unit: 'byte',
    datapoints: [
      {
        start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
        value: 51004.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
        value: 49296,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
        value: 51980.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:22:00 UTC'),
        value: 40141.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:22:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
        value: 46710,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:24:00 UTC'),
        value: 33811,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:24:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
        value: 41573.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
        value: 40334.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
        value: 43631.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
        value: 44819.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
        value: 55276.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:30:00 UTC'),
        value: 48312.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:30:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:31:00 UTC'),
        value: 39952.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:31:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:32:00 UTC'),
        value: 51871.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:32:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
        value: 44493,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
        value: 53530.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
        value: 56321,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
        value: 47926.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:37:00 UTC'),
        value: 38654.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:37:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
        value: 50969.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:39:00 UTC'),
        value: 55084,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:39:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:40:00 UTC'),
        value: 38884.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:40:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:41:00 UTC'),
        value: 48593,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:41:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:42:00 UTC'),
        value: 43766,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:42:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:43:00 UTC'),
        value: 46011.333333333336,
      },
    ],
  },
  {
    name: ['pl1l-vh93.example.com', 'HYPERVISOR-610F030E04740015'],
    unit: 'byte',
    datapoints: [
      {
        start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
        value: 23209.666666666668,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
        value: 25542,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
        value: 21886,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:22:00 UTC'),
        value: 24626.333333333332,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:22:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
        value: 40008.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:24:00 UTC'),
        value: 42994.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:24:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
        value: 33405,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
        value: 12155.666666666666,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
        value: 23004,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
        value: 35650.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
        value: 35893.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:30:00 UTC'),
        value: 23459.333333333332,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:30:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:31:00 UTC'),
        value: 18724.666666666668,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:31:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:32:00 UTC'),
        value: 14683.333333333334,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:32:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
        value: 19353.333333333332,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
        value: 18148,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
        value: 14548.333333333334,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
        value: 12577.666666666666,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:37:00 UTC'),
        value: 21574.333333333332,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:37:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
        value: 36483.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:39:00 UTC'),
        value: 36415,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:39:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:40:00 UTC'),
        value: 14410,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:40:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:41:00 UTC'),
        value: 34583.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:41:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:42:00 UTC'),
        value: 36782,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:42:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:43:00 UTC'),
        value: 30268,
      },
    ],
  },
  {
    name: ['pl1i-vh41.example.com', 'HYPERVISOR-CC7EFC844F606622'],
    unit: 'byte',
    datapoints: [
      {
        start: new Date('Tue, 05 Apr 2022 12:18:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
        value: 36840.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:19:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
        value: 31772,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:20:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
        value: 79152.66666666667,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:21:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:22:00 UTC'),
        value: 2103,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:22:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
        value: 2685.6666666666665,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:23:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:24:00 UTC'),
        value: 1187,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:24:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
        value: 77795.33333333333,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:25:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
        value: 1568.6666666666667,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:26:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
        value: 69077.66666666667,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:27:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
        value: 66878,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:28:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
        value: 41884.666666666664,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:29:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:30:00 UTC'),
        value: 37995.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:30:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:31:00 UTC'),
        value: 67517.33333333333,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:31:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:32:00 UTC'),
        value: 2843,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:32:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
        value: 67075.33333333333,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:33:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
        value: 65873.66666666667,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:34:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
        value: 1710.6666666666667,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:35:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
        value: 5090.666666666667,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:36:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:37:00 UTC'),
        value: 78457.33333333333,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:37:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
        value: 47623.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:38:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:39:00 UTC'),
        value: 21864,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:39:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:40:00 UTC'),
        value: 1616,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:40:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:41:00 UTC'),
        value: 46132.333333333336,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:41:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:42:00 UTC'),
        value: 36304,
      },
      {
        start: new Date('Tue, 05 Apr 2022 12:42:00 UTC'),
        end: new Date('Tue, 05 Apr 2022 12:43:00 UTC'),
        value: 4838,
      },
    ],
  },
];
const timestampXandNumericalYValueNumerical = [
  {
    horizontal: {
      start: '2022-04-05T12:30:00Z',
      end: '2022-04-05T12:31:00Z',
    },
    vertical: { start: 0, end: 50 },
    value: 7500,
  },
  {
    horizontal: {
      start: '2022-04-05T12:31:00Z',
      end: '2022-04-05T12:32:00Z',
    },
    vertical: { start: 50, end: 100 },
    value: 2000,
  },
  {
    horizontal: {
      start: '2022-04-05T12:32:00Z',
      end: '2022-04-05T12:33:00Z',
    },
    vertical: { start: 100, end: 150 },
    value: 2000,
  },
  {
    horizontal: {
      start: '2022-04-05T12:33:00Z',
      end: '2022-04-05T12:34:00Z',
    },
    vertical: { start: 150, end: 200 },
    value: 4500,
  },
  {
    horizontal: {
      start: '2022-04-05T12:34:00Z',
      end: '2022-04-05T12:35:00Z',
    },
    vertical: { start: 200, end: 250 },
    value: 6500,
  },
  {
    horizontal: {
      start: '2022-04-05T12:35:00Z',
      end: '2022-04-05T12:36:00Z',
    },
    vertical: { start: 250, end: 300 },
    value: 2000,
  },
  {
    horizontal: {
      start: '2022-04-05T12:36:00Z',
      end: '2022-04-05T12:37:00Z',
    },
    vertical: { start: 0, end: 50 },
    value: 0,
  },
  {
    horizontal: {
      start: '2022-04-05T12:37:00Z',
      end: '2022-04-05T12:38:00Z',
    },
    vertical: { start: 50, end: 100 },
    value: 3500,
  },
  {
    horizontal: {
      start: '2022-04-05T12:38:00Z',
      end: '2022-04-05T12:39:00Z',
    },
    vertical: { start: 100, end: 150 },
    value: 3500,
  },
  {
    horizontal: {
      start: '2022-04-05T12:39:00Z',
      end: '2022-04-05T12:40:00Z',
    },
    vertical: { start: 150, end: 200 },
    value: 4500,
  },
  {
    horizontal: {
      start: '2022-04-05T12:40:00Z',
      end: '2022-04-05T12:41:00Z',
    },
    vertical: { start: 200, end: 250 },
    value: 3000,
  },
  {
    horizontal: {
      start: '2022-04-05T12:41:00Z',
      end: '2022-04-05T12:42:00Z',
    },
    vertical: { start: 250, end: 300 },
    value: 2000,
  },
  {
    horizontal: {
      start: '2022-04-05T12:42:00Z',
      end: '2022-04-05T12:43:00Z',
    },
    vertical: { start: 0, end: 50 },
    value: 5500,
  },
];

const SharedCrosshair = () => {
  return (
    // highlight-next-line
    <SharedChartInteractions>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1em',
        }}
      >
        <Surface>
          <XYChart data={timestampXandNumericalYValueNumerical} height="300px">
            <XYChart.RectSeries
              xAxisId="x-first-axis"
              yAxisId="y-first-axis"
              x0Accessor="horizontal.start"
              x1Accessor="horizontal.end"
              y0Accessor="vertical.start"
              y1Accessor="vertical.end"
              valueAccessor="value"
            />
            <XYChart.XAxis id="x-first-axis" type="time" position="bottom" />
            <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
          </XYChart>
        </Surface>
        <Surface>
          <XYChart data={timestampXandNumericalYValueNumerical} height="300px">
            <XYChart.RectSeries
              xAxisId="x-first-axis"
              yAxisId="y-first-axis"
              x0Accessor="horizontal.start"
              x1Accessor="horizontal.end"
              y0Accessor="vertical.start"
              y1Accessor="vertical.end"
              valueAccessor="value"
            />
            <XYChart.XAxis
              id="x-first-axis"
              type="time"
              reversed
              position="bottom"
            />
            <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
          </XYChart>
        </Surface>
        <Surface>
          <XYChart data={timestampXandNumericalYValueNumerical} height="300px">
            <XYChart.RectSeries
              xAxisId="x-first-axis"
              yAxisId="y-first-axis"
              x0Accessor="horizontal.start"
              x1Accessor="horizontal.end"
              y0Accessor="vertical.start"
              y1Accessor="vertical.end"
              valueAccessor="value"
            />
            <XYChart.XAxis id="x-first-axis" type="time" position="top" />
            <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
          </XYChart>
        </Surface>
        <Surface>
          <TimeseriesChart
            data={mockTimeseriesDiskUsage.map((t) => {
              return {
                ...t,
                datapoints: t.datapoints.slice(9),
              };
            })}
            variant="area"
          />
        </Surface>
        <Surface>
          <TimeseriesChart
            data={mockTimeseriesDiskUsage.map((t) => {
              return {
                ...t,
                datapoints: t.datapoints.slice(12),
              };
            })}
            variant="area"
          />
        </Surface>
        <Surface>
          <TimeseriesChart
            data={mockTimeseriesDiskUsage.map((t) => {
              return {
                ...t,
                datapoints: t.datapoints.slice(5),
              };
            })}
            variant="area"
          />
        </Surface>
      </div>
    </SharedChartInteractions>
  );
};
```
