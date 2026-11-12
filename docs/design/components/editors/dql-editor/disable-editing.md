## Disable editing

To disable editing of the content, use the `readOnly` property.

**ReadOnly**

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';

const ReadOnly = () => {
  return (
    <DQLEditor
      defaultValue="fetch metrics | limit 100"
      // highlight-next-line
      readOnly
    />
  );
};
```
