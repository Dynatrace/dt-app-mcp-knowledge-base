## Enable search (\* \~)

To enable the search operator (`* ~`), set `searchConversion: true` in the `parserConfig` prop. While the matches phrase comparison operator is used to search in a specific field, the search operator is used to look for matches in the whole record.

> **Note**
>
> `search` can't be used in groups and can't be combined with non-search statements using the logical `OR` operator.

For details on mapping `search` to a DQL command, and when to use different comparison operators, see the documentation on [translation to DQL](#convert-syntax-tree-to-dql).

**Search**

```tsx
import { FilterField } from '@dynatrace/strato-components/filters';

const Search = () => {
  return (
    <FilterField
      aria-label="Filter data with search"
      // highlight-next-line
      parserConfig={{ searchConversion: true }}
      autoSuggestions
    />
  );
};
```
