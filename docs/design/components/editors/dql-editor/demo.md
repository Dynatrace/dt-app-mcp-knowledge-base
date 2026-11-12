## Demo

By default, the `DQLEditor` is uncontrolled and manages its own internal state. To pre-fill the editor with an initial value, use the `defaultValue` prop.

**Basic**

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';

const Basic = () => {
  return <DQLEditor defaultValue="fetch metrics | limit 100" />;
};
```
