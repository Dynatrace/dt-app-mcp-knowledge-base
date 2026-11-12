## Sorting

By default `TopList` sorts bars from highest to lowest value (descending). You can pass a `comparator` function to override this.

**SortOrder**

```tsx
import { TopList } from '@dynatrace/strato-components/charts';

const data = [
  {
    cpuCores: 7.2,
    barLabel: 'AuthenticationAndAuthorizationService (eu-west-1)',
  },
  {
    cpuCores: 12.4,
    barLabel: 'PaymentGateway · Stripe Connector · Production',
  },
  {
    cpuCores: 3.1,
    barLabel: 'UserProfileAPI :: profile-service.production.cluster.eu',
  },
  {
    cpuCores: 9.8,
    barLabel: 'NotificationService — push / email / sms dispatcher',
  },
  {
    cpuCores: 5.5,
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
  <div style={{ flex: 1, minWidth: 260 }}>
    <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
    {children}
  </div>
);

const SortOrder = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 16 }}>
      <Frame title="Descending (default)">
        <TopList
          data={data}
          labelAccessor="barLabel"
          valueAccessor="cpuCores"
        />
      </Frame>
      <Frame title="Ascending">
        <TopList
          data={data}
          labelAccessor="barLabel"
          valueAccessor="cpuCores"
          comparator={(a, b) => Number(a.cpuCores) - Number(b.cpuCores)}
        />
      </Frame>
      <Frame title="Alphabetical by label">
        <TopList
          data={data}
          labelAccessor="barLabel"
          valueAccessor="cpuCores"
          comparator={(a, b) =>
            String(a.barLabel).localeCompare(String(b.barLabel))
          }
        />
      </Frame>
    </div>
  );
};
```
