## Use with React Router

The `Breadcrumbs.Item` is a polymorphic component and can also be used as a React Router link.

**ReactRouter**

```tsx
import { Link as RouterLink } from 'react-router';

import { Breadcrumbs } from '@dynatrace/strato-components/navigation';

const ReactRouter = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item
        // highlight-next-line
        as={RouterLink}
        to="/"
        disabled
      >
        Home
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        // highlight-next-line
        as={RouterLink}
        to="/"
      >
        Level 1
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        // highlight-next-line
        as={RouterLink}
        to="/"
      >
        Level 2
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        // highlight-next-line
        as={RouterLink}
        to="/"
      >
        Level 3
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        // highlight-next-line
        as={RouterLink}
        to="/"
      >
        Level 4
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        // highlight-next-line
        as={RouterLink}
        to="/"
      >
        Level 5
      </Breadcrumbs.Item>
    </Breadcrumbs>
  );
};
```
