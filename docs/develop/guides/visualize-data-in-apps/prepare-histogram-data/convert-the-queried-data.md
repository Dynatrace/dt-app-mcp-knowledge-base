## Convert the queried data

The [HistogramChart](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/HistogramChart/index.mdx/) component expects `HistogramSeries[]` as data prop. A `HistogramSeries` object contains `HistogramBin[]` and name property. The `HistogramBin` object consists of `value`, `start`, and `end`. The `start` and `end` properties correspond with the start and end values from the query result. In the code below, you extract these values from the query result and construct a `HistogramSeries[]` that you can pass to the component, as follows:

```tsx title="ui/app/components/HistogramPage.tsx"
import React from 'react';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { QueryResult, ResultRecord } from '@dynatrace-sdk/client-query';
import { HistogramSeries } from '@dynatrace/strato-components/charts';

// highlight-start
const convertQueryResult = (data: QueryResult): HistogramSeries[] => {
  const result = new Map<string, HistogramSeries>();

  for (const record of data.records) {
    if (!record) continue;
    const creditCard = record['cardType'] as string;
    const amount = Number(record['count']);

    const range = record['range'] as ResultRecord | null | undefined;
    if (!range) continue;
    const start = Number(range['start']);
    const end = Number(range['end']);

    let series = result.get(creditCard);
    if (!series) {
      series = { name: creditCard, bins: [] };
      result.set(creditCard, series);
    }
    series.bins.push({ from: start, to: end, value: amount });
  }
  return Array.from(result.values());
};
// highlight-end

export const HistogramPage = () => {
  const queryResult = useDql({
    query: `fetch bizevents
      | filter isNotNull(amount) and isNotNull(cardType)
      | summarize count = count(), by:{cardType, range = range(amount, 100)}`,
  });
};
```
