### Full code example

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { convertToTimeseries, TimeseriesChart } from '@dynatrace/strato-components/charts';

export const App = () => {
  const query = 'fetch logs | makeTimeseries count()';
  const result = useDql({
    query,
  });

  return (
    result?.data && <TimeseriesChart variant="bar" data={convertToTimeseries(result.data.records, result.data.types)} />
  );
};
```

This operation requires the following scopes:

- `storage:buckets:read`
- `storage:logs:read`

[guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
