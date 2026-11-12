## Route-based lazy loading

The highest-impact and lowest-risk place to introduce lazy loading is at the route level. Each page of your app is already a natural boundary: users navigate to one page at a time, and there is an inherent expectation of a brief transition between pages.

### Before

A typical Dynatrace app imports all page components eagerly in `App.tsx`:

```tsx title="ui/app/App.tsx" untestable
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { HostDetails } from './pages/HostDetails';
import { Settings } from './pages/Settings';
import { Changelog } from './pages/Changelog';

export const App = () => (
  <Routes>
    <Route path="/" element={<Overview />} />
    <Route path="/host/:id" element={<HostDetails />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/changelog" element={<Changelog />} />
  </Routes>
);
```

Every page and all of its transitive dependencies ship in the initial bundle regardless of which route the user actually navigates to.

### After

Replace static imports with `lazy()` and wrap your route tree in a `<Suspense>` boundary:

```tsx title="ui/app/App.tsx" untestable
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProgressBar } from '@dynatrace/strato-components/content';

const Overview = lazy(() => import('./pages/Overview'));
const HostDetails = lazy(() => import('./pages/HostDetails'));
const Settings = lazy(() => import('./pages/Settings'));
const Changelog = lazy(() => import('./pages/Changelog'));

export const App = () => (
  <Suspense fallback={<ProgressBar />}>
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/host/:id" element={<HostDetails />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/changelog" element={<Changelog />} />
    </Routes>
  </Suspense>
);
```

Now only the code for the active route is fetched on initial load. Navigating to `/settings` triggers a network request for the Settings chunk, with the `<ProgressBar />` fallback shown until it resolves.

### Default exports

`React.lazy()` expects the dynamically imported module to have a **default export** containing the React component. Make sure your page modules export accordingly:

```tsx title="ui/app/pages/Settings.tsx"
import React from 'react';

const Settings = () => {
  return <div>Settings</div>;
  // ...
};

export default Settings;
```

If your component uses a named export, wrap the import:

```tsx title="ui/app/App.tsx" untestable
const Settings = lazy(() => import('./pages/Settings').then((module) => ({ default: module.Settings })));
```

The default export pattern is cleaner. If you're introducing lazy loading to an existing app, switching page entry points to default exports is a reasonable refactor.
