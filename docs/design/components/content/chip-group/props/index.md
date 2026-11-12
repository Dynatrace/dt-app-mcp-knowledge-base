Use the `ChipGroup` to group multiple `Chip` components in an expandable container.

**`ChipGroupProps`**

```ts
export declare type ChipGroupProps = ChipGroupBaseProps & (ChipGroupControlledProps | ChipGroupUncontrolledProps) & WithChildren;
```

**`ChipGroupBaseProps`**

| Prop               | Type                       | Default   | Description                                                                                                                                                                                                                                                                                                     |
| ------------------ | -------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`         | `boolean`                  | `false`   | Whether the chip group is disabled. If set to true, all the chips inside the group are disabled, unless explicitly overridden.                                                                                                                                                                                  |
| `size`             | `ChipOwnProps['size']`     | `default` | The size of the spacing and chips in the group. All the chips match the size of the group, but can be overridden individually.                                                                                                                                                                                  |
| `onExpandedChange` | `(state: boolean) => void` |           | Callback triggered when the expanded state changes.                                                                                                                                                                                                                                                             |
| `maxVisibleChips`  | `'auto' \| number`         | `'auto'`  | Maximum number of chips rendered before the "Show more" control. If set to 'auto', the chip group automatically determines how many chips can fit based on the available width. If a number is provided, it limits the visible chips to that number when the group is collapsed, regardless of available space. |

**`ChipGroupControlledProps`**

| Prop              | Type      | Default | Description                                    |
| ----------------- | --------- | ------- | ---------------------------------------------- |
| `expanded`        | `boolean` |         | Whether the chip group is expanded.            |
| `defaultExpanded` | `never`   |         | Whether the chip group is expanded by default. |

**`ChipGroupUncontrolledProps`**

| Prop              | Type      | Default | Description                                    |
| ----------------- | --------- | ------- | ---------------------------------------------- |
| `expanded`        | `never`   |         | Whether the chip group is expanded.            |
| `defaultExpanded` | `boolean` |         | Whether the chip group is expanded by default. |
