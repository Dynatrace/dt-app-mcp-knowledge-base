The `InformationOverlay` provides additional information via an overlay, the position of which can be adjusted. According to the type of information, the `variant` can be set. The trigger consists of an icon and an optional text. By default, the `variant` is `neutral` and the overlay is positioned on the bottom.

**`InformationOverlayProps`**

```ts
export declare type InformationOverlayProps = InformationOverlayBaseProps & (InformationOverlayUncontrolledProps | InformationOverlayControlledProps);
```

**`InformationOverlayBaseProps`**

| Prop        | Type                                                             | Default                             | Description                                                                                                                                                                    |
| ----------- | ---------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `placement` | `basePlacementsType`                                             | `'bottom'`                          | The preferred placement for the overlay if there is enough space. If the preferred placement is not possible, the overlay will be positioned according to the available space. |
| `color`     | `'neutral' \| 'primary' \| 'success' \| 'warning' \| 'critical'` | `'neutral' or a container's color.` | Controls the color of the styling and the trigger icon.                                                                                                                        |

**`InformationOverlayControlledProps`**

| Prop                      | Type                        | Default | Description                                                                     |
| ------------------------- | --------------------------- | ------- | ------------------------------------------------------------------------------- |
| `defaultOpen`             | `never`                     |         | Determines whether the overlay is initially opened in an uncontrolled scenario. |
| `open` (required)         | `boolean`                   |         | Determines whether the overlay is open in a controlled scenario.                |
| `onOpenChange` (required) | `(isOpen: boolean) => void` |         | Callback fired when the open attribute changes in a controlled scenario.        |

**`InformationOverlayUncontrolledProps`**

| Prop           | Type      | Default | Description                                                                     |
| -------------- | --------- | ------- | ------------------------------------------------------------------------------- |
| `defaultOpen`  | `boolean` | `false` | Determines whether the overlay is initially opened in an uncontrolled scenario. |
| `open`         | `never`   |         | Determines whether the overlay is open in a controlled scenario.                |
| `onOpenChange` | `never`   |         | Callback fired when the open attribute changes in a controlled scenario.        |
