## Tooltip

Tooltips are used to display additional detailed information about a selected data point and can be enabled by adding the `HistogramChart.Tooltip` subcomponent. The tooltip `variant` defines whether the tooltip should contain data points from all bins (shared) for the selected bin, or just the closest one (single). The `seriesDisplayMode` prop can be used to define whether the tooltip should be comprised of a single line of information or multiple lines.

The sequence of the input data in the chart determines the arrangement of the tooltip series.

### Single

**SingleTooltip**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';

const multipleSeriesStacked: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: -40,
        to: -30,
        value: 0,
      },
      {
        from: -30,
        to: -20,
        value: 20,
      },
      {
        from: -20,
        to: -10,
        value: 50,
      },
      {
        from: -10,
        to: 0,
        value: 120,
      },
      {
        from: 0,
        to: 10,
        value: 200,
      },
      {
        from: 10,
        to: 20,
        value: 300,
      },
      {
        from: 20,
        to: 30,
        value: 400,
      },
      {
        from: 30,
        to: 40,
        value: 600,
      },
      {
        from: 40,
        to: 50,
        value: 900,
      },
      {
        from: 50,
        to: 60,
        value: 700,
      },
      {
        from: 60,
        to: 70,
        value: 600,
      },
      {
        from: 70,
        to: 80,
        value: 500,
      },
      {
        from: 80,
        to: 90,
        value: 360,
      },
      {
        from: 90,
        to: 100,
        value: 340,
      },
      {
        from: 100,
        to: 110,
        value: 300,
      },
      {
        from: 110,
        to: 120,
        value: 280,
      },
      {
        from: 120,
        to: 130,
        value: 200,
      },
      {
        from: 130,
        to: 140,
        value: 150,
      },
      {
        from: 140,
        to: 150,
        value: 80,
      },
      {
        from: 150,
        to: 160,
        value: 50,
      },
      {
        from: 160,
        to: 170,
        value: 30,
      },
      {
        from: 170,
        to: 180,
        value: 15,
      },
      {
        from: 180,
        to: 190,
        value: 0,
      },
    ],
  },
  {
    name: 'Series 2',
    bins: [
      {
        from: 100,
        to: 110,
        value: 10,
      },
      {
        from: 110,
        to: 120,
        value: 20,
      },
      {
        from: 120,
        to: 130,
        value: 40,
      },
      {
        from: 130,
        to: 140,
        value: 50,
      },
      {
        from: 140,
        to: 150,
        value: 60,
      },
      {
        from: 150,
        to: 160,
        value: 80,
      },
      {
        from: 160,
        to: 170,
        value: 150,
      },
      {
        from: 170,
        to: 180,
        value: 200,
      },
      {
        from: 180,
        to: 190,
        value: 250,
      },
      {
        from: 190,
        to: 200,
        value: 300,
      },
      {
        from: 200,
        to: 210,
        value: 360,
      },
      {
        from: 210,
        to: 220,
        value: 590,
      },
      {
        from: 220,
        to: 230,
        value: 890,
      },
      {
        from: 230,
        to: 240,
        value: 670,
      },
      {
        from: 240,
        to: 250,
        value: 600,
      },
      {
        from: 250,
        to: 260,
        value: 500,
      },
      {
        from: 260,
        to: 270,
        value: 450,
      },
      {
        from: 270,
        to: 280,
        value: 340,
      },
      {
        from: 280,
        to: 290,
        value: 300,
      },
      {
        from: 290,
        to: 300,
        value: 180,
      },
      {
        from: 300,
        to: 310,
        value: 80,
      },
      {
        from: 310,
        to: 320,
        value: 50,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];

const SingleTooltip = () => {
  return (
    <HistogramChart data={multipleSeriesStacked}>
      {/* highlight-start */}
      <HistogramChart.Tooltip variant="single" />
      {/* highlight-end */}
    </HistogramChart>
  );
};
```

### Shared

**SharedTooltip**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';

const multipleSeriesStacked: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: -40,
        to: -30,
        value: 0,
      },
      {
        from: -30,
        to: -20,
        value: 20,
      },
      {
        from: -20,
        to: -10,
        value: 50,
      },
      {
        from: -10,
        to: 0,
        value: 120,
      },
      {
        from: 0,
        to: 10,
        value: 200,
      },
      {
        from: 10,
        to: 20,
        value: 300,
      },
      {
        from: 20,
        to: 30,
        value: 400,
      },
      {
        from: 30,
        to: 40,
        value: 600,
      },
      {
        from: 40,
        to: 50,
        value: 900,
      },
      {
        from: 50,
        to: 60,
        value: 700,
      },
      {
        from: 60,
        to: 70,
        value: 600,
      },
      {
        from: 70,
        to: 80,
        value: 500,
      },
      {
        from: 80,
        to: 90,
        value: 360,
      },
      {
        from: 90,
        to: 100,
        value: 340,
      },
      {
        from: 100,
        to: 110,
        value: 300,
      },
      {
        from: 110,
        to: 120,
        value: 280,
      },
      {
        from: 120,
        to: 130,
        value: 200,
      },
      {
        from: 130,
        to: 140,
        value: 150,
      },
      {
        from: 140,
        to: 150,
        value: 80,
      },
      {
        from: 150,
        to: 160,
        value: 50,
      },
      {
        from: 160,
        to: 170,
        value: 30,
      },
      {
        from: 170,
        to: 180,
        value: 15,
      },
      {
        from: 180,
        to: 190,
        value: 0,
      },
    ],
  },
  {
    name: 'Series 2',
    bins: [
      {
        from: 100,
        to: 110,
        value: 10,
      },
      {
        from: 110,
        to: 120,
        value: 20,
      },
      {
        from: 120,
        to: 130,
        value: 40,
      },
      {
        from: 130,
        to: 140,
        value: 50,
      },
      {
        from: 140,
        to: 150,
        value: 60,
      },
      {
        from: 150,
        to: 160,
        value: 80,
      },
      {
        from: 160,
        to: 170,
        value: 150,
      },
      {
        from: 170,
        to: 180,
        value: 200,
      },
      {
        from: 180,
        to: 190,
        value: 250,
      },
      {
        from: 190,
        to: 200,
        value: 300,
      },
      {
        from: 200,
        to: 210,
        value: 360,
      },
      {
        from: 210,
        to: 220,
        value: 590,
      },
      {
        from: 220,
        to: 230,
        value: 890,
      },
      {
        from: 230,
        to: 240,
        value: 670,
      },
      {
        from: 240,
        to: 250,
        value: 600,
      },
      {
        from: 250,
        to: 260,
        value: 500,
      },
      {
        from: 260,
        to: 270,
        value: 450,
      },
      {
        from: 270,
        to: 280,
        value: 340,
      },
      {
        from: 280,
        to: 290,
        value: 300,
      },
      {
        from: 290,
        to: 300,
        value: 180,
      },
      {
        from: 300,
        to: 310,
        value: 80,
      },
      {
        from: 310,
        to: 320,
        value: 50,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];

const SharedTooltip = () => {
  return (
    <HistogramChart data={multipleSeriesStacked}>
      {/* highlight-start */}
      <HistogramChart.Tooltip variant="shared" />
      {/* highlight-end */}
    </HistogramChart>
  );
};
```

### Global actions

Global actions are chart-level actions that appear in the tooltip footer when the tooltip is pinned. Add them to a custom tooltip by including one or more `ChartTooltip.Action` items inside a `ChartTooltip.Footer` component. The "Click to access actions" hint is shown automatically while hovering (before pinning), and the action buttons appear once the tooltip is pinned.

**GlobalActions**

```tsx
import { ChartTooltip, XYChart } from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon, OpenWithIcon } from '@dynatrace/strato-icons';

const data = [
  { from: 0, to: 50, count: 120, seriesId: 'series-1', name: 'Response time' },
  {
    from: 50,
    to: 100,
    count: 340,
    seriesId: 'series-1',
    name: 'Response time',
  },
  {
    from: 100,
    to: 150,
    count: 580,
    seriesId: 'series-1',
    name: 'Response time',
  },
  {
    from: 150,
    to: 200,
    count: 420,
    seriesId: 'series-1',
    name: 'Response time',
  },
  {
    from: 200,
    to: 250,
    count: 180,
    seriesId: 'series-1',
    name: 'Response time',
  },
];

const GlobalActions = () => {
  return (
    <XYChart data={data} height="300px">
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (!payload.barPayload) {
            return undefined;
          }
          return (
            <>
              <ChartTooltip.SeriesItem
                color={payload.barPayload.color}
                name={payload.barPayload.seriesName}
                value={String(payload.barPayload.datapoint.y1)}
              />
              <ChartTooltip.Footer
                actions={[
                  <ChartTooltip.Action
                    key="inspect"
                    label="Inspect entity"
                    icon={<MagnifyingGlassIcon />}
                    onSelect={() => {
                      // apply custom logic
                    }}
                  />,
                  <ChartTooltip.Action
                    key="open"
                    label="Open in Notebooks"
                    icon={<OpenWithIcon />}
                    onSelect={() => {
                      // apply custom logic
                    }}
                  />,
                ]}
                unpinnedPlaceholderText={undefined}
              />
            </>
          );
        }}
      </XYChart.Tooltip>
      {/* highlight-end */}
      <XYChart.BarSeries
        variant="single"
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="from"
        x1Accessor="to"
        y1Accessor="count"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```
