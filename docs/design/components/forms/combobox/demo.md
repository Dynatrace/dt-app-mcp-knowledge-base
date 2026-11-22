## Demo

**Basic**

```tsx
import { Combobox } from '@dynatrace/strato-components/forms';

const Basic = () => {
  return (
    <Combobox placeholder="Select fruit">
      <Combobox.Content>
        <Combobox.Option value="apple">Apple</Combobox.Option>
        <Combobox.Option value="banana">Banana</Combobox.Option>
        <Combobox.Option value="cherry">Cherry</Combobox.Option>
        <Combobox.Option value="date">Date</Combobox.Option>
        <Combobox.Option value="elderberry">Elderberry</Combobox.Option>
      </Combobox.Content>
    </Combobox>
  );
};
```
