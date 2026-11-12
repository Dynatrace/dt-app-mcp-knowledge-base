## Demo

**Basic**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  AppHeader,
  Flex,
  HelpMenu,
  PageLayout,
} from '@dynatrace/strato-components/layouts';
import { Menu } from '@dynatrace/strato-components/navigation';
import { Heading } from '@dynatrace/strato-components/typography';
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';
import { DotMenuIcon } from '@dynatrace/strato-icons';

const Placeholder = () => (
  <div
    style={{
      width: '100%',
      flex: 1,
      marginTop: Spacings.Size24,
      borderRadius: Borders.Radius.Container.Default,
      backgroundColor: Colors.Background.Container.Neutral.Default,
    }}
  />
);

const Basic = () => {
  const [isDetailsCollapsed, setIsDetailsCollapsed] = useState(false);

  return (
    <PageLayout style={{ height: '600px' }}>
      <PageLayout.Header>
        <AppHeader>
          <AppHeader.Navigation>
            <AppHeader.NavigationItem>NavItem</AppHeader.NavigationItem>
            <AppHeader.NavigationItem isSelected>
              NavItem
            </AppHeader.NavigationItem>
          </AppHeader.Navigation>
          <AppHeader.Menus>
            <HelpMenu
              entries={{
                whatsNew: 'default',
                playground: 'default',
                about: 'default',
              }}
            />
          </AppHeader.Menus>
        </AppHeader>
      </PageLayout.Header>
      <PageLayout.Sidebar>
        <Flex flexDirection="column">
          <Heading level={3}>Sidebar</Heading>
          <Placeholder />
        </Flex>
      </PageLayout.Sidebar>
      <PageLayout.Content>
        <Flex flexDirection="column">
          <Heading level={2}>Content</Heading>
          <Button
            variant="emphasized"
            onClick={() => setIsDetailsCollapsed(false)}
          >
            Show Details
          </Button>
          <Placeholder />
        </Flex>
      </PageLayout.Content>
      <PageLayout.Details
        collapsed={isDetailsCollapsed}
        onCollapsedChange={setIsDetailsCollapsed}
      >
        <Flex flexDirection="column">
          <Flex alignItems="baseline" justifyContent="space-between">
            <Heading level={3}>Details</Heading>
            <PageLayout.Details.ControlBar>
              <Menu>
                <Menu.Trigger>
                  <Button aria-label="More actions">
                    <Button.Prefix>
                      <DotMenuIcon />
                    </Button.Prefix>
                  </Button>
                </Menu.Trigger>
                <Menu.Content>
                  <Menu.Item onSelect={() => undefined}>Edit</Menu.Item>
                  <Menu.Item onSelect={() => undefined}>Download</Menu.Item>
                  <Menu.Item onSelect={() => undefined}>Bookmark</Menu.Item>
                  <Menu.Item onSelect={() => undefined}>Share</Menu.Item>
                </Menu.Content>
              </Menu>
            </PageLayout.Details.ControlBar>
          </Flex>
          <Placeholder />
        </Flex>
      </PageLayout.Details>
    </PageLayout>
  );
};
```
