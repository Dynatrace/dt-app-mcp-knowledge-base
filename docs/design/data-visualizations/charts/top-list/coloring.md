## Coloring

`TopList` supports a `colorPalette` prop that applies to the whole chart. It accepts a predefined palette name (e.g. `'categorical'`, `'rainbow'`) or a custom array of hex strings. The default palette is `'categorical'`.

**ColorPalette**

```tsx
import { TopList } from '@dynatrace/strato-components/charts';

const data = [
  {
    cpuCores: 12.4,
    barLabel: 'AuthenticationAndAuthorizationService (eu-west-1)',
  },
  {
    cpuCores: 9.8,
    barLabel: 'PaymentGateway · Stripe Connector · Production · primary',
  },
  {
    cpuCores: 7.2,
    barLabel: 'UserProfileAPI :: profile-service.production.cluster.eu',
  },
  {
    cpuCores: 5.5,
    barLabel: 'NotificationService — push / email / sms dispatcher',
  },
  {
    cpuCores: 3.1,
    barLabel: 'SearchIndexer — fulltext / vector embedding pipeline',
  },
];

const Frame = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ flex: 1, minWidth: 300 }}>
    <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
    {children}
  </div>
);

const ColorPalette = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 16 }}>
      <Frame title="categorical (default)">
        <TopList
          data={data}
          labelAccessor="barLabel"
          valueAccessor="cpuCores"
        />
      </Frame>
      <Frame title="rainbow">
        <TopList
          data={data}
          labelAccessor="barLabel"
          valueAccessor="cpuCores"
          colorPalette="rainbow"
        />
      </Frame>
    </div>
  );
};
```

### Color palette mode

Use the `colorPaletteMode` prop to control how the palette colors are applied to bars. `'single-color'` (default) applies the first palette color to all bars. `'multi-color'` assigns each bar a sequential color from the palette.

**ColorPaletteMode**

```tsx
import { TopList } from '@dynatrace/strato-components/charts';

const data = [
  {
    cpuCores: 12.4,
    barLabel: 'AuthenticationAndAuthorizationService (eu-west-1)',
  },
  {
    cpuCores: 9.8,
    barLabel: 'PaymentGateway · Stripe Connector · Production · primary',
  },
  {
    cpuCores: 7.2,
    barLabel: 'UserProfileAPI :: profile-service.production.cluster.eu',
  },
  {
    cpuCores: 5.5,
    barLabel: 'NotificationService — push / email / sms dispatcher',
  },
  {
    cpuCores: 3.1,
    barLabel: 'SearchIndexer — fulltext / vector embedding pipeline',
  },
];

const Frame = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ flex: 1, minWidth: 300 }}>
    <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
    {children}
  </div>
);

const ColorPaletteMode = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 16 }}>
      <Frame title="single-color (default)">
        <TopList
          data={data}
          labelAccessor="barLabel"
          valueAccessor="cpuCores"
          colorPaletteMode="single-color"
        />
      </Frame>
      <Frame title="multi-color">
        <TopList
          data={data}
          labelAccessor="barLabel"
          valueAccessor="cpuCores"
          colorPaletteMode="multi-color"
        />
      </Frame>
    </div>
  );
};
```

### Use color rules

For more advanced coloring scenarios, you can use the `TopList.ColorRule` slot to apply conditional coloring based on your data values. Each rule is evaluated per datapoint and, when multiple rules match, the last one wins.

**ColorRules**

```tsx
import { TopList } from '@dynatrace/strato-components/charts';

const data = [
  {
    cpuCores: 12.4,
    barLabel: 'AuthenticationAndAuthorizationService (eu-west-1)',
  },
  {
    cpuCores: 9.8,
    barLabel: 'PaymentGateway · Stripe Connector · Production · primary',
  },
  {
    cpuCores: 7.2,
    barLabel: 'UserProfileAPI :: profile-service.production.cluster.eu',
  },
  {
    cpuCores: 5.5,
    barLabel: 'NotificationService — push / email / sms dispatcher',
  },
  {
    cpuCores: 3.1,
    barLabel: 'SearchIndexer — fulltext / vector embedding pipeline',
  },
];

const ColorRules = () => {
  return (
    <TopList
      data={data}
      labelAccessor="barLabel"
      valueAccessor="cpuCores"
      valueFormatter={(value) => `${value} cores`}
    >
      {/* highlight-start */}
      <TopList.ColorRule
        comparator="greater-than"
        valueAccessor="cpuCores"
        matchValue={5}
        color="#f5a623"
      />
      <TopList.ColorRule
        comparator="greater-than"
        valueAccessor="cpuCores"
        matchValue={10}
        color="#dc2c2c"
      />
      {/* highlight-end */}
    </TopList>
  );
};
```

For more details about using color rules, see the [Color Rules](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md#override-series-color-with-colorrule) section.
