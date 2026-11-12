### 2. Define and execute your query

Define the [query](https://docs.dynatrace.com/docs/shortlink/dql-dynatrace-query-language-hub) you want to execute in your component body. In this example, you'll query logs and chart the count of records over time:

```ts testable
import { useDql } from '@dynatrace-sdk/react-hooks';

export const App = () => {
  const query = 'fetch logs | makeTimeseries count()';

  const result = useDql({
    query,
  });
};
```
