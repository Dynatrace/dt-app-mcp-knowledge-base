## 3. Create the feed page

To visualize the data from the status history API, create a new file `ui/app/pages/StatusHistory.tsx` with the following component:

```tsx testable title="ui/app/pages/StatusHistory.tsx"
import React from 'react';
import { Flex, TitleBar } from '@dynatrace/strato-components/layouts';

export const StatusHistory = () => {
  return (
    <Flex flexDirection="column" padding={32}>
      <TitleBar>
        <TitleBar.Title>Status history</TitleBar.Title>
      </TitleBar>
    </Flex>
  );
};
```

Next, adapt the `App` component to add a new route pointing to the `StatusHistory` page:

```tsx title="ui/app/App.tsx" dependencies=access-dynatrace-data.md
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AppHeader, PageLayout } from '@dynatrace/strato-components/layouts';
import { HostList } from './pages/HostList';
// highlight-next-line
import { StatusHistory } from './pages/StatusHistory';

export const App = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <AppHeader>
          <AppHeader.Navigation>
            <AppHeader.Logo as={Link} to="/" />
            // highlight-start
            <AppHeader.NavigationItem as={Link} to="/status-history">
              Status History
            </AppHeader.NavigationItem>
            // highlight-end
          </AppHeader.Navigation>
        </AppHeader>
      </PageLayout.Header>
      <PageLayout.Content>
        <Routes>
          <Route path="/" element={<HostList />} />
          // highlight-next-line
          <Route path="/status-history" element={<StatusHistory />} />
        </Routes>
      </PageLayout.Content>
    </PageLayout>
  );
};
```

With the new page in place, we can now use the app function within it.

In the `StatusHistory` component, call the [`useAppFunction`](https://developer.dynatrace.com/contents/docs/develop/sdks/react-hooks/index.md/#app-functions) hook from the `@dynatrace-sdk/react-hooks` package. We must provide the app function's name and payload as the first argument and a type argument, which we'll call `StatusItem`. Next, add the loading indicator and iterate over the data to visualize its contents using a few other components from the Strato Design System as follows:

```tsx testable title="ui/app/pages/StatusHistory.tsx"
import React from 'react';

import {
  Flex,
  // highlight-next-line
  Container,
  TitleBar,
} from '@dynatrace/strato-components/layouts';
// highlight-start
import { ProgressCircle } from '@dynatrace/strato-components/content';
// highlight-end
// highlight-start
import { Heading } from '@dynatrace/strato-components/typography';
// highlight-end
// highlight-start
import { Chip, ChipOwnProps } from '@dynatrace/strato-components/content';
// highlight-end
// highlight-next-line
import { useAppFunction } from '@dynatrace-sdk/react-hooks';

// highlight-start
interface StatusItem {
  title: string;
  color: ChipOwnProps['color'];
  description: string;
  date: string;
}
// highlight-end

export const StatusHistory = () => {
  // highlight-start
  const result = useAppFunction<StatusItem[]>({
    name: 'get-status-history',
    data: { active: true },
  });
  // highlight-end

  return (
    <Flex flexDirection="column" padding={32}>
      <TitleBar>
        <TitleBar.Title>Status history</TitleBar.Title>
      </TitleBar>
      // highlight-start
      {result.isLoading && <ProgressCircle />}
      {result.data && (
        <Flex flexDirection="column" gap={16}>
          {result.data.map(({ title, color, description, date }) => (
            <Container key={date}>
              <Flex flexDirection="column" gap={8}>
                <Chip color={color}>{description}</Chip>
                <Heading level={5}>{title}</Heading>
                <Chip size="condensed">{new Date(date).toUTCString()}</Chip>
              </Flex>
            </Container>
          ))}
        </Flex>
      )}
      // highlight-end
    </Flex>
  );
};
```

> **Tip**
>
> Learn more about [Container](https://developer.dynatrace.com/contents/docs/design/components/layouts/Container/index.mdx/), [Heading](https://developer.dynatrace.com/contents/docs/design/components/typography/Heading/index.mdx/) and [Chip](https://developer.dynatrace.com/contents/docs/design/components/content/Chip/index.mdx/).

That's it. You now know how to access an external API, customize the result, and use it in the UI. At this point, the app should look like this:

![status-history-dark](https://developer.dynatrace.com/assets/images/status-history-dark-191c0ce2f549adfde046995d1d20376f.png)

Congratulations on your first Dynatrace app. We're happy to have you on board.
