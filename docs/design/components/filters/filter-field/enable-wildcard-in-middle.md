## Enable wildcard in middle

To enable wildcard-in-middle matching, set `matchesWildcardConversion: true` in the `parserConfig` prop. When enabled, `*` acts as a wildcard in any position within a value, not just at the start or end. Matching values produce `matches-wildcard` or `not-matches-wildcard` operator nodes in the syntax tree.

**WildcardInMiddle**

```tsx
import { FilterField } from '@dynatrace/strato-components/filters';

const WildcardInMiddle = () => {
  return (
    <FilterField
      aria-label="Filter data with wildcard in middle"
      defaultValue="k8s.cluster.name = emea-*-prod"
      // highlight-next-line
      parserConfig={{ matchesWildcardConversion: true }}
      autoSuggestions
    />
  );
};
```

- You can use `*` in any position, for example `emea-*-prod`.
- Multiple wildcards in one value are supported, for example `emea-*-pr*od`.
- `**` (two consecutive wildcards) is marked as an error.
- `\*` escapes to a literal asterisk and does not act as a wildcard.
- Existing `starts-with` / `ends-with` / `contains` behavior (edge-only wildcards like `*value`, `value*`, `*value*`) is unaffected.
- Unlike other special characters, double quotes **don't** suppress wildcard semantics: `"emea-*-prod"` still produces a `matches-wildcard` result. Use `\*` to produce a literal asterisk.
- When a value combines a middle wildcard with an edge wildcard, for example `wil*dcard*`, all `*` characters are preserved. The edge wildcard isn't stripped.

For per-key scoping, use the existing `validatorMap.comparisonOperators` allow-list once the flag is on. This works the same as for `starts-with`, `ends-with`, and `contains`.

> **Note**
>
> `matchesWildcardConversion` will be enabled by default with the next major release. See [Upcoming changes](https://developer.dynatrace.com/changelogs/design-system/upcoming-changes.md) for details.

For details on mapping `matches-wildcard` and `not-matches-wildcard` to a DQL command, see the section [Convert syntax tree to DQL](#convert-syntax-tree-to-dql).
