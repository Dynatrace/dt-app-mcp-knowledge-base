## Select

The select functionality allows users to select a specific area in the chart. Selection can be used to display detailed information about data points inside the selected area and/or to zoom in to the selected area. The select interaction is enabled by default for `XYChart`, `TimeseriesChart` and `HistogramChart`. You can explicitly add it to customize behavior:

Select can be triggered by clicking and dragging on the chart area. To zoom in on the selected area, press `Enter`.

```tsx
<TimeseriesChart data={data}>
  <TimeseriesChart.Select
    actions={(selectedSeries) => (
      <ChartSeriesAction>
        <ChartSeriesAction.Item onSelect={() => console.log(selectedSeries)}>
          Custom action
        </ChartSeriesAction.Item>
      </ChartSeriesAction>
    )}
  />
</TimeseriesChart>
```

Upon selecting an area, the chart will display a tooltip with the selected area's start and end timestamps, duration of the area, and amount of data points and series. The tooltip can be dismissed by pressing `Esc`. The selected area can include custom actions and intents. You can define custom actions using the `actions` prop on the `Select` slot.

### Disabling selection

To prevent users from drawing a selection area, pass the `disabled` prop to the `Select` slot. This is useful when the chart is embedded in a read-only context or when selection is not relevant to the current view. Zoom and pan interactions remain fully functional when selection is disabled.

**SelectDisabled**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const data = [
  { x: 0, y: 30 },
  { x: 10, y: 70 },
  { x: 20, y: 45 },
  { x: 30, y: 90 },
  { x: 40, y: 55 },
  { x: 50, y: 80 },
  { x: 60, y: 40 },
  { x: 70, y: 65 },
  { x: 80, y: 20 },
  { x: 90, y: 50 },
  { x: 100, y: 75 },
];

const SelectDisabled = () => {
  return (
    <XYChart data={[]} height="300px">
      <XYChart.LineSeries
        data={data}
        xAxisId="x"
        yAxisId="y"
        x0Accessor="x"
        y0Accessor="y"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis id="x" type="numerical" position="bottom" />
      <XYChart.YAxis id="y" type="numerical" position="left" />
      {/* highlight-start */}
      <XYChart.Select disabled />
      {/* highlight-end */}
    </XYChart>
  );
};
```
