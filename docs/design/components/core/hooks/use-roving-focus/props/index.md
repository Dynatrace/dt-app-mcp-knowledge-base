The `useRovingFocus` hook applies a roving tab index to the children matching the given selector and enables you to navigate the elements using the arrow keys. Applying a roving tab index to a list of items enables you to efficiently navigate through the app, having a single tab-stop for a collection of items. Navigating back to the collection restores the focus to the item that has been focused when navigating away, enabling you to return to where you left off.

**`RovingFocusOptions`**

| Prop                        | Type                                   | Default    | Description                                                                                  |
| --------------------------- | -------------------------------------- | ---------- | -------------------------------------------------------------------------------------------- |
| `initialIndex`              | `number`                               | `0`        | Index of the item that should initially be set to tabIndex = 0.                              |
| `direction`                 | `'horizontal' \| 'vertical' \| 'both'` | `vertical` | The arrangement of the navigable items. Determines which arrow keys are used for navigation. |
| `loopFocus`                 | `boolean`                              | `true`     | Determines whether the elements should be loopable.                                          |
| `focusableChildrenSelector` | `string`                               | `*`        | The selector used to retrieve all the navigable children.                                    |
