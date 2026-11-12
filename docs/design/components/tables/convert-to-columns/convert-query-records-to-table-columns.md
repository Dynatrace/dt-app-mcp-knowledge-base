## Convert query records to table columns

**ConvertColumns**

```tsx
import { useMemo } from 'react';

import type { QueryResult } from '@dynatrace-sdk/client-query';
import {
  convertToColumns,
  DataTable,
} from '@dynatrace/strato-components/tables';

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
        start: '2022-10-02T03:17:42',
        end: '2022-10-02T11:54:09',
      },
      value: 25,
    },
    {
      'dt.entity.host': 'CI-Prod0',
      timeframe: {
        start: '2022-10-02T14:32:17',
        end: '2022-10-03T02:08:55',
      },
      value: 25.39997333386666,
    },
    {
      'dt.entity.host': 'CI-Prod1',
      timeframe: {
        start: '2022-10-01T21:45:30',
        end: '2022-10-02T09:23:14',
      },
      value: 25.66654321673507,
    },
    {
      'dt.entity.host': 'CI-Prod1',
      timeframe: {
        start: '2022-10-02T16:07:48',
        end: '2022-10-03T05:41:22',
      },
      value: 26.066161059568245,
    },
  ],
};

const ConvertColumns = () => {
  const { types, records } = queryResult;
  // highlight-next-line
  const columns = useMemo(() => convertToColumns(types), [types]);

  return <DataTable data={records} columns={columns} />;
};
```
