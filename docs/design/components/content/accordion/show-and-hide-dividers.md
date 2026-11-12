## Show and hide dividers

You can use the `showDividers` prop to show or hide dividers. If no `showDividers` If no `showDividers` is specified, it's set to `true`.

**ShowDividers**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';

const ShowDividers = () => (
  <Accordion
    // highlight-next-line
    showDividers={false}
  >
    <Accordion.Section id="section1">
      <Accordion.SectionLabel>Label 1</Accordion.SectionLabel>
      <Accordion.SectionContent>Some content</Accordion.SectionContent>
    </Accordion.Section>
    <Accordion.Section id="section2">
      <Accordion.SectionLabel>Label 2</Accordion.SectionLabel>
      <Accordion.SectionContent>Some content</Accordion.SectionContent>
    </Accordion.Section>
  </Accordion>
);
```
