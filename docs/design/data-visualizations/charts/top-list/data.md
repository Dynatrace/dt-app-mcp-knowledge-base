## Data

`TopList` requires three props that describe the shape of each record in `data`.

- `data`: an array of plain objects—each object represents one bar. Field names are unrestricted; you choose them and reference them via the accessors below.
- `valueAccessor`: the string key whose value is the numerical value that determines bar length.
- `labelAccessor`: the string key whose value is the text shown inside each bar.

**SingleSeries**

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

const SingleSeries = () => {
  return (
    <TopList data={data} labelAccessor="barLabel" valueAccessor="cpuCores" />
  );
};
```
