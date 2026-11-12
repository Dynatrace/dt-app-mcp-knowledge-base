## Add prefix or suffix slot

You can render icons at the beginning and the end of the `Chip` by using the `Chip.Prefix` and `Chip.Suffix` slots.

**WithPrefixSuffix**

```tsx
import { Chip } from '@dynatrace/strato-components/content';
import { FilterIcon, MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const WithPrefixSuffix = () => {
  return (
    <Chip>
      {/* highlight-start */}
      <Chip.Prefix>
        <MagnifyingGlassIcon />
      </Chip.Prefix>
      {/* highlight-end */}
      kxo25992
      {/* highlight-start */}
      <Chip.Suffix>
        <FilterIcon />
      </Chip.Suffix>
      {/* highlight-end */}
    </Chip>
  );
};
```
