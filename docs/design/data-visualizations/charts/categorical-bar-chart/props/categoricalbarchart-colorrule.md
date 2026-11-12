## CategoricalBarChart.ColorRule

`CategoricalBarChart.ColorRule` provides a slot to apply conditional coloring to your chart series based on their values or names.

**`ColorRuleProps`**

```ts
export declare type ColorRuleProps = {
    valueAccessor?: string;
    comparator: ComparisonOperators;
    matchValue: MatchValue;
} & ColorSpecification;
```
