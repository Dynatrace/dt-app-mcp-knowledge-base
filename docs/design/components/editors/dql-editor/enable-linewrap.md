## Enable linewrap

To enable linewrap as soon as the content overflows, use the `linewrap` property.

**LineWrap**

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';
import { Flex } from '@dynatrace/strato-components/layouts';

const LineWrap = () => {
  return (
    <Flex flexDirection="row">
      <Flex maxWidth="50%" flexItem>
        <DQLEditor
          defaultValue="fetch logs
    | summarize count(), alias:`Total number of logs`, by:{bin(timestamp, 1m)}"
          // highlight-next-line
          lineWrap
        />
      </Flex>
      <Flex maxWidth="50%" flexItem>
        <DQLEditor
          defaultValue="fetch logs
    | summarize count(), alias:`Total number of logs`, by:{bin(timestamp, 1m)}"
        />
      </Flex>
    </Flex>
  );
};
```
