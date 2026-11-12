## Demo

Pass an array in the format of `RangedFieldTypes` and dataset in the format of `ResultRecord` and receive an array of `Timeseries` data.

**ConvertTimeseries**

```tsx
import type { QueryResult } from '@dynatrace-sdk/client-query';
import {
  convertToTimeseries,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';

const queryResult: QueryResult = {
  metadata: {},
  types: [
    {
      indexRange: [0, 3],
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
    },
    {
      'dt.entity.host': 'CI-Prod0',
      timeframe: {
        end: '2022-10-03T00:00:00',
        start: '2022-10-02T12:00:00',
      },
      value: 25.39997333386666,
    },
    {
      'dt.entity.host': 'CI-Prod1',
      timeframe: {
        end: '2022-10-02T12:00:00',
        start: '2022-10-02T00:00:00',
      },
      value: 25.66654321673507,
    },
    {
      'dt.entity.host': 'CI-Prod1',
      timeframe: {
        end: '2022-10-03T00:00:00',
        start: '2022-10-02T12:00:00',
      },
      value: 26.066161059568245,
    },
  ],
};

const ConvertTimeseries = () => {
  const { types, records } = queryResult;
  // highlight-next-line
  const timeseriesData = convertToTimeseries(records, types);

  return <TimeseriesChart data={timeseriesData} />;
};
```
