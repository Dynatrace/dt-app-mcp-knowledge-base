## Display the data in the component

Now that you've queried and converted the data, the next step is to make it visible in the UI. As shown in the code below, you create a new component for our chart and import the necessary components. Then, you pass the function with the data as its argument to the HistogramChart component, as follows:

```tsx title="ui/app/components/HistogramPage.tsx"
import React from 'react';
import { TypedQueryResult, useDql } from '@dynatrace-sdk/react-hooks';
import { ResultRecord } from '@dynatrace-sdk/client-query';
// highlight-start
import { Heading } from '@dynatrace/strato-components/typography';
import { ProgressCircle } from '@dynatrace/strato-components/content';
import { HistogramChart, HistogramSeries } from '@dynatrace/strato-components/charts';
import { Surface } from '@dynatrace/strato-components/layouts';
import { formatCurrency } from '@dynatrace-sdk/units';
// highlight-end

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

  // highlight-start
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
  // highlight-end
};
```
