## Putting it together

The last piece of the puzzle is using these components somewhere. We can simply instantiate them in the `App` component, and we're done.

```tsx title="ui/app/App.tsx"
import React from 'react';
import { Heading } from '@dynatrace/strato-components/typography';
import { Flex } from '@dynatrace/strato-components/layouts';
import { PageLayout } from '@dynatrace/strato-components/layouts';
import { AppHeader } from '@dynatrace/strato-components/layouts';
import { LogFieldDistribution } from './components/LogFieldDistribution';
import { LogRecords } from './components/LogRecords';

export const App = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <AppHeader />
      </PageLayout.Header>
      <PageLayout.Content>
        <Flex padding={16} flexDirection="column">
          <Heading level={2}>Logs Viewer</Heading>
          <LogFieldDistribution />
          <LogRecords />
        </Flex>
      </PageLayout.Content>
    </PageLayout>
  );
};
```
