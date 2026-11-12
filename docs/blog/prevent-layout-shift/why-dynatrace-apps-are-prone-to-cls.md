## Why Dynatrace apps are prone to CLS

Nearly every component fetches data from Grail via `useDql`. When results arrive, components grow from a skeleton or spinner to their full rendered size. If that size difference is significant, everything below the component shifts. CLS is not limited to the initial page load; shifts that occur later in the session, such as when an asynchronous query resolves, still count.
