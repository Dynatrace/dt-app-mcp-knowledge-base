## Page titles in Recents

The **Recents** action in the Dock lists the pages users recently visited. The page title you set also labels your app's entries there:

- **One entry per page path**—**Recents** records one entry per app ID and URL pathname. It ignores query parameters and hash fragments, so views that differ only in those share a single entry.
- **Label**—the entry shows the page title. If a page doesn't set a title, the entry keeps the last title set in the same app, or shows the app name.
- **Redirects on load**—if your app redirects on load with `replaceState`, for example from the app root to a default view, **Recents** records only the destination page. A redirect with `pushState` records both pages.

To give a view its own Recents entry, give it its own pathname. For more information, see [URL sharing and navigation](https://public-developer.central.internal.dynatrace.com/develop/guides/navigation/url-sharing.md).
