## Disable

You can disable the entire `RadioGroup` by adding the `disabled` prop to it. Alternatively, you can also disable individual items by adding the `disabled` prop to the `Radio` item.

**Disabled**

```tsx
import {
  FieldSet,
  Radio,
  RadioGroup,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const Disabled = () => {
  return (
    <Flex gap={8}>
      <FieldSet>
        <FieldSet.Legend>Disabled RadioGroup</FieldSet.Legend>
        <RadioGroup
          // highlight-next-line
          disabled
          name="radio-disabled"
        >
          <Radio aria-label="hosts" value="hosts">
            Hosts
          </Radio>
          <Radio aria-label="services" value="services">
            Services
          </Radio>
          <Radio aria-label="processGroups" value="processGroups">
            Process Groups
          </Radio>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldSet.Legend>Disabled Radio</FieldSet.Legend>
        <RadioGroup name="fieldset-disabled">
          <Radio
            aria-label="hosts"
            value="hosts"
            // highlight-next-line
            disabled
          >
            Hosts
          </Radio>
          <Radio aria-label="services" value="services">
            Services
          </Radio>
          <Radio aria-label="processGroups" value="processGroups">
            Process Groups
          </Radio>
        </RadioGroup>
      </FieldSet>
    </Flex>
  );
};
```
