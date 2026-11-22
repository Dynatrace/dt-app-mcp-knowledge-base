## Show loading state

You can show a loading state by adding the `loading` prop to `Combobox.Content`. While `loading` is `true`, a loading indicator replaces the options, and the option to create a new value is hidden. Screen readers announce the loading state while the dropdown is open. When `loading` is `false` again, the options reappear.

**Loading**

```tsx
import { Combobox } from '@dynatrace/strato-components/forms';

const Loading = () => {
  return (
    <Combobox placeholder="Select fruit">
      <Combobox.Content
        // highlight-next-line
        loading
      >
        <Combobox.Option value="apple">Apple</Combobox.Option>
        <Combobox.Option value="banana">Banana</Combobox.Option>
        <Combobox.Option value="cherry">Cherry</Combobox.Option>
      </Combobox.Content>
    </Combobox>
  );
};
```
