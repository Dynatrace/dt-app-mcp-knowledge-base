## Labels

By default, slice labels are enabled. In order to hide all the labels in the chart, add the `hidden` prop to the `<PieChart.Labels hidden/>` subcomponent.

Labels that don't fit a specific slice will be automatically hidden independent of the configuration value setting.

The default values for the labels will be `relative` but you can also set it to the `absolute` value, using the `valueType` prop

**Labels**

```tsx
import { PieChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const conversions = [
  {
    category: 'EMEA',
    value: 66,
  },
  {
    category: 'APAC',
    value: 25,
  },
  {
    category: 'LATAM',
    value: 33,
  },
  {
    category: 'NA',
    value: 5,
  },
];

const Labels = () => {
  return (
    <Flex flexDirection="column">
      <p>Chart with displayed labels (default - relative value)</p>
      <PieChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
        width={300}
      >
        <PieChart.Legend hidden />
      </PieChart>

      <p>Chart with displayed labels (absolute value)</p>
      <PieChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
        width={300}
      >
        {/* highlight-next-line */}
        <PieChart.Labels valueType="absolute" />
        <PieChart.Legend hidden />
      </PieChart>

      <p>Chart with hidden labels</p>
      <PieChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
        width={300}
      >
        {/* highlight-next-line */}
        <PieChart.Labels hidden />
        <PieChart.Legend hidden />
      </PieChart>
    </Flex>
  );
};
```
