## Use with router

Slot components work correctly inside a router `<Outlet />`, a `<Suspense>` boundary, or any other wrapper, including components that conditionally render or lazy-load their children.

A common pattern is a top-level `PageLayout` with the header and sidebar defined at the app layout level, and the `Content` and `Details` slots provided by individual route components:

```tsx
// App layout - defines the persistent layout frame
const AppLayout = () => (
  <PageLayout>
    <PageLayout.Header>
      <AppHeader>{/* top-level navigation */}</AppHeader>
    </PageLayout.Header>
    <PageLayout.Sidebar>{/* sub-navigation */}</PageLayout.Sidebar>
    {/* Route components render their Content/Details slots here */}
    <Outlet />
  </PageLayout>
);

// Route component - only provides the slots it owns
const DashboardRoute = () => (
  <>
    <PageLayout.Content>
      <DashboardTable />
    </PageLayout.Content>
    <PageLayout.Details>
      <PageLayout.Details.ControlBar />
      <DetailsPanel />
    </PageLayout.Details>
  </>
);
```

When a route lazy-loads its content, wrap it in `<Suspense>` and render a fallback inside `PageLayout.Content` to keep the layout stable while loading:

```tsx
const LazyDashboard = lazy(() => import('./DashboardRoute'));

const AppLayout = () => (
  <PageLayout>
    <PageLayout.Header>...</PageLayout.Header>
    <PageLayout.Sidebar>...</PageLayout.Sidebar>
    <Suspense
      fallback={
        <PageLayout.Content>
          <ProgressCircle />
        </PageLayout.Content>
      }
    >
      <Outlet />
    </Suspense>
  </PageLayout>
);
```
