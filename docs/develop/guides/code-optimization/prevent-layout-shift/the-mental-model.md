## The mental model

:::tip Every piece of async content needs a container that's the right size before the content arrives.
:::

CLS prevention means:

- Skeletons that match the height and layout of the resolved component
- `minHeight` on containers that will receive async data
- Fixed-height scroll containers for tables
- SWR caching (`staleTime`, `placeholderData`) to avoid loading states on revisits entirely
- Overlays instead of flow-inserted notifications
- Reserved space for validation messages

If you can look at your component and predict its layout before any data loads, your CLS is probably fine. If the layout depends on the shape or amount of data, you need explicit sizing.
