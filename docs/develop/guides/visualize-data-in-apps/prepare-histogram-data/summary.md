## Summary

In this guide, you queried numerical data from Grail and then transformed it into a form that the `HistogramChart` component accepts. Finally, you displayed the data in a histogram chart.

Here's the complete code with all the pieces put together:

**Full code example**

```tsx title="ui/app/components/HistogramPage.tsx"
import React from 'react';
import { TypedQueryResult, useDql } from '@dynatrace-sdk/react-hooks';
import { ResultRecord } from '@dynatrace-sdk/client-query';
import { Heading } from '@dynatrace/strato-components/typography';
import { ProgressCircle } from '@dynatrace/strato-components/content';
import { HistogramChart, HistogramSeries } from '@dynatrace/strato-components/charts';
import { Surface } from '@dynatrace/strato-components/layouts';
import { formatCurrency } from '@dynatrace-sdk/units';

const convertQueryResult = (data: TypedQueryResult): HistogramSeries[] => {
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

export const HistogramPage = () => {
  const queryResult = useDql({
    query: `fetch bizevents
      | filter isNotNull(amount) and isNotNull(cardType)
      | summarize count = count(), by:{cardType, range = range(amount, 100)}`,
  });

  return (
    <Surface>
      <Heading level={2}>Distribution of payments</Heading>
      {queryResult.isLoading && <ProgressCircle />}
      {queryResult.data && (
        <HistogramChart data={convertQueryResult(queryResult.data)}>
          <HistogramChart.XAxis formatter={(value) => formatCurrency(value, 'USD')} />
          <HistogramChart.YAxis label="Number of payments" />
        </HistogramChart>
      )}
    </Surface>
  );
};
```
