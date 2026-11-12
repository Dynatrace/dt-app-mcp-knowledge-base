## Escape characters in suggestions

`FilterField` uses `space` as a delimiter between keys, comparison operators, values, and statements. Learn the [filter field syntax](https://docs.dynatrace.com/docs/get-started/dynatrace-ui/ui-filter-field).

To avoid invalid syntax when suggestions are applied, use the `value` prop and the children of the `FilterField.Suggestion` component. The `value` is used to apply the suggestion, while the `children` are used to render the suggestion in the overlay.

In general, the following characters need to be escaped, either by wrapping the whole value in double quotes, or by using a `\` to escape single characters:

- \* Asterisk
- () Parentheses
- ! Exclamation
- \< > Angles
- \= Equals
- " Quote
- \~ Tilde

When the insertion strategy for suggestions is set to `replace-token`, the applied value is automatically escaped, if needed.

The following examples are also valid for keys:

- Exact match of comparison operator
  - `foo = \=`
  - `foo = \<`
  - `foo = ">"`
  - `foo = "!="`
- Starts with / ends with operator in value
  - `foo = *"ba*r"` (ends with `ba*r`)
  - `foo = ba\*r*` (starts with `ba*r`)
  - `foo = *"ba*r"*` (contains `ba*r`)
- Space in value
  - `foo = "b a r"`
  - `foo = b\ ar`

### Programmatically escape suggestion values

The `escapeFilterFieldSuggestion` utility allows you to escape suggestion values. This is the same function applied internally by the `FilterField`, making it ideal for verifying that manually escaped values match the expected format.
