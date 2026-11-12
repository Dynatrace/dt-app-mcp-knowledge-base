## Lazy loading: ship less upfront

By default, an app bundles every page and component into one download, even the ones the user never opens. Lazy loading splits that bundle into chunks that load on demand, using React's `lazy()` and `<Suspense>`. The App Toolkit now supports this out of the box.

The highest-impact, lowest-risk place to start is the route level: load only the page the user navigates to. From there, you can defer in-page views that sit behind an interaction (tabs, drawers, modals), and even fire a Grail query while the browser is still downloading the component that will render it. The guide also covers where **not** to split: anything above the fold, or smaller than \~20–30 KB, usually isn't worth a separate chunk.

> **Tip**
>
> Read about how to [Understand lazy loading](pathname:///develop/guides/code-optimization/lazy-loading/).
