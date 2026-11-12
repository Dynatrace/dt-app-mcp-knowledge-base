## Composable slots

The headline change is that slots are **composable**: `Header`, `Sidebar`, `Content`, and `Details` can live anywhere in your component tree—inside an `<Outlet />`, a `<Suspense>` boundary, or any wrapper—instead of having to be direct children. That's what makes it work cleanly with routers, where the layout frame and the routed content can own different slots. Beyond that, panel state is preserved across collapse and expand, the details panel can render side-by-side or as an overlay, and panels are responsive with their own breakpoints.
