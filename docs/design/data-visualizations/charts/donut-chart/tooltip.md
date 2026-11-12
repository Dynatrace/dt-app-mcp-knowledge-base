## Tooltip

By default, the `DonutChart` shows a tooltip on hover with the slice category, value, and percentage. Pass a render function as the `DonutChart.Tooltip` slot children to take full control over the tooltip content. The render function receives a single `PieChartTooltipPayload` argument with the following properties:

- `category` — the name or label of the hovered slice.
- `value` — the numerical value of the slice.
- `percentage` — the relative share of the slice (0–100).
- `color` — the resolved color of the slice.

Set `hidden` to `true` on `DonutChart.Tooltip` to opt out of the tooltip entirely.

**Tooltip**

```tsx
import {
  DonutChart,
  type PieChartTooltipPayload,
} from '@dynatrace/strato-components/charts';

const revenue = [
  { category: 'EMEA', value: 66 },
  { category: 'APAC', value: 25 },
  { category: 'LATAM', value: 33 },
  { category: 'NA', value: 5 },
];

const customTooltip = (payload: PieChartTooltipPayload) => {
  return (
    <div style={{ padding: '8px 12px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '4px',
        }}
      >
        <span
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: payload.color,
            display: 'inline-block',
          }}
        />
        <strong>{payload.category}</strong>
      </div>
      <div style={{ fontSize: '12px' }}>
        Value: {String(payload.value)} ({payload.percentage.toFixed(1)}%)
      </div>
    </div>
  );
};

const Tooltip = () => {
  return (
    <DonutChart
      data={revenue}
      labelAccessor="category"
      valueAccessor="value"
      unit="$"
    >
      {/* highlight-start */}
      <DonutChart.Tooltip>{customTooltip}</DonutChart.Tooltip>
      {/* highlight-end */}
    </DonutChart>
  );
};
```

### Global actions

Global actions are chart-level actions that appear in the tooltip footer when the tooltip is pinned. Add them to a custom tooltip by including one or more `ChartTooltip.Action` items inside a `ChartTooltip.Footer` component. The "Click to access actions" hint is shown automatically while hovering (before pinning), and the action buttons appear once the tooltip is pinned.

**GlobalActions**

```tsx
import {
  ChartTooltip,
  DonutChart,
  type PieChartTooltipPayload,
} from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon, OpenWithIcon } from '@dynatrace/strato-icons';

const data = [
  { category: 'EMEA', value: 66 },
  { category: 'APAC', value: 25 },
  { category: 'LATAM', value: 33 },
  { category: 'NA', value: 5 },
];

const GlobalActions = () => {
  return (
    <DonutChart data={data} labelAccessor="category" valueAccessor="value">
      <DonutChart.Tooltip>
        {(payload: PieChartTooltipPayload) => (
          <>
            <ChartTooltip.SeriesItem
              name={payload.category}
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
      </DonutChart.Tooltip>
    </DonutChart>
  );
};
```
