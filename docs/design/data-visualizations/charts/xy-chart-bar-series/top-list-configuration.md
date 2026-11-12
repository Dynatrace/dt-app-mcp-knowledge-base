## Top-list configuration

It is possible to display a top-list visualization using `XYChart.BarSeries` with the `labelAccessor` prop. The standalone [TopList](https://developer.dynatrace.com/design/data-visualizations/charts/TopList.md) component builds this layout automatically; use `XYChart.BarSeries` directly when you need full control over axis configuration, coloring rules, or layout direction.

To set it up, add `variant="single"` to `XYChart.BarSeries` and provide `labelAccessor` for the in-bar text. For the default horizontal layout, use `y0Accessor` (category) and `x1Accessor` (numerical value).

When all records share the same `seriesIdAccessor` value the chart displays as a **single series**. When each record has a unique value, each bar becomes its own series—each with its own color and legend entry.

**Important:** always add `hidden` to the numerical axis, as axis tick numbers can be redundant and distracting.

The `formatter` on the categorical axis receives the raw category string and the full data record. Use it to display a derived value—such as the numerical metric—as the axis tick label instead of the raw category key.

**TopList**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const data = [
  {
    serviceId: 'svc-a1b2c3',
    displayName: 'AuthService',
    cpuCores: 12.4,
    barLabel: 'AuthenticationAndAuthorizationService (eu-west-1)',
  },
  {
    serviceId: 'svc-d4e5f6',
    displayName: 'PaymentGateway',
    cpuCores: 9.8,
    barLabel: 'PaymentGateway · Stripe Connector · Production · primary',
  },
  {
    serviceId: 'svc-g7h8i9',
    displayName: 'UserProfileAPI',
    cpuCores: 7.2,
    barLabel: 'UserProfileAPI :: profile-service.production.cluster.eu',
  },
  {
    serviceId: 'svc-j0k1l2',
    displayName: 'NotificationSvc',
    cpuCores: 5.5,
    barLabel: 'NotificationService — push / email / sms dispatcher',
  },
  {
    serviceId: 'svc-m3n4o5',
    displayName: 'SearchIndexer',
    cpuCores: 3.1,
    barLabel: 'SearchIndexer — fulltext / vector embedding pipeline',
  },
];

const TopList = () => {
  return (
    <XYChart data={data}>
      <XYChart.BarSeries
        variant="single"
        y0Accessor="serviceId"
        x1Accessor="cpuCores"
        seriesIdAccessor="serviceId"
        nameAccessor="displayName"
        labelAccessor="barLabel"
        yAxisId="y-axis"
        xAxisId="x-axis"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" hidden />
      <XYChart.YAxis
        id="y-axis"
        type="categorical"
        position="left"
        formatter={(_value, item) => `${item.cpuCores} %`}
      />
    </XYChart>
  );
};
```

### Layout configurations

The `labelAccessor` works with all four bar orientations that `XYChart.BarSeries` supports. Switch orientation by choosing the accessor pattern and adjusting the axes types and positions accordingly.

| Orientation              | Accessors                                          | Axis to hide                |
| ------------------------ | -------------------------------------------------- | --------------------------- |
| Horizontal LTR (default) | `y0Accessor` + `x1Accessor`                        | `XYChart.XAxis` (numerical) |
| Horizontal RTL           | `y0Accessor` + `x1Accessor` + `reversed` on X axis | `XYChart.XAxis` (numerical) |
| Vertical BTT             | `x0Accessor` + `y1Accessor`                        | `XYChart.YAxis` (numerical) |
| Vertical TTB             | `x0Accessor` + `y1Accessor` + `reversed` on Y axis | `XYChart.YAxis` (numerical) |

For the RTL horizontal layout, pass `reversed` on the numerical `XYChart.XAxis` and move the categorical `XYChart.YAxis` to `position="right"`. The bars grow from right to left and the labels remain inside the bars.

For the TTB vertical layout, pass `reversed` on the numerical `XYChart.YAxis` and move the categorical `XYChart.XAxis` to `position="top"`. The bars grow from top to bottom.

In both reversed cases you must still set `hidden` on the numerical axis—the `reversed` prop only controls direction, not visibility.

**Layout**

```tsx
import { format, units } from '@dynatrace-sdk/units';
import { XYChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const data = [
  {
    serviceId: 'svc-a1b2c3',
    displayName: 'AuthService',
    cpuCores: 12.4,
    barLabel: 'AuthenticationAndAuthorizationService (eu-west-1)',
    singleSeries: 's1',
    multipleSeries: 's1',
  },
  {
    serviceId: 'svc-d4e5f6',
    displayName: 'PaymentGateway',
    cpuCores: 9.8,
    barLabel: 'PaymentGateway · Stripe Connector · Production · primary',
    singleSeries: 's1',
    multipleSeries: 's2',
  },
  {
    serviceId: 'svc-g7h8i9',
    displayName: 'UserProfileAPI',
    cpuCores: 7.2,
    barLabel: 'UserProfileAPI :: profile-service.production.cluster.eu',
    singleSeries: 's1',
    multipleSeries: 's3',
  },
  {
    serviceId: 'svc-j0k1l2',
    displayName: 'NotificationSvc',
    cpuCores: 5.5,
    barLabel: 'NotificationService — push / email / sms dispatcher',
    singleSeries: 's1',
    multipleSeries: 's4',
  },
  {
    serviceId: 'svc-m3n4o5',
    displayName: 'SearchIndexer',
    cpuCores: 3.1,
    barLabel: 'SearchIndexer — fulltext / vector embedding pipeline',
    singleSeries: 's1',
    multipleSeries: 's5',
  },
];

const Frame = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ flex: 1, minWidth: 360 }}>
    <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
    {children}
  </div>
);

