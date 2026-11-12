## Change color

You can use the `color` prop to style the `Accordion` with a different color. Setting the color affects the button, label, content, and divider color. If no `color` is specified, it's set to `neutral`.

You can also use the `color` prop on the `Accordion.Section` to style one section. If no `color` is specified, the color of the `Accordion` is used.

**Colors**

```tsx
import { Accordion } from '@dynatrace/strato-components/content';

const Colors = () => {
  return (
    <Accordion
      // highlight-next-line
      color="critical"
    >
      <Accordion.Section id="section1">
        <Accordion.SectionLabel>Accordion Color</Accordion.SectionLabel>
        <Accordion.SectionContent>Some Content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section
        id="section2"
        // highlight-next-line
        color="neutral"
      >
        <Accordion.SectionLabel>Neutral Section</Accordion.SectionLabel>
        <Accordion.SectionContent>Some Content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section
        id="section3"
        // highlight-next-line
        color="primary"
      >
        <Accordion.SectionLabel>Primary Section</Accordion.SectionLabel>
        <Accordion.SectionContent>Some Content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section
        id="section4"
        // highlight-next-line
        color="success"
      >
        <Accordion.SectionLabel>Success Section</Accordion.SectionLabel>
        <Accordion.SectionContent>Some Content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section
        id="section5"
        // highlight-next-line
        color="warning"
      >
        <Accordion.SectionLabel>Warning Section</Accordion.SectionLabel>
        <Accordion.SectionContent>Some Content</Accordion.SectionContent>
      </Accordion.Section>
      <Accordion.Section
        id="section6"
        // highlight-next-line
        color="critical"
      >
        <Accordion.SectionLabel>Critical Section</Accordion.SectionLabel>
        <Accordion.SectionContent>Some Content</Accordion.SectionContent>
      </Accordion.Section>
    </Accordion>
  );
};
```
