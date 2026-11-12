## Get the data

A histogram chart visualizes the distribution in a numerical data set. For this guide, you'll query data from Grail on Discover Dynatrace using `useDql` [react hook](https://developer.dynatrace.com/contents/docs/develop/sdks/react-hooks/index.md/) and use business events with credit card data.

You'll use the [range function](https://dt-url.net/dql_function_range) to help structure the query data. The function takes in some numerical data and an interval and returns a `start` and an `end` value for each range, as follows:

```tsx title="ui/app/components/HistogramPage.tsx"
import React from 'react';
import { useDql } from '@dynatrace-sdk/react-hooks';

export const HistogramPage = () => {
  // highlight-start
  const queryResult = useDql({
    query: `fetch bizevents
      | filter isNotNull(amount) and isNotNull(cardType)
      | summarize count = count(), by:{cardType, range = range(amount, 100)}`,
  });
};
// highlight-end
```

This operation requires the scope `storage:bizevents:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

Now that you've got the data, the next step is to convert the data to pass it to the component.
