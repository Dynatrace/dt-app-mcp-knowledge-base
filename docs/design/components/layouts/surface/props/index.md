Use the `Surface` component to structure and visually separate content on a page, or to create floating overlays such as menus, selects, and modals.

**`SurfaceProps`**

```ts
export declare type SurfaceProps<E extends ElementType> = PolymorphicComponentProps<E, SurfaceOwnProps>;
```

**`SurfaceOwnProps`**

| Prop        | Type                                                             | Default     | Description                                                                              |
| ----------- | ---------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `color`     | `'neutral' \| 'primary' \| 'success' \| 'critical' \| 'warning'` | `'neutral'` | Color of the border when the surface has focus or is selected.                           |
| `selected`  | `boolean`                                                        | `false`     | Defines if the surface is selected and should indicate that state with a border.         |
| `dragged`   | `boolean`                                                        | `false`     | Indicates if the surface is currently dragged and then applies the corresponding styles. |
| `elevation` | `'flat' \| 'raised' \| 'floating'`                               | `'flat'`    | Defines the surface's elevation to the background.                                       |
