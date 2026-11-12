## Variants

Use the `variant` option to apply different styles depending on how the component is used. The supported variants are: `neutral`, `primary`, `success`, `warning`, and `critical`.

**Variants**

```tsx
import type { CSSProperties } from 'react';

import { useFocusRing } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';
import Colors from '@dynatrace/strato-design-tokens/colors';

const buttonStyles: CSSProperties = {
  appearance: 'none',
  border: 0,
  background: Colors.Background.Base.Default,
  color: Colors.Text.Neutral.Default,
  padding: 4,
  borderRadius: 3,
};

const Variants = () => {
  // highlight-start
  const {
    focusClassName: neutralFocusClassName,
    focusProps: neutralFocusProps,
  } = useFocusRing({ color: 'neutral' });
  const {
    focusClassName: primaryFocusClassName,
    focusProps: primaryFocusProps,
  } = useFocusRing({ color: 'primary' });
  const {
    focusClassName: successFocusClassName,
    focusProps: successFocusProps,
  } = useFocusRing({ color: 'success' });
  const {
    focusClassName: warningFocusClassName,
    focusProps: warningFocusProps,
  } = useFocusRing({ color: 'warning' });
  const {
    focusClassName: criticalFocusClassName,
    focusProps: criticalFocusProps,
  } = useFocusRing({ color: 'critical' });
  // highlight-end

  return (
    <Flex>
      <button
        style={buttonStyles}
        className={neutralFocusClassName}
        {...neutralFocusProps}
      >
        <Text>Neutral</Text>
      </button>
      <button
        style={buttonStyles}
        className={primaryFocusClassName}
        {...primaryFocusProps}
      >
        <Text>Primary</Text>
      </button>
      <button
        style={buttonStyles}
        className={successFocusClassName}
        {...successFocusProps}
      >
        <Text>Success</Text>
      </button>
      <button
        style={buttonStyles}
        className={warningFocusClassName}
        {...warningFocusProps}
      >
        <Text>Warning</Text>
      </button>
      <button
        style={buttonStyles}
        className={criticalFocusClassName}
        {...criticalFocusProps}
      >
        <Text>Critical</Text>
      </button>
    </Flex>
  );
};
```

When applying all focus outlines (if the buttons are focused via keyboard), this is what the variants would look like:

!["Focus outlines"](../../../components-docs-assets/useFocusRing-examples-light.webp)&#x20;
