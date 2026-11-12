## Loading

The `loading` prop is a boolean value that can be passed to the `CategoricalBarChart` component to control its loading state. When the loading prop is set to true, the loading indicator appears in the middle of the chart plot to inform the user that the component is currently fetching or processing data. When the loading prop is set to false, the component should display its regular content.

**LoadingWithOutData**

```tsx
import { CategoricalBarChart } from '@dynatrace/strato-components/charts';

const LoadingWithOutData = () => {
  return (
    <CategoricalBarChart
      data={[]}
      // highlight-next-line
      loading
    />
  );
};
```

**LoadingWithData**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const singleAppRatingPositive: CategoricalBarChartData[] = [
  { category: 'Unacceptable', value: 5 },
  { category: 'Poor', value: 56 },
  { category: 'Fair', value: 280 },
  { category: 'Good', value: 129 },
  { category: 'Excellent', value: 17 },
];

const LoadingWithData = () => {
  return (
    <CategoricalBarChart
      data={singleAppRatingPositive}
      // highlight-next-line
      loading
    />
  );
};
```
