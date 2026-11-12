## Tooltip customization

Tooltips can be used to display additional detailed information about a selected data point. A tooltip will be shown when hovering the chart at a certain distance to a datapoint. The tooltip `variant` defines whether the tooltip should contain data points from all the dimensions within a category (grouped) or only the closest one (single). By default, the variant is `single`.

**TooltipConfiguration**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const sales: CategoricalBarChartData[] = [
  { category: '2020', value: { EMEA: 1346, APAC: 1812, LATAM: 934, NA: 817 } },
  { category: '2021', value: { EMEA: 2432, APAC: 1647, LATAM: 323, NA: 988 } },
  { category: '2022', value: { EMEA: 587, APAC: 981, LATAM: 1456, NA: 1687 } },
];

const TooltipConfiguration = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <CategoricalBarChart data={sales} />
      <CategoricalBarChart data={sales}>
        {/* highlight-start */}
        <CategoricalBarChart.Tooltip variant="grouped" />
        {/* highlight-end */}
      </CategoricalBarChart>
    </Flex>
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
    category: 'WebServer',
    value: 200,
    seriesId: 'response-time',
    name: 'Response time',
  },
  {
    category: 'CreditCardVerification',
    value: 700,
    seriesId: 'response-time',
    name: 'Response time',
  },
  {
    category: 'Payment',
    value: 439,
    seriesId: 'response-time',
    name: 'Response time',
  },
  {
    category: 'API',
    value: 147,
    seriesId: 'response-time',
    name: 'Response time',
  },
  {
    category: 'AddToCart',
    value: 84,
    seriesId: 'response-time',
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
                name={String(payload.barPayload.datapoint.x0)}
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
        x0Accessor="category"
        y1Accessor="value"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```
