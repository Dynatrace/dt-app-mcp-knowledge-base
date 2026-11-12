## Add link

If the definition is complicated, or more information would help users, you can also include a link to further documentation.

**WithLinks**

```tsx
import { TerminologyOverlay } from '@dynatrace/strato-components/content';
import {
  ExternalLink,
  Paragraph,
} from '@dynatrace/strato-components/typography';

const WithLinks = () => {
  return (
    <Paragraph>
      <TerminologyOverlay>
        <TerminologyOverlay.Trigger>OneAgent</TerminologyOverlay.Trigger>
        <TerminologyOverlay.Description>
          OneAgent is responsible for collecting all monitoring data within your
          monitored environment.
        </TerminologyOverlay.Description>
        {/* highlight-start */}
        <TerminologyOverlay.Footer>
          <ExternalLink href="https://www.dynatrace.com/support/help/setup-and-configuration/dynatrace-oneagent">
            Dynatrace OneAgent
          </ExternalLink>
        </TerminologyOverlay.Footer>
        {/* highlight-end */}
      </TerminologyOverlay>{' '}
      on your hosts that serve containerized applications and services.
      Dynatrace automatically detects the creation and termination of containers
      and monitors the applications and services contained within those
      containers.
    </Paragraph>
  );
};
```
