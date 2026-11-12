## Series actions

A series action is a creator-defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous callbacks. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `CategoricalBarChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**SeriesActions**

```tsx
import { useMemo, useState } from 'react';

import {
  CategoricalBarChart,
  CategoricalBarChartData,
  ChartSeriesAction,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const serviceResponse: CategoricalBarChartData[] = [
  { category: 'WebServer', value: 200, unit: 'ms' },
  { category: 'CreditCardVerification', value: 700, unit: 'ms' },
  { category: 'Payment', value: 439, unit: 'ms' },
  { category: 'API', value: 147, unit: 'ms' },
  { category: 'AddToCart', value: 84, unit: 'ms' },
];
type SeriesAction = Record<string, unknown>;

const SeriesActions = () => {
  const [selectedDimension, setSelectedDimension] = useState<SeriesAction>();
  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    {
      id: 'value',
      header: 'Value',
      accessor: 'value',
    },
  ];
  const data = useMemo(() => {
    if (selectedDimension) {
      const { name, value } = selectedDimension;
      const dimension = [
        { key: 'Name', value: name },
        { key: 'Value', value: JSON.stringify(value) },
      ];
      return [...dimension];
    }
    return [];
  }, [selectedDimension]);

  return (
    <>
      <CategoricalBarChart
        data={serviceResponse}
        // highlight-next-line
        seriesActions={(seriesAction: SeriesAction) => (
          <ChartSeriesAction>
            <ChartSeriesAction.Item
              key={seriesAction.id as string}
              onSelect={() => {
                setSelectedDimension(seriesAction);
              }}
            >
              <ChartSeriesAction.ItemIcon>
                <MagnifyingGlassIcon />
              </ChartSeriesAction.ItemIcon>
              Inspect dimension
            </ChartSeriesAction.Item>
          </ChartSeriesAction>
        )}
      ></CategoricalBarChart>

      {selectedDimension && (
        <>
          <h4>Selected dimension: {selectedDimension['name'] as string}</h4>
          <SimpleTable columns={columns} data={data} />
        </>
      )}
    </>
  );
};
```

**SeriesActionsAsync**

```tsx
import { useMemo, useState } from 'react';

import {
  CategoricalBarChart,
  CategoricalBarChartData,
  ChartSeriesAction,
  type SeriesActionsTemplate,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const serviceResponse: CategoricalBarChartData[] = [
  { category: 'WebServer', value: 200, unit: 'ms' },
  { category: 'CreditCardVerification', value: 700, unit: 'ms' },
  { category: 'Payment', value: 439, unit: 'ms' },
  { category: 'API', value: 147, unit: 'ms' },
  { category: 'AddToCart', value: 84, unit: 'ms' },
];
type SeriesAction = Record<string, unknown>;

const SeriesActionsAsync = () => {
  const [selectedDimension, setSelectedDimension] = useState<SeriesAction>();
  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    {
      id: 'value',
      header: 'Value',
      accessor: 'value',
    },
  ];
  const data = useMemo(() => {
    if (selectedDimension) {
      const { name, value } = selectedDimension;
      const dimension = [
        { key: 'Name', value: name },
        { key: 'Value', value: JSON.stringify(value) },
      ];
      return [...dimension];
    }
    return [];
  }, [selectedDimension]);
  const handleSeriesActions = (
    seriesAction: SeriesAction,
  ): SeriesActionsTemplate => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          <ChartSeriesAction>
            <ChartSeriesAction.Item
              key={seriesAction.id as string}
              onSelect={() => {
                setSelectedDimension(seriesAction);
              }}
            >
              <ChartSeriesAction.ItemIcon>
                <MagnifyingGlassIcon />
              </ChartSeriesAction.ItemIcon>
              Inspect dimension
            </ChartSeriesAction.Item>
          </ChartSeriesAction>,
        );
      }, 500);
    });
  };

  return (
    <>
      <CategoricalBarChart
        data={serviceResponse}
        // highlight-next-line
        seriesActions={handleSeriesActions}
      ></CategoricalBarChart>

      {selectedDimension && (
        <>
          <h4>Selected dimension: {selectedDimension['name'] as string}</h4>
          <SimpleTable columns={columns} data={data} />
        </>
      )}
    </>
  );
};
```
