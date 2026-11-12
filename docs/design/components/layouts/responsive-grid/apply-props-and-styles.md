## Apply props and styles

The `ResponsiveGrid` component renders a wrapper around the grid element. The grid container properties apply to the grid element. Everything else applies to the wrapper: `className`, `style`, `as`, `ref`, `id`, ARIA attributes, event handlers, and the spacing, sizing, and placement props.

The grid element is always a `div`, so `as` changes only the wrapper. For example, `as="ul"` with `li` children results in invalid markup.

Rules in `className` or `style` that set grid container properties, such as `gap` or `grid-template-rows`, don't reach the grid element. Use the props instead. Selectors for direct children, such as `.cards > *`, match the grid element, not the grid items.
