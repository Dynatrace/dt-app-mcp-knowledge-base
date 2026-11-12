## Customize button label

Use the `expandLabel` and `collapseLabel` props to set a custom label for the expand and collapse buttons respectively. For consistency with other apps in Dynatrace, use the default "Show more" and "Show less" labels.

**CustomLabels**

```tsx
import { ExpandableText } from '@dynatrace/strato-components/content';
import { Paragraph } from '@dynatrace/strato-components/typography';

const CustomLabels = () => {
  return (
    <Paragraph>
      Dynatrace OneAgent automatically monitors all process groups detected in
      your environment.{' '}
      <ExpandableText
        // highlight-start
        collapseLabel="Show less"
        expandLabel="Read more"
        // highlight-end
      >
        A single OneAgent per host is required to collect all relevant
        monitoring data — even if your hosts are deployed within Docker
        containers, microservices architectures, or cloud-based infrastructure.
      </ExpandableText>
    </Paragraph>
  );
};
```
