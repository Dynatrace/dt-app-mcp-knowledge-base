## Error state

The `ErrorState` subcomponent is responsible for handling errors in a graceful manner, ultimately improving the overall user experience. Its primary function is to catch any errors that may occur with the data and display a fallback UI instead of crashing the entire application. The fallback UI occupies the full width and height of the chart, ensuring that users are still provided with a meaningful interface even in the presence of errors.

**DefaultError**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const investment: CategoricalBarChartData[] = [
  {
    category: 'Q1',
    value: { 'R&D': 140000, HR: 40000, Sales: 500000, Support: 400000 },
    unit: '$',
  },
  {
    category: 'Q2',
    value: { 'R&D': 200000, HR: 20000, Sales: 520000, Support: 380000 },
    unit: '$',
  },
  {
    category: 'Q3',
    value: { 'R&D': 225000, HR: 37000, Sales: 510000, Support: 427000 },
    unit: '$',
  },
  {
    category: 'Q4',
    value: { 'R&D': 278000, HR: 45000, Sales: 540000, Support: 489300 },
    unit: '$',
  },
];

const DefaultError = () => {
  return (
    <CategoricalBarChart data={investment}>
      <CategoricalBarChart.ValueAxis
        formatter={() => {
          throw new Error('Here is the error.');
        }}
      />
    </CategoricalBarChart>
  );
};
```

The `ErrorState` subcomponent offers a versatile feature that enables it to handle both default and custom error messages. You can provide a custom message through the `ErrorState` subcomponent, which will then override the default error message. This flexibility allows developers to tailor error messages to their specific needs and requirements, ensuring a more personalized and informative user experience.

**CustomError**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const investment: CategoricalBarChartData[] = [
  {
    category: 'Q1',
    value: { 'R&D': 140000, HR: 40000, Sales: 500000, Support: 400000 },
    unit: '$',
  },
  {
    category: 'Q2',
    value: { 'R&D': 200000, HR: 20000, Sales: 520000, Support: 380000 },
    unit: '$',
  },
  {
    category: 'Q3',
    value: { 'R&D': 225000, HR: 37000, Sales: 510000, Support: 427000 },
    unit: '$',
  },
  {
    category: 'Q4',
    value: { 'R&D': 278000, HR: 45000, Sales: 540000, Support: 489300 },
    unit: '$',
  },
];

const CustomError = () => {
  return (
    <CategoricalBarChart data={investment}>
      <CategoricalBarChart.ValueAxis
        formatter={() => {
          throw new Error('Here is the error.');
        }}
      />
      {/* highlight-start */}
      <CategoricalBarChart.ErrorState>
        An error ocurred in the chart.
      </CategoricalBarChart.ErrorState>
      {/* highlight-end */}
    </CategoricalBarChart>
  );
};
```

The `ErrorState` subcomponent provides the flexibility to format custom error messages using HTML, which allows for enhanced customization and adaptability in presenting error information. Furthermore, it is possible to incorporate the original thrown error within your custom error message, ensuring that users receive comprehensive and relevant information when an error occurs.

**FormattedCustomError**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const investment: CategoricalBarChartData[] = [
  {
    category: 'Q1',
    value: { 'R&D': 140000, HR: 40000, Sales: 500000, Support: 400000 },
    unit: '$',
  },
  {
    category: 'Q2',
    value: { 'R&D': 200000, HR: 20000, Sales: 520000, Support: 380000 },
    unit: '$',
  },
  {
    category: 'Q3',
    value: { 'R&D': 225000, HR: 37000, Sales: 510000, Support: 427000 },
    unit: '$',
  },
  {
    category: 'Q4',
    value: { 'R&D': 278000, HR: 45000, Sales: 540000, Support: 489300 },
    unit: '$',
  },
];

const FormattedCustomError = () => {
  return (
    <CategoricalBarChart data={investment}>
      <CategoricalBarChart.ValueAxis
        formatter={() => {
          throw new Error('Here is the error.');
        }}
      />
      {/* highlight-start */}
      <CategoricalBarChart.ErrorState>
        <span>
          An error ocurred in the <b>chart</b>.
        </span>
      </CategoricalBarChart.ErrorState>
      {/* highlight-end */}
    </CategoricalBarChart>
  );
};
```

**ThrownErrorInCustomMessage**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const investment: CategoricalBarChartData[] = [
  {
    category: 'Q1',
    value: { 'R&D': 140000, HR: 40000, Sales: 500000, Support: 400000 },
    unit: '$',
  },
  {
    category: 'Q2',
    value: { 'R&D': 200000, HR: 20000, Sales: 520000, Support: 380000 },
    unit: '$',
  },
  {
    category: 'Q3',
    value: { 'R&D': 225000, HR: 37000, Sales: 510000, Support: 427000 },
    unit: '$',
  },
  {
    category: 'Q4',
    value: { 'R&D': 278000, HR: 45000, Sales: 540000, Support: 489300 },
    unit: '$',
  },
];

const ThrownErrorInCustomMessage = () => {
  return (
    <CategoricalBarChart data={investment}>
      <CategoricalBarChart.ValueAxis
        formatter={() => {
          throw new Error('Here is the error.');
        }}
      />
      {/* highlight-start */}
      <CategoricalBarChart.ErrorState>
        {(errorMessage) => (
          <span>Error ocurred in the chart: {errorMessage}.</span>
        )}
      </CategoricalBarChart.ErrorState>
      {/* highlight-end */}
    </CategoricalBarChart>
  );
};
```
