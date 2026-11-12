## Tooltip

The `MeterBarChart` shows a tooltip by default when the user hovers over the segment. Use `<MeterBarChart.Tooltip>` to customize it — pass a `name` prop to change the label (defaults to `'Value'`), or set `hidden` to hide the tooltip.

**Tooltip**

```tsx
import { MeterBarChart } from '@dynatrace/strato-components/charts';

const Tooltip = () => {
  return (
    <div style={{ width: '400px' }}>
      <MeterBarChart value={50}>
        {/* highlight-next-line */}
        <MeterBarChart.Tooltip name="Tooltip Name" />
      </MeterBarChart>
    </div>
  );
};
```

You can fully control the tooltip content by passing a render function as the children of `<MeterBarChart.Tooltip>`. The function receives a `MeterBarChartTooltipPayload` and must return a `ReactNode`. When provided, the built-in layout is replaced entirely — use `ChartTooltip` primitives to keep a consistent visual style.

The `MeterBarChartTooltipPayload` contains:

- `value` — the current bar value
- `min` — the minimum of the scale
- `max` — the maximum of the scale
- `color` — the resolved bar color
- `name` — the series name (defaults to `'Value'`)
- `threshold` (optional) — the nearest active threshold, with `label` and `color`

**CustomTooltip**

```tsx
import {
  ChartTooltip,
  MeterBarChart,
} from '@dynatrace/strato-components/charts';

const CustomTooltip = () => {
  return (
    <div style={{ width: '400px' }}>
      <MeterBarChart value={45} min={0} max={100}>
        {/* highlight-start */}
        <MeterBarChart.Tooltip>
          {(payload) => (
            <>
              <ChartTooltip.SeriesHeader seriesLabel={payload.name} />
              <ChartTooltip.SeriesItem
                color={payload.color}
                name={payload.name}
                value={String(payload.value)}
              />
              <ChartTooltip.SeriesItem
                color=""
                name="Min"
                value={String(payload.min)}
              />
              <ChartTooltip.SeriesItem
                color=""
                name="Max"
                value={String(payload.max)}
              />
              {payload.threshold && (
                <ChartTooltip.SeriesItem
                  color={payload.threshold.color}
                  name="Threshold"
                  value={payload.threshold.label ?? ''}
                />
              )}
            </>
          )}
        </MeterBarChart.Tooltip>
        {/* highlight-end */}
      </MeterBarChart>
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
  MeterBarChart,
  type MeterBarChartTooltipPayload,
} from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon, OpenWithIcon } from '@dynatrace/strato-icons';

const GlobalActions = () => {
  return (
    <MeterBarChart value={45} min={0} max={100}>
      <MeterBarChart.Tooltip>
        {(payload: MeterBarChartTooltipPayload) => (
          <>
            <ChartTooltip.SeriesItem
              name={payload.name}
              value={String(payload.value)}
              color={payload.color}
            />
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
      </MeterBarChart.Tooltip>
    </MeterBarChart>
  );
};
```
