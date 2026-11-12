## Demo

**Basic**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';

const Basic = () => {
  return (
    <Accordion>
      <Accordion.Section id="section1">
        <Accordion.SectionLabel>Label</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
  );
};
```
