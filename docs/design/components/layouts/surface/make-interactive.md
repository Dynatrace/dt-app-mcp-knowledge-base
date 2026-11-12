## Make interactive

Sometimes the surface should be interactive. Polymorphing it into a button or link usually works best. However, don't nest other interactive elements inside an interactive surface, as this creates accessibility issues.

Note that the surface isn't automatically interactive when a `tabIndex` of 0 is set. In this case, focus styles are applied but other interactive styling isn't applied automatically.

**Interactive**

```tsx
import { Surface } from '@dynatrace/strato-components/layouts';

const Interactive = () => {
  return (
    <Surface
      aria-label="Description of the surface"
      // highlight-next-line
      as="button"
    >
      Surface content
    </Surface>
  );
};
```
