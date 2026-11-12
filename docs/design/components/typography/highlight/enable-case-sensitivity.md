## Enable case sensitivity

Use the `caseSensitive` prop to determine whether the search for the specified terms should be case-sensitive.

**CaseSensitive**

```tsx
import { Highlight } from '@dynatrace/strato-components/typography';

const CaseSensitive = () => {
  return (
    <Highlight
      term="app"
      // highlight-next-line
      caseSensitive
    >
      With the Dynatrace AppEngine, you can build custom apps on top of all the
      observability data collected by Dynatrace.
    </Highlight>
  );
};
```
