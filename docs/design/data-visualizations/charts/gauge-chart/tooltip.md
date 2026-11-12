## Tooltip

The `GaugeChart` has a default Tooltip to display additional information and will be shown when the user hovers over the segment. You can customize the label displayed in the tooltip by passing a `name` prop. If no `name` is provided, it defaults to `'Value'`. To hide the tooltip entirely, set the `hidden` prop on the `GaugeChart.Tooltip` slot.

If no custom template is provided, the default tooltip is shown. Optionally, the tooltip can be opted out by setting the `hidden` prop to `true`.

**Tooltip**

```tsx
import { GaugeChart } from '@dynatrace/strato-components/charts';

const Tooltip = () => {
  return (
    <div style={{ width: '400px' }}>
      <GaugeChart value={50}>
        {/* highlight-next-line */}
        <GaugeChart.Tooltip name="Tooltip name" />
      </GaugeChart>
    </div>
  );
};
```

#### Custom tooltip

Pass a render function as the `GaugeChart.Tooltip` slot children to take full control over what is displayed when the gauge is hovered or pinned. The render function receives a single `GaugeChartTooltipItem` argument that exposes:

- `value` — the raw numerical value displayed by the gauge.
- `formattedValue` — the same value formatted by the chart's formatter (and unit, when set).
- `color` — the colour currently applied to the gauge arc, resolved from an explicit `color`, matching `GaugeChart.ColorRule`, or the palette default.
- `name` — the name forwarded through the `GaugeChart.Tooltip` slot.
- `unit` — the unit string used by the formatter, when available.

You can compose the tooltip using `ChartTooltip` primitives (or any custom markup) — exactly the same building blocks used by other Strato charts. The render function can return `null` to suppress the tooltip body for a given value, while still preserving the default tooltip when no `children` are provided (backward compatible).

The example below combines `GaugeChart.ColorRule` with a render function that maps the current value to a status label and renders a structured `ChartTooltip.SeriesItem` row.

**CustomTooltip**

```tsx
import { useState } from 'react';

import { ChartTooltip, GaugeChart } from '@dynatrace/strato-components/charts';
import { Switch } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const CustomTooltip = () => {
  const [useCustom, setUseCustom] = useState(true);

  return (
    <Flex flexDirection="column" gap={16}>
      <Switch value={useCustom} onChange={setUseCustom}>
        Use custom tooltip
      </Switch>
      <div style={{ width: '400px' }}>
        <GaugeChart value={72} min={0} max={100}>
          <GaugeChart.Label>CPU Usage</GaugeChart.Label>
          <GaugeChart.ColorRule
            comparator="greater-or-equal"
            matchValue={75}
            color="#d50000"
          />
          <GaugeChart.ColorRule
            comparator="greater-or-equal"
            matchValue={50}
            color="#ff6d00"
          />
          {useCustom ? (
            <GaugeChart.Tooltip name="CPU Usage">
              {/* highlight-start */}
              {(item) => {
                const status =
                  item.value >= 75
                    ? 'Critical'
                    : item.value >= 50
                      ? 'Warning'
                      : 'Healthy';
                return (
                  <>
                    {/* Free-form HTML header — demonstrates that the tooltip body
                        accepts any ReactNode, not just ChartTooltip atoms. */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {item.name ?? 'Gauge value'}
                    </div>
                    <p style={{ margin: '0 0 8px', opacity: 0.85 }}>
                      Status: <strong>{status}</strong>
                    </p>
                    {/* ChartTooltip atoms for a structured, color-coded row. */}
                    <ChartTooltip.SeriesItem
                      name="Current"
                      value={item.formattedValue}
                      color={item.color ?? '#888'}
                    />
                  </>
                );
              }}
              {/* highlight-end */}
            </GaugeChart.Tooltip>
          ) : (
            <GaugeChart.Tooltip name="CPU Usage" />
          )}
        </GaugeChart>
      </div>
    </Flex>
  );
};
```
