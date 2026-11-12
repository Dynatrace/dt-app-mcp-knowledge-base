## TopList.ColorRule

`TopList.ColorRule` provides a slot to apply conditional coloring to bars based on their datapoint values.

**`ColorRuleProps`**

```ts
export declare type ColorRuleProps = {
    valueAccessor?: string;
    comparator: ComparisonOperators;
    matchValue: MatchValue;
} & ColorSpecification;
```
