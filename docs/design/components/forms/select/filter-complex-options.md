## Filter complex options

If you're using a custom component as `Select.Option`, the text value of this option can't be determined automatically. To enable the filtering of these options and to show which option is selected, you need to provide a `textValue` with a string representation of the `Select.Option`.

**FilterTextValues**

```tsx
import { useState } from 'react';

import { FormField, Label, Select } from '@dynatrace/strato-components/forms';
import { Text } from '@dynatrace/strato-components/typography';
import Colors from '@dynatrace/strato-design-tokens/colors';

const CustomOption = (props: { background: string }) => (
  <div
    style={{
      background: props.background,
      width: '100%',
      height: '1rem',
    }}
  />
);

const FilterTextValues = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <FormField>
      <Label>Select a color</Label>
      <Select value={value} onChange={setValue}>
        <Select.Trigger>
          <Select.DisplayValue>
            <Text as="p">{value}</Text>
          </Select.DisplayValue>
        </Select.Trigger>
        <Select.Content>
          <Select.Filter />
          <Select.Option
            value="red"
            // highlight-next-line
            textValue="red"
          >
            <CustomOption
              background={Colors.Background.Container.Critical.Accent}
            />
          </Select.Option>
          <Select.Option
            value="green"
            // highlight-next-line
            textValue="green"
          >
            <CustomOption
              background={Colors.Background.Container.Success.Accent}
            />
          </Select.Option>
          <Select.Option
            value="orange"
            // highlight-next-line
            textValue="orange"
          >
            <CustomOption
              background={Colors.Background.Container.Warning.Accent}
            />
          </Select.Option>
          <Select.Option
            value="purple"
            // highlight-next-line
            textValue="purple"
          >
            <CustomOption
              background={Colors.Background.Container.Primary.Accent}
            />
          </Select.Option>
        </Select.Content>
      </Select>
    </FormField>
  );
};
```
