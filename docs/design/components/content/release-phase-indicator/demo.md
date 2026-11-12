## Demo

Use the `phase` prop to control the shown release phase. The component renders a condensed `Chip` with a preconfigured color and label.

**Basic**

```tsx
import { ReleasePhaseIndicator } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Basic = () => {
  return (
    <Flex gap={8}>
      <ReleasePhaseIndicator
        // highlight-next-line
        phase="preview"
      />
      <ReleasePhaseIndicator
        // highlight-next-line
        phase="new"
      />
      <ReleasePhaseIndicator
        // highlight-next-line
        phase="deprecated"
      />
      <ReleasePhaseIndicator
        // highlight-next-line
        phase="early-access"
      />
    </Flex>
  );
};
```

> **Note**
>
> If you need to indicate the release phase of an entire app, use the `releasePhase` prop on the [AppHeader.Logo](https://developer.dynatrace.com/design/components/layouts/AppHeader.md#indicate-release-phase-of-app) instead.
