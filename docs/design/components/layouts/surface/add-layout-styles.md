## Add layout styles

`Surface` has a default padding of 24px. This can be changed by setting any padding prop on the container. Similarly, the container accepts any CSS margin or layout props, such as width or height.

**Layouting**

```tsx
import { Surface } from '@dynatrace/strato-components/layouts';

const Layouting = () => {
  return (
    <Surface
      // highlight-start
      width="50%"
      padding={20}
      // highlight-end
    >
      Surface Content
    </Surface>
  );
};
```
