Code splitting is about breaking your app into smaller bundles so you're not shipping everything upfront, while lazy loading is about delaying the loading of those bundles until they're actually needed. In practice, code splitting makes lazy loading possible, and lazy loading is how you get the real performance wins from those split chunks. Together, they keep initial loads fast and only download code when the user hits the feature that needs it.

The [App Toolkit](https://developer.dynatrace.com/quickstart/app-toolkit.md) now supports fine-grained asynchronous module loading via React's `lazy()` method and `Suspense` component. This allows you to split your app bundle into smaller chunks that are loaded on demand, reducing initial load times, improving time-to-interactive, and keeping your Core Web Vitals in check. Core Web Vitals are Google's metrics for measuring real-world user experience:

- LCP (Largest Contentful Paint)—measures loading performance. It marks when the largest visible element such as an image, text block, or video finishes rendering.

- INP (Interaction to Next Paint)—measures interactivity and responsiveness. It tracks the delay between a user interaction such as a click, tap, or key press and the next visual update.

- CLS (Cumulative Layout Shift)—measures visual stability. It scores how much page elements unexpectedly shift during the page's lifetime. For example, an image loads and pushes content down.

:::note Kick off lazy loading on your Dynatrace app
To learn how to enable code splitting in your Dynatrace app, see [Lazy loading quickstart](https://developer.dynatrace.com/develop/guides/code-optimization/lazy-loading-quickstart.md).
:::
