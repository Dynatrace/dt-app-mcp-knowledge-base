## Collapse handling

The open/closed state of a details panel depends on what the user wants to see, not on the size of the window. The details panel stays where it's put across viewports and is never auto-collapsed by the breakpoint. Below the breakpoint, an open panel becomes an open drawer.

- To open the panel programmatically, derive a controlled `collapsed` from your selection state: open on select, close on deselect.
- To keep it closed on small screens, set `defaultCollapsed` or control `collapsed` and update it from `onBreakpointTransition`.
