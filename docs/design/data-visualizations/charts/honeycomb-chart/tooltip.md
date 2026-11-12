## Tooltip

By default, the `HoneycombChart` shows a tooltip on hover with the tile name and formatted value. Pass a render function as the `HoneycombChart.Tooltip` slot children to take full control over the tooltip content. The render function receives a single `HoneycombTooltipPayload` argument with the following properties:

- `name` — the display name of the hovered tile.
- `value` — the raw numerical or categorical value.
- `formattedValue` — the value after applying the chart's `formatter` and `unit`.
- `color` — the resolved color of the tile.
- `data` — the full original tile data, including any custom fields you provided.

Set `hidden` to `true` on `HoneycombChart.Tooltip` to opt out of the tooltip entirely.

**Tooltip**

```tsx
import {
  type ChartData,
  HoneycombChart,
  type HoneycombTooltipPayload,
} from '@dynatrace/strato-components/charts';

const data: ChartData = [
  { name: 'Host A', value: 85 },
  { name: 'Host B', value: 45 },
  { name: 'Host C', value: 92 },
  { name: 'Host D', value: 31 },
  { name: 'Host E', value: 67 },
  { name: 'Host F', value: 78 },
  { name: 'Host G', value: 12 },
  { name: 'Host H', value: 55 },
];

const customTooltip = (payload: HoneycombTooltipPayload) => {
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
            borderRadius: '2px',
            backgroundColor: payload.color,
            display: 'inline-block',
          }}
        />
        <strong>{payload.name}</strong>
      </div>
      <div style={{ fontSize: '12px' }}>
        Formatted: {payload.formattedValue}
      </div>
    </div>
  );
};

const Tooltip = () => {
  return (
    <HoneycombChart data={data}>
      {/* highlight-start */}
      <HoneycombChart.Tooltip>{customTooltip}</HoneycombChart.Tooltip>
      {/* highlight-end */}
    </HoneycombChart>
  );
};
```

### Global actions

Global actions are chart-level actions that appear in the tooltip footer when the tooltip is pinned. Add them to a custom tooltip by including one or more `ChartTooltip.Action` items inside a `ChartTooltip.Footer` component. The "Click to access actions" hint is shown automatically while hovering (before pinning), and the action buttons appear once the tooltip is pinned.

**GlobalActions**

```tsx
import {
  ChartTooltip,
  HoneycombChart,
  type ChartData,
  type HoneycombTooltipPayload,
} from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon, OpenWithIcon } from '@dynatrace/strato-icons';

const data: ChartData = [
  { name: 'Host A', value: 85 },
  { name: 'Host B', value: 45 },
  { name: 'Host C', value: 92 },
  { name: 'Host D', value: 31 },
  { name: 'Host E', value: 67 },
  { name: 'Host F', value: 78 },
];

const GlobalActions = () => {
  return (
    <HoneycombChart data={data}>
      <HoneycombChart.Tooltip>
        {(payload: HoneycombTooltipPayload) => (
          <>
            <ChartTooltip.SeriesItem
              name={payload.name}
              value={payload.formattedValue}
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
      </HoneycombChart.Tooltip>
    </HoneycombChart>
  );
};
```
