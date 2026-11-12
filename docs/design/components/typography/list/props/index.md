The `List` component groups a set of related content in a list and can be arbitrarily nested. List items are preceded by either a consecutive number (for ordered lists) or a bullet point (for unordered lists).

**`ListProps`**

| Prop        | Type                                                           | Default  | Description                                                                                                       |
| ----------- | -------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `ordered`   | `TOrdered`                                                     | `false`  | Whether the List is ordered or not. This changes whether numbers or bullets are used.                             |
| `textStyle` | `'base' \| 'base-emphasized' \| 'small' \| 'small-emphasized'` | `'base'` | Sets the text style for the List.                                                                                 |
| `fontStyle` | `'text' \| 'code'`                                             | `'text'` | Sets the text style for the List.                                                                                 |
| `start`     | `number`                                                       | `1`      | Sets the starting number of the first item in an ordered list. The value is always treated as an integer (floor). |
