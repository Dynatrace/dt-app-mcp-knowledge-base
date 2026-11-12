## Demo

**Basic**

```tsx
import { useMemo } from 'react';

import {
  SimpleTable,
  type SimpleTableColumnDef,
} from '@dynatrace/strato-components/tables';

const Basic = () => {
  const data = useMemo(
    () => [
      {
        host: 'et-demo-2-win4',
        traffic: '213.4',
        memoryTotal: 5830000000,
        timestamp: '2022-09-26T12:45:07Z',
        price: 290,
      },
      {
        host: 'et-demo-2-win3',
        traffic: '374',
        memoryTotal: 3520000000,
        timestamp: '2022-09-27T14:10:02Z',
        price: 324,
      },
      {
        host: 'et-demo-2-win1',
        traffic: '625',
        memoryTotal: 4670000000,
        timestamp: '2022-09-27T13:10:02Z',
        price: 343,
      },
      {
        host: 'et-demo-2-win8',
        traffic: '98.7',
        memoryTotal: 5820000000,
        timestamp: '2022-09-28T11:29:10Z',
        price: 289,
      },
      {
        host: 'dev-demo-5-macOS',
        traffic: '164.6',
        memoryTotal: 3460000000,
        timestamp: '2022-09-28T10:22:56Z',
        price: 193,
      },
    ],
    [],
  );

  const columns = useMemo<SimpleTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Host',
        accessor: 'host',
        id: 'host',
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
      },
      {
        header: 'Memory Total',
        accessor: 'memoryTotal',
        id: 'memoryTotal',
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
      },
    ],
    [],
  );

  return <SimpleTable columns={columns} data={data} />;
};
```
