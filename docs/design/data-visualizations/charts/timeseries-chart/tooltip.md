## Tooltip

Tooltips are used to display additional detailed information about a selected data point and can be enabled by adding the `TimeseriesChart.Tooltip` subcomponent. The tooltip `variant` defines whether the tooltip should contain data points from all series (shared) for the selected timestamp, or just the closest one (single), and defaults to `single`. The `seriesDisplayMode` prop can be used to define whether the tooltip should be comprised of a single line of information or multiple lines. If `seriesDisplayMode` is not set, it defaults to `multi-line` when `variant` is `single`, and to `single-line` when `variant` is `shared`.

The Tooltip items sequence, will appear in the same order of the series plotted in the chart.

**TooltipConfigurations**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const TooltipConfigurations = () => {
  return (
    <>
      <div>
        <h4>Single — Multi-line</h4>
        <TimeseriesChart data={mockTimeseriesCpuUsage}>
          {/* highlight-start */}
          <TimeseriesChart.Tooltip
            variant="single"
            seriesDisplayMode="multi-line"
          />
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
      <div>
        <h4>Shared — Single-line</h4>
        <TimeseriesChart data={mockTimeseriesCpuUsage}>
          {/* highlight-start */}
          <TimeseriesChart.Tooltip
            variant="shared"
            seriesDisplayMode="single-line"
          />
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
    </>
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
  {
    x0: '2023-03-14',
    x1: '2023-03-15',
    y0: 10,
    seriesId: '1',
    name: 'Series 1',
  },
  {
    x0: '2023-03-15',
    x1: '2023-03-16',
    y0: 40,
    seriesId: '1',
    name: 'Series 1',
  },
  {
    x0: '2023-03-16',
    x1: '2023-03-17',
    y0: 20,
    seriesId: '1',
    name: 'Series 1',
  },
  {
    x0: '2023-03-17',
    x1: '2023-03-18',
    y0: 30,
    seriesId: '1',
    name: 'Series 1',
  },
];

const GlobalActions = () => {
  return (
    <XYChart data={data} height="300px">
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (!payload.linePayload) {
            return undefined;
          }
          return (
            <>
              <ChartTooltip.SeriesItem
                color={payload.linePayload.color}
                name={payload.linePayload.seriesName}
                value={String(payload.linePayload.datapoint.y0)}
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
      <XYChart.LineSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x0"
        x1Accessor="x1"
        y0Accessor="y0"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis id="x-axis" type="time" position="bottom" />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```
