The `Flex` component can be used to layout its children with Flexbox. The component can be customized with flexbox props.

More information about [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).

**`FlexProps`**

```ts
export declare type FlexProps<E extends ElementType> = PolymorphicComponentProps<E, FlexOwnProps>;
```

**`FlexOwnProps`**

```ts
export declare type FlexOwnProps = WithChildren & StylingProps & FlexStyleProps & DataTestId & MaskingProps & BehaviorTrackingProps;
```

**`FlexStyleProps`**

| Prop              | Type                               | Default | Description               |
| ----------------- | ---------------------------------- | ------- | ------------------------- |
| `order`           | `CSSProperties['order']`           |         | Defines order             |
| `flexGrow`        | `CSSProperties['flexGrow']`        |         | Defines flex grow         |
| `flexShrink`      | `CSSProperties['flexShrink']`      |         | Defines flex shrink       |
| `flexBasis`       | `CSSProperties['flexBasis']`       |         | Defines flex basis        |
| `flex`            | `CSSProperties['flex']`            |         | Defines flex              |
| `flexDirection`   | `CSSProperties['flexDirection']`   |         | Defines flex direction    |
| `flexWrap`        | `CSSProperties['flexWrap']`        |         | Defines flex wrap         |
| `flexFlow`        | `CSSProperties['flexFlow']`        |         | Defines flex flow         |
| `gridColumnStart` | `CSSProperties['gridColumnStart']` |         | Defines grid column start |
| `gridColumnEnd`   | `CSSProperties['gridColumnEnd']`   |         | Defines grid column end   |
| `gridRowStart`    | `CSSProperties['gridRowStart']`    |         | Defines grid row start    |
| `gridRowEnd`      | `CSSProperties['gridRowEnd']`      |         | Defines grid row end      |
| `gridColumn`      | `CSSProperties['gridColumn']`      |         | Defines grid column       |
| `gridRow`         | `CSSProperties['gridRow']`         |         | Defines grid row          |
| `gridArea`        | `CSSProperties['gridArea']`        |         | Defines grid area         |

**`GridFlexPositionProps`**

| Prop             | Type                          | Default | Description               |
| ---------------- | ----------------------------- | ------- | ------------------------- |
| `justifySelf`    | `JustifySelfPositionProps`    |         | justify self positions    |
| `alignSelf`      | `AlignSelfPositionProps`      |         | align self positions      |
| `placeSelf`      | `PlaceSelfPositionProps`      |         | place self positions      |
| `justifyItems`   | `JustifyItemsPositionProps`   |         | justify items positions   |
| `alignItems`     | `AlignItemsPositionProps`     |         | align items positions     |
| `placeItems`     | `PlaceItemsPositionProps`     |         | place items positions     |
| `justifyContent` | `JustifyContentPositionProps` |         | justify content positions |
| `alignContent`   | `AlignContentPositionProps`   |         | align content positions   |
| `placeContent`   | `PlaceContentPositionProps`   |         | place content positions   |

**`GapProps`**

| Prop        | Type                | Default | Description        |
| ----------- | ------------------- | ------- | ------------------ |
| `gap`       | `SpacingProperties` |         | Defines gap        |
| `rowGap`    | `SpacingProperties` |         | Defines row gap    |
| `columnGap` | `SpacingProperties` |         | Defines column gap |

**`LayoutSizeProps`**

| Prop        | Type                         | Default | Description             |
| ----------- | ---------------------------- | ------- | ----------------------- |
| `width`     | `CSSProperties['width']`     |         | CSS width property      |
| `minWidth`  | `CSSProperties['minWidth']`  |         | CSS min width property  |
| `maxWidth`  | `CSSProperties['maxWidth']`  |         | CSS max width property  |
| `height`    | `CSSProperties['height']`    |         | CSS height property     |
| `minHeight` | `CSSProperties['minHeight']` |         | CSS min height property |
| `maxHeight` | `CSSProperties['maxHeight']` |         | CSS max height property |

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

**`FlexItemStyleProps`**

| Prop       | Type      | Default | Description                                                                               |
| ---------- | --------- | ------- | ----------------------------------------------------------------------------------------- |
| `flexItem` | `boolean` |         | Determines whether this is a flex item. If true, display: 'flex' style will not be added. |
