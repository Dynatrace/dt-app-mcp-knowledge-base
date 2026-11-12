Use the `TextEllipsis` component to truncate text and show an ellipsis whenever there is insufficient space to render the entire text. While some of our Strato components provide ellipsis out of the box, you need to take care of this yourself when writing your own components.

**`TextEllipsisProps`**

| Prop                  | Type                            | Default | Description                                                                              |
| --------------------- | ------------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| `children` (required) | `string`                        |         | The children (as text) passed to the component.                                          |
| `truncationMode`      | `TruncationMode`                | `'end'` | The mode used for truncating the text, either at the start, in the middle or at the end. |
| `onTextOverflow`      | `(ellipsized: boolean) => void` |         | Gets called when text needs to get truncated due to lack of horizontal space.            |
