## What's changing

You add a small `usePageTitle` hook to your project and call it from each routed page. The app shell composes the rest of the tab title (app name, tenant, "Dynatrace") around the part you set. One thing to watch: only set a title for views with a **persistent URL** — updating it for transient overlays or modals confuses the browser's back/forward history.

The [Page titles guide](pathname:///develop/guides/navigation/page-titles/) has the full walkthrough, including the hook itself and how to set titles for widgets.
