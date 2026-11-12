## Demo

Use the `queryState` prop to transition between the button's four query states: `idle`, `running`, `success`, and `error`.

**States**

```tsx
import { RunQueryButton } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const States = () => {
  return (
    <Flex gap={8}>
      <RunQueryButton
        // highlight-next-line
        queryState="idle"
      />
      <RunQueryButton
        // highlight-next-line
        queryState="loading"
      />
      <RunQueryButton
        // highlight-next-line
        queryState="success"
      />
      <RunQueryButton
        // highlight-next-line
        queryState="error"
      />
    </Flex>
  );
};
```
