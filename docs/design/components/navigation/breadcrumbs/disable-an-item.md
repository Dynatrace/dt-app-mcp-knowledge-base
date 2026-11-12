## Disable an item

The `disabled` prop disables a `Breadcrumbs.Item`, making it unclickable.

**DisabledItem**

```tsx
import { Breadcrumbs } from '@dynatrace/strato-components/navigation';

const DisabledItem = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Level 1</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Level 2</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Level 3</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Level 4</Breadcrumbs.Item>
      <Breadcrumbs.Item
        href="#"
        // highlight-next-line
        disabled
      >
        Level 5
      </Breadcrumbs.Item>
    </Breadcrumbs>
  );
};
```
