## Use as polymorphic component

When linking to an internal resource, the `Link` component typically needs to be polymorphed into a component from a routing library, such as the Link component from the `react-router-dom` package, so that the respective API can be used.

To polymorph the `Link` component, pass the desired element to the `as` property and provide the corresponding props.

**Polymorph**

```tsx
import { Route, Link as RouterLink, Routes } from 'react-router';

import { Link } from '@dynatrace/strato-components/typography';

const Polymorph = () => {
  return (
    <>
      <Link
        // highlight-next-line
        as={RouterLink}
        to="route"
      >
        RouterLink
      </Link>

      <Routes>
        <Route
          path="/route"
          element={<div>{/* Component to route to. */}</div>}
        />
      </Routes>
    </>
  );
};
```
