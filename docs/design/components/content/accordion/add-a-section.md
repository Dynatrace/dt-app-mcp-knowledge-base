## Add a section

You can add a section to the `Accordion` component by using the `Accordion.Section`, `Accordion.SectionLabel` and `Accordion.SectionContent` components. When adding a section a unique identifier has to be set using the `id` prop. This allows to correctly expand and collapse the according sections.

**MultipleSections**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';

const MultipleSections = () => {
  return (
    <Accordion>
      {/* highlight-start */}
      <Accordion.Section id="section1">
        <Accordion.SectionLabel>Label 1</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
      {/* highlight-end */}
      <Accordion.Section id="section2">
        <Accordion.SectionLabel>Label 2</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section id="section3">
        <Accordion.SectionLabel>Label 3</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
  );
};
```
