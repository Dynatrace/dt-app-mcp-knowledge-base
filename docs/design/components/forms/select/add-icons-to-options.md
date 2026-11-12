## Add icons to options

The `Select.SelectOption` component allows adding icons in front of the option node with the `Select.Prefix` or after it with the `Select.Suffix`. The same can be done to add prefix and suffix icons inside the `Select.DisplayValue` slot, as shown [above](https://developer.dynatrace.com/design/components/forms/Select.md#show-custom-display-value).

**PrefixSuffix**

```tsx
import { Select } from '@dynatrace/strato-components/forms';
import { AppEngineIcon, AppsIcon } from '@dynatrace/strato-icons';

const PrefixSuffix = () => {
  return (
    <Select>
      <Select.Content>
        <Select.Option value="app">
          {/* highlight-start */}
          <Select.Prefix>
            <AppEngineIcon />
          </Select.Prefix>
          {/* highlight-end */}
          App engine
          {/* highlight-start */}
          <Select.Suffix>
            <AppsIcon />
          </Select.Suffix>
          {/* highlight-end */}
        </Select.Option>
      </Select.Content>
    </Select>
  );
};
```
