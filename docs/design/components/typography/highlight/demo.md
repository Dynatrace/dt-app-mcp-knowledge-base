## Demo

Render the appropriate text as children of the `Highlight` component and pass the substring you want to highlight to the `term` prop.

**Basic**

```tsx
import { Highlight } from '@dynatrace/strato-components/typography';

const Basic = () => {
  return (
    <Highlight term="app">
      With the Dynatrace AppEngine, you can build custom apps on top of all the
      observability data collected by Dynatrace.
    </Highlight>
  );
};
```
