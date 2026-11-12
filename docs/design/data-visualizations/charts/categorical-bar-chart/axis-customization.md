## Axis customization

The category axis is defined as the axis containing the names of the chart's categories. The value axis contains numeric values. Both will be positioned either on the x- or y-axis, depending on the selected `layout`. When it's `horizontal`, the category axis is the x-axis and the value axis is the y-axis, and when it's `vertical`, vice versa.

### Category axis

In the category axis, tick labels have a limited space, which depends on the number of categories and the chart's width. If the tick label is larger than the available space, it's truncated with ellipsis in the middle. `tickLabelLayout` can be used to change the orientation of the tick labels to make better use of the available space. The `label` prop can optionally be used to set the title for the axis.

The `maxSize` prop defines the maximum growth in pixels of the axis. If the `maxSize` value is bigger than the space that the axis has to display, the `maxSize` value will be omitted.

### Value axis

In the value axis, a `min` and `max` can be used in order to set the extents of the chart. If no values are specified, these extents will be derived from the data. When all the values are positive, the `min` is 0 and the `max` will be the largest value. When all the values are negative, the `min` is the lowest value, and the `max` is 0. If there are mixed values, the `min` is the lowest value, and the `max` is the highest value. The `label` prop can optionally be used to set the title for the axis. The value axis allows one to choose the type of scale by setting the `scale` property. This property lets you select between two options: `linear` or `logarithmic` (log). A linear scale distributes values evenly, making it suitable for data with a consistent rate of change. Meanwhile, a logarithmic scale distributes values according to a logarithm, making it ideal for data that spans a wide range or grows exponentially.

**AxisConfiguration**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const salesByMonth: CategoricalBarChartData[] = [
  { category: 'January', value: 817 },
  { category: 'February', value: 988 },
  { category: 'March', value: 1687 },
  { category: 'April', value: 1472 },
  { category: 'May', value: 1221 },
  { category: 'June', value: 1890 },
  { category: 'July', value: 2003 },
  { category: 'August', value: 1782 },
  { category: 'September', value: 2317 },
  { category: 'October', value: 1120 },
  { category: 'November', value: 1072 },
  { category: 'December', value: 2712 },
];

const companyProfitInDollars = [
  { category: '1972', value: 1200, unit: '$' },
  { category: '1973', value: 1000, unit: '$' },
  { category: '1974', value: 1300, unit: '$' },
  { category: '1975', value: 1500, unit: '$' },
  { category: '1977', value: 3000, unit: '$' },
  { category: '1978', value: 4300, unit: '$' },
  { category: '1979', value: 5020, unit: '$' },
  { category: '1980', value: 12030, unit: '$' },
  { category: '1981', value: 15700, unit: '$' },
  { category: '1982', value: 22000, unit: '$' },
  { category: '1983', value: 21400, unit: '$' },
  { category: '1984', value: 23000, unit: '$' },
  { category: '1985', value: 25300, unit: '$' },
  { category: '1986', value: 28700, unit: '$' },
  { category: '1987', value: 32000, unit: '$' },
  { category: '1988', value: 41500, unit: '$' },
  { category: '1989', value: 40000, unit: '$' },
  { category: '1990', value: 41000, unit: '$' },
  { category: '1991', value: 41240, unit: '$' },
  { category: '1992', value: 45200, unit: '$' },
  { category: '1993', value: 45000, unit: '$' },
  { category: '1994', value: 48200, unit: '$' },
  { category: '1995', value: 50200, unit: '$' },
  { category: '1996', value: 65000, unit: '$' },
  { category: '1997', value: 68200, unit: '$' },
  { category: '1998', value: 68000, unit: '$' },
  { category: '1999', value: 92500, unit: '$' },
  { category: '2000 ', value: 90000, unit: '$' },
];

const AxisConfiguration = () => {
  return (
    <>
      <CategoricalBarChart data={salesByMonth}>
        {/* highlight-start */}
        <CategoricalBarChart.ValueAxis min={40} max={3000} label="Sales" />
        <CategoricalBarChart.CategoryAxis
          tickLabelLayout="vertical"
          label="2022"
        />
        {/* highlight-end */}
      </CategoricalBarChart>

      <CategoricalBarChart data={companyProfitInDollars}>
        {/* highlight-start */}
        <CategoricalBarChart.ValueAxis scale="log" />
        <CategoricalBarChart.CategoryAxis />
        {/* highlight-end */}
      </CategoricalBarChart>
    </>
  );
};
```
