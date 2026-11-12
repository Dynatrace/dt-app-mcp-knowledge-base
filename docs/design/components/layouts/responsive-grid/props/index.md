A responsive grid that wraps the [Grid](https://developer.dynatrace.com/design/components/layouts/Grid.md) component and lets you define the number of columns per pre-defined breakpoints, measured against the grid's own width with CSS container queries.

If the column count does not need to change with the width, use `Grid`.

More information about [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries).

**`ResponsiveGridProps`**

```ts
export declare type ResponsiveGridProps<E extends ElementType> = PolymorphicComponentProps<E, ResponsiveGridOwnProps>;
```

**`ResponsiveGridOwnProps`**

| Prop                 | Type                    | Default | Description                                     |
| -------------------- | ----------------------- | ------- | ----------------------------------------------- |
| `columns` (required) | `ResponsiveGridColumns` |         | Column count or track list per container width. |

**`ResponsiveGridColumns`**

| Prop   | Type               | Default         | Description             |
| ------ | ------------------ | --------------- | ----------------------- |
| `0`    | `number \| string` | `1`             | Columns at any width.   |
| `400`  | `number \| string` | `value of 0`    | Columns from 400px up.  |
| `600`  | `number \| string` | `value of 400`  | Columns from 600px up.  |
| `800`  | `number \| string` | `value of 600`  | Columns from 800px up.  |
| `1000` | `number \| string` | `value of 800`  | Columns from 1000px up. |
| `1200` | `number \| string` | `value of 1000` | Columns from 1200px up. |
