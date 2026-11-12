## Implementation

### Send an add-on intent example

![Send an add-on intent using the 'Upload Image' action](https://developer.dynatrace.com/assets/images/send-addon-intent-with-response-609ec37a6c26622cf20d81285e831999.gif)

Once the upload modal closes, the add-on returns the selected image path as the intent response to the source app.

### Receive add-on intents in apps

You can receive add-on intents in apps. Learn more about receiving an intent in the [Receive intents guide](https://developer.dynatrace.com/develop/guides/navigation/intents/receive-intents.md).

App developers can specify which intents their apps can handle in the add-on mode by setting the `addonMode` property in the intent declaration in the app manifest. Also, if an intent returns a value, this value needs to be declared as a `responseProperties` object.

### Add-on vs regular intents

If an intent returns a value, you need to declare it as add-on intent. In all other cases, you can go with this rule of thumb: If an action initialized with an intent is short-lived and has a well-defined start and end, you can implement it as an add-on intent.

#### Manifest declaration

```json testable-app-config-json
{
  "environmentUrl": "<Your-Environment-URL>",
  "app": {
    "id": "<Your-App-ID>",
    "name": "<Your-App-Name>",
    "description": "<Your-App-Description>",
    "version": "0.0.0",
    "scopes": [],
    "intents": {
      "add-query-to-dashboard": {
        "addonMode": "overlay",
        "description": "Add a query to a dashboard",
        "properties": {
          "dt.query": {
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        }
      },
      "pick-dashboard": {
        "addonMode": "overlay",
        "description": "Select existing dashboard or create a new one",
        "properties": {},
        "responseProperties": {
          "dt.document.id": {
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        }
      }
    }
    // highlight-end
  }
}
```

### App routing and splitting

#### App routing

An app receives add-on intents like regular intents. Learn more in [Intent app routes](https://developer.dynatrace.com/develop/guides/navigation/intents/receive-intents.md#receive-intent-payload).

```tsx title="ui/app/App.tsx"
// `Handling the add-on intent outside the main app UI`
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLayout } from '@dynatrace/strato-components/layouts';

export const App = () => {
  return (
    <Routes>
      <Route path="/intent/add-query-to-dashboard" element={<HandleAddQueryToDashboardIntent />} />
      <Route path="*" element={<MainApp />} />
    </Routes>
  );
};

const MainApp = () => {
  return (
    <PageLayout>
      <PageLayout.Header />
      <PageLayout.Content>
        <Routes>
          <Route path="/" element={'Home'} />
          <Route path="/intent/:intentId" element={<HandleIntent />} />
        </Routes>
      </PageLayout.Content>
    </PageLayout>
  );
};

const HandleAddQueryToDashboardIntent = () => {
  // handles the `add-query-to-dashboard` add-on intent outside the main app UI
  return null;
};

const HandleIntent = () => {
  // handles any other intent within the main app UI
  return null;
};
```

#### App route code splitting (optional)

You can split the app route code if you need to optimise the app bundle's size. Otherwise, this step isn't necessary.

> **Caution**
>
> If you use this option, you need to set up a plugin for esbuild. However, our code-splitting support is currently experimental.

```tsx title="ui/app/App.tsx" untestable
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const LazyHandlePickDashboardIntent = lazy(() =>
  import('./HandlePickDashboardIntent').then((m) => ({ default: m.HandlePickDashboardIntent })),
);
const LazyMainApp = lazy(() => import('./MainApp').then((m) => ({ default: m.MainApp })));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/intent/pick-dashboard"
        element={
          <Suspense fallback={'Loading...'}>
            <LazyHandlePickDashboardIntent />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={'Loading...'}>
            <LazyMainApp />
          </Suspense>
        }
      />
    </Routes>
  );
};
```

#### Add-on intent lifecycle

With the methods from the `@dynatrace-sdk/addons` package, you can control the add-on lifecycle:

- `resolveAddon()`: Closes the add-on modal and returns control to the source app that sent the intent.
- `resolveAddonWithResponse(response: Record<string, any>)`: Closes the add-on modal and passes the response object back to the app that has sent the intent-with-response.
- `resolveAddonWithNavigation(path: string)`: Closes the add-on modal and navigates from the app that sent the intent to the add-on app as the main app at the given path.
- `rejectAddon()`: closes the add-on modal and rejects the response promise of the app that has sent the intent-with-response.

```tsx title="ui/app/App.tsx"
import React from 'react';
import { rejectAddon, resolveAddon, resolveAddonWithNavigation, resolveAddonWithResponse } from '@dynatrace-sdk/addons';
import { Button } from '@dynatrace/strato-components/buttons';

export const App = () => {
  return (
    <>
      <Button onClick={rejectAddon}>Cancel</Button>
      <Button
        onClick={() => {
          // call a function responsible for adding a query to the dashboard here
          resolveAddon();
        }}
      >
        Add query to dashboard
      </Button>
      <Button onClick={() => resolveAddonWithResponse({ 'dt.document.id': 'my-dashboard-id' })}>Pick dashboard</Button>
      <Button onClick={() => resolveAddonWithNavigation('/dashboards')}>
        View all dashboards in the dashboards app
      </Button>
    </>
  );
};
```

#### Conditional UI

You may want to hide some parts of the app UI that are unrelated to the add-on functionality.
You can use the `getMode` SDK method to check if the app has started in add-on mode. Based on this, you can then choose not to render unnecessary UI elements.

```tsx title="ui/app/App.tsx"
import React from 'react';
import { getMode, rejectAddon, resolveAddonWithResponse } from '@dynatrace-sdk/addons';
import { Button } from '@dynatrace/strato-components/buttons';

export const App = () => {
  return (
    <>
      {getMode() === 'overlay' ? (
        <>
          <Button onClick={rejectAddon}>Cancel</Button>
          <Button onClick={() => resolveAddonWithResponse({ 'dt.document.id': 'my-dashboard-id' })}>
            Pick dashboard
          </Button>
        </>
      ) : null}
    </>
  );
};
```
