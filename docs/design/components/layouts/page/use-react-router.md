## Use react-router

> We recommend using `react-router-dom` as the routing library.

The basic concept is to render content based on the matching routes. For example, you have a set of cards in your main panel. When clicking on a card, the current route is updated and the `DetailView` content changes accordingly.

### One page per route

The easiest solution for rendering different pages in your app is to use one page for each route. This way, you can choose which compounds to use per route and configure each page separately.

**PagePerRoute**

```tsx
import { useState } from 'react';
import { Route, Link as RouterLink, Routes } from 'react-router';

import { AppHeader, Page } from '@dynatrace/strato-components/layouts';

const CommonHeader = () => (
  <Page.Header>
    <AppHeader>
      <AppHeader.Navigation>
        <AppHeader.Logo
          as={RouterLink}
          to="/layouts/page/PagePerRoute/stories/"
          appName="Home"
        />
        <AppHeader.NavigationItem
          as={RouterLink}
          to="/layouts/page/PagePerRoute/stories/page1"
        >
          Workflows
        </AppHeader.NavigationItem>
      </AppHeader.Navigation>
    </AppHeader>
  </Page.Header>
);

const PagePerRoute = () => {
  const [sidebarDismissed, setSidebarDismissed] = useState(false);

  return (
    <Routes>
      <Route
        index
        element={
          // highlight-start
          <Page>
            <CommonHeader />
            <Page.Main>Main</Page.Main>
          </Page>
          // highlight-end
        }
      />
      <Route
        path="/page1"
        element={
          // highlight-start
          <Page>
            <CommonHeader />
            <Page.Sidebar
              dismissed={sidebarDismissed}
              onDismissChange={() => null}
            >
              <Page.PanelControlButton
                onClick={() => setSidebarDismissed(true)}
              />
              Sidebar
            </Page.Sidebar>
            <Page.Main>Main</Page.Main>
          </Page>
          // highlight-end
        }
      />
    </Routes>
  );
};
```

### Nested layouts

The page's compounds can be nested inside other components. This enables you to create different layouts by nesting routes and rendering different parts of the page depending on the current route.

> Note: The wrapping components of `Sidebar`, `Main`, or `DetailView` must not render an actual wrapper in the DOM. This would break the page layout. You can only use components that output the compounds directly, as the `Fragment` or react-router-dom's `Outlet`.

**NestedRouterOutlets**

```tsx
import { useState } from 'react';
import {
  Outlet,
  Route,
  Link as RouterLink,
  Routes,
  useParams,
} from 'react-router';

import { Flex, AppHeader, Page } from '@dynatrace/strato-components/layouts';
import { Link } from '@dynatrace/strato-components/typography';

const RootLayout = () => {
  return (
    <Page>
      <Page.Header>
        <AppHeader>
          <AppHeader.Navigation>
            <AppHeader.Logo as={RouterLink} to="./" appName="Home" />
            <AppHeader.NavigationItem as={RouterLink} to="./workflows">
              Workflows
            </AppHeader.NavigationItem>
          </AppHeader.Navigation>
        </AppHeader>
      </Page.Header>
      <Outlet />
    </Page>
  );
};
const Index = () => <Page.Main>Intro</Page.Main>;
const WorkflowsHome = () => {
  const [sidebarDismissed, setSidebarDismissed] = useState(false);
  return (
    <>
      <Page.Sidebar dismissed={sidebarDismissed} onDismissChange={() => null}>
        <Page.PanelControlButton
          target="sidebar"
          onClick={() => setSidebarDismissed(true)}
        />
        <Flex flexDirection="column">
          Sidebar
          <Link as={RouterLink} to="./workflow1">
            workflow1
          </Link>
          <Link as={RouterLink} to="./workflow2">
            workflow2
          </Link>
        </Flex>
      </Page.Sidebar>
      <Outlet />
    </>
  );
};
const WorkflowsIntro = () => <Page.Main>Workflows intro</Page.Main>;
const WorkflowTasks = () => {
  const { workflow } = useParams();
  return (
    <>
      <Page.Main>
        <Flex flexDirection="column">
          Tasks for workflow {workflow}
          <Link as={RouterLink} to="./task1">
            {workflow} - task1
          </Link>
          <Link as={RouterLink} to="./task2">
            {workflow} - task2
          </Link>
        </Flex>
      </Page.Main>
      <Outlet />
    </>
  );
};
const TaskDetails = () => {
  const { task } = useParams();
  const [detailViewDismissed, setDetailViewDismissed] = useState(false);
  return (
    <Page.DetailView
      dismissed={detailViewDismissed}
      onDismissChange={() => null}
    >
      <Page.PanelControlButton onClick={() => setDetailViewDismissed(true)} />
      Details for task {task}
    </Page.DetailView>
  );
};

const NestedRouterOutlets = () => {
  return (
    <Routes>
      {/* highlight-start */}
      <Route element={<RootLayout />}>
        <Route index element={<Index />} />
        <Route path="workflows" element={<WorkflowsHome />}>
          <Route index element={<WorkflowsIntro />} />
          <Route path=":workflow" element={<WorkflowTasks />}>
            <Route path=":task" element={<TaskDetails />} />
          </Route>
        </Route>
      </Route>
      {/* highlight-end */}
    </Routes>
  );
};
```
