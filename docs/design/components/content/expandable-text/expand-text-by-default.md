## Expand text by default

Use the `defaultExpanded` prop to initially expand the text.

**DefaultExpanded**

```tsx
import { ExpandableText } from '@dynatrace/strato-components/content';
import { Paragraph } from '@dynatrace/strato-components/typography';

const DefaultExpanded = () => {
  return (
    <Paragraph>
      Dynatrace OneAgent automatically monitors all process groups detected in
      your environment.{' '}
      <ExpandableText
        // highlight-next-line
        defaultExpanded
      >
        A single OneAgent per host is required to collect all relevant
        monitoring data — even if your hosts are deployed within Docker
        containers, microservices architectures, or cloud-based infrastructure.
      </ExpandableText>
    </Paragraph>
  );
};
```
