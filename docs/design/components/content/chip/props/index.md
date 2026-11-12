Use the `Chip` to display compact labels that communicate the status, category, or condition of an item using semantic color and emphasis.

**`ChipProps`**

```ts
export declare type ChipProps<E extends ElementType> = PolymorphicComponentProps<E, ChipOwnProps>;
```

**`ChipOwnProps`**

| Prop       | Type                                                             | Default        | Description                                                                          |
| ---------- | ---------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------ |
| `color`    | `'neutral' \| 'primary' \| 'success' \| 'warning' \| 'critical'` | `'neutral'`    | The color of the component. This should be chosen based on the context it's used in. |
| `variant`  | `'accent' \| 'emphasized'`                                       | `'emphasized'` | Variant defining the visual representation of the component.                         |
| `disabled` | `boolean`                                                        | `false`        | Whether the component is disabled. If true, it cannot be interacted with.            |
| `size`     | `'default' \| 'condensed'`                                       | `'default'`    | The size of the component.                                                           |
