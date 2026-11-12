## Filter controls

Configure filter controls in `FilterBar` to be pinned, optional, or pinned-optional.

![Examples of filter controls in the FilterBar component with different defaultPinnedState property values.](https://developer.dynatrace.com/assets/images/filterbar-filter-pinning-light-6a1596577ddcc4bf49836c1b0fe0e9cf.webp)

### Pinned

- Pinned filter controls are always visible and can't be removed.
- Use pinned for controls relevant to most users regardless of the task they want to perform. For example, use pinned for a keyword search.

### Optional

- Optional filter controls are hidden by default. Users can enable them in the **Add filters** dropdown.
- Use optional controls for advanced filters or complementary controls. Hiding them by default saves space and avoids overwhelming users.

### Pinned-optional

- Pinned-optional filter controls are visible by default. Users can hide them in the **Add filters** dropdown.
- Use pinned-optional for controls where user needs vary by task or persona, but provide a good set of defaults.

### Use of TimeframeSelector

If you use `TimeframeSelector` as a filter control in `FilterBar`, pin it so it's always visible.
