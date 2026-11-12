Code splitting breaks an app into smaller chunks so only the necessary code is loaded initially, reducing the upfront bundle size. Lazy loading then delays loading those chunks until they're actually needed, delivering the real performance gains by fetching code on demand.

When a user opens your app, the browser first downloads and parses `main.js`, the primary JavaScript bundle, before anything appears on screen. In large apps, this bundle can grow to several megabytes, causing slow initial load times. Keeping `main.js` below 1 MB is a good target; the smaller it is, the faster your app starts.

:::note Lazy loading concepts
Here are the essential steps to enable code splitting in your Dynatrace app. For a more thorough explanation, see [Understand lazy loading](https://developer.dynatrace.com/develop/guides/code-optimization/lazy-loading.md).
:::
