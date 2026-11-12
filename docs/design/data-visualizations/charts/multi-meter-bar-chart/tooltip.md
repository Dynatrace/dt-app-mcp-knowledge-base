## Tooltip

The `MultiMeterBarChart` shows a tooltip by default when the user hovers over a segment. Use `<MultiMeterBarChart.Tooltip>` to customize it — the `variant` prop controls whether the tooltip shows data for all segments (`shared`) or only the hovered one (`single`, default). Set `hidden` to hide the tooltip.

**Tooltip**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';

const Tooltip = () => {
  return (
    <div style={{ width: '400px' }}>
      <p>Multi meter bar chart with single tooltip (default)</p>
      <MultiMeterBarChart>
        {/* highlight-next-line */}
        <MultiMeterBarChart.Tooltip />
        <MultiMeterBarChart.Segment value={50} name="Good" />
        <MultiMeterBarChart.Segment value={20} name="Excellent" />
      </MultiMeterBarChart>
      <p>Multi meter bar chart with shared tooltip</p>
      <MultiMeterBarChart>
        <MultiMeterBarChart.Segment value={50} name="Good" />
        <MultiMeterBarChart.Segment value={20} name="Excellent" />
        {/* highlight-next-line */}
        <MultiMeterBarChart.Tooltip variant="shared" />
      </MultiMeterBarChart>
    </div>
  );
};
```

You can fully control the tooltip content by passing a render function as the children of `<MultiMeterBarChart.Tooltip>`. The function receives a `MultiMeterBarChartTooltipPayload` and must return a `ReactNode`. When provided, the built-in layout is replaced entirely and the `variant` prop is ignored — the template itself decides which data to display. Use `ChartTooltip` primitives to keep a consistent visual style.

The `MultiMeterBarChartTooltipPayload` contains:

- `segments` — all visible segments, each with `name`, `value`, and `color`
- `activeSegment` (optional) — the segment under the cursor, with an additional `index` identifying its position in the `segments` array

**CustomTooltip**

```tsx
import {
  ChartTooltip,
  MultiMeterBarChart,
} from '@dynatrace/strato-components/charts';

const CustomTooltip = () => {
  return (
    <div style={{ width: '400px' }}>
      <MultiMeterBarChart max={100}>
        <MultiMeterBarChart.Segment name="Good" value={60} />
        <MultiMeterBarChart.Segment name="Poor" value={40} />
        {/* highlight-start */}
        <MultiMeterBarChart.Tooltip>
          {(payload) => (
            <>
              {payload.activeSegment && (
                <ChartTooltip.SeriesItem
                  color={payload.activeSegment.color}
                  name={payload.activeSegment.name}
                  value={String(payload.activeSegment.value)}
                />
              )}
              <ChartTooltip.Series
                activeItem={payload.activeSegment?.index}
                data={payload.segments as unknown as Record<string, string>[]}
                seriesItemTemplate={(segment) => (
                  <ChartTooltip.SeriesItem
                    color={segment.color}
                    name={segment.name}
                    value={segment.value}
                  />
                )}
              />
            </>
          )}
        </MultiMeterBarChart.Tooltip>
        {/* highlight-end */}
      </MultiMeterBarChart>
    </div>
  );
};
```

### Global actions

Global actions are chart-level actions that appear in the tooltip footer when the tooltip is pinned. Add them to a custom tooltip by including one or more `ChartTooltip.Action` items inside a `ChartTooltip.Footer` component. The "Click to access actions" hint is shown automatically while hovering (before pinning), and the action buttons appear once the tooltip is pinned.

**GlobalActions**

```tsx
import {
  ChartTooltip,
  MultiMeterBarChart,
  type MultiMeterBarChartTooltipPayload,
} from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon, OpenWithIcon } from '@dynatrace/strato-icons';

const GlobalActions = () => {
  return (
    <MultiMeterBarChart max={100}>
      <MultiMeterBarChart.Segment name="Good" value={60} />
      <MultiMeterBarChart.Segment name="Poor" value={40} />
      <MultiMeterBarChart.Tooltip>
        {(payload: MultiMeterBarChartTooltipPayload) => (
          <>
            {payload.activeSegment && (
              <ChartTooltip.SeriesItem
                name={payload.activeSegment.name}
                value={String(payload.activeSegment.value)}
                color={payload.activeSegment.color}
              />
            )}
            {/* highlight-start */}
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
            {/* highlight-end */}
          </>
        )}
      </MultiMeterBarChart.Tooltip>
    </MultiMeterBarChart>
  );
};
```
