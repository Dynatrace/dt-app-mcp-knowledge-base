## Change chart colors

The `DonutChart` provides several ways to customize the appearance of your data:

1. **Predefined Color Palettes**: Choose from a set of built-in color palettes.
2. **Custom Colors**: Define your own color schemes.
3. **Color Rules**: Apply conditional coloring based on data values.

### Use color palettes

The `DonutChart` provides a set of predefined color palettes and it also accepts custom color palettes. See [coloring](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md) for more details.

### Direct color assignment

You can directly assign colors to specific slices by including a `color` property in your data. This takes precedence over the color palette.

**Coloring**

```tsx
import { DonutChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const employeesByDepartment = [
  { category: 'Sales', value: 12 },
  { category: 'Marketing', value: 10 },
  { category: 'Product Development', value: 8 },
  { category: 'Customer Service', value: 7 },
  { category: 'Human Resources', value: 6 },
  { category: 'Finance', value: 5 },
  { category: 'Operations', value: 5 },
  { category: 'IT', value: 4 },
  { category: 'Legal', value: 4 },
  { category: 'Research and Development', value: 3 },
  { category: 'Logistics', value: 3 },
  { category: 'Purchasing', value: 3 },
  { category: 'Quality', value: 3 },
  { category: 'Administration', value: 3 },
  { category: 'Security', value: 3 },
  { category: 'Maintenance', value: 3 },
];

const employeesByDepartmentOverwritten = [
  { category: 'Sales', value: 12 },
  { category: 'Marketing', value: 10 },
  { category: 'Product Development', value: 8 },
  { category: 'Customer Service', value: 7 },
  { category: 'Human Resources', value: 6 },
  { category: 'Finance', value: 5 },
  { category: 'Operations', value: 5 },
  { category: 'IT', value: 4 },
  { category: 'Legal', value: 4 },
  { category: 'Research and Development', value: 3, color: 'red' },
  { category: 'Logistics', value: 3 },
  { category: 'Purchasing', value: 3 },
  { category: 'Quality', value: 3 },
  { category: 'Administration', value: 3 },
  { category: 'Security', value: 3 },
  { category: 'Maintenance', value: 3 },
];

const Coloring = () => {
  return (
    <Flex flexDirection="column">
      <p>Chart displayed with the default color palette (Categorical)</p>
      <DonutChart
        data={employeesByDepartment}
        labelAccessor="category"
        valueAccessor="value"
        unit="%"
        width={300}
      />

      <p>Chart displayed with a chosen color palette (blue-moss)</p>
      <DonutChart
        data={employeesByDepartment}
        labelAccessor="category"
        valueAccessor="value"
        unit="%"
        width={300}
        // highlight-next-line
        colorPalette="blue-moss"
      />

      <p>Chart displayed with a category overwritten (blue-moss)</p>
      <DonutChart
        data={employeesByDepartmentOverwritten}
        labelAccessor="category"
        valueAccessor="value"
        unit="%"
        width={300}
        // highlight-next-line
        colorPalette="blue-moss"
      />
    </Flex>
  );
};
```

### Use color rules

For more advanced coloring scenarios, you can use the `DonutChart.ColorRule` slot to apply conditional coloring based on your data values. This is particularly useful for highlighting specific data points or applying business logic to your visualizations.

**ColorRules**

```tsx
import { DonutChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const expenseData = [
  { category: 'Rent', value: 1200 },
  { category: 'Groceries', value: 400, lastUpdated: new Date('2024-01-15') },
  { category: 'Utilities', value: 250, lastUpdated: new Date('2024-01-10') },
  {
    category: 'Entertainment',
    value: 150,
    lastUpdated: new Date('2024-01-20'),
  },
  { category: 'Dining Out', value: 300, lastUpdated: new Date('2024-01-18') },
  {
    category: 'Transportation',
    value: 200,
    lastUpdated: new Date('2024-01-05'),
  },
  { category: 'Health', value: 180, lastUpdated: new Date('2024-01-22') },
  {
    category: 'Subscriptions',
    value: 100,
    lastUpdated: new Date('2024-01-01'),
  },
];

const ColorRules = () => {
  const width = 350;
  return (
    <Flex>
      <div style={{ width }}>
        <DonutChart
          data={expenseData}
          labelAccessor="category"
          valueAccessor="value"
          unit="$"
          colorPalette="categorical"
        >
          {/* highlight-start */}
          <DonutChart.ColorRule
            comparator="greater-than"
            matchValue={500}
            color="red"
          />
          <DonutChart.ColorRule
            valueAccessor="category"
            comparator="equals"
            matchValue="Groceries"
            color="#2C7B00"
          />
          <DonutChart.ColorRule
            valueAccessor="lastUpdated"
            comparator="less-than"
            matchValue={new Date('2024-01-15')}
            color="rebeccapurple"
          />
          {/* highlight-end */}
        </DonutChart>
      </div>
      <div style={{ width }}>
        <DonutChart
          data={expenseData}
          labelAccessor="category"
          valueAccessor="value"
          unit="$"
          colorPalette="categorical"
        />
      </div>
    </Flex>
  );
};
```

Color rules can be applied based on different criteria:

- **Value-based rules**: Color slices based on their numeric value
- **Category-based rules**: Color specific categories
- **Date-based rules**: Color based on date comparisons
- **Custom property rules**: Color based on any property in your data

For more details about available comparators and options, see the [Color Rules](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md#override-series-color-with-colorrule) section.
