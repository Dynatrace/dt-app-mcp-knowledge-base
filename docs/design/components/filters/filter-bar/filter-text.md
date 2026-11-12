## Filter text

Use the `SearchInput` within the `FilterBar` for searching accross fields (e.g., multiple columns). Only one `SearchInput` should be used per `FilterBar`. Use the `TextInput` for targeted, text-based filtering (e.g., for one specific column). This allows users to narrow down results by entering keywords or phrases.

**SimpleText**

```tsx
import { FilterBar } from '@dynatrace/strato-components/filters';
import { TextInput, SearchInput } from '@dynatrace/strato-components/forms';

const SimpleText = () => {
  return (
    <FilterBar
      onFilterChange={() => {
        /* Insert your filtering logic here */
      }}
    >
      <FilterBar.Item name="search-filter" label="Search accross fields">
        {/* highlight-next-line */}
        <SearchInput placeholder="Filter" />
      </FilterBar.Item>
      <FilterBar.Item name="text-filter" label="Filter column">
        {/* highlight-next-line */}
        <TextInput />
      </FilterBar.Item>
    </FilterBar>
  );
};
```
