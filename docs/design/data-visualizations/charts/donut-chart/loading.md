## Loading

The `loading` prop is a boolean value that can be passed to the `DonutChart` component to control its loading state. When the loading prop is set to true, the loading indicator appears in the middle of the chart plot to inform the user that the component is currently fetching or processing data. When the loading prop is set to false, the component should display its regular content.

**Loading**

```tsx
import { DonutChart } from '@dynatrace/strato-components/charts';
import { Grid } from '@dynatrace/strato-components/layouts';

const apdex = [
  {
    category: 'Excellent',
    value: 35,
  },
  {
    category: 'Good',
    value: 21,
  },
  {
    category: 'Poor',
    value: 12,
  },
  {
    category: 'Unacceptable',
    value: 10,
  },
  {
    category: 'Fair',
    value: 8,
  },
];

const Loading = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="100px">
      <DonutChart
        data={apdex}
        labelAccessor="category"
        valueAccessor="value"
        // highlight-next-line
        loading
      />
      <DonutChart
        // highlight-next-line
        loading
        data={[]}
        labelAccessor="category"
        valueAccessor="value"
      />
    </Grid>
  );
};
```
