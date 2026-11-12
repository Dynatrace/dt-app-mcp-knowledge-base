## Formatter

The `valueFormatter` formats the numerical values shown on the Y-axis tick labels and in tooltips. It accepts either a plain function `(value) => string` or an SDK `FormatOptions` object for unit conversion.

**ValueFormatter**

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

const ValueFormatter = () => {
  return (
    <TopList
      data={data}
      labelAccessor="barLabel"
      valueAccessor="cpuCores"
      valueFormatter={(value) => `${value} cores`}
    />
  );
};
```
