## Control state

You can also handle the state of the `Accordion` component, making it controlled. In order to do so, you need to set the `expanded` prop to assign the state value. In addition, you need to use the `onExpandChange` prop to provide a handler that is called when the state of the `Accordion` changes.

**Controlled**

```tsx
import { useState } from 'react';

import {
  Accordion,
  SingleExpanded,
} from '@dynatrace/strato-components/content';

const Controlled = () => {
  const [singleSection, setSingleSection] = useState<SingleExpanded>('');

  return (
    <Accordion
      // highlight-start
      expanded={singleSection}
      onExpandChange={setSingleSection}
      // highlight-end
    >
      <Accordion.Section id="section1">
        <Accordion.SectionLabel>Label 1</Accordion.SectionLabel>
        <Accordion.SectionContent>Some content</Accordion.SectionContent>
      </Accordion.Section>
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
