Use the `FeatureHighlight` to introduce new features to users or guide new users through key functionality, positioned next to the relevant interface element.

**`FeatureHighlightProps`**

| Prop                 | Type                        | Default          | Description                                                                                   |
| -------------------- | --------------------------- | ---------------- | --------------------------------------------------------------------------------------------- |
| `open` (required)    | `boolean`                   |                  | Whether the FeatureHighlight is currently shown or not. Has to be controlled by the consumer. |
| `anchor` (required)  | `HTMLElement \| null`       |                  | The element the popover is referring to (i.e. where the pointer is pointing to).              |
| `placement`          | `FeatureHighlightPlacement` | `'right-bottom'` | Placement of the FeatureHighlight.                                                            |
| `onClose` (required) | `() => void`                |                  | Callback fired when closing the FeatureHighlight.                                             |
