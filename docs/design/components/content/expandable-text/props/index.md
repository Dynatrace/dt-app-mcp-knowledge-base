The `ExpandableText` component provides expand and collapse functionality for inline text.

**`ExpandableTextProps`**

```ts
export declare type ExpandableTextProps = ExpandableTextBaseProps & (ExpandableTextControlledProps | ExpandableTextUncontrolledProps);
```

**`ExpandableTextBaseProps`**

| Prop            | Type        | Default       | Description                            |
| --------------- | ----------- | ------------- | -------------------------------------- |
| `expandLabel`   | `ReactNode` | `'Show more'` | Text shown for expanding the content.  |
| `collapseLabel` | `ReactNode` | `'Show less'` | Text shown for collapsing the content. |

**`ExpandableTextControlledProps`**

| Prop                        | Type                          | Default | Description                                                                              |
| --------------------------- | ----------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| `defaultExpanded`           | `never`                       |         | Determines whether or not the content is initially expanded in an uncontrolled scenario. |
| `expanded` (required)       | `boolean`                     |         | Determines whether or not the content is expanded in a controlled scenario.              |
| `onExpandChange` (required) | `(expanded: boolean) => void` |         | Callback fired when the expanded attribute changes in a controlled scenario.             |

**`ExpandableTextUncontrolledProps`**

| Prop              | Type      | Default | Description                                                                              |
| ----------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `defaultExpanded` | `boolean` | `false` | Determines whether or not the content is initially expanded in an uncontrolled scenario. |
| `expanded`        | `never`   |         | Determines whether or not the content is expanded in a controlled scenario.              |
| `onExpandChange`  | `never`   |         | Callback fired when the expanded attribute changes in a controlled scenario.             |
