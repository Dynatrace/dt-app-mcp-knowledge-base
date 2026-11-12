Use the `Container` to group related content and establish visual hierarchy through different levels of emphasis and semantic color.

**`ContainerProps`**

```ts
export declare type ContainerProps<E extends ElementType> = PolymorphicComponentProps<E, ContainerOwnProps>;
```

**`ContainerOwnProps`**

| Prop      | Type                                                             | Default     | Description                                                                                      |
| --------- | ---------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `variant` | `'minimal' \| 'default' \| 'emphasized' \| 'accent'`             | `'default'` | The visual style of the container.                                                               |
| `color`   | `'primary' \| 'neutral' \| 'success' \| 'warning' \| 'critical'` | `'neutral'` | The color of the container. This should be chosen based on the context the container is used in. |

**`SpacingProps`**

| Prop            | Type                | Default | Description                         |
| --------------- | ------------------- | ------- | ----------------------------------- |
| `padding`       | `SpacingProperties` |         | Defines CSS padding property        |
| `p`             | `SpacingProperties` |         | Defines CSS padding property        |
| `paddingX`      | `SpacingProperties` |         | Defines CSS x padding property      |
| `px`            | `SpacingProperties` |         | Defines CSS x padding property      |
| `paddingY`      | `SpacingProperties` |         | Defines CSS y padding property      |
| `py`            | `SpacingProperties` |         | Defines CSS y padding property      |
| `paddingTop`    | `SpacingProperties` |         | Defines CSS top padding property    |
| `pt`            | `SpacingProperties` |         | Defines CSS top padding property    |
| `paddingRight`  | `SpacingProperties` |         | Defines CSS right padding property  |
| `pr`            | `SpacingProperties` |         | Defines CSS right padding property  |
| `paddingBottom` | `SpacingProperties` |         | Defines CSS bottom padding property |
| `pb`            | `SpacingProperties` |         | Defines CSS bottom padding property |
| `paddingLeft`   | `SpacingProperties` |         | Defines CSS left padding property   |
| `pl`            | `SpacingProperties` |         | Defines CSS left padding property   |
| `margin`        | `MarginProperties`  |         | Defines CSS margin property         |
| `m`             | `MarginProperties`  |         | Defines CSS margin property         |
| `marginX`       | `MarginProperties`  |         | Defines CSS x margin property       |
| `mx`            | `MarginProperties`  |         | Defines CSS x margin property       |
| `marginY`       | `MarginProperties`  |         | Defines CSS y margin property       |
| `my`            | `MarginProperties`  |         | Definesy CSS margin property        |
| `marginTop`     | `MarginProperties`  |         | Defines CSS top margin property     |
| `mt`            | `MarginProperties`  |         | Defines CSS top margin property     |
| `marginRight`   | `MarginProperties`  |         | Defines CSS right margin property   |
| `mr`            | `MarginProperties`  |         | Defines CSS right margin property   |
| `marginBottom`  | `MarginProperties`  |         | Defines CSS bottom margin property  |
| `mb`            | `MarginProperties`  |         | Defines bottom margin property      |
| `marginLeft`    | `MarginProperties`  |         | Defines CSS left margin property    |
| `ml`            | `MarginProperties`  |         | Defines CSS left margin property    |

**`LayoutSizeProps`**

| Prop        | Type                         | Default | Description             |
| ----------- | ---------------------------- | ------- | ----------------------- |
| `width`     | `CSSProperties['width']`     |         | CSS width property      |
| `minWidth`  | `CSSProperties['minWidth']`  |         | CSS min width property  |
| `maxWidth`  | `CSSProperties['maxWidth']`  |         | CSS max width property  |
| `height`    | `CSSProperties['height']`    |         | CSS height property     |
| `minHeight` | `CSSProperties['minHeight']` |         | CSS min height property |
| `maxHeight` | `CSSProperties['maxHeight']` |         | CSS max height property |
