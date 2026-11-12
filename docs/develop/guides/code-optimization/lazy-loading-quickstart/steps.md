## Steps

### 1. Convert static route imports to lazy-loaded routes

Route-based splitting is the most impactful technique for most apps. Each route loads only the code it needs, so users navigating to the home page never download the code for the data page, and vice versa.

Define a persistent layout component that holds the header, sidebar, and a `Suspense` boundary around an `Outlet`. Replace static `import` statements for your route components with `React.lazy()`:

```tsx title="ui/app/App.tsx" untestable
import { PageLayout } from '@dynatrace/strato-components/layouts';
import { ProgressCircle } from '@dynatrace/strato-components/content';
import React, { Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

// highlight-start
const Home = lazy(() => import('./pages/Home'));
const Data = lazy(() => import('./pages/Data'));
// highlight-end

const AppLayout = () => (
  <PageLayout>
    <PageLayout.Header>
      <Header />
    </PageLayout.Header>
    <PageLayout.Sidebar>
      <Sidebar />
    </PageLayout.Sidebar>
    // highlight-start
    <Suspense
      fallback={
        <PageLayout.Content>
          <ProgressCircle />
        </PageLayout.Content>
      }
    >
      <Outlet />
    </Suspense>
    // highlight-end
  </PageLayout>
);

export const App = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/data" element={<Data />} />
    </Route>
  </Routes>
);
```

Each route component must use a **default export** and provide its own `PageLayout` content slots. Routes can independently compose `PageLayout.Content` and `PageLayout.Details`:

```tsx title="ui/app/pages/Home.tsx" untestable
import { PageLayout } from '@dynatrace/strato-components/layouts';

const Home = () => (
  <PageLayout.Content>
    <div>Welcome to your Dynatrace App</div>
  </PageLayout.Content>
);

//highlight-next-line
export default Home;
```

```tsx title="ui/app/pages/Data.tsx" untestable
import { PageLayout } from '@dynatrace/strato-components/layouts';

const Data = () => (
  <>
    <PageLayout.Content>
      <div>Explore Data</div>
    </PageLayout.Content>
    <PageLayout.Details>
      <div>Details panel</div>
    </PageLayout.Details>
  </>
);

//highlight-next-line
export default Data;
```

> **Note**
>
> `React.lazy()` requires the dynamically imported module to have a **default export** containing a React component. If your pages use named exports, see the [named exports](#handle-named-exports) section below.

#### Handle named exports

If your page components use named exports (for example, `export const Home = () => { ... }`), wrap the dynamic import to map the named export to a default export:

```tsx title="ui/app/App.tsx" untestable
const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
```

### 2. Split heavy components

You can also split individual components that are heavy or not immediately visible. This is useful for components like charts, editors, or modals that add significant JavaScript weight but are only needed after user interaction.

For example, if your `Data` page includes a heavy chart library, lazy-load just the chart and add a button to trigger loading it:

```tsx title="ui/app/pages/Data.tsx" untestable
import React, { Suspense, lazy, useState } from 'react';
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Heading } from '@dynatrace/strato-components/typography';
import { ProgressCircle } from '@dynatrace/strato-components/content';

// highlight-next-line
const DataChart = lazy(() => import('../components/DataChart'));

export const Data = () => {
  // highlight-next-line
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex flexDirection="column" padding={32}>
      <Heading level={2}>Explore Data</Heading>
      // highlight-start
      <Button onClick={() => setIsOpen(true)}>Explore Data</Button>
      {isOpen && (
        <Modal title="Explore Data" show onDismiss={() => setIsOpen(false)}>
          <Suspense fallback={<ProgressCircle />}>
            <DataChart onClose={() => setIsOpen(false)} />
          </Suspense>
        </Modal>
      )}
      // highlight-end
    </Flex>
  );
};
```

### 3. Load non-component code on demand

For non-component code such as utility functions or data processing libraries, use dynamic `import()` directly. This gives you fine-grained control over when a module is loaded.

```tsx title="ui/app/pages/Data.tsx" untestable
import React, { useState } from 'react';

const Data = () => {
  const [result, setResult] = useState(null);

  // highlight-start
  const handleAnalyze = () => {
    void import('../utils/analyze').then(({ analyzeData }) => {
      setResult(analyzeData());
    });
  };
  // highlight-end

  return (
    <div>
      // highlight-next-line
      <button onClick={handleAnalyze}>Analyze</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default Data;
```

The `../utils/analyze` module is only downloaded when the user clicks the button.

### 4. Add loading feedback to Suspense boundaries

Every `Suspense` boundary needs a `fallback` that shows while the chunk loads. Use Strato's `ProgressCircle` to give users visual feedback instead of a plain text placeholder. For example, the `MapView` component is large and benefits from a spinner while it loads:

```tsx title="ui/app/pages/Map.tsx" untestable
import React, { Suspense, lazy } from 'react';
import { Flex } from '@dynatrace/strato-components/layouts';
import { ProgressCircle } from '@dynatrace/strato-components/content';

const MapView = lazy(() => import('@dynatrace/strato-geo').then((mod) => ({ default: mod.MapView })));

const Map = () => {
  return (
    <Flex flexDirection="column" padding={32}>
      {/* highlight-next-line */}
      <Suspense fallback={<ProgressCircle />}>
        <MapView />
        {/* highlight-next-line */}
      </Suspense>
    </Flex>
  );
};

export default Map;
```

### 5. Build and verify

Build and deploy the app to confirm code splitting works by enabling code splitting in your build scripts:

```bash
npx dt-app build --optimize --enable-code-splitting
npx dt-app deploy --optimize --enable-code-splitting
```

The build command creates a `dist` folder containing the compiled output. You should see multiple `.js` files instead of a single bundle, confirming that code splitting is active.
