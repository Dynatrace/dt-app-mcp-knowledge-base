Use the `Text` component for text that is rendered without any semantic markup.

**`TextProps`**

```ts
export declare type TextProps<E extends ElementType> = PolymorphicComponentProps<E, TextOwnProps>;
```

**`TextOwnProps`**

| Prop        | Type                                                           | Default | Description                                                           |
| ----------- | -------------------------------------------------------------- | ------- | --------------------------------------------------------------------- |
| `textStyle` | `'base' \| 'base-emphasized' \| 'small' \| 'small-emphasized'` |         | Sets the text style. Variants include "base", "base-emphasized", etc. |
| `fontStyle` | `'text' \| 'code'`                                             |         | Sets the font style. Can either be "text" or "code"                   |
