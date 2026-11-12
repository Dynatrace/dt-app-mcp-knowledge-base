## CategoricalBarChart.CategoryAxis

To configure the category axis, add `CategoricalBarChart.CategoryAxis` to the categorical bar chart.

**`CategoricalBarChartCategoryAxisProps`**

| Prop              | Type     | Default        | Description                                                                                                                                                                                                                                                    |
| ----------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tickLabelLayout` | `Layout` | `'horizontal'` | Whether the tick labels are displayed in a 'vertical' or 'horizontal' layout.                                                                                                                                                                                  |
| `label`           | `string` |                |                                                                                                                                                                                                                                                                |
| `maxSize`         | `number` |                | Max size in pixels for the category axis. Size depends on the position this axis is assigned to – left axis will use width, bottom axis will use height. If there's no enough space for this maxSize, category axis will only take the available space for it. |
