## Set content width

You can set the width of the content by adding the `width` prop on the `Select.Content` component and giving it a fixed value. By default, it has a min-width of 96px and adjusts to the size of the trigger. If the text of the options is overflowing, the text is truncated at the end by default. However, you can also add the `TextEllipsis` component directly inside the `Select.Option` and wrap the text inside it to set the truncation to the start or middle, if necessary. See [the TextEllipsis documentation](https://developer.dynatrace.com/design/components/typography/TextEllipsis.md) for more details.

**ContentWidth**

```tsx
import { Select } from '@dynatrace/strato-components/forms';
import { TextEllipsis } from '@dynatrace/strato-components/typography';

const ContentWidth = () => {
  return (
    <Select>
      <Select.Trigger />
      <Select.Content
        // highlight-next-line
        width="125px"
      >
        <Select.Option value="dashboards">Dashboards</Select.Option>
        <Select.Option value="notebooks">Notebooks</Select.Option>
        <Select.Option value="Analyzers">
          <TextEllipsis truncationMode="start">Data analyzers</TextEllipsis>
        </Select.Option>
        <Select.Option value="hub">Hub</Select.Option>
      </Select.Content>
    </Select>
  );
};
```
