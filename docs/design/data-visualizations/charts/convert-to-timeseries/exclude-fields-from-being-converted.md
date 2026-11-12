## Exclude fields from being converted

The parameter `hiddenFieldIds` provides a way to specify a list of field ids that should not be converted.

**ExcludeFields**

```tsx
import type { QueryResult } from '@dynatrace-sdk/client-query';
import {
  convertToTimeseries,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';

const ExcludeFields = () => {
  const queryResult: QueryResult = {
    metadata: {},
    types: [
      {
        indexRange: [0, 1],
        mappings: {
          'dt.entity.host': {
            type: 'string',
          },
          timeframe: {
            type: 'timeframe',
          },
          value: {
            type: 'double',
          },
          value2: {
            type: 'double',
          },
        },
      },
    ],
    records: [
      {
        'dt.entity.host': 'CI-Prod0',
        timeframe: {
          end: '2022-10-02T12:00:00',
          start: '2022-10-02T00:00:00',
        },
        value: 25,
        value2: 40,
      },
      {
        'dt.entity.host': 'CI-Prod0',
        timeframe: {
          end: '2022-10-03T00:00:00',
          start: '2022-10-02T12:00:00',
        },
        value: 27,
        value2: 46,
      },
    ],
  };
  const { types, records } = queryResult;
  // highlight-next-line
  const timeseriesDataExcluded = convertToTimeseries(records, types, ['value']);

  return <TimeseriesChart data={timeseriesDataExcluded} />;
};
```
