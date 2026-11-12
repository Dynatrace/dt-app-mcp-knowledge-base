## Show selected options first

In the `Select`, you can use the `showSelectedOptionsFirst` prop to configure whether the options should be reordered to show the selected options at the top. If this is set to `true` the options will be reordered when the overlay is closed and opened again. For elected options inside an `Select.Group`, this will position its group at the top, as well as order the option to the top within the group.

**ShowSelectedFirst**

```tsx
import { Select } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const ShowSelectedFirst = () => {
  return (
    <Flex>
      <Select multiple>
        <Select.Content
          // highlight-next-line
          showSelectedOptionsFirst={true}
        >
          <Select.Option value="austria">Austria</Select.Option>
          <Select.Option value="germany">Germany</Select.Option>
          <Select.Option value="italy">Italy</Select.Option>
          <Select.Option value="spain">Spain</Select.Option>
        </Select.Content>
      </Select>
      <Select multiple>
        <Select.Content
          // highlight-next-line
          showSelectedOptionsFirst={true}
        >
          <Select.Group>
            <Select.GroupLabel>Dynatrace Europe</Select.GroupLabel>
            <Select.Option value="austria">Austria</Select.Option>
            <Select.Option value="estonia">Estonia</Select.Option>
            <Select.Option value="poland">Poland</Select.Option>
            <Select.Option value="spain">Spain</Select.Option>
            <Select.Option value="uk">United Kingdom</Select.Option>
          </Select.Group>
          <Select.Group>
            <Select.GroupLabel>Dynatrace North America</Select.GroupLabel>
            <Select.Option value="california">California</Select.Option>
            <Select.Option value="canada">Canada</Select.Option>
            <Select.Option value="massachusetts">Massachusetts</Select.Option>
            <Select.Option value="michigan">Michigan</Select.Option>
          </Select.Group>
          <Select.Group>
            <Select.GroupLabel>Other Dynatrace locations</Select.GroupLabel>
            <Select.Option value="brazil">Brazil</Select.Option>
            <Select.Option value="japan">Japan</Select.Option>
            <Select.Option value="australia">Australia</Select.Option>
          </Select.Group>
        </Select.Content>
      </Select>
    </Flex>
  );
};
```
