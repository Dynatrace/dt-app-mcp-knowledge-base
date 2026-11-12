## Polymorph Accordion.Section

By default, the `Accordion.Section` component is rendered as a standard `div` element. For layouting purposes, the component can be polymorphed to any other component. This can be used, for example, to create a `Surface` layout inside an Accordion component.

**Polymorphic**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';
import { Surface } from '@dynatrace/strato-components/layouts';

const Polymorphic = () => {
  return (
    <Accordion>
      <Accordion.Section
        // highlight-next-line
        as={Surface}
        id="section1"
      >
        <Accordion.SectionLabel>Label</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
  );
};
```
