Use `Tabs` to organize related content into distinct views that users navigate one at a time. Selecting a tab replaces the entire content area.

**`TabsProps`**

```ts
export declare type TabsProps = TabsBaseProps & (TabsControlledProps | TabsUncontrolledProps);
```

**`TabsBaseProps`**

| Prop                  | Type                     | Default | Description                                                                                                             |
| --------------------- | ------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `disabled`            | `boolean`                | `false` | Whether the whole tab group is disabled.                                                                                |
| `id`                  | `string`                 |         | The element's unique identifier. See [MDN]\(https\://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id). |
| `children` (required) | `ReactNode`              |         | The collection of tabs to display.                                                                                      |
| `panelOverflow`       | `'hidden' \| 'scroll-y'` |         | The overflow behavior of the tab panel.                                                                                 |

**`TabsControlledProps`**

| Prop                       | Type                              | Default | Description                                           |
| -------------------------- | --------------------------------- | ------- | ----------------------------------------------------- |
| `selectedIndex` (required) | `number`                          |         | The index of the selected tab.                        |
| `onChange` (required)      | `(selectedIndex: number) => void` |         | Handler that is called when the selected tab changes. |
| `defaultIndex`             | `never`                           |         | The default index of the selected tab.                |

**`TabsUncontrolledProps`**

| Prop            | Type     | Default | Description                                           |
| --------------- | -------- | ------- | ----------------------------------------------------- |
| `selectedIndex` | `never`  |         | The index of the selected tab.                        |
| `defaultIndex`  | `number` |         | The default index of the selected tab.                |
| `onChange`      | `never`  |         | Handler that is called when the selected tab changes. |
