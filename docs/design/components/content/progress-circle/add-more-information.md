## Add more information

To display more information about the progress, you can render any JSX inside the `ProgressCircle`.

**Compounds**

```tsx
import { ProgressCircle } from '@dynatrace/strato-components/content';

const Compounds = () => {
  return (
    <ProgressCircle value={75}>
      {/* highlight-next-line */}
      Downloading
    </ProgressCircle>
  );
};
```
