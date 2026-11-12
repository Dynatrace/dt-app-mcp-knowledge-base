## Demo

The `AvatarGroup` is a wrapper that stacks multiple [Avatar](https://developer.dynatrace.com/design/components/content/Avatar.md) elements together. The focus can be moved with the `arrow-left` and `arrow-right` keys, as well as the `tab` key.

**Basic**

```tsx
import { AvatarGroup } from '@dynatrace/strato-components/content';

const Basic = () => {
  return (
    <AvatarGroup>
      <AvatarGroup.Item abbreviation="AE" tooltipText="Albert Einstein" />
      <AvatarGroup.Item abbreviation="JK" tooltipText="Johannes Kepler" />
      <AvatarGroup.Item abbreviation="FN" tooltipText="Friedrich Nietzsche" />
    </AvatarGroup>
  );
};
```
