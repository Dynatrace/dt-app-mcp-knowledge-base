## Demo

`TimeframeSelector` takes its information from the user's Dynatrace user settings. The timezone setting determines the timezone offset in `TimeframeSelector`, while the region setting determines its display format. Both the timezone and the region can be set independently. If either is set to "use browser default," `TimeframeSelector` will fall back to the user's browser settings for that value. The value passed to the `onChange` is converted back to an ISO string or passed as an expression. See [Usage](https://developer.dynatrace.com/design/components/filters/TimeframeSelector/usage.md) for best practices.

**Basic**

```tsx
import { TimeframeSelector } from '@dynatrace/strato-components/filters';

const Basic = () => {
  return <TimeframeSelector defaultValue={{ from: 'now-2h', to: 'now' }} />;
};
```