const Layout = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        padding: 16,
      }}
    >
      <Frame title="Horizontal LTR — single series">
        <XYChart data={data} width="100%">
          <XYChart.BarSeries
            variant="single"
            y0Accessor="serviceId"
            x1Accessor="cpuCores"
            seriesIdAccessor="singleSeries"
            nameAccessor="displayName"
            labelAccessor="barLabel"
            xAxisId="x"
            yAxisId="y"
          />
          <XYChart.XAxis id="x" type="numerical" position="bottom" hidden />
          <XYChart.YAxis
            id="y"
            type="categorical"
            position="left"
            formatter={(_value, item) => `${item.cpuCores} %`}
          />
        </XYChart>
      </Frame>

      <Frame title="Horizontal RTL — multiple series">
        <XYChart data={data} width="100%">
          <XYChart.BarSeries
            variant="single"
            y0Accessor="serviceId"
            x1Accessor="cpuCores"
            seriesIdAccessor="multipleSeries"
            nameAccessor="displayName"
            labelAccessor="barLabel"
            xAxisId="x"
            yAxisId="y"
          />
          <XYChart.XAxis
            id="x"
            type="numerical"
            position="bottom"
            hidden
            reversed
          />
          <XYChart.YAxis
            id="y"
            type="categorical"
            position="right"
            formatter={(_value, data) =>
              format(data.cpuCores as number, {
                input: units.time.minute,
                output: units.time.second,
              })
            }
          />
        </XYChart>
      </Frame>

      <Frame title="Vertical BTT — single series">
        <XYChart data={data} width="100%">
          <XYChart.BarSeries
            variant="single"
            x0Accessor="serviceId"
            y1Accessor="cpuCores"
            seriesIdAccessor="singleSeries"
            nameAccessor="displayName"
            labelAccessor="barLabel"
            xAxisId="x"
            yAxisId="y"
            color={Colors.Charts.CategoricalThemed.PurpleRain.Color05.Default}
          />
          <XYChart.XAxis
            id="x"
            type="categorical"
            position="bottom"
            formatter={(_value, item) => `${item.cpuCores} %`}
          />
          <XYChart.YAxis id="y" type="numerical" position="left" hidden />
          <XYChart.Legend hidden />
        </XYChart>
      </Frame>

      <Frame title="Vertical TTB — multiple series">
        <XYChart data={data} width="100%">
          <XYChart.BarSeries
            variant="single"
            x0Accessor="serviceId"
            y1Accessor="cpuCores"
            seriesIdAccessor="multipleSeries"
            nameAccessor="displayName"
            labelAccessor="barLabel"
            xAxisId="x"
            yAxisId="y"
            colorPalette="rainbow"
          />
          <XYChart.XAxis
            id="x"
            type="categorical"
            position="top"
            formatter={(_value, item) => `${item.cpuCores} %`}
          />
          <XYChart.YAxis
            id="y"
            type="numerical"
            position="left"
            hidden
            reversed
          />
        </XYChart>
      </Frame>
    </div>
  );
};
```

### Tooltip behavior with `labelAccessor`

The tooltip adapts its display depending on whether a legend is visible:

- **Legend visible** (default): the `labelAccessor` value is shown as the tooltip header.
- **Legend hidden**: the `labelAccessor` value is shown under the series section in the tooltip body.

To hide the legend, add `<XYChart.Legend hidden />` inside the chart. When no legend is visible, the label moves into the tooltip body automatically.

**TooltipLegend**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const Frame = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ flex: 1, minWidth: 360 }}>
    <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
    {children}
  </div>
);

const data = [
  { name: 'Backend', value: 200, label: 'Identity Provider Service' },
  { name: 'Frontend', value: 165, label: 'Frontend service SSR' },
  { name: 'Cache', value: 130, label: 'Distributed cache layer' },
  { name: 'DB', value: 95, label: 'Database cluster' },
  { name: 'API', value: 64, label: 'API gateway' },
  { name: 'Auth', value: 22, label: 'Auth service' },
];

const TooltipLegend = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        padding: 16,
      }}
    >
      <Frame title="Legend visible">
        <XYChart data={data} width="100%">
          <XYChart.BarSeries
            variant="single"
            y0Accessor="name"
            x1Accessor="value"
            seriesIdAccessor="name"
            nameAccessor="name"
            labelAccessor="label"
            xAxisId="x"
            yAxisId="y"
          />
          <XYChart.XAxis id="x" type="numerical" position="bottom" hidden />
          <XYChart.YAxis
            id="y"
            type="categorical"
            position="left"
            formatter={(_value, item) => `${item.value}`}
          />
        </XYChart>
      </Frame>

      <Frame title="Legend hidden">
        <XYChart data={data} width="100%">
          <XYChart.BarSeries
            variant="single"
            y0Accessor="name"
            x1Accessor="value"
            seriesIdAccessor="name"
            nameAccessor="name"
            labelAccessor="label"
            xAxisId="x"
            yAxisId="y"
          />
          <XYChart.XAxis id="x" type="numerical" position="bottom" hidden />
          <XYChart.YAxis
            id="y"
            type="categorical"
            position="left"
            formatter={(_value, item) => `${item.value}`}
          />
          <XYChart.Legend hidden />
        </XYChart>
      </Frame>
    </div>
  );
};
```
