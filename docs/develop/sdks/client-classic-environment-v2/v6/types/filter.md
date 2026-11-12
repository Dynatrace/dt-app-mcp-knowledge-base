### Filter

A dimensional or series filter on a metric.

| Name                | Type                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| operands            | Array\<[Filter](#filter)>                                                                                                                                                     | If the type is `not`, `and` or `or`, then holds the contained filters.                                                                                                                                                                                                                                            |
| referenceInvocation | [Invocation](#invocation)                                                                                                                                                     | Invocation of a function, e.g. the `entitySelector` function.                                                                                                                                                                                                                                                     |
| referenceString     | string                                                                                                                                                                        | For filters that match a dimension against a valkue, such as `eq` or `ne`, holds the value to compare the dimension against.                                                                                                                                                                                      |
| referenceValue      | number                                                                                                                                                                        | For the operands of `series` filters that match against a number, holds the number to compare against.                                                                                                                                                                                                            |
| rollup              | [Rollup](#rollup)                                                                                                                                                             | A way of viewing a series as a single value for the purpose of sorting or series-based filters.                                                                                                                                                                                                                   |
| targetDimension     | string                                                                                                                                                                        | If the type applies to a dimension, then holds the target dimension.                                                                                                                                                                                                                                              |
| targetDimensions    | Array\<string>                                                                                                                                                                | If the type applies to n dimensions, then holds the target dimensions. Currently only used for the `remainder` filter.                                                                                                                                                                                            |
| type                | "and" \| "contains" \| "eq" \| "existsKey" \| "ge" \| "gt" \| "in" \| "le" \| "lt" \| "ne" \| "not" \| "or" \| "otherwise" \| "prefix" \| "remainder" \| "series" \| "suffix" | Type of this filter, determines which other fields are present.Can be any of: * `eq`
  ,
* `ne`
  ,
* `prefix`
  ,
* `in`
  ,
* `remainder`
  ,
* `suffix`
  ,
* `contains`
  ,
* `existsKey`
  ,
* `series`
  ,
* `or`
  ,
* `and`
  ,
* `not`
  ,
* `ge`
  ,
* `gt`
  ,
* `le`
  ,
* `lt`
  ,
* `otherwise`
  . |
