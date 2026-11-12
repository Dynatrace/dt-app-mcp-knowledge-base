## Demo

**Basic**

```tsx
import { ExpandableText } from '@dynatrace/strato-components/content';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Basic = () => {
  return (
    <Paragraph>
      Dynatrace OneAgent automatically monitors all process groups detected in
      your environment.{' '}
      <ExpandableText>
        A single OneAgent per host is required to collect all relevant
        monitoring data — even if your hosts are deployed within Docker
        containers, microservices architectures, or cloud-based infrastructure.
      </ExpandableText>
    </Paragraph>
  );
};
```
