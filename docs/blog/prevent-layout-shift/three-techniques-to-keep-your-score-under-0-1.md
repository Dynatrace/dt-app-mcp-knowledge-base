## Three techniques to keep your score under 0.1

- **Match skeleton dimensions to real content**—a `<Skeleton />` that renders at 60px tall, followed by a `<DataTable />` at 500px tall, shifts 440px of content down the page. Wrapping the skeleton in a container with a matching `minHeight` reserves space, keeping the layout stable as data arrives.

- **Use `placeholderData` to preserve previous results when filters change**—TanStack Query can show the previous result while a fresh query runs in the background, avoiding a skeleton and the resulting shift.

- **Anchor dynamic notifications out of document flow**—banners and toasts injected into the block layout push content down. Rendering them in a fixed or absolute container or in a dedicated notification region prevents them from contributing to CLS.

> **Tip**
>
> Read the full guide at [Prevent layout shift in Dynatrace apps](pathname:///develop/guides/code-optimization/prevent-layout-shift/).
